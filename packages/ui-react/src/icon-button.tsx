interface Props {
  children: React.ReactNode;
}
export function IconButton({
  children,
  ...rest
}: React.HTMLAttributes<HTMLButtonElement> & Props) {
  return <button {...rest}>icon {children}</button>;
}
