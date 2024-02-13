"use client";
import LogInModal from "@/components/LogInModal/LogInModal";
import { useAuth } from "@/contexts/auth.context";
import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import Link from "next/link";

function HeaderMenus() {
  const dispatch = useAppDispatch();
  const { isLoggedIn, logOut } = useAuth();

  const handleClickLogIn = () => {
    const action = setModal(<LogInModal />);
    dispatch(action);
  };

  const handleClickLogOut = () => {
    logOut();
  };
  return (
    <div className="flex gap-4">
      {isLoggedIn ? (
        <>
          <Link href="/cart">장바구니</Link>
          <button onClick={handleClickLogOut}> 로그아웃</button>
        </>
      ) : (
        <>
          <Link href="/sign-up">회원가입</Link>
          <button onClick={handleClickLogIn}>로그인</button>
        </>
      )}
    </div>
  );
}

export default HeaderMenus;
