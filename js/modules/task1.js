export function createCheeseBoard(...args) {
    let [height, width, sign] = args;
    let err = validation(...args);
    if (typeof err === "object") {
        return err;
    }
    sign = sign.length > 1 ? sign.charAt() : sign;
    height = Math.abs(height);
    width = Math.abs(width);

    let line = "";

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if ((i + j) % 2 == 0) {
                line += sign;
            } else {
                line += " ";
            }
        }
        line += "\n"
    }
    return line;
}

function validation(...args) {
    let [height, width] = args;
    if (args.length != 3) return { status: "failed", reason: "Введите 3 аргумента" };
    if (height === 0 || height > 50 || width === 0 || width > 50) return { status: "failed", reason: "Введите 1-й и 2-й аргументы в диапазоне от 1 до 50" };
    height = Number(height);
    width = Number(width);
    Math.abs(height);
    Math.abs(width);
    if (typeof height != "number" || typeof width != "number" || !Number.isInteger(height) || !Number.isInteger(width)) {
        return { status: "failed", reason: "1-й и 2-й аргументы должны быть целыим числами, 3-й - строкой" };
    }
}

createCheeseBoard(2, 2)