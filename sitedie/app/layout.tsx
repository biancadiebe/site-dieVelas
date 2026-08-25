import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { BotaoWhatsapp } from "@/src/components/botaoWhatsapp/BotaoWhatsapp";
import { FaWhatsapp } from "react-icons/fa";
import styles from "@/src/components/botaoWhatsapp/BotaoWhatsapp.module.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

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
    <>
      <html lang="pt-BR">
        <body className={`${dmSans.className} min-h-full flex flex-col`}>
          {children}
          <BotaoWhatsapp className={styles.botao}>
            <FaWhatsapp />
          </BotaoWhatsapp>
        </body>
      </html>
    </>
  );
}
