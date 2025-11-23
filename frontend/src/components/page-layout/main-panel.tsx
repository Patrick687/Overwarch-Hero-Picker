import type React from "react";
import FilterInstructions from "../main-panel/filter-instructions";

const MainPanel: React.FC = () => {
    return (
        <div className="w-3/4 h-full flex flex-col items-start justify-start p-6 bg-[#0E0E0F] overflow-y-auto">
            <FilterInstructions />
        </div>
    );
};

export default MainPanel;