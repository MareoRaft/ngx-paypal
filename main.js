(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./demo/$$_lazy_route_resource lazy recursive":
/*!***********************************************************!*\
  !*** ./demo/$$_lazy_route_resource lazy namespace object ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./demo/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./demo/main.ts":
/*!**********************!*\
  !*** ./demo/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _src_demo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/demo.module */ "./demo/src/demo.module.ts");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_src_demo_module__WEBPACK_IMPORTED_MODULE_1__["DemoModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./demo/src/api.component.html":
/*!*************************************!*\
  !*** ./demo/src/api.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"content-head is-center\">\r\n    Api\r\n</h2>\r\n\r\n<div class=\"pure-g\">\r\n    <div class=\"l-box pure-u-1\">\r\n        To use PayPal component, you need to provide it with\r\n        <strong>PayPalConfig</strong> model where you can define all supported properties. For explanation of what these properties\r\n        do and how they should be used, please refer to official PayPal documentation:\r\n\r\n        <div style=\"margin-top: 15px\">\r\n            <a href=\"https://developer.paypal.com/demo/checkout/#/pattern/client\" target=\"_blank\">\r\n                <button class=\"pure-button\">Client side integration</button>\r\n            </a>\r\n        </div>\r\n        <div style=\"margin-top: 15px\">\r\n            <a href=\"https://developer.paypal.com/demo/checkout/#/pattern/server\" target=\"_blank\">\r\n                <button class=\"pure-button\">Server side integration</button>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"l-box pure-u-1\">\r\n        <h3 class=\"content-subhead\">\r\n            PayPalConfig\r\n        </h3>\r\n        <table class=\"pure-table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Property</th>\r\n                    <th>Type</th>\r\n                    <th>Description</th>\r\n                    <th>Required for</th>\r\n                </tr>\r\n            </thead>\r\n\r\n            <tbody>\r\n                <tr>\r\n                    <td>integrationType</td>\r\n                    <td>PayPalIntegrationType</td>\r\n                    <td>Type of the integration (client | server)</td>\r\n                    <td>Both</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>environment</td>\r\n                    <td>PayPalEnvironment</td>\r\n                    <td>Environment (sandbox | production)</td>\r\n                    <td>Both</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>commit</td>\r\n                    <td>boolean</td>\r\n                    <td>Show 'Pay Now' button config</td>\r\n                    <td></td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>payment</td>\r\n                    <td>() => Observable&lt;string></td>\r\n                    <td>Called to create new payment for server side integration</td>\r\n                    <td>Server side integration</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>onAuthorize</td>\r\n                    <td>data: IPayPalPaymentCompleteData, actions: any) => Observable&lt;void></td>\r\n                    <td>Called to execute payment for server side integration</td>\r\n                    <td>Server side integration</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>client</td>\r\n                    <td>IPaypalClient</td>\r\n                    <td>Client tokens for client side integration</td>\r\n                    <td>Client side integration</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>transactions</td>\r\n                    <td>IPayPalTransaction[]</td>\r\n                    <td>Array of transaction, required for client side integration</td>\r\n                    <td>Client side integration</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>onPaymentComplete</td>\r\n                    <td>(data: IPayPalPaymentCompleteData, actions: any) => void</td>\r\n                    <td>Called for client side integration when payment is executed</td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>onPaymentComplete</td>\r\n                    <td>(data: IPayPalPaymentCompleteData, actions: any) => void</td>\r\n                    <td>Called for client side integration when payment is executed</td>\r\n                    <td>Client side integration</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>button</td>\r\n                    <td>IPayPalButtonStyle</td>\r\n                    <td>Button configuration</td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>funding</td>\r\n                    <td>IPayPalFunding</td>\r\n                    <td>Paypal funding configuration</td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>onError</td>\r\n                    <td>(err: any) => void</td>\r\n                    <td>Called when PayPal experiences an error</td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr>\r\n                    <td>onCancel</td>\r\n                    <td>(data: IPayPalCancelPayment, actions: any) => void</td>\r\n                    <td>Called when user cancels payment</td>\r\n                    <td></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./demo/src/api.component.ts":
/*!***********************************!*\
  !*** ./demo/src/api.component.ts ***!
  \***********************************/
/*! exports provided: ApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiComponent", function() { return ApiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src */ "./src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiComponent = /** @class */ (function () {
    function ApiComponent() {
        this.installCode = "npm install ngx-paypal --save";
        this.htmlCode = "\n  <ngx-paypal [config]=\"payPalConfig\"></ngx-paypal>\n  ";
        this.tsCode = "\n  import { Component, OnInit } from '@angular/core';\n\n  import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';\n\n  @Component({\n    templateUrl: './main.component.html',\n  })\n  export class MainComponent implements OnInit {\n\n    public payPalConfig?: PayPalConfig;\n\n    ngOnInit(): void {\n      this.initConfig();\n    }\n\n    private initConfig(): void {\n      this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {\n        commit: true,\n        client: {\n          sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R'\n        },\n        button: {\n          label: 'paypal',\n        },\n        onPaymentComplete: (data, actions) => {\n          console.log('OnPaymentComplete');\n        },\n        onCancel: (data, actions) => {\n          console.log('OnCancel');\n        },\n        onError: (err) => {\n          console.log('OnError');\n        },\n        transactions: [{\n          amount: {\n            currency: 'USD',\n            total: 9\n          }\n        }]\n      });\n    }\n  }\n  ";
    }
    ApiComponent.prototype.ngOnInit = function () {
        this.initConfig();
    };
    ApiComponent.prototype.ngAfterViewChecked = function () {
        this.prettify();
    };
    ApiComponent.prototype.initConfig = function () {
        this.payPalConfig = new _src__WEBPACK_IMPORTED_MODULE_1__["PayPalConfig"](_src__WEBPACK_IMPORTED_MODULE_1__["PayPalIntegrationType"].ClientSideREST, _src__WEBPACK_IMPORTED_MODULE_1__["PayPalEnvironment"].Sandbox, {
            commit: true,
            client: {
                sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R'
            },
            button: {
                label: 'paypal',
            },
            onPaymentComplete: function (data, actions) {
                console.log('OnPaymentComplete');
            },
            onCancel: function (data, actions) {
                console.log('OnCancel');
            },
            onError: function (err) {
                console.log('OnError');
            },
            transactions: [{
                    amount: {
                        currency: 'USD',
                        total: 9
                    }
                }]
        });
    };
    ApiComponent.prototype.prettify = function () {
        if (window['PR']) {
            PR.prettyPrint();
        }
    };
    ApiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./api.component.html */ "./demo/src/api.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ApiComponent);
    return ApiComponent;
}());



/***/ }),

/***/ "./demo/src/app.component.html":
/*!*************************************!*\
  !*** ./demo/src/app.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <div class=\"home-menu pure-menu pure-menu-horizontal pure-menu-fixed\">\r\n        <a class=\"pure-menu-heading\" href=\"\">PayPal for Angular 6+</a>\r\n\r\n        <ul class=\"pure-menu-list\">\r\n            <li class=\"pure-menu-item\">\r\n                <a [routerLink]=\"['/']\" class=\"pure-menu-link\">Getting started</a>\r\n            </li>\r\n            <li class=\"pure-menu-item\">\r\n                <a [routerLink]=\"['/api']\" class=\"pure-menu-link\">Api</a>\r\n            </li>\r\n            <li class=\"pure-menu-item\">\r\n                <a href=\"https://github.com/Enngage/ngx-paypal\" target=\"_blank\" class=\"pure-menu-link\">GitHub</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"content-wrapper\">\r\n    <div class=\"content\">\r\n        <router-outlet>\r\n        </router-outlet>\r\n    </div>\r\n    <div class=\"footer l-box is-center\">\r\n        Star on GitHub to help further development and show support\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./demo/src/app.component.ts":
/*!***********************************!*\
  !*** ./demo/src/app.component.ts ***!
  \***********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.year = new Date().getFullYear();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./demo/src/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./demo/src/demo.module.ts":
/*!*********************************!*\
  !*** ./demo/src/demo.module.ts ***!
  \*********************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src */ "./src/index.ts");
/* harmony import */ var _api_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.component */ "./demo/src/api.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./demo/src/app.component.ts");
/* harmony import */ var _demo_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.routes */ "./demo/src/demo.routes.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main.component */ "./demo/src/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _src__WEBPACK_IMPORTED_MODULE_3__["NgxPayPalModule"],
                _demo_routes__WEBPACK_IMPORTED_MODULE_6__["DemoRoutes"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                _api_component__WEBPACK_IMPORTED_MODULE_4__["ApiComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./demo/src/demo.routes.ts":
/*!*********************************!*\
  !*** ./demo/src/demo.routes.ts ***!
  \*********************************/
/*! exports provided: DemoRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoRoutes", function() { return DemoRoutes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.component */ "./demo/src/api.component.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.component */ "./demo/src/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DemoRoutes = /** @class */ (function () {
    function DemoRoutes() {
    }
    DemoRoutes = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    {
                        path: '', component: _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
                    },
                    {
                        path: 'api', component: _api_component__WEBPACK_IMPORTED_MODULE_2__["ApiComponent"]
                    },
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], DemoRoutes);
    return DemoRoutes;
}());



/***/ }),

/***/ "./demo/src/main.component.html":
/*!**************************************!*\
  !*** ./demo/src/main.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"content-head is-center\">\r\n    Getting started\r\n</h2>\r\n\r\n<div class=\"pure-g\">\r\n\r\n    <div class=\"l-box pure-u-1\">\r\n        <h3 class=\"content-subhead\">\r\n            Live example (client side integration)\r\n        </h3>\r\n        <ngx-paypal [config]=\"payPalConfig\"></ngx-paypal>\r\n    </div>\r\n\r\n    <div class=\"l-box pure-u-1\">\r\n        <h3 class=\"content-subhead\">\r\n            Install\r\n        </h3>\r\n        <pre class=\"prettyprint\" [innerText]=\"installCode\"></pre>\r\n    </div>\r\n\r\n    <div class=\"l-box pure-u-1\">\r\n        <h3 class=\"content-subhead\">\r\n            .html\r\n        </h3>\r\n        <pre class=\"prettyprint\" [innerText]=\"htmlCode\"></pre>\r\n    </div>\r\n\r\n    <div class=\"l-box pure-u-1\">\r\n        <h3 class=\"content-subhead\">\r\n            .ts\r\n        </h3>\r\n        <pre class=\"prettyprint\" [innerText]=\"tsCode\"></pre>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./demo/src/main.component.ts":
/*!************************************!*\
  !*** ./demo/src/main.component.ts ***!
  \************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src */ "./src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.installCode = "npm install ngx-paypal --save";
        this.htmlCode = "\n  <ngx-paypal [config]=\"payPalConfig\"></ngx-paypal>\n  ";
        this.tsCode = "\n  import { Component, OnInit } from '@angular/core';\n  import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from '../ngx-paypal';\n\n  @Component({\n    templateUrl: './main.component.html',\n  })\n  export class MainComponent implements OnInit {\n\n    public payPalConfig?: PayPalConfig;\n\n    ngOnInit(): void {\n      this.initConfig();\n    }\n\n    private initConfig(): void {\n      this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {\n        commit: true,\n        client: {\n          sandbox: 'yourSandboxKey'\n        },\n        button: {\n          label: 'paypal',\n        },\n        onPaymentComplete: (data, actions) => {\n          console.log('OnPaymentComplete');\n        },\n        onCancel: (data, actions) => {\n          console.log('OnCancel');\n        },\n        onError: (err) => {\n          console.log('OnError');\n        },\n        transactions: [{\n          amount: {\n            currency: 'USD',\n            total: 9\n          }\n        }]\n      });\n    }\n  }\n  ";
    }
    MainComponent.prototype.ngOnInit = function () {
        this.initConfig();
    };
    MainComponent.prototype.ngAfterViewChecked = function () {
        this.prettify();
    };
    MainComponent.prototype.initConfig = function () {
        this.payPalConfig = new _src__WEBPACK_IMPORTED_MODULE_1__["PayPalConfig"](_src__WEBPACK_IMPORTED_MODULE_1__["PayPalIntegrationType"].ClientSideREST, _src__WEBPACK_IMPORTED_MODULE_1__["PayPalEnvironment"].Sandbox, {
            commit: true,
            client: {
                sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R'
            },
            button: {
                label: 'paypal',
            },
            onPaymentComplete: function (data, actions) {
                console.log('OnPaymentComplete');
            },
            onCancel: function (data, actions) {
                console.log('OnCancel');
            },
            onError: function (err) {
                console.log('OnError');
            },
            transactions: [{
                    amount: {
                        currency: 'USD',
                        total: 9
                    }
                }]
        });
    };
    MainComponent.prototype.prettify = function () {
        if (window['PR']) {
            PR.prettyPrint();
        }
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./main.component.html */ "./demo/src/main.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/components/paypal-component.ts":
/*!********************************************!*\
  !*** ./src/components/paypal-component.ts ***!
  \********************************************/
/*! exports provided: NgxPaypalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaypalComponent", function() { return NgxPaypalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_paypal_funding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/paypal-funding */ "./src/models/paypal-funding.ts");
/* harmony import */ var _models_paypal_integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/paypal-integration */ "./src/models/paypal-integration.ts");
/* harmony import */ var _models_paypal_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/paypal-models */ "./src/models/paypal-models.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NgxPaypalComponent = /** @class */ (function () {
    function NgxPaypalComponent() {
        /**
         * Indicates if global configuration (provided via 'forRoot') is used
         */
        this.useGlobalConfig = false;
        /**
         * Used for indicating delayed rendered if container is not yet ready in DOM
         */
        this.registerPayPalScriptWhenContainerIsReady = false;
        /**
        * Name of the global variable where paypal is stored
        */
        this.paypalWindowName = 'paypal';
        /**
         * PayPal integration script url
         */
        this.paypalScriptUrl = 'https://www.paypalobjects.com/api/checkout.js';
        this.payPalButtonContainerIdPrefix = 'ngx-paypal-button-container-';
    }
    Object.defineProperty(NgxPaypalComponent.prototype, "payPalButtonContainerElem", {
        set: function (content) {
            if (content) {
                this._payPalButtonContainerElem = content;
            }
        },
        enumerable: true,
        configurable: true
    });
    NgxPaypalComponent.prototype.ngOnChanges = function (changes) {
        // init when config once its available
        if (this.config) {
            this.initPayPal();
        }
    };
    NgxPaypalComponent.prototype.ngAfterViewChecked = function () {
        // register script if element is ready in dom
        if (this.registerPayPalScriptWhenContainerIsReady && this._payPalButtonContainerElem) {
            this.setupScript();
            this.registerPayPalScriptWhenContainerIsReady = false;
        }
    };
    NgxPaypalComponent.prototype.initPayPal = function () {
        // set unique paypal container button id
        this.payPalButtonContainerId = "" + this.payPalButtonContainerIdPrefix + this.getPseudoUniqueNumber();
        // check if paypal was already register and if so, don't add it to page again
        if (!window[this.paypalWindowName]) {
            // register script
            this.addPaypalScriptToPage();
        }
        else {
            // just register payment
            this.handleScriptRegistering();
        }
    };
    NgxPaypalComponent.prototype.getPseudoUniqueNumber = function () {
        return new Date().valueOf();
    };
    NgxPaypalComponent.prototype.addPaypalScriptToPage = function () {
        var _this = this;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = this.paypalScriptUrl;
        script.onload = function () { return _this.handleScriptRegistering(); };
        script.async = true;
        script.defer = true;
        this.paypalScriptElem.nativeElement.appendChild(script);
    };
    NgxPaypalComponent.prototype.handleScriptRegistering = function () {
        // check if container with requested id exists
        // this is here because dynamically switching between components would cause PayPal to
        // throw an error if the container already existed before
        if (this._payPalButtonContainerElem && this._payPalButtonContainerElem.nativeElement &&
            this._payPalButtonContainerElem.nativeElement.id === this.payPalButtonContainerId) {
            // container is ready, setup script right away
            this.setupScript();
        }
        else {
            // container is not ready, delay registering until it is
            this.registerPayPalScriptWhenContainerIsReady = true;
        }
    };
    NgxPaypalComponent.prototype.setupScript = function () {
        var _this = this;
        // first clear container
        if (!this._payPalButtonContainerElem) {
            throw Error("Cannot setup script because paypal button container with id '" + this.payPalButtonContainerId + "' is not yet ready");
        }
        this._payPalButtonContainerElem.nativeElement.innerHTML = '';
        // render PayPal button as per their docs at
        // https://developer.paypal.com/docs/integration/direct/express-checkout/integration-jsv4/add-paypal-button/
        paypal.Button.render({
            // set environment
            env: this.config.environment.toString(),
            // Show the buyer a 'Pay Now' button in the checkout flow
            commit: this.config.commit,
            // init client for client side integration
            client: this.getClient(),
            // set button config if available
            style: this.config.button,
            // set funding if available
            funding: this.getFunding(),
            // payment() is called when the button is clicked
            payment: function (data, actions) {
                if (_this.config.integrationType === _models_paypal_integration__WEBPACK_IMPORTED_MODULE_2__["PayPalIntegrationType"].ServerSideREST) {
                    // client needs to create payment on server side
                    if (!_this.config.payment) {
                        throw Error("You need set up a create payment method and return\n                            PayPal's payment id when using server side integration");
                    }
                    // Paypal expects promise with payment id (string) to be returned
                    return _this.config.payment().toPromise()
                        .then(function (paymentId) {
                        return paymentId;
                    });
                }
                if (_this.config.integrationType === _models_paypal_integration__WEBPACK_IMPORTED_MODULE_2__["PayPalIntegrationType"].ClientSideREST) {
                    if (!_this.config.transactions || !Array.isArray(_this.config.transactions) || _this.config.transactions.length <= 0) {
                        throw Error("You need to provide at least 1 transaction for client side integration");
                    }
                    return actions.payment.create({
                        payment: {
                            transactions: _this.config.transactions
                        }
                    });
                }
            },
            // onAuthorize() is called when the buyer approves the payment
            onAuthorize: function (data, actions) {
                if (_this.config.integrationType === _models_paypal_integration__WEBPACK_IMPORTED_MODULE_2__["PayPalIntegrationType"].ServerSideREST) {
                    // client needs to server to execute the payment
                    if (!_this.config.onAuthorize) {
                        throw Error("You need set up an execute method when using server side integration");
                    }
                    // Paypal expects promise
                    return _this.config.onAuthorize(data, actions).toPromise();
                }
                if (_this.config.integrationType === _models_paypal_integration__WEBPACK_IMPORTED_MODULE_2__["PayPalIntegrationType"].ClientSideREST) {
                    // Make a call to the REST api to execute the payment
                    return actions.payment.execute().then(function () {
                        if (!_this.config.onPaymentComplete) {
                            throw Error("You should provide some callback when payment is finished when using client side integration");
                        }
                        _this.config.onPaymentComplete(data, actions);
                    });
                }
            },
            onError: function (err) {
                if (_this.config.onError) {
                    _this.config.onError(err);
                }
            },
            onCancel: function (data, actions) {
                if (_this.config.onCancel) {
                    _this.config.onCancel(data, actions);
                }
            }
        }, "#" + this.payPalButtonContainerId);
    };
    NgxPaypalComponent.prototype.getClient = function () {
        if (this.config.integrationType === _models_paypal_integration__WEBPACK_IMPORTED_MODULE_2__["PayPalIntegrationType"].ClientSideREST) {
            if (!this.config.client) {
                throw Error("You need to setup client information when using client side integration");
            }
            return {
                production: this.config.client.production,
                sandbox: this.config.client.sandbox
            };
        }
        return undefined;
    };
    NgxPaypalComponent.prototype.getFunding = function () {
        var _this = this;
        // resolve funding to use paypal's properties
        if (!this.config.funding) {
            // no funding provided
            return undefined;
        }
        var allowed = [];
        var disallowed = [];
        if (this.config.funding.allowed) {
            this.config.funding.allowed.forEach(function (type) {
                allowed.push(_this.mapFundingType(type));
            });
        }
        if (this.config.funding.allowed) {
            this.config.funding.allowed.forEach(function (type) {
                allowed.push(_this.mapFundingType(type));
            });
        }
        return {
            allowed: allowed,
            disallowed: disallowed
        };
    };
    NgxPaypalComponent.prototype.mapFundingType = function (type) {
        if (type === _models_paypal_funding__WEBPACK_IMPORTED_MODULE_1__["PayPalFunding"].Card) {
            return paypal.FUNDING.CARD;
        }
        if (type === _models_paypal_funding__WEBPACK_IMPORTED_MODULE_1__["PayPalFunding"].Credit) {
            return paypal.FUNDING.CREDIT;
        }
        if (type === _models_paypal_funding__WEBPACK_IMPORTED_MODULE_1__["PayPalFunding"].Elv) {
            return paypal.FUNDING.ELV;
        }
        throw Error("Unsupported funding type '" + type + "'");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_paypal_models__WEBPACK_IMPORTED_MODULE_3__["PayPalConfig"])
    ], NgxPaypalComponent.prototype, "config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgxPaypalComponent.prototype, "useGlobalConfig", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('payPalScriptElem'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NgxPaypalComponent.prototype, "paypalScriptElem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('payPalButtonContainerElem'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NgxPaypalComponent.prototype, "payPalButtonContainerElem", null);
    NgxPaypalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-paypal',
            template: "\n    <div #payPalScriptElem></div>\n    <div #payPalButtonContainerElem [id]=\"payPalButtonContainerId\"></div>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], NgxPaypalComponent);
    return NgxPaypalComponent;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: PayPalConfig, NgxPaypalComponent, NgxPayPalModule, PayPalEnvironment, PayPalFunding, PayPalIntegrationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_paypal_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/paypal-models */ "./src/models/paypal-models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayPalConfig", function() { return _models_paypal_models__WEBPACK_IMPORTED_MODULE_0__["PayPalConfig"]; });

/* harmony import */ var _components_paypal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/paypal-component */ "./src/components/paypal-component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxPaypalComponent", function() { return _components_paypal_component__WEBPACK_IMPORTED_MODULE_1__["NgxPaypalComponent"]; });

/* harmony import */ var _ngx_paypal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-paypal.module */ "./src/ngx-paypal.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxPayPalModule", function() { return _ngx_paypal_module__WEBPACK_IMPORTED_MODULE_2__["NgxPayPalModule"]; });

/* harmony import */ var _models_paypal_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/paypal-environment */ "./src/models/paypal-environment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayPalEnvironment", function() { return _models_paypal_environment__WEBPACK_IMPORTED_MODULE_3__["PayPalEnvironment"]; });

/* harmony import */ var _models_paypal_funding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/paypal-funding */ "./src/models/paypal-funding.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayPalFunding", function() { return _models_paypal_funding__WEBPACK_IMPORTED_MODULE_4__["PayPalFunding"]; });

/* harmony import */ var _models_paypal_integration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/paypal-integration */ "./src/models/paypal-integration.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayPalIntegrationType", function() { return _models_paypal_integration__WEBPACK_IMPORTED_MODULE_5__["PayPalIntegrationType"]; });

/** Public API */








/***/ }),

/***/ "./src/models/paypal-environment.ts":
/*!******************************************!*\
  !*** ./src/models/paypal-environment.ts ***!
  \******************************************/
/*! exports provided: PayPalEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalEnvironment", function() { return PayPalEnvironment; });
var PayPalEnvironment;
(function (PayPalEnvironment) {
    PayPalEnvironment["Sandbox"] = "sandbox";
    PayPalEnvironment["Production"] = "production";
})(PayPalEnvironment || (PayPalEnvironment = {}));


/***/ }),

/***/ "./src/models/paypal-funding.ts":
/*!**************************************!*\
  !*** ./src/models/paypal-funding.ts ***!
  \**************************************/
/*! exports provided: PayPalFunding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalFunding", function() { return PayPalFunding; });
var PayPalFunding;
(function (PayPalFunding) {
    PayPalFunding[PayPalFunding["Card"] = 0] = "Card";
    PayPalFunding[PayPalFunding["Credit"] = 1] = "Credit";
    PayPalFunding[PayPalFunding["Elv"] = 2] = "Elv";
})(PayPalFunding || (PayPalFunding = {}));


/***/ }),

/***/ "./src/models/paypal-integration.ts":
/*!******************************************!*\
  !*** ./src/models/paypal-integration.ts ***!
  \******************************************/
/*! exports provided: PayPalIntegrationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalIntegrationType", function() { return PayPalIntegrationType; });
var PayPalIntegrationType;
(function (PayPalIntegrationType) {
    PayPalIntegrationType[PayPalIntegrationType["ClientSideREST"] = 0] = "ClientSideREST";
    PayPalIntegrationType[PayPalIntegrationType["ServerSideREST"] = 1] = "ServerSideREST";
})(PayPalIntegrationType || (PayPalIntegrationType = {}));


/***/ }),

/***/ "./src/models/paypal-models.ts":
/*!*************************************!*\
  !*** ./src/models/paypal-models.ts ***!
  \*************************************/
/*! exports provided: PayPalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalConfig", function() { return PayPalConfig; });
var PayPalConfig = /** @class */ (function () {
    function PayPalConfig(
    /**
     * Type of the integration
     */
    integrationType, 
    /**
     * Environment
     */
    environment, config) {
        this.integrationType = integrationType;
        this.environment = environment;
        /**
         * Show 'Pay Now' button config
         */
        this.commit = true;
        Object.assign(this, config);
    }
    return PayPalConfig;
}());



/***/ }),

/***/ "./src/ngx-paypal.module.ts":
/*!**********************************!*\
  !*** ./src/ngx-paypal.module.ts ***!
  \**********************************/
/*! exports provided: NgxPayPalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPayPalModule", function() { return NgxPayPalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_paypal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/paypal-component */ "./src/components/paypal-component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NgxPayPalModule = /** @class */ (function () {
    function NgxPayPalModule() {
    }
    NgxPayPalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [
                _components_paypal_component__WEBPACK_IMPORTED_MODULE_1__["NgxPaypalComponent"],
            ],
            exports: [
                _components_paypal_component__WEBPACK_IMPORTED_MODULE_1__["NgxPaypalComponent"],
            ]
        })
    ], NgxPayPalModule);
    return NgxPayPalModule;
}());



/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./demo/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\dev\ngx-paypal\demo\main.ts */"./demo/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map