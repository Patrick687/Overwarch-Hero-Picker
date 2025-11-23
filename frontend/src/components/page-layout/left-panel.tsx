import type React from "react";
import HeroInfo from "../left-panel/hero-info";
import RandomPerksSection from "../left-panel/random-perks-section";
import Divider from "../ui/divider";
import GetNewHeroButton from "../left-panel/get-new-hero-button";

const LeftPanel: React.FC = () => {
    return (
        <div className="h-full w-1/4 flex flex-col items-center justify-start p-4 space-y-4 bg-gray-600">
            <HeroInfo heroName="Sigma" />
            <RandomPerksSection />
            <Divider color="white" />
            <GetNewHeroButton />
        </div>
    );
};

export default LeftPanel;