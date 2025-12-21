// src/app/(public)/orders/guest/[orderId]/page.tsx

export default function Page({ params }: { params: { orderId: string } }) {
  return <div>orderId: {params.orderId}</div>;
}
