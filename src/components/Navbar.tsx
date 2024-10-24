// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-burntOrange p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    AISFM
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="#about" className="text-white hover:text-goldenYellow transition duration-300">About</a>
                    <a href="#works" className="text-white hover:text-goldenYellow transition duration-300">Your Works</a>
                    <a href="#exhibit" className="text-white hover:text-goldenYellow transition duration-300">Exhibit Films</a>
                    <a href="#contact" className="text-white hover:text-goldenYellow transition duration-300">Contact</a>
                </div>
                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
