import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Register = () => {
    const [user, setUser] = useState({
        email: "",
        fullName: "",
        password: ""
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("https://mm-app-ej7qy.ondigitalocean.app/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("magic_user", JSON.stringify({
                        id: createdUser.id
                    }))
                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`https://magic-menu-envgd.ondigitalocean.app/users?email=${user.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateUser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        <main className="flex flex-col items-center justify-center px-6 py-8 mx-auto body fixed inset-0"> 
        <div className="flex flex-col items-center justify-center px-6 py-8 lg:mx-auto">
        <div className="flex items-center mb-6 font-semibold text-purple-900 dark:text-white">
            <img className="w-14 h-14 mr-2 animate-pulse" src="/images/crystal-ball.png" alt="logo" />
           <div className="login-title lg:text-8xl sm:text-5xl text-purple-200 drop-shadow-md font-light">MagicMenu</div>   
        </div>
        <div className="lg:w-[800px] sm:w-full bg-white bg-opacity-75 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-purple-700">
                    Please Register
                </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                <fieldset>
                    <label htmlFor="fullName" className="block mb-2  font-medium text-blue-700 dark:text-white"> Full Name </label>
                    <input onChange={updateUser}
                           type="text" id="fullName" className="input input-bordered input-primary    border-gray-300 text-purple-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email" className="block mb-2  font-medium text-blue-700 dark:text-white"> Email address </label>
                    <input onChange={updateUser}
                        type="email" id="email" className="input input-bordered input-primary    border-gray-300 text-purple-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="password" className="block mb-2  font-medium text-blue-700 dark:text-white"> Password </label>
                    <input onChange={updateUser}
                        type="password" id="password" className="input input-bordered input-primary    border-gray-300 text-purple-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                        placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <button type="submit" className="btn btn-outline btn-sm pt-1 btn-secondary"> Register </button>
                </fieldset>
            </form>
            </div>
            </div>
            </div>
        </main>
    )
}

