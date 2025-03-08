import type { Metadata } from "next";
import { Noto_Sans_JP, Patrick_Hand } from "next/font/google";
import "./globals.css";
import SessionProviderWrapper from "@/components/Wrapper/SessionProviderWrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const patrickHand = Patrick_Hand({ subsets: ["latin"], weight: ["400"] });
const notoSansJP = Noto_Sans_JP({ weight: ["400"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Is Life Art?",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        style={{
          fontFamily: `${patrickHand.style.fontFamily}, ${notoSansJP.style.fontFamily}, sans-serif`,
        }}
      >
        <SessionProviderWrapper session={session}>
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
