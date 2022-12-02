export const x = "";

const input = await Deno.readTextFile("./input.txt");
const strategies = input.split("\r\n");

let roundResults = [0]

for (const round of strategies) {
    const r = round.split(" ")
    const opponent = r[0]
    const res = r[1]

    if (opponent == 'A' && res == 'X') {
        roundResults.push(3)
    } else if (opponent == 'A' && res == 'Y') {
        roundResults.push(4)
    } else if (opponent == 'A' && res == 'Z') {
        roundResults.push(8)
    } else if (opponent == 'B' && res == 'X') {
        roundResults.push(1)
    } else if (opponent == 'B' && res == 'Y') {
        roundResults.push(5)
    } else if (opponent == 'B' && res == 'Z') {
        roundResults.push(9)
    } else if (opponent == 'C' && res == 'X') {
        roundResults.push(2)
    } else if (opponent == 'C' && res == 'Y') {
        roundResults.push(6)
    } else if (opponent == 'C' && res == 'Z') {
        roundResults.push(7)
    }
}

const total = roundResults.reduce((a, b) => a + b, 0);
console.log(total)