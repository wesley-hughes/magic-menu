import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col ml-[200px] mt-[90px] h-screen">
        <div className="text-[200px] -rotate-12 text-purple-700 drop-shadow-md login-title">
          Let's get cooking...
        </div>
        <button
          className="btn btn-outline btn-secondary -mt-[30px] ml-[550px] bg-white bg-opacity-80 w-[300px] pt-1 animate-bounce"
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
