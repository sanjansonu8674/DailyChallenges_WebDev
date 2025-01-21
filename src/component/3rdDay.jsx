import React from "react";
import { LiaShipSolid } from "react-icons/lia";
import video2 from "../image/video2.mp4"

const ThirdDay = () => {
    return <div>
        <video className="w-full h-screen object-cover absolute top-0 left-0 -z-10"
            autoPlay
            loop
            muted><source src={video2} typte="video.mov" />

        </video>
        {/* Navbar code */}
        <div className="flex justify-between items-center w-full h-16 text-white font-bold">
            <div className="flex items-center w-1/6 justify-evenly">
                < LiaShipSolid className="text-2xl" />
                <a href="#">PISHIP</a>
            </div>
            <div className="w-1/2 flex justify-evenly">
                <a href="#">HOME</a>
                <a href="#">EXPLORE</a>
                <a href="#">CARIBBEAN</a>
                <a href="#">CONTACT</a>
            </div>
        </div>
        <div className="flex justify-between items-center h-screen px-[5%]">
            {/* Left Card */}
            <div className="card flex flex-col justify-center items-center w-1/3 h-64 text-white rounded-lg ">
                <p className="text-xl">NEW BEDFORD</p>
                <h1 className="text-4xl font-bold">LEGEND OF THE SEAS</h1>
                <button className="border-[2px] border-black rounded-full p-4 shadow-lg mt-4">EXPLORE NOW</button>
            </div>

            {/* Right Card */}
            <div className="card flex flex-col justify-center items-center w-1/3 h-64 text-white rounded-lg ">
                <h1 className=" font-bold">PIRATE RULES TO FOLLOW</h1>
                <p className="text-xl text-center mt-2">
                    DID YOU KNOW THAT PIRATES HAD RULES AND A CONDUCT CODE FOR ALL CREW
                </p>
                <button className="border-[2px] border-black rounded-full p-4 shadow-lg mt-4">READ MORE</button>
            </div>
        </div>

    </div>
}
export default ThirdDay;