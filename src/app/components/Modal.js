'use client';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function Modal({ open, onClose, title, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => onClose?.();
    const handleClick = (e) => { if (e.target === dialog) onClose?.(); };
    dialog.addEventListener('close', handleClose);
    dialog.addEventListener('click', handleClick);
    return () => {
      dialog.removeEventListener('close', handleClose);
      dialog.removeEventListener('click', handleClick);
    };
  }, [onClose]);

  return (
    <Dialog ref={dialogRef} aria-labelledby="modal-title">
      <Inner>
        <Header>
          <Marker>※</Marker>
          {title && <Title id="modal-title">{title}</Title>}
          <CloseButton type="button" onClick={() => onClose?.()} aria-label="Close dialog">
            [ CLOSE ]
          </CloseButton>
        </Header>
        <Rule />
        <Body>{children}</Body>
      </Inner>
    </Dialog>
  )
}

const Dialog = styled.dialog`
  border: var(--rule-w-2) solid var(--ink);
  padding: 0;
  background: var(--bone);
  color: var(--ink);
  max-width: 520px;
  width: calc(100% - var(--space-8));
  animation: modalIn var(--motion) var(--easing);

  @keyframes modalIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  &::backdrop {
    background: hsl(0 0% 0% / 0.55);
  }
`;

const Inner = styled.div`
  padding: var(--space-6) var(--space-6) var(--space-6);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
`;

const Marker = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 0.875rem;
  color: var(--ink);
`;

const Title = styled.h2`
  flex: 1;
  font-family: var(--font-display), serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin: 0;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  cursor: pointer;
  padding: 6px 8px;

  &:hover { color: var(--ink); box-shadow: inset 0 -2px 0 0 var(--accent); }
`;

const Rule = styled.hr`
  border: 0;
  border-top: var(--rule-w) solid var(--ink);
  margin-bottom: var(--space-4);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  font-family: var(--font-body), sans-serif;
  font-size: 0.9375rem;
  line-height: 1.6;
`;
