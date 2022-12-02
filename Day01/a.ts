export const x = "";

const input = await Deno.readTextFile("./input.txt");

const elves = input.split("\r\n\r\n");

let highest = 0;
let sums = [0];

for (const elf of elves) {
    const nums = elf.split("\r\n").map((s) => parseInt(s, 10));
    const total = nums.reduce((a, b) => a + b, 0);

    sums.push(total)

    if (total > highest) {
        highest = total;
    }

}

console.log("Highest elf total : " + highest)