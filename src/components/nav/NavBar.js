import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  const localMagicUser = localStorage.getItem("magic_user");
  const magicUserObject = JSON.parse(localMagicUser);

  return (
    <>
      <nav className="bg-blue-100 px-4 py-2 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <img
              src="./images/crystal-ball.png"
              className="h-10 mr-3 hover:scale-110"
              alt="crystal ball"
            ></img>
            <span className="self-center text-xl text-purple-700 font-semibold hover:scale-110 hover:text-blue-">
              MagicMenu
            </span>
          </a>
          <div className="flex md:order-2">
            <Link
              className="text-white bg-purple-400 px-2 rounded hover:scale-105 hover:bg-blue-400"
              to=""
              onClick={() => {
                localStorage.removeItem("magic_user");
                navigate("/", { replace: true });
              }}
            >
              Logout
            </Link>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-row rounded-lg">
              <li>
                <button
                  className="block py-2 pl-3 pr-4 text-purple-500 rounded font-bold hover:text-blue-500  hover:scale-105 "
                  onClick={() => navigate("/menu")}
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  className="block py-2 pl-3 pr-4 text-purple-500 rounded font-bold hover:text-blue-500 hover:scale-105 "
                  onClick={() => navigate("/weeks")}
                >
                  Weeks
                </button>
              </li>
              <li>
                <button
                  className="block py-2 pl-3 pr-4 text-purple-500 rounded font-bold hover:text-blue-500 hover:scale-105 "
                  onClick={() => navigate("/favorites")}
                >
                  Favorites
                </button>
              </li>
              <li>
                <button
                  className="block py-2 pl-3 pr-4 text-purple-500 rounded font-bold hover:text-blue-500  hover:scale-105 "
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
