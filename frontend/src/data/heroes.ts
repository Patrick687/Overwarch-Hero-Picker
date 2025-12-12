import type { Hero } from "../types/hero";

export const heroes: Hero[] = [
    // Tank Heroes
    { name: "D.Va", role: "Tank", image: "/heros/dva.webp", imageFace: "/heros/dva-face.webp" },
    { name: "Doomfist", role: "Tank", image: "/heros/doomfist.webp", imageFace: "/heros/doomfist-face.png" },
    { name: "Junker Queen", role: "Tank", image: "/heros/junkerqueen.webp", imageFace: "/heros/junkerqueen-face.webp" },
    { name: "Mauga", role: "Tank", image: "/heros/mauga.webp", imageFace: "/heros/mauga-face.webp" },
    { name: "Orisa", role: "Tank", image: "/heros/orisa.webp", imageFace: "/heros/orissa-face.png" },
    { name: "Ramattra", role: "Tank", image: "/heros/ramattra.webp", imageFace: "/heros/rammatra-face.png" },
    { name: "Reinhardt", role: "Tank", image: "/heros/reinhardt.webp", imageFace: "/heros/reinhardt-face.png" },
    { name: "Roadhog", role: "Tank", image: "/heros/roadhog.webp", imageFace: "/heros/roadhog-face.webp" },
    { name: "Sigma", role: "Tank", image: "/heros/sigma.webp", imageFace: "/heros/sigma-face.png" },
    { name: "Winston", role: "Tank", image: "/heros/winston.webp", imageFace: "/heros/winston-face.png" },
    { name: "Wrecking Ball", role: "Tank", image: "/heros/wreckingball.webp", imageFace: "/heros/wreckingball-face.png" },
    { name: "Zarya", role: "Tank", image: "/heros/zarya.png", imageFace: "/heros/zarya-face.png" },

    // Damage Heroes
    { name: "Ashe", role: "Damage", image: "/heros/ashe.webp", imageFace: "/heros/ashe-face.webp" },
    { name: "Bastion", role: "Damage", image: "/heros/bastion.webp", imageFace: "/heros/bastion-face.png" },
    { name: "Cassidy", role: "Damage", image: "/heros/cassidy.webp", imageFace: "/heros/cassidy-face.png" },
    { name: "Echo", role: "Damage", image: "/heros/echo.webp", imageFace: "/heros/echo-face.webp" },
    { name: "Genji", role: "Damage", image: "/heros/genji.webp", imageFace: "/heros/genji-face.png" },
    { name: "Hanzo", role: "Damage", image: "/heros/hanzo.webp", imageFace: "/heros/hanzo-face.png" },
    { name: "Junkrat", role: "Damage", image: "/heros/junkrat.webp", imageFace: "/heros/junkrat-face.png" },
    { name: "Mei", role: "Damage", image: "/heros/mei.webp", imageFace: "/heros/mei-face.webp" },
    { name: "Pharah", role: "Damage", image: "/heros/pharah.webp", imageFace: "/heros/pharah.webp" },
    { name: "Reaper", role: "Damage", image: "/heros/reaper.webp", imageFace: "/heros/reaper-face.webp" },
    { name: "Sojourn", role: "Damage", image: "/heros/sojourn.webp", imageFace: "/heros/sojourn-face.png" },
    { name: "Soldier: 76", role: "Damage", image: "/heros/soldier76.webp", imageFace: "/heros/soldier76-face.png" },
    { name: "Sombra", role: "Damage", image: "/heros/sombra.webp", imageFace: "/heros/sombra-face.webp" },
    { name: "Symmetra", role: "Damage", image: "/heros/symmetra.webp", imageFace: "/heros/symmetra-face.png" },
    { name: "Torbjörn", role: "Damage", image: "/heros/torbjorn.webp", imageFace: "/heros/torbjorn-face.png" },
    { name: "Tracer", role: "Damage", image: "/heros/tracer.webp", imageFace: "/heros/tracer-face.png" },
    { name: "Widowmaker", role: "Damage", image: "/heros/widowmaker.webp", imageFace: "/heros/widowmaker-face.webp" },

    // Support Heroes
    { name: "Ana", role: "Support", image: "/heros/ana.webp", imageFace: "/heros/ana-face.png" },
    { name: "Baptiste", role: "Support", image: "/heros/baptiste.webp", imageFace: "/heros/baptiste-face.webp" },
    { name: "Brigitte", role: "Support", image: "/heros/brigitte.webp", imageFace: "/heros/brigitte-face.png" },
    { name: "Illari", role: "Support", image: "/heros/illari.webp", imageFace: "/heros/illiari-face.png" },
    { name: "Kiriko", role: "Support", image: "/heros/kiriko.webp", imageFace: "/heros/kiriko-face.webp" },
    { name: "Lifeweaver", role: "Support", image: "/heros/lifeweaver.webp", imageFace: "/heros/lifeweaver-face.png" },
    { name: "Lúcio", role: "Support", image: "/heros/lucio.webp", imageFace: "/heros/lucio-face.png" },
    { name: "Mercy", role: "Support", image: "/heros/mercy.webp", imageFace: "/heros/mercy-face.png" },
    { name: "Moira", role: "Support", image: "/heros/moira.webp", imageFace: "/heros/moira-face.jpeg" },
    { name: "Zenyatta", role: "Support", image: "/heros/zenyatta.webp", imageFace: "/heros/zenyatta-face.png" },
];

// Helper functions to filter heroes by role
export const getHeroesByRole = (role: "Tank" | "Damage" | "Support"): Hero[] => {
    return heroes.filter(hero => hero.role === role);
};

export const getTankHeroes = (): Hero[] => getHeroesByRole("Tank");
export const getDamageHeroes = (): Hero[] => getHeroesByRole("Damage");
export const getSupportHeroes = (): Hero[] => getHeroesByRole("Support");

export const getHeroByName = (name: string): Hero | undefined => {
    return heroes.find(hero => hero.name === name);
};
