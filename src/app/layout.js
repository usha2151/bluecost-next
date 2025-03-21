import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/common/Footer";
import Header from "@/common/Header";
import "../../public/assets/css/style.css";
import "../../public/assets/css/responsive.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
