import { Link } from "react-router-dom";

export const SaveProfileModal = ({ onClose, visible }) => {
  if (!visible) return null;
  return (
    <div className="fixed md:inset-y-[40%] sm:inset-y-[35%] shadow-md drop-shadow-md lg:inset-x-[30%] md:inset-x-[20%] border border-purple-300 rounded-3xl bg-opacity-80 bg-gray-50  backdrop-blur-sm ">
      <Link onClick={onClose}>
        <img
          className="ml-1 mt-1 drop-shadow-md h-8 hover:animate-spin"
          src="./images/close.png"
          alt="close x"></img>
      </Link>
      <div className="flex flex-row items-center justify-center md:mt-0 sm:mt-5">
        <div className="text-3xl leading-tight tracking-tight drop-shadow-md text-indigo-600 opacity-90">
          changes saved successfully
        </div>
        <img className="h-20 drop-shadow-lg" src="./images/potion.gif" alt="potion"></img>
      </div>
    </div>
  );
};
