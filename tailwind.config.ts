import type { Config } from "tailwindcss";
const config: Config = { darkMode: "class", content: ["./src/**/*.{ts,tsx}"], theme: { extend: { colors: { background: "hsl(var(--background))", foreground: "hsl(var(--foreground))", muted: "hsl(var(--muted))", border: "hsl(var(--border))", primary: "hsl(var(--primary))" }, boxShadow: { glow: "0 0 80px rgba(34,211,238,.18)" } } }, plugins: [] };
export default config;
