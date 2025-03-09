import type { Metadata } from "next";
import { Noto_Sans_JP, Patrick_Hand } from "next/font/google";
import "./globals.css";
import SessionProviderWrapper from "@/components/Wrapper/SessionProviderWrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const patrickHand = Patrick_Hand({ subsets: ["latin"], weight: ["400"] });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Az's Portfolio",
  description:
    "Azのポートフォリオサイト。Next.jsで作成し、vercelにデプロイしています。",
  openGraph: {
    title: "Az's Portfolio",
    description:
      "I thought what I'd do was, I'd pretend I was one of those deaf-mutes or should I ?",
    url: "https://next-portfolio-lime-eight.vercel.app",
    siteName: "Az's Portfolio",
    images: ["/ogp.jpg"],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Az's Portfolio",
    description:
      "I thought what I'd do was, I'd pretend I was one of those deaf-mutes or should I ?",
    images: ["/opg.jpg"],
    creator: "@fox_inthehell",
  },
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
