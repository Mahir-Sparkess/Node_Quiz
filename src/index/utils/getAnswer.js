/**
 * @module utils/getQuestionAnswer
 */
import { decode, encode } from "html-entities";
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
    let answers = question.incorrect_answers.slice();
    answers.push(question.correct_answer);
    answers = answers.map((string) => decode(string));

    const message = decode(question.question);

    const chosenAnswer = await chooseAnswer(answers, message);
    return encode(chosenAnswer);
}
