import React from "react";
import { MdAccountCircle } from "react-icons/md";
import video1 from "../image/video1.mp4";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const LandingPage = () => {
    return (
        <div>
            <div className="relative">
                {/* Video Background */}
                <video
                    className="w-full h-screen object-cover absolute top-0 left-0 -z-10"
                    autoPlay
                    loop
                    muted
                >
                    <source src={video1} type="video/mp4" />
                </video>

                {/* Navbar */}
                <div className="fixed flex items-center justify-between h-16 w-full bg-gray-400 bg-opacity-75">
                    <div>
                        <img
                            className="h-12 px-4"
                            src="https://beangates.com/assets/img/Beangate-lOGOOOO-1.01.png"
                            alt="Logo"
                        />
                    </div>
                    <div className="w-1/2 flex justify-evenly">
                        <a className="text-white font-bold" href="#">
                            Equipment
                        </a>
                        <a className="text-white font-bold" href="#">
                            About us
                        </a>
                        <a className="text-white font-bold" href="#">
                            Blog
                        </a>
                    </div>
                    <div className="flex items-center mr-4 text-white space-x-2">
                        <MdAccountCircle />
                        <a className="text-white" href="#">
                            Account
                        </a>
                    </div>
                </div>
            </div>

            {/* Centered Heading */}
            <div className="flex items-center justify-center h-screen w-[]">
                <h1 className="text-white text-9xl text-center ">
                    Be Prepared For The Mountains And Beyond!
                </h1>
                <div className="text-2xl po fixed left-4 flex gap-2 items-center rotate-90 text-white">
                    <FaInstagram />
                    <FaFacebook />
                    <p>Follow</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
