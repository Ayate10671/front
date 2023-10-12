import React from "react";
import logoImg from "../assets/logo-removebg-preview.png";

const Login = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="hidden  relative w-1/2 h-full lg:flex items-center justify-center bg-gray-200">
        <img
          className=" w-60 h-60 rounded-xl bg-sky-900 animate-none"
          src={logoImg}
          alt=""
        />
        <div className="w-full h-1/3 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>

      <div className="w-full flex items-center justify-center lg:w-2/3 bg-gray-100">
        <form className="w-9/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100">
          <h2 className="text-4xl  text-center  font-semibold">
            جامعه حلوان لإداره المدن الجامعيه
          </h2>
          <div className="mt-8">
            <div className="flex flex-col ">
              <label className="text-lg font-medium flex  justify-end ">اسم المستخدم</label>

              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent "
                type="text"
                placeholder="ادخل اسم المستخدم"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label className="text-lg font-medium flex  justify-end">كلمه المرور</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent "
                type="password"
                placeholder="ادخل كلمه المرور"
              />
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-sky-900 rounded-xl text-white font-bold text-lg">
                تسجيل الدخول
              </button>
            </div>
            <div className="flex flex-row-reverse mt-9 ">
              <p className="text-xl  font-semibold  flex  justify-end lg:w-3/4 ">تقديم الطلاب للمدن الجامعيه </p>
              <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform w-20 h-10 bg-sky-900 rounded-md text-white font-semibold text-center">استمرار</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

