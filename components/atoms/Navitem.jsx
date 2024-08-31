// components/atoms/NavItem.js
import Link from 'next/link';
import "@../../../app/globals.css"

const Navitem = ({ href, children, isActive, onClick }) => {
  return (
    <li


      className={`py-[10px] pl-[8px] flex pr-[45px] cursor-pointer rounded-[4px] ${isActive ? 'bg-[#d6d6d6]' : 'bg-[#fff]'} hover:bg-[#d6d6d6]`}
      onClick={onClick}
    >
      <Link href={href} legacyBehavior>
        <a className="flex items-center text-[#676767]">{children}</a>
      </Link>
    </li>
  );
};

export default Navitem;
