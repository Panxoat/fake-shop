export default function Loading() {
  return (
    <main className="flex items-start gap-x-[20px]">
      <section className="animate-pulse border">
        <div className="bg-slate-200 w-[500px] h-[500px]" />
      </section>
      <section className="animate-pulse">
        <div className="bg-slate-200 w-[500px] h-[100px]" />
        <div className="w-full h-[10px]" />
        <div className="bg-slate-200 w-[600px] h-[120px]" />
        <hr className="my-[10px]" />
        <div className="bg-slate-200 w-[100px] h-[30px]" />
      </section>
    </main>
  );
}
