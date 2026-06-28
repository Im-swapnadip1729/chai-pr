"use client";
import { TRPCReactProvider } from "@/trpc/client/client";
import { useSyncExternalStore } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

function subscribe() {
  return () => {}; // No-op: client status doesn't change after load
}

export const Provider = ({ children }: ProviderProps) => {
  // Returns false during SSR/hydration, true once mounted on the client
  const isMounted = useSyncExternalStore(
    subscribe,
    () => true, // Client value
    () => false, // Server/Hydration value
  );
  if (!isMounted) return null;

  return <TRPCReactProvider>{children}</TRPCReactProvider>;
};
