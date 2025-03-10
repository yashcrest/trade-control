import type { Account, AuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import AzureADProvider from "next-auth/providers/azure-ad";

export const authOptions: AuthOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.YASH_AZURE_AD_CLIENT_ID as string,
      clientSecret: process.env.YASH_AZURE_AD_CLIENT_SECRET as string,
      tenantId: process.env.YASH_AZURE_AD_TENANT_ID as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.AUTH_SECRET as string,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account }: { token: JWT; account?: Account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
};
