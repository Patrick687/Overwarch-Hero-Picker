import type React from "react";

const GetNewHeroButton: React.FC = () => {
    const handleClick = () => {
        console.log("Getting new random hero...");
    };

    return (
        <button
            onClick={handleClick}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
            Get Random Hero
        </button>
    );
};

export default GetNewHeroButton;