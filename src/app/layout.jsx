import { Vazirmatn } from "next/font/google";
import { Toaster } from "react-hot-toast";

import TanstakQueryProvider from "@/components/providers/TanstakQueryProvider";
import AuthProvider from "@/components/providers/AuthProvider";
import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer/Footer";
import Icons from "@/components/modules/Icons/Icons";

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
