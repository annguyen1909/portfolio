import type { Metadata } from "next";
import { Montserrat, Poppins, Source_Sans_3, Fira_Code, Playfair_Display, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "An Nguyen - Full Stack Developer",
  description: "Full Stack Developer with expertise in React, TypeScript, and C++. Building scalable web applications and immersive digital experiences.",
  keywords: ["Full Stack Developer", "React", "TypeScript", "Next.js", "Portfolio", "An Nguyen"],
  authors: [{ name: "An Nguyen" }],
  openGraph: {
    title: "An Nguyen - Full Stack Developer",
    description: "Full Stack Developer with expertise in React, TypeScript, and C++",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable}  ${poppins.variable} ${sourceSans.variable} ${firaCode.variable} ${playfair.variable} ${spaceGrotesk.variable} antialiased bg-gray-900 text-white`}
      >
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CDBPK401ME"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CDBPK401ME');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
