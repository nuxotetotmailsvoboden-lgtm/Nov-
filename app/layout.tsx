import "./globals.css";
import type { Metadata } from "next";
import TelegramProvider from "@/components/TelegramProvider";

export const metadata: Metadata = {
  title: "NOVA",
  description: "Telegram Mini App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <TelegramProvider>
          {children}
        </TelegramProvider>
      </body>
    </html>
  );
}
