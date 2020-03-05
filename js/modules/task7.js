export function fibRow(obj) {
	const result = [];
	const fibs = fib(1000);
	let err = validation(obj);
	if (typeof err === "object") {
		return err;
	}

	if (Object.keys(obj).length == 2) {
		obj.min = Math.abs(obj.min);
		obj.max = Math.abs(obj.max);
		for (let i = obj.min; i < fibs.length; i++) {
			if (fibs[i] >= i && fibs[i] <= obj.max) {
				result.push((fibs[i]));
			}
		}
	} else {
		for (let i = 0; i < fibs.length; i++) {
			const len = Math.ceil(Math.log10(fibs[i] + 1));
			if (len == obj.length)
				result.push(fibs[i]);
		}
	}
	return result;
}

function fib(n) {
	let prev = 0, next = 1;
	let arr = [];
	arr.push(0);
	for (let i = 0; i < n; i++) {
		next = prev + next;
		prev = next - prev;
		arr.push(next);
	}
	return arr;
}

function validation(obj) {
	const keys = Object.keys(obj);
	if (typeof obj != "object") return { status: "failed", reason: "Передан не объект" };
	if (keys.length > 2) return { status: "failed", reason: "Больше двух аргументов" };
	for (let i = 0; i < keys.length; i++) {
		for (let key in obj) {
			obj[key] = Number(obj[key]);
			obj[key] = Math.abs(obj[key]);
			if (typeof obj[key] != "number" || !Number.isInteger(obj[key])) {
				return { status: "failed", reason: "Ключи объекта должны быть целыми числами" };
			}
		}
	}
}