import React from 'react';
import Head from 'next/head';
import { Html, Head as NextHead, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <NextHead>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="متجر الفردوس الإلكتروني - شحن فوري لأفضل الألعاب" />
        <meta name="keywords" content="gaming, store, games, top-up, فري فاير, كلاش, إيفوتبول" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </NextHead>
      <body style={{ backgroundColor: '#0f172a', color: '#fff' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
