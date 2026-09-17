import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "An Nguyen — Full-Stack Engineer for Production Systems",
  description: "Full-stack engineer building production systems — eVisa platforms, CRM tooling, and client-facing web apps. Available for freelance work.",
  keywords: ["Freelance Developer", "Full Stack Engineer", "React", "TypeScript", "Next.js", "eVisa", "CRM", "An Nguyen"],
  authors: [{ name: "An Nguyen" }],
  icons: {
    icon: "/brand/an-monogram.png",
  },
  openGraph: {
    title: "An Nguyen — Full-Stack Engineer for Production Systems",
    description: "Production systems for clients — eVisa, CRM, and business web apps.",
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
        className={`${montserrat.variable} antialiased`}
      >
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
