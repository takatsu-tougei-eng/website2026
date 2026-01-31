"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GaPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.gtag) return;

    window.gtag("config", "G-VJK2NXLX64", {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}
