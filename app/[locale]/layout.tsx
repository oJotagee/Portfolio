import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Geist } from "next/font/google";
import AppLoader from "./components/AppLoader";
import "../globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "pt" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${geist.variable} scroll-smooth dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-zinc-950 font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <AppLoader />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
