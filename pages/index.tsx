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

import HomeWeb from "../components/HomeWeb"
import HomeMobile from "../components/HomeMobile"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title> Home </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="xs:hidden lg:block"> 
        <HomeWeb />
      </div>

      <div className="xs:block lg:hidden">
        <HomeMobile />
      </div>
     
    </div>
  );
};

export default Home;
