interface DeepdiveProgramRootProps {
  children: React.ReactNode;
}

function DeepdiveProgramRoot({ children }: DeepdiveProgramRootProps) {
  return <div className="flex flex-row gap-2">{children}</div>;
}

export default DeepdiveProgramRoot;
