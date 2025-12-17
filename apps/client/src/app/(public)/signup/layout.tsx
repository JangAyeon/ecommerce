export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] py-8 sm:py-12">
      {children}
    </div>
  );
}

