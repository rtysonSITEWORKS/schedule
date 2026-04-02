"use strict";
(self["webpackChunkazimuth"] = self["webpackChunkazimuth"] || []).push([["main"],{

/***/ 45497:
/*!******************************!*\
  !*** ./src/app/app.color.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color),
/* harmony export */   "HEX": () => (/* binding */ HEX),
/* harmony export */   "RGB": () => (/* binding */ RGB)
/* harmony export */ });
class RGB {
  constructor(r, g, b) {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.alpha = 1;
    this.value = 0;
    this.setRed(r).setGreen(g).setBlue(b);
    this.updateValue();
  }
  getHexPart(v) {
    let h = v.toString(16);
    return h.length > 1 ? h : "0" + h;
  }
  updateValue() {
    this.value = this.getRed() + this.getGreen() + this.getBlue();
    return this;
  }
  getValue() {
    return this.value;
  }
  toHex() {
    let hexString = this.getAlpha() < 1 ? this.toHexAlpha().toString() : "#" + this.getHexPart(this.getRed()) + this.getHexPart(this.getGreen()) + this.getHexPart(this.getBlue());
    return new HEX(hexString);
  }
  toHexAlpha(light = true) {
    let tmpRgb = new RGB(this.getRed(), this.getGreen(), this.getBlue());
    if (this.getAlpha() < 1) {
      let tmp = 1 - this.getAlpha();
      tmpRgb.setRed(tmpRgb.getRed() * tmp);
      tmpRgb.setGreen(tmpRgb.getGreen() * tmp);
      tmpRgb.setBlue(tmpRgb.getBlue() * tmp);
    }
    let adjustValue = this.getAlpha() < 1 ? Math.floor(255 * this.getAlpha()) : 0;
    return light ? tmpRgb.lighten(adjustValue).toHex() : tmpRgb.darken(adjustValue).toHex();
  }
  setRed(value) {
    this.r = value > 255 ? 255 : value < 0 ? 0 : Math.floor(value);
    return this.updateValue();
  }
  getRed() {
    return this.r;
  }
  setGreen(value) {
    this.g = value > 255 ? 255 : value < 0 ? 0 : Math.floor(value);
    return this.updateValue();
  }
  getGreen() {
    return this.g;
  }
  setBlue(value) {
    this.b = value > 255 ? 255 : value < 0 ? 0 : Math.floor(value);
    return this.updateValue();
  }
  getBlue() {
    return this.b;
  }
  setAlpha(a) {
    this.alpha = a <= 1 && a >= 0 ? a : 1;
    return this;
  }
  getAlpha() {
    return this.alpha;
  }
  lighten(by) {
    this.setRed(this.getRed() + by).setBlue(this.getBlue() + by).setGreen(this.getGreen() + by);
    return this.updateValue();
  }
  darken(by) {
    this.setRed(this.getRed() - by).setBlue(this.getBlue() - by).setGreen(this.getGreen() - by);
    return this.updateValue();
  }
  toString() {
    return this.alpha < 1 ? 'rgba(' + this.getRed() + ',' + this.getGreen() + ',' + this.getBlue() + ',' + this.getAlpha() + ')' : 'rgb(' + this.getRed() + ',' + this.getGreen() + ',' + this.getBlue() + ')';
  }
}
class HEX {
  constructor(hex) {
    this.hex = "#000000";
    this.hex = hex.toString().length == 6 ? "#" + hex : hex.toString().length == 7 ? hex : '';
  }
  toRGB() {
    let hexString = this.hex.substr(1).toString();
    return new RGB(parseInt(hexString.substr(0, 2), 16), parseInt(hexString.substr(2, 2), 16), parseInt(hexString.substr(4, 2), 16));
  }
  toString() {
    return this.hex;
  }
}
class Color {
  constructor(color) {
    this.hex = new HEX('');
    this.rgb = new RGB(0, 0, 0);
    if (color instanceof HEX) {
      this.hex = color;
      this.rgb = color.toRGB();
    } else if (color instanceof RGB) {
      this.rgb = color;
      this.hex = color.toHex();
    }
  }
  lighten(by) {
    this.rgb = this.rgb.lighten(by);
    this.hex = this.rgb.toHex();
    return this;
  }
  darken(by) {
    this.rgb = this.rgb.darken(by);
    this.hex = this.rgb.toHex();
    return this;
  }
  toString(rgb = true) {
    return rgb ? this.rgb.toString() : this.hex.toString();
  }
  setAlpha(a) {
    this.rgb.setAlpha(a);
    this.hex = this.rgb.toHex();
    return this;
  }
}

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 86679);


class AppComponent {
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["az-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 49670:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfig": () => (/* binding */ AppConfig)
/* harmony export */ });
/* harmony import */ var _app_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.color */ 45497);
/* harmony import */ var sass_to_js_js_src_sass_to_js_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sass-to-js/js/src/sass-to-js.js */ 22482);
/* harmony import */ var sass_to_js_js_src_sass_to_js_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sass_to_js_js_src_sass_to_js_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);



class AppConfig {
  constructor() {
    this.sassVariables = this.getSassVariables();
    this.config = {
      name: 'Azimuth',
      title: 'Admin template based on Angular and Bootstrap 4',
      version: '3.7.0',
      colors: {
        main: this.sassVariables['main-color'],
        default: this.sassVariables['default-color'],
        dark: this.sassVariables['dark-color'],
        primary: this.sassVariables['primary-color'],
        info: this.sassVariables['info-color'],
        success: this.sassVariables['success-color'],
        warning: this.sassVariables['warning-color'],
        danger: this.sassVariables['danger-color'],
        sidebarBgColor: this.sassVariables['sidebar-bg-color'],
        gray: this.sassVariables['gray'],
        grayLight: this.sassVariables['gray-light']
      }
    };
  }
  getSassVariables() {
    let variables = jQuery('body').sassToJs({
      pseudoEl: "::after",
      cssProperty: "content"
    });
    return variables;
  }
  rgba(color, opacity) {
    if (color.indexOf('#') >= 0) {
      if (color.slice(1).length == 3) {
        color = '#' + color.slice(1) + '' + color.slice(1);
      }
      return new _app_color__WEBPACK_IMPORTED_MODULE_0__.Color(new _app_color__WEBPACK_IMPORTED_MODULE_0__.HEX(color)).setAlpha(opacity).toString();
    } else {
      console.log("incorrect color: " + color);
      return 'rgba(255,255,255,0.7)';
    }
  }
  static #_ = this.ɵfac = function AppConfig_Factory(t) {
    return new (t || AppConfig)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AppConfig,
    factory: AppConfig.ɵfac
  });
}


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pace */ 1990);
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 42512);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 79240);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routing */ 76738);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.config */ 49670);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/error/error.component */ 58449);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 15874);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _logic_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logic/services/login.service */ 60865);
/* harmony import */ var _logic_services_order_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logic/services/order-service.service */ 70221);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _logic_services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logic/services/product.service */ 47695);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ 84853);
/* harmony import */ var _logic_services_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logic/services/users.service */ 95877);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 77070);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var ng_multiselect_dropdown3__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-multiselect-dropdown3 */ 24273);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-select-dropdown */ 63277);
/* harmony import */ var _pages_dashboard_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/dashboard/data.service */ 982);
/* harmony import */ var _worktile_gantt__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @worktile/gantt */ 87017);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 89314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 86839);



























class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    providers: [_app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfig, {
      provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__.LocationStrategy,
      useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__.HashLocationStrategy
    }, _logic_services_order_service_service__WEBPACK_IMPORTED_MODULE_6__.OrderServiceService, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, _logic_services_product_service__WEBPACK_IMPORTED_MODULE_7__.ProductService, _logic_services_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService, _logic_services_users_service__WEBPACK_IMPORTED_MODULE_8__.UsersService, _pages_dashboard_data_service__WEBPACK_IMPORTED_MODULE_9__.DataService],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrModule.forRoot(), _app_routing__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__.NgxDatatableModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule, ng_multiselect_dropdown3__WEBPACK_IMPORTED_MODULE_20__.NgMultiselectDropdown3Module, ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_21__.SelectDropDownModule, _worktile_gantt__WEBPACK_IMPORTED_MODULE_22__.NgxGanttModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _pages_error_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrModule, _app_routing__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__.NgxDatatableModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule, ng_multiselect_dropdown3__WEBPACK_IMPORTED_MODULE_20__.NgMultiselectDropdown3Module, ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_21__.SelectDropDownModule, _worktile_gantt__WEBPACK_IMPORTED_MODULE_22__.NgxGanttModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule]
  });
})();

/***/ }),

/***/ 76738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/error/error.component */ 58449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);




const routes = [{
  path: '',
  redirectTo: 'pages/dashboard',
  pathMatch: 'full'
}, {
  path: 'pages',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 18950)).then(m => m.PagesModule)
}, {
  path: '**',
  component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_0__.ErrorComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
      //preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
    }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 60865:
/*!*************************************************!*\
  !*** ./src/app/logic/services/login.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 15874);







class LoginService {
  constructor(http, _router, toastr) {
    this.http = http;
    this._router = _router;
    this.toastr = toastr;
    this.apiBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    this.route = this.apiBaseUrl + "auth/";
  }
  signIn(user) {
    return this.http.post(this.route + "signIn/", {
      User: user
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
      //set access token refresh token and navigate here
      localStorage.setItem('role', res.role);
      localStorage.setItem('name', res.name);
      this._router.navigate(['pages/dashboard']);
      return;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      this.toastr.error("Error Logging In");
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)('Something bad happened; please try again later.');
    }));
  }
  static #_ = this.ɵfac = function LoginService_Factory(t) {
    return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: LoginService,
    factory: LoginService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 70221:
/*!*********************************************************!*\
  !*** ./src/app/logic/services/order-service.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderServiceService": () => (/* binding */ OrderServiceService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 33765);



class OrderServiceService {
  constructor(http) {
    this.http = http;
    this.apiBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    this.route = this.apiBaseUrl + "order/";
  }
  getOrders() {
    const URL = `${this.route}getOrders`;
    return this.http.get(URL);
  }
  updateOrders(update) {
    const URL = `${this.route}updateOrder`;
    return this.http.put(URL, update);
  }
  static #_ = this.ɵfac = function OrderServiceService_Factory(t) {
    return new (t || OrderServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: OrderServiceService,
    factory: OrderServiceService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 47695:
/*!***************************************************!*\
  !*** ./src/app/logic/services/product.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 33765);



class ProductService {
  constructor(http) {
    this.http = http;
    this.apiBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    this.route = this.apiBaseUrl + "product/";
  }
  getProducts() {
    const URL = `${this.route}getProducts`;
    return this.http.get(URL);
  }
  static #_ = this.ɵfac = function ProductService_Factory(t) {
    return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ProductService,
    factory: ProductService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 95877:
/*!*************************************************!*\
  !*** ./src/app/logic/services/users.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 33765);



class UsersService {
  constructor(http) {
    this.http = http;
    this.users = [{
      firstname: 'Donnell',
      lastname: 'Soler'
    }, {
      firstname: 'Norberto',
      lastname: 'Reyes Hernandez'
    }, {
      firstname: 'Flavio',
      lastname: 'Serrano Gonzalez'
    }, {
      firstname: 'Jose',
      lastname: 'Resendiz Soto'
    }, {
      firstname: 'Rendi',
      lastname: 'Venegas-Cruz'
    }, {
      firstname: 'Gerardo',
      lastname: 'Chavez Rojo'
    }, {
      firstname: 'Thomas',
      lastname: 'Arthur'
    }, {
      firstname: 'Francisco',
      lastname: 'Hernandez'
    }, {
      firstname: 'Richard',
      lastname: 'Lovely'
    }, {
      firstname: 'Chad',
      lastname: 'White'
    }, {
      firstname: 'Matt',
      lastname: 'Gesner'
    }, {
      firstname: 'Gary',
      lastname: 'Christie'
    }, {
      firstname: 'Shaun',
      lastname: 'Ware'
    }, {
      firstname: 'Stephen',
      lastname: 'Fowler'
    }, {
      firstname: 'Thomas',
      lastname: 'Burgess'
    }, {
      firstname: 'David',
      lastname: 'McDaniel'
    }, {
      firstname: 'Eric',
      lastname: 'Rodrigues'
    }, {
      firstname: 'Brett',
      lastname: 'Parsley'
    }, {
      firstname: 'Jonathan',
      lastname: 'Smith'
    }, {
      firstname: 'Adam',
      lastname: 'Hart'
    }, {
      firstname: 'Darren',
      lastname: 'McManus'
    }, {
      firstname: 'Mark',
      lastname: 'Collins'
    }, {
      firstname: 'Hager',
      lastname: 'McCune'
    }, {
      firstname: 'David',
      lastname: 'Harwell'
    }, {
      firstname: 'Keith',
      lastname: 'Breedlove'
    }, {
      firstname: 'William',
      lastname: 'Whitlow'
    }, {
      firstname: 'Jeffrey',
      lastname: 'Whittington'
    }, {
      firstname: 'Margarito',
      lastname: 'Mejia Romero'
    }, {
      firstname: 'Nectali',
      lastname: 'Bueso Canales'
    }, {
      firstname: 'Henry',
      lastname: 'Brown'
    }, {
      firstname: 'Brian',
      lastname: 'Lemon'
    }, {
      firstname: 'Jason',
      lastname: 'Prince'
    }, {
      firstname: 'Sergio',
      lastname: 'Almanza Navarro'
    }, {
      firstname: 'Tyler',
      lastname: 'Birdsong'
    }, {
      firstname: 'Carlos',
      lastname: 'Sanchez Farfan'
    }, {
      firstname: 'Christopher',
      lastname: 'Chalk'
    }, {
      firstname: 'Oscar',
      lastname: 'Martinez Tobar'
    }, {
      firstname: 'Christopher',
      lastname: 'Perry'
    }, {
      firstname: 'Marco',
      lastname: 'Avila Pena'
    }, {
      firstname: 'Brandon',
      lastname: 'Ledford'
    }, {
      firstname: 'Kary',
      lastname: 'Combs'
    }, {
      firstname: 'Joshua',
      lastname: 'Coley'
    }, {
      firstname: 'Daniel',
      lastname: 'Outwater'
    }, {
      firstname: 'Mark',
      lastname: 'Collins'
    }, {
      firstname: 'Gregory',
      lastname: 'Leatherman'
    }, {
      firstname: 'Jeffrey',
      lastname: 'Turman'
    }, {
      firstname: 'Benjamin',
      lastname: 'Hubbard'
    }, {
      firstname: 'Michael',
      lastname: 'Romeo'
    }, {
      firstname: 'Cory',
      lastname: 'Blackwell'
    }, {
      firstname: 'Scott',
      lastname: 'Barbee'
    }, {
      firstname: 'Richard',
      lastname: 'Birdsong'
    }, {
      firstname: 'Lindsay',
      lastname: 'Austin'
    }, {
      firstname: 'Rhett',
      lastname: 'Cox'
    }, {
      firstname: 'Brandon',
      lastname: 'Ervin'
    }, {
      firstname: 'Austin',
      lastname: 'Locklear'
    }, {
      firstname: 'David',
      lastname: 'Mangiamele'
    }, {
      firstname: 'Donnie',
      lastname: 'Doster'
    }, {
      firstname: 'Drew',
      lastname: 'Barnett'
    }, {
      firstname: 'Jeff',
      lastname: 'Crump'
    }];
    this.projectTypes = ['Construction Layout', 'Clear & Grub/Demoltion', 'Erosion Control'
    // You can provide initial values for other properties as well
    ];

    this.projectTasks = [{
      type: 'Clear & Grub / Demolition',
      task: 'Traffic Control'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Clear & Grub'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Asphalt Demolition'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Curb Demolition'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Sawcutting'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Demo Concrete Sidewalk/Flatwork'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Building Demolition'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Select Brush Removal'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Fence Removal'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Remove Existing Storm Pipe'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Remove Existing Storm Drainage Structure'
    }, {
      type: 'Erosion Control',
      task: 'Construction Entrance'
    }, {
      type: 'Erosion Control',
      task: 'Concrete Washout Pit, Note: washout/spoinls for other trades is not included'
    }, {
      type: 'Erosion Control',
      task: 'Truck Wash (Installation / Removal)'
    }, {
      type: 'Erosion Control',
      task: 'Truck Wash (Sitework labor), truck wash fees, labor for other trades not included'
    }, {
      type: 'Erosion Control',
      task: 'Silt Fence'
    }, {
      type: 'Erosion Control',
      task: 'Burlap Baffle Fence'
    },
    // ... (other erosion control tasks)
    {
      type: 'Rough Grading',
      task: 'Topsoil (Strip 6" & Place On site)'
    }, {
      type: 'Rough Grading',
      task: 'Topsoil (Respread On site)'
    },
    // ... (other rough grading tasks)
    {
      type: 'Fine Grading',
      task: 'Fine Grade Building Pad (+-0.1\')'
    }, {
      type: 'Fine Grading',
      task: 'Fine Grade Curb (+-0.1\')'
    },
    // ... (other fine grading tasks)
    {
      type: 'Storm Drainage',
      task: 'Outlet Control Structure'
    }, {
      type: 'Storm Drainage',
      task: 'Area Drain'
    },
    // ... (other storm drainage tasks)
    {
      type: 'Detention System',
      task: 'Excavate for Detention System (Stockpile On Site)'
    }, {
      type: 'Detention System',
      task: 'Excavate for Detention System (Waste Off Site)'
    },
    // ... (other detention system tasks)
    {
      type: 'Sand Filter',
      task: 'Excavate for Sand Filter (Waste Off Site)'
    }, {
      type: 'Sand Filter',
      task: '6" Perforated PVC'
    },
    // ... (other sand filter tasks)
    {
      type: 'Roof Drains',
      task: '4" HDPE Roof Drain'
    }, {
      type: 'Roof Drains',
      task: '6" HDPE Roof Drain'
    },
    // ... (other roof drain tasks)
    {
      type: 'Water System',
      task: 'Tap / Meter Assembly'
    }, {
      type: 'Water System',
      task: 'Tie Into Water Meter (Installed by Others)'
    },
    // ... (other water system tasks)
    {
      type: 'Sewer System',
      task: 'Tie Into CO/MH at ROW Line'
    }, {
      type: 'Sewer System',
      task: 'Sanitary Sewer Manhole'
    },
    // ... (other sewer system tasks)
    {
      type: 'Concrete',
      task: '6" Vertical Curb'
    }, {
      type: 'Concrete',
      task: '18" Curb & Gutter'
    },
    // ... (other concrete tasks)
    {
      type: 'Asphalt Paving',
      task: '6" ABC Stone Placement (LDP)'
    }, {
      type: 'Asphalt Paving',
      task: '8" ABC Stone Placement (HDP)'
    },
    // ... (other asphalt paving tasks)
    {
      type: 'Misc Items',
      task: 'Gray Modular Block Retaining Wall w/ Certification'
    }, {
      type: 'Misc Items',
      task: 'Brick Pavers / Decorative Concrete / Base Course'
    }];
    this.apiBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    this.route = this.apiBaseUrl + "users/";
  }
  getUsers() {
    console.log(this.users);
    return this.users;
  }
  getProjectTypes() {
    return this.projectTypes;
  }
  getRoles() {
    const URL = `${this.route}getRoles`;
    return this.http.get(URL);
  }
  addTaskList(taskList) {
    const URL = `${this.apiBaseUrl}data/createTaskList`;
    return this.http.post(URL, taskList);
  }
  createUser(user) {
    this.users.push(user);
    return null;
  }
  static #_ = this.ɵfac = function UsersService_Factory(t) {
    return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: UsersService,
    factory: UsersService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 982:
/*!*************************************************!*\
  !*** ./src/app/pages/dashboard/data.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ 2120);
/* harmony import */ var _worktile_gantt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @worktile/gantt */ 19956);
/* harmony import */ var _worktile_gantt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @worktile/gantt */ 20312);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 33765);





class DataService {
  static #_ = this.colors = {
    green: "#6aa84f",
    yellow: "#f1c232",
    red: "#cc4125",
    gray: "#808080",
    blue: "#2e78d6"
  };
  constructor(http) {
    this.http = http;
    this.group_id = 0;
    this.activeProjects = [];
    this.currentProjects = [];
    this.onHoldProjects = [];
    this.completedProjects = [];
    this.items = [];
    this.groups = [];
    this.types = [{
      type: 'Clear & Grub / Demolition',
      task: 'Traffic Control'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Clear & Grub'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Asphalt Demolition'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Curb Demolition'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Sawcutting'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Demo Concrete Sidewalk/Flatwork'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Building Demolition'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Select Brush Removal'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Fence Removal'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Remove Existing Storm Pipe'
    }, {
      type: 'Clear & Grub / Demolition',
      task: 'Remove Existing Storm Drainage Structure'
    }, {
      type: 'Erosion Control',
      task: 'Construction Entrance'
    }, {
      type: 'Erosion Control',
      task: 'Concrete Washout Pit, Note: washout/spoinls for other trades is not included'
    }, {
      type: 'Erosion Control',
      task: 'Truck Wash (Installation / Removal)'
    }, {
      type: 'Erosion Control',
      task: 'Truck Wash (Sitework labor), truck wash fees, labor for other trades not included'
    }, {
      type: 'Erosion Control',
      task: 'Silt Fence'
    }, {
      type: 'Erosion Control',
      task: 'Burlap Baffle Fence'
    },
    // ... (other erosion control tasks)
    {
      type: 'Rough Grading',
      task: 'Topsoil (Strip 6" & Place On site)'
    }, {
      type: 'Rough Grading',
      task: 'Topsoil (Respread On site)'
    },
    // ... (other rough grading tasks)
    {
      type: 'Fine Grading',
      task: 'Fine Grade Building Pad (+-0.1\')'
    }, {
      type: 'Fine Grading',
      task: 'Fine Grade Curb (+-0.1\')'
    },
    // ... (other fine grading tasks)
    {
      type: 'Storm Drainage',
      task: 'Outlet Control Structure'
    }, {
      type: 'Storm Drainage',
      task: 'Area Drain'
    },
    // ... (other storm drainage tasks)
    {
      type: 'Detention System',
      task: 'Excavate for Detention System (Stockpile On Site)'
    }, {
      type: 'Detention System',
      task: 'Excavate for Detention System (Waste Off Site)'
    },
    // ... (other detention system tasks)
    {
      type: 'Sand Filter',
      task: 'Excavate for Sand Filter (Waste Off Site)'
    }, {
      type: 'Sand Filter',
      task: '6" Perforated PVC'
    },
    // ... (other sand filter tasks)
    {
      type: 'Roof Drains',
      task: '4" HDPE Roof Drain'
    }, {
      type: 'Roof Drains',
      task: '6" HDPE Roof Drain'
    },
    // ... (other roof drain tasks)
    {
      type: 'Water System',
      task: 'Tap / Meter Assembly'
    }, {
      type: 'Water System',
      task: 'Tie Into Water Meter (Installed by Others)'
    },
    // ... (other water system tasks)
    {
      type: 'Sewer System',
      task: 'Tie Into CO/MH at ROW Line'
    }, {
      type: 'Sewer System',
      task: 'Sanitary Sewer Manhole'
    },
    // ... (other sewer system tasks)
    {
      type: 'Concrete',
      task: '6" Vertical Curb'
    }, {
      type: 'Concrete',
      task: '18" Curb & Gutter'
    },
    // ... (other concrete tasks)
    {
      type: 'Asphalt Paving',
      task: '6" ABC Stone Placement (LDP)'
    }, {
      type: 'Asphalt Paving',
      task: '8" ABC Stone Placement (HDP)'
    },
    // ... (other asphalt paving tasks)
    {
      type: 'Misc Items',
      task: 'Gray Modular Block Retaining Wall w/ Certification'
    }, {
      type: 'Misc Items',
      task: 'Brick Pavers / Decorative Concrete / Base Course'
    }];
    this.apiBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl;
    this.route = this.apiBaseUrl + "data/";
  }
  getProjects() {
    return this.activeProjects;
  }
  getActiveProjects() {
    const URL = `${this.route}getActiveProjects`;
    return this.http.get(URL);
  }
  getOnHoldProjects() {
    const URL = `${this.route}getOnHoldProjects`;
    return this.http.get(URL);
  }
  getCompletedProjects() {
    const URL = `${this.route}getCompletedProjects`;
    return this.http.get(URL);
  }
  getAllItems() {
    const URL = `${this.route}allItems`;
    return this.http.get(URL);
  }
  getHolidays() {
    const URL = `${this.route}holidays`;
    return this.http.get(URL);
  }
  getTaskList() {
    const URL = `${this.route}getTaskList`;
    return this.http.get(URL);
  }
  getDict() {
    const URL = `${this.route}getDict`;
    return this.http.get(URL);
  }
  getForemans() {
    const URL = `${this.apiBaseUrl}foremen`;
    return this.http.get(URL);
  }
  addProject(project) {
    this.activeProjects.push(project);
  }
  getColors() {
    const colors = [{
      name: "Green",
      id: DataService.colors.green
    }, {
      name: "Yellow",
      id: DataService.colors.yellow
    }, {
      name: "Red",
      id: DataService.colors.red
    }, {
      name: "Gray",
      id: DataService.colors.gray
    }, {
      name: "Blue",
      id: DataService.colors.blue
    }];
    return colors;
  }
  // let project = {
  //   name: this.project.companyName,
  //   companyName: this.selectedManager,
  //   start: new Date(this.range.get('start').value),
  //   end: new Date(this.range.get('end').value),
  //   tasks: this.selectedTasks
  // };
  createProject(project) {
    const group_id = `00000${this.group_id}`;
    this.group_id += 1;
    this.groups.push({
      id: group_id,
      title: project.name
    });
    project.tasks.forEach(task => {
      console.log(task);
      this.items.push({
        id: `${group_id}${Math.floor(Math.random() * 100000000)}`,
        title: `${task.task}`,
        start: (0,_worktile_gantt__WEBPACK_IMPORTED_MODULE_2__["default"])(task.start),
        end: (0,_worktile_gantt__WEBPACK_IMPORTED_MODULE_2__["default"])(task.end),
        group_id: group_id,
        expandable: true
      });
    });
    console.log(project.tasks);
  }
  createProjectApi(project) {
    const URL = `${this.route}createProject`;
    return this.http.post(URL, project);
  }
  createTask(task) {
    console.log("task");
    console.log(task);
    const URL = `${this.route}createTask`;
    return this.http.post(URL, task);
  }
  createForeman(foreman) {
    const URL = `${this.apiBaseUrl}/foremen`;
    return this.http.post(URL, foreman);
  }
  deleteForeman(foremanId) {
    const URL = `${this.apiBaseUrl}/foremen/${foremanId}`;
    return this.http.delete(URL);
  }
  deleteTasklist(taskListId) {
    const URL = `${this.apiBaseUrl}data/taskList/${taskListId}`;
    return this.http.delete(URL);
  }
  deleteActiveProject(projectId) {
    const URL = `${this.apiBaseUrl}/data/${projectId}`;
    return this.http.delete(URL);
  }
  addHoliday(holiday) {
    const URL = `${this.route}createHoliday`;
    return this.http.post(URL, holiday);
  }
  updateTask(item) {
    const URL = `${this.route}updateTask`;
    return this.http.post(URL, item);
  }
  editTask(item) {
    const URL = `${this.route}editTask`;
    return this.http.put(URL, item);
  }
  createRandomProjects(length) {
    const groups = [];
    let items = [];
    for (let i = 0; i < length; i++) {
      groups.push({
        id: `00000${i}`,
        title: `Example Customer-${i}`
      });
      items = [...items, ...this.randomItems(6, undefined, groups[i].id)];
      this.group_id += 1;
    }
    this.groups = groups;
    this.items = items;
  }
  getRandomTask() {
    const randomIndex = Math.floor(Math.random() * this.types.length);
    const randomtask = this.types[randomIndex];
    return `${randomtask.task}`;
  }
  randomItems(length, parent, group) {
    const items = [];
    for (let i = 0; i < length; i++) {
      const start = (0,_worktile_gantt__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), (0,_helper__WEBPACK_IMPORTED_MODULE_0__.random)(0, 20));
      const end = (0,_worktile_gantt__WEBPACK_IMPORTED_MODULE_3__["default"])(start, (0,_helper__WEBPACK_IMPORTED_MODULE_0__.random)(4, 10));
      items.push({
        id: `${parent?.id || group || ''}${Math.floor(Math.random() * 100000000)}`,
        title: `${this.getRandomTask()}`,
        start: (0,_worktile_gantt__WEBPACK_IMPORTED_MODULE_2__["default"])(start),
        end: (0,_worktile_gantt__WEBPACK_IMPORTED_MODULE_2__["default"])(end),
        group_id: group,
        expandable: true
      });
    }
    return items;
  }
  convertToActive(projectId) {
    const URL = `${this.route}convert_active/`;
    return this.http.put(URL + projectId, {});
  }
  convertToOnHold(projectId) {
    const URL = `${this.route}convert_on_hold/`;
    return this.http.put(URL + projectId, {});
  }
  convertToComplete(projectId) {
    const URL = `${this.route}convert_complete/`;
    return this.http.put(URL + projectId, {});
  }
  convertToDeleted(projectId) {
    const URL = `${this.route}delete/`;
    return this.http.put(URL + projectId, {});
  }
  convertToActionNeeded(projectId, text) {
    const URL = `${this.route}convert_action_needed/`;
    return this.http.put(URL + projectId, {
      text
    });
  }
  deleteRow(row) {
    this.activeProjects = this.activeProjects.filter(item => item.name !== row.name);
  }
  static #_2 = this.ɵfac = function DataService_Factory(t) {
    return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_3 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: DataService,
    factory: DataService.ɵfac
  });
}


/***/ }),

/***/ 2120:
/*!*******************************************!*\
  !*** ./src/app/pages/dashboard/helper.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "randomGroupsAndItems": () => (/* binding */ randomGroupsAndItems),
/* harmony export */   "randomItems": () => (/* binding */ randomItems)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 20312);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 19956);

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomItems(length, parent, group) {
  const items = [];
  for (let i = 0; i < length; i++) {
    const start = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(), random(0, 20));
    const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(start, random(2, 10));
    items.push({
      id: `${parent?.id || group || ''}${Math.floor(Math.random() * 100000000)}`,
      title: `${parent?.title || 'Task'}-${i}`,
      start: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(start),
      end: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(end),
      group_id: group,
      expandable: true
    });
  }
  return items;
}
function randomGroupsAndItems(length) {
  const groups = [];
  let items = [];
  for (let i = 0; i < length; i++) {
    groups.push({
      id: `00000${i}`,
      title: `Project-${i}`
    });
    items = [...items, ...randomItems(6, undefined, groups[i].id)];
  }
  return {
    groups,
    items
  };
}

/***/ }),

/***/ 58449:
/*!************************************************!*\
  !*** ./src/app/pages/error/error.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 69542);



class ErrorComponent {
  constructor(router) {
    this.router = router;
  }
  searchResult() {
    this.router.navigate(['pages/search']);
  }
  static #_ = this.ɵfac = function ErrorComponent_Factory(t) {
    return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ErrorComponent,
    selectors: [["az-error"]],
    decls: 18,
    vars: 0,
    consts: [[1, "container"], [1, "row"], [1, "col-xl-4", "col-md-6", "col-10", "mx-auto", "p-t-10"], [1, "card"], [1, "card-body", "text-center"], [1, "display-1"], [1, "card-title"], [1, "card-text"], ["method", "get"], [1, "form-group"], ["placeholder", "Enter search keyword...", "type", "text", 1, "form-control"], ["type", "button", 1, "btn", "btn-main", 3, "click"], [1, "fa", "fa-search"]],
    template: function ErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Opps, it seems that this page does not exist.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " If you are sure it should, search for it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 8)(12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9)(15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorComponent_Template_button_click_15_listener() {
          return ctx.searchResult();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
    encapsulation: 2
  });
}


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiBaseUrl: 'https://constructionapi.onrender.com/',
  debugMode: true
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 42512);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map