import React from "react";
import { FaReact } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className="flex bg-gray-800 pb-5 ">
            <FaReact className="text-cyan-500 ml-10 mt-10 h-10 w-10"></FaReact>
            <div className="mt-12 ml-2 font-semibold text-cyan-500 ">
                ReactFacts
            </div>
            <div className="flex-1"></div>
            <div className="ml-10 mt-12 text-xl text-white font-medium">
                Pricing
            </div>
            <div className="ml-10 mt-12 text-xl text-white font-medium">
                About
            </div>
            <div className="ml-10 mt-12 mr-4 text-xl text-white font-medium">
                Contact
            </div>
        </div>
    );
}
