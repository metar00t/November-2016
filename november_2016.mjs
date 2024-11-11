import promptSync from 'prompt-sync';
import * as support from './lib/js_outsourced_functions/support.mjs';
import * as output from './lib/js_output/output.mjs';

const prompt = promptSync();

console.log("THE NOVEMBER 2016 GUIDE TO MAKING PEOPLE FEEL OLD\n");

const age = prompt("how old are you? ");

function timeToFeelOld(age)
{
    var result = support.giveThing(age);
    return result;
}

var thing = timeToFeelOld(age);
output.speaker(thing);