import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import "./globals.css";

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['400', '600'],
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: "Die Velas",
  description: "Velas artesanais e veganas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  )
}