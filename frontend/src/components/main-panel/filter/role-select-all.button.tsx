import type React from "react";
import type { Hero } from "../../../types/hero";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../../store/app.store";
import { toggleHeroSelection } from "../../../store/heros.slice";

interface RoleSelectAllButtonProps {
    heroes: Hero[];
    roleColor: string;
}

const RoleSelectAllButton: React.FC<RoleSelectAllButtonProps> = ({
    heroes,
    roleColor
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const selectedHeroes = useSelector((state: RootState) => state.hero.selectedHeroes);

    // Check if all heroes in this role are selected
    const allSelected = heroes.every(hero =>
        selectedHeroes.some(selected => selected.name === hero.name)
    );

    const handleToggleAll = () => {
        heroes.forEach(hero => {
            const isSelected = selectedHeroes.some(selected => selected.name === hero.name);

            // If all are selected, deselect all
            // If not all are selected, select all
            if (allSelected && isSelected) {
                dispatch(toggleHeroSelection(hero));
            } else if (!allSelected && !isSelected) {
                dispatch(toggleHeroSelection(hero));
            }
        });
    };

    return (
        <button
            onClick={handleToggleAll}
            className="px-3 py-1 text-xs font-bold uppercase tracking-wide rounded border-2 transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
                color: allSelected ? roleColor : '#FFFFFF',
                borderColor: roleColor,
                backgroundColor: allSelected ? 'transparent' : `${roleColor}20`,
            }}
        >
            {allSelected ? 'Deselect All' : 'Select All'}
        </button>
    );
};

export default RoleSelectAllButton;