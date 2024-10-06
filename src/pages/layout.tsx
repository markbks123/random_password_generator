import type { Metadata } from "next";
import localFont from "next/font/local";
import styles from "../styles/globals.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
