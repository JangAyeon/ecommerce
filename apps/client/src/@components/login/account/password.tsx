import Link from "next/link";

const FindPassword = () => {
  return (
    <Link
      href="/find-password"
      className="text-b2-regular text-muted-foreground hover:text-foreground transition-colors underline"
    >
      Find Password
    </Link>
  );
};

export default FindPassword;
