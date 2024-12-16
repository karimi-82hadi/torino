"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useGetProfile } from "@/services/queries";

function AuthProvider({ children }) {
  const protectedRoutes = ["/profile"];
  const router = useRouter();

  const { isPending, data } = useGetProfile();

  useEffect(() => {
    if (!data?.data.mobile && !isPending) {
      protectedRoutes.forEach((route) => {
        if (window.location.pathname.includes(route)) router.replace("/");
      });
    }
  }, [isPending]);

  return <>{children}</>;
}

export default AuthProvider;
