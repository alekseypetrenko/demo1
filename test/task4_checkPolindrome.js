import { checkPolindrome } from "../src/task4.js";

export function testCheckPolindrome(assert) {
    describe("Является ли число палиндромом", () => {
        it("Число меньше 10", () => {
            assert.deepEqual(checkPolindrome(5), { status: "failed", reason: "Введите число больше 10" });
        })
        it("Введена строка", () => {
            assert.deepEqual(checkPolindrome("rtre"), { status: "failed", reason: "Аргумент функции не является числом" });
        })
        it("Введено не целое число", () => {
            assert.deepEqual(checkPolindrome(20.2), { status: "failed", reason: "Число не является целым" });
        })
    })
}

