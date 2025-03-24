"use client"
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { AppContextProvider } from "@/context/AppContext"
import { Toaster } from "sonner"

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode
  session?: Session | null
}) {
  return (
    <SessionProvider session={session}>
      <AppContextProvider>{children}</AppContextProvider>
      <Toaster position="bottom-right" expand={false} />
    </SessionProvider>
  )
}
