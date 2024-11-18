"use client";

import Head from "next/head";
import config from "@config/config.json";
import theme from "@config/theme.json";
import TwSizeIndicator from "@layouts/components/TwSizeIndicator";
import Footer from "@layouts/partials/Footer";
import Header from "@layouts/partials/Header";
import "../styles/style.scss";

export default function RootLayout({ children, meta = {} }) {
  // Import Google font CSS
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;

  // Default metadata
  const defaultMeta = {
    title: config.site.title || "Default Site Title",
    description: config.site.description || "Default description of the site",
    keywords: config.site.keywords || "default, keywords",
    author: config.site.author || "Default Author",
    favicon: config.site.favicon || "/favicon.ico",
  };

  // Merge default metadata with page-specific metadata
  const metaData = { ...defaultMeta, ...meta };

  return (
    <html suppressHydrationWarning={true} lang="en">
      <Head>
        {/* Dynamic Meta */}
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta name="author" content={metaData.author} />
        <link rel="icon" href={metaData.favicon} />

        {/* Responsive Meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* Theme Meta */}
        <meta name="theme-name" content="andromeda-light-nextjs" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />

        {/* Google Font CSS */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}${
            sf ? "&family=" + sf : ""
          }&display=swap`}
          rel="stylesheet"
        />
      </Head>
      <body suppressHydrationWarning={true}>
        <TwSizeIndicator />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
