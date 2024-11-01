/**
 * @module utils/getQuestionAnswer
 */

import { displayPrompt } from "./prompt.js";

async function chooseAnswer(choices, message) {
    const chosenAnswer = await displayPrompt({
        choices,
        default: 0,
        message,
        name: "answer",
        type: "list",
    });
    return chosenAnswer;
}

export async function getAnswer(question) {
    const answers = question.incorrect_answers.slice();
    answers.push(question.correct_answer);

    const chosenAnswer = await chooseAnswer(answers, question.question);
    return chosenAnswer;
}
