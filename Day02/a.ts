export const x = "";

const input = await Deno.readTextFile("./input.txt");
const strategies = input.split("\r\n");

const Lost = 0
const Draw = 3
const Win = 6

let roundResults = [0]

for (const round of strategies) {
    const r = round.split(" ")
    const opponent = getValue(r[0])
    const me = getValue(r[1])

    const total = getRoundResult(opponent, me)
    roundResults.push(total)
}

function getValue(str: string) {
    if (str == 'A' || str == 'X') {
        return 1
    } else if (str == 'B' || str == 'Y') {
        return 2
    } else if (str == 'C' || str == 'Z') {
        return 3
    }
}

function getRoundResult(op: number, me: number) {
    if (op == me) {
        return me + Draw
    } else if (op > me && (op != 3 || me != 1)) {
        return me + Lost
    } else if (op > me) {
        return me + Win
    } else if (me > op && (op != 1 || me != 3)) {
        return me + Win
    } else {
        return me + Lost
    }
}

const total = roundResults.reduce((a, b) => a + b, 0);
console.log(total)