import type { Metadata } from "next";
import { geistSans, geistMono } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | Album of the Year List Maker',
    default: 'Album of the Year List Maker',
  },
  description: "The tool to make a list of your favourite albums of the year. Built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
