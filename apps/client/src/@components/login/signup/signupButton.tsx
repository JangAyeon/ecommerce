import Link from "next/link";

const SignupButton = () => {
  return (
    <p className="text-b2-regular text-muted-foreground text-center">
      Don&apos;t have an account?{" "}
      <Link
        href="/signup"
        className="underline hover:text-foreground transition-colors font-medium"
      >
        Sign Up
      </Link>
    </p>
  );
};

export default SignupButton;
