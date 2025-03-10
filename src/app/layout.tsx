import { authOptions } from "@/auth.config";
import { getServerSession } from "next-auth";
import { Providers } from "@/app/providers";
import "@/styles/index.css";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
