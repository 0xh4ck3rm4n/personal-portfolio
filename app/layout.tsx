import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cool Portfolio",
  description: "Personal portfolio showcasing projects, skills and a playful game",
  icons: {
    icon: [
      { url: '/Ethereum-logo-vector-01.svg', type: 'image/svg+xml' },
    ],
    apple: '/Ethereum-logo-vector-01.svg',
  },
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
        suppressHydrationWarning={true}
      >
        {/* Top-left site logo with gradient border */}
        <div className="fixed top-6 left-6 z-50">
          <div className="site-logo-wrap">
            <img src="/Ethereum-logo-vector-01.svg" alt="site logo" className="site-logo" />
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
