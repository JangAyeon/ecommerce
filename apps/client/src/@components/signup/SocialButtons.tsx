"use client";

import Image from "next/image";

const SocialButtons = () => {
  return (
    <>
      {/* Separator */}
      <div className="relative my-6 sm:my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-4 text-b3-regular text-muted-foreground">
            Or
          </span>
        </div>
      </div>

      {/* Social Sign Up Buttons */}
      <div className="space-y-3">
        <button
          type="button"
          className="w-full py-3 px-4 rounded-lg border border-border bg-background hover:bg-muted transition-colors flex items-center justify-center gap-3 text-b2-medium text-foreground"
        >
          <Image src="/logo/google.svg" alt="Facebook" width={18} height={18} />
          Sign Up with Google
        </button>
        <button
          type="button"
          className="w-full py-3 px-4 rounded-lg bg-[#1877F2] hover:bg-[#166FE5] text-white transition-colors flex items-center justify-center gap-3 text-b2-medium"
        >
          <Image
            src="/logo/facebook.svg"
            alt="Facebook"
            width={18}
            height={18}
          />
          Sign Up with Facebook
        </button>
      </div>
    </>
  );
};

export default SocialButtons;
