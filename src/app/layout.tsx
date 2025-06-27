import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MetaPixel from "@/modules/karriere-lp/components/pixel";
import UrlParamRemover from "@/modules/karriere-lp/components/urlParamRemover";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SellWell - Enterprise Sales Platform",
  description: "Start selling to enterprise customers with just a few lines of code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <MetaPixel />
        <UrlParamRemover />
        {children}
      </body>
    </html>
  );
}
