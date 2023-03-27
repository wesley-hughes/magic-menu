import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  const localMagicUser = localStorage.getItem("magic_user");
  const magicUserObject = JSON.parse(localMagicUser);

  return (
    <>
      <nav className="bg-gray-50 px-4 py-2 fixed w-full z-20 top-0 left-0 border-b border-purple-200">
        <div className="container flex lg:flex-row sm:flex-col items-center justify-between mx-auto">
          <a href="/home" className="flex items-center">
            <img
              src="./images/crystal-ball.png"
              className="h-10 mr-3 mb-1 hover:scale-110"
              alt="crystal ball"
            ></img>
            <span className="self-center mt-1 text-5xl login-title text-purple-700 hover:scale-110">
              MagicMenu
            </span>
          </a>
          <div className="flex order-2">
            <Link
              className="px-2 btn btn-outline btn-secondary md:btn-sm sm:btn-xs pt-1"
              onClick={() => {
                localStorage.removeItem("magic_user");
                navigate("/login", { replace: true });
              }}
            >
              Logout
            </Link>
          </div>
          <div className="items-center justify-between hidden w-full sm:flex sm:w-auto sm:order-1">
            <ul className="flex flex-row rounded-lg">
              <li>
                <button
                  className="block mx-4 py-2 pl-3 pr-4 text-blue-500 rounded font-bold hover:text-purple-500 hover:underline  hover:scale-105 "
                  onClick={() => navigate("/menu")}
                >
                  Build Menu
                </button>
              </li>
              <li>
                <button
                  className="block mx-4 py-2 pl-3 pr-4 text-blue-500 rounded font-bold hover:text-purple-500 hover:underline hover:scale-105 "
                  onClick={() => navigate("/weeks")}
                >
                  Saved Menus
                </button>
              </li>
              <li>
                <button
                  className="block mx-4 py-2 pl-3 pr-4 text-blue-500 rounded font-bold hover:text-purple-500 hover:underline hover:scale-105 "
                  onClick={() => navigate("/favorites")}
                >
                  Favorite Recipes
                </button>
              </li>
              <li>
                <button
                  className="block mx-4 py-2 pl-3 pr-4 text-blue-500 rounded font-bold hover:text-purple-500 hover:underline  hover:scale-105 "
                  onClick={() => navigate("/profile")}
                >
                  Dietary Profile
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
    </>
  );
};
