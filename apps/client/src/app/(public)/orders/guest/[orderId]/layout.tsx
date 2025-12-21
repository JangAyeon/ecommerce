import { LayoutProps } from "@/@types/UI/layout";

interface GuestOrderLayoutProps {
  children: React.ReactNode;
  params: { orderId: string };
}

const GuestOrderLayout = ({ children, params }: GuestOrderLayoutProps) => {
  return <div>{children}</div>;
};

export default GuestOrderLayout;
