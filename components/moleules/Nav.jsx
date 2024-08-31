"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NavItem from '../atoms/NavItem';
import "@../../../app/globals.css"
import { VscWatch } from "react-icons/vsc";
import { BsGridFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Heading from '../atoms/Heading';
import Container from '../atoms/Container';
import { IoIosLogOut } from "react-icons/io";


const Nav = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('/dashboardpage');

  useEffect(() => {
    setActiveItem(router.pathname);
  }, [router.pathname]);

  const handleItemClick = (href) => {
    setActiveItem(href);
  };

  return (
    <Container>
      <nav className="w-[250px] h-[430px] justify-between grid border-[1px] rounded-[20px]  text-white">
        <ul className="flex flex-col gap-[5px] list-none">
          <NavItem
            href="/account"
            isActive={activeItem === '/account' || router.pathname === '/'}
            onClick={() => handleItemClick('/account')}
            className='bg-green-500'
          >
            <div className='flex items-center  px-[15px]  text-[20px] gap-[20px]'  >
              <BsGridFill />
              <Heading level='2'>Dashboard</Heading>
            </div>
          </NavItem>
          <NavItem
            href="/listings"
            isActive={activeItem === '/listings'}
            onClick={() => handleItemClick('/listings')}
          >
            <div className='flex items-center  px-[15px]  text-[20px] gap-[20px]'>
              <FaTag />
              <Heading level='2'>Listings</Heading>
            </div>
          </NavItem>
          <NavItem
            href="/notifications"
            isActive={activeItem === '/notifications'}
            onClick={() => handleItemClick('/notifications')}
          >
            <div className='flex items-center  px-[15px]  text-[20px] gap-[20px]'>
              <IoMdNotifications />
              <Heading level='2'> Notifications</Heading>
            </div>
          </NavItem>
          <NavItem
            href="/profile"
            isActive={activeItem === '/profile'}
            onClick={() => handleItemClick('/profile')}
          >
            <div className='flex items-center  px-[15px]  text-[20px] gap-[20px]'>
              <CgProfile />
              <Heading level='2'>Profile</Heading>
            </div>
          </NavItem>
          <NavItem
            href="/mangement"
            isActive={activeItem === '/mangement'}
            onClick={() => handleItemClick('/mangement')}
          >
            <div className='flex items-center  px-[15px]  text-[20px] gap-[20px]'>
              <VscWatch />
              <Heading level='2'>Stock Mangement</Heading>
            </div>
          </NavItem>
        </ul>
        <div className="flex pl-[25px] mb-[-30px] items-center text-[18px]  text-red-700 ">
          {/* <NavItem
          href="/login"
          isActive={activeItem === '/login'}
          onClick={() => handleItemClick('/login')}
        > */}
          <IoIosLogOut />
          Logout
          {/* </NavItem> */}
        </div>
      </nav>
    </Container>
  );
};

export default Nav;
