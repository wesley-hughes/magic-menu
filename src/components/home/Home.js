import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center lg:mt-[10%] sm:mt-[30%] h-screen   sm:flex-wrap">
        <div className="lg:text-[1000%] -rotate-12 text-purple-700 drop-shadow-md login-title text-center sm:mb-12 sm:text-[600%]">
          Let's get cooking...
        </div>
        <button
          className="btn btn-outline btn-secondary bg-white bg-opacity-80 animate-bounce"
          onClick={() => {
            navigate("/menu");
          }}
        >
          get that cauldron bubblin'
        </button>
      </div>
    </>
  );
};
