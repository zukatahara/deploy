import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <div>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-BX2K1CTTFW"
          ></Script>
          <Script id="google-analytics">
            {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BX2K1CTTFW');
  `}
          </Script>
        </div>
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
