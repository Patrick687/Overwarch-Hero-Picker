import type React from "react";
import { useState } from "react";
import FilterInstructions from "../main-panel/filter-instructions";
import RoleFilterSections from "../main-panel/filter/role-filter-sections";

const MainPanel: React.FC = () => {
    const [selectedHeroes, setSelectedHeroes] = useState<string[]>([]);

    const toggleHero = (heroName: string) => {
        setSelectedHeroes(prev =>
            prev.includes(heroName)
                ? prev.filter(name => name !== heroName)
                : [...prev, heroName]
        );
    };

    return (
        <div className="w-3/4 h-full flex flex-col items-start justify-start p-4 bg-[#0E0E0F] overflow-hidden">
            <FilterInstructions />
            <RoleFilterSections selectedHeroes={selectedHeroes} toggleHero={toggleHero} />
        </div>
    );
};

export default MainPanel;