"use client";

import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { LinkItem } from "@/type/util-type";
import { useState, useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isRegistered, setIsRegistered] = useState<boolean | undefined>();
  const [links, setLinks] = useState<LinkItem[]>([]);

  useEffect(() => {
    // Update links and registration status based on pathname
    if (pathname === "/") {
      setLinks([
        { label: "Home", path: "/" },
        { label: "Services", path: "/services" },
        { label: "Contact", path: "/contact" },
      ]);
      setIsRegistered(true);
    } else if (pathname === "/register") {
      setLinks([{ label: "Home", path: "/" }]);
      setIsRegistered(true);
    } else if (pathname === "/member") {
      setLinks([
        { label: "Meals", path: "/member/meals" },
        { label: "Orders", path: "/member/orders" },
      ]);
      setIsRegistered(false);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        <Navigation
          links={links}
          title="Marry Meal"
          logo="/image/carelogo.png"
          isRegistered={isRegistered}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
