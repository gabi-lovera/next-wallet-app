type UserInfoRowProps = {
  label: string;
  value?: string;
};

export default function UserInfoRow({ label, value }: UserInfoRowProps) {
  return (
    <div className="flex justify-between">
      <div className="text-gray-400">{label}</div>
      <div className="font-bold">{value || "-"}</div>
    </div>
  );
}
