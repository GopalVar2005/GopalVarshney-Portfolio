import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Tiny5, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/scroll-to-top";
import OnekoPet from "@/components/oneko-pet";
import { cookies } from "next/headers";
import { Analytics } from '@vercel/analytics/next';
import { siteConfig } from "@/lib/config/site-config";

const inter = Inter({
  weight: ['400', '500', '600'],
  variable: "--font-inter",
  subsets: ["latin"],
})

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const tiny5 = Tiny5({
  weight: "400",
  variable: "--font-tiny5",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.url),

  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.seo.description,

  keywords: siteConfig.seo.keywords,

  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  category: "Technology",

  openGraph: {
    type: "website",
    url: siteConfig.seo.url,
    siteName: siteConfig.name,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [
      { 
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Portfolio`
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },

  icons: {
    icon: [
      { url: '/icon.png?v=2', sizes: '256x256', type: 'image/png' },
      { url: '/favicon.ico?v=2', sizes: '48x48' },
    ],
    apple: [
      { url: '/apple-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
  },

  formatDetection: { 
    email: false, 
    address: false, 
    telephone: false 
  },

  referrer: "origin-when-cross-origin",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "light";

  return (
    <html
      lang="en"
      className={`${theme === "dark" ? "dark" : ""} ${inter.variable} ${mono.variable} ${tiny5.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider initialTheme={theme}>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
          <ScrollToTop />
          <OnekoPet />
        </ThemeProvider>
      </body>
    </html>
  );
}

