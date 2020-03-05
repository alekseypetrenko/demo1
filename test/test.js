import { testCreateCheeseBoard } from "./task1_cheeseBoard.js";
import { testGetNumbers } from "./task6_getNumbers.js";
import { testCheckPolindrome } from "./task4_checkPolindrome.js";
import { testFibRow } from "./task7_fibRow.js";
import { testSortTriangle } from "./task3_sortTriangle.js";
import { testRectangleInRectangle } from "./task2_rectangleInRectangle.js";
import { testGetLuckyTicket } from "./task5_getLuckyTicket.js";

// setting up mocha work
mocha.setup('bdd');

// call assert from chai
const assert = chai.assert;

//tests
testCreateCheeseBoard(assert);
testGetNumbers(assert);
testCheckPolindrome(assert);
testFibRow(assert);
testSortTriangle(assert);
testRectangleInRectangle(assert);
testGetLuckyTicket(assert);

// run tests
mocha.run()