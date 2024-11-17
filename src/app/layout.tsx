import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/AppComponents/Navbar";
import Footer from "@/components/AppComponents/Footer";


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
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
