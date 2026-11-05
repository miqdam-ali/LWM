import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from './Navbar/page'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

<meta name="google-site-verification" content="hDcONKJt3Nm2rSq8ZntZAuPfxEjfLnySgODxIMSPlsI" />
export const metadata: Metadata = { 
  title: "LWM", 
  description: "Learn Work Master", 
  verification: { 
    google: 'googleb3441873da13b196.html', // Next.js automatically maps this to the google-site-verification tag
  }, 
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${spaceMono.variable} ${plusJakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <Nav/>
        </header>
        
        {children}
        
        
        </body>
    </html>
  );
}
