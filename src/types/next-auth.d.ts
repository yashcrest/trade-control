declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }

  interface Account {}

  interface AuthOptions {}
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
