import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Marry Meal",
};

const links = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation
          links={links}
          title="Marry Me"
          logo="/logo.jpg"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
