import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TOMIRIS MARKET",
  description: "Telegram Mini App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
