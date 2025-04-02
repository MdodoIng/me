import type { Metadata } from "next";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import React from "react";
// import { ViewTransition } from "@/libs/helpers";
const GoogleAnalytics = React.lazy(() =>
  import("@next/third-parties/google").then((module) => ({
    default: module.GoogleAnalytics,
  }))
);

export const metadata: Metadata = {
  title: "Ameen Mk Portfolio",
  description: "Welcome to Ameen Mk's professional portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased flex flex-col w-full min-h-dvh py-10`}>
        <Layout>{children}</Layout>
        <GoogleAnalytics gaId="G-CWF75MZKHK" />
      </body>
    </html>
  );
}
