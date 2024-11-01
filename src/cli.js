#!/usr/bin/env node
/**
 * @module cli
 */

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { createPlayCommand } from "./index/commands/playCommand.js";

async function run() {
    return yargs(hideBin(process.argv))
        .scriptName("node-quiz")
        .showHelpOnFail(true)
        .usage("$0 <cmd> [args]")
        .command(createPlayCommand())
        .help("h")
        .alias("h", "help")
        .wrap(yargs().terminalWidth())
        .strict(true)
        .parse();
}

run().catch(console.error);
