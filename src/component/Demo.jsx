import { useState } from "react";
import { TbXboxXFilled } from "react-icons/tb";
import { IoMenu, IoClose } from "react-icons/io5";
import { TbArrowCurveRight } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

import FourthDayLogo from "../image/FourthDayLogo.jpeg";
import FourthDay2 from "../image/FourthDay2.png";
import Follower from "../image/follower.png";


const Demo = () => {
    const [isOpen, setIsOpen] = useState(false); // For toggling mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: "HOME", href: "/home" },
        { name: "PRODUCT", href: "/product" },
        { name: "FEATURES", href: "/features" },
        { name: "TOOLS", href: "/tools" },
        { name: "CONTACT", href: "/Contactus" },
    ];

    return (
        <>
            <div className="bg-[#0A091C] w-full h-screen" >
                <nav className=" w-full h-16 flex items-center justify-between px-4 sm:px-8">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2">
                        <TbXboxXFilled className="text-3xl text-green-500 md:text-5xl" />
                        <a
                            className="text-white text-2xl font-bold md:text-4xl"
                            href="#"
                        >
                            XENON
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden sm:flex items-center space-x-6">
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className="text-white hover:text-green-500"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="bg-green-500 rounded-lg text-white py-2 px-4">
                            Apply Now
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="text-white text-3xl sm:hidden"
                    >
                        {isOpen ? <IoClose /> : <IoMenu />}
                    </button>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="absolute top-16 left-0 w-full bg-[#0A091C] text-red-50 flex flex-col items-start pl-4 py-4 space-y-4 z-50 sm:hidden">
                            {navLinks.map((link, index) => (
                                <a
                                    href={link.href}
                                    key={index}
                                    className="hover:text-green-500"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    )}
                </nav>
                <div className="p-14">
                    <div>
                        <p className="hadding text-white h-auto mb-14 text-4xl sm:text-5xl md:text-5.5xl lg:text-7xl">
                            Unlock Your <b>Business</b>{" "}
                            <TbArrowCurveRight className="text-green-500  rotate-45 text-8xl hidden sm:inline" /> <br />
                            Potential with Xenon Bank
                        </p>
                    </div>

                    {/* Hero Menu */}

                    <div className="sm:flex sm:justify-around sm:h-[40vh] sm:w-full">
                        {/* Left Section */}
                        <div className="flex flex-col sm:justify-between sm:w-[30%] h-auto w-full">
                            <p className="text-white ">
                                Achieve business success with Xenon Bank. Our comprehensive financial solutions help unlock your business potential and take your vision to the next level.
                            </p>
                            <div className="flex items-center bg-white p-0.5 rounded-md pr-3 w-fit mt-10">
                                <button className="bg-green-500 p-2 rounded-md mr-2 hover:bg-green-600">APPLY NOW</button>
                                <FaArrowRight />
                            </div>
                            {/* Logo Section */}
                            <div className="hidden flex-row items-center gap-4 md:inline-block mt-10">
                                <img className="bg-[#0A091C] rounded-full h-16 w-16" src={FourthDayLogo} alt="#" />
                                <p className="text-white">
                                    <b>2023</b> the world's <br /> best digital bank
                                </p>
                            </div>
                        </div>

                        {/* Middle Section */}
                        <div className="hidden w-[30%] h-full items-center justify-center md:inline-block">
                            <div className="w-[75%] h-full items-center justify-around bg-gradient-to-b from-green-500 to-[#0A091C] rounded-t-[40%] ">
                                <img className="[bg-green-500] h-full" src={FourthDay2} alt="#" />
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="Sm:w-[30%] flex flex-col justify-between h-full mt-11">
                            {/* List Section */}
                            <ul className="gap-4 flex flex-col list-disc text-white pl-5">
                                <li>Fast, easy loan application</li>
                                <li>Flexible repayment options</li>
                                <li>Competitive interest rates</li>
                            </ul>

                            {/* Logo and Text Section */}
                            <div className="mt-16 w-full items-center sm:flex sm:items-center sm:justify-between">
                                {/* Overlapping Images */}
                                <div className="relative w-1/2 flex items-center">
                                    <div className="absolute -z-1 left-10">
                                        <img
                                            className=" rounded-full h-16 w-16 bg-[#0A091C] sm:inline-block"
                                            src={Follower}
                                            alt="Logo 1"
                                        />
                                    </div>
                                    <div className=" absolute left-4 z-0 ">
                                        <img
                                            className=" rounded-full h-16 w-16 bg-[#0A091C]"
                                            src={Follower}
                                            alt="Logo 2"
                                        />
                                    </div>
                                    <p className=" text-white text-5xl absolute left-24 sm:inline-block">12M</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Demo;
