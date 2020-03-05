import { getNumbers } from "../src/task6.js";

export function testGetNumbers(assert) {
    describe("Тест числовой последовательности", () => {
        it("Квадрат 25", () => {
            assert.equal(getNumbers(3, 25), "5 6 7");
        })
        it("Введены не числа", () => {
            assert.deepEqual(getNumbers("asd", "adf"), { status: "failed", reason: "Аргументы должны быть целыми числами" });
        })
        it("Аргументы равняются нулю", () => {
            assert.deepEqual(getNumbers(0, 0), { status: "failed", reason: "Аргументы функции должны быть больше 0" });
        })
        it("Проверка на квадрат целого числа", () => {
            assert.deepEqual(getNumbers(10, 7), { status: "failed", reason: "2-й аргумент не является квадратом целого числа" });
        })
    })
}