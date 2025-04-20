import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface Contact {
  id: string;
  name: string;
  avatar: string;
}

interface AvatarListProps {
  contacts: Contact[];
  className?: string;
}

export function AvatarList({ contacts, className }: AvatarListProps) {
  const router = useRouter();

  const handleContactClick = (contactId: string) => {
    router.push(`/send-again/${contactId}`);
  };
  return (
    <div
      className={cn(
        "flex gap-2 justify-between overflow-x-auto whitespace-nowrap",
        className
      )}
    >
      {contacts.map(({ id, avatar, name }) => (
        <div
          key={id}
          onClick={() => handleContactClick(id)}
          className="flex flex-col items-center cursor-pointer px-4 py-1"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden mb-1">
            <Image
              src={avatar || "/placeholder.svg"}
              alt={name}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-xs max-w-[48px]">{name}</span>
        </div>
      ))}
    </div>
  );
}
