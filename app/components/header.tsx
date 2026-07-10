import React from "react";
import NavBar from "./navbar";
// Change .jpeg to .jpg and add the relative dots
import profileImage from "../assets/images/profile.jpg"; 

export default function Header() {
  return (
    <header>
      <div className="flex justify-between p-4 bg-gray-800 text-white items-center">
        <h1 className="text-2xl font-bold">Binny Buy</h1>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
      <NavBar />
    </header>
  );
}