import { createStore } from "zustand/vanilla";
import { type User } from "./user";

export type Transfer = {
  date: string;
  amount: number;
  reference: string;
  notes: string;
} & User;

export type TransferState = {
  transfers: Transfer[];
  currentTransfer?: Transfer;
};

export type TransferActions = {
  addTransfer: (transfer: Transfer) => void;
};

export type TransferStore = TransferState & TransferActions;

export const defaultInitState: TransferState = {
  transfers: [],
};

export const createTransferStore = (
  initState: TransferState = defaultInitState
) => {
  return createStore<TransferStore>()((set) => ({
    ...initState,
    addTransfer: (newTransfer: Transfer) => {
      // Here, an API call should be made to add the transfer to the backend
      set((state) => ({
        transfers: [newTransfer, ...state.transfers],
        currentTransfer: newTransfer,
      }));
    },
  }));
};
