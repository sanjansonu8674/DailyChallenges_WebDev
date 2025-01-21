import React from "react";
import card1 from "./image/card1.jpeg";
import card2 from "./image/card2.jpeg";
import card3 from "./image/card3.jpeg";
import card from "./image/card.jpeg";

const Manu = () => {
    return (
        <div>
            {/* Navbar */}
            <div className="bg-slate-600 h-16 w-full flex items-center justify-between px-4">
                <a href="/">
                    <img
                        className="h-12"
                        src="https://beangates.com/assets/img/Beangate-lOGOOOO-1.01.png"
                        alt="Bean Gates Logo"
                    />
                </a>
                <nav className="flex space-x-6">
                    <a className="text-white hover:text-gray-300" href="#">Home</a>
                    <a className="text-white hover:text-gray-300" href="#">About</a>
                    <a className="text-white hover:text-gray-300" href="#">Service</a>
                    <a className="text-white hover:text-gray-300" href="#">Blogs</a>
                    <a className="text-white hover:text-gray-300" href="#">Our Academy</a>
                    <a className="text-white hover:text-gray-300" href="#">Our Branches</a>
                    <a className="text-white hover:text-gray-300 bg-gradient-to-r from-[#ff5100] to-[#f70] rounded-md p-2" href="#">Contact Us</a>
                </nav>
            </div>

            {/* Hero Section */}
            <div className="h-96 w-full bg-slate-500 flex items-center justify-center">
                <img
                    className="h-full w-full object-cover"
                    src={card} 
                    alt="Futuristic AI Cityscape"
                />
            </div>

            {/* Courses Section */}
            <h1 className="text-center text-5xl font-bold my-6">Efficiency Redefined</h1>
            <p className="text-center text-xl my-6 font-family: 'Poppins', sans-serif">
                Unlock Opportunities and Revolutionize Productivity with No.1 IT Company in India
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-5">
                <div className=" flex items-center justify-center">
                    <img
                        className="h-72 w-80 rounded-lg object-cover"
                        src={card1}
                        alt="Course 1"
                    />
                </div>
                <div className=" flex items-center justify-center">
                    <img
                        className="h-72 w-80 rounded-lg object-cover"
                        src={card2}
                        alt="Course 2"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <img
                        className="h-72 w-80 rounded-lg  object-cover"
                        src={card3}
                        alt="Course 3"
                    />
                </div>
            </div>
            <div className="flex h-96 bg-blue-100 items-center justify-center mb-5">
                <div className="h-auto w-11/12 text-center">
                    <h1 className="text-5xl font-bold my-6">Who We Are</h1>
                    <p className="text-xl my-6 font-family: 'Poppins', sans-serif">
                        Driven by a passion for technology and a relentless pursuit of excellence, Beangates is a leading IT company in India committed to revolutionizing business landscapes through innovative solutions. We harness cutting-edge technologies to help you thrive in the ever-evolving business environment enabling you to make a difference by manifolds.
                    </p>
                    <p className="text-xl my-6 font-family: 'Poppins', sans-serif">
                        Helmed by a team of seasoned professionals who specialize in a wide range of IT solutions, Beangates prides itself on being a trusted partner for resolving unique challenges of businesses and offering them tailored end-to-end solutions that drive growth and enhance overall productivity.
                    </p>
                    <button className="text-white hover:text-gray-300 bg-gradient-to-r from-[#ff5100] to-[#f70] rounded-md p-2" href="#">Contact Us</button>
                </div>
            </div>

        </div>
    );
};

export default Manu;
