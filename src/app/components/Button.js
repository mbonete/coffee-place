'use client';
import styled, { css } from 'styled-components';

const variantStyles = {
  primary: css`
    background: var(--ink);
    color: var(--bone);
    border-color: var(--ink);
    &:hover:not(:disabled) {
      background: var(--accent);
      color: var(--accent-ink);
      border-color: var(--ink);
    }
  `,
  secondary: css`
    background: var(--bone);
    color: var(--ink);
    border-color: var(--ink);
    &:hover:not(:disabled) {
      background: var(--ink);
      color: var(--bone);
    }
  `,
  ghost: css`
    background: transparent;
    color: var(--ink);
    border-color: transparent;
    padding-inline: 0;
    &:hover:not(:disabled) {
      color: var(--ink);
      box-shadow: inset 0 -2px 0 0 var(--accent);
    }
  `,
  marked: css`
    background: var(--accent);
    color: var(--accent-ink);
    border-color: var(--ink);
    cursor: default;
  `,
}

const sizeStyles = {
  sm: css`
    padding: 6px 10px;
    font-size: 0.75rem;
  `,
  md: css`
    padding: 10px 16px;
    font-size: 0.8125rem;
  `,
  lg: css`
    padding: 14px 22px;
    font-size: 0.875rem;
  `,
}

const Button = styled.button.attrs((props) => ({
  type: props.type ?? 'button',
}))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-mono), ui-monospace, monospace;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: var(--rule-w-2) solid var(--ink);
  border-radius: var(--radius-0);
  cursor: pointer;
  width: ${(p) => (p.$fullWidth ? '100%' : 'auto')};
  text-decoration: none;
  white-space: nowrap;
  transition:
    background-color var(--motion) var(--easing),
    color var(--motion) var(--easing),
    border-color var(--motion) var(--easing),
    transform var(--motion-fast) var(--easing);

  ${(p) => sizeStyles[p.$size ?? 'md']}
  ${(p) => variantStyles[p.$variant ?? 'primary']}

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export default Button;
