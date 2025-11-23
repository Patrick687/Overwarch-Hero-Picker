import type React from "react";
import HeroInfo from "../left-panel/hero-info";

const LeftPanel: React.FC = () => {
    return (
        <div className="h-full w-1/4 flex flex-col items-center justify-start p-4 space-y-4 bg-gray-600">
            <HeroInfo />
        </div>
    );
};

export default LeftPanel;