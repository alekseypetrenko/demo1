import { fibRow } from "../src/task7.js";

export function testFibRow(assert) {
    describe("Числа Фибоначи", () => {
        it("Длинна 2", () => {
            assert.deepEqual(fibRow({ length: 2 }), [13, 21, 34, 55, 89]);
        })
        it("Минимальное 0, максимальное 10", () => {
            assert.deepEqual(fibRow({ min: 0, max: 10 }), [0, 1, 2, 3, 5, 8]);
        })
        it("Длина 0", () => {
            assert.deepEqual(fibRow({ length: 0 }), [0]);
        })
        it("Введена строка для параметра Length", () => {
            assert.deepEqual(fibRow({ length: "test" }), { status: "failed", reason: "Ключи объекта должны быть целыми числами" });
        })
        it("Введены строки для значений min/max", () => {
            assert.deepEqual(fibRow({ min: "sad", max: "dfersgf" }), { status: "failed", reason: "Ключи объекта должны быть целыми числами" });
        })
        it("Передан не объект", () => {
            assert.deepEqual(fibRow(2), { status: "failed", reason: "Передан не объект" });
        })
    })
}

