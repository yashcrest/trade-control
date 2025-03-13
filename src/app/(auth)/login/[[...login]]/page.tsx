"use client";
import { useState, useCallback } from "react";
import { signIn } from "next-auth/react";
import { useAppContext } from "@/context/AppContext";
import { Lock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Loading from "@/app/loading";

export default function Page() {
  const { isLoading: isSessionLoading } = useAppContext();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = useCallback(async () => {
    if (isSignedIn) return;
    setIsSignedIn(true);

    try {
      await signIn("azure-ad", { callbackUrl: "/" });
    } catch (error) {
      console.error("Sign in error: ", error);
    } finally {
      setIsSignedIn(false);
    }
  }, [isSignedIn]);

  const isLoading = isSignedIn || isSessionLoading;
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Shield className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Export Control System
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in with your Organization account
        </p>
      </div>
      <Card className="mt-8 py-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4">
          <div className="flex flex-col space-y-3">
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              disabled={isLoading}
              onClick={handleSignIn}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loading />
                  <span>Signin in...</span>
                </div>
              ) : (
                "Continue with Azure AD SSO"
              )}
            </Button>
          </div>
          <CardContent className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Secure Authentication
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3">
              <div className="rounded-md bg-blue-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Lock className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">
                      Enterprise Security
                    </h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        Access is managed through your Enterprise&apos;s
                        Identity Provider
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
