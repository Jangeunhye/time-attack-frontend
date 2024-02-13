import ReactQueryProvider from "./reactQuery.provider";

function Providers({ children }: { children: React.ReactNode }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
export default Providers;
