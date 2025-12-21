// src/app/(public)/orders/guest/[orderId]/page.tsx

export default async function Page({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  return <div>orderId: {orderId}</div>;
}
