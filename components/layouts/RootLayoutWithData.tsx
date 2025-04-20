import { loadLatestTransfers } from "@/actions/transfer";
import { TransferStoreProvider } from "@/providers/transfer-store";
import { UserStoreProvider } from "@/providers/user-store";
import { getUserInfo } from "@/actions/user";
import { type User } from "@/stores/user";
import { type Transfer } from "@/stores/transfer";

export async function RootLayoutWithData({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [transfers, user] = await Promise.all([
    loadLatestTransfers(),
    getUserInfo(),
  ]);

  if ("error" in user) {
    return <div className="text-red-500 text-center">Error loading user</div>;
  }

  return (
    <UserStoreProvider initialValues={{ userInfo: user as User }}>
      <TransferStoreProvider
        initialValues={{ transfers: transfers as Transfer[] }}
      >
        {children}
      </TransferStoreProvider>
    </UserStoreProvider>
  );
}
