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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aryanyadav.10xdevs.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aryan Yadav | Full Stack Developer",
    template: "%s | Aryan Yadav",
  },
  description:
    "Full Stack Developer from Haridwar, India. Building with React, Next.js, Node.js and modern web technologies. Portfolio, projects and experience.",
    keywords: ["Aryan Yadav", "10xdevs", "Software Engineer", "Software", "Full Stack Developer", "React", "Next.js", "portfolio", "Haridwar", "India",  "ThinkAct AI", "Developer"],
    authors: [{ name: "Aryan Yadav", url: siteUrl }],
  creator: "Aryan Yadav",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Aryan Yadav",
    title: "Aryan Yadav | Full Stack Developer",
    description:
      "Full Stack Developer from Haridwar, India. Building with React, Next.js, Node.js and modern web technologies.",
    images: [
      {
        url: "/profile.jpeg",
        width: 200,
        height: 200,
        alt: "Aryan Yadav, Full Stack Developer",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Yadav | Full Stack Developer",
    description:
      "Full Stack Developer from Haridwar, India. Building with React, Next.js and modern web technologies.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aryan Yadav",
    jobTitle: "Full Stack Developer",
    url: siteUrl,
    image: `${siteUrl}/profile.jpeg`,
    sameAs: [
      "https://www.linkedin.com/in/aryan-yadav-bb658b25b/",
      "https://github.com/AryanYadav-git",
      "https://twitter.com/AryanYadav466",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Haridwar",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", fontSans.variable)}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
