import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
import Teawood from "../public/images/teawood.png";
import MemberBooster from "../public/images/member-booster.png";

import DatabaseIcon from "../public/icon/database.png";
import DBRelationshipIcon from "../public/icon/db-relationship.png";
import LoyaltIcon from "../public/icon/loyalt.png";
import MessageIcon from "../public/icon/message.png";
import UsersIcon from "../public/icon/users.png";
import XIcon from "../public/icon/x.png";
import PhoneIcon from "../public/icon/phone.png";
import EmailIcon from "../public/icon/email.png";
import FireIcon from "../public/icon/fire.png";
import ListIcon from "../public/icon/list.png";

import LeftArrow from "../public/icon/left-arrow.png";
import RightArrow from "../public/icon/right-arrow.png";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title> Home </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto bg-home p-2">
        <div className="w-[1178px] mx-auto">
          <div  id="menu" 
                className="relative z-10 flex text-white  justify-between mt-6 items-center" >
            <div className="flex items-center space-x-2">
              <div  > <Image src={FireIcon} alt="fire icon" /> </div> 
              <div className="flex">
                <div>Member</div> 
                <div className="text-white font-bold">Booster </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4 items-center">
              <div className="flex  space-x-4 items-center">
                Why MB
                <div className="w-5">
                  <Image src={ArrowDown} alt="arrow-down" />
                </div>
              </div>
              <div className="flex  space-x-4 items-center">
                Multi-platforms
                <div className="w-5">
                  <Image src={ArrowDown} alt="arrow-down" />
                </div>
              </div>
              <div className="flex space-x-4 items-center ">
                Features
                <div className="w-5">
                  <Image src={ArrowDown} alt="arrow-down" />
                </div>
              </div>
              <div className="flex  space-x-4 items-center">
                Showcases
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
                The
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
                    
                    Send
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
            
            Our <span className="text-orange-600 "> Awards </span>
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

          <div>
            <Image src={Viutv} alt="HK Viutv" />
          </div>

          <div>
            <Image src={HK_Mos} alt="HK Mos" />
          </div>
        </div>

        <div className="text-[42px] leading-[82px] font-[700] mt-[103px]">
          <div>
            We know your <span className="text-orange-600 "> Pain Point </span>
          </div>
        </div>
        <div className="text-[16px] leading-[24px] font-[400]">
          Quam lacus id eleifend diam aliquet blandit interdum. Pretium mattis
          leo tellus ut leo sit scelerisque. Adipiscing dolor, est morbi
          senectus metus cursus. Consequat dictum venenatis vulputate ut
          commodo.
        </div>

        <div className="mt-[50px] flex justify-center space-x-4">
          <div className="pb-[30px] pt-4 pl-[24px] pr-[16px] rounded-md bg-gradient-to-r from-[#C5D9BF]  to-[#C4DCBD]  w-[330px] relative">
            <div className="w-[15px]">
              
              <Image src={DatabaseIcon} alt="Database Icon" />
            </div>
            <div className="mt-2 text-[20px] font-[600] leading-[30px] text-[#1b1f22]">
              
              Don't have your own member data for big data analysis
            </div>
            <div className="w-[60px] absolute bottom-[2px] right-[30px]">
              
              <Image src={XIcon} alt="X Icon" />
            </div>
          </div>

          <div className="pb-[30px] pt-4 pl-[24px] pr-[16px] rounded-md bg-gradient-to-r from-[#FBF0EE]  to-[#FCEEEE] w-[330px] relative">
            <div className="w-[15px]">
              
              <Image src={UsersIcon} alt="Users Icon" />
            </div>
            <div className="mt-2 text-[20px] font-[600] leading-[30px] text-[#1b1f22]">
              
              Don't know your customer in all areas (e.g. age range,
              gender...etc)
            </div>
            <div className="w-[60px] absolute bottom-[2px] right-[30px]">
              
              <Image src={XIcon} alt="X Icon" />
            </div>
          </div>

          <div className="pb-[30px] pt-4 pl-[24px] pr-[16px] rounded-md bg-gradient-to-r from-[#DCEFF9] to-[#ECF7FD] w-[330px] relative">
            <div className="w-[15px]">
              
              <Image src={MessageIcon} alt="Message Icon" />
            </div>
            <div className="mt-2 text-[20px] font-[600] leading-[30px] text-[#1b1f22]">
              
              Don't have a effective way to communicate with your customer
            </div>
            <div className="w-[60px] absolute bottom-[2px] right-[30px]">
              
              <Image src={XIcon} alt="X Icon" />
            </div>
          </div>
        </div>

        <div className="mt-[1rem] flex space-x-4">
          <div className="pb-[30px] pt-4 pl-[24px] pr-[16px] rounded-md bg-gradient-to-r from-[#E6E0F5] to-[#FBFAFF] w-[315px] relative">
            <div className="w-[15px]">
              
              <Image src={LoyaltIcon} alt="Loyalt Icon" />
            </div>
            <div className="mt-2 text-[20px] font-[600] leading-[30px] text-[#1b1f22]">
              
              Hard to encourage customer to revisit the shop without loyalty
              programe and rewards
            </div>
            <div className="w-[60px] absolute bottom-[2px] right-[30px]">
              
              <Image src={XIcon} alt="X Icon" />
            </div>
          </div>

          <div className="pb-[30px] pt-4 pl-[24px] pr-[16px] rounded-md bg-gradient-to-r from-[#EFF8EC]  to-[#FDF6EC] w-[315px] relative">
            <div className="w-[15px]">
              
              <Image src={DBRelationshipIcon} alt="DB Relationship Icon" />
            </div>
            <div className="mt-2 text-[20px] font-[600] leading-[30px] text-[#1b1f22]">
              
              Don't have a centralised database to review/export the CRM data
            </div>
            <div className="w-[60px] absolute bottom-[2px] right-[30px]">
              
              <Image src={XIcon} alt="X Icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-body mt-[132px]">
        <div className="relative">
          <div className="absolute top-0 xl:right-[200px] mt-[102px] 3xl:right-[400px]">
            <div className="text-white text-[42px] leading-[82px font-[700]">
              <span className="text-[#FFF] opacity-80">Customer</span>
              <span className="text-white">Testimonial </span>
            </div>
            <div className="text-white text-[16px] leading-[24px] font-[400] w-[580px]">
              
              Quam lacus id eleifend diam aliquet blandit interdum. Pretium
              mattis leo tellus ut leo sit scelerisque.
            </div>
            <button className="mt-[34px] rounded-md px-[22px] py-[6px] font-[600] text-white bg-[#3185FC]">
              
              Get in Touch
            </button>
          </div>

          <div className="absolute  top-[180px] xl:left-[230px] z-20 3xl:left-[500px]">
            <div className="py-[91px] px-[50px] bg-white rounded-md">
              <Image src={Teawood} alt="Teawood" />
            </div>
          </div>

          <div className="bg-[#F4F5F6] absolute text-black  top-[330px] xl:left-[450px] 3xl:left-[725px] w-[800px]  rounded-md z-10">
            <div className=" w-[550px] ml-[200px] pt-[42px]  pb-[27px]">
              <div className="text-[16px] leading-[24px] font-[400] text-[#1B1F22]">
                “After using another membership service for more than 5 years, I
                was apprehensive to make a change. However, Member Booster has
                been an absolute delight! The software is easy to learn and
                user-friendly. The support staff has been there for us
                everything step of the way and has met all our needs.”
              </div>

              <div className="flex justify-between items-center mt-[17px]">
                <div className="flex flex-col">
                  <div className="text-[20px] leading-[30px] font-[600] text-[#1B1F22]">
                    
                    Billy Li
                  </div>
                  <div className="text-[14px] leading-[21px] font-[400] text-[#424B54]">
                    
                    Marketing Director
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div>
                    
                    <Image src={LeftArrow} alt="Left Arrow" />
                  </div>
                  <div>
                    
                    <Image src={RightArrow} alt="Right Arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute opacity-10  top-[50px] xl:right-[10px] 3xl:right-[200px]">
            <div className="w-[785.34px] ">
              <Image src={EllipseBig} alt="" />
            </div>
          </div>

          <div className="absolute opacity-5  top-[150px] xl:right-[150px] 3xl:right-[300px]">
            <div className="w-[735.77px]">
              <Image src={EllipseSmall} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="mx-auto w-[980px] mt-[102px]">
        <div className="flex justify-between items-center space-x-2">
          <div>
            
            <Image src={MemberBooster} alt="Member Booster" />
          </div>

          <div className="flex space-x-2">
            <div className="flex items-center">
              <div className="bg-[#3185FC] text-white flex space-x-4 p-[40px] rounded-md shadow-lg">
                <div className="w-50 p-[5px] bg-white">
                  
                  <Image src={PhoneIcon} alt="Phone Icon" />
                </div>
                <div className="flex flex-col ">
                  <div className="font-[600] text-[20px] leading-[30px]">
                    
                    Call Us
                  </div>
                  <div className="mt-[4px] font-[400] text-16px] leading-[24px]">
                    +852 8888 888
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-white text-[#424B54] flex space-x-4 p-[40px] rounded-md shadow-lg">
                <div className="w-50 p-[15px] bg-[#3185FC] flex items-center"> 
                  <Image src={EmailIcon} alt="Email Icon" />
                </div>
                <div className="flex flex-col ">
                  <div className="font-[600] text-[20px] leading-[30px]">
                    
                    <a href="#"> Email Us </a>
                  </div>
                  <div className="mt-[4px]  font-[400] text-16px] leading-[24px]">
                    
                    info@abc-abc.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <div className="mt-[59px] bg-footer">
        <div className="p-[62px] w-[1178px] mx-auto text-white flex justify-between">
          {/* Column 1  */}
          <div>
            <div className="font-[600] text-[22px] leading-[24px]"> 
              Multi-Platform
            </div>

            <div className="mt-[35px] font-[400] text-[16px] leading-[24px]">
              <div> 
                <Link href="#"> Mobile App </Link>
              </div>
              <div className="mt-[15px]">
                <Link href="#"> Website </Link>
              </div>
              <div className="mt-[15px]">
                <Link href="#"> WeChat </Link>
              </div>
            </div>
            
            <div className="mt-[33px]   opacity-80">
              © Copyright 2022
            </div>
          </div>

          {/* Column 2  */}
          <div>
            <div className="font-[600] text-[22px] leading-[24px]"> 
              Features
            </div>

            <div className="mt-[35px] font-[400] text-[16px] leading-[24px]">
              <div> 
                <Link href="#"> Basic Package </Link>
              </div>
              <div className="mt-[15px]">
                <Link href="#"> Select feature </Link>
              </div>
              <div className="mt-[15px]">
                <Link href="#"> Request a Demo </Link>
              </div>
            </div>
          </div>

          {/* Column 3  */}
          <div>
            <div className="font-[600] text-[22px] leading-[24px]"> 
              Showcases
            </div>

            <div className="mt-[35px] font-[400] text-[16px] leading-[24px]">
              <div> 
                <Link href="#"> F&B </Link>
              </div>
              <div className="mt-[15px]">
                <Link href="#"> Retail </Link>
              </div>
              <div className="mt-[15px]">
                <Link href="#"> Services Industry </Link>
              </div>
            </div>
          </div>

          {/* Column 4  */}
          <div>
            <div className="font-[600] text-[22px] leading-[24px]"> 
              Contact Us
            </div>

            <div className="mt-[35px] font-[400] text-[16px] leading-[24px]">
              <div> 
                <Link href="#"> Google Map </Link>
              </div>
              <div className="mt-[15px]"> 
                <Link href="#"> Enquiry Forms </Link>
              </div> 
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Home;
