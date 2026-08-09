import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "SpendDNA — Financial analytics from bank statements", description: "Discover the story behind every transaction." };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en" className="dark"><body>{children}</body></html>; }
