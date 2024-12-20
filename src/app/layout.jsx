import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

import TanstakQueryProvider from "@/components/providers/TanstakQueryProvider";
import AuthProvider from "@/components/providers/AuthProvider";
import Header from "@/components/layouts/b/Header";
import Footer from "@/components/layouts/a/Footer";
import Icons from "@/components/modules/c/Icons";

import "./globals.css";

const vazirmatn = localFont({
  src: [
    {
      path: "./fonts/Vazirmatn/Vazirmatn-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn/Vazirmatn-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn/Vazirmatn-ExtraLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn/Vazirmatn-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn/Vazirmatn-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn/Vazirmatn-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn/Vazirmatn-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn/Vazirmatn-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn/Vazirmatn-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata = {
  description: "بهترین مسافرت خود را با ما تجربه کنید؛ تورینو",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body className="font-vazirmatn text-base font-normal text-secondary">
        <TanstakQueryProvider>
          <AuthProvider>
            <Icons />
            <div className="relative">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
            <Toaster />
          </AuthProvider>
        </TanstakQueryProvider>
      </body>
    </html>
  );
}
