export function ErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-1 font-sans text-xs text-red-500">{children}</span>
  );
}
