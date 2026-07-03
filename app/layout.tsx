import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexBeyond | Build Beyond AI",
  description: "Join India's most practical AI ecosystem designed to help students, developers, and professionals become AI Builders through projects, mentorship, and community. Founded by Rashmi Singh.",
  keywords: ["AI learning", "AI community", "AI ecosystem", "AI builder", "Rashmi Singh", "AI Beyond ChatGPT", "NextJS AI", "India AI startup"],
  authors: [{ name: "Rashmi Singh" }],
  openGraph: {
    title: "NexBeyond | Build Beyond AI",
    description: "Join India's most practical AI ecosystem designed to help students, developers, and professionals become AI Builders.",
    url: "https://nexbeyond.com",
    siteName: "NexBeyond",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexBeyond | Build Beyond AI",
    description: "Join India's most practical AI ecosystem designed to help students, developers, and professionals become AI Builders.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark scroll-smooth`}>
      <body className="bg-background text-foreground antialiased selection:bg-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}
