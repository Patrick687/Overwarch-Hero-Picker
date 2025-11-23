import type React from "react";
import HeroInfo from "../left-panel/hero-info";
import RandomPerksSection from "../left-panel/random-perks-section";
import Divider from "../ui/divider";
import GetNewHeroButton from "../left-panel/get-new-hero-button";
import { getHeroByName } from "../../data/heroes";

const LeftPanel: React.FC = () => {
    // TODO: Replace with actual selected hero from state
    const selectedHero = getHeroByName("Sigma");

    return (
        <div className="h-full w-1/4 flex flex-col items-center justify-start p-6 space-y-6 bg-[#1C1C1E] border-r-2 border-[#2A2A2C] overflow-y-auto">
            {selectedHero && <HeroInfo hero={selectedHero} />}
            <RandomPerksSection />
            <Divider color="white" />
            <GetNewHeroButton />
        </div>
    );
};

export default LeftPanel;