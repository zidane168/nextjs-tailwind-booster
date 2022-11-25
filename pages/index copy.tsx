import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import ArrowDown from "../public/icon/arrow-down.svg"

import HomePhone from "../public/background/home-phone.png"
import Curved1 from "../public/background/curved-1.png"
import Curved2 from "../public/background/curved-2.png"
import Curved3 from "../public/background/curved-3.png"
import EllipseBig from "../public/background/ellipse-big.png"
import EllipseSmall from "../public/background/ellipse-small.png" 
import Rhomb from "../public/background/rhomb.png"


const Home: NextPage = () => {
  return (
    // <div className="flex min-h-screen flex-col items-center justify-center py-2">

    <>
      <Head>
        <title> Home </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto bg-home p-2">

        <div className="w-[1178px] mx-auto">
          <div id="menu" className=" z-10 flex text-white  justify-between mt-6 items-center">
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
              <div className="bg-sky-400 rounded-full px-6 py-2">Request a Demo</div>
            </div>
          </div>  

          <div className="flex ">
            <div id="left"  className="grow mt-[119px]">
              <div className="text-[42px] font-[700] leading-[82px] h-[82px] text-white">The </div>
              <div className="text-[92px] font-[600] leading-[99px] h-[99px] text-white">All-in-One</div>
              <div className="text-[92px] font-[600] leading-[99px]">Solution</div>
              <div className="mt-8">
                <div className="relative w-full">
                  <input type="text" className="border rounded-sm w-[483px] h-[50px] px-6 py-2" placeholder="Enter your email" />
                  <button className="absolute right-[168px] top-0 bg-[#3185FC] w-[125px] h-[50px] rounded-r-sm text-white"> Send </button>
                </div>
              </div>
            </div>

            <div id="right" className=" grow">
              <div>  
                <div className="w-screen absolute z-10 right-[-550px]" >
                  <Image src={HomePhone} alt="home-phone" />
                </div>
                <div className="w-screen absolute top-0 right-[-530px] z-0 ">
                  <Image src={Rhomb} alt="Rhomb" />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
 
    </>
    // </div>
  );
};

export default Home;
