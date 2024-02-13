function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="px-5 lg:px-8 py-6 lg:py-10 mx-auto  w-full flex flex-col grow w-full items-stretch">
      {children}
    </main>
  );
}
export default Page;
