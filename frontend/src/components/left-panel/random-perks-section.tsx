import type React from "react";
import CheckBox from "../ui/check-box";
import { useState } from "react";

const RandomPerksSection: React.FC = () => {
    const [arePerksDisplayed, setArePerksDisplayed] = useState<boolean>(true);

    return (
        <div className="flex flex-col items-center space-y-4">
            <ShowPerkSelectionCheckBox displayPerks={arePerksDisplayed} setDisplayPerks={setArePerksDisplayed} />
            {arePerksDisplayed && <PerkView perkName={"Hyper Regeneration"} perkType="major" />}
            {arePerksDisplayed && <PerkView perkName={"Hyper Strike"} perkType="minor" />}
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

    // return <label className="text-sm">{perkTypeText} Perk</label>;
    return (
        <div className="w-full text-center flex flex-col items-center justify-start">
            <label className="text-md">{perkTypeText} Perk</label>
            <p className="text-md font-bold">{perkName}</p>
        </div>
    );
};

interface ShowPerkSelectionCheckBoxProps {
    displayPerks: boolean;
    setDisplayPerks: (value: boolean) => void;
}

const ShowPerkSelectionCheckBox: React.FC<ShowPerkSelectionCheckBoxProps> = ({
    displayPerks, setDisplayPerks
}) => {
    const labelText = displayPerks ? "Hide Perks" : "Show Perks";

    return (
        <CheckBox label={labelText} checked={displayPerks} onChange={setDisplayPerks} />
    );
};
