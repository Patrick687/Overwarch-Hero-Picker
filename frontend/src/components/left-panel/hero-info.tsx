import type React from "react";

interface HeroInfoProps {
    heroName: string;
}

const HeroInfo: React.FC<HeroInfoProps> = ({ heroName }) => {

    return (
        <div className="flex flex-col space-y-4 items-center w-full">
            <div className="text-center">
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">You should play</p>
                <h1 className="text-3xl font-black text-[#F99E1A] uppercase tracking-wide">{heroName}</h1>
            </div>
            <HeroImage />
        </div>
    );
};

export default HeroInfo;

const HeroImage: React.FC = () => {
    return (
        <div className="w-full flex justify-center">
            <img
                src="/heros/sigma.webp"
                alt="sigma"
                className="w-full max-h-64 object-contain rounded-lg border-2 border-[#F99E1A] shadow-lg shadow-[#F99E1A]/20"
            />
        </div>
    );
};