import { getLuckyTicket } from "../src/task5.js";

export function testGetLuckyTicket(assert) {
    describe("Счастливые билеты", () => {
        it("Проверка на целые числа", () => {
            assert.deepEqual(getLuckyTicket({ min: 21.2, max: 50.4 }), { status: "failed", reason: "Введите целые числа" });
        })
        it("Min не может быть больше Max", () => {
            assert.deepEqual(getLuckyTicket({ min: 500, max: 20 }), { status: "failed", reason: "Min не может быть больше Max" });
        })
        it("Числа не могут быть равны 0", () => {
            assert.deepEqual(getLuckyTicket({ min: 0, max: 0 }), { status: "failed", reason: "Числа не могут быть равны 0" });
        })
        it("Числе не могут иметь больше 6 цифр", () => {
            assert.deepEqual(getLuckyTicket({ min: 4567891, max: 4567897 }), { status: "failed", reason: "Числе не могут иметь больше 6 цифр" });
        })
        it("Победитель Hard method", () => {
            assert.deepEqual(getLuckyTicket({ min: 144, max: 4578 }), { method: "hardMethod", hardMethod: 216, simpleMethod: 34 });
        })
        it("Победитель Simple, min 1, max 999999", () => {
            assert.deepEqual(getLuckyTicket({ min: 1, max: 999999 }), { method: "simpleMethod", hardMethod: 25080, simpleMethod: 55251 });
        })
        it("Победитель Simple, min 2, max 999998", () => {
            assert.deepEqual(getLuckyTicket({ min: 2, max: 999998 }), {method: "simpleMethod", hardMethod: 25080, simpleMethod: 55250});
        })
        // Спросить
        // it("Ничья", () => {
        //     assert.deepEqual(getLuckyTicket({ min: 100001, max: 100001 }), { method: "friendship won", hardMethod: 0, simpleMethod: 0 });
        // })
    })
}



