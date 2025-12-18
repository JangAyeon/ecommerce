import Link from "next/link";

const FindEmail = () => {
  return (
    <Link
      href="/find-email"
      className="text-b2-regular text-muted-foreground hover:text-foreground transition-colors underline"
    >
      Find ID
    </Link>
  );
};

export default FindEmail;
