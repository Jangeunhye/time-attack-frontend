import Link from "next/link";

function HeaderMenus() {
  return (
    <div className="flex gap-4">
      <Link href="/sign-up">회원가입</Link>
      <button>로그인</button>
    </div>
  );
}

export default HeaderMenus;
