/**
 * @module utils/prompt
 */

import inquirer from "inquirer";

export async function displayPrompt(options) {
    const { name } = options;

    const questions = [{ ...options }];

    const prompts = await inquirer.prompt(questions);

    return prompts[name];
}
