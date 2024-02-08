export default async function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="max-w-[1200px] py-[100px] m-auto">{children}</main>;
}
