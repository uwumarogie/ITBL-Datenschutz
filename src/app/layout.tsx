import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MessageProvider } from "@/services/notfication/message-provider";
import NotificationsProvider from "@/services/notfication/notifications-provider";
import React from "react";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SafeSpace",
  description: "Sicher unterwegs in sozialen Medien",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <MessageProvider>
            <NotificationsProvider>{children}</NotificationsProvider>
          </MessageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
