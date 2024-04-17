import { Metadata } from "next";
import "../styles/globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Grant Risk",
  description: "Grant Risk's personal website.",
  openGraph: {
    title: "Grant Risk",
    description: "Grant Risk's personal website.",
    url: "https://personal-website-grantrisk.vercel.app/",
    siteName: "Grant Risk",
    images: [
      {
        url: "https://personal-website-grantrisk.vercel.app/grant-pose.png", // Absolute URL to the logo image.
        width: 800,
        height: 1066,
        alt: "Grant Risk",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true, // Allow indexing for this page to be discoverable via search engines.
    follow: true,
    nocache: false, // Allowing caching can help with load times.
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
