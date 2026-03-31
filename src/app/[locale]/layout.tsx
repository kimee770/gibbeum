import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ConsultationModalProvider } from "@/context/ConsultationModalContext";
import ConsultationModal from "@/components/ConsultationModal";
import ShareButton from "@/components/ShareButton";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gibbeum Hospital — Mesh-Free Hernia Surgery",
  description:
    "Gibbeum Hospital specializes in mesh-free hernia surgery with advanced minimally invasive techniques.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <ConsultationModalProvider>
            {children}
            <ShareButton />
            <ConsultationModal />
          </ConsultationModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
