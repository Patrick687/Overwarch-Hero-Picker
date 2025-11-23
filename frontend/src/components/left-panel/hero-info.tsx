import type React from "react";
import { useState } from "react";
import type { Hero } from "../../types/hero";
import CheckBox from "../ui/check-box";

interface HeroInfoProps {
    hero: Hero;
}

const HeroInfo: React.FC<HeroInfoProps> = ({ hero }) => {

    return (
        <div className="flex flex-col space-y-4 items-center w-full">
            <div className="text-center">
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">You should play</p>
                <h1 className="text-3xl font-black text-[#F99E1A] uppercase tracking-wide">{hero.name}</h1>
            </div>
            <HeroImage hero={hero} />
        </div>
    );
};

export default HeroInfo;

interface HeroImageProps {
    hero: Hero;
}

const HeroImage: React.FC<HeroImageProps> = ({ hero }) => {
    return (
        <div className="w-full flex justify-center">
            <img
                src={hero.image}
                alt={hero.name}
                className="w-full max-h-64 object-contain rounded-lg border-2 border-[#F99E1A] shadow-lg shadow-[#F99E1A]/20"
            />
        </div>
    );
};