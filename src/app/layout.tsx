import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
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
  title: "Preeminent Car Detailing | Professional Car Detailing Services",
  description: "Premium car detailing services for your vehicle. Book your appointment today and experience the difference.",
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
      >
        <header className="sticky top-0 z-10 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0 flex items-center space-x-3">
                <Image
                  src="/assets/04FE7B3B-BF5F-461A-A6A8-5F3A4C99FB1A.jpeg"
                  alt="Preeminent Car Detailing Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-bold text-xl text-blue-600">
                  Preeminent Car Detailing
                </span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-150">Home</Link>
                <Link href="/services" className="text-gray-700 hover:text-blue-600 transition duration-150">Services</Link>
                <Link href="/appointments" className="text-gray-700 hover:text-blue-600 transition duration-150">Book Now</Link>
              </nav>
            </div>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-lg font-semibold">Preeminent Car Detailing</h3>
                <p className="mt-2 text-gray-300">Making your vehicle shine like new</p>
              </div>
              <div>
                <h4 className="text-base font-semibold mb-3">Contact Us</h4>
                <p className="text-gray-300">123 Main Street</p>
                <p className="text-gray-300">Anytown, USA 12345</p>
                <p className="text-gray-300">Phone: (555) 123-4567</p>
                <p className="text-gray-300">Email: info@pristineauto.com</p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Preeminent Car Detailing. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
