import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/AppComponents/Footer";
import NavWrapper from "@/components/AppComponents/NavWrapper";


export const metadata: Metadata = {
  title: {
    default: "Abdullah • Frontend Developer",
    template: "Abdullah • %s"
  },
  description: "A Frontend developer whose turning design to code, engaging frontend solutions with Highly detail-focusing and a deep understanding of user behavior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavWrapper />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
};