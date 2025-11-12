import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js + Tailwind CSS + shadcn/ui",
  description: "A modern starter template with Next.js, Tailwind CSS, and shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
