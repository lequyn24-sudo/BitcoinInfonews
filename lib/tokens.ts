export const colors = {
  void: "#0A0A0A",
  obsidian: "#111111",
  carbon: "#1A1A1A",
  graphite: "#242424",
  white: "#FFFFFF",
  mist: "#A0A0A0",
  slate: "#666666",
  amber: "#F7931A",
  green: "#00C896",
  red: "#FF4D4D",
  yellow: "#FFB800",
  blue: "#3B9EFF",
  border: "#2A2A2A",
} as const;

export const zIndex = {
  card: 10,
  sidebar: 20,
  progressBar: 30,
  floatingCard: 40,
  scrollIndicator: 50,
  tooltip: 60,
  dropdown: 70,
  search: 80,
  toast: 90,
  nav: 100,
  mobileNav: 110,
  modal: 200,
  alertBanner: 300,
} as const;

export const spacing = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "24px",
  6: "32px",
  7: "40px",
  8: "48px",
  10: "64px",
  12: "96px",
} as const;

export const radius = {
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px",
} as const;
