import type React from "react";

const GetNewHeroButton: React.FC = () => {
    const handleClick = () => {
        console.log("Getting new random hero...");
    };

    return (
        <button
            onClick={handleClick}
            className="w-full px-6 py-4 bg-gradient-to-r from-[#F99E1A] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#F99E1A] active:scale-95 text-white font-black text-lg uppercase tracking-wider rounded-lg shadow-lg shadow-[#F99E1A]/50 hover:shadow-xl hover:shadow-[#F99E1A]/70 transform hover:scale-105 transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#F99E1A]/50"
        >
            Get Random Hero
        </button>
    );
};

export default GetNewHeroButton;