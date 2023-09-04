interface FormRootProps {
  children: React.ReactNode;
}

function FormRoot({ children }: FormRootProps) {
  return (
    <div className="w-full rounded-[28px] bg-brand-secondary-blue p-10">
      {children}
    </div>
  );
}

export default FormRoot;
