import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function MainContent() {
    return (
        <div className="bg-slate-700 pr-10">
            <h1 className="text-5xl font-bold ml-8 pt-8 text-white">
                Fun facs about react
            </h1>
            <ul className="list-disc list-inside font-semibold pl-16 text-2xl pt-6 text-white marker:text-cyan-500 ">
                <li>Was first relesed in 2013</li>
                <li>First originally created by Akash</li>
                <li>Has over 100k stars on github</li>
            </ul>
        </div>
    );
}

export default function Page() {
    return (
        <div className="grid place-content-center">
            <div className="">
                <Navbar />
                <MainContent />
                <Footer />
            </div>
        </div>
    );
}
