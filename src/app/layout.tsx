import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | PromptForge",
    default: "PromptForge | AI Prompt Generator & Library",
  },
  description: "Create, browse, and copy professional AI prompts for ChatGPT, Claude, Gemini, Midjourney, and DALL-E. Over 500 curated prompts for 20+ professions.",
  openGraph: {
    title: "PromptForge | Premium AI Prompt Generator",
    description: "Generate and discover professional AI prompts for your specific profession. Boost your productivity with ChatGPT, Claude & Midjourney.",
    url: "https://promptforge.example.com",
    siteName: "PromptForge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PromptForge | Premium AI Prompt Generator",
    description: "Generate and discover professional AI prompts for your specific profession.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
