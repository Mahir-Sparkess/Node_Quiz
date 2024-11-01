/**
 * @module utils/middleware/getType
 */

import { displayPrompt } from "../prompt.js";

const types = Object.freeze({
    Any_Type: null,
    True_or_False: "boolean",
    Multiple_Choice: "multiple",
});

async function chooseType() {
    const choices = Object.keys(types);
    const chosenType = await displayPrompt({
        choices,
        default: 0,
        message: "Choose question type",
        name: "type",
        type: "list",
    });
    return types[chosenType];
}

export async function getType(args) {
    if (args.type === undefined) {
        const type = await chooseType();
        args.type = type;
    }
}
