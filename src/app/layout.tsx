import type { Metadata } from "next";
import Header from "./components/Header";
import localFont from "next/font/local";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const chillax = localFont({
  src: [
    {
      path: "./fonts/otf/Chillax-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/otf/Chillax-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/otf/Chillax-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/otf/Chillax-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/otf/Chillax-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/otf/Chillax-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Dystopi",
  description: "Dystopi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={chillax.className}>
        <GoogleAnalytics />
        <Header />
        {children}
      </body>
    </html>
  );
}
