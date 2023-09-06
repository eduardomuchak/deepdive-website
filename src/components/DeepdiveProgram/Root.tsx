import { twMerge } from "tailwind-merge";

interface DeepdiveProgramRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function DeepdiveProgramRoot({ children, ...rest }: DeepdiveProgramRootProps) {
  return (
    <div className={twMerge("flex flex-row gap-2", rest.className)}>
      {children}
    </div>
  );
}

export default DeepdiveProgramRoot;
