/**
 * @module utils/middleware/getDifficulty
 */

import { displayPrompt } from "../prompt.js";

const difficulties = Object.freeze({
    Any_Difficulty: null,
    Easy: "easy",
    Medium: "medium",
    Hard: "hard",
});

async function chooseDifficulty() {
    const choices = Object.keys(difficulties);
    const chosenDifficulty = await displayPrompt({
        choices,
        default: 0,
        message: "Choose a difficulty",
        name: "difficulty",
        type: "list",
    });
    return difficulties[chosenDifficulty];
}

export async function getDifficulty(args) {
    if (args.difficulty === undefined) {
        const difficulty = await chooseDifficulty();
        args.difficulty = difficulty;
    }
}
