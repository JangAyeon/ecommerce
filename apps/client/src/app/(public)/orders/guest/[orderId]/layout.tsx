import { LayoutProps } from "@/@types/UI/layout";

interface GuestOrderLayoutProps extends LayoutProps {
  params: Promise<{ orderId: string }>;
}

const GuestOrderLayout = async ({
  children,
  params,
}: GuestOrderLayoutProps) => {
  await params; // Await params even if not used, to satisfy Next.js 15 requirement
  return <div>{children}</div>;
};

export default GuestOrderLayout;
