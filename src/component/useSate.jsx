import { useState } from "react";
import { TbXboxXFilled } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const UseStateFunction = () => {
    const [isOpen, setIsOpen] = useState(false); // For toggling mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: "HOME", href: "/home" },
        { name: "PRODUCT", href: "/product" },
        { name: "FEATURES", href: "/features" },
        { name: "TOOLS", href: "/tools" },
        { name: "Contact", href: "/Contactus" },
    ];

    return (<>
        <div className="bg-[#0A091C] w-full h-screen">
            <nav className=" flex justify-around">
                <div className="logo w-1/2 flex items-center justify-start">
                    <TbXboxXFilled className="text-3xl text-green-500 md:text-5xl" />
                    <a className="text-white text-2xl font-bold md:text-4xl" href="#">
                        XENON
                    </a>
                </div>
                <div className="navContent w-1/3 text-white flex items-center justify-between">
                    <div className="hidden sm:block text-white items-center justify-between">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="mr-4">
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <button className="bg-green-500 rounded-lg text-white py-2 px-2 ml-3">
                        Apply Now
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="text-white text-3xl sm:hidden md:hidden"
                    >
                        {isOpen ? <IoClose /> : <IoMenu />}
                    </button>
                    <div className="bg-yellow-400"></div>
                </div>
                {/* Small Screen */}
                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-[#0A091C] text-white flex flex-col items-start pl-4 py-4 space-y-4 z-50">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="hover:text-green-500">
                                {link.name}
                            </a>
                        ))}
                        <div className="bg-red-500"></div>
                    </div>
                )}
            </nav>

        </div>
    </>
    );
};

export default UseStateFunction;
