import { Vazirmatn } from "next/font/google";
import { Toaster } from "react-hot-toast";

import TanstakQueryProvider from "@/components/providers/TanstakQueryProvider";

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
      <body className="font-vazirmatn font-normal">
        <TanstakQueryProvider>{children}</TanstakQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}