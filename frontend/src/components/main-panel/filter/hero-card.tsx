import type React from "react";
import type { Hero } from "../../../types/hero";

interface HeroCardProps {
    hero: Hero;
    isSelected?: boolean;
    onClick?: () => void;
}

const HeroCard: React.FC<HeroCardProps> = ({
    hero,
    isSelected = false,
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            className={`
                flex items-center justify-start 
                h-12 
                ${isSelected ? 'bg-[#F99E1A]/20' : 'bg-[#1C1C1E]'}
                border-2 
                ${isSelected ? 'border-[#F99E1A] shadow-lg shadow-[#F99E1A]/30' : 'border-[#2A2A2C] hover:border-[#43434A]'}
                rounded-md 
                overflow-hidden
                transition-all duration-200 
                hover:scale-105 
                active:scale-95
                cursor-pointer
                group
            `}
        >
            {/* Hero Image */}
            <div className="w-12 h-12 shrink-0 bg-[#2A2A2C] flex items-center justify-center">
                <img
                    src={hero.imageFace}
                    alt={hero.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Hero Name */}
            <div className="flex-1 px-2 text-left min-w-0">
                <p className={`
                    text-xs font-bold uppercase tracking-wide truncate
                    ${isSelected ? 'text-[#F99E1A]' : 'text-white group-hover:text-[#F99E1A]'}
                    transition-colors duration-200
                `}>
                    {hero.name}
                </p>
            </div>
        </button>
    );
};

export default HeroCard;
