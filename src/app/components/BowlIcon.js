// A sugar bowl with its lid, drawn to match the 2px stroke of the feather icon set.
export default function BowlIcon({ size = 24, strokeWidth = 2, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12 4.5v2" />
      <path d="M6 9.5c0-1.9 2.7-3 6-3s6 1.1 6 3" />
      <path d="M3.5 9.5h17" />
      <path d="M4.5 9.5c.4 5 3.4 8.5 7.5 8.5s7.1-3.5 7.5-8.5" />
      <path d="M8.5 20.5h7" />
    </svg>
  );
}
