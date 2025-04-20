import { SendAgainScreen } from "@/components/screens/SendAgain/SendAgainScreen";
import { MobileLayout } from "@/components/layouts/MobileLayout";

export default async function SendAgain({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return (
    <MobileLayout>
      <SendAgainScreen contactId={id} />
    </MobileLayout>
  );
}
