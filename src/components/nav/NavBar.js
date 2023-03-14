import { Link, useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()

    const localMagicUser = localStorage.getItem("magic_user")
    const magicUserObject = JSON.parse(localMagicUser)


    return (
        <ul className="navbar">
            <li className=""><button onClick={() => navigate("/menu")}>Menu</button></li>
            {/* <li className=""><button onClick={() => navigate("/weeks")}>Weeks</button></li> */}
            <li className=""><button onClick={() => navigate("/profile")}>Profile</button></li>
            <li className="">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("magic_user")
                    navigate("/", {replace:true})
                    
                }}>Logout</Link>
            </li>
        </ul>
    )
}