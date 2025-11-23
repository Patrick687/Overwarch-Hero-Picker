import type React from "react";

const RandomPerksSection: React.FC = () => {

    return (
        <div className="flex flex-col items-center space-y-4">
            <PerkView perkName={"Hyper Regeneration"} perkType="major" />
            <PerkView perkName={"Hyper Strike"} perkType="minor" />
        </div>
    );
};

export default RandomPerksSection;

interface PerkViewProps {
    perkType: 'minor' | 'major';
    perkName: string;
}

const PerkView: React.FC<PerkViewProps> = ({
    perkName,
    perkType
}) => {
    const perkTypeText = perkType === 'minor' ? 'Minor' : 'Major';
    const perkColor = perkType === 'major' ? 'border-[#E74856] bg-[#E74856]/10' : 'border-[#4A9FFF] bg-[#4A9FFF]/10';

    return (
        <div className={`w-full p-3 rounded-lg border-2 ${perkColor} text-center flex flex-col items-center justify-start`}>
            <label className="text-xs text-gray-400 uppercase tracking-wider">{perkTypeText} Perk</label>
            <p className="text-base font-bold text-white mt-1">{perkName}</p>
        </div>
    );
};
