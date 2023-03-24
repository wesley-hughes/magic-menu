import { Link } from "react-router-dom";

export const SaveProfileModal = ({ onClose, visible }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-y-[230px] -mt-10 mb-[220px] shadow-md drop-shadow-md inset-x-[450px] border border-purple-300 rounded-3xl bg-opacity-80 bg-gray-50  backdrop-blur-sm ">
      <Link onClick={onClose}>
        <img
          className="ml-1 mt-1 drop-shadow-md  h-8 hover:animate-spin"
          src="./images/close.png"
          alt="close x"></img>
      </Link>
      <div className="flex flex-row items-center justify-center">
        <div className="text-3xl ml-[140px] mr-0 leading-tight -mt-[45px] tracking-tight drop-shadow-md text-indigo-600 opacity-90">
          changes saved successfully
        </div>
        <img className="h-[160px] mr-[120px] -mt-[60px] drop-shadow-lg" src="./images/potion.gif" alt="potion"></img>
      </div>
    </div>
  );
};
