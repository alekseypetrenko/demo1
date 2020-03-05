function isPalindrom(str) {
    str = str.toString();
    let reversedStr = "";
    for (let char of str) {
        reversedStr = char + reversedStr;
    }
    return reversedStr === str;
}

export function checkPolindrome(str) {
    let err = validation(str);
    if (typeof err == "object") {
        return err;
    }
    str = str.toString();
    let maxPalindrome = "";

    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let getSubstring = str.substring(i, j);
            if (isPalindrom(getSubstring)) {
                if (getSubstring.length > maxPalindrome.length) {
                    maxPalindrome = getSubstring;
                }
            }
        }
    }
    return maxPalindrome;
}

function validation(str) {
    if (typeof str != "number") return { status: "failed", reason: "Аргумент функции не является числом" };
    str = Math.abs(str);
    if (str < 10) return { status: "failed", reason: "Введите число больше 10" };
    if (!Number.isInteger(2.2)) return { status: "failed", reason: "Число не является целым" };
}

// Оптимизированый алгоритм с нахождением центра палиндрома. РАЗОБРАТЬ!!!
// function expandAroundCenterSolution(s) {
//     let start = 0, end = 0;
//     for (let i = 0; i < s.length; i++) {
//         let center = getCenter(s, i);
//         let bounds = expandAroundCenter(s, center[0], center[1]);
//         let L = bounds[0], R = bounds[1];
//         if (R - L > end - start) {
//             start = L;
//             end = R;
//         }
//         console.log("---");
//         i = center[1]; //move to the end of center, i++ will then shift pointer to index right after current center
//     }
//     return s.substring(start, end + 1);
// }

// function expandAroundCenter(s, left, right) {
//     let L = left, R = right;

//     while (L >= 0 && R < s.length && s[L] === s[R]) {
//         L--;
//         R++;
//     }
//     console.log("expand return " + (L+1) + ":" + (R-1));
//     return [++L, --R];
// }

// function getCenter(s,c){
//     let L = c, R = c;
//     console.log("get center start index: " + c);
//     while(s[L] === s[++R] && R <= s.length );
//     console.log("return " + L + ":" + (R-1));
//     return [L, --R];
// }