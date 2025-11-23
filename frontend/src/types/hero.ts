export type HeroRole = "Tank" | "Damage" | "Support";

export interface Hero {
    name: string;
    role: HeroRole;
    image: string;        // Full body image (e.g., "/heros/sigma.webp")
    imageFace: string;    // Face portrait (e.g., "/heros/sigma-face.png")
}
