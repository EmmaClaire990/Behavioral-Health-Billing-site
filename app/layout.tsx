import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const heading = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-heading" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Behavioral Health Medical Billing & Revenue Cycle Management",
    template: `%s | ${site.domain}`,
  },
  description: site.description,
  openGraph: {
    title: "Behavioral Health Medical Billing",
    description: site.description,
    url: site.url,
    siteName: site.domain,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#092B72",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skiplink">
          Skip to content
        </a>
        <TopBar />
        <NavBar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
