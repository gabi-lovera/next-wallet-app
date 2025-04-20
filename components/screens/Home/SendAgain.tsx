"use client";

import { AvatarList } from "@/components/shared/AvatarList";
import { useTransferStore } from "@/providers/transfer-store";
import { contactsSelector } from "@/selectors/transfer";

export default function SendAgain() {
  const frequentContacts = useTransferStore(contactsSelector);

  return (
    <div className="mb-4">
      <h2 className="font-bold my-6 text-center">Send Again</h2>
      <AvatarList contacts={frequentContacts.slice(0, 10)} />
    </div>
  );
}
