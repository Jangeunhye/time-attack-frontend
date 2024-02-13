import Link from "next/link";
import HeaderMenus from "./components/HeaderMenus";

function Header() {
  return (
    <header className="px-5 lg:px-8 items-center flex justify-between sticky top-0 h-16 border-b z-10 bg-white">
      <div className="flex items-center">
        <Link href="/" className="font-bold text-2xl">
          발랑
        </Link>
        <Link href="/brands" className="ml-20">
          BRANDS
        </Link>
      </div>
      <div>
        <HeaderMenus />
      </div>
    </header>
  );
}

export default Header;
