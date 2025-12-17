import Link from "next/link";

const SwitchLogin = () => {
  return (
    <div>
      <p className="text-b2-regular text-muted-foreground text-center my-6 sm:my-8">
        Already have an account?{" "}
        <Link
          href="/login"
          className="underline hover:text-foreground transition-colors font-medium"
        >
          Log In
        </Link>
      </p>
    </div>
  );
};

export default SwitchLogin;
