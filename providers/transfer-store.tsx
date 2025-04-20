"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  TransferState,
  type TransferStore,
  createTransferStore,
} from "@/stores/transfer";

export type TransferStoreApi = ReturnType<typeof createTransferStore>;

export const TransferStoreContext = createContext<TransferStoreApi | undefined>(
  undefined
);

export interface TransferStoreProviderProps {
  children: ReactNode;
  initialValues: TransferState;
}

export const TransferStoreProvider = ({
  children,
  initialValues,
}: TransferStoreProviderProps) => {
  const storeRef = useRef<TransferStoreApi>(null);
  if (!storeRef.current) {
    storeRef.current = createTransferStore(initialValues);
  }

  return (
    <TransferStoreContext.Provider value={storeRef.current}>
      {children}
    </TransferStoreContext.Provider>
  );
};

export const useTransferStore = <T,>(
  selector: (store: TransferStore) => T
): T => {
  const transferStoreContext = useContext(TransferStoreContext);

  if (!transferStoreContext) {
    throw new Error(
      `useTransferStore must be used within TransferStoreProvider`
    );
  }

  return useStore(transferStoreContext, selector);
};
