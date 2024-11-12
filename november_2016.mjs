import promptSync from 'prompt-sync';
import * as support from './lib/js_outsourced_functions/support.mjs';
import * as output from './lib/js_output/output.mjs';

function timeToFeelOld(age)
{
    var result = support.giveThings(age);
    return result;
}

const prompt = promptSync();

console.log("THE NOVEMBER 2016 GUIDE TO MAKING PEOPLE FEEL OLD\n");

const age = prompt("how old are you? ");



const thing = timeToFeelOld(age);
output.speaker(thing);