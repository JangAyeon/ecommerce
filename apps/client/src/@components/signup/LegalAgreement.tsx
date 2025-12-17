import Link from "next/link";

const LegalAgreement = () => {
  return (
    <p className="text-b3-regular text-muted-foreground">
      By signing up you agree to our{" "}
      <Link
        href="/terms"
        className="underline hover:text-foreground transition-colors"
      >
        Terms
      </Link>
      ,{" "}
      <Link
        href="/privacy"
        className="underline hover:text-foreground transition-colors"
      >
        Privacy Policy
      </Link>
      , and{" "}
      <Link
        href="/cookies"
        className="underline hover:text-foreground transition-colors"
      >
        Cookie Use
      </Link>
      .
    </p>
  );
};

export default LegalAgreement;
