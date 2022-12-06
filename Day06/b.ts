export const x = "";

const input = await Deno.readTextFile("./input.txt");

const signals = input.split("");

let stack: string[] = [];
let tempIndex = 0;
let count = 0;

for (const signal of signals) {
    if (stack.includes(signal)) {
        tempIndex = stack.indexOf(signal)
        stack = stack.slice(tempIndex + 1);
        stack.push(signal)
    } else {
        stack.push(signal)
    }
    count++
    if (stack.length == 14) {
        break;
    }
}

console.log(count);
console.log(stack);