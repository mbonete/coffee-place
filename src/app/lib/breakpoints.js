export const BREAKPOINTS = {
  mobile: 600,
  tablet: 1024,
  desktop: 1440,
}

export const QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.mobile}px)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tablet}px)`,
  desktopAndDown: `(max-width: ${BREAKPOINTS.desktop}px)`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.mobile + 1}px)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.tablet + 1}px)`,
  reducedMotion: `(prefers-reduced-motion: reduce)`,
}
