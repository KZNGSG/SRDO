import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "СРДО - Сервис Разрешительной Документации Онлайн",
    template: "%s | СРДО",
  },
  description:
    "Оформление сертификатов, деклараций ТР ТС, СГР, отказных писем. Быстро, надёжно, по всей России. ООО Бизнес Среда.",
  keywords: [
    "сертификация",
    "декларация ТР ТС",
    "сертификат соответствия",
    "СГР",
    "отказное письмо",
    "таможенный союз",
  ],
  authors: [{ name: "ООО Бизнес Среда" }],
  creator: "СРДО",
  publisher: "ООО Бизнес Среда",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://srdo.ru",
    siteName: "СРДО",
    title: "СРДО - Сервис Разрешительной Документации Онлайн",
    description:
      "Оформление сертификатов, деклараций ТР ТС, СГР, отказных писем",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
