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

export default function HomeMobile() {
  return (
    <>
      <div className="font-gilroy mx-auto bg-home p-2">
        <div className="w-[1024px] mx-auto">
          {/* mobile 375 */}

          <div id="menu">
            <div className="relative z-10 flex text-white  justify-between mt-6 items-center">
              <div className="flex items-center space-x-2">
                <div>
                  <Image src={FireIcon} alt="fire icon" /> 
                </div>
                <div className="flex ">
                  <div className="font-gilroy ">Member</div>
                  <div className="text-white font-gilroy  font-bold">Booster </div>
                </div>
              </div>

              <div className="List">
                <Image src={ListIcon} alt="List Icon" /> 
              </div>
            </div>
          </div>

          <div className="flex">
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

              {/* xl: 1280 tro len: 3xl: 1900 tro len */}
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
    </>
  );
}
