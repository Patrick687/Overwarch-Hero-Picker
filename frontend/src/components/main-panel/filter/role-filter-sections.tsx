import type React from "react";
import RoleSection from "./role-filter-section";
import { getTankHeroes, getDamageHeroes, getSupportHeroes } from "../../../data/heroes";

interface RoleFilterSectionsProps {
    selectedHeroes: string[];
    toggleHero: (heroName: string) => void;
}

const RoleFilterSections: React.FC<RoleFilterSectionsProps> = ({ selectedHeroes, toggleHero }) => {
    const tankHeroes = getTankHeroes();
    const damageHeroes = getDamageHeroes();
    const supportHeroes = getSupportHeroes();

    return (
        <div className="w-full space-y-4 mt-4">
            {/* Tank Section */}
            <RoleSection
                roleTitle="Tank"
                roleColor="#4A9FFF"
                heroes={tankHeroes}
                selectedHeroes={selectedHeroes}
                toggleHero={toggleHero}
            />

            {/* Damage Section */}
            <RoleSection
                roleTitle="Damage"
                roleColor="#E74856"
                heroes={damageHeroes}
                selectedHeroes={selectedHeroes}
                toggleHero={toggleHero}
            />

            {/* Support Section */}
            <RoleSection
                roleTitle="Support"
                roleColor="#FFCF4A"
                heroes={supportHeroes}
                selectedHeroes={selectedHeroes}
                toggleHero={toggleHero}
            />
        </div>
    );
};

export default RoleFilterSections;
