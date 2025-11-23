import type React from "react";
import { useState } from "react";
import CheckBox from "../ui/check-box";

interface HeroInfoProps {
    heroName: string;
}

const HeroInfo: React.FC<HeroInfoProps> = ({ heroName }) => {
    const [isHeroDisplayed, setIsHeroDisplayed] = useState<boolean>(false);

    return (
        <div className="flex flex-col space-y-4 items-center">
            <h1 className="text-xl font-bold">{heroName}</h1>
            <ShowHeroImageCheckBox displayHero={isHeroDisplayed} setDisplayHero={setIsHeroDisplayed} />
            {isHeroDisplayed && <HeroImage />}
        </div>
    );
};

export default HeroInfo;

const HeroImage: React.FC = () => {
    return (
        <img src="/heros/sigma.webp" alt="sigma" className="max-w-9/12 max-h-64 object-contain" />
    );
};

interface ShowHeroImageCheckBoxProps {
    displayHero: boolean;
    setDisplayHero: (value: boolean) => void;
}

const ShowHeroImageCheckBox: React.FC<ShowHeroImageCheckBoxProps> = ({
    displayHero, setDisplayHero
}) => {
    const labelText = displayHero ? "Hide Hero Image" : "Show Hero Image";

    return (
        <CheckBox label={labelText} checked={displayHero} onChange={setDisplayHero} />
    );
};