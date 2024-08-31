import React from 'react'
import AnchorTag from '../atoms/AnchorTag'
import Container from '../atoms/Container'
import { FaPlus } from "react-icons/fa6";
import Heading from '../atoms/Heading';
import Span from '../atoms/Span';
import { FaBell } from "react-icons/fa6";
function Headermain() {
  return (
    <div>
      <Container>
        <div className="flex gap-[13%] items-center">
          <div className="">
            <img src="/assets/img/Layer_1.png" alt="Logo" />

          </div>
          <div className="">
            <ul className='flex gap-[25px] '>
              <li><AnchorTag variant='nav'> Buy</AnchorTag></li>
              <li><AnchorTag variant='nav'> Sell</AnchorTag></li>
              <li><AnchorTag variant='nav'> Sourcing</AnchorTag></li>
              <li><AnchorTag variant='nav'> Consign</AnchorTag></li>
              <li><AnchorTag variant='nav'> About Us</AnchorTag></li>
              <li><AnchorTag variant='nav'> Blog</AnchorTag></li>

            </ul>
          </div>
          <div className="flex gap-[20px] " >
            <div className="flex items-center">
              <Heading level='1'>En</Heading>
              <Span level='success'>/Ar</Span>
            </div>

            <div className=" flex w-[160px] h-[35px] rounded-[20px] bg-[#5E6062] text-white text-[16px] px-[20px] py-[8px] items-center gap-[3%]">
              <FaPlus />
              Create listing
            </div>
            <div className="flex gap-[9%] items-center">
              <div className="bg-[#5E6062] text-white h-[27px] w-[27px] rounded-[70px] px-[5px] py-[4px] ">
                <FaBell />
              </div>
              <img src="/assets/img/Ellipse 1.png" alt="" />
            </div>
          </div>
        </div>
      </Container>
      <hr />
    </div>
  )
}

export default Headermain