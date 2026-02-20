"use client";
import Header from "../components/shared/header/header";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "aos/dist/aos.css";
import { MantineProvider } from "@mantine/core";
import Footer from "../components/shared/footer/footer";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Aos from "aos";
import ScrollButton from "@/lib/ScrollButton";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  useEffect(() => {
    Aos.init();
  });

  return (
    <html lang='en'>
      <body className={`antialiased`}>
        <MantineProvider>
          {!isDashboard && <Header />}
          {children}
          <ScrollButton />
          {!isDashboard && <Footer />}
        </MantineProvider>
      </body>
    </html>
  );
}
