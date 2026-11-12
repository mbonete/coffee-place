// The cart lives outside React so it can persist to localStorage and stay in sync across tabs.
// Components read it through useSyncExternalStore (see hooks/useCart.js).
import products from '../products';

const STORAGE_KEY = 'the-coffee-place:cart:v2';
const EMPTY = Object.freeze({});

let state = null; // loaded lazily on the client
const listeners = new Set();

function sanitize(value) {
  if (!value || typeof value !== 'object') return EMPTY;
  return Object.fromEntries(
    Object.entries(value).filter(
      ([id, qty]) => products[id] && Number.isInteger(qty) && qty > 0 && qty < 100,
    ),
  );
}

function read() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? sanitize(JSON.parse(raw)) : EMPTY;
  } catch {
    return EMPTY;
  }
}

function write(next) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage can be unavailable (private mode, blocked site data); the cart still works in memory.
  }
}

function emit() {
  listeners.forEach((listener) => listener());
}

function onStorage(event) {
  if (event.key !== STORAGE_KEY) return;
  state = read();
  emit();
}

export const cartStore = {
  subscribe(listener) {
    listeners.add(listener);
    if (listeners.size === 1) window.addEventListener('storage', onStorage);
    return () => {
      listeners.delete(listener);
      if (listeners.size === 0) window.removeEventListener('storage', onStorage);
    };
  },
  getSnapshot() {
    if (state === null) state = read();
    return state;
  },
  getServerSnapshot() {
    return EMPTY;
  },
  update(updater) {
    state = updater(cartStore.getSnapshot());
    write(state);
    emit();
  },
};
