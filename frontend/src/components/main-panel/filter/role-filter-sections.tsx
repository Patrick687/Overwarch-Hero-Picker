import type React from "react";
import RoleSection from "./role-filter-section";
import { getTankHeroes, getDamageHeroes, getSupportHeroes } from "../../../data/heroes";

const RoleFilterSections: React.FC = () => {
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
            />

            {/* Damage Section */}
            <RoleSection
                roleTitle="Damage"
                roleColor="#E74856"
                heroes={damageHeroes}
            />

            {/* Support Section */}
            <RoleSection
                roleTitle="Support"
                roleColor="#FFCF4A"
                heroes={supportHeroes}
            />
        </div>
    );
};

export default RoleFilterSections;
