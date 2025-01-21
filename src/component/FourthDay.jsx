import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbXboxXFilled } from "react-icons/tb";
import { TbArrowCurveRight } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoClose, IoDocuments } from "react-icons/io5";

import "./FourthDay.css";
import FourthDayLogo from "../image/FourthDayLogo.jpeg";
import FourthDay2 from "../image/FourthDay2.png";
import Follower from "../image/follower.png";

const FourthDay = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state for the menu
    };
    // const printvalue=()=>{
    //     console.log("You Clicked on a button");
    //     alert("You try to click on a button");
    // }

    return (
        <>
            <div className="bg-[#0A091C] w-full h-screen">
                {/* Navbar */}
                <nav className="bg-[#0A091C]">
                    <div className="Navbar flex items-center justify-between w-full h-16 px-4 md:px-8">
                        {/* Logo Section */}
                        <div className="flex items-center">
                            <TbXboxXFilled className="text-3xl text-green-500 md:text-5xl" />
                            <a className="text-white text-2xl font-bold md:text-4xl" href="#">
                                XENON
                            </a>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center justify-evenly w-[50%] text-white">
                            <a href="#">HOME</a>
                            <a href="#">PRODUCT</a>
                            <a href="#">FEATURES</a>
                            <a href="#">HOW TO APPLY</a>
                            <a href="#">TOOLS</a>
                            <div className="flex items-center justify-center">
                                <a href="#">
                                    MORE
                                    <RiArrowDropDownLine className="text-1xl inline align-middle" />
                                </a>
                            </div>
                        </div>

                        {/* Apply Now Button */}
                        <button className="bg-green-500 hover:bg-green-600 p-2 rounded-md text-white">
                            Apply Now
                        </button>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMenu} className="text-white text-3xl">
                                {isMenuOpen ? <IoClose /> : <TiThMenu />}
                            </button>
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="absolute top-16 left-0 w-full bg-[#0A091C] text-white flex flex-col items-center py-4 space-y-4 z-50">
                            <a href="#" className="hover:text-green-500">
                                HOME
                            </a>
                            <a href="#" className="hover:text-green-500">
                                PRODUCT
                            </a>
                            <a href="#" className="hover:text-green-500">
                                FEATURES
                            </a>
                            <a href="#" className="hover:text-green-500">
                                HOW TO APPLY
                            </a>
                            <a href="#" className="hover:text-green-500">
                                TOOLS
                            </a>
                            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white">
                                Apply Now
                            </button>
                        </div>
                    )}
                </nav>

                {/* Content */}
                <div className="p-14 ">
                    <div>
                        <p className="hadding text-white h-64 text-7xl">
                            Unlock Your <b>Business</b>{" "}
                            <TbArrowCurveRight className="text-green-500 inline rotate-45 text-8xl" /> <br />
                            Potential with Xenon Bank
                        </p>
                    </div>

                    {/* Footer Section */}
                    <div className="flex justify-around h-[40vh] w-full">
                        {/* Left Section */}
                        <div className="flex flex-col justify-between w-[30%] h-full">
                            <p className="text-white">
                                Achieve business success with Xenon Bank. Our comprehensive financial solutions help unlock your business potential and take your vision to the next level.
                            </p>
                            <div className="flex items-center bg-white p-0.5 rounded-md pr-3 w-fit">
                                <button className="bg-green-500 p-2 rounded-md mr-2 hover:bg-green-600">APPLY NOW</button>
                                <FaArrowRight />
                            </div>
                            {/* Logo Section */}
                            <div className="flex items-center gap-4">
                                <img className="bg-[#0A091C] rounded-full h-16 w-16" src={FourthDayLogo} alt="#" />
                                <p className="text-white">
                                    <b>2023</b> the world's <br /> best digital bank
                                </p>
                            </div>
                        </div>

                        {/* Middle Section */}
                        <div className="w-[30%] h-full items-center justify-center">
                            <div className="w-[75%] h-full items-center justify-around bg-gradient-to-b from-green-500 to-[#0A091C] rounded-t-[40%] ">
                                <img className="[bg-green-500] h-full" src={FourthDay2} alt="#" />
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="w-[30%] flex flex-col justify-between h-full">
                            {/* List Section */}
                            <ul className="gap-4 flex flex-col list-disc text-white pl-5">
                                <li>Fast, easy loan application</li>
                                <li>Flexible repayment options</li>
                                <li>Competitive interest rates</li>
                            </ul>

                            {/* Logo and Text Section */}
                            <div className="flex items-center justify-between mt-6">
                                {/* Overlapping Images */}
                                <div className="relative w-1/2 flex items-center">
                                    <div className="absolute -z-1 left-10">
                                        <img
                                            className=" rounded-full h-16 w-16 bg-[#0A091C]"
                                            src={Follower}
                                            alt="Logo 1"
                                        />
                                    </div>
                                    <div className="absolute left-4 z-0">
                                        <img
                                            className=" rounded-full h-16 w-16 bg-[#0A091C]"
                                            src={Follower}
                                            alt="Logo 2"
                                        />
                                    </div>
                                    <p className="text-white text-5xl absolute left-24">12M</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FourthDay;
