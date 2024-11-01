/**
 * @module commands/playCommand
 */

import { play } from "../service/play.js";
import {
    getAmount,
    getCategory,
    getDifficulty,
    getType,
} from "../utils/middleware/index.js";

export function createPlayCommand() {
    return {
        command: "play",
        describe: "Play the Open Trivia quiz",
        aliases: ["p", "play"],
        builder: builder,
        handler: handler,
    };
}

function builder(args) {
    return args
        .option("a", {
            alias: "amount",
            describe: "The number of questions to play",
            type: "number",
        })
        .option("c", {
            alias: "category",
            describe: "The category of questions to play",
            type: "number",
        })
        .option("d", {
            alias: "difficulty",
            describe: "The difficulty of questions to play",
            type: "string",
        })
        .option("t", {
            alias: "type",
            describe: "The type of questions to play",
            type: "string",
        })
        .middleware([getAmount, getCategory, getDifficulty, getType]);
}

async function handler(args) {
    const params = {
        amount: args.amount,
        category: args.category,
        difficulty: args.difficulty,
        type: args.type,
    };

    await play(params);
}
