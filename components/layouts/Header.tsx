import { Wifi, Signal, BatteryCharging } from "lucide-react";

export default function Header() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex justify-between items-center px-20 py-2 text-white text-xs">
      <div>{time}</div>
      <div className="flex items-center gap-2">
        <Signal size={20} />
        <Wifi size={20} />
        <BatteryCharging size={20} />
      </div>
    </div>
  );
}
