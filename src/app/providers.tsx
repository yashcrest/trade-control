"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AppContextProvider } from "@/context/AppContext";

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: Session | null;
}) {
  return (
    <SessionProvider session={session}>
      <AppContextProvider>{children}</AppContextProvider>
    </SessionProvider>
  );
}
