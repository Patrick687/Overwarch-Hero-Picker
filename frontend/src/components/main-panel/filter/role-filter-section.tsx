import type { Hero } from "../../../types/hero";
import HeroCard from "./hero-card";
import RoleSelectAllButton from "./role-select-all.button";

interface RoleSectionProps {
    roleTitle: string;
    roleColor: string;
    heroes: Hero[];
}

const RoleSection: React.FC<RoleSectionProps> = ({
    roleTitle,
    roleColor,
    heroes
}) => {
    return (
        <div className="w-full">
            {/* Role Header */}
            <div
                className="flex items-center justify-between mb-2 pb-1 border-b-2"
                style={{ borderColor: roleColor }}
            >
                <div className="flex items-center space-x-2">
                    <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: roleColor }}
                    />
                    <h2
                        className="text-lg font-black uppercase tracking-wide"
                        style={{ color: roleColor }}
                    >
                        {roleTitle}
                    </h2>
                </div>

                {/* Select/Deselect All Button */}
                <RoleSelectAllButton heroes={heroes} roleColor={roleColor} />
            </div>

            {/* Hero Cards Grid */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {heroes.map((hero) => (
                    <HeroCard
                        key={hero.name}
                        hero={hero}
                    />
                ))}
            </div>
        </div>
    );
};

export default RoleSection;