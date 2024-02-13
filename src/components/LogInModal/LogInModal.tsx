import API from "@/api/index.api";
import { useAuth } from "@/contexts/auth.context";
import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "../Modal";

function LogInModal() {
  console.log("이것은 로그인모달");
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync } = useMutation({ mutationFn: API.auth.logIn });
  const { logIn } = useAuth();

  const handleClickLogIn = async () => {
    const response = await mutateAsync({ email, password });
    logIn();
    const action = setModal(null);
    dispatch(action);
  };

  return (
    <Modal title="로그인">
      <div className="flex flex-col items-center gap-y-4 w-[400px] mx-auto">
        <div className="w-[100%] flex flex-col gap-y-2">
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block border px-6 py-3 rounded focus:border-black outline-none transition border-slate-300 w-[100%]"
          />
        </div>
        <div className="w-[100%] flex flex-col gap-y-2">
          <label htmlFor="pw">비밀번호</label>
          <input
            type="password"
            id="pw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" block border px-6 py-3 rounded focus:border-black outline-none transition border-slate-300 w-[100%]"
          />
        </div>
        <button
          onClick={handleClickLogIn}
          className="mt-4 py-4 px-12 text-[15px] font-semibold bg-black w-[100%] text-white"
        >
          로그인하기
        </button>
      </div>
    </Modal>
  );
}

export default LogInModal;
