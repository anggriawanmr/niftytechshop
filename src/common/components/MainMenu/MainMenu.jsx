import { HiOutlineDesktopComputer } from 'react-icons/hi';

export const MainMenu = (props) => {
  console.log('Main Menu: ', props);
  return (
    <div className="bg-slate-800 text-white px-5 h-16 sticky top-0 z-20">
      <div className="py-4 pl-5 flex text-pink-600">
        <HiOutlineDesktopComputer size={30} />
      </div>
    </div>
  );
};
