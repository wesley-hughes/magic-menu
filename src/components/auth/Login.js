import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"


export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}&password=${password}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("magic_user", JSON.stringify({
                        id: user.id
                    }))
                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
       
        <section className="bg-gray-50 dark:bg-gray-900">
            
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
      <div className="flex items-center mb-6 text-4xl font-semibold text-purple-900 dark:text-white">
          <img className="w-14 h-14 mr-2" src="/images/crystal-ball.png" alt="logo" />
          MagicMenu   
      </div>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-purple-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-purple-900 dark:text-white">Your email</label>
                      <input className="bg-gray-50 border border-gray-300 text-purple-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" type="email"
                            value={email}
                            onChange={evt => setEmail(evt.target.value)}
                            autoFocus />
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-purple-900 dark:text-white">Password</label>
                      <input placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-purple-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""type="password"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            />
                  </div>
                 
                  <button type="submit" className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Sign in</button>
                  <p className="text-sm font-light text-purple-500 dark:text-purple-400">
                      Don’t have an account yet? <a href="/register" className="font-medium text-purple-600 hover:underline dark:text-purple-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    )
}


