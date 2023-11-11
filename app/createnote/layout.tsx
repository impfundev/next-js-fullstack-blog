export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-[65vw]">{children}</div>;
}
