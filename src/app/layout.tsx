import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/layout/Header";
import Footer from "../layout/Footer";
import ThemeProvider from "@/context/ThemeContext";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chilld - Be a child Perent",
  description: "Parenting made easy",
  manifest: '/manifest.json'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-dark dark:text-white`}
      >
        <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
