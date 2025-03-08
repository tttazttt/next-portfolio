"use client";

import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import Header from "../ui/Header";
import { Session } from "next-auth";
export default function SessionProviderWrapper({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: Session | null;
}) {
  const pathname = usePathname();
  return (
    <SessionProvider session={session}>
      {pathname !== "/signin" && <Header />}
      {children}
    </SessionProvider>
  );
}
