import Link from 'next/link';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

export const MainMenu = ({ items }) => {
  console.log('Main Menu: ', items);
  return (
    <div className="bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20 flex">
      <div className="py-4 pl-5 flex text-pink-600">
        <HiOutlineDesktopComputer size={30} />
      </div>
      <div className="flex flex-1 justify-end">
        {(items || []).map((item) => (
          <div
            key={item.id}
            className="hover:bg-slate-700 cursor-pointer relative group"
          >
            <div>
              <Link href={item.destination}>
                <a className="p-5 block">{item.label}</a>
              </Link>
            </div>
            {!!item.subMenuItems?.length && (
              <div className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3">
                {item.subMenuItems.map((subMenuItem) => (
                  <Link key={subMenuItem.id} href={subMenuItem.destination}>
                    <a className="block whitespace-nowrap p-5 hover:bg-slate-700">
                      {subMenuItem.label}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
