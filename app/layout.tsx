import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { relative } from "path";
import { Navbar, Footer } from "@/components";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best car in the wold.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
