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
          <div id="menu" className="relative z-10 flex text-white  justify-between mt-6 items-center">
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

          <div className="flex  ">
            <div id="left"  className="relative mt-[119px]">
              <div className="text-[42px] font-[700] leading-[82px]  text-white">The </div>
              <div className="text-[92px] font-[600] leading-[99px]  text-white">All-in-One</div>
              <div className="text-[92px] font-[600] leading-[99px]">Solution</div>
              <div className="mt-8">
                <div className="relative  w-full">
                  <input type="text" className="border rounded-sm w-[483px] h-[50px] px-6 py-2" placeholder="Enter your email" />
                  <button className="absolute right-[15px] top-0 bg-[#3185FC] w-[125px] h-[50px] rounded-r-sm text-white"> Send </button>
                </div>
              </div>
              <div className="absolute z-20 left-[5px] w-[700px] top-[-100px] opacity-10">
                <Image src={EllipseBig} alt="Ellipse Big"  />
              </div>
              <div className="absolute z-20 left-[-100px] w-[700px] top-[50px] opacity-5">
                <Image src={EllipseSmall} alt="Ellipse Small"  />
              </div>
            </div>

            <div id="right relative">
              <div className="absolute z-0 3xl:top-0 3xl:left-[860px] w-[760px] xl:top-0">
                <Image src={Rhomb} alt="Rhomb"  />
              </div>

              <div className="absolute z-20 3xl:left-[960px] w-[622px] xl:left-[730px]">
                <Image src={HomePhone} alt="home-phone" />
              </div>
            
              {/* xl: 1024 tro len: 3xl: 1900 tro len */}
              <div className="absolute z-20 3xl:top-[499px] 3xl:left-[965px] xl:left-[730px] xl:top-[499px]"> 
                <Image src={Curved1} alt="Curved1"  />
              </div>
              <div className="absolute z-10 3xl:top-[388px] 3xl:left-[940px] xl:left-[703px] xl:top-[386px]">
                <Image src={Curved2} alt="Curved2"  />
              </div>
              <div className="absolute z-10 3xl:top-[195px] 3xl:left-[940px] xl:left-[703px] xl:top-[186px]">
                <Image src={Curved3} alt="Curved3"  />
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
