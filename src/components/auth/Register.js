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
        return fetch("http://localhost:8088/users", {
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
        return fetch(`http://localhost:8088/users?email=${user.email}`)
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
        <main className="flex flex-col items-center justify-center px-6 py-8 mx-auto"> 
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="flex items-center mb-6 text-4xl font-semibold text-purple-900 dark:text-white">
            <img className="w-14 h-14 mr-2" src="/images/crystal-ball.png" alt="logo" />
            MagicMenu   
        </div>
        <div className="w-[800px] bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-purple-900 md:text-2xl dark:text-white">
                    Please Register
                </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                <fieldset>
                    <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-purple-900 dark:text-white"> Full Name </label>
                    <input onChange={updateUser}
                           type="text" id="fullName" className="bg-purple-100 border border-gray-300 text-purple-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-purple-900 dark:text-white"> Email address </label>
                    <input onChange={updateUser}
                        type="email" id="email" className="bg-purple-100 border border-gray-300 text-purple-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-purple-900 dark:text-white"> Password </label>
                    <input onChange={updateUser}
                        type="password" id="password" className="bg-purple-100 border border-gray-300 text-purple-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <button type="submit" className="glow-on-hover"> Register </button>
                </fieldset>
            </form>
            </div>
            </div>
            </div>
        </main>
    )
}

