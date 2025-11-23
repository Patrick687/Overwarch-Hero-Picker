import type React from "react";

const FilterInstructions: React.FC = () => {
    return (
        <div className="w-full p-5 bg-gradient-to-r from-[#F99E1A] to-[#FF8C00] rounded-lg shadow-lg border-l-4 border-[#FFCF4A]">
            <p className="text-white text-xl font-black uppercase tracking-widest">
                Select the heroes you wish to play
            </p>
        </div>
    );
};

export default FilterInstructions;