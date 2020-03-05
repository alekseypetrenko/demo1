export function sortTriangle(arr) {
    // делаем копию исходного массива, которую можно изменять
    let myArr = JSON.parse(JSON.stringify(arr));
    let err = validation(myArr);
    if (typeof err === "object") {
        return err;
    }

    let areaCalc = myArr.map(triangle => {
        let arr = []
        for (let vert in triangle) {
            if (vert != "vertices") {
                arr.push(triangle[vert])
            }
        }
        let p = (arr[0] + arr[1] + arr[2]) / 2;
        let area = Math.sqrt(p * (p - arr[0]) * (p - arr[1]) * (p - arr[2]));
        return { vertices: triangle.vertices, area };
    })

    return areaCalc.sort((a, b) => a.area - b.area)
        .map(el => el.vertices);
}

function validation(myArr) {
    if (myArr.length < 1 || !Array.isArray(myArr)) {
        return { status: "failed", reason: "Аргумент пустой или не является массивом" };
    }
    for (let i = 0; i < myArr.length; i++) {
        for (let j = i + 1; j < myArr.length; j++) {
            if (myArr[i].vertices === myArr[j].vertices) {
                return { status: "failed", reason: "Вершины треугольников не могут иметь одинаковое имя" };
            }
        }
        let splittedVert = myArr[i].vertices.toLowerCase().split("");
        for (let vert in myArr[i]) {
            if (vert != "vertices") {
                myArr[i][vert] = Math.abs(myArr[i][vert]);
                if (typeof myArr[i][vert] != "number" || myArr[i][vert] == 0) {
                    return { status: "failed", reason: "Вершины должны быть числами больше нуля" };
                }
                if (splittedVert[0] != vert && splittedVert[1] != vert && splittedVert[2] != vert) {
                    return { status: "failed", reason: "Ключи вершин должны соответствовать названию треугольника. Например 'ABC', a: 1, b: 2, c: 3" };
                }
            }
        }
        let values = Object.values(myArr[i]);
        values.shift();
        // проверяем является ли фигура треугольником
        if (values[0] + values[1] <= values[2] || values[1] + values[2] <= values[0] || values[2] + values[1] <= values[0]) {
            //return { status: "failed", reason: 'Ошибка, сумма длин каждых двух сторон должна быть больше длины третьей стороны.' };
            return 0;
        }
    }
}