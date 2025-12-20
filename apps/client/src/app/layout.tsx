import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/@components/Navbar";
import Footer from "@/@components/Footer";
import ToastProvider from "@/@components/ToastProvider";
import QueryProvider from "@/@providers/QueryProvider";
// import { ClerkProvider } from "@clerk/nextjs";

const generalSans = localFont({
  src: "../../public/font/GeneralSans-Variable.ttf",
  variable: "--font-general-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayeon - Best Clothes",
  description: "Ayeon is the best place to find the best clothes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body className={`${generalSans.variable} font-general-sans antialiased`}>
        <QueryProvider>
          <div className="mx-auto p-4">
            {children}
            <Footer />
          </div>
          <ToastProvider />
        </QueryProvider>
      </body>
    </html>
    // </ClerkProvider>
  );
}
