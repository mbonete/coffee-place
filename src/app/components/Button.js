'use client';
import styled, { css } from 'styled-components';

// action: house red, reserved for buying. ink: everything else that is a button.
const variants = {
  action: css`
    background: var(--house);
    color: #fff;
    border-color: var(--house);
    &:hover:not(:disabled) {
      background: var(--house-deep);
      border-color: var(--house-deep);
    }
  `,
  ink: css`
    background: var(--ink);
    color: var(--paper);
    border-color: var(--ink);
    &:hover:not(:disabled) {
      background: var(--paper);
      color: var(--ink);
    }
  `,
  paper: css`
    background: var(--paper);
    color: var(--ink);
    border-color: var(--ink);
    &:hover:not(:disabled) {
      background: var(--ink);
      color: var(--paper);
    }
  `,
};

const Button = styled.button.attrs((p) => ({ type: p.as ? undefined : (p.type ?? 'button') }))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: 48px;
  padding: 10px 22px;
  border: 2.5px solid;
  border-radius: 3px;
  font-family: var(--font-small), sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  width: ${(p) => (p.$fullWidth ? '100%' : 'auto')};
  transition:
    background-color var(--motion-fast) ease,
    color var(--motion-fast) ease,
    border-color var(--motion-fast) ease;

  ${(p) => variants[p.$variant ?? 'ink']}

  &:active:not(:disabled) { transform: translateY(1px); }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export default Button;
