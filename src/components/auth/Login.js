import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    return fetch(
      `http://localhost:8088/users?email=${email}&password=${password}`
    )
      .then((res) => res.json())
      .then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0];
          localStorage.setItem(
            "magic_user",
            JSON.stringify({
              id: user.id,
            })
          );
          navigate("/home");
        } else {
          window.alert("Invalid login");
        }
      });
  };

  return (
    <>
      <div className="body fixed inset-0">
        <div className="z-0 opacity-50">
          <img className="fixed rotate-[143deg] w-[300px] mt-[7px] ml-[608px]" src="../images/magicwand.png" alt="wand"></img>
        </div>
        <section className="">
          <div className="flex flex-row items-center justify-center px-6 py-8 mt-[150px]">
            <div className="flex items-center text-[200px] mb-1 pb-1 -rotate-[10deg] opacity-80 text-slate-200">
              <div><div className="leading-tight tracking-tight mr-[300px] -ml-[100px] drop-shadow-md shadow-black login-title">MagicMenu</div>
              <div className="text-[50px] ml-[280px] rotate-[10deg] -mt-[40px] text-purple-200 drop-shadow-md opacity-80">for busy witches</div>
</div>
            </div>
            <div className="z-100">
              <div className="p-6 space-y-4">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-purple-100  dark:text-white">
                  Sign in to your account
                </h1>
                <form className="space-y-4" onSubmit={handleLogin}>
                  <div className="">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-purple-900 "
                    >
                      Your email
                    </label>
                    <input
                      className="z-100 bg-purple-100 shadow-lg text-purple-900 rounded-lg focus:ring-purple-900 focus:border-purple-900 block w-full p-2.5"
                      placeholder="name@company.com"
                      required=""
                      type="email"
                      value={email}
                      onChange={(evt) => setEmail(evt.target.value)}
                      autoFocus
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-purple-900 "
                    >
                      Password
                    </label>
                    <input
                      placeholder="••••••••"
                      className="bg-purple-100 shadow-lg text-purple-200  rounded-lg focus:ring-purple-900 focus:border-purple-900 block w-full p-2.5"
                      required=""
                      type="password"
                      value={password}
                      onChange={(evt) => setPassword(evt.target.value)}
                    />
                  </div>
<div>
                  <button
                    type="submit"
                    className="w-[200px] shadow-lg text-purple-200 inline border border-purple-600 bg-purple-500 bg-opacity-60 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg px-5 pt-1 text-center text-lg uppercase"
                  >
                    Sign in
                  </button><img className="w-[70px] inline -my-1 opacity-60 -scale-x-100 ml-2" src="../images/broom.png" alt="broom"></img>
                 </div> <p className="text-sm font-light text-purple-800">
                    Don’t have an account yet?
                    <a
                      href="/register"
                      className="font-medium text-purple-200 hover:underline hover:text-blue-400"
                    >
                      Sign up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
