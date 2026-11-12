'use client';
import React, { useCallback, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import products from '../products';
import { cartStore } from '../lib/cartStore';

const CartContext = React.createContext(null);

export const SERVICE_COST = 0.5; // table service, per order
export const TAX_RATE = 0.08;

const round2 = (n) => Math.round(n * 100) / 100;

export const formatPrice = (value) => Number(value).toFixed(2);

const noopSubscribe = () => () => {};

/** False during server render and hydration, true once the client has taken over. */
export function useHydrated() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

export const CartProvider = ({ children }) => {
  const cartLines = useSyncExternalStore(
    cartStore.subscribe,
    cartStore.getSnapshot,
    cartStore.getServerSnapshot,
  );
  const hydrated = useHydrated();
  const [announcement, setAnnouncement] = useState('');
  const announceCount = useRef(0);

  const announce = useCallback((message) => {
    announceCount.current += 1;
    // Alternate a zero-width space so a repeated message is still announced.
    setAnnouncement(message + (announceCount.current % 2 ? '' : '​'));
  }, []);

  const setQuantity = useCallback(
    (productId, quantity) => {
      const next = Math.max(0, Math.min(quantity, 99));
      cartStore.update((prev) => {
        const lines = { ...prev };
        if (next === 0) delete lines[productId];
        else lines[productId] = next;
        return lines;
      });
      const name = products[productId]?.name ?? 'Item';
      announce(next === 0 ? `${name} removed from cart.` : `${name}: ${next} in cart.`);
    },
    [announce],
  );

  const increment = useCallback(
    (productId) => setQuantity(productId, (cartStore.getSnapshot()[productId] ?? 0) + 1),
    [setQuantity],
  );
  const decrement = useCallback(
    (productId) => setQuantity(productId, (cartStore.getSnapshot()[productId] ?? 0) - 1),
    [setQuantity],
  );
  const remove = useCallback((productId) => setQuantity(productId, 0), [setQuantity]);
  const reset = useCallback(() => cartStore.update(() => ({})), []);

  const totals = useMemo(() => {
    const ids = Object.keys(cartLines);
    const count = ids.reduce((acc, id) => acc + cartLines[id], 0);
    const subtotal = ids.reduce((acc, id) => acc + Number(products[id].price) * cartLines[id], 0);
    const service = count > 0 ? SERVICE_COST : 0;
    const tax = round2(subtotal * TAX_RATE);
    return { cartCount: count, subtotal, service, tax, total: round2(subtotal + service + tax) };
  }, [cartLines]);

  const value = useMemo(
    () => ({ cartLines, hydrated, increment, decrement, remove, setQuantity, reset, ...totals }),
    [cartLines, hydrated, increment, decrement, remove, setQuantity, reset, totals],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <div className="sr-only" role="status" aria-live="polite">
        {announcement}
      </div>
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
};
