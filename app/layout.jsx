import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/MainNav";
import Header from "@/components/Header";
import NameLoader from "@/components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Abdul Kadir | Portfolio new one",
  description:
    "Frontend Developer | UI Developer specializing in HTML, CSS, Bootstrap, Tailwind, JavaScript, React, Next.js, and modern UI.",
  // icons: {
  //   icon: [
  //     { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  //     { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  //     { url: "/favicon.ico" },
  //   ],
  //   apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  // },
  icons: {
    icon: "/favicon-new.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon-180x180.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}{}${geistMono.variable} antialiased overflow-auto xl:overflow-hidden relative `}
      >
        <NameLoader name="Abdul Kadir" duration={2.5} />
        <div className="flex">
          <div className="hidden xl:flex w-[220px] h-screen">
            <MainNav />
          </div>
          <div className="w-full max-w-[1120px] px-[12px] md:px-[35px] mx-auto">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
