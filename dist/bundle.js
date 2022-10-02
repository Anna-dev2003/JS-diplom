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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://js_diploma/./src/styles/style.css?");

/***/ }),

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formForLogin\": () => (/* binding */ formForLogin),\n/* harmony export */   \"formForRegister\": () => (/* binding */ formForRegister),\n/* harmony export */   \"formForTasks\": () => (/* binding */ formForTasks)\n/* harmony export */ });\n/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.js */ \"./src/components/Input.js\");\n\n\n\nclass Form {\n\n    constructor(){\n\n        this.form = document.createElement('form')\n        this.formTitle = document.createElement('p')\n        this.contInputs = document.createElement('div')\n        this.button = document.createElement('button')\n        this.render()\n\n    }\n\n    render(){\n\n        this.form.classList.add('form')\n\n        this.formTitle.classList.add('form-title')\n\n        // const contInputs = document.createElement('div')\n        \n        const contForBth = document.createElement('div')\n        contForBth.classList.add('bth-container')\n\n        this.button.classList.add('button-submit')\n        this.button.type = 'submit'\n\n        contForBth.append(this.button)\n        this.form.append(this.formTitle, this.contInputs, contForBth)\n    }\n\n    show(){\n        return this.form\n    }\n\n    dataProcessing(){\n\n        return this.form.addEventListener('submit', (event) => {\n            event.preventDefault()\n\n            const inputsArr = []\n            let inputsCollection  = document.querySelectorAll('.input-style');\n\n            inputsCollection.forEach((input) => {\n                inputsArr.push(input)\n                input.value = ''\n            })\n\n            return inputsArr\n        })\n\n    }\n\n}\n\nclass RegisterForm extends Form{\n\n    constructor(options){\n        const {bthText, title, secondTitle} = options\n        super()\n\n        this.textForChangeForm = secondTitle\n        this.button.textContent = bthText\n        this.formTitle.textContent = title\n        this.addSecondTitle()\n        this.addInput()\n        \n    }\n\n    addInput(){\n        const inputEmail = new _Input_js__WEBPACK_IMPORTED_MODULE_0__.Input('Email', 'email');\n        const inputName = new _Input_js__WEBPACK_IMPORTED_MODULE_0__.Input('Name', 'text');\n        const inputPassword = new _Input_js__WEBPACK_IMPORTED_MODULE_0__.Input('Password', 'text');\n\n        this.contInputs.append(inputEmail.render(), inputName.render(), inputPassword.render())\n    }\n\n    addSecondTitle (){\n        const titleForChange = document.createElement('p')\n        titleForChange.classList.add('form-title_change')\n        titleForChange.textContent = this.textForChangeForm\n        this.textForChangeForm = titleForChange\n        this.form.prepend(titleForChange)\n    }\n\n\n}\n\nclass LoginForm extends Form{\n    constructor(options){\n        const {bthText, title, secondTitle} = options\n        super()\n        this.textForChangeForm = secondTitle\n        this.button.textContent = bthText\n        this.formTitle.textContent = title\n\n        this.addSecondTitle()\n        this.addInput()\n\n    }\n\n    addInput(){\n        const inputEmail = new _Input_js__WEBPACK_IMPORTED_MODULE_0__.Input('Email', 'email');\n        const inputPassword = new _Input_js__WEBPACK_IMPORTED_MODULE_0__.Input('Password', 'text');\n\n        this.contInputs.append(inputEmail.render(), inputPassword.render())\n    }\n\n    addSecondTitle (){\n        const titleForChange = document.createElement('p')\n        titleForChange.classList.add('form-title_change')\n        titleForChange.textContent = this.textForChangeForm\n        this.textForChangeForm = titleForChange\n        this.form.prepend(titleForChange)\n    }\n\n}\n\nclass TasksForm extends Form{\n    constructor(options){\n        const {bthText, title} = options\n        super()\n        this.button.textContent = bthText\n        this.formTitle.textContent = title\n        this.addInput()\n\n    }\n\n    addInput(){\n        const inputName = new _Input_js__WEBPACK_IMPORTED_MODULE_0__.Input('Name', 'text');\n        const inputDescription = new _Input_js__WEBPACK_IMPORTED_MODULE_0__.Input('Description', 'text');\n\n\n        this.contInputs.append(inputName.render(), inputDescription.render())\n    }\n\n}\n\nconst formForRegister = new RegisterForm({\n    bthText: 'SUBMIT', \n    title: 'REGISTER',\n    secondTitle: 'LOGIN'\n});\n\nconst formForLogin = new LoginForm({\n    bthText: 'SUBMIT', \n    title: 'LOGIN',\n    secondTitle: 'REGISTER'\n});\n\nconst formForTasks = new TasksForm({\n    bthText: 'ADD', \n    title: 'ADD TASK',\n});\n// const formForTasks = new TasksForm('ADD')\n\n\n\n//# sourceURL=webpack://js_diploma/./src/components/Form.js?");

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Input\": () => (/* binding */ Input)\n/* harmony export */ });\n\nclass Input {\n\n    constructor(name, type){\n        this.divForInput = document.createElement('div')\n        this.input = document.createElement('input')\n        this.label = document.createElement('label')\n        this.labelName = name\n        this.inputType = type\n    }\n\n    render(){\n\n        this.input.classList.add('input-style')\n        this.input.type = this.inputType\n\n        this.label.classList.add('label')\n        this.label.textContent = this.labelName\n\n        this.divForInput.append(this.label, this.input)\n        return this.divForInput\n    }\n\n}\n\n\n\n\n\n\n//# sourceURL=webpack://js_diploma/./src/components/Input.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Form.js */ \"./src/components/Form.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n\n\n// import {\n//     res\n// } from './components/API.js'\n\n\n\n\n// console.log(formForRegister)\nlet res = _components_Form_js__WEBPACK_IMPORTED_MODULE_0__.formForRegister.dataProcessing()\n// console.log(res)\n\nconst cont = document.getElementById('cont')\n\n//формі в html формате\n\nconst loginForm = _components_Form_js__WEBPACK_IMPORTED_MODULE_0__.formForLogin.show()\nconst registerForm = _components_Form_js__WEBPACK_IMPORTED_MODULE_0__.formForRegister.show()\nconst tasksForm = _components_Form_js__WEBPACK_IMPORTED_MODULE_0__.formForTasks.show()\n\n\n//Переключение форм\n\nconst renderRegisterForm = () => {\n    cont.append(registerForm)\n\n    _components_Form_js__WEBPACK_IMPORTED_MODULE_0__.formForRegister.textForChangeForm.addEventListener ('click', () => {\n        registerForm.remove()\n        renderLoginForm()\n    })\n}\n\nconst renderLoginForm = () => {\n\n    cont.append(loginForm)\n\n    _components_Form_js__WEBPACK_IMPORTED_MODULE_0__.formForLogin.textForChangeForm.addEventListener('click', () => {\n        loginForm.remove()\n        renderRegisterForm()\n    })\n\n\n}\n\nrenderLoginForm()\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://js_diploma/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;