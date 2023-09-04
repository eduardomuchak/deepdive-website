interface FormTitleProps {
  children: React.ReactNode;
}
function FormTitle({ children }: FormTitleProps) {
  return (
    <h1 className="mb-8 font-alt text-[22px] font-semibold">{children}</h1>
  );
}

export default FormTitle;
