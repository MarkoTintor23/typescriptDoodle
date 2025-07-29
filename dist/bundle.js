/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("{\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nlet name = \"marko\";\nlet programmingLanguages = [];\nprogrammingLanguages.push(\"php\");\nlet result = 2;\nconst user = {\n    name: \"toma\",\n    age: 31,\n};\nconsole.log(user);\nfunction sayHello(message) {\n    console.log(message);\n}\nsayHello(\"toma\");\nfunction add(x, y) {\n    return x + y;\n}\nfunction addRide(location, length) {\n    return `started a ride from ${location} and it took ${length} km`;\n}\nconsole.log(add(5, 3), addRide(\"nemanjina\", 4));\nconst userInfo = [\"Toma\", 55, true];\nconsole.log(userInfo);\nconst locationCity = [\n    40.7128,\n    -74.9049,\n    \"new yourk city\",\n];\nconsole.log(locationCity);\nfunction addOrder(name, country, zip, product, pare, valuta) {\n    return {\n        firstName: `${name}`,\n        country: `${country}`,\n        zipCode: `${zip}`,\n        product: `${product}`,\n        pare: `${pare}`,\n        valuta: `${valuta}`,\n    };\n}\nconsole.log(addOrder(\"Marko\", \"Beograd\", 11000, \"monitor\", 200, \"rsd\"));\nvar Chat;\n(function (Chat) {\n    function send(message) {\n        console.log(`message was sent to chat ${message}`);\n    }\n    Chat.send = send;\n})(Chat || (Chat = {}));\nChat.send(\"test\");\nvar BudgetTracker;\n(function (BudgetTracker) {\n    function addExpense(expense, amount) {\n        const expenses = getAllExpenses();\n        expenses.push({ expense: expense, amount: amount });\n        localStorage.setItem(\"expenses\", JSON.stringify(expenses));\n    }\n    BudgetTracker.addExpense = addExpense;\n    function getAllExpenses() {\n        const data = localStorage.getItem(\"expenses\");\n        return data ? JSON.parse(data) : [];\n    }\n    BudgetTracker.getAllExpenses = getAllExpenses;\n})(BudgetTracker || (BudgetTracker = {}));\nBudgetTracker.addExpense(\"new PC\", 1000);\nBudgetTracker.addExpense(\"new mouse\", 90);\n\n\n//# sourceURL=webpack://typescript/./src/index.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;