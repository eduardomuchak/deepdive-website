interface ActionCardContentContainerProps {
  children: React.ReactNode;
}

function ActionCardContentContainer({
  children,
}: ActionCardContentContainerProps) {
  return <div className="mt-4 flex flex-col space-y-2">{children}</div>;
}

export default ActionCardContentContainer;
