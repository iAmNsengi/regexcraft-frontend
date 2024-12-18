import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="z-[999] w-screen bg-gray-800 py-4 text-center text-white">
      Developed with 💖 by{" "}
      <a href="https://nsengixp.onrender.com/" className="underline">
        Eliezer Nsengi
      </a>
      . ©️ {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
