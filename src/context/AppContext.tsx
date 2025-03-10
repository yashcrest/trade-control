import React, { useContext } from "react";
import { useSession } from "next-auth/react";

type AppContext = {
  isLoggedIn: boolean;
  isLoading: boolean;
  user?: {
    email?: string | null;
    name?: string | null;
  };
};

const AppContext = React.createContext<AppContext | undefined>({
  isLoggedIn: false,
  isLoading: false,
  user: undefined,
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  return (
    <AppContext.Provider
      value={{
        isLoggedIn: !!session,
        isLoading,
        user: session?.user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};
