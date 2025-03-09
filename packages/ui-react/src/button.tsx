interface Props {
  children: React.ReactNode;
}
export function Button({
  children,
  ...rest
}: React.HTMLAttributes<HTMLButtonElement> & Props) {
  return <button {...rest}>{children}</button>;
}
