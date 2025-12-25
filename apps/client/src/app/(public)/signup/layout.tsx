import { LayoutProps } from "@/@types/UI/layout";

export default function SignUpLayout({ children }: LayoutProps) {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] py-8 sm:py-12">
      {children}
    </div>
  );
}

