import Image from "next/image";

interface TransferItemProps {
  name: string;
  avatar: string;
  date: string;
  amount: number;
}

export function TransferItem({
  name,
  avatar,
  date,
  amount,
}: TransferItemProps) {
  return (
    <div className="flex items-center py-3">
      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
        <Image
          src={avatar || "/placeholder.svg"}
          alt={name}
          width={40}
          height={40}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1">
        <div className="font-medium">{name}</div>
        <div className="text-xs text-gray-500">{date}</div>
      </div>
      <div className="font-medium">$ {amount.toLocaleString()}</div>
    </div>
  );
}
