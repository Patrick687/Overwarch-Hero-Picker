import type React from "react";
import HeroInfo from "../left-panel/hero-info";
import GetNewHeroButton from "../left-panel/get-new-hero-button";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/app.store";
import FilterInstructions from "../main-panel/filter-instructions";

const LeftPanel: React.FC = () => {
    const heroState = useSelector((state: RootState) => state.hero);
    const selectedHero = heroState.currentHero;

    return (
        <div className="h-full w-1/4 flex flex-col items-center justify-start p-6 space-y-6 bg-[#1C1C1E] border-r-2 border-[#2A2A2C] overflow-y-auto">
            {!selectedHero && <FilterInstructions />}
            {selectedHero && <HeroInfo hero={selectedHero} />}
            {/* <RandomPerksSection /> */}
            <GetNewHeroButton />
        </div>
    );
};

export default LeftPanel;