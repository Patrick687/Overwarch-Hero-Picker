import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Hero, HeroRole } from "../types/hero";
import { heroes } from "../data/heroes";

interface SelectedHeroesState {
    selectedHeroes: Hero[];
    currentHero: Hero | null;
}

const initialState: SelectedHeroesState = {
    selectedHeroes: [],
    currentHero: null,
};

const heroSlice = createSlice({
    name: 'hero',
    initialState,
    reducers: {
        toggleHeroSelection: (state, action: PayloadAction<Hero>) => {
            const hero = action.payload;
            const index = state.selectedHeroes.findIndex(h => h.name === hero.name);
            
            if (index >= 0) {
                // Hero is already selected, remove it
                state.selectedHeroes.splice(index, 1);
            } else {
                // Hero is not selected, add it
                state.selectedHeroes.push(hero);
            }
        },
        setCurrentHero: (state, action: PayloadAction<Hero>) => {
            state.currentHero = action.payload;
        },
        setHerosByRole: (state, action: PayloadAction<HeroRole>) => {
            const role = action.payload;
            state.selectedHeroes = heroes.filter(hero => hero.role === role)
        },
        clearSelectedHeroes: (state) => {
            state.selectedHeroes = [];
        },
        generateCurrentHero: (state) => {
            if(state.selectedHeroes.length === 0 ) {
                return;
            }
            state.currentHero = state.selectedHeroes[Math.floor(Math.random() * state.selectedHeroes.length)];
        }
    },
});

export const { toggleHeroSelection, setCurrentHero, setHerosByRole, clearSelectedHeroes, generateCurrentHero } = heroSlice.actions;
export default heroSlice.reducer;