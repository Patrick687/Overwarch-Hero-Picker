import type React from "react";

const FilterInstructions: React.FC = () => {
    return (
        <div className="w-full p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-md border-2 border-orange-400">
            <p className="text-white text-lg font-bold text-left uppercase tracking-wide">
                Select the heroes you wish to play
            </p>
        </div>
    );
};

export default FilterInstructions;