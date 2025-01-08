import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,}: Readonly<{
children: React.ReactNode;}>) {return (
    <html>
      <body>
      <header className="header">
        <nav>
          <Link href="/">Home</Link>
          <Link href="/blogs">Our Blogs</Link>
          <Link href="/contact">Your Views</Link>
        </nav>
          </header>
        {children}
      <footer className="footer"><nav>email: aqsaiftikhar2021@gmail.com | +92 320 ******* | ig: The Therapy Room</nav></footer>
      </body>
    </html>
  );
}
