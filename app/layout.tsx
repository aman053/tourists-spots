import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Hidgreen — Hidden places, greener journeys", description: "Discover the quieter, lesser-known places and local stories of Kerala.", manifest: "/manifest.webmanifest", appleWebApp: { capable: true, statusBarStyle: "default", title: "Hidgreen" } };
export const viewport: Viewport = { themeColor: "#0B5F51", width: "device-width", initialScale: 1 };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
