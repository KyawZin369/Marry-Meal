"use client";

import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { LinkItem } from "@/type/util-type";
import { useState, useEffect, Suspense } from "react";

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
        { label: "logout", path: "/logout" },
      ]);
      setIsRegistered(false);
    } else if (pathname === "/caregiver"){
      setLinks([
        { label: "Menu", path: "/caregiver/menu" },
        { label: "logout", path: "/logout" },
      ]);
      setIsRegistered(false);
    } else if (pathname === "/donation") {
      setLinks([
        { label: "Donate", path: "/donation" },
        { label: "logout", path: "/logout" },
      ]);
      setIsRegistered(false);
    } else if(pathname === "/partner"){
      setLinks([
        { label: "Orders List", path: "/partner" },
        { label: "logout", path: "/logout" },
      ]);
      setIsRegistered(false);
    } else if ( pathname === "/volunteer") {
      setLinks([
        { label: "Meals to Deliver", path: "/volunteer" },
        { label: "logout", path: "/logout" },
      ])
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <title>Marry Meal</title>
        <link rel="icon" href="/image/carelogo.png" />
      </head>
      <body>
        <Navigation
          links={links}
          title="Marry Meal"
          logo="/image/carelogo.png"
          isRegistered={isRegistered}
        />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
