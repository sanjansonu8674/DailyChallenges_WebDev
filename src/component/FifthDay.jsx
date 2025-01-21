import React from "react";
import { FaArrowRight } from "react-icons/fa";
import fifthday from "../image/fifthday.jpeg";
import { FaUniversalAccess } from "react-icons/fa";
import { SlNotebook } from "react-icons/sl";
import { TbClockCancel } from "react-icons/tb";

function FifthDay() {
    return (
        <div>
            <div className="bg-[#F6F8FC] h-screen w-full flex justify-center">
                <div className="text-center px-4">
                    <p className="flex flex-wrap justify-center gap-2 items-center text-[6vw] sm:text-[4vw] md:text-[4vw] lg:text-5xl font-semibold m-4">
                        Financial
                        <span className="inline-flex items-center justify-center text-black bg-green-500 px-4 py-2 rounded-md">
                            <FaArrowRight className="-rotate-45" />
                        </span>
                        Freedom with <span className="text-green-500">Xenon</span>
                    </p>
                    <div></div>
                    <p className="sm:w-[60%] mx-auto">
                        Our offerings are tailored to meet the unique needs and challenges
                        of each business, and are designed to provide the funding and
                        support necessary to help businesses reach their full potential.
                    </p>
                    <div className="flex justify-around w-full mt-10">
                        <button className="px-8 bg-white border-2 border-green-400 rounded-md py-3">
                            Business Line of Credit
                        </button>
                        <button className="px-8 border-2 border-white rounded-md py-3">
                            Equipment Financing
                        </button>
                        <button className="hidden px-8 border-2 border-white rounded-md py-3 sm:inline">
                            Merchant Services
                        </button>
                    </div>

                    <div className="mt-14 flex justify-center items-stretch gap-8 w-full">
                        {/* Image Div */}
                        <div className="w-[50%] ">
                            <img
                                src={fifthday}
                                alt=""
                                className="w-full h-full object-cover rounded-lg shadow-amber-50"
                            />
                        </div>
                        {/* Text Div */}
                        <div className="bg-white shadow-amber-50 rounded-md w-[50%] p-4 flex flex-col items-start text-left">
                            <h3 className="font-mono text-lg font-semibold">
                                Business Line of Credit
                            </h3>
                            <p className="px-2 font-sans">
                                A flexible and convenient way to access funds for your business
                                needs. Use it as you need it and only pay interest on what you
                                borrow. Perfect for unexpected expenses.
                            </p>
                            <div className="mt-4">
                                <h3 className="font-mono text-lg font-semibold">Benefits:</h3>
                                <p>
                                    <FaUniversalAccess className="inline text-green-500" /> Easy access to
                                    funds as and when needed
                                </p>
                                <p>
                                    <SlNotebook className="inline text-green-500" /> Flexible repayment
                                    options
                                </p>
                                <p>
                                    <TbClockCancel className="inline text-green-500" /> Interest only on
                                    funds borrowed
                                </p>
                                <button className="bg-green-500 rounded-lg text-white py-2 px-4 mt-4">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FifthDay;
