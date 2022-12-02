
export const x = "";

const input = await Deno.readTextFile("./input.txt");

const elves = input.split("\r\n\r\n");

let sums = [0];

for (const elf of elves) {
    const nums = elf.split("\r\n").map((s) => parseInt(s, 10));
    const total = nums.reduce((a, b) => a + b, 0);

    sums.push(total)
}

const topThree = sums.sort((a, b) => b - a).slice(0, 3);

const finalSum = topThree.reduce((a, b) => a + b, 0)

console.log("Highest three elf total : " + finalSum)