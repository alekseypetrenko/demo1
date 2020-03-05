import { sortTriangle } from "../src/task3.js";

export function testSortTriangle(assert) {
    describe("Сортировка треугольников", () => {
        it("Проверка одинаковых вершин", () => {
            assert.deepEqual(sortTriangle([
                { vertices: "ABC", a: 10, b: 20, c: 20 },
                { vertices: "ABC", a: 1, b: 2, c: 2 },
            ]), { status: "failed", reason: "Вершины треугольников не могут иметь одинаковое имя" });
        })
        it("Вершины должны быть больше 0", () => {
            assert.deepEqual(sortTriangle([
                { vertices: "ABC", a: 0, b: 0, c: 20 },
                { vertices: "ABF", a: 1, b: 0, f: 2 },
            ]), { status: "failed", reason: "Вершины должны быть числами больше нуля" });
        })
        it("Передан не массив, или пустой массив", () => {
            assert.deepEqual(sortTriangle([]), { status: "failed", reason: "Аргумент пустой или не является массивом" });
            assert.deepEqual(sortTriangle("test"), { status: "failed", reason: "Аргумент пустой или не является массивом" });
            assert.deepEqual(sortTriangle({}), { status: "failed", reason: "Аргумент пустой или не является массивом" });
            assert.deepEqual(sortTriangle(222), { status: "failed", reason: "Аргумент пустой или не является массивом" });
        })
        it("Соответствие вершин названию треугольников", () => {
            assert.deepEqual(sortTriangle([
                { vertices: "ABC", f: 1, d: 2, c: 22 },
                { vertices: "ABF", a: 1, b: 0, f: 2 },
            ]), { status: "failed", reason: "Ключи вершин должны соответствовать названию треугольника. Например 'ABC', a: 1, b: 2, c: 3" });
        })
        it("Является ли фигура треугольником(если нет то ее площадь считается как 0)", () => {
            assert.deepEqual(sortTriangle([
                { vertices: "BCA", b: 35, c: -20, a: 40 },
                { vertices: "ABF", a: 1, b: 2.2, f: 2.2 },
                { vertices: "EDF", e: 40, d: 30, f: 65 },
                { vertices: "ABC", a: 1, b: 2, c: 3 },
            ]), ["ABC", "ABF", "BCA", "EDF"]);
        })
        it("Введено отрицательное число для вершины", () => {
            assert.deepEqual(sortTriangle([
                { vertices: "BCA", b: 35, c: -20, a: 40 },
                { vertices: "EDF", e: 40, d: 30, f: 65 },
            ]), ["BCA", "EDF"]);
        })
        it("Введены числа для вершин с плавающей точкой", () => {
            assert.deepEqual(sortTriangle([
                { vertices: "ABF", a: 1, b: 2.2, f: 2.2 },
                { vertices: "EDF", e: 40, d: 30, f: 65 },
                { vertices: "ABC", a: 1, b: 3.3, c: 3.5 },
            ]), ["ABF", "ABC", "EDF"]);
        })
    })
}




