"use client";
import { useRef } from "react";

function SignUpForm() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);
  const pwCheckInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const id = emailInputRef.current?.value;
    const pw = pwInputRef.current?.value;
    const pwCheck = pwCheckInputRef.current?.value;
    if (pw !== pwCheck) return alert("");
  };

  return (
    <section>
      <h2 className="font-bold text-3xl text-center my-8">회원가입</h2>
      <div className="flex flex-col items-center gap-y-4 w-[400px] mx-auto">
        <div className="w-[100%] flex flex-col gap-y-2">
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            id="email"
            ref={emailInputRef}
            className="block border px-6 py-3 rounded focus:border-black outline-none transition border-slate-300 w-[100%]"
          />
        </div>
        <div className="w-[100%] flex flex-col gap-y-2">
          <label htmlFor="pw">비밀번호</label>
          <input
            type="password"
            id="pw"
            ref={pwInputRef}
            className=" block border px-6 py-3 rounded focus:border-black outline-none transition border-slate-300 w-[100%]"
          />
        </div>
        <div className="w-[100%] flex flex-col gap-y-2">
          <label htmlFor="pwCheck">비밀번호 확인</label>
          <input
            type="password"
            id="pwCheck"
            ref={pwCheckInputRef}
            className="block border px-6 py-3 rounded focus:border-black outline-none transition border-slate-300  w-[100%]"
          />
        </div>
        <button
          onClick={handleClick}
          className="mt-4 py-4 px-12 text-[15px] font-semibold bg-black w-[100%] text-white"
        >
          회원가입하기
        </button>
      </div>
    </section>
  );
}

export default SignUpForm;
