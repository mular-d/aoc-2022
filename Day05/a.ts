export const x = "";

const input = await Deno.readTextFile("./input.txt");

const [top, cmd] = input.split("\r\n\r\n");

const stacks: string[][] = []

const toStack = top.split("\r\n").reverse().slice(1);

for (let i = 0; i < (toStack[0].length + 1) / 4; i++) {
    stacks.push(toStack.map((x) => x.slice(i * 4, i * 4 + 3)));
}

const clearEmptyStrings = () => {
    stacks.forEach((stack) => {
        while (stack[stack.length - 1] === "   ") {
            stack.pop();
        }
    });
};

clearEmptyStrings();

const commands = cmd.split("\r\n");

for (const in_ of commands) {
    const [count, rest] = in_.replace("move ", "").split(" from ");
    const [from, to] = rest.split(" to ");

    const from_ = parseInt(from) - 1;
    const to_ = parseInt(to) - 1;
    const count_ = parseInt(count);

    const b = stacks[from_].splice(stacks[from_].length - count_);
    stacks[to_] = stacks[to_].concat(b.reverse());
}

stacks.forEach((x) => console.log(x[x.length - 1]));