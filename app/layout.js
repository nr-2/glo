import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'Glo',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Runs before paint so English users don't see an RTL flash.
const langBoot =
  'try{if(localStorage.getItem("lang")==="en"){document.documentElement.lang="en";document.documentElement.dir="ltr"}}catch(e){}';

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: langBoot }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="locked" suppressHydrationWarning>
        {children}
        {/* Appwrite SDK (exposes window.Appwrite) must load before the app script */}
        <Script
          src="https://cdn.jsdelivr.net/npm/appwrite@29.2.0/dist/iife/sdk.js"
          strategy="beforeInteractive"
        />
        <Script src="/glo.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
