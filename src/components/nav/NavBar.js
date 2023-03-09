export const CustomerNav = () => {
    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)


    return (
        <ul className="navbar">
            <li className="locationButton navbar__item"><button onClick={() => navigate("locations")}>Show Locations</button></li>
            <li className="navbar__products navbar__item">
                <Link className="navbar__link" to="/product/search">Find Candy</Link>
            </li>
                <li className="navbar__purchases navbar__item">
                <Link className="navbar__link" to="/purchases">My Orders</Link>
            </li>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", { replace: true })
                }}>Logout</Link>
            </li>
        </ul>
    )
}