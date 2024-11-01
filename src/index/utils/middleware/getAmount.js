/**
 * @module utils/middleware/getAmount
 */

import inquirer from "inquirer";

async function inputAmount() {
    const question = [
        {
            type: "input",
            name: "amount",
            message: "Enter amount of questions to play",
        },
    ];

    const prompt = await inquirer.prompt(question);

    return prompt;
}

export async function getAmount(args) {
    if (!args.amount) {
        const { amount } = await inputAmount();
        args.amount = !amount ? 10 : amount;
    }
}
