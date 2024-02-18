import type { Metadata } from "next";
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jordanpkl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
