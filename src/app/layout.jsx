import { Vazirmatn } from "next/font/google";
import { Toaster } from "react-hot-toast";

import TanstakQueryProvider from "@/components/providers/TanstakQueryProvider";
import Header from "@/components/layouts/header/Header";
import Footer from "@/components/layouts/footer/Footer";
import Icons from "@/components/modules/icons/Icons";

import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazirmatn",
});

export const metadata = {
  description: "بهترین مسافرت خود را با ما تجربه کنید؛ تورینو",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body className="font-vazirmatn text-base font-normal text-secondary">
        <TanstakQueryProvider>
          <Icons />
          <div className="relative">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        <Toaster />
        </TanstakQueryProvider>
      </body>
    </html>
  );
}
