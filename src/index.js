import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FaReact } from "react-icons/fa";

ReactDOM.render(
    <div className="grid place-content-center">
        <div className="">
            <FaReact className="ml-10 mt-4 h-24 w-24"></FaReact>
            <h1 className="text-6xl font-bold ml-8 mt-8">
                Fun facs about react
            </h1>
            <ul className="list-disc list-inside font-semibold ml-16 text-2xl mt-6 ">
                <li>Was first relesed in 2013</li>
                <li>First originally created by Akash</li>
                <li>Has over 100k stars on github</li>
            </ul>
        </div>
    </div>,
    document.getElementById("root")
);
