import Link from "next/link";

const GuestButton = () => {
  return (
    <div className="text-center">
      <Link
        href="/orders/guest"
        className="text-b2-regular text-muted-foreground hover:text-foreground transition-colors underline"
      >
        Continue as Guest
      </Link>
    </div>
  );
};

export default GuestButton;
