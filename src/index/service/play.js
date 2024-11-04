/**
 * @module service/play
 */

import { getQuiz } from "../api/getQuiz.js";
import { getAnswer } from "../utils/getAnswer.js";

export async function play(params) {
    let score = 0;
    const response = await getQuiz(params);

    const quiz = response.results;

    for (const question of quiz) {
        const guess = await makeGuess(question);

        if (guess) {
            score++;
        }
    }

    console.log(`Your Score: ${score} / ${quiz.length}`);
}

async function makeGuess(question) {
    const guess = await getAnswer(question);

    if (guess === question.correct_answer) {
        console.log("correct!");
        return true;
    }
    console.log("incorrect!");
    return false;
}
