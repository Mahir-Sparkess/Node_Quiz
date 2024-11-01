/**
 * @module utils/middleware/getCategory
 */

import { displayPrompt } from "../prompt.js";

const categories = Object.freeze({
    Any_Category: null,
    General_Knowledge: 9,
    Mythology: 20,
});

async function chooseCategory() {
    const choices = Object.keys(categories);
    const chosenCategory = await displayPrompt({
        choices,
        default: 0,
        message: "Choose a category",
        name: "category",
        type: "list",
    });
    return categories[chosenCategory];
}

export async function getCategory(args) {
    if (args.category === undefined) {
        const category = await chooseCategory();
        args.category = category;
    }
}
