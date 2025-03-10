import { authOptions } from "@/auth.config";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login"); // Redirect to login page if not authenticated
  } else {
    redirect("/dashboard"); // Redirect to dashboard if authenticated
  }

  return null; // Nothing will render since we are redirecting
}
