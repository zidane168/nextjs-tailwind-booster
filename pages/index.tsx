import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import ArrowDown from "../public/icon/arrow-down.svg";

import HomePhone from "../public/background/home-phone.png";
import Curved1 from "../public/background/curved-1.png";
import Curved2 from "../public/background/curved-2.png";
import Curved3 from "../public/background/curved-3.png";
import EllipseBig from "../public/background/ellipse-big.png";
import EllipseSmall from "../public/background/ellipse-small.png";
import Rhomb from "../public/background/rhomb.png";

import HK_ICT_Awards from "../public/images/hk-ict-awards.png";
import HK_Mos from "../public/images/hkmos.png";
import Viutv from "../public/images/viutv_logo.png";

import DatabaseIcon from "../public/icon/database.png";
import DBRelationshipIcon from "../public/icon/db-relationship.png";
import LoyaltIcon from "../public/icon/loyalt.png";
import MessageIcon from "../public/icon/message.png";
import UsersIcon from "../public/icon/users.png";
import XIcon from "../public/icon/x.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Home </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto bg-home p-2">
        <div className="w-[1178px] mx-auto">
          <div
            id="menu"
            className="relative z-10 flex text-white  justify-between mt-6 items-center"
          >
            <div>
              Member<span className="text-white font-bold">Booster </span>
            </div>

            <div className="flex justify-center space-x-4 items-center">
              <div className="flex  space-x-4 items-center">
                Why MB
                <div className="w-5">
                  <Image src={ArrowDown} alt="arrow-down" />
                </div>
              </div>
              <div className="flex  space-x-4 items-center">
                Multi-platforms{" "}
                <div className="w-5">
                  <Image src={ArrowDown} alt="arrow-down" />
                </div>
              </div>
              <div className="flex space-x-4 items-center ">
                Features{" "}
                <div className="w-5">
                  <Image src={ArrowDown} alt="arrow-down" />
                </div>{" "}
              </div>
              <div className="flex  space-x-4 items-center">
                Showcases{" "}
                <div className="w-5">
                  <Image src={ArrowDown} alt="arrow-down" />
                </div>
              </div>
              <div>Contact Us </div>
              <div className="bg-sky-400 rounded-full px-6 py-2">
                Request a Demo
              </div>
            </div>
          </div>

          <div className="flex  ">
            <div id="left" className="relative mt-[119px]">
              <div className="text-[42px] font-[700] leading-[82px]  text-white">
                The{" "}
              </div>
              <div className="text-[92px] font-[600] leading-[99px]  text-white">
                All-in-One
              </div>
              <div className="text-[92px] font-[600] leading-[99px]">
                Solution
              </div>
              <div className="mt-8">
                <div className="relative  w-full">
                  <input
                    type="text"
                    className="border rounded-sm w-[483px] h-[50px] px-6 py-2"
                    placeholder="Enter your email"
                  />
                  <button className="absolute right-[15px] top-0 bg-[#3185FC] w-[125px] h-[50px] rounded-r-sm text-white">
                    {" "}
                    Send{" "}
                  </button>
                </div>
              </div>
              <div className="absolute z-20 left-[5px] w-[700px] top-[-100px] opacity-10">
                <Image src={EllipseBig} alt="Ellipse Big" />
              </div>
              <div className="absolute z-20 left-[-100px] w-[700px] top-[50px] opacity-5">
                <Image src={EllipseSmall} alt="Ellipse Small" />
              </div>
            </div>

            <div id="right relative">
              <div className="absolute z-0 3xl:top-0 3xl:left-[860px] w-[760px]  xl:top-0">
                <Image src={Rhomb} alt="Rhomb" />
              </div>

              <div className="absolute z-20 3xl:left-[960px] w-[622px] xl:left-[730px]">
                <Image src={HomePhone} alt="home-phone" />
              </div>

              {/* xl: 1024 tro len: 3xl: 1900 tro len */}
              <div className="absolute z-20 3xl:top-[499px] 3xl:left-[965px] xl:left-[730px] xl:top-[499px]">
                <Image src={Curved1} alt="Curved1" />
              </div>
              <div className="absolute z-10 3xl:top-[388px] 3xl:left-[940px] xl:left-[703px] xl:top-[386px]">
                <Image src={Curved2} alt="Curved2" />
              </div>
              <div className="absolute z-10 3xl:top-[195px] 3xl:left-[940px] xl:left-[703px] xl:top-[186px]">
                <Image src={Curved3} alt="Curved3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Awards */}
      <div className="mx-auto w-[980px] ">
        <div className="text-[42px] leading-[82px] font-[700] mt-[103px]">
          <div>
            {" "}
            Our <span className="text-orange-600 "> Awards </span>{" "}
          </div>
        </div>
        <div className="text-[16px] leading-[24px] font-[400]">
          ABC has received number of awards and been widely recognized by our
          partners, the media and industry organizations for our outstanding
          service, ground-breaking products and business achievements.
        </div>

        <div className="mt-[102px] flex justify-between items-center">
          <div className="shadow-lg px-4 py-2 w-[180px] rounded-md">
            <Image src={HK_ICT_Awards} alt="HK ict awards" />
          </div>

          <div >
            <Image src={Viutv} alt="HK Viutv" />
          </div>
 
          <div  >
            <Image src={HK_Mos} alt="HK Mos" />
          </div> 
        </div>

        <div className="text-[42px] leading-[82px] font-[700] mt-[103px]">
          <div> 
            We know your <span className="text-orange-600 "> Pain Point </span>{" "}
          </div>
        </div>
        <div className="text-[16px] leading-[24px] font-[400]">
          Quam lacus id eleifend diam aliquet blandit interdum. Pretium mattis leo tellus ut leo sit scelerisque. Adipiscing dolor, est morbi senectus metus cursus. Consequat dictum venenatis vulputate ut commodo.
        </div> 


        <div className="mt-[50px] flex justify-center space-x-4">
          <div className="pb-[30px] pt-4 pl-[24px] pr-[16px] rounded-md bg-gradient-to-r from-[#C5D9BF]  to-[#C4DCBD]  w-[330px] relative">
            <div className="w-[15px]"> <Image src={DatabaseIcon} alt="Database Icon" /> </div> 
            <div className="mt-2 text-[20px] font-[600] leading-[30px] text-[#1b1f22]"> Don't have your own member data for big data analysis </div> 
            <div className="w-[60px] absolute bottom-[2px] right-[30px]"> <Image src={XIcon} alt="X Icon" /> </div> 
          </div> 

          <div className="pb-[30px] pt-4 pl-[24px] pr-[16px] rounded-md bg-gradient-to-r from-[#FBF0EE]  to-[#FCEEEE] w-[330px] relative">
            <div className="w-[15px]"> <Image src={UsersIcon} alt="Users Icon" /> </div> 
            <div className="mt-2 text-[20px] font-[600] leading-[30px] text-[#1b1f22]"> Don't know your customer in all areas (e.g. age range, gender...etc) </div> 
            <div className="w-[60px] absolute bottom-[2px] right-[30px]"> <Image src={XIcon} alt="X Icon" /> </div> 
          </div> 

          <div className="pb-[30px] pt-4 pl-[24px] pr-[16px] rounded-md bg-gradient-to-r from-[#DCEFF9] to-[#ECF7FD] w-[330px] relative">
            <div className="w-[15px]"> <Image src={MessageIcon} alt="Message Icon" /> </div> 
            <div className="mt-2 text-[20px] font-[600] leading-[30px] text-[#1b1f22]"> Don't have a effective way to communicate with your customer </div> 
            <div className="w-[60px] absolute bottom-[2px] right-[30px]"> <Image src={XIcon} alt="X Icon" /> </div> 
          </div>  
        </div>

        <div className="mt-[50px] flex justify-center space-x-4">
          <div className="pb-[30px] pt-4 pl-[24px] pr-[16px] rounded-md bg-gradient-to-r from-[#E6E0F5] to-[#FBFAFF] w-[330px] relative">
            <div className="w-[15px]"> <Image src={LoyaltIcon} alt="Loyalt Icon" /> </div> 
            <div className="mt-2 text-[20px] font-[600] leading-[30px] text-[#1b1f22]"> Hard to encourage customer to revisit the shop without loyalty programe and rewards </div> 
            <div className="w-[60px] absolute bottom-[2px] right-[30px]"> <Image src={XIcon} alt="X Icon" /> </div> 
          </div> 

          <div className="pb-[30px] pt-4 pl-[24px] pr-[16px] rounded-md bg-gradient-to-r from-[#EFF8EC]  to-[#FDF6EC] w-[330px] relative">
            <div className="w-[15px]"> <Image src={DBRelationshipIcon} alt="DB Relationship Icon" /> </div> 
            <div className="mt-2 text-[20px] font-[600] leading-[30px] text-[#1b1f22]"> Don't have a centralised database to review/export the CRM data </div> 
            <div className="w-[60px] absolute bottom-[2px] right-[30px]"> <Image src={XIcon} alt="X Icon" /> </div> 
          </div> 
 
        </div>
      </div>

{/* 
      <div className="w-[10px]"> <Image src={DBRelationshipIcon} alt="DB" /> </div>
            <div className="w-[10px]"> <Image src={LoyaltIcon} alt="DB" /> </div>
            <div className="w-[10px]"> <Image src={MessageIcon} alt="DB" /> </div>
            <div className="w-[10px]"> <Image src={UsersIcon} alt="DB" /> </div> */}
    </>
  );
};

export default Home;
