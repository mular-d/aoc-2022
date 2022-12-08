export const x = "";

const input = (await Deno.readTextFile("./input.txt")).split("\r\n");

const stack = input.map((value) => value.split(""))

let count = 0

const checkTree = (value: number, row: number, column: number) => {
    let right = true;
    let left = true;
    let top = true;
    let bottom = true;

    for (let i = 0; i < stack.length; i++) {
        for (let j = 0; j < stack.length; j++) {
            const newVal = parseInt(stack[i][j])
            if (i == row && j == column) {
                continue
            }
            if (i == row) {
                if (j < column) {
                    newVal >= value ? left = false : 0
                } else if (j > column) {
                    newVal >= value ? right = false : 0
                }
            }
            if (j == column) {
                if (i < row) {
                    newVal >= value ? top = false : 0
                } else if (i > row) {
                    newVal >= value ? bottom = false : 0
                }
            }
        }
    }
    if (right || left || top || bottom) {
        return true
    }
    return false
}

let rightCounter = 0;
const bottomCounter = stack.length;

for (let i = 1; i < stack.length - 1; i++) {
    for (let j = 1; j < stack[i].length - 1; j++) {
        if (checkTree(parseInt(stack[i][j]), i, j)) {
            count++
        }
    }
    rightCounter = stack[i].length
}

count = count + ((rightCounter + bottomCounter - 2) * 2)
console.log(count)