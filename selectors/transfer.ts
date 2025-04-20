import { TransferState } from "@/stores/transfer";
import { memoize } from "proxy-memoize";
import { formatDate } from "@/lib/utils";

export const contactsSelector = memoize((state: TransferState) => {
  const frequentContacts = state.transfers || [];
  return frequentContacts.map(({ login, name, picture }) => ({
    id: login.uuid,
    name: name.first,
    lastName: name.last,
    avatar: picture.thumbnail,
  }));
});

export const transfersSelector = memoize((state: TransferState) => {
  const allTransfers = state.transfers || [];
  return allTransfers.map((transfer) => ({
    id: transfer.login.uuid,
    name: transfer.name.first,
    avatar: transfer.picture.thumbnail,
    // Simulating transfer data based on contact information:
    date: formatDate(transfer.date || transfer.dob.date),
    amount: transfer.amount || transfer.dob.age * 100,
  }));
});

export const recipientSelector = memoize((state: TransferState) => {
  const frequentContacts = state.transfers || [];
  return (id: string) =>
    frequentContacts.find((contact) => contact.login.uuid === id);
});
