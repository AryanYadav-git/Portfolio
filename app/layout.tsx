import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { cn } from '@/lib/utils'
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/sections";

const fontSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight:['300','400', '500', '600', '700'],
  variable: '--font-sans'
 });

export const metadata: Metadata = {
  title: "Aryan Yadav",
  description: "It's personal portfolio of Aryan Yadav",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen font-sans antialiased', fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          // defaultTheme="light"
          defaultTheme="dark"
        >
          <Navbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
