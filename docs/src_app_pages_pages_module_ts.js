(self["webpackChunkazimuth"] = self["webpackChunkazimuth"] || []).push([["src_app_pages_pages_module_ts"],{

/***/ 82534:
/*!******************************!*\
  !*** ./src/app/app.state.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppState": () => (/* binding */ AppState)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);


class AppState {
  constructor() {
    this._data = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this._dataStream$ = this._data.asObservable();
    this._subscriptions = new Map();
    this._dataStream$.subscribe(data => this._onEvent(data));
  }
  notifyDataChanged(event, value) {
    let current = this._data[event];
    if (current != value) {
      this._data[event] = value;
      this._data.next({
        event: event,
        data: this._data[event]
      });
    }
  }
  subscribe(event, callback) {
    var subscribers = this._subscriptions.get(event) || [];
    subscribers.push(callback);
    this._subscriptions.set(event, subscribers);
  }
  _onEvent(data) {
    var subscribers = this._subscriptions.get(data['event']) || [];
    subscribers.forEach(callback => {
      callback.call(null, data['data']);
    });
  }
  static #_ = this.ɵfac = function AppState_Factory(t) {
    return new (t || AppState)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AppState,
    factory: AppState.ɵfac
  });
}


/***/ }),

/***/ 97276:
/*!************************************************!*\
  !*** ./src/app/pages/blank/blank.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankComponent": () => (/* binding */ BlankComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class BlankComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function BlankComponent_Factory(t) {
    return new (t || BlankComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BlankComponent,
    selectors: [["az-blank"]],
    decls: 0,
    vars: 0,
    template: function BlankComponent_Template(rf, ctx) {},
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 37664:
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesComponent": () => (/* binding */ PagesComponent)
/* harmony export */ });
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.state */ 82534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/components/menu/menu.component */ 58469);
/* harmony import */ var _theme_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/components/navbar/navbar.component */ 68972);
/* harmony import */ var _theme_components_back_top_back_top_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/components/back-top/back-top.component */ 46436);








function PagesComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagesComponent_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.hideMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "menu-collapsed": a0
  };
};
class PagesComponent {
  constructor(_state, _location) {
    this._state = _state;
    this._location = _location;
    this.isMenuCollapsed = false;
    this._state.subscribe('menu.isCollapsed', isCollapsed => {
      this.isMenuCollapsed = isCollapsed;
    });
  }
  ngOnInit() {
    this.getCurrentPageName();
  }
  getCurrentPageName() {
    let url = this._location.path();
    let hash = window.location.hash ? '#' : '';
    setTimeout(function () {
      let subMenu = jQuery('a[href="' + hash + url + '"]').closest("li").closest("ul");
      window.scrollTo(0, 0);
      subMenu.closest("li").addClass("sidebar-item-expanded");
      subMenu.slideDown(250);
    });
  }
  hideMenu() {
    this._state.notifyDataChanged('menu.isCollapsed', true);
  }
  ngAfterViewInit() {
    document.getElementById('preloader').style['display'] = 'none';
  }
  static #_ = this.ɵfac = function PagesComponent_Factory(t) {
    return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_state__WEBPACK_IMPORTED_MODULE_0__.AppState), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: PagesComponent,
    selectors: [["az-pages"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_app_state__WEBPACK_IMPORTED_MODULE_0__.AppState])],
    decls: 9,
    vars: 5,
    consts: [[1, "container-fluid"], [1, "row"], [1, "main-wrapper", 3, "ngClass"], ["class", "az-overlay", 3, "click", 4, "ngIf"], [1, "main"], [3, "position"], [1, "az-overlay", 3, "click"]],
    template: function PagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "az-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "az-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, PagesComponent_div_5_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "az-back-top", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, ctx.isMenuCollapsed));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("position", 200);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent, _theme_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _theme_components_back_top_back_top_component__WEBPACK_IMPORTED_MODULE_3__.BackTopComponent],
    styles: ["/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n\n/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n\nbody::before {\n  content: \"\";\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #e9ebee;\n  z-index: -1;\n}\n\n.main-wrapper {\n  margin-left: 230px;\n  padding: 30px 40px 60px;\n  margin-top: 60px;\n  position: relative;\n  flex: 1;\n  overflow: hidden;\n}\n.main-wrapper.menu-collapsed {\n  margin-left: 50px;\n}\n\n.custom-input {\n  position: relative;\n}\n\n.custom-input input {\n  border: 1px solid #ccc;\n  border-radius: 1px;\n  padding: 0.5rem;\n  padding-right: 2rem;\n  width: 100%;\n}\n\n.column-width-small {\n  width: 6%; /* Adjust as needed */\n}\n\n.column-width-large {\n  width: 13%; /* Adjust as needed */\n}\n\n.custom-button {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  background-color: #ffffff;\n}\n\n.rounded-input {\n  border: 1px solid #ccc;\n  border-radius: 4rem;\n  padding: 0.25rem;\n  padding-right: 2rem;\n  width: 100%;\n}\n\n.main {\n  height: 100%;\n  min-height: calc(100vh - 202px);\n}\n\n.footer {\n  padding-top: 20px;\n  padding-bottom: 10px;\n}\n.footer .footer-main {\n  display: inline-block;\n}\n.footer .footer-main .copyright {\n  color: #242424;\n  font-size: 14px;\n}\n.footer .footer-main .copyright a {\n  color: #242D3A;\n}\n.footer .footer-main .share {\n  padding-left: 5px;\n  margin: 0;\n}\n.footer .footer-main .share li {\n  list-style: none;\n  float: left;\n  margin-left: 10px;\n}\n.footer .footer-main .share li i {\n  cursor: pointer;\n  transition: all 0.1s ease;\n  color: white;\n  padding: 9px 9px 6px 9px;\n  font-size: 12px;\n  border-radius: 50%;\n  background-color: #242D3A;\n}\n.footer .footer-main .share li i.socicon-facebook {\n  background-color: #3b5998;\n}\n.footer .footer-main .share li i.socicon-twitter {\n  background-color: #55acee;\n}\n.footer .footer-main .share li i.socicon-instagram {\n  background-color: #8a3ab9;\n}\n.footer .footer-main .share li i.socicon-pinterest {\n  background-color: #c92228;\n}\n.footer .footer-main .share li i:hover {\n  opacity: 0.9;\n}\n.footer .created {\n  color: #242424;\n  font-size: 14px;\n}\n.footer .created i {\n  color: red;\n}\n\n.az-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 8;\n  background: rgba(36, 45, 58, 0.2);\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n\n.rounded-input {\n  border-radius: 0.5rem;\n}\n\n@media (max-width: 544px) {\n  .main-wrapper, .main-wrapper.menu-collapsed {\n    margin-left: 0;\n    padding: 30px 20px 70px;\n  }\n  .main {\n    min-height: calc(100vh - 240px);\n  }\n  .az-overlay {\n    display: block;\n  }\n  .footer .footer-main, .footer .created {\n    float: none;\n  }\n}\n@media (min-width: 544px) and (max-width: 768px) {\n  .main-wrapper, .main-wrapper.menu-collapsed {\n    margin-left: 50px;\n  }\n  .az-overlay {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc3R5bGVzL3NraW5zL19ibHVlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9TY2hlZHVsaW5nJTIwU29mdHdhcmUvc3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQUE7QUNhQSxvQkFBQTtBQU1BLGtCQUFBO0FBSUEsaUJBQUE7QUFLQSxrQkFBQTtBQUtBLG1CQUFBO0FBS0EsZ0JBQUE7QUFTQSx1QkFBQTtBQThDQTtFQUNJLDJRQUFBO0VBQ0EsYUFBQTtBQ3BGSjs7QUZYQSw4Q0FBQTtBQ2FBLG9CQUFBO0FBTUEsa0JBQUE7QUFJQSxpQkFBQTtBQUtBLGtCQUFBO0FBS0EsbUJBQUE7QUFLQSxnQkFBQTtBQVNBLHVCQUFBO0FBOENBO0VBQ0ksMlFBQUE7RUFDQSxhQUFBO0FDdkVKOztBQ3JCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUVBLG1CRlRZO0VFVVosV0FBQTtBRHVCSjs7QUNwQkE7RUFDSSxrQkZhWTtFRVpaLHVCQUFBO0VBQ0EsZ0JGT1k7RUVOWixrQkFBQTtFQUNBLE9BQUE7RUFFQSxnQkFBQTtBRHNCSjtBQ3JCSTtFQUNJLGlCQUFBO0FEdUJSOztBQ25CQTtFQUNJLGtCQUFBO0FEc0JKOztBQ25CQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FEc0JKOztBQ25CQTtFQUNJLFNBQUEsRUFBQSxxQkFBQTtBRHNCSjs7QUNuQkE7RUFDSSxVQUFBLEVBQUEscUJBQUE7QURzQko7O0FDbEJBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QURxQko7O0FDbEJBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FEcUJKOztBQ2xCQTtFQUNJLFlBQUE7RUFFQSwrQkFBQTtBRG9CSjs7QUNoQkE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FEbUJKO0FDbEJJO0VBQ0kscUJBQUE7QURvQlI7QUNuQlE7RUFDSSxjRjVFQztFRTZFRCxlQUFBO0FEcUJaO0FDcEJZO0VBQ0ksY0hqRkg7QUV1R2I7QUNuQlE7RUFDSSxpQkFBQTtFQUNBLFNBQUE7QURxQlo7QUNwQlk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBRHNCaEI7QUNyQmdCO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJIbEdQO0FFeUhiO0FDdEJvQjtFQUNJLHlCRnJEUDtBQzZFakI7QUN0Qm9CO0VBQ0kseUJGdkRSO0FDK0VoQjtBQ3RCb0I7RUFDSSx5QkZ6RE47QUNpRmxCO0FDdEJvQjtFQUNJLHlCRjNETjtBQ21GbEI7QUN0Qm9CO0VBQ0ksWUFBQTtBRHdCeEI7QUNsQkk7RUFDSSxjRnJISztFRXNITCxlQUFBO0FEb0JSO0FDbkJRO0VBQ0ksVUFBQTtBRHFCWjs7QUNoQkE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUFNLE9BQUE7RUFBTyxTQUFBO0VBQVcsUUFBQTtFQUN4QixVQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QURzQko7O0FDbkJBO0VBQ0kscUJBQUE7QURzQko7O0FDbEJBO0VBQ0k7SUFDSSxjQUFBO0lBQ0EsdUJBQUE7RURxQk47RUNuQkU7SUFDSSwrQkFBQTtFRHFCTjtFQ25CRTtJQUNJLGNBQUE7RURxQk47RUNuQkU7SUFDSSxXQUFBO0VEcUJOO0FBQ0Y7QUNsQkE7RUFDSTtJQUNHLGlCQUFBO0VEb0JMO0VDbEJFO0lBQ0ksY0FBQTtFRG9CTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiogQ29sb3JzIChyZWNvbW1lbmRlZCB1c2UgSEVYIGNvbG9ycykgKioqKi8gXHJcbiRtYWluLWNvbG9yOiAjMjQyRDNBOyBcclxuJGRlZmF1bHQtY29sb3I6I2ZmZjsgXHJcbiRkYXJrLWNvbG9yOiAjMDAwO1xyXG5cclxuJGJvZHktYmctZ3JhZGllbnQtY29sb3ItMTogIzFlNTc5OTtcclxuJGJvZHktYmctZ3JhZGllbnQtY29sb3ItMjogICNhNWM5ZTU7XHJcblxyXG4kc2lkZWJhci1iZy1jb2xvcjojMzQ0MTU0O1xyXG4kc2lkZWJhci1pdGVtLWFjdGl2ZS1iZy1jb2xvcjogIzYzN0NBMDsvLyAjMDA5OWNjO1xyXG5cclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMDI0YTg4O1xyXG4kc3VjY2Vzcy1jb2xvcjogIzJkOTIyZDtcclxuJGluZm8tY29sb3I6ICMyNDhkYWQ7XHJcbiR3YXJuaW5nLWNvbG9yOiAjZjc5YTE3O1xyXG4kZGFuZ2VyLWNvbG9yOiAjYmYxNzI1OyIsIkBpbXBvcnQgXCJza2lucy9ibHVlXCI7XHJcblxyXG4kYm9keS1iZy1jb2xvcjogI2U5ZWJlZTtcclxuJHRleHQtY29sb3I6ICMyNDI0MjQ7XHJcbiRncmF5LWRhcms6ICMyOTJiMmM7XHJcbiRncmF5OiAjNTU1O1xyXG4kZ3JheS1saWdodDogI2NjYztcclxuJGdyYXktbGlnaHRlcjogI2VjZWVlZjtcclxuXHJcbiR0YWJsZS1iZy1hY3RpdmU6IHJnYmEoIzAwMCwuMDc1KTtcclxuJHRhYmxlLWJvcmRlci13aWR0aDogMXB4O1xyXG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkZ3JheS1saWdodGVyO1xyXG5cclxuLyoqKiogQXBwIHJvb3RzICoqKiovXHJcbiRhc3NldHMtcm9vdDogJ34vYXNzZXRzLyc7XHJcbiRpbWFnZXMtcm9vdDogJGFzc2V0cy1yb290ICsgJ2ltZy8nO1xyXG4kZm9udHMtcm9vdDogJGFzc2V0cy1yb290ICsgJ2ZvbnRzLyc7XHJcblxyXG5cclxuLyoqKiogR2VuZXJhbCAqKioqL1xyXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuXHJcbi8qKioqIE5hdmJhciAqKioqL1xyXG4kbmF2YmFyLXRleHQtY29sb3I6ICRkZWZhdWx0LWNvbG9yO1xyXG4kbmF2YmFyLWhlaWdodDogNjBweDtcclxuXHJcblxyXG4vKioqKiBTaWRlYmFyICoqKiovXHJcbiRzaWRlYmFyLXdpZHRoOiAyMzBweDtcclxuXHJcblxyXG5cclxuLyoqKiogUHJvZ3Jlc3MgKioqKi9cclxuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6IDA7XHJcbiRwcm9ncmVzcy1oZWlnaHQ6IDIwcHg7XHJcblxyXG5cclxuLyoqKiogRm9udHMgKioqKi9cclxuJGZvbnQtdGhpbjogMTAwO1xyXG4kZm9udC1saWdodDogMzAwO1xyXG4kZm9udC1ub3JtYWw6IDQwMDtcclxuJGZvbnQtYm9sZDogNTAwO1xyXG4kZm9udC1ib2xkZXI6IDcwMDtcclxuJGZvbnQtdWx0cmFCb2xkOiA5MDA7XHJcblxyXG5cclxuLyoqKiogU29jaWFsIGljb25zICoqKiovXHJcbiRmYWNlYm9vay1jb2xvcjogIzNiNTk5ODtcclxuJHR3aXR0ZXItY29sb3I6ICM1NWFjZWU7XHJcbiRpbnN0YWdyYW0tY29sb3I6ICM4YTNhYjk7XHJcbiRwaW50ZXJlc3QtY29sb3I6ICNjOTIyMjg7IFxyXG4kZ29vZ2xlLWNvbG9yOiAjZGQ0YjM5O1xyXG4kbGlua2VkaW4tY29sb3I6ICMwMTc3QjU7XHJcbiRnaXRodWItY29sb3I6ICM2YjZiNmI7XHJcbiRzdGFja292ZXJmbG93LWNvbG9yOiAjMkY5NkU4O1xyXG4kZHJpYmJsZS1jb2xvcjogI0YyNjc5ODtcclxuJGJlaGFjZS1jb2xvcjogIzAwOTNGQTtcclxuXHJcbi8vLS0tLS0tLS1mb3IgcHJldmVudCBhd2Vzb21lLWJvb3RzdHJhcC1jaGVja2JveCBlcnJvcnMtLS0tLS0tLS1cclxuLy9AaW1wb3J0IFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xyXG4vL0BpbXBvcnQgXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHJnYmEoIzAwMCwuMTUpO1xyXG4kZW5hYmxlLXRyYW5zaXRpb25zOiB0cnVlO1xyXG4kaW5wdXQtY29sb3I6ICRncmF5O1xyXG4kaW5wdXQtYmctZGlzYWJsZWQ6ICRncmF5LWxpZ2h0ZXI7XHJcbiRicmFuZC1wcmltYXJ5OiAkcHJpbWFyeS1jb2xvcjtcclxuJGJyYW5kLXN1Y2Nlc3M6ICRzdWNjZXNzLWNvbG9yO1xyXG4kYnJhbmQtaW5mbzogJGluZm8tY29sb3I7XHJcbiRicmFuZC13YXJuaW5nOiAkd2FybmluZy1jb2xvcjtcclxuJGJyYW5kLWRhbmdlcjogJGRhbmdlci1jb2xvcjtcclxuJGJyYW5kLWludmVyc2U6ICRncmF5LWRhcms7XHJcblxyXG5cclxuXHJcblxyXG4vL1NldCB2YXJpYWJsZXMgdG8gYmUgYWNjZXNzaWJsZSBmb3IgSlNcclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXRvLWpzL3Nhc3Mvc2Fzcy10by1qc1wiO1xyXG5cclxuJHZhcmlhYmxlc01hcDogKCBcclxuICBtYWluLWNvbG9yOiAkbWFpbi1jb2xvcixcclxuICBkZWZhdWx0LWNvbG9yOiAkZGVmYXVsdC1jb2xvcixcclxuICBkYXJrLWNvbG9yOiAkZGFyay1jb2xvcixcclxuICBwcmltYXJ5LWNvbG9yOiAkcHJpbWFyeS1jb2xvcixcclxuICBzdWNjZXNzLWNvbG9yOiAkc3VjY2Vzcy1jb2xvcixcclxuICB3YXJuaW5nLWNvbG9yOiAkd2FybmluZy1jb2xvcixcclxuICBkYW5nZXItY29sb3I6ICRkYW5nZXItY29sb3IsXHJcbiAgaW5mby1jb2xvcjogJGluZm8tY29sb3IsXHJcbiAgc2lkZWJhci1iZy1jb2xvcjogJHNpZGViYXItYmctY29sb3IsXHJcbiAgZ3JheTogJGdyYXksXHJcbiAgZ3JheS1saWdodDogJGdyYXktbGlnaHRcclxuKTtcclxuXHJcbmJvZHk6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IHNhc3NUb0pzKCR2YXJpYWJsZXNNYXApO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuIiwiLyoqKiogQ29sb3JzIChyZWNvbW1lbmRlZCB1c2UgSEVYIGNvbG9ycykgKioqKi9cbi8qKioqIEFwcCByb290cyAqKioqL1xuLyoqKiogR2VuZXJhbCAqKioqL1xuLyoqKiogTmF2YmFyICoqKiovXG4vKioqKiBTaWRlYmFyICoqKiovXG4vKioqKiBQcm9ncmVzcyAqKioqL1xuLyoqKiogRm9udHMgKioqKi9cbi8qKioqIFNvY2lhbCBpY29ucyAqKioqL1xuYm9keTo6YWZ0ZXIge1xuICBjb250ZW50OiAne1wibWFpbi1jb2xvclwiOlwiIzI0MkQzQVwiLFwiZGVmYXVsdC1jb2xvclwiOlwiI2ZmZlwiLFwiZGFyay1jb2xvclwiOlwiIzAwMFwiLFwicHJpbWFyeS1jb2xvclwiOlwiIzAyNGE4OFwiLFwic3VjY2Vzcy1jb2xvclwiOlwiIzJkOTIyZFwiLFwid2FybmluZy1jb2xvclwiOlwiI2Y3OWExN1wiLFwiZGFuZ2VyLWNvbG9yXCI6XCIjYmYxNzI1XCIsXCJpbmZvLWNvbG9yXCI6XCIjMjQ4ZGFkXCIsXCJzaWRlYmFyLWJnLWNvbG9yXCI6XCIjMzQ0MTU0XCIsXCJncmF5XCI6XCIjNTU1XCIsXCJncmF5LWxpZ2h0XCI6XCIjY2NjXCJ9JztcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqKiogQ29sb3JzIChyZWNvbW1lbmRlZCB1c2UgSEVYIGNvbG9ycykgKioqKi9cbi8qKioqIEFwcCByb290cyAqKioqL1xuLyoqKiogR2VuZXJhbCAqKioqL1xuLyoqKiogTmF2YmFyICoqKiovXG4vKioqKiBTaWRlYmFyICoqKiovXG4vKioqKiBQcm9ncmVzcyAqKioqL1xuLyoqKiogRm9udHMgKioqKi9cbi8qKioqIFNvY2lhbCBpY29ucyAqKioqL1xuYm9keTo6YWZ0ZXIge1xuICBjb250ZW50OiAne1wibWFpbi1jb2xvclwiOlwiIzI0MkQzQVwiLFwiZGVmYXVsdC1jb2xvclwiOlwiI2ZmZlwiLFwiZGFyay1jb2xvclwiOlwiIzAwMFwiLFwicHJpbWFyeS1jb2xvclwiOlwiIzAyNGE4OFwiLFwic3VjY2Vzcy1jb2xvclwiOlwiIzJkOTIyZFwiLFwid2FybmluZy1jb2xvclwiOlwiI2Y3OWExN1wiLFwiZGFuZ2VyLWNvbG9yXCI6XCIjYmYxNzI1XCIsXCJpbmZvLWNvbG9yXCI6XCIjMjQ4ZGFkXCIsXCJzaWRlYmFyLWJnLWNvbG9yXCI6XCIjMzQ0MTU0XCIsXCJncmF5XCI6XCIjNTU1XCIsXCJncmF5LWxpZ2h0XCI6XCIjY2NjXCJ9JztcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYm9keTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNlOWViZWU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubWFpbi13cmFwcGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIzMHB4O1xuICBwYWRkaW5nOiAzMHB4IDQwcHggNjBweDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1haW4td3JhcHBlci5tZW51LWNvbGxhcHNlZCB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uY3VzdG9tLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY3VzdG9tLWlucHV0IGlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sdW1uLXdpZHRoLXNtYWxsIHtcbiAgd2lkdGg6IDYlOyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXG59XG5cbi5jb2x1bW4td2lkdGgtbGFyZ2Uge1xuICB3aWR0aDogMTMlOyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXG59XG5cbi5jdXN0b20tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5yb3VuZGVkLWlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAycHgpO1xufVxuXG4uZm9vdGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmZvb3RlciAuZm9vdGVyLW1haW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZm9vdGVyIC5mb290ZXItbWFpbiAuY29weXJpZ2h0IHtcbiAgY29sb3I6ICMyNDI0MjQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mb290ZXIgLmZvb3Rlci1tYWluIC5jb3B5cmlnaHQgYSB7XG4gIGNvbG9yOiAjMjQyRDNBO1xufVxuLmZvb3RlciAuZm9vdGVyLW1haW4gLnNoYXJlIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIG1hcmdpbjogMDtcbn1cbi5mb290ZXIgLmZvb3Rlci1tYWluIC5zaGFyZSBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5mb290ZXIgLmZvb3Rlci1tYWluIC5zaGFyZSBsaSBpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDlweCA5cHggNnB4IDlweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDJEM0E7XG59XG4uZm9vdGVyIC5mb290ZXItbWFpbiAuc2hhcmUgbGkgaS5zb2NpY29uLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbn1cbi5mb290ZXIgLmZvb3Rlci1tYWluIC5zaGFyZSBsaSBpLnNvY2ljb24tdHdpdHRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XG59XG4uZm9vdGVyIC5mb290ZXItbWFpbiAuc2hhcmUgbGkgaS5zb2NpY29uLWluc3RhZ3JhbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YTNhYjk7XG59XG4uZm9vdGVyIC5mb290ZXItbWFpbiAuc2hhcmUgbGkgaS5zb2NpY29uLXBpbnRlcmVzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOTIyMjg7XG59XG4uZm9vdGVyIC5mb290ZXItbWFpbiAuc2hhcmUgbGkgaTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbi5mb290ZXIgLmNyZWF0ZWQge1xuICBjb2xvcjogIzI0MjQyNDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZvb3RlciAuY3JlYXRlZCBpIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmF6LW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogODtcbiAgYmFja2dyb3VuZDogcmdiYSgzNiwgNDUsIDU4LCAwLjIpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucm91bmRlZC1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU0NHB4KSB7XG4gIC5tYWluLXdyYXBwZXIsIC5tYWluLXdyYXBwZXIubWVudS1jb2xsYXBzZWQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDMwcHggMjBweCA3MHB4O1xuICB9XG4gIC5tYWluIHtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQwcHgpO1xuICB9XG4gIC5hei1vdmVybGF5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuZm9vdGVyIC5mb290ZXItbWFpbiwgLmZvb3RlciAuY3JlYXRlZCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluLXdyYXBwZXIsIC5tYWluLXdyYXBwZXIubWVudS1jb2xsYXBzZWQge1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICB9XG4gIC5hei1vdmVybGF5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi90aGVtZS9zdHlsZXMvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi90aGVtZS9zdHlsZXMvbWl4aW5zXCI7XHJcblxyXG5ib2R5OjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIC8vQGluY2x1ZGUgdGhlbWUtYmcoJGJvZHktYmctZ3JhZGllbnQtY29sb3ItMSwgJGJvZHktYmctZ3JhZGllbnQtY29sb3ItMik7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYm9keS1iZy1jb2xvcjsgLy8gIzViNmU4YTsgICAgICBcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyeyBcclxuICAgIG1hcmdpbi1sZWZ0OiAkc2lkZWJhci13aWR0aDtcclxuICAgIHBhZGRpbmc6IDMwcHggNDBweCA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogJG5hdmJhci1oZWlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgLy8gbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICYubWVudS1jb2xsYXBzZWR7IFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWlucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmN1c3RvbS1pbnB1dCBpbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29sdW1uLXdpZHRoLXNtYWxsIHtcclxuICAgIHdpZHRoOiA2JTsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xyXG59XHJcblxyXG4uY29sdW1uLXdpZHRoLWxhcmdlIHtcclxuICAgIHdpZHRoOiAxMyU7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxufVxyXG4gIFxyXG5cclxuLmN1c3RvbS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnJvdW5kZWQtaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XHJcbiAgICBwYWRkaW5nOiAuMjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYWlue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAvLyBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDJweCk7ICAgXHJcbn1cclxuXHJcblxyXG4uZm9vdGVye1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC5mb290ZXItbWFpbntcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgLmNvcHlyaWdodHtcclxuICAgICAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNoYXJle1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOXB4IDlweCA2cHggOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgJi5zb2NpY29uLWZhY2Vib29re1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmFjZWJvb2stY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYuc29jaWNvbi10d2l0dGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHdpdHRlci1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi5zb2NpY29uLWluc3RhZ3JhbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGluc3RhZ3JhbS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi5zb2NpY29uLXBpbnRlcmVzdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBpbnRlcmVzdC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcnsgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTsgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jcmVhdGVke1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgaXtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDsgXHJcbiAgICAgICAgfVxyXG4gICAgfSAgIFxyXG59XHJcblxyXG4uYXotb3ZlcmxheXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDowO2xlZnQ6MDtib3R0b206IDA7IHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogODtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoJG1haW4tY29sb3IsIDAuMik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICBkaXNwbGF5OiBub25lOyAgIFxyXG59XHJcblxyXG4ucm91bmRlZC1pbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTQ0cHgpIHsgXHJcbiAgICAubWFpbi13cmFwcGVyLCAubWFpbi13cmFwcGVyLm1lbnUtY29sbGFwc2Vke1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMjBweCA3MHB4O1xyXG4gICAgfSBcclxuICAgIC5tYWlue1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDBweCk7ICAgXHJcbiAgICB9XHJcbiAgICAuYXotb3ZlcmxheXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5mb290ZXIgLmZvb3Rlci1tYWluLCAuZm9vdGVyIC5jcmVhdGVke1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTQ0cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcclxuICAgIC5tYWluLXdyYXBwZXIsIC5tYWluLXdyYXBwZXIubWVudS1jb2xsYXBzZWR7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIH0gXHJcbiAgICAuYXotb3ZlcmxheXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufSBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 18950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-scrollbar */ 24203);
/* harmony import */ var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme/directives/directives.module */ 19212);
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/pipes/pipes.module */ 39045);
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.routing */ 63360);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ 37664);
/* harmony import */ var _blank_blank_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blank/blank.component */ 97276);
/* harmony import */ var _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/components/menu/menu.component */ 58469);
/* harmony import */ var _theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/components/sidebar/sidebar.component */ 9125);
/* harmony import */ var _theme_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/components/navbar/navbar.component */ 68972);
/* harmony import */ var _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../theme/components/messages/messages.component */ 93833);
/* harmony import */ var _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../theme/components/breadcrumb/breadcrumb.component */ 52333);
/* harmony import */ var _theme_components_back_top_back_top_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../theme/components/back-top/back-top.component */ 46436);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search/search.component */ 31164);
/* harmony import */ var _users_userPage_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/userPage/users.component */ 44470);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 77070);
/* harmony import */ var _users_createUser_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users/createUser/create-user/create-user.component */ 72904);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-select-dropdown */ 63277);
/* harmony import */ var ng_multiselect_dropdown3__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-multiselect-dropdown3 */ 24273);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 86839);





















class PagesModule {
  static #_ = this.ɵfac = function PagesModule_Factory(t) {
    return new (t || PagesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
    type: PagesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_16__.NgScrollbarModule, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule, _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, _pages_routing__WEBPACK_IMPORTED_MODULE_2__.PagesRoutingModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_17__.NgxDatatableModule, ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_18__.SelectDropDownModule, ng_multiselect_dropdown3__WEBPACK_IMPORTED_MODULE_19__.NgMultiselectDropdown3Module, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](PagesModule, {
    declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__.PagesComponent, _blank_blank_component__WEBPACK_IMPORTED_MODULE_4__.BlankComponent, _theme_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent, _theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.SidebarComponent, _theme_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__.NavbarComponent, _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__.MessagesComponent, _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__.BreadcrumbComponent, _theme_components_back_top_back_top_component__WEBPACK_IMPORTED_MODULE_10__.BackTopComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_11__.SearchComponent, _users_userPage_users_component__WEBPACK_IMPORTED_MODULE_12__.UsersComponent, _users_createUser_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_13__.CreateUserComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_16__.NgScrollbarModule, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule, _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, _pages_routing__WEBPACK_IMPORTED_MODULE_2__.PagesRoutingModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_17__.NgxDatatableModule, ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_18__.SelectDropDownModule, ng_multiselect_dropdown3__WEBPACK_IMPORTED_MODULE_19__.NgMultiselectDropdown3Module, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule]
  });
})();

/***/ }),

/***/ 63360:
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesRoutingModule": () => (/* binding */ PagesRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.component */ 37664);
/* harmony import */ var _blank_blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blank/blank.component */ 97276);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ 31164);
/* harmony import */ var _users_userPage_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/userPage/users.component */ 44470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);







const routes = [{
  path: '',
  component: _pages_component__WEBPACK_IMPORTED_MODULE_0__.PagesComponent,
  children: [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-material-timepicker_fesm2015_ngx-material-timepicker_js-node_modules-798bab"), __webpack_require__.e("default-node_modules_chart_js_dist_Chart_js-node_modules_ng2-charts_fesm2020_ng2-charts_mjs"), __webpack_require__.e("default-node_modules_html2canvas_dist_html2canvas_js"), __webpack_require__.e("src_app_pages_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 71659)).then(m => m.DashboardModule),
    data: {
      breadcrumb: 'Dashboard'
    }
  }, {
    path: 'maps',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_maps_maps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./maps/maps.module */ 5177)).then(m => m.MapsModule),
    data: {
      breadcrumb: 'Maps'
    }
  }, {
    path: 'charts',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_chart_js_dist_Chart_js-node_modules_ng2-charts_fesm2020_ng2-charts_mjs"), __webpack_require__.e("src_app_pages_charting_charting_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./charting/charting.module */ 59701)).then(m => m.ChartingModule),
    data: {
      breadcrumb: 'Charts'
    }
  }, {
    path: 'ui',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_ui_ui_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ui/ui.module */ 8204)).then(m => m.UiModule),
    data: {
      breadcrumb: 'UI'
    }
  }, {
    path: 'tools',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tools_tools_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tools/tools.module */ 40311)).then(m => m.ToolsModule),
    data: {
      breadcrumb: 'Tools'
    }
  }, {
    path: 'mail',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_mail_mail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mail/mail.module */ 35185)).then(m => m.MailModule),
    data: {
      breadcrumb: 'Mail'
    }
  }, {
    path: 'calendar',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_calendar_calendar_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./calendar/calendar.module */ 36650)).then(m => m.CalendarModule),
    data: {
      breadcrumb: 'Calendar'
    }
  }, {
    path: 'form-elements',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_form-elements_form-elements_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./form-elements/form-elements.module */ 33405)).then(m => m.FormElementsModule),
    data: {
      breadcrumb: 'Form Elements'
    }
  }, {
    path: 'tables',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-material-timepicker_fesm2015_ngx-material-timepicker_js-node_modules-798bab"), __webpack_require__.e("src_app_pages_tables_tables_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tables/tables.module */ 24272)).then(m => m.TablesModule),
    data: {
      breadcrumb: 'Tables'
    }
  }, {
    path: 'editors',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_editors_editors_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./editors/editors.module */ 32876)).then(m => m.EditorsModule),
    data: {
      breadcrumb: 'Editors'
    }
  }, {
    path: 'profile',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 88558)).then(m => m.ProfileModule),
    data: {
      breadcrumb: 'Profile'
    }
  }, {
    path: 'search',
    component: _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent,
    data: {
      breadcrumb: 'Search'
    }
  }, {
    path: 'blank',
    component: _blank_blank_component__WEBPACK_IMPORTED_MODULE_1__.BlankComponent,
    data: {
      breadcrumb: 'Blank page'
    }
  }, {
    path: 'users',
    component: _users_userPage_users_component__WEBPACK_IMPORTED_MODULE_3__.UsersComponent
  }]
}];
class PagesRoutingModule {
  static #_ = this.ɵfac = function PagesRoutingModule_Factory(t) {
    return new (t || PagesRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: PagesRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 31164:
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class SearchComponent {
  static #_ = this.ɵfac = function SearchComponent_Factory(t) {
    return new (t || SearchComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SearchComponent,
    selectors: [["az-search"]],
    decls: 2,
    vars: 0,
    template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Search results...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
}


/***/ }),

/***/ 72904:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/users/createUser/create-user/create-user.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateUserComponent": () => (/* binding */ CreateUserComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var src_app_pages_dashboard_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/dashboard/data.service */ 982);
/* harmony import */ var src_app_logic_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/logic/services/users.service */ 95877);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 15874);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);







class CreateUserComponent {
  constructor(dialogRef, ds, usersService, toastr) {
    this.dialogRef = dialogRef;
    this.ds = ds;
    this.usersService = usersService;
    this.toastr = toastr;
    this.selectedRole = [];
    this.roleList = [];
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    this.createUser = {};
    this.expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'value',
      textField: 'label',
      allowSearchFilter: true,
      displayKey: 'label',
      search: true,
      height: 'auto',
      placeholder: 'Select Status',
      customComparator: this.customComparator.bind(this),
      limitTo: 0,
      moreText: 'More',
      noResultsFound: 'No results found',
      searchPlaceholder: 'Search',
      searchOnKey: 'label',
      clearOnSelection: false,
      inputDirection: 'ltr',
      preventScrolling: true
    };
  }
  ngOnInit() {}
  submit() {
    this.usersService.createUser(this.createUser);
    try {
      this.subs.add(this.ds.createForeman(this.createUser).subscribe(res => {
        this.dialogRef.close({});
      }));
    } catch {
      this.dialogRef.close();
    }
  }
  cancel() {
    this.dialogRef.close();
  }
  containsUppercase(str) {
    return /[A-Z]/.test(str);
  }
  customComparator(itemA, itemB) {
    // Compare the items based on your custom logic
    // Return a negative number if itemA should come before itemB
    // Return a positive number if itemA should come after itemB
    // Return 0 if the items are equal
    // Example: Comparing based on item names in ascending order
    if (itemA.name < itemB.name) {
      return -1;
    } else if (itemA.name > itemB.name) {
      return 1;
    } else {
      return 0;
    }
  }
  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function CreateUserComponent_Factory(t) {
    return new (t || CreateUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_pages_dashboard_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_logic_services_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CreateUserComponent,
    selectors: [["az-create-user"]],
    decls: 23,
    vars: 2,
    consts: [[1, "row"], [1, "col"], [1, "card-header"], [1, "text-uppercase"], [1, "card-body", "widget-body"], [1, "col-6", "bottom-15"], ["id", "input-8", 1, "rounded-input", "form-control-lg", 3, "ngModel", "ngModelChange"], [1, "custom-button", "btn-lg", 3, "click"]],
    template: function CreateUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2)(4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Add a Foreman/Superintendent");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "div", 0)(8, "div", 5)(9, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Enter First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateUserComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.createUser.firstname = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5)(13, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Enter Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateUserComponent_Template_input_ngModelChange_15_listener($event) {
          return ctx.createUser.lastname = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 0)(17, "div", 5)(18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateUserComponent_Template_button_click_18_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 5)(21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateUserComponent_Template_button_click_21_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.createUser.firstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.createUser.lastname);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel],
    styles: [".mat-dialog-container[_ngcontent-%COMP%] {\n  max-height: 90% !important; \n}\n\n.dialog-content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: calc(100vh - 200px); \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXNlcnMvY3JlYXRlVXNlci9jcmVhdGUtdXNlci9jcmVhdGUtdXNlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL1NjaGVkdWxpbmclMjBTb2Z0d2FyZS9zcmMvYXBwL3BhZ2VzL3VzZXJzL2NyZWF0ZVVzZXIvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQSxFQUFBLCtCQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLCtCQUFBLEVBQUEsK0JBQUE7QUNDSiIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cclxuICB9XHJcbiAgXHJcbiAgLmRpYWxvZy1jb250ZW50IHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpOyAvKiBBZGp1c3QgdGhlIHZhbHVlIGFzIG5lZWRlZCAqL1xyXG4gIH0iLCIubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cbn1cblxuLmRpYWxvZy1jb250ZW50IHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 44470:
/*!*********************************************************!*\
  !*** ./src/app/pages/users/userPage/users.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 77070);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _createUser_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createUser/create-user/create-user.component */ 72904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var src_app_logic_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/logic/services/users.service */ 95877);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/directives/widget/widget.directive */ 3090);








function UsersComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UsersComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r7 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r7, " ");
  }
}
function UsersComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UsersComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r8 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r8, " ");
  }
}
function UsersComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function UsersComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r9 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r9, " ");
  }
}
class UsersComponent {
  constructor(usersService, dialog) {
    this.usersService = usersService;
    this.dialog = dialog;
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.editing = {};
    this.rows = [];
    this.filtered_rows = [];
    this.selected = [];
    this.columns = [];
    this.tempList = [];
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {}
  addItem() {
    // Logic to add an item to the list
    // For example, you can push a new item to the existing list or navigate to a new item creation page
    const dialogRef = this.dialog.open(_createUser_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_0__.CreateUserComponent, {
      width: '1000px',
      height: '300px'
      // Add any additional configuration options as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadUsers();
    });
  }
  onSelect({
    selected
  }) {
    //console.log('Select Event', selected, this.selected);
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  onActivate(event) {
    //console.log('Activate Event', event);
  }
  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function UsersComponent_Factory(t) {
    return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_logic_services_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: UsersComponent,
    selectors: [["az-users"]],
    viewQuery: function UsersComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.DatatableComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
      }
    },
    decls: 22,
    vars: 15,
    consts: [[1, "row"], [1, "col"], ["widget", "", 1, "card"], [1, "card-header"], [1, "text-uppercase"], [1, "card-body", "widget-body"], [1, "button-container"], [1, "add-button", 3, "click"], [1, "bootstrap", 3, "headerHeight", "limit", "columnMode", "footerHeight", "rowHeight", "rows", "selected", "selectionType", "activate", "select"], ["table", ""], [3, "width", "sortable", "canAutoResize", "draggable", "resizeable", "headerCheckboxable", "checkboxable"], ["name", "name"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "email"], ["name", "role"]],
    template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Foreman/Superintendent List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_8_listener() {
          return ctx.addItem();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ngx-datatable", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("activate", function UsersComponent_Template_ngx_datatable_activate_10_listener($event) {
          return ctx.onActivate($event);
        })("select", function UsersComponent_Template_ngx_datatable_select_10_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "ngx-datatable-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ngx-datatable-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, UsersComponent_ng_template_14_Template, 2, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, UsersComponent_ng_template_15_Template, 1, 1, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ngx-datatable-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, UsersComponent_ng_template_17_Template, 2, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, UsersComponent_ng_template_18_Template, 1, 1, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ngx-datatable-column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, UsersComponent_ng_template_20_Template, 2, 0, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, UsersComponent_ng_template_21_Template, 1, 1, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("headerHeight", 50)("limit", 10)("columnMode", "force")("footerHeight", 50)("rowHeight", "auto")("rows", ctx.rows)("selected", ctx.selected)("selectionType", ctx.selection);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", 30)("sortable", false)("canAutoResize", false)("draggable", true)("resizeable", true)("headerCheckboxable", false)("checkboxable", false);
      }
    },
    dependencies: [_theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_2__.Widget, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.DataTableColumnCellDirective],
    styles: [".button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXNlcnMvdXNlclBhZ2UvdXNlcnMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9TY2hlZHVsaW5nJTIwU29mdHdhcmUvc3JjL2FwcC9wYWdlcy91c2Vycy91c2VyUGFnZS91c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNDSiIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4iLCIuYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 46436:
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/back-top/back-top.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackTopComponent": () => (/* binding */ BackTopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

const _c0 = ["backTop"];
class BackTopComponent {
  constructor() {
    this.position = 400;
    this.showSpeed = 500;
    this.moveSpeed = 1000;
  }
  ngAfterViewInit() {
    this._onWindowScroll();
  }
  _onClick() {
    jQuery('html, body').animate({
      scrollTop: 0
    }, {
      duration: this.moveSpeed
    });
    return false;
  }
  _onWindowScroll() {
    let el = this._selector.nativeElement;
    window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
  }
  static #_ = this.ɵfac = function BackTopComponent_Factory(t) {
    return new (t || BackTopComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BackTopComponent,
    selectors: [["az-back-top"]],
    viewQuery: function BackTopComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._selector = _t.first);
      }
    },
    hostBindings: function BackTopComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackTopComponent_click_HostBindingHandler() {
          return ctx._onClick();
        })("scroll", function BackTopComponent_scroll_HostBindingHandler() {
          return ctx._onWindowScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      position: "position",
      showSpeed: "showSpeed",
      moveSpeed: "moveSpeed"
    },
    decls: 2,
    vars: 0,
    consts: [["title", "Back to Top", 1, "fa", "fa-angle-up", "back-to-top"], ["backTop", ""]],
    template: function BackTopComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 0, 1);
      }
    },
    styles: ["/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n\n.back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 9999;\n  display: none;\n  text-decoration: none;\n  right: 40px;\n  bottom: 40px !important;\n  font-size: 30px;\n  text-align: center;\n  opacity: 0.4;\n  color: #fff;\n  background-color: rgba(36, 45, 58, 0.75);\n  border-radius: 50%;\n  line-height: 34px;\n}\n.back-to-top:hover {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc3R5bGVzL3NraW5zL19ibHVlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9TY2hlZHVsaW5nJTIwU29mdHdhcmUvc3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2JhY2stdG9wL2JhY2stdG9wLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2JhY2stdG9wL2JhY2stdG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUFBO0FDYUEsb0JBQUE7QUFNQSxrQkFBQTtBQUlBLGlCQUFBO0FBS0Esa0JBQUE7QUFLQSxtQkFBQTtBQUtBLGdCQUFBO0FBU0EsdUJBQUE7QUE4Q0E7RUFDSSwyUUFBQTtFQUNBLGFBQUE7QUNwRko7O0FDUEE7RUFDRSxlQUFBO0VBQ0EsV0FKSztFQUtMLFlBTEs7RUFNTCxlQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXSGZhO0VHZ0JiLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRFVGO0FDVEU7RUFDRSxZQUFBO0FEV0oiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKiBDb2xvcnMgKHJlY29tbWVuZGVkIHVzZSBIRVggY29sb3JzKSAqKioqLyBcclxuJG1haW4tY29sb3I6ICMyNDJEM0E7IFxyXG4kZGVmYXVsdC1jb2xvcjojZmZmOyBcclxuJGRhcmstY29sb3I6ICMwMDA7XHJcblxyXG4kYm9keS1iZy1ncmFkaWVudC1jb2xvci0xOiAjMWU1Nzk5O1xyXG4kYm9keS1iZy1ncmFkaWVudC1jb2xvci0yOiAgI2E1YzllNTtcclxuXHJcbiRzaWRlYmFyLWJnLWNvbG9yOiMzNDQxNTQ7XHJcbiRzaWRlYmFyLWl0ZW0tYWN0aXZlLWJnLWNvbG9yOiAjNjM3Q0EwOy8vICMwMDk5Y2M7XHJcblxyXG5cclxuJHByaW1hcnktY29sb3I6ICMwMjRhODg7XHJcbiRzdWNjZXNzLWNvbG9yOiAjMmQ5MjJkO1xyXG4kaW5mby1jb2xvcjogIzI0OGRhZDtcclxuJHdhcm5pbmctY29sb3I6ICNmNzlhMTc7XHJcbiRkYW5nZXItY29sb3I6ICNiZjE3MjU7IiwiQGltcG9ydCBcInNraW5zL2JsdWVcIjtcclxuXHJcbiRib2R5LWJnLWNvbG9yOiAjZTllYmVlO1xyXG4kdGV4dC1jb2xvcjogIzI0MjQyNDtcclxuJGdyYXktZGFyazogIzI5MmIyYztcclxuJGdyYXk6ICM1NTU7XHJcbiRncmF5LWxpZ2h0OiAjY2NjO1xyXG4kZ3JheS1saWdodGVyOiAjZWNlZWVmO1xyXG5cclxuJHRhYmxlLWJnLWFjdGl2ZTogcmdiYSgjMDAwLC4wNzUpO1xyXG4kdGFibGUtYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRncmF5LWxpZ2h0ZXI7XHJcblxyXG4vKioqKiBBcHAgcm9vdHMgKioqKi9cclxuJGFzc2V0cy1yb290OiAnfi9hc3NldHMvJztcclxuJGltYWdlcy1yb290OiAkYXNzZXRzLXJvb3QgKyAnaW1nLyc7XHJcbiRmb250cy1yb290OiAkYXNzZXRzLXJvb3QgKyAnZm9udHMvJztcclxuXHJcblxyXG4vKioqKiBHZW5lcmFsICoqKiovXHJcbiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuLyoqKiogTmF2YmFyICoqKiovXHJcbiRuYXZiYXItdGV4dC1jb2xvcjogJGRlZmF1bHQtY29sb3I7XHJcbiRuYXZiYXItaGVpZ2h0OiA2MHB4O1xyXG5cclxuXHJcbi8qKioqIFNpZGViYXIgKioqKi9cclxuJHNpZGViYXItd2lkdGg6IDIzMHB4O1xyXG5cclxuXHJcblxyXG4vKioqKiBQcm9ncmVzcyAqKioqL1xyXG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogMDtcclxuJHByb2dyZXNzLWhlaWdodDogMjBweDtcclxuXHJcblxyXG4vKioqKiBGb250cyAqKioqL1xyXG4kZm9udC10aGluOiAxMDA7XHJcbiRmb250LWxpZ2h0OiAzMDA7XHJcbiRmb250LW5vcm1hbDogNDAwO1xyXG4kZm9udC1ib2xkOiA1MDA7XHJcbiRmb250LWJvbGRlcjogNzAwO1xyXG4kZm9udC11bHRyYUJvbGQ6IDkwMDtcclxuXHJcblxyXG4vKioqKiBTb2NpYWwgaWNvbnMgKioqKi9cclxuJGZhY2Vib29rLWNvbG9yOiAjM2I1OTk4O1xyXG4kdHdpdHRlci1jb2xvcjogIzU1YWNlZTtcclxuJGluc3RhZ3JhbS1jb2xvcjogIzhhM2FiOTtcclxuJHBpbnRlcmVzdC1jb2xvcjogI2M5MjIyODsgXHJcbiRnb29nbGUtY29sb3I6ICNkZDRiMzk7XHJcbiRsaW5rZWRpbi1jb2xvcjogIzAxNzdCNTtcclxuJGdpdGh1Yi1jb2xvcjogIzZiNmI2YjtcclxuJHN0YWNrb3ZlcmZsb3ctY29sb3I6ICMyRjk2RTg7XHJcbiRkcmliYmxlLWNvbG9yOiAjRjI2Nzk4O1xyXG4kYmVoYWNlLWNvbG9yOiAjMDA5M0ZBO1xyXG5cclxuLy8tLS0tLS0tLWZvciBwcmV2ZW50IGF3ZXNvbWUtYm9vdHN0cmFwLWNoZWNrYm94IGVycm9ycy0tLS0tLS0tLVxyXG4vL0BpbXBvcnQgXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcbi8vQGltcG9ydCBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnNcIjtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogcmdiYSgjMDAwLC4xNSk7XHJcbiRlbmFibGUtdHJhbnNpdGlvbnM6IHRydWU7XHJcbiRpbnB1dC1jb2xvcjogJGdyYXk7XHJcbiRpbnB1dC1iZy1kaXNhYmxlZDogJGdyYXktbGlnaHRlcjtcclxuJGJyYW5kLXByaW1hcnk6ICRwcmltYXJ5LWNvbG9yO1xyXG4kYnJhbmQtc3VjY2VzczogJHN1Y2Nlc3MtY29sb3I7XHJcbiRicmFuZC1pbmZvOiAkaW5mby1jb2xvcjtcclxuJGJyYW5kLXdhcm5pbmc6ICR3YXJuaW5nLWNvbG9yO1xyXG4kYnJhbmQtZGFuZ2VyOiAkZGFuZ2VyLWNvbG9yO1xyXG4kYnJhbmQtaW52ZXJzZTogJGdyYXktZGFyaztcclxuXHJcblxyXG5cclxuXHJcbi8vU2V0IHZhcmlhYmxlcyB0byBiZSBhY2Nlc3NpYmxlIGZvciBKU1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtdG8tanMvc2Fzcy9zYXNzLXRvLWpzXCI7XHJcblxyXG4kdmFyaWFibGVzTWFwOiAoIFxyXG4gIG1haW4tY29sb3I6ICRtYWluLWNvbG9yLFxyXG4gIGRlZmF1bHQtY29sb3I6ICRkZWZhdWx0LWNvbG9yLFxyXG4gIGRhcmstY29sb3I6ICRkYXJrLWNvbG9yLFxyXG4gIHByaW1hcnktY29sb3I6ICRwcmltYXJ5LWNvbG9yLFxyXG4gIHN1Y2Nlc3MtY29sb3I6ICRzdWNjZXNzLWNvbG9yLFxyXG4gIHdhcm5pbmctY29sb3I6ICR3YXJuaW5nLWNvbG9yLFxyXG4gIGRhbmdlci1jb2xvcjogJGRhbmdlci1jb2xvcixcclxuICBpbmZvLWNvbG9yOiAkaW5mby1jb2xvcixcclxuICBzaWRlYmFyLWJnLWNvbG9yOiAkc2lkZWJhci1iZy1jb2xvcixcclxuICBncmF5OiAkZ3JheSxcclxuICBncmF5LWxpZ2h0OiAkZ3JheS1saWdodFxyXG4pO1xyXG5cclxuYm9keTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogc2Fzc1RvSnMoJHZhcmlhYmxlc01hcCk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4iLCIvKioqKiBDb2xvcnMgKHJlY29tbWVuZGVkIHVzZSBIRVggY29sb3JzKSAqKioqL1xuLyoqKiogQXBwIHJvb3RzICoqKiovXG4vKioqKiBHZW5lcmFsICoqKiovXG4vKioqKiBOYXZiYXIgKioqKi9cbi8qKioqIFNpZGViYXIgKioqKi9cbi8qKioqIFByb2dyZXNzICoqKiovXG4vKioqKiBGb250cyAqKioqL1xuLyoqKiogU29jaWFsIGljb25zICoqKiovXG5ib2R5OjphZnRlciB7XG4gIGNvbnRlbnQ6ICd7XCJtYWluLWNvbG9yXCI6XCIjMjQyRDNBXCIsXCJkZWZhdWx0LWNvbG9yXCI6XCIjZmZmXCIsXCJkYXJrLWNvbG9yXCI6XCIjMDAwXCIsXCJwcmltYXJ5LWNvbG9yXCI6XCIjMDI0YTg4XCIsXCJzdWNjZXNzLWNvbG9yXCI6XCIjMmQ5MjJkXCIsXCJ3YXJuaW5nLWNvbG9yXCI6XCIjZjc5YTE3XCIsXCJkYW5nZXItY29sb3JcIjpcIiNiZjE3MjVcIixcImluZm8tY29sb3JcIjpcIiMyNDhkYWRcIixcInNpZGViYXItYmctY29sb3JcIjpcIiMzNDQxNTRcIixcImdyYXlcIjpcIiM1NTVcIixcImdyYXktbGlnaHRcIjpcIiNjY2NcIn0nO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYmFjay10by10b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogOTk5OTtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICByaWdodDogNDBweDtcbiAgYm90dG9tOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjQ7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCA0NSwgNTgsIDAuNzUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xufVxuLmJhY2stdG8tdG9wOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufSIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4kc2l6ZTogNDBweDtcclxuXHJcbi5iYWNrLXRvLXRvcCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAkc2l6ZTtcclxuICBoZWlnaHQ6ICRzaXplO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHJpZ2h0OiA0MHB4O1xyXG4gIGJvdHRvbTogNDBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3BhY2l0eTogMC40O1xyXG4gIGNvbG9yOiAkZGVmYXVsdC1jb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRtYWluLWNvbG9yLCAwLjc1KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 52333:
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app.config */ 49670);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 42512);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);






const _c0 = function (a0) {
  return [a0];
};
function BreadcrumbComponent_div_0_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 7)(4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const breadcrumb_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", i_r3 == ctx_r1.breadcrumbs.length - 1)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, breadcrumb_r2.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](breadcrumb_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", i_r3 != ctx_r1.breadcrumbs.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](breadcrumb_r2.name);
  }
}
function BreadcrumbComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "you are here :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ol", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BreadcrumbComponent_div_0_li_4_Template, 6, 7, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.breadcrumbs);
  }
}
const _c1 = function () {
  return ["/pages/dashboard"];
};
class BreadcrumbComponent {
  constructor(_router, _activatedRoute, _appConfig, _title) {
    this._router = _router;
    this._activatedRoute = _activatedRoute;
    this._appConfig = _appConfig;
    this._title = _title;
    this.breadcrumbs = [];
    this.config = this._appConfig.config;
    this._router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
        this.breadcrumbs = [];
        this.parseRoute(this._router.routerState.snapshot.root);
        this.title = "";
        this.breadcrumbs.forEach(breadcrumb => {
          this.title += ' > ' + breadcrumb.name;
        });
        this._title.setTitle(this.config.name + this.title);
      }
    });
  }
  parseRoute(node) {
    if (node.data['breadcrumb']) {
      if (node.url.length) {
        let urlSegments = [];
        node.pathFromRoot.forEach(routerState => {
          urlSegments = urlSegments.concat(routerState.url);
        });
        let url = urlSegments.map(urlSegment => {
          return urlSegment.path;
        }).join('/');
        this.breadcrumbs.push({
          name: node.data['breadcrumb'],
          url: '/' + url
        });
      }
    }
    if (node.firstChild) {
      this.parseRoute(node.firstChild);
    }
  }
  static #_ = this.ɵfac = function BreadcrumbComponent_Factory(t) {
    return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BreadcrumbComponent,
    selectors: [["az-breadcrumb"]],
    decls: 1,
    vars: 2,
    consts: [["class", "clearfix", 4, "ngIf"], [1, "clearfix"], [1, "text-uppercase", "pull-left", "here"], [1, "breadcrumb"], ["class", "breadcrumb-item text-uppercase", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item", "text-uppercase"], [3, "hidden", "routerLink"], [3, "hidden"]],
    template: function BreadcrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BreadcrumbComponent_div_0_Template, 5, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1).includes(ctx._router.url));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: ["/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n\n.here {\n  padding-right: 5px;\n}\n\n.breadcrumb {\n  padding: 0;\n  background: transparent;\n  color: #242424;\n  font-size: 14px;\n  margin-bottom: 30px;\n}\n\n.breadcrumb-item + .breadcrumb-item::before {\n  color: #242424;\n  content: \">\";\n  font-size: 16px;\n  margin-top: -2px;\n  padding-right: 0.3rem;\n}\n\n.breadcrumb-item {\n  float: left;\n}\n.breadcrumb-item.active {\n  color: #242424;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc3R5bGVzL3NraW5zL19ibHVlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9TY2hlZHVsaW5nJTIwU29mdHdhcmUvc3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQUE7QUNhQSxvQkFBQTtBQU1BLGtCQUFBO0FBSUEsaUJBQUE7QUFLQSxrQkFBQTtBQUtBLG1CQUFBO0FBS0EsZ0JBQUE7QUFTQSx1QkFBQTtBQThDQTtFQUNJLDJRQUFBO0VBQ0EsYUFBQTtBQ3BGSjs7QUNUQTtFQUNJLGtCQUFBO0FEWUo7O0FDVkE7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxjRkxTO0VFTVQsZUFBQTtFQUNBLG1CQUFBO0FEYUo7O0FDWEE7RUFDSSxjRlZTO0VFV1QsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FEY0o7O0FDWkE7RUFDSSxXQUFBO0FEZUo7QUNkSTtFQUNHLGNGbkJNO0VFb0JOLGlCQUFBO0FEZ0JQIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiogQ29sb3JzIChyZWNvbW1lbmRlZCB1c2UgSEVYIGNvbG9ycykgKioqKi8gXHJcbiRtYWluLWNvbG9yOiAjMjQyRDNBOyBcclxuJGRlZmF1bHQtY29sb3I6I2ZmZjsgXHJcbiRkYXJrLWNvbG9yOiAjMDAwO1xyXG5cclxuJGJvZHktYmctZ3JhZGllbnQtY29sb3ItMTogIzFlNTc5OTtcclxuJGJvZHktYmctZ3JhZGllbnQtY29sb3ItMjogICNhNWM5ZTU7XHJcblxyXG4kc2lkZWJhci1iZy1jb2xvcjojMzQ0MTU0O1xyXG4kc2lkZWJhci1pdGVtLWFjdGl2ZS1iZy1jb2xvcjogIzYzN0NBMDsvLyAjMDA5OWNjO1xyXG5cclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMDI0YTg4O1xyXG4kc3VjY2Vzcy1jb2xvcjogIzJkOTIyZDtcclxuJGluZm8tY29sb3I6ICMyNDhkYWQ7XHJcbiR3YXJuaW5nLWNvbG9yOiAjZjc5YTE3O1xyXG4kZGFuZ2VyLWNvbG9yOiAjYmYxNzI1OyIsIkBpbXBvcnQgXCJza2lucy9ibHVlXCI7XHJcblxyXG4kYm9keS1iZy1jb2xvcjogI2U5ZWJlZTtcclxuJHRleHQtY29sb3I6ICMyNDI0MjQ7XHJcbiRncmF5LWRhcms6ICMyOTJiMmM7XHJcbiRncmF5OiAjNTU1O1xyXG4kZ3JheS1saWdodDogI2NjYztcclxuJGdyYXktbGlnaHRlcjogI2VjZWVlZjtcclxuXHJcbiR0YWJsZS1iZy1hY3RpdmU6IHJnYmEoIzAwMCwuMDc1KTtcclxuJHRhYmxlLWJvcmRlci13aWR0aDogMXB4O1xyXG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkZ3JheS1saWdodGVyO1xyXG5cclxuLyoqKiogQXBwIHJvb3RzICoqKiovXHJcbiRhc3NldHMtcm9vdDogJ34vYXNzZXRzLyc7XHJcbiRpbWFnZXMtcm9vdDogJGFzc2V0cy1yb290ICsgJ2ltZy8nO1xyXG4kZm9udHMtcm9vdDogJGFzc2V0cy1yb290ICsgJ2ZvbnRzLyc7XHJcblxyXG5cclxuLyoqKiogR2VuZXJhbCAqKioqL1xyXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuXHJcbi8qKioqIE5hdmJhciAqKioqL1xyXG4kbmF2YmFyLXRleHQtY29sb3I6ICRkZWZhdWx0LWNvbG9yO1xyXG4kbmF2YmFyLWhlaWdodDogNjBweDtcclxuXHJcblxyXG4vKioqKiBTaWRlYmFyICoqKiovXHJcbiRzaWRlYmFyLXdpZHRoOiAyMzBweDtcclxuXHJcblxyXG5cclxuLyoqKiogUHJvZ3Jlc3MgKioqKi9cclxuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6IDA7XHJcbiRwcm9ncmVzcy1oZWlnaHQ6IDIwcHg7XHJcblxyXG5cclxuLyoqKiogRm9udHMgKioqKi9cclxuJGZvbnQtdGhpbjogMTAwO1xyXG4kZm9udC1saWdodDogMzAwO1xyXG4kZm9udC1ub3JtYWw6IDQwMDtcclxuJGZvbnQtYm9sZDogNTAwO1xyXG4kZm9udC1ib2xkZXI6IDcwMDtcclxuJGZvbnQtdWx0cmFCb2xkOiA5MDA7XHJcblxyXG5cclxuLyoqKiogU29jaWFsIGljb25zICoqKiovXHJcbiRmYWNlYm9vay1jb2xvcjogIzNiNTk5ODtcclxuJHR3aXR0ZXItY29sb3I6ICM1NWFjZWU7XHJcbiRpbnN0YWdyYW0tY29sb3I6ICM4YTNhYjk7XHJcbiRwaW50ZXJlc3QtY29sb3I6ICNjOTIyMjg7IFxyXG4kZ29vZ2xlLWNvbG9yOiAjZGQ0YjM5O1xyXG4kbGlua2VkaW4tY29sb3I6ICMwMTc3QjU7XHJcbiRnaXRodWItY29sb3I6ICM2YjZiNmI7XHJcbiRzdGFja292ZXJmbG93LWNvbG9yOiAjMkY5NkU4O1xyXG4kZHJpYmJsZS1jb2xvcjogI0YyNjc5ODtcclxuJGJlaGFjZS1jb2xvcjogIzAwOTNGQTtcclxuXHJcbi8vLS0tLS0tLS1mb3IgcHJldmVudCBhd2Vzb21lLWJvb3RzdHJhcC1jaGVja2JveCBlcnJvcnMtLS0tLS0tLS1cclxuLy9AaW1wb3J0IFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xyXG4vL0BpbXBvcnQgXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHJnYmEoIzAwMCwuMTUpO1xyXG4kZW5hYmxlLXRyYW5zaXRpb25zOiB0cnVlO1xyXG4kaW5wdXQtY29sb3I6ICRncmF5O1xyXG4kaW5wdXQtYmctZGlzYWJsZWQ6ICRncmF5LWxpZ2h0ZXI7XHJcbiRicmFuZC1wcmltYXJ5OiAkcHJpbWFyeS1jb2xvcjtcclxuJGJyYW5kLXN1Y2Nlc3M6ICRzdWNjZXNzLWNvbG9yO1xyXG4kYnJhbmQtaW5mbzogJGluZm8tY29sb3I7XHJcbiRicmFuZC13YXJuaW5nOiAkd2FybmluZy1jb2xvcjtcclxuJGJyYW5kLWRhbmdlcjogJGRhbmdlci1jb2xvcjtcclxuJGJyYW5kLWludmVyc2U6ICRncmF5LWRhcms7XHJcblxyXG5cclxuXHJcblxyXG4vL1NldCB2YXJpYWJsZXMgdG8gYmUgYWNjZXNzaWJsZSBmb3IgSlNcclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXRvLWpzL3Nhc3Mvc2Fzcy10by1qc1wiO1xyXG5cclxuJHZhcmlhYmxlc01hcDogKCBcclxuICBtYWluLWNvbG9yOiAkbWFpbi1jb2xvcixcclxuICBkZWZhdWx0LWNvbG9yOiAkZGVmYXVsdC1jb2xvcixcclxuICBkYXJrLWNvbG9yOiAkZGFyay1jb2xvcixcclxuICBwcmltYXJ5LWNvbG9yOiAkcHJpbWFyeS1jb2xvcixcclxuICBzdWNjZXNzLWNvbG9yOiAkc3VjY2Vzcy1jb2xvcixcclxuICB3YXJuaW5nLWNvbG9yOiAkd2FybmluZy1jb2xvcixcclxuICBkYW5nZXItY29sb3I6ICRkYW5nZXItY29sb3IsXHJcbiAgaW5mby1jb2xvcjogJGluZm8tY29sb3IsXHJcbiAgc2lkZWJhci1iZy1jb2xvcjogJHNpZGViYXItYmctY29sb3IsXHJcbiAgZ3JheTogJGdyYXksXHJcbiAgZ3JheS1saWdodDogJGdyYXktbGlnaHRcclxuKTtcclxuXHJcbmJvZHk6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IHNhc3NUb0pzKCR2YXJpYWJsZXNNYXApO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuIiwiLyoqKiogQ29sb3JzIChyZWNvbW1lbmRlZCB1c2UgSEVYIGNvbG9ycykgKioqKi9cbi8qKioqIEFwcCByb290cyAqKioqL1xuLyoqKiogR2VuZXJhbCAqKioqL1xuLyoqKiogTmF2YmFyICoqKiovXG4vKioqKiBTaWRlYmFyICoqKiovXG4vKioqKiBQcm9ncmVzcyAqKioqL1xuLyoqKiogRm9udHMgKioqKi9cbi8qKioqIFNvY2lhbCBpY29ucyAqKioqL1xuYm9keTo6YWZ0ZXIge1xuICBjb250ZW50OiAne1wibWFpbi1jb2xvclwiOlwiIzI0MkQzQVwiLFwiZGVmYXVsdC1jb2xvclwiOlwiI2ZmZlwiLFwiZGFyay1jb2xvclwiOlwiIzAwMFwiLFwicHJpbWFyeS1jb2xvclwiOlwiIzAyNGE4OFwiLFwic3VjY2Vzcy1jb2xvclwiOlwiIzJkOTIyZFwiLFwid2FybmluZy1jb2xvclwiOlwiI2Y3OWExN1wiLFwiZGFuZ2VyLWNvbG9yXCI6XCIjYmYxNzI1XCIsXCJpbmZvLWNvbG9yXCI6XCIjMjQ4ZGFkXCIsXCJzaWRlYmFyLWJnLWNvbG9yXCI6XCIjMzQ0MTU0XCIsXCJncmF5XCI6XCIjNTU1XCIsXCJncmF5LWxpZ2h0XCI6XCIjY2NjXCJ9JztcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlcmUge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5icmVhZGNydW1iIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMjQyNDI0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOjpiZWZvcmUge1xuICBjb2xvcjogIzI0MjQyNDtcbiAgY29udGVudDogXCI+XCI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgcGFkZGluZy1yaWdodDogMC4zcmVtO1xufVxuXG4uYnJlYWRjcnVtYi1pdGVtIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uYnJlYWRjcnVtYi1pdGVtLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMjQyNDI0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmhlcmV7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmJyZWFkY3J1bWJ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOjpiZWZvcmUgeyAgXHJcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICBjb250ZW50OiBcIj5cIjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjNyZW07XHJcbn1cclxuLmJyZWFkY3J1bWItaXRlbXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgJi5hY3RpdmV7XHJcbiAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 58469:
/*!*********************************************************!*\
  !*** ./src/app/theme/components/menu/menu.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.service */ 67091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.state */ 82534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-scrollbar */ 24203);








function MenuComponent_li_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function MenuComponent_li_3_a_1_Template_a_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.hoverItem($event, item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", item_r1.url || "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", item_r1.target || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fa ", item_r1.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.title);
  }
}
const _c0 = function (a0) {
  return [a0];
};
const _c1 = function () {
  return {
    exact: true
  };
};
function MenuComponent_li_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_li_3_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.collapseMenu($event, item_r1));
    })("mouseenter", function MenuComponent_li_3_a_2_Template_a_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.hoverItem($event, item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, item_r1.routerLink))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fa ", item_r1.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.title);
  }
}
function MenuComponent_li_3_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_li_3_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.collapseMenu($event, item_r1));
    })("mouseenter", function MenuComponent_li_3_a_3_Template_a_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.hoverItem($event, item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "b", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fa ", item_r1.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.title);
  }
}
function MenuComponent_li_3_ul_4_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_li_3_ul_4_li_1_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.collapseMenu($event, item_r1));
    })("mouseenter", function MenuComponent_li_3_ul_4_li_1_a_1_Template_a_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.hoverItem($event, item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "b", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subitem_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](subitem_r23.title);
  }
}
function MenuComponent_li_3_ul_4_li_1_ul_2_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function MenuComponent_li_3_ul_4_li_1_ul_2_li_1_a_1_Template_a_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5).$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r38.hoverItem($event, item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subSubitem_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", subSubitem_r35.url || "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", subSubitem_r35.target || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", subSubitem_r35.title, "");
  }
}
function MenuComponent_li_3_ul_4_li_1_ul_2_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function MenuComponent_li_3_ul_4_li_1_ul_2_li_1_a_2_Template_a_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5).$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r42.hoverItem($event, item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subSubitem_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, subSubitem_r35.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("target", subSubitem_r35.target || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", subSubitem_r35.title, "");
  }
}
function MenuComponent_li_3_ul_4_li_1_ul_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function MenuComponent_li_3_ul_4_li_1_ul_2_li_1_Template_li_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4).$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r46.hoverItem($event, item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_3_ul_4_li_1_ul_2_li_1_a_1_Template, 2, 3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_li_3_ul_4_li_1_ul_2_li_1_a_2_Template, 2, 5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subSubitem_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !subSubitem_r35.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subSubitem_r35.routerLink);
  }
}
function MenuComponent_li_3_ul_4_li_1_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_3_ul_4_li_1_ul_2_li_1_Template, 3, 2, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subitem_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", subitem_r23.subMenu);
  }
}
function MenuComponent_li_3_ul_4_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_li_3_ul_4_li_1_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r50.collapseMenu($event, item_r1));
    })("mouseenter", function MenuComponent_li_3_ul_4_li_1_a_3_Template_a_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r53.hoverItem($event, item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subitem_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, subitem_r23.routerLink))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", subitem_r23.title, " ");
  }
}
function MenuComponent_li_3_ul_4_li_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function MenuComponent_li_3_ul_4_li_1_a_4_Template_a_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r56.hoverItem($event, item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subitem_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", subitem_r23.url || "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", subitem_r23.target || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", subitem_r23.title, " ");
  }
}
function MenuComponent_li_3_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_3_ul_4_li_1_a_1_Template, 4, 2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_li_3_ul_4_li_1_ul_2_Template, 2, 1, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_3_ul_4_li_1_a_3_Template, 2, 6, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuComponent_li_3_ul_4_li_1_a_4_Template, 2, 3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subitem_r23 = ctx.$implicit;
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subitem_r23.subMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subitem_r23.subMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.routerLink && !subitem_r23.subMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r1.routerLink && !subitem_r23.subMenu);
  }
}
function MenuComponent_li_3_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_3_ul_4_li_1_Template, 5, 4, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.subMenu);
  }
}
function MenuComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_3_a_1_Template, 4, 6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_li_3_a_2_Template, 4, 9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_3_a_3_Template, 5, 5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuComponent_li_3_ul_4_Template, 2, 1, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r1.routerLink && !item_r1.subMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.routerLink && !item_r1.subMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.subMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.subMenu);
  }
}
const _c2 = function (a0) {
  return {
    "menu-collapsed": a0
  };
};
const _c3 = function (a0, a1) {
  return {
    top: a0,
    height: a1
  };
};
const _c4 = function (a0) {
  return {
    "show-hover-elem": a0
  };
};
class MenuComponent {
  constructor(_elementRef, _router, _activatedRoute, _menuService, _state) {
    this._elementRef = _elementRef;
    this._router = _router;
    this._activatedRoute = _activatedRoute;
    this._menuService = _menuService;
    this._state = _state;
    this.isMenuCollapsed = false;
    this.isMenuShouldCollapsed = false;
    this.menuItems = _menuService.getMenuItems();
    this._state.subscribe('menu.isCollapsed', isCollapsed => {
      this.isMenuCollapsed = isCollapsed;
    });
    this._router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
        if (width <= 768) {
          this._state.notifyDataChanged('menu.isCollapsed', true);
        }
        window.scrollTo(0, 0);
      }
    });
  }
  ngOnInit() {
    if (this._shouldMenuCollapse()) {
      this.menuCollapse();
    }
    this.updateSidebarHeight();
  }
  onWindowResize() {
    var isMenuShouldCollapsed = this._shouldMenuCollapse();
    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
  }
  _shouldMenuCollapse() {
    return window.innerWidth <= 768;
  }
  menuCollapse() {
    this.menuCollapseStateChange(true);
  }
  menuCollapseStateChange(isCollapsed) {
    this.isMenuCollapsed = isCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }
  menuExpand() {
    this.menuCollapseStateChange(false);
  }
  updateSidebarHeight() {
    this.menuHeight = this._elementRef.nativeElement.children[0].clientHeight - 84;
  }
  hoverItem($event, item) {
    this.showHoverElem = true;
    this.hoverElemHeight = $event.currentTarget.clientHeight;
    this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 60;
  }
  collapseMenu($event, item) {
    var link = jQuery($event.currentTarget);
    if (this.isMenuCollapsed) {
      this.isMenuCollapsed = false;
      this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
      if (link.parent().hasClass('sidebar-item-expanded')) {
        return false;
      } else {
        link.parent().parent().find('li').removeClass('sidebar-item-expanded');
        link.parent().parent().find('li .sidebar-sublist').slideUp(250);
        link.parent().addClass('sidebar-item-expanded');
        setTimeout(function () {
          link.next().css('display', 'block');
        }, 250);
        link.next().slideDown(250);
      }
    } else {
      if (link.parent().hasClass('sidebar-item-expanded')) {
        link.parent().removeClass('sidebar-item-expanded');
        link.next().slideUp(250);
      } else {
        link.parent().parent().find('li').removeClass('sidebar-item-expanded');
        link.parent().parent().find('li .sidebar-sublist').slideUp(250);
        link.parent().addClass('sidebar-item-expanded');
        link.next().slideDown(250);
      }
    }
    return false;
  }
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_state__WEBPACK_IMPORTED_MODULE_1__.AppState));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["az-menu"]],
    hostBindings: function MenuComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function MenuComponent_resize_HostBindingHandler() {
          return ctx.onWindowResize();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService])],
    decls: 5,
    vars: 11,
    consts: [[1, "sidebar", 3, "ngClass", "mouseleave"], [1, "nav", "nav-sidebar", "flex-column"], ["pointerEventsMethod", "scrollbar"], ["class", "sidebar-list-item", 4, "ngFor", "ngForOf"], [1, "sidebar-hover-elem", 3, "ngStyle", "ngClass"], [1, "sidebar-list-item"], ["class", "sidebar-list-link", 3, "mouseenter", 4, "ngIf"], ["routerLinkActive", "active-link", "class", "sidebar-list-link", 3, "routerLink", "routerLinkActiveOptions", "click", "mouseenter", 4, "ngIf"], ["class", "sidebar-list-link", 3, "click", "mouseenter", 4, "ngIf"], ["class", "sidebar-sublist", 4, "ngIf"], [1, "sidebar-list-link", 3, "mouseenter"], ["routerLinkActive", "active-link", 1, "sidebar-list-link", 3, "routerLink", "routerLinkActiveOptions", "click", "mouseenter"], [1, "sidebar-list-link", 3, "click", "mouseenter"], [1, "fa", "fa-angle-down"], [1, "sidebar-sublist"], ["class", "sidebar-sublist-item", 4, "ngFor", "ngForOf"], [1, "sidebar-sublist-item"], ["class", "sidebar-list-link subitem-submenu-link", 3, "click", "mouseenter", 4, "ngIf"], ["class", "sidebar-sublist subitem-submenu-list", 4, "ngIf"], ["routerLinkActive", "active-link", 3, "routerLink", "routerLinkActiveOptions", "click", "mouseenter", 4, "ngIf"], [3, "mouseenter", 4, "ngIf"], [1, "sidebar-list-link", "subitem-submenu-link", 3, "click", "mouseenter"], [1, "sidebar-sublist", "subitem-submenu-list"], [3, "mouseenter", 4, "ngFor", "ngForOf"], [3, "mouseenter"], ["routerLinkActive", "active-link", 3, "routerLink", "mouseenter", 4, "ngIf"], ["routerLinkActive", "active-link", 3, "routerLink", "mouseenter"], ["routerLinkActive", "active-link", 3, "routerLink", "routerLinkActiveOptions", "click", "mouseenter"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseleave", function MenuComponent_Template_div_mouseleave_0_listener() {
          return ctx.hoverElemTop = -200;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 1)(2, "ng-scrollbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_3_Template, 5, 4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, ctx.isMenuCollapsed));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](6, _c3, ctx.hoverElemTop + "px", ctx.hoverElemHeight + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c4, ctx.showHoverElem));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_5__.NgScrollbar, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
    styles: ["/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n\n/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n\n.sidebar {\n  background: #344154;\n  height: 100%;\n  min-height: 100%;\n  position: fixed;\n  width: 230px;\n  overflow: hidden;\n  display: block;\n  z-index: 9;\n  margin-top: 60px;\n}\n.sidebar.menu-collapsed {\n  width: 50px;\n}\n.sidebar.menu-collapsed a.sidebar-list-link b {\n  display: none;\n}\n.sidebar.menu-collapsed .sidebar-sublist {\n  position: absolute;\n  top: -1px;\n  left: 52px;\n  width: 0;\n  display: block;\n  overflow: hidden;\n}\n.sidebar .nav {\n  height: 100%;\n  padding-bottom: 60px;\n  flex-wrap: nowrap;\n}\n\n.sidebar-list-item {\n  display: block;\n  width: 100%;\n  position: relative;\n  float: none;\n  padding: 0;\n  border-bottom: 1px solid rgba(36, 45, 58, 0.5);\n  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);\n}\n\na.sidebar-list-link {\n  display: block;\n  height: 42px;\n  padding-left: 18px !important;\n  padding-top: 0 !important;\n  text-shadow: none;\n  font-size: 13px;\n  letter-spacing: 0.02em;\n  text-decoration: none;\n  color: #fff;\n  line-height: 42px;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\na.sidebar-list-link i {\n  margin-right: 16px;\n  width: 16px;\n  display: inline-block;\n}\na.sidebar-list-link b {\n  display: block;\n  opacity: 1;\n  width: 14px;\n  height: 14px;\n  line-height: 14px;\n  text-shadow: none;\n  font-size: 18px;\n  position: absolute;\n  right: 10px;\n  top: 14px;\n  padding: 0;\n  text-align: center;\n  color: #fff;\n  transition: transform 0.2s linear;\n}\na.sidebar-list-link:hover {\n  background-color: #242D3A;\n}\n\n.sidebar-list-item.sidebar-item-expanded > .sidebar-list-link b,\n.sidebar-sublist-item.sidebar-item-expanded > .sidebar-list-link b {\n  transform: rotate(180deg);\n}\n\n.sidebar-sublist {\n  display: none;\n  padding: 0;\n  list-style: none;\n  position: relative;\n}\n.sidebar-sublist li {\n  display: block;\n  float: none;\n  padding: 0;\n  border-bottom: none;\n  position: relative;\n  border-bottom: 1px solid rgba(36, 45, 58, 0.7);\n}\n.sidebar-sublist li:last-child {\n  border-bottom: none;\n}\n.sidebar-sublist li a {\n  display: block;\n  text-shadow: none;\n  font-size: 13px;\n  text-decoration: none;\n  color: #fff;\n  padding-left: 50px !important;\n  height: 42px;\n  line-height: 42px;\n}\n.sidebar-sublist li a:before {\n  font-family: FontAwesome;\n  content: \"\\f1db\";\n  margin-right: 10px;\n  font-size: 10px;\n}\n.sidebar-sublist li a:hover {\n  background-color: #242D3A;\n}\n.sidebar-sublist .subitem-submenu-list li {\n  border-top: 1px solid rgba(36, 45, 58, 0.7);\n}\n.sidebar-sublist .subitem-submenu-list li a {\n  padding-left: 65px !important;\n}\n\n.sidebar-item-expanded > ul.sidebar-sublist {\n  background-color: rgba(36, 45, 58, 0.5);\n}\n\n.subitem-submenu-link .fa {\n  top: 14px;\n}\n\n.sidebar-hover-elem {\n  width: 4px;\n  background: #637CA0;\n  position: absolute;\n  top: -150px;\n  left: 0;\n  transition: all 0.2s ease;\n  transition-property: top, height;\n  height: 36px;\n  display: block;\n}\n\n.active-link {\n  background-color: #637CA0;\n}\n\n@media (max-width: 544px) {\n  .sidebar.menu-collapsed {\n    width: 0;\n  }\n  .sidebar-hover-elem, .sidebar-select-elem {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc3R5bGVzL3NraW5zL19ibHVlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9TY2hlZHVsaW5nJTIwU29mdHdhcmUvc3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQUE7QUNhQSxvQkFBQTtBQU1BLGtCQUFBO0FBSUEsaUJBQUE7QUFLQSxrQkFBQTtBQUtBLG1CQUFBO0FBS0EsZ0JBQUE7QUFTQSx1QkFBQTtBQThDQTtFQUNJLDJRQUFBO0VBQ0EsYUFBQTtBQ3BGSjs7QUZYQSw4Q0FBQTtBQ2FBLG9CQUFBO0FBTUEsa0JBQUE7QUFJQSxpQkFBQTtBQUtBLGtCQUFBO0FBS0EsbUJBQUE7QUFLQSxnQkFBQTtBQVNBLHVCQUFBO0FBOENBO0VBQ0ksMlFBQUE7RUFDQSxhQUFBO0FDdkVKOztBQ3JCQTtFQUNJLG1CSEljO0VHSGQsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlGcUJZO0VFcEJaLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBRHdCSjtBQ3ZCSTtFQUNJLFdBQUE7QUR5QlI7QUN4QlE7RUFDSSxhQUFBO0FEMEJaO0FDeEJRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUQwQlo7QUN2Qkk7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFFQSxpQkFBQTtBRHlCUjs7QUNyQkE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw4Q0FBQTtFQUNBLDhDQUFBO0FEd0JKOztBQ3JCQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxXSHBEVztFR3FEWCxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBS0EseUJBQUE7QUR3Qko7QUN2Qkk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRHlCUjtBQ3ZCSTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXSGhGTztFR3FGUCxpQ0FBQTtBRHlCUjtBQ3ZCSTtFQUNLLHlCSHpGSTtBRWtIYjs7QUNyQkE7O0VBTUkseUJBQUE7QUR3Qko7O0FDckJBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEd0JKO0FDdkJJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0FEeUJSO0FDeEJRO0VBQ0ksbUJBQUE7QUQwQlo7QUN4QlE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXSHpIRztFRzBISCw2QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRDBCWjtBQ3pCWTtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUQyQmhCO0FDekJZO0VBQ0kseUJIcklIO0FFZ0tiO0FDdkJJO0VBQ0ksMkNBQUE7QUR5QlI7QUN4QlE7RUFDSSw2QkFBQTtBRDBCWjs7QUNyQkE7RUFDSSx1Q0FBQTtBRHdCSjs7QUNyQkE7RUFDSSxTQUFBO0FEd0JKOztBQ3JCQTtFQUNFLFVBQUE7RUFDQSxtQkhuSjZCO0VHb0o3QixrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBS0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FEd0JGOztBQ2xCQTtFQUNJLHlCSHJLMkI7QUUwTC9COztBQ2pCQTtFQUNFO0lBQ0UsUUFBQTtFRG9CRjtFQ2xCQTtJQUNFLGFBQUE7RURvQkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqIENvbG9ycyAocmVjb21tZW5kZWQgdXNlIEhFWCBjb2xvcnMpICoqKiovIFxyXG4kbWFpbi1jb2xvcjogIzI0MkQzQTsgXHJcbiRkZWZhdWx0LWNvbG9yOiNmZmY7IFxyXG4kZGFyay1jb2xvcjogIzAwMDtcclxuXHJcbiRib2R5LWJnLWdyYWRpZW50LWNvbG9yLTE6ICMxZTU3OTk7XHJcbiRib2R5LWJnLWdyYWRpZW50LWNvbG9yLTI6ICAjYTVjOWU1O1xyXG5cclxuJHNpZGViYXItYmctY29sb3I6IzM0NDE1NDtcclxuJHNpZGViYXItaXRlbS1hY3RpdmUtYmctY29sb3I6ICM2MzdDQTA7Ly8gIzAwOTljYztcclxuXHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzAyNGE4ODtcclxuJHN1Y2Nlc3MtY29sb3I6ICMyZDkyMmQ7XHJcbiRpbmZvLWNvbG9yOiAjMjQ4ZGFkO1xyXG4kd2FybmluZy1jb2xvcjogI2Y3OWExNztcclxuJGRhbmdlci1jb2xvcjogI2JmMTcyNTsiLCJAaW1wb3J0IFwic2tpbnMvYmx1ZVwiO1xyXG5cclxuJGJvZHktYmctY29sb3I6ICNlOWViZWU7XHJcbiR0ZXh0LWNvbG9yOiAjMjQyNDI0O1xyXG4kZ3JheS1kYXJrOiAjMjkyYjJjO1xyXG4kZ3JheTogIzU1NTtcclxuJGdyYXktbGlnaHQ6ICNjY2M7XHJcbiRncmF5LWxpZ2h0ZXI6ICNlY2VlZWY7XHJcblxyXG4kdGFibGUtYmctYWN0aXZlOiByZ2JhKCMwMDAsLjA3NSk7XHJcbiR0YWJsZS1ib3JkZXItd2lkdGg6IDFweDtcclxuJHRhYmxlLWJvcmRlci1jb2xvcjogJGdyYXktbGlnaHRlcjtcclxuXHJcbi8qKioqIEFwcCByb290cyAqKioqL1xyXG4kYXNzZXRzLXJvb3Q6ICd+L2Fzc2V0cy8nO1xyXG4kaW1hZ2VzLXJvb3Q6ICRhc3NldHMtcm9vdCArICdpbWcvJztcclxuJGZvbnRzLXJvb3Q6ICRhc3NldHMtcm9vdCArICdmb250cy8nO1xyXG5cclxuXHJcbi8qKioqIEdlbmVyYWwgKioqKi9cclxuJGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHJcblxyXG4vKioqKiBOYXZiYXIgKioqKi9cclxuJG5hdmJhci10ZXh0LWNvbG9yOiAkZGVmYXVsdC1jb2xvcjtcclxuJG5hdmJhci1oZWlnaHQ6IDYwcHg7XHJcblxyXG5cclxuLyoqKiogU2lkZWJhciAqKioqL1xyXG4kc2lkZWJhci13aWR0aDogMjMwcHg7XHJcblxyXG5cclxuXHJcbi8qKioqIFByb2dyZXNzICoqKiovXHJcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAwO1xyXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAyMHB4O1xyXG5cclxuXHJcbi8qKioqIEZvbnRzICoqKiovXHJcbiRmb250LXRoaW46IDEwMDtcclxuJGZvbnQtbGlnaHQ6IDMwMDtcclxuJGZvbnQtbm9ybWFsOiA0MDA7XHJcbiRmb250LWJvbGQ6IDUwMDtcclxuJGZvbnQtYm9sZGVyOiA3MDA7XHJcbiRmb250LXVsdHJhQm9sZDogOTAwO1xyXG5cclxuXHJcbi8qKioqIFNvY2lhbCBpY29ucyAqKioqL1xyXG4kZmFjZWJvb2stY29sb3I6ICMzYjU5OTg7XHJcbiR0d2l0dGVyLWNvbG9yOiAjNTVhY2VlO1xyXG4kaW5zdGFncmFtLWNvbG9yOiAjOGEzYWI5O1xyXG4kcGludGVyZXN0LWNvbG9yOiAjYzkyMjI4OyBcclxuJGdvb2dsZS1jb2xvcjogI2RkNGIzOTtcclxuJGxpbmtlZGluLWNvbG9yOiAjMDE3N0I1O1xyXG4kZ2l0aHViLWNvbG9yOiAjNmI2YjZiO1xyXG4kc3RhY2tvdmVyZmxvdy1jb2xvcjogIzJGOTZFODtcclxuJGRyaWJibGUtY29sb3I6ICNGMjY3OTg7XHJcbiRiZWhhY2UtY29sb3I6ICMwMDkzRkE7XHJcblxyXG4vLy0tLS0tLS0tZm9yIHByZXZlbnQgYXdlc29tZS1ib290c3RyYXAtY2hlY2tib3ggZXJyb3JzLS0tLS0tLS0tXHJcbi8vQGltcG9ydCBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcclxuLy9AaW1wb3J0IFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGluc1wiO1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiByZ2JhKCMwMDAsLjE1KTtcclxuJGVuYWJsZS10cmFuc2l0aW9uczogdHJ1ZTtcclxuJGlucHV0LWNvbG9yOiAkZ3JheTtcclxuJGlucHV0LWJnLWRpc2FibGVkOiAkZ3JheS1saWdodGVyO1xyXG4kYnJhbmQtcHJpbWFyeTogJHByaW1hcnktY29sb3I7XHJcbiRicmFuZC1zdWNjZXNzOiAkc3VjY2Vzcy1jb2xvcjtcclxuJGJyYW5kLWluZm86ICRpbmZvLWNvbG9yO1xyXG4kYnJhbmQtd2FybmluZzogJHdhcm5pbmctY29sb3I7XHJcbiRicmFuZC1kYW5nZXI6ICRkYW5nZXItY29sb3I7XHJcbiRicmFuZC1pbnZlcnNlOiAkZ3JheS1kYXJrO1xyXG5cclxuXHJcblxyXG5cclxuLy9TZXQgdmFyaWFibGVzIHRvIGJlIGFjY2Vzc2libGUgZm9yIEpTXHJcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy10by1qcy9zYXNzL3Nhc3MtdG8tanNcIjtcclxuXHJcbiR2YXJpYWJsZXNNYXA6ICggXHJcbiAgbWFpbi1jb2xvcjogJG1haW4tY29sb3IsXHJcbiAgZGVmYXVsdC1jb2xvcjogJGRlZmF1bHQtY29sb3IsXHJcbiAgZGFyay1jb2xvcjogJGRhcmstY29sb3IsXHJcbiAgcHJpbWFyeS1jb2xvcjogJHByaW1hcnktY29sb3IsXHJcbiAgc3VjY2Vzcy1jb2xvcjogJHN1Y2Nlc3MtY29sb3IsXHJcbiAgd2FybmluZy1jb2xvcjogJHdhcm5pbmctY29sb3IsXHJcbiAgZGFuZ2VyLWNvbG9yOiAkZGFuZ2VyLWNvbG9yLFxyXG4gIGluZm8tY29sb3I6ICRpbmZvLWNvbG9yLFxyXG4gIHNpZGViYXItYmctY29sb3I6ICRzaWRlYmFyLWJnLWNvbG9yLFxyXG4gIGdyYXk6ICRncmF5LFxyXG4gIGdyYXktbGlnaHQ6ICRncmF5LWxpZ2h0XHJcbik7XHJcblxyXG5ib2R5OjphZnRlciB7XHJcbiAgICBjb250ZW50OiBzYXNzVG9KcygkdmFyaWFibGVzTWFwKTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiIsIi8qKioqIENvbG9ycyAocmVjb21tZW5kZWQgdXNlIEhFWCBjb2xvcnMpICoqKiovXG4vKioqKiBBcHAgcm9vdHMgKioqKi9cbi8qKioqIEdlbmVyYWwgKioqKi9cbi8qKioqIE5hdmJhciAqKioqL1xuLyoqKiogU2lkZWJhciAqKioqL1xuLyoqKiogUHJvZ3Jlc3MgKioqKi9cbi8qKioqIEZvbnRzICoqKiovXG4vKioqKiBTb2NpYWwgaWNvbnMgKioqKi9cbmJvZHk6OmFmdGVyIHtcbiAgY29udGVudDogJ3tcIm1haW4tY29sb3JcIjpcIiMyNDJEM0FcIixcImRlZmF1bHQtY29sb3JcIjpcIiNmZmZcIixcImRhcmstY29sb3JcIjpcIiMwMDBcIixcInByaW1hcnktY29sb3JcIjpcIiMwMjRhODhcIixcInN1Y2Nlc3MtY29sb3JcIjpcIiMyZDkyMmRcIixcIndhcm5pbmctY29sb3JcIjpcIiNmNzlhMTdcIixcImRhbmdlci1jb2xvclwiOlwiI2JmMTcyNVwiLFwiaW5mby1jb2xvclwiOlwiIzI0OGRhZFwiLFwic2lkZWJhci1iZy1jb2xvclwiOlwiIzM0NDE1NFwiLFwiZ3JheVwiOlwiIzU1NVwiLFwiZ3JheS1saWdodFwiOlwiI2NjY1wifSc7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKioqIENvbG9ycyAocmVjb21tZW5kZWQgdXNlIEhFWCBjb2xvcnMpICoqKiovXG4vKioqKiBBcHAgcm9vdHMgKioqKi9cbi8qKioqIEdlbmVyYWwgKioqKi9cbi8qKioqIE5hdmJhciAqKioqL1xuLyoqKiogU2lkZWJhciAqKioqL1xuLyoqKiogUHJvZ3Jlc3MgKioqKi9cbi8qKioqIEZvbnRzICoqKiovXG4vKioqKiBTb2NpYWwgaWNvbnMgKioqKi9cbmJvZHk6OmFmdGVyIHtcbiAgY29udGVudDogJ3tcIm1haW4tY29sb3JcIjpcIiMyNDJEM0FcIixcImRlZmF1bHQtY29sb3JcIjpcIiNmZmZcIixcImRhcmstY29sb3JcIjpcIiMwMDBcIixcInByaW1hcnktY29sb3JcIjpcIiMwMjRhODhcIixcInN1Y2Nlc3MtY29sb3JcIjpcIiMyZDkyMmRcIixcIndhcm5pbmctY29sb3JcIjpcIiNmNzlhMTdcIixcImRhbmdlci1jb2xvclwiOlwiI2JmMTcyNVwiLFwiaW5mby1jb2xvclwiOlwiIzI0OGRhZFwiLFwic2lkZWJhci1iZy1jb2xvclwiOlwiIzM0NDE1NFwiLFwiZ3JheVwiOlwiIzU1NVwiLFwiZ3JheS1saWdodFwiOlwiI2NjY1wifSc7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaWRlYmFyIHtcbiAgYmFja2dyb3VuZDogIzM0NDE1NDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IDk7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG4uc2lkZWJhci5tZW51LWNvbGxhcHNlZCB7XG4gIHdpZHRoOiA1MHB4O1xufVxuLnNpZGViYXIubWVudS1jb2xsYXBzZWQgYS5zaWRlYmFyLWxpc3QtbGluayBiIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zaWRlYmFyLm1lbnUtY29sbGFwc2VkIC5zaWRlYmFyLXN1Ymxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTFweDtcbiAgbGVmdDogNTJweDtcbiAgd2lkdGg6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNpZGViYXIgLm5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbi5zaWRlYmFyLWxpc3QtaXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMzYsIDQ1LCA1OCwgMC41KTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuYS5zaWRlYmFyLWxpc3QtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDQycHg7XG4gIHBhZGRpbmctbGVmdDogMThweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogNDJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5hLnNpZGViYXItbGlzdC1saW5rIGkge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5hLnNpZGViYXItbGlzdC1saW5rIGIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMTtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTRweDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgLW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xufVxuYS5zaWRlYmFyLWxpc3QtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDJEM0E7XG59XG5cbi5zaWRlYmFyLWxpc3QtaXRlbS5zaWRlYmFyLWl0ZW0tZXhwYW5kZWQgPiAuc2lkZWJhci1saXN0LWxpbmsgYixcbi5zaWRlYmFyLXN1Ymxpc3QtaXRlbS5zaWRlYmFyLWl0ZW0tZXhwYW5kZWQgPiAuc2lkZWJhci1saXN0LWxpbmsgYiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLnNpZGViYXItc3VibGlzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zaWRlYmFyLXN1Ymxpc3QgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMzYsIDQ1LCA1OCwgMC43KTtcbn1cbi5zaWRlYmFyLXN1Ymxpc3QgbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uc2lkZWJhci1zdWJsaXN0IGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG59XG4uc2lkZWJhci1zdWJsaXN0IGxpIGE6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICBjb250ZW50OiBcIlxcZjFkYlwiO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5zaWRlYmFyLXN1Ymxpc3QgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDJEM0E7XG59XG4uc2lkZWJhci1zdWJsaXN0IC5zdWJpdGVtLXN1Ym1lbnUtbGlzdCBsaSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDM2LCA0NSwgNTgsIDAuNyk7XG59XG4uc2lkZWJhci1zdWJsaXN0IC5zdWJpdGVtLXN1Ym1lbnUtbGlzdCBsaSBhIHtcbiAgcGFkZGluZy1sZWZ0OiA2NXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlYmFyLWl0ZW0tZXhwYW5kZWQgPiB1bC5zaWRlYmFyLXN1Ymxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCA0NSwgNTgsIDAuNSk7XG59XG5cbi5zdWJpdGVtLXN1Ym1lbnUtbGluayAuZmEge1xuICB0b3A6IDE0cHg7XG59XG5cbi5zaWRlYmFyLWhvdmVyLWVsZW0ge1xuICB3aWR0aDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjNjM3Q0EwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE1MHB4O1xuICBsZWZ0OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgaGVpZ2h0O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWN0aXZlLWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM3Q0EwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTQ0cHgpIHtcbiAgLnNpZGViYXIubWVudS1jb2xsYXBzZWQge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIC5zaWRlYmFyLWhvdmVyLWVsZW0sIC5zaWRlYmFyLXNlbGVjdC1lbGVtIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9taXhpbnNcIjtcclxuXHJcbi5zaWRlYmFye1xyXG4gICAgYmFja2dyb3VuZDogJHNpZGViYXItYmctY29sb3I7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6ICRzaWRlYmFyLXdpZHRoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAmLm1lbnUtY29sbGFwc2Vke1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGEuc2lkZWJhci1saXN0LWxpbmsgYntcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2lkZWJhci1zdWJsaXN0e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTFweDtcclxuICAgICAgICAgICAgbGVmdDogNTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2e1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgICAgICAtbXMtZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyLWxpc3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJG1haW4tY29sb3IsMC41KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgMCByZ2JhKCRkZWZhdWx0LWNvbG9yLDAuMSk7XHJcbn1cclxuXHJcbmEuc2lkZWJhci1saXN0LWxpbmsge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjokZGVmYXVsdC1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIGIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgdG9wOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiRkZWZhdWx0LWNvbG9yO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcclxuICAgICAgICAtbXMtdHJhbnNpdGlvbjogLW1zLXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiAtby10cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyLWxpc3QtaXRlbS5zaWRlYmFyLWl0ZW0tZXhwYW5kZWQ+LnNpZGViYXItbGlzdC1saW5rIGIsXHJcbi5zaWRlYmFyLXN1Ymxpc3QtaXRlbS5zaWRlYmFyLWl0ZW0tZXhwYW5kZWQ+LnNpZGViYXItbGlzdC1saW5rIGJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4uc2lkZWJhci1zdWJsaXN0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJG1haW4tY29sb3IsMC43KTtcclxuICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogJGRlZmF1bHQtY29sb3I7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweCAhaW1wb3J0YW50OyAgICAgIFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4OyBcclxuICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZjFkYlwiO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN1Yml0ZW0tc3VibWVudS1saXN0IGxpIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgkbWFpbi1jb2xvciwgMC43KTtcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDY1cHggIWltcG9ydGFudDsgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2lkZWJhci1pdGVtLWV4cGFuZGVkPnVsLnNpZGViYXItc3VibGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRtYWluLWNvbG9yLCAwLjUpO1xyXG59XHJcblxyXG4uc3ViaXRlbS1zdWJtZW51LWxpbmsgLmZhIHtcclxuICAgIHRvcDogMTRweDtcclxufVxyXG5cclxuLnNpZGViYXItaG92ZXItZWxlbXtcclxuICB3aWR0aDogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICRzaWRlYmFyLWl0ZW0tYWN0aXZlLWJnLWNvbG9yO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xNTBweDtcclxuICBsZWZ0OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgaGVpZ2h0O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4vLyAuc2lkZWJhci5tZW51LWNvbGxhcHNlZCAuc2lkZWJhci1ob3Zlci1lbGVte1xyXG4vLyAgICAgIGxlZnQ6IDQ2cHg7XHJcbi8vIH1cclxuXHJcbi5hY3RpdmUtbGlua3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzaWRlYmFyLWl0ZW0tYWN0aXZlLWJnLWNvbG9yO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU0NHB4KSB7XHJcbiAgLnNpZGViYXIubWVudS1jb2xsYXBzZWQge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG4gIC5zaWRlYmFyLWhvdmVyLWVsZW0sIC5zaWRlYmFyLXNlbGVjdC1lbGVtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 67091:
/*!*******************************************************!*\
  !*** ./src/app/theme/components/menu/menu.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ 51501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);


class MenuService {
  getMenuItems() {
    return _menu__WEBPACK_IMPORTED_MODULE_0__.menuItems;
  }
  static #_ = this.ɵfac = function MenuService_Factory(t) {
    return new (t || MenuService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MenuService,
    factory: MenuService.ɵfac
  });
}


/***/ }),

/***/ 51501:
/*!***********************************************!*\
  !*** ./src/app/theme/components/menu/menu.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuItems": () => (/* binding */ menuItems)
/* harmony export */ });
const menuItems = [{
  title: 'Dashboard',
  routerLink: 'dashboard',
  icon: 'fa-home',
  selected: false,
  expanded: false,
  order: 0
}, {
  title: 'Reports',
  routerLink: 'maps',
  icon: 'fa-home',
  selected: false,
  expanded: false,
  order: 1
}, {
  title: 'Admin Panel',
  routerLink: 'tables',
  icon: 'fa-home',
  selected: false,
  expanded: false,
  order: 2
}];

/***/ }),

/***/ 93833:
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesComponent": () => (/* binding */ MessagesComponent)
/* harmony export */ });
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.service */ 30660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _directives_slim_scroll_slim_scroll_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/slim-scroll/slim-scroll.directive */ 27460);
/* harmony import */ var _pipes_profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/profilePicture/profilePicture.pipe */ 77965);






function MessagesComponent_a_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "profilePicture");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 20)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const message_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, message_r3.name), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", message_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", message_r3.time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](message_r3.text);
  }
}
function MessagesComponent_a_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "profilePicture");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 20)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const notification_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", notification_r4.image || _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, notification_r4.name), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", notification_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", notification_r4.time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](notification_r4.text);
  }
}
function MessagesComponent_a_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 18)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const task_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", task_r5.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](task_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("progress-bar bg-", task_r5.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", task_r5.value);
  }
}
const _c0 = function () {
  return {
    height: 250
  };
};
class MessagesComponent {
  constructor(_messagesService) {
    this._messagesService = _messagesService;
    this.messages = _messagesService.getMessages();
    this.notifications = _messagesService.getNotifications();
    this.tasks = _messagesService.getTasks();
  }
  static #_ = this.ɵfac = function MessagesComponent_Factory(t) {
    return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_messages_service__WEBPACK_IMPORTED_MODULE_0__.MessagesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MessagesComponent,
    selectors: [["az-messages"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_messages_service__WEBPACK_IMPORTED_MODULE_0__.MessagesService])],
    decls: 61,
    vars: 9,
    consts: [[1, "notifications"], [1, "dropdown", "message-menu"], ["href", "", "data-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "message"], [1, "fa", "fa-envelope-o"], [1, "pulsate"], [1, "top-dropdown-menu", "dropdown-menu"], [1, "dropdown-arr"], [1, "header", "clearfix"], ["href", "javascript:void(0);", 1, "transition"], ["slim-scroll", "", 1, "list", 3, "slimScrollOptions"], ["href", "", "class", "transition", 4, "ngFor", "ngForOf"], [1, "footer"], [1, "dropdown", "notification-menu"], ["href", "", "data-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "notification"], [1, "fa", "fa-bell-o"], [1, "dropdown", "task-menu"], ["href", "", "data-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "task"], [1, "fa", "fa-tasks"], ["href", "", 1, "transition"], [3, "src"], [1, "list-content"], [1, "pull-right"], [1, "fa", "fa-clock-o"], [1, "progress", "progress-sm"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100"]],
    template: function MessagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Mark All as Read");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, MessagesComponent_a_17_Template, 11, 6, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11)(19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "View all messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li", 12)(22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 7)(30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Mark All as Read");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, MessagesComponent_a_37_Template, 10, 6, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 11)(39, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "View all notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "li", 15)(42, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 7)(50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Mark All as Read");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, MessagesComponent_a_57_Template, 7, 7, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 11)(59, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "View all tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("slimScrollOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("slimScrollOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("slimScrollOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tasks);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _directives_slim_scroll_slim_scroll_directive__WEBPACK_IMPORTED_MODULE_1__.SlimScroll, _pipes_profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_2__.ProfilePicturePipe],
    styles: ["/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n\n/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n@keyframes pulsate {\n  30% {\n    transform: scale(0.1, 0.1);\n    opacity: 0;\n  }\n  35% {\n    opacity: 1;\n  }\n  40% {\n    transform: scale(1.2, 1.2);\n    opacity: 0;\n  }\n}\n.notifications {\n  margin-right: 10px;\n  margin-top: 10px;\n  list-style: none;\n  padding-left: 0;\n  font-size: 14px;\n}\n.notifications li {\n  display: inline-block;\n  margin-right: 30px;\n}\n.notifications li a {\n  color: #fff;\n}\n.notifications li a:hover {\n  text-decoration: none;\n}\n.notifications li a::after {\n  display: none;\n}\n.notifications li a.dropdown-toggle span {\n  display: inline-block;\n  min-width: 10px;\n  padding: 2px 4px 2px 4px;\n  color: #fff;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  border-radius: 13px;\n  text-shadow: none;\n  line-height: 11px;\n  position: absolute;\n  top: -5px;\n  right: -14px;\n  font-size: 11px;\n}\n.notifications li a.message span {\n  background-color: #0099cc;\n}\n.notifications li a.notification span {\n  background-color: #e63e4d;\n}\n.notifications li a.task span {\n  background-color: #00a65a;\n}\n.notifications li a .pulsate {\n  border-radius: 100px;\n  height: 40px;\n  width: 40px;\n  position: absolute;\n  top: -18px;\n  right: -27px;\n  animation: pulsate 8s ease-out;\n  animation-iteration-count: infinite;\n  opacity: 0;\n}\n.notifications li a.message .pulsate {\n  border: 1px solid #0099cc;\n}\n.notifications li a.notification .pulsate {\n  border: 1px solid #e63e4d;\n}\n.notifications li a.task .pulsate {\n  border: 1px solid #00a65a;\n}\n\n.top-dropdown-menu {\n  width: 316px;\n  top: 38px !important;\n  left: auto !important;\n  right: -30px !important;\n  padding-top: 0;\n  padding-bottom: 0;\n  border-radius: 0;\n  transform: none !important;\n}\n.top-dropdown-menu i.dropdown-arr {\n  position: absolute;\n  top: -12px;\n  right: 30px;\n  display: block;\n  width: 0;\n  height: 0;\n  border: 6px solid transparent;\n  border-bottom-color: #fff;\n}\n.top-dropdown-menu:before {\n  content: none;\n}\n.top-dropdown-menu .header {\n  padding: 10px 12px;\n  font-size: 12px;\n  background-color: #242D3A;\n}\n.top-dropdown-menu .header span {\n  float: left;\n  color: rgba(255, 255, 255, 0.8);\n  letter-spacing: 0.03em;\n}\n.top-dropdown-menu .header a {\n  float: right;\n  margin-left: 12px;\n  text-decoration: none;\n  color: #637CA0;\n}\n.top-dropdown-menu .header a:hover {\n  color: rgba(255, 255, 255, 0.8);\n}\n.top-dropdown-menu .list {\n  max-height: 250px;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n.top-dropdown-menu .list a {\n  float: left;\n  width: 100%;\n  display: block;\n  padding: 10px;\n  border-bottom: 1px solid rgba(36, 45, 58, 0.1);\n}\n.top-dropdown-menu .list a:hover {\n  background: #f5f5f5;\n}\n.top-dropdown-menu .list a h3 {\n  font-size: 12px;\n  padding: 0;\n  margin: 0 0 4px 0;\n  color: #666666;\n}\n.top-dropdown-menu .list .progress {\n  margin-bottom: 2px;\n}\n.top-dropdown-menu .list span {\n  font-size: 10px;\n}\n.top-dropdown-menu .list .list-content {\n  float: right;\n  width: 235px;\n}\n.top-dropdown-menu .list img {\n  float: left;\n  width: 45px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n.top-dropdown-menu .list p {\n  color: #7d7d7d;\n  font-size: 11px;\n  margin: 0;\n}\n.top-dropdown-menu .footer {\n  padding: 10px 12px;\n  border-top: 1px solid #ccc;\n  font-size: 12px;\n  text-align: center;\n}\n.top-dropdown-menu .footer a {\n  color: #242D3A;\n  font-weight: bold;\n}\n.top-dropdown-menu .footer a:hover {\n  opacity: 0.8;\n  background: transparent;\n}\n\n@media (max-width: 543px) {\n  .message-menu .top-dropdown-menu.dropdown-menu {\n    right: -187px !important;\n  }\n  .message-menu .top-dropdown-menu.dropdown-menu i.dropdown-arr {\n    right: 187px;\n  }\n  .notification-menu .top-dropdown-menu.dropdown-menu {\n    right: -140px !important;\n  }\n  .notification-menu .top-dropdown-menu.dropdown-menu i.dropdown-arr {\n    right: 140px;\n  }\n  .task-menu .top-dropdown-menu.dropdown-menu {\n    right: -93px !important;\n  }\n  .task-menu .top-dropdown-menu.dropdown-menu i.dropdown-arr {\n    right: 93px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc3R5bGVzL3NraW5zL19ibHVlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9TY2hlZHVsaW5nJTIwU29mdHdhcmUvc3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUFBO0FDYUEsb0JBQUE7QUFNQSxrQkFBQTtBQUlBLGlCQUFBO0FBS0Esa0JBQUE7QUFLQSxtQkFBQTtBQUtBLGdCQUFBO0FBU0EsdUJBQUE7QUE4Q0E7RUFDSSwyUUFBQTtFQUNBLGFBQUE7QUNwRko7O0FGWEEsOENBQUE7QUNhQSxvQkFBQTtBQU1BLGtCQUFBO0FBSUEsaUJBQUE7QUFLQSxrQkFBQTtBQUtBLG1CQUFBO0FBS0EsZ0JBQUE7QUFTQSx1QkFBQTtBQThDQTtFQUNJLDJRQUFBO0VBQ0EsYUFBQTtBQ3ZFSjtBQ3FCQTtFQUNDO0lBQ0csMEJBQUE7SUFDQSxVQUFBO0VEcUJGO0VDbkJBO0lBQ0UsVUFBQTtFRHFCRjtFQ25CQTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFRHFCRjtBQUNGO0FDbEJBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QURvQko7QUNuQkk7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FEcUJSO0FDcEJRO0VBQ0ksV0huRUc7QUV5RmY7QUNyQlk7RUFDSSxxQkFBQTtBRHVCaEI7QUNyQlk7RUFDSSxhQUFBO0FEdUJoQjtBQ3JCWTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0g5RUQ7RUcrRUMsd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUR1QmhCO0FDckJZO0VBQ0kseUJBQUE7QUR1QmhCO0FDckJZO0VBQ0kseUJBQUE7QUR1QmhCO0FDckJZO0VBQ0kseUJBQUE7QUR1QmhCO0FDckJZO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFJQSw4QkFBQTtFQUlBLG1DQUFBO0VBQ0EsVUFBQTtBRHVCaEI7QUNyQlk7RUFDSSx5QkFBQTtBRHVCaEI7QUNyQlk7RUFDSSx5QkFBQTtBRHVCaEI7QUNyQlk7RUFDSSx5QkFBQTtBRHVCaEI7O0FDakJBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBS0EsMEJBQUE7QURvQko7QUNuQkk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBRHFCUjtBQ25CSTtFQUNJLGFBQUE7QURxQlI7QUNuQkk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkgvSks7QUVvTGI7QUNwQlE7RUFDSSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtBRHNCWjtBQ3BCUTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0hqS21CO0FFdUwvQjtBQ3JCWTtFQUNJLCtCQUFBO0FEdUJoQjtBQ25CSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRHFCUjtBQ3BCUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw4Q0FBQTtBRHNCWjtBQ3JCWTtFQUNJLG1CQUFBO0FEdUJoQjtBQ3JCWTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEdUJoQjtBQ25CUTtFQUVJLGtCQUFBO0FEb0JaO0FDbEJRO0VBQ0ksZUFBQTtBRG9CWjtBQ2xCUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FEb0JaO0FDbEJRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEb0JaO0FDbEJRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FEb0JaO0FDakJJO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRG1CUjtBQ2xCUTtFQUNJLGNIak9DO0VHa09ELGlCQUFBO0FEb0JaO0FDbkJZO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FEcUJoQjs7QUNmQTtFQUNJO0lBQ0ksd0JBQUE7RURrQk47RUNqQk07SUFDSSxZQUFBO0VEbUJWO0VDaEJFO0lBQ0ksd0JBQUE7RURrQk47RUNqQk07SUFDSSxZQUFBO0VEbUJWO0VDaEJFO0lBQ0ksdUJBQUE7RURrQk47RUNqQk07SUFDSSxXQUFBO0VEbUJWO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKiBDb2xvcnMgKHJlY29tbWVuZGVkIHVzZSBIRVggY29sb3JzKSAqKioqLyBcclxuJG1haW4tY29sb3I6ICMyNDJEM0E7IFxyXG4kZGVmYXVsdC1jb2xvcjojZmZmOyBcclxuJGRhcmstY29sb3I6ICMwMDA7XHJcblxyXG4kYm9keS1iZy1ncmFkaWVudC1jb2xvci0xOiAjMWU1Nzk5O1xyXG4kYm9keS1iZy1ncmFkaWVudC1jb2xvci0yOiAgI2E1YzllNTtcclxuXHJcbiRzaWRlYmFyLWJnLWNvbG9yOiMzNDQxNTQ7XHJcbiRzaWRlYmFyLWl0ZW0tYWN0aXZlLWJnLWNvbG9yOiAjNjM3Q0EwOy8vICMwMDk5Y2M7XHJcblxyXG5cclxuJHByaW1hcnktY29sb3I6ICMwMjRhODg7XHJcbiRzdWNjZXNzLWNvbG9yOiAjMmQ5MjJkO1xyXG4kaW5mby1jb2xvcjogIzI0OGRhZDtcclxuJHdhcm5pbmctY29sb3I6ICNmNzlhMTc7XHJcbiRkYW5nZXItY29sb3I6ICNiZjE3MjU7IiwiQGltcG9ydCBcInNraW5zL2JsdWVcIjtcclxuXHJcbiRib2R5LWJnLWNvbG9yOiAjZTllYmVlO1xyXG4kdGV4dC1jb2xvcjogIzI0MjQyNDtcclxuJGdyYXktZGFyazogIzI5MmIyYztcclxuJGdyYXk6ICM1NTU7XHJcbiRncmF5LWxpZ2h0OiAjY2NjO1xyXG4kZ3JheS1saWdodGVyOiAjZWNlZWVmO1xyXG5cclxuJHRhYmxlLWJnLWFjdGl2ZTogcmdiYSgjMDAwLC4wNzUpO1xyXG4kdGFibGUtYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRncmF5LWxpZ2h0ZXI7XHJcblxyXG4vKioqKiBBcHAgcm9vdHMgKioqKi9cclxuJGFzc2V0cy1yb290OiAnfi9hc3NldHMvJztcclxuJGltYWdlcy1yb290OiAkYXNzZXRzLXJvb3QgKyAnaW1nLyc7XHJcbiRmb250cy1yb290OiAkYXNzZXRzLXJvb3QgKyAnZm9udHMvJztcclxuXHJcblxyXG4vKioqKiBHZW5lcmFsICoqKiovXHJcbiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuLyoqKiogTmF2YmFyICoqKiovXHJcbiRuYXZiYXItdGV4dC1jb2xvcjogJGRlZmF1bHQtY29sb3I7XHJcbiRuYXZiYXItaGVpZ2h0OiA2MHB4O1xyXG5cclxuXHJcbi8qKioqIFNpZGViYXIgKioqKi9cclxuJHNpZGViYXItd2lkdGg6IDIzMHB4O1xyXG5cclxuXHJcblxyXG4vKioqKiBQcm9ncmVzcyAqKioqL1xyXG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogMDtcclxuJHByb2dyZXNzLWhlaWdodDogMjBweDtcclxuXHJcblxyXG4vKioqKiBGb250cyAqKioqL1xyXG4kZm9udC10aGluOiAxMDA7XHJcbiRmb250LWxpZ2h0OiAzMDA7XHJcbiRmb250LW5vcm1hbDogNDAwO1xyXG4kZm9udC1ib2xkOiA1MDA7XHJcbiRmb250LWJvbGRlcjogNzAwO1xyXG4kZm9udC11bHRyYUJvbGQ6IDkwMDtcclxuXHJcblxyXG4vKioqKiBTb2NpYWwgaWNvbnMgKioqKi9cclxuJGZhY2Vib29rLWNvbG9yOiAjM2I1OTk4O1xyXG4kdHdpdHRlci1jb2xvcjogIzU1YWNlZTtcclxuJGluc3RhZ3JhbS1jb2xvcjogIzhhM2FiOTtcclxuJHBpbnRlcmVzdC1jb2xvcjogI2M5MjIyODsgXHJcbiRnb29nbGUtY29sb3I6ICNkZDRiMzk7XHJcbiRsaW5rZWRpbi1jb2xvcjogIzAxNzdCNTtcclxuJGdpdGh1Yi1jb2xvcjogIzZiNmI2YjtcclxuJHN0YWNrb3ZlcmZsb3ctY29sb3I6ICMyRjk2RTg7XHJcbiRkcmliYmxlLWNvbG9yOiAjRjI2Nzk4O1xyXG4kYmVoYWNlLWNvbG9yOiAjMDA5M0ZBO1xyXG5cclxuLy8tLS0tLS0tLWZvciBwcmV2ZW50IGF3ZXNvbWUtYm9vdHN0cmFwLWNoZWNrYm94IGVycm9ycy0tLS0tLS0tLVxyXG4vL0BpbXBvcnQgXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcbi8vQGltcG9ydCBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnNcIjtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogcmdiYSgjMDAwLC4xNSk7XHJcbiRlbmFibGUtdHJhbnNpdGlvbnM6IHRydWU7XHJcbiRpbnB1dC1jb2xvcjogJGdyYXk7XHJcbiRpbnB1dC1iZy1kaXNhYmxlZDogJGdyYXktbGlnaHRlcjtcclxuJGJyYW5kLXByaW1hcnk6ICRwcmltYXJ5LWNvbG9yO1xyXG4kYnJhbmQtc3VjY2VzczogJHN1Y2Nlc3MtY29sb3I7XHJcbiRicmFuZC1pbmZvOiAkaW5mby1jb2xvcjtcclxuJGJyYW5kLXdhcm5pbmc6ICR3YXJuaW5nLWNvbG9yO1xyXG4kYnJhbmQtZGFuZ2VyOiAkZGFuZ2VyLWNvbG9yO1xyXG4kYnJhbmQtaW52ZXJzZTogJGdyYXktZGFyaztcclxuXHJcblxyXG5cclxuXHJcbi8vU2V0IHZhcmlhYmxlcyB0byBiZSBhY2Nlc3NpYmxlIGZvciBKU1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtdG8tanMvc2Fzcy9zYXNzLXRvLWpzXCI7XHJcblxyXG4kdmFyaWFibGVzTWFwOiAoIFxyXG4gIG1haW4tY29sb3I6ICRtYWluLWNvbG9yLFxyXG4gIGRlZmF1bHQtY29sb3I6ICRkZWZhdWx0LWNvbG9yLFxyXG4gIGRhcmstY29sb3I6ICRkYXJrLWNvbG9yLFxyXG4gIHByaW1hcnktY29sb3I6ICRwcmltYXJ5LWNvbG9yLFxyXG4gIHN1Y2Nlc3MtY29sb3I6ICRzdWNjZXNzLWNvbG9yLFxyXG4gIHdhcm5pbmctY29sb3I6ICR3YXJuaW5nLWNvbG9yLFxyXG4gIGRhbmdlci1jb2xvcjogJGRhbmdlci1jb2xvcixcclxuICBpbmZvLWNvbG9yOiAkaW5mby1jb2xvcixcclxuICBzaWRlYmFyLWJnLWNvbG9yOiAkc2lkZWJhci1iZy1jb2xvcixcclxuICBncmF5OiAkZ3JheSxcclxuICBncmF5LWxpZ2h0OiAkZ3JheS1saWdodFxyXG4pO1xyXG5cclxuYm9keTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogc2Fzc1RvSnMoJHZhcmlhYmxlc01hcCk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4iLCIvKioqKiBDb2xvcnMgKHJlY29tbWVuZGVkIHVzZSBIRVggY29sb3JzKSAqKioqL1xuLyoqKiogQXBwIHJvb3RzICoqKiovXG4vKioqKiBHZW5lcmFsICoqKiovXG4vKioqKiBOYXZiYXIgKioqKi9cbi8qKioqIFNpZGViYXIgKioqKi9cbi8qKioqIFByb2dyZXNzICoqKiovXG4vKioqKiBGb250cyAqKioqL1xuLyoqKiogU29jaWFsIGljb25zICoqKiovXG5ib2R5OjphZnRlciB7XG4gIGNvbnRlbnQ6ICd7XCJtYWluLWNvbG9yXCI6XCIjMjQyRDNBXCIsXCJkZWZhdWx0LWNvbG9yXCI6XCIjZmZmXCIsXCJkYXJrLWNvbG9yXCI6XCIjMDAwXCIsXCJwcmltYXJ5LWNvbG9yXCI6XCIjMDI0YTg4XCIsXCJzdWNjZXNzLWNvbG9yXCI6XCIjMmQ5MjJkXCIsXCJ3YXJuaW5nLWNvbG9yXCI6XCIjZjc5YTE3XCIsXCJkYW5nZXItY29sb3JcIjpcIiNiZjE3MjVcIixcImluZm8tY29sb3JcIjpcIiMyNDhkYWRcIixcInNpZGViYXItYmctY29sb3JcIjpcIiMzNDQxNTRcIixcImdyYXlcIjpcIiM1NTVcIixcImdyYXktbGlnaHRcIjpcIiNjY2NcIn0nO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKioqKiBDb2xvcnMgKHJlY29tbWVuZGVkIHVzZSBIRVggY29sb3JzKSAqKioqL1xuLyoqKiogQXBwIHJvb3RzICoqKiovXG4vKioqKiBHZW5lcmFsICoqKiovXG4vKioqKiBOYXZiYXIgKioqKi9cbi8qKioqIFNpZGViYXIgKioqKi9cbi8qKioqIFByb2dyZXNzICoqKiovXG4vKioqKiBGb250cyAqKioqL1xuLyoqKiogU29jaWFsIGljb25zICoqKiovXG5ib2R5OjphZnRlciB7XG4gIGNvbnRlbnQ6ICd7XCJtYWluLWNvbG9yXCI6XCIjMjQyRDNBXCIsXCJkZWZhdWx0LWNvbG9yXCI6XCIjZmZmXCIsXCJkYXJrLWNvbG9yXCI6XCIjMDAwXCIsXCJwcmltYXJ5LWNvbG9yXCI6XCIjMDI0YTg4XCIsXCJzdWNjZXNzLWNvbG9yXCI6XCIjMmQ5MjJkXCIsXCJ3YXJuaW5nLWNvbG9yXCI6XCIjZjc5YTE3XCIsXCJkYW5nZXItY29sb3JcIjpcIiNiZjE3MjVcIixcImluZm8tY29sb3JcIjpcIiMyNDhkYWRcIixcInNpZGViYXItYmctY29sb3JcIjpcIiMzNDQxNTRcIixcImdyYXlcIjpcIiM1NTVcIixcImdyYXktbGlnaHRcIjpcIiNjY2NcIn0nO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2F0ZSB7XG4gIDMwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSwgMC4xKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDM1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHB1bHNhdGUge1xuICAzMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjEsIDAuMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAzNSUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgcHVsc2F0ZSB7XG4gIDMwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjEsIDAuMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAzNSUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNDAlIHtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHB1bHNhdGUge1xuICAzMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMzUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLm5vdGlmaWNhdGlvbnMge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm5vdGlmaWNhdGlvbnMgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbi5ub3RpZmljYXRpb25zIGxpIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ub3RpZmljYXRpb25zIGxpIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubm90aWZpY2F0aW9ucyBsaSBhOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubm90aWZpY2F0aW9ucyBsaSBhLmRyb3Bkb3duLXRvZ2dsZSBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDEwcHg7XG4gIHBhZGRpbmc6IDJweCA0cHggMnB4IDRweDtcbiAgY29sb3I6ICNmZmY7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICByaWdodDogLTE0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5ub3RpZmljYXRpb25zIGxpIGEubWVzc2FnZSBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTljYztcbn1cbi5ub3RpZmljYXRpb25zIGxpIGEubm90aWZpY2F0aW9uIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYzZTRkO1xufVxuLm5vdGlmaWNhdGlvbnMgbGkgYS50YXNrIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNjVhO1xufVxuLm5vdGlmaWNhdGlvbnMgbGkgYSAucHVsc2F0ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE4cHg7XG4gIHJpZ2h0OiAtMjdweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNhdGUgOHMgZWFzZS1vdXQ7XG4gIC1tb3otYW5pbWF0aW9uOiBwdWxzYXRlIDhzIGVhc2Utb3V0O1xuICAtby1hbmltYXRpb246IHB1bHNhdGUgOHMgZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbjogcHVsc2F0ZSA4cyBlYXNlLW91dDtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBvcGFjaXR5OiAwO1xufVxuLm5vdGlmaWNhdGlvbnMgbGkgYS5tZXNzYWdlIC5wdWxzYXRlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwOTljYztcbn1cbi5ub3RpZmljYXRpb25zIGxpIGEubm90aWZpY2F0aW9uIC5wdWxzYXRlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2M2U0ZDtcbn1cbi5ub3RpZmljYXRpb25zIGxpIGEudGFzayAucHVsc2F0ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMGE2NWE7XG59XG5cbi50b3AtZHJvcGRvd24tbWVudSB7XG4gIHdpZHRoOiAzMTZweDtcbiAgdG9wOiAzOHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgcmlnaHQ6IC0zMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgLW1vei10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgLW1zLXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAtby10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG4udG9wLWRyb3Bkb3duLW1lbnUgaS5kcm9wZG93bi1hcnIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEycHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG59XG4udG9wLWRyb3Bkb3duLW1lbnU6YmVmb3JlIHtcbiAgY29udGVudDogbm9uZTtcbn1cbi50b3AtZHJvcGRvd24tbWVudSAuaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDJEM0E7XG59XG4udG9wLWRyb3Bkb3duLW1lbnUgLmhlYWRlciBzcGFuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG59XG4udG9wLWRyb3Bkb3duLW1lbnUgLmhlYWRlciBhIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzYzN0NBMDtcbn1cbi50b3AtZHJvcGRvd24tbWVudSAuaGVhZGVyIGE6aG92ZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xufVxuLnRvcC1kcm9wZG93bi1tZW51IC5saXN0IHtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi50b3AtZHJvcGRvd24tbWVudSAubGlzdCBhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMzYsIDQ1LCA1OCwgMC4xKTtcbn1cbi50b3AtZHJvcGRvd24tbWVudSAubGlzdCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cbi50b3AtZHJvcGRvd24tbWVudSAubGlzdCBhIGgzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCA0cHggMDtcbiAgY29sb3I6ICM2NjY2NjY7XG59XG4udG9wLWRyb3Bkb3duLW1lbnUgLmxpc3QgLnByb2dyZXNzIHtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuLnRvcC1kcm9wZG93bi1tZW51IC5saXN0IHNwYW4ge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4udG9wLWRyb3Bkb3duLW1lbnUgLmxpc3QgLmxpc3QtY29udGVudCB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDIzNXB4O1xufVxuLnRvcC1kcm9wZG93bi1tZW51IC5saXN0IGltZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udG9wLWRyb3Bkb3duLW1lbnUgLmxpc3QgcCB7XG4gIGNvbG9yOiAjN2Q3ZDdkO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbjogMDtcbn1cbi50b3AtZHJvcGRvd24tbWVudSAuZm9vdGVyIHtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udG9wLWRyb3Bkb3duLW1lbnUgLmZvb3RlciBhIHtcbiAgY29sb3I6ICMyNDJEM0E7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRvcC1kcm9wZG93bi1tZW51IC5mb290ZXIgYTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDNweCkge1xuICAubWVzc2FnZS1tZW51IC50b3AtZHJvcGRvd24tbWVudS5kcm9wZG93bi1tZW51IHtcbiAgICByaWdodDogLTE4N3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1lc3NhZ2UtbWVudSAudG9wLWRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVudSBpLmRyb3Bkb3duLWFyciB7XG4gICAgcmlnaHQ6IDE4N3B4O1xuICB9XG4gIC5ub3RpZmljYXRpb24tbWVudSAudG9wLWRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVudSB7XG4gICAgcmlnaHQ6IC0xNDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5ub3RpZmljYXRpb24tbWVudSAudG9wLWRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVudSBpLmRyb3Bkb3duLWFyciB7XG4gICAgcmlnaHQ6IDE0MHB4O1xuICB9XG4gIC50YXNrLW1lbnUgLnRvcC1kcm9wZG93bi1tZW51LmRyb3Bkb3duLW1lbnUge1xuICAgIHJpZ2h0OiAtOTNweCAhaW1wb3J0YW50O1xuICB9XG4gIC50YXNrLW1lbnUgLnRvcC1kcm9wZG93bi1tZW51LmRyb3Bkb3duLW1lbnUgaS5kcm9wZG93bi1hcnIge1xuICAgIHJpZ2h0OiA5M3B4O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9taXhpbnNcIjtcclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzYXRlIHtcclxuICAzMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSwgMC4xKTtcclxuICAgIG9wYWNpdHk6IDAuMDtcclxuICB9XHJcbiAgMzUlIHtcclxuICAgIG9wYWNpdHk6IDEuMDtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XHJcbiAgICBvcGFjaXR5OiAwLjA7XHJcbiAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgcHVsc2F0ZSB7XHJcbiAgMzAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjEsIDAuMSk7XHJcbiAgICBvcGFjaXR5OiAwLjA7XHJcbiAgfVxyXG4gIDM1JSB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xyXG4gICAgb3BhY2l0eTogMC4wO1xyXG4gIH1cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyBwdWxzYXRlIHtcclxuICAzMCUge1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjEsIDAuMSk7XHJcbiAgICBvcGFjaXR5OiAwLjA7XHJcbiAgfVxyXG4gIDM1JSB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcclxuICAgIG9wYWNpdHk6IDAuMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2F0ZSB7XHJcbiAzMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEsIDAuMSk7XHJcbiAgICBvcGFjaXR5OiAwLjA7XHJcbiAgfVxyXG4gIDM1JSB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcclxuICAgIG9wYWNpdHk6IDAuMDtcclxuICB9XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb25ze1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogJG5hdmJhci10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6OmFmdGVyeyBcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5kcm9wZG93bi10b2dnbGUgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNHB4IDJweCA0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJG5hdmJhci10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4OyAgICBcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogLTVweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLm1lc3NhZ2Ugc3BhbntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk5Y2M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5ub3RpZmljYXRpb24gc3BhbntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNjNlNGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi50YXNrIHNwYW57XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNjVhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wdWxzYXRlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0xOHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0yN3B4O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNhdGUgOHMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbjogcHVsc2F0ZSA4cyBlYXNlLW91dDtcclxuICAgICAgICAgICAgICAgIC1vLWFuaW1hdGlvbjogcHVsc2F0ZSA4cyBlYXNlLW91dDtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2F0ZSA4cyBlYXNlLW91dDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgLW8tYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLm1lc3NhZ2UgLnB1bHNhdGUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwOTljYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLm5vdGlmaWNhdGlvbiAucHVsc2F0ZXtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNjNlNGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi50YXNrIC5wdWxzYXRle1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwYTY1YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRvcC1kcm9wZG93bi1tZW51IHtcclxuICAgIHdpZHRoOiAzMTZweDtcclxuICAgIHRvcDogMzhweCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IC0zMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLW1zLXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLW8tdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7IFxyXG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBpLmRyb3Bkb3duLWFyciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTEycHg7XHJcbiAgICAgICAgcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlcjogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAmOmJlZm9yZXtcclxuICAgICAgICBjb250ZW50OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDsgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvcjtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKCRuYXZiYXItdGV4dC1jb2xvciwwLjgpO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogJHNpZGViYXItaXRlbS1hY3RpdmUtYmctY29sb3I7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgkbmF2YmFyLXRleHQtY29sb3IsMC44KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5saXN0IHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJG1haW4tY29sb3IsMC4xKTtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2dyZXNze1xyXG4gICAgICAgICAgLy8gIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXN0LWNvbnRlbnR7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgd2lkdGg6IDIzNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4OyBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDNweCkgeyBcclxuICAgIC5tZXNzYWdlLW1lbnUgLnRvcC1kcm9wZG93bi1tZW51LmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgIHJpZ2h0OiAtMTg3cHggIWltcG9ydGFudDtcclxuICAgICAgICBpLmRyb3Bkb3duLWFycntcclxuICAgICAgICAgICAgcmlnaHQ6IDE4N3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ub3RpZmljYXRpb24tbWVudSAudG9wLWRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgcmlnaHQ6IC0xNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGkuZHJvcGRvd24tYXJye1xyXG4gICAgICAgICAgICByaWdodDogMTQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRhc2stbWVudSAudG9wLWRyb3Bkb3duLW1lbnUuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgcmlnaHQ6IC05M3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaS5kcm9wZG93bi1hcnJ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA5M3B4O1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 30660:
/*!***************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesService": () => (/* binding */ MessagesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class MessagesService {
  constructor() {
    this._messages = [{
      name: 'ashley',
      text: 'After you get up and running, you can place Font Awesome icons just about...',
      time: '1 min ago'
    }, {
      name: 'michael',
      text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
      time: '2 hrs ago'
    }, {
      name: 'julia',
      text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
      time: '10 hrs ago'
    }, {
      name: 'bruno',
      text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
      time: '1 day ago'
    }, {
      name: 'tereza',
      text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
      time: '1 day ago'
    }, {
      name: 'adam',
      text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
      time: '2 days ago'
    }, {
      name: 'michael',
      text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
      time: '1 week ago'
    }];
    this._notifications = [{
      name: 'michael',
      text: 'Michael posted a new article.',
      time: '1 min ago'
    }, {
      name: 'adam',
      text: 'Adam changed his contact information.',
      time: '2 hrs ago'
    }, {
      image: '../assets/img/shopping-cart.svg',
      text: 'New orders received.',
      time: '5 hrs ago'
    }, {
      name: 'ashley',
      text: 'Ashley replied to your comment.',
      time: '1 day ago'
    }, {
      name: 'tereza',
      text: 'Today is Tereza\'s birthday.',
      time: '2 days ago'
    }, {
      image: '../assets/img/comments.svg',
      text: 'New comments on your post.',
      time: '3 days ago'
    }, {
      name: 'bruno',
      text: 'Bruno invited you to join the event.',
      time: '1 week ago'
    }];
    this._tasks = [{
      text: 'Design some buttons',
      value: '20%',
      class: 'info'
    }, {
      text: 'Create a nice theme',
      value: '40%',
      class: 'danger'
    }, {
      text: 'Some task I need to do',
      value: '60%',
      class: 'success'
    }, {
      text: 'Make beautiful transitions',
      value: '80%',
      class: 'warning'
    }, {
      text: 'Another task I need to do',
      value: '15%',
      class: 'info'
    }, {
      text: 'Debug and find last bugs',
      value: '55%',
      class: 'danger'
    }];
  }
  getMessages() {
    return this._messages;
  }
  getNotifications() {
    return this._notifications;
  }
  getTasks() {
    return this._tasks;
  }
  static #_ = this.ɵfac = function MessagesService_Factory(t) {
    return new (t || MessagesService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MessagesService,
    factory: MessagesService.ɵfac
  });
}


/***/ }),

/***/ 68972:
/*!*************************************************************!*\
  !*** ./src/app/theme/components/navbar/navbar.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sidebar/sidebar.service */ 40698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.state */ 82534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 86679);





class NavbarComponent {
  constructor(_state, _sidebarService) {
    this._state = _state;
    this._sidebarService = _sidebarService;
    this.isMenuCollapsed = false;
    this._state.subscribe('menu.isCollapsed', isCollapsed => {
      this.isMenuCollapsed = isCollapsed;
    });
    this.name = localStorage.getItem('name');
    console.log(this.name);
  }
  closeSubMenus() {
    /* when using <az-sidebar> instead of <az-menu> uncomment this line */
    // this._sidebarService.closeAllSubMenus();
  }
  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_state__WEBPACK_IMPORTED_MODULE_1__.AppState), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["az-navbar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService])],
    decls: 4,
    vars: 0,
    consts: [[1, "nav", "az-navbar", "fixed-top"], ["routerLink", "/", 1, "navbar-brand", 3, "click"], ["src", "assets/img/logo/siteworks.png", "alt", "Logo", 1, "logo"], ["id", "lines", 1, "transition", 3, "click"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_1_listener() {
          return ctx.closeSubMenus();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_3_listener() {
          return ctx.toggleMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: ["/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n\n/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n\n.nav.az-navbar {\n  height: 60px;\n  align-items: center;\n  background-color: #242D3A;\n}\n.nav.az-navbar .navbar-brand {\n  width: 205px;\n  padding-top: 0;\n  font-size: 0;\n  margin-left: 10px;\n}\n\n.logo {\n  max-width: 100%; /* Ensures the image does not exceed the width of its container */\n  height: auto; /* Maintains the aspect ratio */\n  /* Additional styles */\n  display: block; /* Removes any extra space below the image */\n  margin: 0 auto; /* Centers the image horizontally if needed */\n}\n\n#lines {\n  border-bottom: 7px double;\n  border-top: 2px solid;\n  border-color: rgba(255, 255, 255, 0.9);\n  content: \"\";\n  height: 3px;\n  width: 20px;\n  box-sizing: content-box;\n  cursor: pointer;\n}\n#lines:hover {\n  opacity: 0.8;\n}\n\n.app-search {\n  position: relative;\n  margin-left: 20px;\n}\n.app-search a {\n  position: absolute;\n  top: 3px;\n  right: 14px;\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.3);\n}\n.app-search .form-control {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  font-size: 13px;\n  letter-spacing: 0.03em;\n  height: 30px;\n  color: #fff;\n  padding: 7px 40px 7px 20px;\n  background: rgba(255, 255, 255, 0.05);\n  box-shadow: none;\n  border-radius: 30px;\n  width: 190px;\n}\n\n.right-section {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.user-menu {\n  font-size: 14px;\n}\n.user-menu .dropdown-toggle::after {\n  display: none;\n}\n.user-menu .dropdown-menu {\n  right: 0;\n  top: auto !important;\n  left: auto !important;\n  margin-top: 10px;\n  padding-top: 0;\n  overflow: hidden;\n  border-radius: 0;\n  font-size: 14px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n  transform: none !important;\n}\n.user-menu .dropdown-menu a {\n  color: #242D3A;\n}\n.user-menu .dropdown-menu a:hover {\n  color: #fff;\n  background-color: #242D3A;\n}\n.user-menu .dropdown-menu a i {\n  margin-right: 8px;\n}\n\n.user-link {\n  margin-right: 6px;\n}\n.user-link span {\n  color: #fff;\n  margin-left: 7px;\n  letter-spacing: 0.02em;\n}\n.user-link img {\n  width: 40px;\n  border-radius: 50%;\n}\n.user-link:hover, .user-link:focus {\n  text-decoration: none;\n}\n\n.user-info {\n  background-color: #242D3A;\n  padding: 8px;\n  text-align: center;\n  width: 240px;\n  margin-bottom: 5px;\n}\n.user-info img {\n  width: 100px;\n  margin-top: 5px;\n  border-radius: 50%;\n}\n.user-info p {\n  color: #ebebeb;\n  margin-top: 10px;\n}\n.user-info small {\n  display: block;\n}\n\n@media (max-width: 767px) {\n  .nav.az-navbar .navbar-brand {\n    width: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc3R5bGVzL3NraW5zL19ibHVlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9TY2hlZHVsaW5nJTIwU29mdHdhcmUvc3JjL2FwcC90aGVtZS9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBQTtBQ2FBLG9CQUFBO0FBTUEsa0JBQUE7QUFJQSxpQkFBQTtBQUtBLGtCQUFBO0FBS0EsbUJBQUE7QUFLQSxnQkFBQTtBQVNBLHVCQUFBO0FBOENBO0VBQ0ksMlFBQUE7RUFDQSxhQUFBO0FDcEZKOztBRlhBLDhDQUFBO0FDYUEsb0JBQUE7QUFNQSxrQkFBQTtBQUlBLGlCQUFBO0FBS0Esa0JBQUE7QUFLQSxtQkFBQTtBQUtBLGdCQUFBO0FBU0EsdUJBQUE7QUE4Q0E7RUFDSSwyUUFBQTtFQUNBLGFBQUE7QUN2RUo7O0FDckJBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJITFM7QUU2QmI7QUN2Qkk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRHlCUjs7QUNyQkE7RUFDSSxlQUFBLEVBQUEsaUVBQUE7RUFDQSxZQUFBLEVBQUEsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUEsRUFBQSw0Q0FBQTtFQUNBLGNBQUEsRUFBQSw2Q0FBQTtBRHdCSjs7QUNyQkE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUR3Qko7QUN2Qkk7RUFDSSxZQUFBO0FEeUJSOztBQ3JCQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUR3Qko7QUN2Qkk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FEeUJSO0FDdkJJO0VBQ0ksMENBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0hsRE87RUdtRFAsMEJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FEeUJSOztBQ3BCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUR1Qko7O0FDcEJBO0VBQ0ksZUFBQTtBRHVCSjtBQ3RCSTtFQUNJLGFBQUE7QUR3QlI7QUN0Qkk7RUFDSSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFLQSwwQkFBQTtBRHdCUjtBQ3ZCUTtFQUNJLGNIeEZDO0FFaUhiO0FDeEJZO0VBQ0ksV0h6RkQ7RUcwRkMseUJIM0ZIO0FFcUhiO0FDeEJZO0VBQ0ksaUJBQUE7QUQwQmhCOztBQ3BCQTtFQUNJLGlCQUFBO0FEdUJKO0FDdEJJO0VBQ0ksV0h0R087RUd1R1AsZ0JBQUE7RUFDQSxzQkFBQTtBRHdCUjtBQ3RCSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBRHdCUjtBQ3RCSTtFQUNJLHFCQUFBO0FEd0JSOztBQ3BCQTtFQUNJLHlCSHJIUztFR3NIVCxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUR1Qko7QUN0Qkk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEd0JSO0FDdEJJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FEd0JSO0FDdEJJO0VBQ0ksY0FBQTtBRHdCUjs7QUNuQkE7RUFDSTtJQUNJLFdBQUE7RURzQk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqIENvbG9ycyAocmVjb21tZW5kZWQgdXNlIEhFWCBjb2xvcnMpICoqKiovIFxyXG4kbWFpbi1jb2xvcjogIzI0MkQzQTsgXHJcbiRkZWZhdWx0LWNvbG9yOiNmZmY7IFxyXG4kZGFyay1jb2xvcjogIzAwMDtcclxuXHJcbiRib2R5LWJnLWdyYWRpZW50LWNvbG9yLTE6ICMxZTU3OTk7XHJcbiRib2R5LWJnLWdyYWRpZW50LWNvbG9yLTI6ICAjYTVjOWU1O1xyXG5cclxuJHNpZGViYXItYmctY29sb3I6IzM0NDE1NDtcclxuJHNpZGViYXItaXRlbS1hY3RpdmUtYmctY29sb3I6ICM2MzdDQTA7Ly8gIzAwOTljYztcclxuXHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzAyNGE4ODtcclxuJHN1Y2Nlc3MtY29sb3I6ICMyZDkyMmQ7XHJcbiRpbmZvLWNvbG9yOiAjMjQ4ZGFkO1xyXG4kd2FybmluZy1jb2xvcjogI2Y3OWExNztcclxuJGRhbmdlci1jb2xvcjogI2JmMTcyNTsiLCJAaW1wb3J0IFwic2tpbnMvYmx1ZVwiO1xyXG5cclxuJGJvZHktYmctY29sb3I6ICNlOWViZWU7XHJcbiR0ZXh0LWNvbG9yOiAjMjQyNDI0O1xyXG4kZ3JheS1kYXJrOiAjMjkyYjJjO1xyXG4kZ3JheTogIzU1NTtcclxuJGdyYXktbGlnaHQ6ICNjY2M7XHJcbiRncmF5LWxpZ2h0ZXI6ICNlY2VlZWY7XHJcblxyXG4kdGFibGUtYmctYWN0aXZlOiByZ2JhKCMwMDAsLjA3NSk7XHJcbiR0YWJsZS1ib3JkZXItd2lkdGg6IDFweDtcclxuJHRhYmxlLWJvcmRlci1jb2xvcjogJGdyYXktbGlnaHRlcjtcclxuXHJcbi8qKioqIEFwcCByb290cyAqKioqL1xyXG4kYXNzZXRzLXJvb3Q6ICd+L2Fzc2V0cy8nO1xyXG4kaW1hZ2VzLXJvb3Q6ICRhc3NldHMtcm9vdCArICdpbWcvJztcclxuJGZvbnRzLXJvb3Q6ICRhc3NldHMtcm9vdCArICdmb250cy8nO1xyXG5cclxuXHJcbi8qKioqIEdlbmVyYWwgKioqKi9cclxuJGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHJcblxyXG4vKioqKiBOYXZiYXIgKioqKi9cclxuJG5hdmJhci10ZXh0LWNvbG9yOiAkZGVmYXVsdC1jb2xvcjtcclxuJG5hdmJhci1oZWlnaHQ6IDYwcHg7XHJcblxyXG5cclxuLyoqKiogU2lkZWJhciAqKioqL1xyXG4kc2lkZWJhci13aWR0aDogMjMwcHg7XHJcblxyXG5cclxuXHJcbi8qKioqIFByb2dyZXNzICoqKiovXHJcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAwO1xyXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAyMHB4O1xyXG5cclxuXHJcbi8qKioqIEZvbnRzICoqKiovXHJcbiRmb250LXRoaW46IDEwMDtcclxuJGZvbnQtbGlnaHQ6IDMwMDtcclxuJGZvbnQtbm9ybWFsOiA0MDA7XHJcbiRmb250LWJvbGQ6IDUwMDtcclxuJGZvbnQtYm9sZGVyOiA3MDA7XHJcbiRmb250LXVsdHJhQm9sZDogOTAwO1xyXG5cclxuXHJcbi8qKioqIFNvY2lhbCBpY29ucyAqKioqL1xyXG4kZmFjZWJvb2stY29sb3I6ICMzYjU5OTg7XHJcbiR0d2l0dGVyLWNvbG9yOiAjNTVhY2VlO1xyXG4kaW5zdGFncmFtLWNvbG9yOiAjOGEzYWI5O1xyXG4kcGludGVyZXN0LWNvbG9yOiAjYzkyMjI4OyBcclxuJGdvb2dsZS1jb2xvcjogI2RkNGIzOTtcclxuJGxpbmtlZGluLWNvbG9yOiAjMDE3N0I1O1xyXG4kZ2l0aHViLWNvbG9yOiAjNmI2YjZiO1xyXG4kc3RhY2tvdmVyZmxvdy1jb2xvcjogIzJGOTZFODtcclxuJGRyaWJibGUtY29sb3I6ICNGMjY3OTg7XHJcbiRiZWhhY2UtY29sb3I6ICMwMDkzRkE7XHJcblxyXG4vLy0tLS0tLS0tZm9yIHByZXZlbnQgYXdlc29tZS1ib290c3RyYXAtY2hlY2tib3ggZXJyb3JzLS0tLS0tLS0tXHJcbi8vQGltcG9ydCBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcclxuLy9AaW1wb3J0IFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGluc1wiO1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiByZ2JhKCMwMDAsLjE1KTtcclxuJGVuYWJsZS10cmFuc2l0aW9uczogdHJ1ZTtcclxuJGlucHV0LWNvbG9yOiAkZ3JheTtcclxuJGlucHV0LWJnLWRpc2FibGVkOiAkZ3JheS1saWdodGVyO1xyXG4kYnJhbmQtcHJpbWFyeTogJHByaW1hcnktY29sb3I7XHJcbiRicmFuZC1zdWNjZXNzOiAkc3VjY2Vzcy1jb2xvcjtcclxuJGJyYW5kLWluZm86ICRpbmZvLWNvbG9yO1xyXG4kYnJhbmQtd2FybmluZzogJHdhcm5pbmctY29sb3I7XHJcbiRicmFuZC1kYW5nZXI6ICRkYW5nZXItY29sb3I7XHJcbiRicmFuZC1pbnZlcnNlOiAkZ3JheS1kYXJrO1xyXG5cclxuXHJcblxyXG5cclxuLy9TZXQgdmFyaWFibGVzIHRvIGJlIGFjY2Vzc2libGUgZm9yIEpTXHJcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy10by1qcy9zYXNzL3Nhc3MtdG8tanNcIjtcclxuXHJcbiR2YXJpYWJsZXNNYXA6ICggXHJcbiAgbWFpbi1jb2xvcjogJG1haW4tY29sb3IsXHJcbiAgZGVmYXVsdC1jb2xvcjogJGRlZmF1bHQtY29sb3IsXHJcbiAgZGFyay1jb2xvcjogJGRhcmstY29sb3IsXHJcbiAgcHJpbWFyeS1jb2xvcjogJHByaW1hcnktY29sb3IsXHJcbiAgc3VjY2Vzcy1jb2xvcjogJHN1Y2Nlc3MtY29sb3IsXHJcbiAgd2FybmluZy1jb2xvcjogJHdhcm5pbmctY29sb3IsXHJcbiAgZGFuZ2VyLWNvbG9yOiAkZGFuZ2VyLWNvbG9yLFxyXG4gIGluZm8tY29sb3I6ICRpbmZvLWNvbG9yLFxyXG4gIHNpZGViYXItYmctY29sb3I6ICRzaWRlYmFyLWJnLWNvbG9yLFxyXG4gIGdyYXk6ICRncmF5LFxyXG4gIGdyYXktbGlnaHQ6ICRncmF5LWxpZ2h0XHJcbik7XHJcblxyXG5ib2R5OjphZnRlciB7XHJcbiAgICBjb250ZW50OiBzYXNzVG9KcygkdmFyaWFibGVzTWFwKTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiIsIi8qKioqIENvbG9ycyAocmVjb21tZW5kZWQgdXNlIEhFWCBjb2xvcnMpICoqKiovXG4vKioqKiBBcHAgcm9vdHMgKioqKi9cbi8qKioqIEdlbmVyYWwgKioqKi9cbi8qKioqIE5hdmJhciAqKioqL1xuLyoqKiogU2lkZWJhciAqKioqL1xuLyoqKiogUHJvZ3Jlc3MgKioqKi9cbi8qKioqIEZvbnRzICoqKiovXG4vKioqKiBTb2NpYWwgaWNvbnMgKioqKi9cbmJvZHk6OmFmdGVyIHtcbiAgY29udGVudDogJ3tcIm1haW4tY29sb3JcIjpcIiMyNDJEM0FcIixcImRlZmF1bHQtY29sb3JcIjpcIiNmZmZcIixcImRhcmstY29sb3JcIjpcIiMwMDBcIixcInByaW1hcnktY29sb3JcIjpcIiMwMjRhODhcIixcInN1Y2Nlc3MtY29sb3JcIjpcIiMyZDkyMmRcIixcIndhcm5pbmctY29sb3JcIjpcIiNmNzlhMTdcIixcImRhbmdlci1jb2xvclwiOlwiI2JmMTcyNVwiLFwiaW5mby1jb2xvclwiOlwiIzI0OGRhZFwiLFwic2lkZWJhci1iZy1jb2xvclwiOlwiIzM0NDE1NFwiLFwiZ3JheVwiOlwiIzU1NVwiLFwiZ3JheS1saWdodFwiOlwiI2NjY1wifSc7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKioqIENvbG9ycyAocmVjb21tZW5kZWQgdXNlIEhFWCBjb2xvcnMpICoqKiovXG4vKioqKiBBcHAgcm9vdHMgKioqKi9cbi8qKioqIEdlbmVyYWwgKioqKi9cbi8qKioqIE5hdmJhciAqKioqL1xuLyoqKiogU2lkZWJhciAqKioqL1xuLyoqKiogUHJvZ3Jlc3MgKioqKi9cbi8qKioqIEZvbnRzICoqKiovXG4vKioqKiBTb2NpYWwgaWNvbnMgKioqKi9cbmJvZHk6OmFmdGVyIHtcbiAgY29udGVudDogJ3tcIm1haW4tY29sb3JcIjpcIiMyNDJEM0FcIixcImRlZmF1bHQtY29sb3JcIjpcIiNmZmZcIixcImRhcmstY29sb3JcIjpcIiMwMDBcIixcInByaW1hcnktY29sb3JcIjpcIiMwMjRhODhcIixcInN1Y2Nlc3MtY29sb3JcIjpcIiMyZDkyMmRcIixcIndhcm5pbmctY29sb3JcIjpcIiNmNzlhMTdcIixcImRhbmdlci1jb2xvclwiOlwiI2JmMTcyNVwiLFwiaW5mby1jb2xvclwiOlwiIzI0OGRhZFwiLFwic2lkZWJhci1iZy1jb2xvclwiOlwiIzM0NDE1NFwiLFwiZ3JheVwiOlwiIzU1NVwiLFwiZ3JheS1saWdodFwiOlwiI2NjY1wifSc7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5uYXYuYXotbmF2YmFyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyRDNBO1xufVxuLm5hdi5hei1uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIHdpZHRoOiAyMDVweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGZvbnQtc2l6ZTogMDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5sb2dvIHtcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiBFbnN1cmVzIHRoZSBpbWFnZSBkb2VzIG5vdCBleGNlZWQgdGhlIHdpZHRoIG9mIGl0cyBjb250YWluZXIgKi9cbiAgaGVpZ2h0OiBhdXRvOyAvKiBNYWludGFpbnMgdGhlIGFzcGVjdCByYXRpbyAqL1xuICAvKiBBZGRpdGlvbmFsIHN0eWxlcyAqL1xuICBkaXNwbGF5OiBibG9jazsgLyogUmVtb3ZlcyBhbnkgZXh0cmEgc3BhY2UgYmVsb3cgdGhlIGltYWdlICovXG4gIG1hcmdpbjogMCBhdXRvOyAvKiBDZW50ZXJzIHRoZSBpbWFnZSBob3Jpem9udGFsbHkgaWYgbmVlZGVkICovXG59XG5cbiNsaW5lcyB7XG4gIGJvcmRlci1ib3R0b206IDdweCBkb3VibGU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogMjBweDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNsaW5lczpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmFwcC1zZWFyY2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmFwcC1zZWFyY2ggYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIHJpZ2h0OiAxNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG4uYXBwLXNlYXJjaCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDdweCA0MHB4IDdweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogMTkwcHg7XG59XG5cbi5yaWdodC1zZWN0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4udXNlci1tZW51IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnVzZXItbWVudSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXNlci1tZW51IC5kcm9wZG93bi1tZW51IHtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogYXV0byAhaW1wb3J0YW50O1xuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAtbW96LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAtbXMtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIC1vLXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cbi51c2VyLW1lbnUgLmRyb3Bkb3duLW1lbnUgYSB7XG4gIGNvbG9yOiAjMjQyRDNBO1xufVxuLnVzZXItbWVudSAuZHJvcGRvd24tbWVudSBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDJEM0E7XG59XG4udXNlci1tZW51IC5kcm9wZG93bi1tZW51IGEgaSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4udXNlci1saW5rIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG4udXNlci1saW5rIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbn1cbi51c2VyLWxpbmsgaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi51c2VyLWxpbms6aG92ZXIsIC51c2VyLWxpbms6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi51c2VyLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyRDNBO1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4udXNlci1pbmZvIGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udXNlci1pbmZvIHAge1xuICBjb2xvcjogI2ViZWJlYjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi51c2VyLWluZm8gc21hbGwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5uYXYuYXotbmF2YmFyIC5uYXZiYXItYnJhbmQge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9taXhpbnNcIjtcclxuXHJcbi5uYXYuYXotbmF2YmFye1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgLm5hdmJhci1icmFuZHtcclxuICAgICAgICB3aWR0aDogMjA1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7ICAgLyogRW5zdXJlcyB0aGUgaW1hZ2UgZG9lcyBub3QgZXhjZWVkIHRoZSB3aWR0aCBvZiBpdHMgY29udGFpbmVyICovXHJcbiAgICBoZWlnaHQ6IGF1dG87ICAgICAgLyogTWFpbnRhaW5zIHRoZSBhc3BlY3QgcmF0aW8gKi9cclxuICAgIC8qIEFkZGl0aW9uYWwgc3R5bGVzICovXHJcbiAgICBkaXNwbGF5OiBibG9jazsgICAgLyogUmVtb3ZlcyBhbnkgZXh0cmEgc3BhY2UgYmVsb3cgdGhlIGltYWdlICovXHJcbiAgICBtYXJnaW46IDAgYXV0bzsgICAgLyogQ2VudGVycyB0aGUgaW1hZ2UgaG9yaXpvbnRhbGx5IGlmIG5lZWRlZCAqL1xyXG4gIH1cclxuXHJcbiNsaW5lc3sgXHJcbiAgICBib3JkZXItYm90dG9tOiA3cHggZG91YmxlO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcHAtc2VhcmNoe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBhIHsgICAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICByaWdodDogMTRweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoJG5hdmJhci10ZXh0LWNvbG9yLCAwLjMpO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkbmF2YmFyLXRleHQtY29sb3IsMC4xKTtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6ICRuYXZiYXItdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiA3cHggNDBweCA3cHggMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRuYXZiYXItdGV4dC1jb2xvciwwLjA1KTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vL0BpbmNsdWRlIHBsYWNlaG9sZGVyLWNvbG9yKHJnYmEoJG5hdmJhci10ZXh0LWNvbG9yLDAuNSkpO1xyXG4ucmlnaHQtc2VjdGlvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udXNlci1tZW51e1xyXG4gICAgZm9udC1zaXplOiAxNHB4OyAgICBcclxuICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd24tbWVudXtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogJG1haW4tY29sb3I7ICAgICBcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJG5hdmJhci10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udXNlci1saW5re1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLXRleHQtY29sb3I7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgICY6aG92ZXIsICY6Zm9jdXN7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfSAgIFxyXG59XHJcblxyXG4udXNlci1pbmZve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICBweyAgIFxyXG4gICAgICAgIGNvbG9yOiAjZWJlYmViO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBzbWFsbHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCl7IFxyXG4gICAgLm5hdi5hei1uYXZiYXIgLm5hdmJhci1icmFuZHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 56898:
/*!****************************************************************!*\
  !*** ./src/app/theme/components/sidebar/sidebar-item.model.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarItem": () => (/* binding */ SidebarItem)
/* harmony export */ });
class SidebarItem {
  constructor(id, title, routerLink, href, icon, target, hasSubMenu, parentId) {
    this.id = id;
    this.title = title;
    this.routerLink = routerLink;
    this.href = href;
    this.icon = icon;
    this.target = target;
    this.hasSubMenu = hasSubMenu;
    this.parentId = parentId;
  }
}

/***/ }),

/***/ 73974:
/*!***********************************************************!*\
  !*** ./src/app/theme/components/sidebar/sidebar-items.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidebarItems": () => (/* binding */ sidebarItems)
/* harmony export */ });
/* harmony import */ var _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-item.model */ 56898);

const sidebarItems = [new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(1, 'Dashboard', 'pages/dashboard', null, 'fa-home', null, false, 0), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(2, 'Charts', null, null, 'fa-bar-chart', null, true, 0), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(3, 'Ng2-Charts', 'pages/charts/ng2charts', null, 'fa-caret-right', null, false, 2), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(4, 'UI Features', null, null, 'fa-laptop', null, true, 0), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(5, 'Buttons', 'pages/ui/buttons', null, 'fa-caret-right', null, false, 4), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(6, 'Cards', 'pages/ui/cards', null, 'fa-caret-right', null, false, 4), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(7, 'Components', 'pages/ui/components', null, 'fa-caret-right', null, false, 4), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(8, 'Icons', 'pages/ui/icons', null, 'fa-caret-right', null, false, 4), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(9, 'Grid', 'pages/ui/grid', null, 'fa-caret-right', null, false, 4), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(10, 'List Group', 'pages/ui/list-group', null, 'fa-caret-right', null, false, 4), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(11, 'Media Objects', 'pages/ui/media-objects', null, 'fa-caret-right', null, false, 4), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(12, 'Tabs & Accordions', 'pages/ui/tabs-accordions', null, 'fa-caret-right', null, false, 4), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(13, 'Typography', 'pages/ui/typography', null, 'fa-caret-right', null, false, 4), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(14, 'Tools', null, null, 'fa-wrench', null, true, 0), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(15, 'Drag & Drop', 'pages/tools/drag-drop', null, 'fa-caret-right', null, false, 14), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(16, 'Resizable', 'pages/tools/resizable', null, 'fa-caret-right', null, false, 14), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(17, 'Toaster', 'pages/tools/toaster', null, 'fa-caret-right', null, false, 14), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(18, 'Mail', 'pages/mail/mail-list/inbox', null, 'fa-envelope-o', null, false, 0), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(19, 'Calendar', 'pages/calendar', null, 'fa-calendar', null, false, 0), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(20, 'Form Elements', null, null, 'fa-pencil-square-o', null, true, 0), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(21, 'Form Inputs', 'pages/form-elements/inputs', null, 'fa-caret-right', null, false, 20), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(22, 'Form Layouts', 'pages/form-elements/layouts', null, 'fa-caret-right', null, false, 20), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(23, 'Form Validations', 'pages/form-elements/validations', null, 'fa-caret-right', null, false, 20), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(24, 'Form Wizard', 'pages/form-elements/wizard', null, 'fa-caret-right', null, false, 20), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(25, 'Tables', null, null, 'fa-table', null, true, 0), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(26, 'Basic Tables', 'pages/tables/basic-tables', null, 'fa-caret-right', null, false, 25), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(27, 'Dynamic Tables', 'pages/tables/dynamic-tables', null, 'fa-caret-right', null, false, 25), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(28, 'Editors', null, null, 'fa-pencil', null, true, 0), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(29, 'Froala Editor', 'pages/editors/froala-editor', null, 'fa-caret-right', null, false, 28), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(30, 'Ckeditor', 'pages/editors/ckeditor', null, 'fa-caret-right', null, false, 28), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(31, 'Maps', null, null, 'fa-globe', null, true, 0), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(32, 'Vector Maps', 'pages/maps/vectormaps', null, 'fa-caret-right', null, false, 31), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(33, 'Google Maps', 'pages/maps/googlemaps', null, 'fa-caret-right', null, false, 31), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(34, 'Leaflet Maps', 'pages/maps/leafletmaps', null, 'fa-caret-right', null, false, 31), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(35, 'Pages', null, null, 'fa-file-o', null, true, 0), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(36, 'Login', '/login', null, 'fa-caret-right', null, false, 35), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(37, 'Register', '/register', null, 'fa-caret-right', null, false, 35), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(38, 'Blank Page', 'pages/blank', null, 'fa-caret-right', null, false, 35), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(39, 'Error Page', '/pagenotfound', null, 'fa-caret-right', null, false, 35), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(140, 'Menu Level 1', null, null, 'fa-folder-open-o', null, true, 0), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(141, 'Menu Level 2', null, null, 'fa-folder-open-o', null, true, 140), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(142, 'MenuLevel 3', null, null, 'fa-folder-open-o', null, true, 141), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(143, 'MenuLevel 4', null, null, 'fa-folder-open-o', null, true, 142), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(144, 'MenuLevel 5', null, null, 'fa-folder-o', null, false, 143), new _sidebar_item_model__WEBPACK_IMPORTED_MODULE_0__.SidebarItem(200, 'External Link', null, 'http://themeseason.com', 'fa-external-link', '_blank', false, 0)];

/***/ }),

/***/ 9125:
/*!***************************************************************!*\
  !*** ./src/app/theme/components/sidebar/sidebar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.service */ 40698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.state */ 82534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-scrollbar */ 24203);








const _c0 = function (a0) {
  return {
    "menu-collapsed": a0
  };
};
const _c1 = function (a0, a1) {
  return {
    top: a0,
    height: a1
  };
};
const _c2 = function (a0) {
  return {
    "show-hover-elem": a0
  };
};
class SidebarComponent {
  constructor(_elementRef, _sidebarService, _state, _router, _activatedRoute) {
    this._elementRef = _elementRef;
    this._sidebarService = _sidebarService;
    this._state = _state;
    this._router = _router;
    this._activatedRoute = _activatedRoute;
    this.isMenuCollapsed = false;
    this.isMenuShouldCollapsed = false;
    this.sidebarItems = _sidebarService.getSidebarItems();
    this._state.subscribe('menu.isCollapsed', isCollapsed => {
      this.isMenuCollapsed = isCollapsed;
      if (isCollapsed) {
        this._sidebarService.closeAllSubMenus();
      } else {
        this._sidebarService.showActiveSubMenu(this.sidebarItems);
      }
    });
    this._router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
        let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
        if (width <= 768) {
          this._state.notifyDataChanged('menu.isCollapsed', true);
        }
        window.scrollTo(0, 0);
        let activeLink = this._sidebarService.getActiveLink(this.sidebarItems);
        this._sidebarService.setActiveLink(this.sidebarItems, activeLink);
      }
    });
    this._state.subscribe('menu.hovered', $event => {
      this.hoverItem($event);
    });
  }
  ngOnInit() {
    let menu_wrapper = this._elementRef.nativeElement.children[0];
    let sidebar_menu = document.getElementById('sidebar-menu');
    this._sidebarService.createSidebarMenu(this.sidebarItems, sidebar_menu);
    if (this._shouldMenuCollapse()) {
      this.menuCollapse();
    }
    this.updateSidebarHeight();
  }
  onWindowResize() {
    var isMenuShouldCollapsed = this._shouldMenuCollapse();
    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
    if (isMenuShouldCollapsed) {
      this._sidebarService.closeAllSubMenus();
    } else {
      this._sidebarService.showActiveSubMenu(this.sidebarItems);
    }
  }
  _shouldMenuCollapse() {
    return window.innerWidth <= 768;
  }
  menuCollapse() {
    this.menuCollapseStateChange(true);
  }
  menuCollapseStateChange(isCollapsed) {
    this.isMenuCollapsed = isCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    this._sidebarService.closeAllSubMenus();
  }
  updateSidebarHeight() {
    this.menuHeight = this._elementRef.nativeElement.children[0].clientHeight - 60;
  }
  hoverItem($event) {
    this.showHoverElem = true;
    this.hoverElemHeight = $event.currentTarget.clientHeight;
    this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 60;
  }
  ngAfterViewInit() {
    this._sidebarService.showActiveSubMenu(this.sidebarItems);
  }
  static #_ = this.ɵfac = function SidebarComponent_Factory(t) {
    return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_state__WEBPACK_IMPORTED_MODULE_1__.AppState), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SidebarComponent,
    selectors: [["az-sidebar"]],
    hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function SidebarComponent_resize_HostBindingHandler() {
          return ctx.onWindowResize();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService])],
    decls: 4,
    vars: 10,
    consts: [[1, "sidebar", 3, "ngClass", "mouseleave"], ["pointerEventsMethod", "scrollbar"], ["id", "sidebar-menu", 1, "menu-wrapper"], [1, "sidebar-hover-elem", 3, "ngStyle", "ngClass"]],
    template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseleave", function SidebarComponent_Template_div_mouseleave_0_listener() {
          return ctx.hoverElemTop = -200;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ng-scrollbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx.isMenuCollapsed));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c1, ctx.hoverElemTop + "px", ctx.hoverElemHeight + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c2, ctx.showHoverElem));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_5__.NgScrollbar],
    styles: ["/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n\n/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n\n.sidebar {\n  background: #344154;\n  height: 100%;\n  min-height: 100%;\n  position: fixed;\n  width: 230px;\n  overflow: hidden;\n  display: block;\n  z-index: 9;\n  margin-top: 60px;\n}\n.sidebar .card {\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  overflow: visible;\n}\n.sidebar .card a {\n  color: #fff;\n  border-bottom: 1px solid rgba(36, 45, 58, 0.7);\n  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);\n  cursor: pointer;\n  padding: 11px 0;\n  font-size: 13px;\n  display: inline-block;\n  width: 100%;\n}\n.sidebar .card a i {\n  padding: 0 18px;\n}\n.sidebar .card a b {\n  float: right;\n  margin-right: 15px;\n  margin-top: 4px;\n  font-size: 16px;\n  transition: transform 0.2s linear;\n}\n.sidebar .card a.collapsed b {\n  transform: rotate(-180deg);\n}\n.sidebar .card a:hover {\n  color: #fff;\n  background-color: #242D3A !important;\n}\n.sidebar .card a.active-link {\n  background-color: #637CA0 !important;\n}\n.sidebar .card .card a {\n  padding-left: 15px;\n  background-color: rgba(36, 45, 58, 0.5);\n  box-shadow: none;\n}\n.sidebar .card .card .card a {\n  padding-left: 30px;\n  background-color: rgba(36, 45, 58, 0.6);\n  box-shadow: none;\n}\n.sidebar .card .card .card .card a {\n  padding-left: 45px;\n  background-color: rgba(36, 45, 58, 0.7);\n  box-shadow: none;\n}\n.sidebar .card .card .card .card .card a {\n  padding-left: 60px;\n  background-color: rgba(36, 45, 58, 0.8);\n  box-shadow: none;\n}\n.sidebar .card .card .card .card .card .card a {\n  padding-left: 75px;\n  background-color: rgba(36, 45, 58, 0.9);\n  box-shadow: none;\n}\n.sidebar .card .card .card .card .card .card .card a {\n  padding-left: 90px;\n  background-color: #242d3a;\n  box-shadow: none;\n}\n.sidebar .collapsing {\n  transition: height 0.25s ease;\n}\n.sidebar.menu-collapsed {\n  width: 50px;\n}\n.sidebar.menu-collapsed .menu-title, .sidebar.menu-collapsed b {\n  display: none;\n}\n\na[aria-expanded=true] {\n  box-shadow: none !important;\n}\n\n#sidebar-menu {\n  height: 100%;\n  padding-bottom: 60px;\n}\n\n.sidebar-hover-elem {\n  width: 4px;\n  background: #637CA0;\n  position: absolute;\n  top: -150px;\n  left: 0px;\n  transition: all 0.2s ease;\n  transition-property: top, height;\n  height: 36px;\n  display: block;\n}\n\n@media (max-width: 544px) {\n  .sidebar.menu-collapsed {\n    width: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc3R5bGVzL3NraW5zL19ibHVlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9TY2hlZHVsaW5nJTIwU29mdHdhcmUvc3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQUE7QUNhQSxvQkFBQTtBQU1BLGtCQUFBO0FBSUEsaUJBQUE7QUFLQSxrQkFBQTtBQUtBLG1CQUFBO0FBS0EsZ0JBQUE7QUFTQSx1QkFBQTtBQThDQTtFQUNJLDJRQUFBO0VBQ0EsYUFBQTtBQ3BGSjs7QUZYQSw4Q0FBQTtBQ2FBLG9CQUFBO0FBTUEsa0JBQUE7QUFJQSxpQkFBQTtBQUtBLGtCQUFBO0FBS0EsbUJBQUE7QUFLQSxnQkFBQTtBQVNBLHVCQUFBO0FBOENBO0VBQ0ksMlFBQUE7RUFDQSxhQUFBO0FDdkVKOztBQ3JCQTtFQUNJLG1CSEljO0VHSGQsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlGcUJZO0VFcEJaLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBRHdCSjtBQ3ZCSTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRHlCUjtBQ3hCUTtFQUNJLFdIbEJHO0VHbUJILDhDQUFBO0VBQ0EsOENBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUQwQlo7QUN6Qlk7RUFDSSxlQUFBO0FEMkJoQjtBQ3pCWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBS0EsaUNBQUE7QUQyQmhCO0FDekJZO0VBS0ksMEJBQUE7QUQyQmhCO0FDekJZO0VBQ0ksV0hoREQ7RUdpREMsb0NBQUE7QUQyQmhCO0FDekJZO0VBQ0ksb0NBQUE7QUQyQmhCO0FFeENRO0VBQ0ksa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FGMENaO0FFN0NRO0VBQ0ksa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FGK0NaO0FFbERRO0VBQ0ksa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FGb0RaO0FFdkRRO0VBQ0ksa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FGeURaO0FFNURRO0VBQ0ksa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FGOERaO0FFakVRO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FGbUVaO0FDcERJO0VBR0ksNkJBQUE7QURzRFI7QUNuREk7RUFDSSxXQUFBO0FEcURSO0FDcERRO0VBQ0ksYUFBQTtBRHNEWjs7QUNsREE7RUFDSSwyQkFBQTtBRHFESjs7QUNuREE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7QURzREo7O0FDaERBO0VBQ0UsVUFBQTtFQUNBLG1CSDVFNkI7RUc2RTdCLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFLQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QURtREY7O0FDL0NBO0VBQ0U7SUFDRSxRQUFBO0VEa0RGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKiBDb2xvcnMgKHJlY29tbWVuZGVkIHVzZSBIRVggY29sb3JzKSAqKioqLyBcclxuJG1haW4tY29sb3I6ICMyNDJEM0E7IFxyXG4kZGVmYXVsdC1jb2xvcjojZmZmOyBcclxuJGRhcmstY29sb3I6ICMwMDA7XHJcblxyXG4kYm9keS1iZy1ncmFkaWVudC1jb2xvci0xOiAjMWU1Nzk5O1xyXG4kYm9keS1iZy1ncmFkaWVudC1jb2xvci0yOiAgI2E1YzllNTtcclxuXHJcbiRzaWRlYmFyLWJnLWNvbG9yOiMzNDQxNTQ7XHJcbiRzaWRlYmFyLWl0ZW0tYWN0aXZlLWJnLWNvbG9yOiAjNjM3Q0EwOy8vICMwMDk5Y2M7XHJcblxyXG5cclxuJHByaW1hcnktY29sb3I6ICMwMjRhODg7XHJcbiRzdWNjZXNzLWNvbG9yOiAjMmQ5MjJkO1xyXG4kaW5mby1jb2xvcjogIzI0OGRhZDtcclxuJHdhcm5pbmctY29sb3I6ICNmNzlhMTc7XHJcbiRkYW5nZXItY29sb3I6ICNiZjE3MjU7IiwiQGltcG9ydCBcInNraW5zL2JsdWVcIjtcclxuXHJcbiRib2R5LWJnLWNvbG9yOiAjZTllYmVlO1xyXG4kdGV4dC1jb2xvcjogIzI0MjQyNDtcclxuJGdyYXktZGFyazogIzI5MmIyYztcclxuJGdyYXk6ICM1NTU7XHJcbiRncmF5LWxpZ2h0OiAjY2NjO1xyXG4kZ3JheS1saWdodGVyOiAjZWNlZWVmO1xyXG5cclxuJHRhYmxlLWJnLWFjdGl2ZTogcmdiYSgjMDAwLC4wNzUpO1xyXG4kdGFibGUtYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRncmF5LWxpZ2h0ZXI7XHJcblxyXG4vKioqKiBBcHAgcm9vdHMgKioqKi9cclxuJGFzc2V0cy1yb290OiAnfi9hc3NldHMvJztcclxuJGltYWdlcy1yb290OiAkYXNzZXRzLXJvb3QgKyAnaW1nLyc7XHJcbiRmb250cy1yb290OiAkYXNzZXRzLXJvb3QgKyAnZm9udHMvJztcclxuXHJcblxyXG4vKioqKiBHZW5lcmFsICoqKiovXHJcbiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuLyoqKiogTmF2YmFyICoqKiovXHJcbiRuYXZiYXItdGV4dC1jb2xvcjogJGRlZmF1bHQtY29sb3I7XHJcbiRuYXZiYXItaGVpZ2h0OiA2MHB4O1xyXG5cclxuXHJcbi8qKioqIFNpZGViYXIgKioqKi9cclxuJHNpZGViYXItd2lkdGg6IDIzMHB4O1xyXG5cclxuXHJcblxyXG4vKioqKiBQcm9ncmVzcyAqKioqL1xyXG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogMDtcclxuJHByb2dyZXNzLWhlaWdodDogMjBweDtcclxuXHJcblxyXG4vKioqKiBGb250cyAqKioqL1xyXG4kZm9udC10aGluOiAxMDA7XHJcbiRmb250LWxpZ2h0OiAzMDA7XHJcbiRmb250LW5vcm1hbDogNDAwO1xyXG4kZm9udC1ib2xkOiA1MDA7XHJcbiRmb250LWJvbGRlcjogNzAwO1xyXG4kZm9udC11bHRyYUJvbGQ6IDkwMDtcclxuXHJcblxyXG4vKioqKiBTb2NpYWwgaWNvbnMgKioqKi9cclxuJGZhY2Vib29rLWNvbG9yOiAjM2I1OTk4O1xyXG4kdHdpdHRlci1jb2xvcjogIzU1YWNlZTtcclxuJGluc3RhZ3JhbS1jb2xvcjogIzhhM2FiOTtcclxuJHBpbnRlcmVzdC1jb2xvcjogI2M5MjIyODsgXHJcbiRnb29nbGUtY29sb3I6ICNkZDRiMzk7XHJcbiRsaW5rZWRpbi1jb2xvcjogIzAxNzdCNTtcclxuJGdpdGh1Yi1jb2xvcjogIzZiNmI2YjtcclxuJHN0YWNrb3ZlcmZsb3ctY29sb3I6ICMyRjk2RTg7XHJcbiRkcmliYmxlLWNvbG9yOiAjRjI2Nzk4O1xyXG4kYmVoYWNlLWNvbG9yOiAjMDA5M0ZBO1xyXG5cclxuLy8tLS0tLS0tLWZvciBwcmV2ZW50IGF3ZXNvbWUtYm9vdHN0cmFwLWNoZWNrYm94IGVycm9ycy0tLS0tLS0tLVxyXG4vL0BpbXBvcnQgXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcbi8vQGltcG9ydCBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnNcIjtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogcmdiYSgjMDAwLC4xNSk7XHJcbiRlbmFibGUtdHJhbnNpdGlvbnM6IHRydWU7XHJcbiRpbnB1dC1jb2xvcjogJGdyYXk7XHJcbiRpbnB1dC1iZy1kaXNhYmxlZDogJGdyYXktbGlnaHRlcjtcclxuJGJyYW5kLXByaW1hcnk6ICRwcmltYXJ5LWNvbG9yO1xyXG4kYnJhbmQtc3VjY2VzczogJHN1Y2Nlc3MtY29sb3I7XHJcbiRicmFuZC1pbmZvOiAkaW5mby1jb2xvcjtcclxuJGJyYW5kLXdhcm5pbmc6ICR3YXJuaW5nLWNvbG9yO1xyXG4kYnJhbmQtZGFuZ2VyOiAkZGFuZ2VyLWNvbG9yO1xyXG4kYnJhbmQtaW52ZXJzZTogJGdyYXktZGFyaztcclxuXHJcblxyXG5cclxuXHJcbi8vU2V0IHZhcmlhYmxlcyB0byBiZSBhY2Nlc3NpYmxlIGZvciBKU1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtdG8tanMvc2Fzcy9zYXNzLXRvLWpzXCI7XHJcblxyXG4kdmFyaWFibGVzTWFwOiAoIFxyXG4gIG1haW4tY29sb3I6ICRtYWluLWNvbG9yLFxyXG4gIGRlZmF1bHQtY29sb3I6ICRkZWZhdWx0LWNvbG9yLFxyXG4gIGRhcmstY29sb3I6ICRkYXJrLWNvbG9yLFxyXG4gIHByaW1hcnktY29sb3I6ICRwcmltYXJ5LWNvbG9yLFxyXG4gIHN1Y2Nlc3MtY29sb3I6ICRzdWNjZXNzLWNvbG9yLFxyXG4gIHdhcm5pbmctY29sb3I6ICR3YXJuaW5nLWNvbG9yLFxyXG4gIGRhbmdlci1jb2xvcjogJGRhbmdlci1jb2xvcixcclxuICBpbmZvLWNvbG9yOiAkaW5mby1jb2xvcixcclxuICBzaWRlYmFyLWJnLWNvbG9yOiAkc2lkZWJhci1iZy1jb2xvcixcclxuICBncmF5OiAkZ3JheSxcclxuICBncmF5LWxpZ2h0OiAkZ3JheS1saWdodFxyXG4pO1xyXG5cclxuYm9keTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogc2Fzc1RvSnMoJHZhcmlhYmxlc01hcCk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4iLCIvKioqKiBDb2xvcnMgKHJlY29tbWVuZGVkIHVzZSBIRVggY29sb3JzKSAqKioqL1xuLyoqKiogQXBwIHJvb3RzICoqKiovXG4vKioqKiBHZW5lcmFsICoqKiovXG4vKioqKiBOYXZiYXIgKioqKi9cbi8qKioqIFNpZGViYXIgKioqKi9cbi8qKioqIFByb2dyZXNzICoqKiovXG4vKioqKiBGb250cyAqKioqL1xuLyoqKiogU29jaWFsIGljb25zICoqKiovXG5ib2R5OjphZnRlciB7XG4gIGNvbnRlbnQ6ICd7XCJtYWluLWNvbG9yXCI6XCIjMjQyRDNBXCIsXCJkZWZhdWx0LWNvbG9yXCI6XCIjZmZmXCIsXCJkYXJrLWNvbG9yXCI6XCIjMDAwXCIsXCJwcmltYXJ5LWNvbG9yXCI6XCIjMDI0YTg4XCIsXCJzdWNjZXNzLWNvbG9yXCI6XCIjMmQ5MjJkXCIsXCJ3YXJuaW5nLWNvbG9yXCI6XCIjZjc5YTE3XCIsXCJkYW5nZXItY29sb3JcIjpcIiNiZjE3MjVcIixcImluZm8tY29sb3JcIjpcIiMyNDhkYWRcIixcInNpZGViYXItYmctY29sb3JcIjpcIiMzNDQxNTRcIixcImdyYXlcIjpcIiM1NTVcIixcImdyYXktbGlnaHRcIjpcIiNjY2NcIn0nO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKioqKiBDb2xvcnMgKHJlY29tbWVuZGVkIHVzZSBIRVggY29sb3JzKSAqKioqL1xuLyoqKiogQXBwIHJvb3RzICoqKiovXG4vKioqKiBHZW5lcmFsICoqKiovXG4vKioqKiBOYXZiYXIgKioqKi9cbi8qKioqIFNpZGViYXIgKioqKi9cbi8qKioqIFByb2dyZXNzICoqKiovXG4vKioqKiBGb250cyAqKioqL1xuLyoqKiogU29jaWFsIGljb25zICoqKiovXG5ib2R5OjphZnRlciB7XG4gIGNvbnRlbnQ6ICd7XCJtYWluLWNvbG9yXCI6XCIjMjQyRDNBXCIsXCJkZWZhdWx0LWNvbG9yXCI6XCIjZmZmXCIsXCJkYXJrLWNvbG9yXCI6XCIjMDAwXCIsXCJwcmltYXJ5LWNvbG9yXCI6XCIjMDI0YTg4XCIsXCJzdWNjZXNzLWNvbG9yXCI6XCIjMmQ5MjJkXCIsXCJ3YXJuaW5nLWNvbG9yXCI6XCIjZjc5YTE3XCIsXCJkYW5nZXItY29sb3JcIjpcIiNiZjE3MjVcIixcImluZm8tY29sb3JcIjpcIiMyNDhkYWRcIixcInNpZGViYXItYmctY29sb3JcIjpcIiMzNDQxNTRcIixcImdyYXlcIjpcIiM1NTVcIixcImdyYXktbGlnaHRcIjpcIiNjY2NcIn0nO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2lkZWJhciB7XG4gIGJhY2tncm91bmQ6ICMzNDQxNTQ7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMjMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiA5O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuLnNpZGViYXIgLmNhcmQge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi5zaWRlYmFyIC5jYXJkIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMzYsIDQ1LCA1OCwgMC43KTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMXB4IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5zaWRlYmFyIC5jYXJkIGEgaSB7XG4gIHBhZGRpbmc6IDAgMThweDtcbn1cbi5zaWRlYmFyIC5jYXJkIGEgYiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgLW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xufVxuLnNpZGViYXIgLmNhcmQgYS5jb2xsYXBzZWQgYiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuLnNpZGViYXIgLmNhcmQgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyRDNBICFpbXBvcnRhbnQ7XG59XG4uc2lkZWJhciAuY2FyZCBhLmFjdGl2ZS1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzN0NBMCAhaW1wb3J0YW50O1xufVxuLnNpZGViYXIgLmNhcmQgLmNhcmQgYSB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgNDUsIDU4LCAwLjUpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnNpZGViYXIgLmNhcmQgLmNhcmQgLmNhcmQgYSB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgNDUsIDU4LCAwLjYpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnNpZGViYXIgLmNhcmQgLmNhcmQgLmNhcmQgLmNhcmQgYSB7XG4gIHBhZGRpbmctbGVmdDogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgNDUsIDU4LCAwLjcpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnNpZGViYXIgLmNhcmQgLmNhcmQgLmNhcmQgLmNhcmQgLmNhcmQgYSB7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgNDUsIDU4LCAwLjgpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnNpZGViYXIgLmNhcmQgLmNhcmQgLmNhcmQgLmNhcmQgLmNhcmQgLmNhcmQgYSB7XG4gIHBhZGRpbmctbGVmdDogNzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgNDUsIDU4LCAwLjkpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnNpZGViYXIgLmNhcmQgLmNhcmQgLmNhcmQgLmNhcmQgLmNhcmQgLmNhcmQgLmNhcmQgYSB7XG4gIHBhZGRpbmctbGVmdDogOTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MmQzYTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5zaWRlYmFyIC5jb2xsYXBzaW5nIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC4yNXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IDAuMjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjI1cyBlYXNlO1xufVxuLnNpZGViYXIubWVudS1jb2xsYXBzZWQge1xuICB3aWR0aDogNTBweDtcbn1cbi5zaWRlYmFyLm1lbnUtY29sbGFwc2VkIC5tZW51LXRpdGxlLCAuc2lkZWJhci5tZW51LWNvbGxhcHNlZCBiIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuYVthcmlhLWV4cGFuZGVkPXRydWVdIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4jc2lkZWJhci1tZW51IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuLnNpZGViYXItaG92ZXItZWxlbSB7XG4gIHdpZHRoOiA0cHg7XG4gIGJhY2tncm91bmQ6ICM2MzdDQTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTUwcHg7XG4gIGxlZnQ6IDBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIGhlaWdodDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU0NHB4KSB7XG4gIC5zaWRlYmFyLm1lbnUtY29sbGFwc2VkIHtcbiAgICB3aWR0aDogMDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvbWl4aW5zXCI7XHJcblxyXG4uc2lkZWJhcntcclxuICAgIGJhY2tncm91bmQ6ICRzaWRlYmFyLWJnLWNvbG9yO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAkc2lkZWJhci13aWR0aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgYm9yZGVyOjA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZGVmYXVsdC1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoJG1haW4tY29sb3IsMC43KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMCAwIHJnYmEoJGRlZmF1bHQtY29sb3IsMC4xKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMXB4IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBie1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogLW1zLXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcclxuICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmNvbGxhcHNlZCBie1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRlZmF1bHQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYWN0aXZlLWxpbmt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2lkZWJhci1pdGVtLWFjdGl2ZS1iZy1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIG1lbnUtbGV2ZWwtYmctY29sb3IoJG1haW4tY29sb3IpOyAgIFxyXG4gICAgfVxyXG4gICAgLmNvbGxhcHNpbmcge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IC4yNXMgZWFzZTtcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBoZWlnaHQgLjI1cyBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAuMjVzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgJi5tZW51LWNvbGxhcHNlZHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAubWVudS10aXRsZSwgYntcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9ICAgICAgIFxyXG4gICAgfVxyXG59XHJcbmFbYXJpYS1leHBhbmRlZD1cInRydWVcIl0geyBcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4jc2lkZWJhci1tZW51e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5zaWRlYmFyLWhvdmVyLWVsZW17XHJcbiAgd2lkdGg6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAkc2lkZWJhci1pdGVtLWFjdGl2ZS1iZy1jb2xvcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTUwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgaGVpZ2h0O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDRweCkge1xyXG4gIC5zaWRlYmFyLm1lbnUtY29sbGFwc2VkIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH0gXHJcbn0iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG5AbWl4aW4gdGhlbWUtYmcoJGJnLWdyYWRpZW50LWNvbG9yLTEsICRiZy1ncmFkaWVudC1jb2xvci0yKXtcclxuICAgIC8qIE9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogJGJnLWdyYWRpZW50LWNvbG9yLTI7XHJcblxyXG4gICAgLyogRkYzLjYtMTUgKi9cclxuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09KSAsIC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICRiZy1ncmFkaWVudC1jb2xvci0xIDAlLCAkYmctZ3JhZGllbnQtY29sb3ItMiAxMDAlKTtcclxuXHJcblxyXG4gICAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQU1BQUFBcDRYaURBQUFBVVZCTVZFV0ZoWVdEZzROM2QzZHRiVzE3ZTN0MWRYV0JnWUdIaDRkNWVYbHpjM09MaTR1Ym01dVZsWldQajQrTmpZMTlmWDJKaVlsL2YzOXJhMnVSa1pHWm1abHBhV21YbDVkdmIyOXhjWEdUazVObloyYzhUVjFtQUFBQUczUlNUbE5BUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUF2RU93dEFBQUZWa2xFUVZSNFhwV1dCNjdjMkJVRmIzZzU1N1QvaFJvOS9XVU1aSGxncjRCZzhaNHFRZ1FKbEhJNEE4U3pGVnJhcHZtVEY5TzdkbVlSRlo2MFlpQmhKUkNnaDFGWWhpTEFtZHZYMEN6VE9wTkU3N01FMFp0eS9uV1d6Y2hEdGlxcm1RRGV1djNwb3dRNXRhMmVOMEZZMElua3FERDczbFQ5YzlsRXp3VU5xZ0ZIczlWUWNlM1RWQ2xGQ1FyU1RmT2lZa1ZKUUJtcGJxMkw2aVphdlBuQVBjb1UwZFN3MFNVVHF6L0d0ckd1WGZieXlCbmlLeWtPV1FXR3F3d01BN1FpWUF4aStJbFBkcW8raFlIblV0NVpQZm5zSEp5TmlEdG5wSnlheU5Ca0Y2Y1dvWUdBTVk5MlUyaFhIRi9DMU04dVAvWnRZZGl1ajI2VWRBZFFRU1hRRXJ3U09NenQvWFdSV0F6NUd1U0JJa3dHMUgzRmFiSjJPc1VPVWhHQzZ0SzRFTXRKTzB0dEM2SUJEM2tNMHZlMHRKd01kU2ZqWm8rRUVJU2FlVHI5UDN3WXJHalhxeUMxa3JjS2RoTXB4RW50NUpldG91bHNjcHl6aFhONUZScHVQSHZiZVFhS3hGQUVCNkVOK2NZTjZ4RDdSWUdwWHBObmRNbVpnTTVEY3MzWVNORkRIVW8yTEdmWnV1a1NXeVVZaXJKQWRZYkYzTWZxRUttak0rSTJFZmhBOTRpRzNMN3VLclIrR2RXRDczeWRsSUIrNmhncmVmMVFUbG1nbWJNMy9MZVg1R0kxVXgxUldwZ3hwTHVaMitJK0lqelo4d3FFNG5pbHZRZGtVZGZoekk1UURXeStrdzVXZ2cycEdwZUVWZUNDQTdiODVCTzNGOUR6eEIzY2RxdkJ6V2NtemJ5TWlxaHp1WXF0SFJWRzJ5NHgrS09sbnlxbGE4QW9XV3B1Qm9ZUnh6WHJmS3VJTGw2U2ZpV0NianhvWkpVYUNCajFDakg3R0lhRGJjOWtxQlkzVy9SZ2pkYTFpcVFjT0p1MldXKzc2cFpDOVFHN00wMGRmZmU5aE5uc2V1cEZMNTNyOEY3WUhTd0pXVUtQMnErazdSZHN4eU9CMTFuMHh0T3ZuVzRpck1NRk5WNEgwdXF3UzVFeHNtUDlBeGJEVGM5SndnbmVBVDV2VGlVU20xRTdCU2ZsU3QzYmZhMXR2OERpM1I4bjNBZjdNTld6czQ5aG1hdUUyd1ArdHRycStBc1dwRkcyYXd2c3VPcWJpcFdIZ3R1dnVhQUUrQTFaLzdnQzloZXNucis3d3FDd0c4YzV5QWczQUwxZm04VDlBWnRwL2JiSkd3bDFwTnJFN1J1T1g3UGVNUlVFUlZhUHBFcyt5cWVvU211T2xva3F3NDlwZ29takxlaDdpY0hObEcxOXlqczZYWE9NZWRZbTV4SDJZeHBWMnRjMFJvMmpKZnhDNTBBcHV4R29iN2xNc3hmVGJlVXYwN1R5WXhwZUx1Y0VIMWdOZDRJS0gyTEFnNVRkVmhsQ2FmWnZwc2tmbmNDZng4cE9oSnpkNzZiSldlWUZuRmNpd2NZZnViUmMxMklwL3BwSWhBMS9tU1ovUnhqRkRySkM1eGlmRmpKcFkyWGw1elhkZ3VGcVl5VFIxelNwMVk5cCt0a3REWVlTTmZsY3hJMGl5TzRUUEJkbFJjcGVxaksvcGlGNWJrbHE3N1ZTRWFBK3o4cW1KVEZ6SVdpaXRibnpSNzk0VVNLQlVhVDBOVEVzVmpacUxhRlZxSm9QTjlPREc3MElQYmZCSEtLKy9xL0FXUjB0SnpZSFJVTE9hNE1QK1cvSGZHYWRaVWJmdzE3N0c3ai9PR2JJczhUYWhMeXlubDRYNFJpbkY3OTNPeitCVTBzYVh0VUhyVkJGVC9EbkEzY3ROUG9HYnM0aFJJalRvazhpK2FsZ1QxbFRIaTRTeEZ2T05LTnJnUUZBcTIvZ0ZuV01YZ3dmZmdZTUpwaUtZa21XM3RUZzNaUTlKcStmOFhOK0E1ZWVVS0hXdkpXSjJzZ0oxU29wK3d3aHFGVmlqcVdhSmh3dEQ4TU5sU0JlV05OV1RhNVo1a1BadzUrTGJWVDk5d3FUZHgyOWxNVUg0T0lHL0Q4NnJ1S0VhdUJqdkg1eHk2dW0vU2ZqN2VpNlVVVms0QUlsM015RDRNU1NUT0ZnU3dzSC9RSldhUTVhczdaY21nQlprempqVTFVclE3NGNpMWdXQkNTR0h0dVYxSDJtaFNuTzNXcC8zZkVWNWErNHd6Ly82cXk4SnhqWnNteHh5NSs0dzlDRE5KWTA5VDA3MmlLRzBFbk9TMGFyRVlnWHFZblhjWUh3alR0VU5BY01lbE9kNHhwa29xaVRZSUNXRnEwSlNpUGZQRFFkbnQrNC93dXFjWFk0N1FJTGJnQUFBQUJKUlU1RXJrSmdnZz09KSAsIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRiZy1ncmFkaWVudC1jb2xvci0xIDAlLCAkYmctZ3JhZGllbnQtY29sb3ItMiAxMDAlKTtcclxuXHJcblxyXG4gICAgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FNQUFBQXA0WGlEQUFBQVVWQk1WRVdGaFlXRGc0TjNkM2R0YlcxN2UzdDFkWFdCZ1lHSGg0ZDVlWGx6YzNPTGk0dWJtNXVWbFpXUGo0K05qWTE5ZlgySmlZbC9mMzlyYTJ1UmtaR1ptWmxwYVdtWGw1ZHZiMjl4Y1hHVGs1Tm5aMmM4VFYxbUFBQUFHM1JTVGxOQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVBdkVPd3RBQUFGVmtsRVFWUjRYcFdXQjY3YzJCVUZiM2c1NTdUL2hSbzkvV1VNWkhsZ3I0Qmc4WjRxUWdRSmxISTRBOFN6RlZyYXB2bVRGOU83ZG1ZUkZaNjBZaUJoSlJDZ2gxRlloaUxBbWR2WDBDelRPcE5FNzdNRTBadHkvbldXemNoRHRpcXJtUURldXYzcG93UTV0YTJlTjBGWTBJbmtxREQ3M2xUOWM5bEV6d1VOcWdGSHM5VlFjZTNUVkNsRkNRclNUZk9pWWtWSlFCbXBicTJMNmlaYXZQbkFQY29VMGRTdzBTVVRxei9HdHJHdVhmYnl5Qm5pS3lrT1dRV0dxd3dNQTdRaVlBeGkrSWxQZHFvK2hZSG5VdDVaUGZuc0hKeU5pRHRucEp5YXlOQmtGNmNXb1lHQU1ZOTJVMmhYSEYvQzFNOHVQL1p0WWRpdWoyNlVkQWRRUVNYUUVyd1NPTXp0L1hXUldBejVHdVNCSWt3RzFIM0ZhYkoyT3NVT1VoR0M2dEs0RU10Sk8wdHRDNklCRDNrTTB2ZTB0SndNZFNmalpvK0VFSVNhZVRyOVAzd1lyR2pYcXlDMWtyY0tkaE1weEVudDVKZXRvdWxzY3B5emhYTjVGUnB1UEh2YmVRYUt4RkFFQjZFTitjWU42eEQ3UllHcFhwTm5kTW1aZ001RGNzM1lTTkZESFVvMkxHZlp1dWtTV3lVWWlySkFkWWJGM01mcUVLbWpNK0kyRWZoQTk0aUczTDd1S3JSK0dkV0Q3M3lkbElCKzZoZ3JlZjFRVGxtZ21iTTMvTGVYNUdJMVV4MVJXcGd4cEx1WjIrSStJanpaOHdxRTRuaWx2UWRrVWRmaHpJNVFEV3kra3c1V2dnMnBHcGVFVmVDQ0E3Yjg1Qk8zRjlEenhCM2NkcXZCeldjbXpieU1pcWh6dVlxdEhSVkcyeTR4K0tPbG55cWxhOEFvV1dwdUJvWVJ4elhyZkt1SUxsNlNmaVdDYmp4b1pKVWFDQmoxQ2pIN0dJYURiYzlrcUJZM1cvUmdqZGExaXFRY09KdTJXVys3NnBaQzlRRzdNMDBkZmZlOWhObnNldXBGTDUzcjhGN1lIU3dKV1VLUDJxK2s3UmRzeHlPQjExbjB4dE92blc0aXJNTUZOVjRIMHVxd1M1RXhzbVA5QXhiRFRjOUp3Z25lQVQ1dlRpVVNtMUU3QlNmbFN0M2JmYTF0djhEaTNSOG4zQWY3TU5XenM0OWhtYXVFMndQK3R0cnErQXNXcEZHMmF3dnN1T3FiaXBXSGd0dXZ1YUFFK0ExWi83Z0M5aGVzbnIrN3dxQ3dHOGM1eUFnM0FMMWZtOFQ5QVp0cC9iYkpHd2wxcE5yRTdSdU9YN1BlTVJVRVJWYVBwRXMreXFlb1NtdU9sb2txdzQ5cGdvbWpMZWg3aWNITmxHMTl5anM2WFhPTWVkWW01eEgyWXhwVjJ0YzBSbzJqSmZ4QzUwQXB1eEdvYjdsTXN4ZlRiZVV2MDdUeVl4cGVMdWNFSDFnTmQ0SUtIMkxBZzVUZFZobENhZlp2cHNrZm5jQ2Z4OHBPaEp6ZDc2YkpXZVlGbkZjaXdjWWZ1YlJjMTJJcC9wcEloQTEvbVNaL1J4akZEckpDNXhpZkZqSnBZMlhsNXpYZGd1RnFZeVRSMXpTcDFZOXArdGt0RFlZU05mbGN4STBpeU80VFBCZGxSY3BlcWpLL3BpRjVia2xxNzdWU0VhQSt6OHFtSlRGeklXaWl0Ym56Ujc5NFVTS0JVYVQwTlRFc1ZqWnFMYUZWcUpvUE45T0RHNzBJUGJmQkhLSysvcS9BV1IwdEp6WUhSVUxPYTRNUCtXL0hmR2FkWlViZncxNzdHN2ovT0diSXM4VGFoTHl5bmw0WDRSaW5GNzkzT3orQlUwc2FYdFVIclZCRlQvRG5BM2N0TlBvR2JzNGhSSWpUb2s4aSthbGdUMWxUSGk0U3hGdk9OS05yZ1FGQXEyL2dGbldNWGd3ZmZnWU1KcGlLWWttVzN0VGczWlE5SnErZjhYTitBNWVlVUtIV3ZKV0oyc2dKMVNvcCt3d2hxRlZpanFXYUpod3REOE1ObFNCZVdOTldUYTVaNWtQWnc1K0xiVlQ5OXdxVGR4MjlsTVVINE9JRy9EODZydUtFYXVCanZINXh5NnVtL1NmajdlaTZVVVZrNEFJbDNNeUQ0TVNTVE9GZ1N3c0gvUUpXYVE1YXM3WmNtZ0Jaa3pqalUxVXJRNzRjaTFnV0JDU0dIdHVWMUgybWhTbk8zV3AvM2ZFVjVhKzR3ei8vNnF5OEp4alpzbXh4eTUrNHc5Q0ROSlkwOVQwNzJpS0cwRW5PUzBhckVZZ1hxWW5YY1lId2pUdFVOQWNNZWxPZDR4cGtvcWlUWUlDV0ZxMEpTaVBmUERRZG50KzQvd3VxY1hZNDdRSUxiZ0FBQUFCSlJVNUVya0pnZ2c9PSkgLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRiZy1ncmFkaWVudC1jb2xvci0xIDAlLCAkYmctZ3JhZGllbnQtY29sb3ItMiAxMDAlKTtcclxuXHJcbiAgICAvKiBJRTYtOSAqL1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM3ZGI5ZTgnLCBlbmRDb2xvcnN0cj0nIzFlNTc5OScsR3JhZGllbnRUeXBlPTAgKTtcclxuXHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlci1jb2xvcigkY29sb3IpIHtcclxuICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7Y29sb3I6ICRjb2xvcn1cclxuICAgIDo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7Y29sb3I6ICRjb2xvcn0vKiBGaXJlZm94IDE5KyAqL1xyXG4gICAgOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtjb2xvcjogJGNvbG9yfS8qIEZpcmVmb3ggMTgtICovXHJcbiAgICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge2NvbG9yOiAkY29sb3J9XHJcbn1cclxuXHJcbkBtaXhpbiBwcm9ncmVzcy1oZWlnaHQoJGhlaWdodCkge1xyXG4gICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbn1cclxuXHJcbkBtaXhpbiBiZy1pbWFnZSgkcmVsYXRpdmVVcmwpIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGltYWdlcy1yb290ICsgJHJlbGF0aXZlVXJsKTtcclxufVxyXG5cclxuQG1peGluIG1lbnUtbGV2ZWwtYmctY29sb3IoJGNvbG9yKXtcclxuICAgICRlbGVtOiAnJztcclxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggNiB7XHJcbiAgICAgICAgJGVsZW06IGlmKCRpID09IDEsIFwiLmNhcmRcIiwgc2VsZWN0b3ItbmVzdCgkZWxlbSwgXCIuY2FyZFwiKSk7ICAgICAgXHJcbiAgICAgICAgI3skZWxlbSArICcgYSd9IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4ICogJGk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLCAwLjQgKyAoMC4xICogJGkpKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL2Jvb3RzdHJhcCBtaXhpbnNcclxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcclxuICBAaWYgJGVuYWJsZS10cmFuc2l0aW9ucyB7XHJcbiAgICBAaWYgbGVuZ3RoKCR0cmFuc2l0aW9uKSA9PSAwIHtcclxuICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb24tYmFzZTtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1peGluIHRhYi1mb2N1cygpIHtcclxuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZS1yb3ctdmFyaWFudCgkc3RhdGUsICRiYWNrZ3JvdW5kKSB7XHJcbiAgLnRhYmxlLSN7JHN0YXRlfSB7XHJcbiAgICAmLFxyXG4gICAgPiB0aCxcclxuICAgID4gdGQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcclxuICAgIH1cclxuICB9XHJcbiAgLnRhYmxlLWhvdmVyIHtcclxuICAgICRob3Zlci1iYWNrZ3JvdW5kOiBkYXJrZW4oJGJhY2tncm91bmQsIDUlKTtcclxuICAgIC50YWJsZS0jeyRzdGF0ZX0ge1xyXG4gICAgICBAaW5jbHVkZSBob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLWJhY2tncm91bmQ7XHJcblxyXG4gICAgICAgID4gdGQsXHJcbiAgICAgICAgPiB0aCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG92ZXItYmFja2dyb3VuZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1peGluIGhvdmVyIHtcclxuICAgICY6aG92ZXIgeyBAY29udGVudCB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 40698:
/*!*************************************************************!*\
  !*** ./src/app/theme/components/sidebar/sidebar.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarService": () => (/* binding */ SidebarService)
/* harmony export */ });
/* harmony import */ var _sidebar_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-items */ 73974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.state */ 82534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 86679);





class SidebarService {
  constructor(state, location, renderer2, router) {
    this.state = state;
    this.location = location;
    this.renderer2 = renderer2;
    this.router = router;
  }
  getSidebarItems() {
    return _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.sidebarItems;
  }
  createSidebarMenu(menu, nativeElement) {
    let menu0 = this.renderer2.createElement('div');
    this.renderer2.setAttribute(menu0, 'id', 'menu0');
    menu.forEach(menuItem => {
      if (menuItem.parentId == 0) {
        let subMenu = this.createSidebarItem(menu, menuItem);
        this.renderer2.appendChild(menu0, subMenu);
      }
    });
    this.renderer2.appendChild(nativeElement, menu0);
  }
  createSidebarItem(menu, sidebarItem) {
    let div = this.renderer2.createElement('div');
    this.renderer2.addClass(div, 'card');
    let link = this.renderer2.createElement('a');
    this.renderer2.addClass(link, 'menu-item-link');
    let icon = this.renderer2.createElement('i');
    this.renderer2.addClass(icon, 'fa');
    this.renderer2.addClass(icon, sidebarItem.icon);
    this.renderer2.appendChild(link, icon);
    let span = this.renderer2.createElement('span');
    this.renderer2.addClass(span, 'menu-title');
    this.renderer2.appendChild(link, span);
    let menuText = this.renderer2.createText(sidebarItem.title);
    this.renderer2.appendChild(span, menuText);
    this.renderer2.setAttribute(link, 'id', 'link' + sidebarItem.id);
    this.renderer2.addClass(link, 'transition');
    this.renderer2.appendChild(div, link);
    this.renderer2.listen(link, "click", () => {
      this.state.notifyDataChanged('menu.isCollapsed', false);
    });
    this.renderer2.listen(link, "mouseenter", $event => {
      this.state.notifyDataChanged('menu.hovered', $event);
    });
    if (sidebarItem.routerLink) {
      this.renderer2.listen(link, "click", () => {
        this.router.navigate([sidebarItem.routerLink]);
        this.setActiveLink(menu, link);
        this.closeOtherSubMenus(div);
      });
    }
    if (sidebarItem.href) {
      this.renderer2.setAttribute(link, 'href', sidebarItem.href);
    }
    if (sidebarItem.target) {
      this.renderer2.setAttribute(link, 'target', sidebarItem.target);
    }
    if (sidebarItem.hasSubMenu) {
      this.renderer2.addClass(link, 'collapsed');
      let caret = this.renderer2.createElement('b');
      this.renderer2.addClass(caret, 'fa');
      this.renderer2.addClass(caret, 'fa-angle-up');
      this.renderer2.appendChild(link, caret);
      this.renderer2.setAttribute(link, 'data-toggle', 'collapse');
      this.renderer2.setAttribute(link, 'data-parent', '#menu' + sidebarItem.parentId);
      this.renderer2.setAttribute(link, 'href', '#collapse' + sidebarItem.id);
      let collapse = this.renderer2.createElement('div');
      this.renderer2.setAttribute(collapse, 'id', 'collapse' + sidebarItem.id);
      this.renderer2.addClass(collapse, 'collapse');
      this.renderer2.appendChild(div, collapse);
      this.createSubMenu(menu, sidebarItem.id, collapse);
    }
    return div;
  }
  createSubMenu(menu, menuItemId, parentElement) {
    let menus = menu.filter(item => item.parentId === menuItemId);
    menus.forEach(menuItem => {
      let subMenu = this.createSidebarItem(menu, menuItem);
      this.renderer2.appendChild(parentElement, subMenu);
    });
  }
  closeOtherSubMenus(elem) {
    let children = this.renderer2.parentNode(elem).children;
    for (let i = 0; i < children.length; i++) {
      let child = this.renderer2.nextSibling(children[i].children[0]);
      if (child) {
        this.renderer2.setAttribute(children[i].children[0], 'aria-expanded', 'false');
        this.renderer2.addClass(children[i].children[0], 'collapsed');
        this.renderer2.removeClass(child, 'show');
      }
    }
  }
  getActiveLink(menu) {
    let url = this.location.path();
    let routerLink = url.substring(1, url.length);
    let activeMenuItem = menu.filter(item => item.routerLink === routerLink);
    if (activeMenuItem[0]) {
      let activeLink = document.querySelector("#link" + activeMenuItem[0].id);
      return activeLink;
    }
    return false;
  }
  setActiveLink(menu, link) {
    if (link) {
      menu.forEach(menuItem => {
        let activeLink = document.querySelector("#link" + menuItem.id);
        if (activeLink) {
          if (activeLink.classList.contains('active-link')) {
            activeLink.classList.remove('active-link');
          }
        }
      });
      this.renderer2.addClass(link, 'active-link');
    }
  }
  showActiveSubMenu(menu) {
    let url = this.location.path();
    let routerLink = url.substring(1, url.length);
    let activeMenuItem = menu.filter(item => item.routerLink === routerLink);
    if (activeMenuItem[0]) {
      let activeLink = document.querySelector("#link" + activeMenuItem[0].id);
      let parent = this.renderer2.parentNode(activeLink);
      while (this.renderer2.parentNode(parent)) {
        parent = this.renderer2.parentNode(parent);
        if (parent.className == 'collapse') {
          let parentMenu = menu.filter(item => item.id === activeMenuItem[0].parentId);
          let activeParentLink = document.querySelector("#link" + parentMenu[0].id);
          this.renderer2.removeClass(activeParentLink, 'collapsed');
          this.renderer2.addClass(parent, 'show');
        }
        if (parent.classList.contains('menu-wrapper')) {
          break;
        }
      }
    }
  }
  closeAllSubMenus() {
    let menu = document.getElementById("menu0");
    if (!menu) {
      return;
    }
    let children = menu.children;
    for (let i = 0; i < children.length; i++) {
      let child = this.renderer2.nextSibling(children[i].children[0]);
      if (child) {
        this.renderer2.setAttribute(children[i].children[0], 'aria-expanded', 'false');
        this.renderer2.addClass(children[i].children[0], 'collapsed');
        this.renderer2.removeClass(child, 'show');
      }
    }
  }
  static #_ = this.ɵfac = function SidebarService_Factory(t) {
    return new (t || SidebarService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_state__WEBPACK_IMPORTED_MODULE_1__.AppState), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SidebarService,
    factory: SidebarService.ɵfac
  });
}


/***/ }),

/***/ 76072:
/*!***************************************************************!*\
  !*** ./src/app/theme/directives/counter/counter.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Counter": () => (/* binding */ Counter)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class Counter {
  constructor(_elementRef) {
    this.element = jQuery(_elementRef.nativeElement);
  }
  ngAfterViewInit() {
    let elem = this.element,
      count = this.count,
      increment = this.increment,
      interval = this.interval;
    function counter() {
      count = count + increment;
      setTimeout(() => counter(), interval * 1000);
      elem.html(count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
    counter();
  }
  static #_ = this.ɵfac = function Counter_Factory(t) {
    return new (t || Counter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: Counter,
    selectors: [["", "counter", ""]],
    inputs: {
      count: "count",
      interval: "interval",
      increment: "increment"
    }
  });
}


/***/ }),

/***/ 19212:
/*!*******************************************************!*\
  !*** ./src/app/theme/directives/directives.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesModule": () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _slim_scroll_slim_scroll_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slim-scroll/slim-scroll.directive */ 27460);
/* harmony import */ var _widget_widget_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget/widget.directive */ 3090);
/* harmony import */ var _counter_counter_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter/counter.directive */ 76072);
/* harmony import */ var _live_tile_live_tile_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./live-tile/live-tile.directive */ 40651);
/* harmony import */ var _progress_animate_progress_animate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress-animate/progress-animate.directive */ 94002);
/* harmony import */ var _dropzone_dropzone_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropzone/dropzone.directive */ 90965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);








class DirectivesModule {
  static #_ = this.ɵfac = function DirectivesModule_Factory(t) {
    return new (t || DirectivesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: DirectivesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DirectivesModule, {
    declarations: [_slim_scroll_slim_scroll_directive__WEBPACK_IMPORTED_MODULE_0__.SlimScroll, _widget_widget_directive__WEBPACK_IMPORTED_MODULE_1__.Widget, _counter_counter_directive__WEBPACK_IMPORTED_MODULE_2__.Counter, _live_tile_live_tile_directive__WEBPACK_IMPORTED_MODULE_3__.LiveTile, _progress_animate_progress_animate_directive__WEBPACK_IMPORTED_MODULE_4__.ProgressAnimate, _dropzone_dropzone_directive__WEBPACK_IMPORTED_MODULE_5__.DropzoneUpload],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule],
    exports: [_slim_scroll_slim_scroll_directive__WEBPACK_IMPORTED_MODULE_0__.SlimScroll, _widget_widget_directive__WEBPACK_IMPORTED_MODULE_1__.Widget, _counter_counter_directive__WEBPACK_IMPORTED_MODULE_2__.Counter, _live_tile_live_tile_directive__WEBPACK_IMPORTED_MODULE_3__.LiveTile, _progress_animate_progress_animate_directive__WEBPACK_IMPORTED_MODULE_4__.ProgressAnimate, _dropzone_dropzone_directive__WEBPACK_IMPORTED_MODULE_5__.DropzoneUpload]
  });
})();

/***/ }),

/***/ 90965:
/*!*****************************************************************!*\
  !*** ./src/app/theme/directives/dropzone/dropzone.directive.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropzoneUpload": () => (/* binding */ DropzoneUpload)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class DropzoneUpload {
  constructor(el) {
    this.$el = jQuery(el.nativeElement);
  }
  ngOnInit() {
    let dropzone = new Dropzone(this.$el[0], {
      addRemoveLinks: true
    });
    Dropzone.autoDiscover = false;
    // Dropzone.options.myAwesomeDropzone = false;
  }
  static #_ = this.ɵfac = function DropzoneUpload_Factory(t) {
    return new (t || DropzoneUpload)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: DropzoneUpload,
    selectors: [["", "dropzone", ""]]
  });
}


/***/ }),

/***/ 40651:
/*!*******************************************************************!*\
  !*** ./src/app/theme/directives/live-tile/live-tile.directive.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveTile": () => (/* binding */ LiveTile)
/* harmony export */ });
/* harmony import */ var metrojs_release_MetroJs_Full_MetroJs_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! metrojs/release/MetroJs.Full/MetroJs.min.js */ 4197);
/* harmony import */ var metrojs_release_MetroJs_Full_MetroJs_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(metrojs_release_MetroJs_Full_MetroJs_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);


class LiveTile {
  constructor(el) {
    this.$el = jQuery(el.nativeElement);
  }
  ngOnInit() {
    this.$el.css('height', this.$el.data('height')).liveTile({
      useModernizr: true
    });
  }
  static #_ = this.ɵfac = function LiveTile_Factory(t) {
    return new (t || LiveTile)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: LiveTile,
    selectors: [["", "live-tile", ""]]
  });
}


/***/ }),

/***/ 94002:
/*!*********************************************************************************!*\
  !*** ./src/app/theme/directives/progress-animate/progress-animate.directive.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressAnimate": () => (/* binding */ ProgressAnimate)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class ProgressAnimate {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
    this.element = jQuery(_elementRef.nativeElement);
  }
  ngOnInit() {
    let elem = this.element,
      progress = 0,
      timeout = 0,
      increment = 1,
      maxprogress = elem.attr('aria-valuenow');
    function animate() {
      setTimeout(() => {
        progress += increment;
        if (progress < maxprogress) {
          elem.css('width', progress + '%');
          animate();
        }
      }, timeout);
    }
    ;
    animate();
  }
  static #_ = this.ɵfac = function ProgressAnimate_Factory(t) {
    return new (t || ProgressAnimate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ProgressAnimate,
    selectors: [["", "progress-animate", ""]]
  });
}


/***/ }),

/***/ 27460:
/*!***********************************************************************!*\
  !*** ./src/app/theme/directives/slim-scroll/slim-scroll.directive.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlimScroll": () => (/* binding */ SlimScroll)
/* harmony export */ });
/* harmony import */ var jquery_slimscroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-slimscroll */ 7376);
/* harmony import */ var jquery_slimscroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_slimscroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);


class SlimScroll {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
  ngOnChanges(changes) {
    this._scroll();
  }
  _scroll() {
    this._destroy();
    this._init();
  }
  _init() {
    jQuery(this._elementRef.nativeElement).slimScroll(this.slimScrollOptions);
  }
  _destroy() {
    jQuery(this._elementRef.nativeElement).slimScroll({
      destroy: true
    });
  }
  static #_ = this.ɵfac = function SlimScroll_Factory(t) {
    return new (t || SlimScroll)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: SlimScroll,
    selectors: [["", "slim-scroll", ""]],
    inputs: {
      slimScrollOptions: "slimScrollOptions"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
  });
}


/***/ }),

/***/ 3090:
/*!*************************************************************!*\
  !*** ./src/app/theme/directives/widget/widget.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Widget": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var widgster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! widgster */ 89648);
/* harmony import */ var widgster__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(widgster__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);


class Widget {
  constructor(el) {
    this.$el = jQuery(el.nativeElement);
    jQuery.fn.widgster.Constructor.DEFAULTS.bodySelector = '.widget-body';
    jQuery(document).on('close.widgster', e => {
      let $colWrap = jQuery(e.target).closest(' [class*="col-"]:not(.widget-container)');
      if (!$colWrap.find('.widget').not(e.target).length) {
        $colWrap.remove();
      }
    });
    jQuery(document).on("fullscreened.widgster", e => {
      jQuery(e.target).find('div.widget-body').addClass('scrolling');
    }).on("restored.widgster", e => {
      jQuery(e.target).find('div.widget-body').removeClass('scrolling');
    });
  }
  ngOnInit() {
    this.$el.widgster();
  }
  static #_ = this.ɵfac = function Widget_Factory(t) {
    return new (t || Widget)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: Widget,
    selectors: [["", "widget", ""]]
  });
}


/***/ }),

/***/ 6854:
/*!***********************************************************!*\
  !*** ./src/app/theme/pipes/appPicture/appPicture.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppPicturePipe": () => (/* binding */ AppPicturePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class AppPicturePipe {
  transform(input) {
    return '../assets/img/' + input;
  }
  static #_ = this.ɵfac = function AppPicturePipe_Factory(t) {
    return new (t || AppPicturePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "appPicture",
    type: AppPicturePipe,
    pure: true
  });
}


/***/ }),

/***/ 39045:
/*!*********************************************!*\
  !*** ./src/app/theme/pipes/pipes.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _appPicture_appPicture_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appPicture/appPicture.pipe */ 6854);
/* harmony import */ var _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profilePicture/profilePicture.pipe */ 77965);
/* harmony import */ var _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/mail-search.pipe */ 96555);
/* harmony import */ var _search_search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.pipe */ 95234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);






class PipesModule {
  static #_ = this.ɵfac = function PipesModule_Factory(t) {
    return new (t || PipesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: PipesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PipesModule, {
    declarations: [_appPicture_appPicture_pipe__WEBPACK_IMPORTED_MODULE_0__.AppPicturePipe, _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_1__.ProfilePicturePipe, _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__.MailSearchPipe, _search_search_pipe__WEBPACK_IMPORTED_MODULE_3__.SearchPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
    exports: [_appPicture_appPicture_pipe__WEBPACK_IMPORTED_MODULE_0__.AppPicturePipe, _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_1__.ProfilePicturePipe, _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__.MailSearchPipe, _search_search_pipe__WEBPACK_IMPORTED_MODULE_3__.SearchPipe]
  });
})();

/***/ }),

/***/ 77965:
/*!*******************************************************************!*\
  !*** ./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePicturePipe": () => (/* binding */ ProfilePicturePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class ProfilePicturePipe {
  transform(input, ext = 'jpg') {
    return '../assets/img/profile/' + input + '.' + ext;
  }
  static #_ = this.ɵfac = function ProfilePicturePipe_Factory(t) {
    return new (t || ProfilePicturePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "profilePicture",
    type: ProfilePicturePipe,
    pure: true
  });
}


/***/ }),

/***/ 96555:
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/search/mail-search.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailSearchPipe": () => (/* binding */ MailSearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class MailSearchPipe {
  transform(value, args) {
    if (!value || !args) {
      return value;
    }
    const searchText = new RegExp(args, 'ig');
    return value.filter(mail => {
      return mail.sender && mail.sender.search(searchText) !== -1 || mail.subject && mail.subject.search(searchText) !== -1;
    });
  }
  static #_ = this.ɵfac = function MailSearchPipe_Factory(t) {
    return new (t || MailSearchPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "MailSearch",
    type: MailSearchPipe,
    pure: true
  });
}


/***/ }),

/***/ 95234:
/*!***************************************************!*\
  !*** ./src/app/theme/pipes/search/search.pipe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPipe": () => (/* binding */ SearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class SearchPipe {
  transform(value, searchText) {
    if (!searchText || !value) {
      return value;
    }
    const regex = new RegExp(searchText, 'ig');
    return value.filter(person => {
      return person.name && person.name.search(regex) !== -1;
    });
  }
  static #_ = this.ɵfac = function SearchPipe_Factory(t) {
    return new (t || SearchPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "SearchPipe",
    type: SearchPipe,
    pure: true
  });
}


/***/ }),

/***/ 24609:
/*!*************************************************!*\
  !*** ./node_modules/bezier-easing/src/index.js ***!
  \*************************************************/
/***/ ((module) => {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
var float32ArraySupported = typeof Float32Array === 'function';
function A(aA1, aA2) {
  return 1.0 - 3.0 * aA2 + 3.0 * aA1;
}
function B(aA1, aA2) {
  return 3.0 * aA2 - 6.0 * aA1;
}
function C(aA1) {
  return 3.0 * aA1;
}

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope(aT, aA1, aA2) {
  return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX,
    currentT,
    i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0.0) {
      return aGuessT;
    }
    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function LinearEasing(x) {
  return x;
}
module.exports = function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }
  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return function BezierEasing(x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};

/***/ }),

/***/ 7376:
/*!*************************************************************!*\
  !*** ./node_modules/jquery-slimscroll/jquery.slimscroll.js ***!
  \*************************************************************/
/***/ (() => {

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function ($) {
  $.fn.extend({
    slimScroll: function (options) {
      var defaults = {
        // width in pixels of the visible scroll area
        width: 'auto',
        // height in pixels of the visible scroll area
        height: '250px',
        // width in pixels of the scrollbar and rail
        size: '7px',
        // scrollbar color, accepts any hex/color value
        color: '#000',
        // scrollbar position - left/right
        position: 'right',
        // distance in pixels between the side edge and the scrollbar
        distance: '1px',
        // default scroll position on load - top / bottom / $('selector')
        start: 'top',
        // sets scrollbar opacity
        opacity: .4,
        // enables always-on mode for the scrollbar
        alwaysVisible: false,
        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut: false,
        // sets visibility of the rail
        railVisible: false,
        // sets rail color
        railColor: '#333',
        // sets rail opacity
        railOpacity: .2,
        // whether  we should use jQuery UI Draggable to enable bar dragging
        railDraggable: true,
        // defautlt CSS class of the slimscroll rail
        railClass: 'slimScrollRail',
        // defautlt CSS class of the slimscroll bar
        barClass: 'slimScrollBar',
        // defautlt CSS class of the slimscroll wrapper
        wrapperClass: 'slimScrollDiv',
        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll: false,
        // scroll amount applied to each mouse wheel step
        wheelStep: 20,
        // scroll amount applied when user is using gestures
        touchScrollStep: 200,
        // sets border radius
        borderRadius: '7px',
        // sets border radius of the rail
        railBorderRadius: '7px'
      };
      var o = $.extend(defaults, options);

      // do it for every element that matches selector
      this.each(function () {
        var isOverPanel,
          isOverBar,
          isDragg,
          queueHide,
          touchDif,
          barHeight,
          percentScroll,
          lastScroll,
          divS = '<div></div>',
          minBarHeight = 30,
          releaseScroll = false;

        // used in event handlers and for better minification
        var me = $(this);

        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass)) {
          // start from last bar position
          var offset = me.scrollTop();

          // find bar and rail
          bar = me.siblings('.' + o.barClass);
          rail = me.siblings('.' + o.railClass);
          getBarHeight();

          // check if we should scroll existing instance
          if ($.isPlainObject(options)) {
            // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
            if ('height' in options && options.height == 'auto') {
              me.parent().css('height', 'auto');
              me.css('height', 'auto');
              var height = me.parent().parent().height();
              me.parent().css('height', height);
              me.css('height', height);
            } else if ('height' in options) {
              var h = options.height;
              me.parent().css('height', h);
              me.css('height', h);
            }
            if ('scrollTo' in options) {
              // jump to a static point
              offset = parseInt(o.scrollTo);
            } else if ('scrollBy' in options) {
              // jump by value pixels
              offset += parseInt(o.scrollBy);
            } else if ('destroy' in options) {
              // remove slimscroll elements
              bar.remove();
              rail.remove();
              me.unwrap();
              return;
            }

            // scroll content by the given offset
            scrollContent(offset, false, true);
          }
          return;
        } else if ($.isPlainObject(options)) {
          if ('destroy' in options) {
            return;
          }
        }

        // optionally set height to the parent's height
        o.height = o.height == 'auto' ? me.parent().height() : o.height;

        // wrap content
        var wrapper = $(divS).addClass(o.wrapperClass).css({
          position: 'relative',
          overflow: 'hidden',
          width: o.width,
          height: o.height
        });

        // update style for the div
        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height
        });

        // create scrollbar rail
        var rail = $(divS).addClass(o.railClass).css({
          width: o.size,
          height: '100%',
          position: 'absolute',
          top: 0,
          display: o.alwaysVisible && o.railVisible ? 'block' : 'none',
          'border-radius': o.railBorderRadius,
          background: o.railColor,
          opacity: o.railOpacity,
          zIndex: 90
        });

        // create scrollbar
        var bar = $(divS).addClass(o.barClass).css({
          background: o.color,
          width: o.size,
          position: 'absolute',
          top: 0,
          opacity: o.opacity,
          display: o.alwaysVisible ? 'block' : 'none',
          'border-radius': o.borderRadius,
          BorderRadius: o.borderRadius,
          MozBorderRadius: o.borderRadius,
          WebkitBorderRadius: o.borderRadius,
          zIndex: 99
        });

        // set position
        var posCss = o.position == 'right' ? {
          right: o.distance
        } : {
          left: o.distance
        };
        rail.css(posCss);
        bar.css(posCss);

        // wrap it
        me.wrap(wrapper);

        // append to parent div
        me.parent().append(bar);
        me.parent().append(rail);

        // make it draggable and no longer dependent on the jqueryUI
        if (o.railDraggable) {
          bar.bind("mousedown", function (e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;
            $doc.bind("mousemove.slimscroll", function (e) {
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false); // scroll content
            });

            $doc.bind("mouseup.slimscroll", function (e) {
              isDragg = false;
              hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function (e) {
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        }

        // on rail over
        rail.hover(function () {
          showBar();
        }, function () {
          hideBar();
        });

        // on bar over
        bar.hover(function () {
          isOverBar = true;
        }, function () {
          isOverBar = false;
        });

        // show on parent mouseover
        me.hover(function () {
          isOverPanel = true;
          showBar();
          hideBar();
        }, function () {
          isOverPanel = false;
          hideBar();
        });

        // support for mobile
        me.bind('touchstart', function (e, b) {
          if (e.originalEvent.touches.length) {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });
        me.bind('touchmove', function (e) {
          // prevent scrolling the page if necessary
          if (!releaseScroll) {
            e.originalEvent.preventDefault();
          }
          if (e.originalEvent.touches.length) {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
            // scroll content
            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom') {
          // scroll content to bottom
          bar.css({
            top: me.outerHeight() - bar.outerHeight()
          });
          scrollContent(0, true);
        } else if (o.start !== 'top') {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true);

          // make sure bar stays hidden
          if (!o.alwaysVisible) {
            bar.hide();
          }
        }

        // attach scroll events
        attachWheel(this);
        function _onWheel(e) {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) {
            return;
          }
          var e = e || window.event;
          var delta = 0;
          if (e.wheelDelta) {
            delta = -e.wheelDelta / 120;
          }
          if (e.detail) {
            delta = e.detail / 3;
          }
          var target = e.target || e.srcTarget || e.srcElement;
          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          }

          // stop window scroll
          if (e.preventDefault && !releaseScroll) {
            e.preventDefault();
          }
          if (!releaseScroll) {
            e.returnValue = false;
          }
        }
        function scrollContent(y, isWheel, isJump) {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();
          if (isWheel) {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

            // move bar, make sure it doesn't go out
            delta = Math.min(Math.max(delta, 0), maxTop);

            // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = y > 0 ? Math.ceil(delta) : Math.floor(delta);

            // scroll the scrollbar
            bar.css({
              top: delta + 'px'
            });
          }

          // calculate actual scroll amount
          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());
          if (isJump) {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({
              top: offsetTop + 'px'
            });
          }

          // scroll content
          me.scrollTop(delta);

          // fire scrolling event
          me.trigger('slimscrolling', ~~delta);

          // ensure bar is visible
          showBar();

          // trigger hide when scroll is stopped
          hideBar();
        }
        function attachWheel(target) {
          if (window.addEventListener) {
            target.addEventListener('DOMMouseScroll', _onWheel, false);
            target.addEventListener('mousewheel', _onWheel, false);
          } else {
            document.attachEvent("onmousewheel", _onWheel);
          }
        }
        function getBarHeight() {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max(me.outerHeight() / me[0].scrollHeight * me.outerHeight(), minBarHeight);
          bar.css({
            height: barHeight + 'px'
          });

          // hide scrollbar if content is not long enough
          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({
            display: display
          });
        }
        function showBar() {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide);

          // when bar reached top or bottom
          if (percentScroll == ~~percentScroll) {
            //release wheel
            releaseScroll = o.allowPageScroll;

            // publish approporiate event
            if (lastScroll != percentScroll) {
              var msg = ~~percentScroll == 0 ? 'top' : 'bottom';
              me.trigger('slimscroll', msg);
            }
          } else {
            releaseScroll = false;
          }
          lastScroll = percentScroll;

          // show only when required
          if (barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }
          bar.stop(true, true).fadeIn('fast');
          if (o.railVisible) {
            rail.stop(true, true).fadeIn('fast');
          }
        }
        function hideBar() {
          // only hide when options allow it
          if (!o.alwaysVisible) {
            queueHide = setTimeout(function () {
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg) {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }
      });

      // maintain chainability
      return this;
    }
  });
  $.fn.extend({
    slimscroll: $.fn.slimScroll
  });
})(jQuery);

/***/ }),

/***/ 4197:
/*!******************************************************************!*\
  !*** ./node_modules/metrojs/release/MetroJs.Full/MetroJs.min.js ***!
  \******************************************************************/
/***/ (() => {

/*!
* Metro JS for jQuery
* http://drewgreenwell.com/ 
* For details and usage info see: http://drewgreenwell.com/projects/metrojs
Copyright (C) 2013, Drew Greenwell
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function (n) {
  var r, f, e, o;
  n.fn.metrojs = {
    capabilities: null,
    checkCapabilities: function (t, i) {
      return (n.fn.metrojs.capabilities == null || typeof i != "undefined" && i == !0) && (n.fn.metrojs.capabilities = new n.fn.metrojs.MetroModernizr(t)), n.fn.metrojs.capabilities;
    }
  };
  r = n.fn.metrojs;
  f = window.console;
  typeof f != "object" && (f = {}, f.log = function () {}, f.error = function () {});
  e = typeof n.error == "function" ? n.error : f.error;
  o = 99e3;
  n.fn.liveTile = function (t) {
    var r, i;
    if (u[t]) {
      for (r = [], i = 1; i <= arguments.length; i++) r[i - 1] = arguments[i];
      return u[t].apply(this, r);
    }
    return typeof t != "object" && t ? (n.error("Method " + t + " does not exist on jQuery.liveTile"), null) : u.init.apply(this, arguments);
  };
  n.fn.liveTile.contentModules = {
    modules: [],
    addContentModule: function (n, t) {
      this.modules instanceof Array || (this.modules = []);
      this.modules.push(t);
    },
    hasContentModule: function (n) {
      if (typeof n == "undefined" || !(this.modules instanceof Array)) return -1;
      for (var t = 0; t < this.modules.length; t++) if (typeof this.modules[t].moduleName != "undefined" && this.modules[t].moduleName == n) return t;
      return -1;
    }
  };
  n.fn.liveTile.defaults = {
    mode: "slide",
    speed: 500,
    initDelay: -1,
    delay: 5e3,
    stops: "100%",
    stack: !1,
    direction: "vertical",
    animationDirection: "forward",
    tileSelector: ">div,>li,>p,>img,>a",
    tileFaceSelector: ">div,>li,>p,>img,>a",
    ignoreDataAttributes: !1,
    click: null,
    link: "",
    newWindow: !1,
    bounce: !1,
    bounceDirections: "all",
    bounceFollowsMove: !0,
    pauseOnHover: !1,
    pauseOnHoverEvent: "both",
    playOnHover: !1,
    playOnHoverEvent: "both",
    onHoverDelay: 0,
    onHoverOutDelay: 200,
    repeatCount: -1,
    appendBack: !0,
    alwaysTrigger: !1,
    flipListOnHover: !1,
    flipListOnHoverEvent: "mouseout",
    noHAflipOpacity: "1",
    haTransFunc: "ease",
    noHaTransFunc: "linear",
    currentIndex: 0,
    startNow: !0,
    useModernizr: typeof Modernizr != "undefined",
    useHardwareAccel: !0,
    useTranslate: !0,
    faces: {
      $front: null,
      $back: null
    },
    animationStarting: function () {},
    animationComplete: function () {},
    triggerDelay: function () {
      return Math.random() * 3e3;
    },
    swap: "",
    swapFront: "-",
    swapBack: "-",
    contentModules: [],
    rebindMessage: "tile data is missing. Are you missing a call to rebind or destroy? You may also be able to avoid this error by calling stop or pause"
  };
  var u = {
      init: function (u) {
        var f = n.extend({}, n.fn.liveTile.defaults, u);
        return r.checkCapabilities(f), i.getBrowserPrefix(), n.fn.liveTile.contentModules.hasContentModule("image") == -1 && n.fn.liveTile.contentModules.addContentModule("image", s.imageSwap), n.fn.liveTile.contentModules.hasContentModule("html") == -1 && n.fn.liveTile.contentModules.addContentModule("html", s.htmlSwap), n(this).each(function (i, r) {
          var e = n(r),
            u = t.initTileData(e, f),
            o;
          u.faces = t.prepTile(e, u);
          u.fade = function (n) {
            t.fade(e, n);
          };
          u.slide = function (n) {
            t.slide(e, n);
          };
          u.carousel = function (n) {
            t.carousel(e, n);
          };
          u.flip = function (n) {
            t.flip(e, n);
          };
          u.flipList = function (n) {
            t.flipList(e, n);
          };
          o = {
            fade: u.fade,
            slide: u.slide,
            carousel: u.carousel,
            flip: u.flip,
            "flip-list": u.flipList
          };
          u.doAction = function (n) {
            var t = o[u.mode];
            typeof t == "function" && (t(n), u.hasRun = !0);
            n == u.timer.repeatCount && (u.runEvents = !1);
          };
          u.timer = new n.fn.metrojs.TileTimer(u.delay, u.doAction, u.repeatCount);
          e.data("LiveTile", u);
          (u.mode !== "flip-list" || u.flipListOnHover == !1) && (u.pauseOnHover ? t.bindPauseOnHover(e) : u.playOnHover && t.bindPlayOnHover(e, u));
          (u.link.length > 0 || typeof u.click == "function") && e.css({
            cursor: "pointer"
          }).bind("click.liveTile", function (n) {
            var t = !0;
            typeof u.click == "function" && (t = u.click(e, u) || !1);
            t && u.link.length > 0 && (n.preventDefault(), u.newWindow ? window.open(u.link) : window.location = u.link);
          });
          t.bindBounce(e, u);
          u.startNow && u.mode != "none" && (u.runEvents = !0, u.timer.start(u.initDelay));
        });
      },
      goto: function (t) {
        var i,
          r = typeof t,
          u;
        if (r === "undefined" && (i = {
          index: -99,
          delay: 0,
          autoAniDirection: !1
        }), r !== "number" && isNaN(t)) {
          if (r === "string") {
            if (t == "next") i = {
              index: -99,
              delay: 0
            };else if (t.indexOf("prev") === 0) i = {
              index: -100,
              delay: 0
            };else return n.error(t + ' is not a recognized action for .liveTile("goto")'), n(this);
          } else r === "object" && (typeof t.delay == "undefined" && (t.delay = 0), u = typeof t.index, u === "undefined" ? t.index = 0 : u === "string" && (t.index === "next" ? t.index = -99 : t.index.indexOf("prev") === 0 && (t.index = -100)), i = t);
        } else i = {
          index: parseInt(t, 10),
          delay: 0
        };
        return n(this).each(function (t, r) {
          var o = n(r),
            u = o.data("LiveTile"),
            h = o.data("metrojs.tile"),
            f = i.index,
            s,
            e;
          if (h.animating === !0) return n(this);
          if (u.mode === "carousel") {
            if (s = u.faces.$listTiles.filter(".active"), e = u.faces.$listTiles.index(s), f === -100 ? ((typeof i.autoAniDirection == "undefined" || i.autoAniDirection == !0) && (u.tempValues.animationDirection = typeof i.animationDirection == "undefined" ? "backward" : i.animationDirection), f = e === 0 ? u.faces.$listTiles.length - 1 : e - 1) : f === -99 && ((typeof i.autoAniDirection == "undefined" || i.autoAniDirection == !0) && (u.tempValues.animationDirection = typeof i.animationDirection == "undefined" ? "forward" : i.animationDirection), f = e + 1), e == f) return;
            typeof i.direction != "undefined" && (u.tempValues.direction = i.direction);
            typeof i.animationDirection != "undefined" && (u.tempValues.animationDirection = i.animationDirection);
            u.currentIndex = f == 0 ? u.faces.$listTiles.length : f - 1;
          } else u.currentIndex = f;
          u.runEvents = !0;
          u.timer.start(i.delay >= 0 ? i.delay : u.delay);
        });
      },
      play: function (t) {
        var i,
          r = typeof t;
        return r === "undefined" ? i = {
          delay: -1
        } : r === "number" ? i = {
          delay: t
        } : r === "object" && (typeof t.delay == "undefined" && (t.delay = -1), i = t), n(this).each(function (t, r) {
          var f = n(r),
            u = f.data("LiveTile");
          u.runEvents = !0;
          i.delay < 0 && !u.hasRun && (i.delay = u.initDelay);
          u.timer.start(i.delay >= 0 ? i.delay : u.delay);
        });
      },
      animate: function () {
        return n(this).each(function (t, i) {
          var r = n(i),
            u = r.data("LiveTile");
          u.doAction();
        });
      },
      stop: function () {
        return n(this).each(function (t, i) {
          var u = n(i),
            r = u.data("LiveTile");
          r.hasRun = !1;
          r.runEvents = !1;
          r.timer.stop();
          window.clearTimeout(r.eventTimeout);
          window.clearTimeout(r.flCompleteTimeout);
          window.clearTimeout(r.completeTimeout);
          r.mode === "flip-list" && r.faces.$listTiles.each(function (t, i) {
            var r = n(i).data("metrojs.tile");
            window.clearTimeout(r.eventTimeout);
            window.clearTimeout(r.flCompleteTimeout);
            window.clearTimeout(r.completeTimeout);
          });
        });
      },
      pause: function () {
        return n(this).each(function (t, i) {
          var u = n(i),
            r = u.data("LiveTile");
          r.timer.pause();
          r.runEvents = !1;
          window.clearTimeout(r.eventTimeout);
          window.clearTimeout(r.flCompleteTimeout);
          window.clearTimeout(r.completeTimeout);
          r.mode === "flip-list" && r.faces.$listTiles.each(function (t, i) {
            var r = n(i).data("metrojs.tile");
            window.clearTimeout(r.eventTimeout);
            window.clearTimeout(r.flCompleteTimeout);
            window.clearTimeout(r.completeTimeout);
          });
        });
      },
      restart: function (t) {
        var i,
          r = typeof t;
        return r === "undefined" ? i = {
          delay: -1
        } : r === "number" ? i = {
          delay: t
        } : r === "object" && (typeof t.delay == "undefined" && (t.delay = -1), i = t), n(this).each(function (t, r) {
          var f = n(r),
            u = f.data("LiveTile");
          i.delay < 0 && !u.hasRun && (i.delay = u.initDelay);
          u.hasRun = !1;
          u.runEvents = !0;
          u.timer.restart(i.delay >= 0 ? i.delay : u.delay);
        });
      },
      rebind: function (t) {
        return n(this).each(function (n, i) {
          typeof t != "undefined" ? (typeof t.timer != "undefined" && t.timer != null && t.timer.stop(), t.hasRun = !1, u.init.apply(i, [t])) : u.init.apply(i, [{}]);
        });
      },
      destroy: function (r) {
        var f = typeof r,
          u;
        return f === "undefined" ? u = {
          removeCss: !1
        } : f === "boolean" ? u = {
          removeCss: r
        } : f === "object" && (typeof r.removeCss == "undefined" && (r.removeCss = !1), u = r), n(this).each(function (r, f) {
          var o = n(f),
            e = o.data("LiveTile"),
            s;
          typeof e != "undefined" && (o.unbind(".liveTile"), s = i.appendStyleProperties({
            margin: "",
            cursor: ""
          }, ["transform", "transition"], ["", ""]), e.timer.stop(), window.clearTimeout(e.eventTimeout), window.clearTimeout(e.flCompleteTimeout), window.clearTimeout(e.completeTimeout), e.faces.$listTiles != null && e.faces.$listTiles.each(function (i, r) {
            var f = n(r),
              o,
              h;
            e.mode === "flip-list" ? (o = f.data("metrojs.tile"), window.clearTimeout(o.eventTimeout), window.clearTimeout(o.flCompleteTimeout), window.clearTimeout(o.completeTimeout)) : e.mode === "carousel" && (h = e.listData[i], h.bounce && t.unbindMsBounce(f, h));
            u.removeCss ? (f.removeClass("ha"), f.find(e.tileFaceSelector).unbind(".liveTile").removeClass("bounce flip-front flip-back ha slide slide-front slide-back").css(s)) : f.find(e.tileFaceSelector).unbind(".liveTile");
            f.removeData("metrojs.tile");
          }).unbind(".liveTile"), e.faces.$front != null && u.removeCss && e.faces.$front.removeClass("flip-front flip-back ha slide slide-front slide-back").css(s), e.faces.$back != null && u.removeCss && e.faces.$back.removeClass("flip-front flip-back ha slide slide-front slide-back").css(s), e.bounce && t.unbindMsBounce(o, e), e.playOnHover && t.unbindMsPlayOnHover(o, e), e.pauseOnhover && t.unbindMsPauseOnHover(o, e), o.removeClass("ha"), o.removeData("LiveTile"), o.removeData("metrojs.tile"), e = null);
        });
      }
    },
    t = {
      dataAtr: function (n, t, i) {
        return typeof n.attr("data-" + t) != "undefined" ? n.attr("data-" + t) : i;
      },
      dataMethod: function (n, t, i) {
        return typeof n.data(t) != "undefined" ? n.data(t) : i;
      },
      getDataOrDefault: null,
      initTileData: function (i, u) {
        var s = u.ignoreDataAttributes == !1,
          f = null,
          e,
          v,
          o,
          a;
        this.getDataOrDefault == null && (this.getDataOrDefault = r.capabilities.isOldJQuery ? this.dataAtr : this.dataMethod);
        f = s ? {
          speed: this.getDataOrDefault(i, "speed", u.speed),
          delay: this.getDataOrDefault(i, "delay", u.delay),
          stops: this.getDataOrDefault(i, "stops", u.stops),
          stack: this.getDataOrDefault(i, "stack", u.stack),
          mode: this.getDataOrDefault(i, "mode", u.mode),
          direction: this.getDataOrDefault(i, "direction", u.direction),
          useHardwareAccel: this.getDataOrDefault(i, "ha", u.useHardwareAccel),
          repeatCount: this.getDataOrDefault(i, "repeat", u.repeatCount),
          swap: this.getDataOrDefault(i, "swap", u.swap),
          appendBack: this.getDataOrDefault(i, "appendback", u.appendBack),
          currentIndex: this.getDataOrDefault(i, "start-index", u.currentIndex),
          animationDirection: this.getDataOrDefault(i, "ani-direction", u.animationDirection),
          startNow: this.getDataOrDefault(i, "start-now", u.startNow),
          tileSelector: this.getDataOrDefault(i, "tile-selector", u.tileSelector),
          tileFaceSelector: this.getDataOrDefault(i, "face-selector", u.tileFaceSelector),
          bounce: this.getDataOrDefault(i, "bounce", u.bounce),
          bounceDirections: this.getDataOrDefault(i, "bounce-dir", u.bounceDirections),
          bounceFollowsMove: this.getDataOrDefault(i, "bounce-follows", u.bounceFollowsMove),
          click: this.getDataOrDefault(i, "click", u.click),
          link: this.getDataOrDefault(i, "link", u.link),
          newWindow: this.getDataOrDefault(i, "new-window", u.newWindow),
          alwaysTrigger: this.getDataOrDefault(i, "always-trigger", u.alwaysTrigger),
          flipListOnHover: this.getDataOrDefault(i, "flip-onhover", u.flipListOnHover),
          pauseOnHover: this.getDataOrDefault(i, "pause-onhover", u.pauseOnHover),
          playOnHover: this.getDataOrDefault(i, "play-onhover", u.playOnHover),
          onHoverDelay: this.getDataOrDefault(i, "hover-delay", u.onHoverDelay),
          onHoverOutDelay: this.getDataOrDefault(i, "hoverout-delay", u.onHoverOutDelay),
          noHAflipOpacity: this.getDataOrDefault(i, "flip-opacity", u.noHAflipOpacity),
          useTranslate: this.getDataOrDefault(i, "use-translate", u.useTranslate),
          runEvents: !1,
          isReversed: !1,
          loopCount: 0,
          contentModules: [],
          listData: [],
          height: i.height(),
          width: i.width(),
          tempValues: {}
        } : n.extend(!0, {
          runEvents: !1,
          isReversed: !1,
          loopCount: 0,
          contentModules: [],
          listData: [],
          height: i.height(),
          width: i.width(),
          tempValues: {}
        }, u);
        f.useTranslate = f.useTranslate && f.useHardwareAccel && r.capabilities.canTransform && r.capabilities.canTransition;
        f.margin = f.direction === "vertical" ? f.height / 2 : f.width / 2;
        f.stops = typeof u.stops == "object" && u.stops instanceof Array ? u.stops : ("" + f.stops).split(",");
        f.stops.length === 1 && f.stops.push("0px");
        var h = f.swap instanceof Array ? f.swap : f.swap.replace(" ", "").split(","),
          c = s ? this.getDataOrDefault(i, "swap-front", u.swapFront) : u.swapFront,
          l = s ? this.getDataOrDefault(i, "swap-back", u.swapBack) : u.swapBack;
        for (f.swapFront = c instanceof Array ? c : c === "-" ? h : c.replace(" ", "").split(","), f.swapBack = l instanceof Array ? l : l === "-" ? h : l.replace(" ", "").split(","), e = 0; e < f.swapFront.length; e++) f.swapFront[e].length > 0 && n.inArray(f.swapFront[e], h) === -1 && h.push(f.swapFront[e]);
        for (e = 0; e < f.swapBack.length; e++) f.swapBack[e].length > 0 && n.inArray(f.swapBack[e], h) === -1 && h.push(f.swapBack[e]);
        for (f.swap = h, e = 0; e < h.length; e++) h[e].length > 0 && (v = n.fn.liveTile.contentModules.hasContentModule(h[e]), v > -1 && f.contentModules.push(n.fn.liveTile.contentModules.modules[v]));
        for (f.initDelay = s ? this.getDataOrDefault(i, "initdelay", u.initDelay) : u.initDelay, f.delay < -1 ? f.delay = u.triggerDelay(1) : f.delay < 0 && (f.delay = 3500 + Math.random() * 4501), f.initDelay < 0 && (f.initDelay = f.delay), o = {}, e = 0; e < f.contentModules.length; e++) n.extend(o, f.contentModules[e].data);
        for (n.extend(o, u, f), o.mode === "flip-list" ? (a = i.find(o.tileSelector).not(".tile-title"), a.each(function (i, r) {
          var u = n(r),
            f = {
              direction: s ? t.getDataOrDefault(u, "direction", o.direction) : o.direction,
              newWindow: s ? t.getDataOrDefault(u, "new-window", !1) : !1,
              link: s ? t.getDataOrDefault(u, "link", "") : "",
              faces: {
                $front: null,
                $back: null
              },
              height: u.height(),
              width: u.width(),
              isReversed: !1
            };
          f.margin = f.direction === "vertical" ? f.height / 2 : f.width / 2;
          o.listData.push(f);
        })) : o.mode === "carousel" && (o.stack = !0, a = i.find(o.tileSelector).not(".tile-title"), a.each(function (i, r) {
          var u = n(r),
            f = {
              bounce: s ? t.getDataOrDefault(u, "bounce", !1) : !1,
              bounceDirections: s ? t.getDataOrDefault(u, "bounce-dir", "all") : "all",
              link: s ? t.getDataOrDefault(u, "link", "") : "",
              newWindow: s ? t.getDataOrDefault(u, "new-window", !1) : !1,
              animationDirection: s ? t.getDataOrDefault(u, "ani-direction", "") : "",
              direction: s ? t.getDataOrDefault(u, "direction", "") : ""
            };
          o.listData.push(f);
        })), e = 0; e < f.contentModules.length; e++) typeof o.contentModules[e].initData == "function" && o.contentModules[e].initData(o, i);
        return f = null, o;
      },
      prepTile: function (u, f) {
        var e, c, l, s, h, a, v, y;
        u.addClass(f.mode);
        e = {
          $tileFaces: null,
          $listTiles: null,
          $front: null,
          $back: null
        };
        switch (f.mode) {
          case "fade":
            e.$tileFaces = u.find(f.tileFaceSelector).not(".tile-title");
            e.$front = f.faces.$front != null && f.faces.$front.length > 0 ? f.faces.$front.addClass("fade-front") : e.$tileFaces.filter(":first").addClass("fade-front");
            e.$back = f.faces.$back != null && f.faces.$back.length > 0 ? f.faces.$back.addClass("fade-back") : e.$tileFaces.length > 1 ? e.$tileFaces.filter(":last").addClass("fade-back") : f.appendBack ? n('<div class="fade-back"><\/div>').appendTo(u) : n("<div><\/div>");
            break;
          case "slide":
            e.$tileFaces = u.find(f.tileFaceSelector).not(".tile-title");
            e.$front = f.faces.$front != null && f.faces.$front.length > 0 ? f.faces.$front.addClass("slide-front") : e.$tileFaces.filter(":first").addClass("slide-front");
            e.$back = f.faces.$back != null && f.faces.$back.length > 0 ? f.faces.$back.addClass("slide-back") : e.$tileFaces.length > 1 ? e.$tileFaces.filter(":last").addClass("slide-back") : f.appendBack ? n('<div class="slide-back"><\/div>').appendTo(u) : n("<div><\/div>");
            f.stack == !0 && (f.direction === "vertical" ? (a = "top", v = "translate(0%, -100%) translateZ(0)") : (a = "left", v = "translate(-100%, 0%) translateZ(0)"), s = {}, f.useTranslate ? i.appendStyleProperties(s, ["transform"], [v]) : s[a] = "-100%", e.$back.css(s));
            u.data("metrojs.tile", {
              animating: !1
            });
            r.capabilities.canTransition && f.useHardwareAccel && (u.addClass("ha"), e.$front.addClass("ha"), e.$back.addClass("ha"));
            break;
          case "carousel":
            e.$listTiles = u.find(f.tileSelector).not(".tile-title");
            y = e.$listTiles.length;
            u.data("metrojs.tile", {
              animating: !1
            });
            f.currentIndex = Math.min(f.currentIndex, y - 1);
            e.$listTiles.each(function (u, e) {
              var s = n(e).addClass("slide"),
                o = f.listData[u],
                c = typeof o.animationDirection == "string" && o.animationDirection.length > 0 ? o.animationDirection : f.animationDirection,
                l = typeof o.direction == "string" && o.direction.length > 0 ? o.direction : f.direction;
              u == f.currentIndex ? s.addClass("active") : c === "forward" ? l === "vertical" ? (h = f.useTranslate ? i.appendStyleProperties({}, ["transform"], ["translate(0%, 100%) translateZ(0)"]) : {
                left: "0%",
                top: "100%"
              }, s.css(h)) : (h = f.useTranslate ? i.appendStyleProperties({}, ["transform"], ["translate(100%, 0%) translateZ(0)"]) : {
                left: "100%",
                top: "0%"
              }, s.css(h)) : c === "backward" && (l === "vertical" ? (h = f.useTranslate ? i.appendStyleProperties({}, ["transform"], ["translate(0%, -100%) translateZ(0)"]) : {
                left: "0%",
                top: "-100%"
              }, s.css(h)) : (h = f.useTranslate ? i.appendStyleProperties({}, ["transform"], ["translate(-100%, 0%) translateZ(0)"]) : {
                left: "-100%",
                top: "0%"
              }, s.css(h)));
              t.bindLink(s, o);
              f.useHardwareAccel && r.capabilities.canTransition && t.bindBounce(s, o);
              s = null;
              o = null;
            });
            r.capabilities.canFlip3d && f.useHardwareAccel && (u.addClass("ha"), e.$listTiles.addClass("ha"));
            break;
          case "flip-list":
            e.$listTiles = u.find(f.tileSelector).not(".tile-title");
            e.$listTiles.each(function (u, e) {
              var h = n(e).addClass("tile-" + (u + 1)),
                y = h.find(f.tileFaceSelector).filter(":first").addClass("flip-front").css({
                  margin: "0px"
                }),
                a,
                v,
                p,
                w;
              h.find(f.tileFaceSelector).length === 1 && f.appendBack == !0 && h.append("<div><\/div>");
              a = h.find(f.tileFaceSelector).filter(":last").addClass("flip-back").css({
                margin: "0px"
              });
              f.listData[u].faces.$front = y;
              f.listData[u].faces.$back = a;
              h.data("metrojs.tile", {
                animating: !1,
                count: 1,
                completeTimeout: null,
                flCompleteTimeout: null,
                index: u
              });
              v = h.data("metrojs.tile");
              r.capabilities.canFlip3d && f.useHardwareAccel ? (h.addClass("ha"), y.addClass("ha"), a.addClass("ha"), c = f.listData[u].direction === "vertical" ? "rotateX(180deg)" : "rotateY(180deg)", s = i.appendStyleProperties({}, ["transform"], [c]), a.css(s)) : (l = f.listData[u].direction === "vertical" ? {
                height: "100%",
                width: "100%",
                marginTop: "0px",
                opacity: "1"
              } : {
                height: "100%",
                width: "100%",
                marginLeft: "0px",
                opacity: "1"
              }, s = f.listData[u].direction === "vertical" ? {
                height: "0px",
                width: "100%",
                marginTop: f.listData[u].margin + "px",
                opacity: f.noHAflipOpacity
              } : {
                height: "100%",
                width: "0px",
                marginLeft: f.listData[u].margin + "px",
                opacity: f.noHAflipOpacity
              }, y.css(l), a.css(s));
              p = function () {
                v.count++;
                v.count >= o && (v.count = 1);
              };
              f.flipListOnHover && (w = f.flipListOnHoverEvent + ".liveTile", y.bind(w, function () {
                t.flip(h, v.count, f, p);
              }), a.bind(w, function () {
                t.flip(h, v.count, f, p);
              }));
              f.listData[u].link.length > 0 && h.css({
                cursor: "pointer"
              }).bind("click.liveTile", function () {
                f.listData[u].newWindow ? window.open(f.listData[u].link) : window.location = f.listData[u].link;
              });
            });
            break;
          case "flip":
            e.$tileFaces = u.find(f.tileFaceSelector).not(".tile-title");
            e.$front = f.faces.$front != null && f.faces.$front.length > 0 ? f.faces.$front.addClass("flip-front") : e.$tileFaces.filter(":first").addClass("flip-front");
            e.$back = f.faces.$back != null && f.faces.$back.length > 0 ? f.faces.$back.addClass("flip-back") : e.$tileFaces.length > 1 ? e.$tileFaces.filter(":last").addClass("flip-back") : f.appendBack ? n('<div class="flip-back"><\/div>').appendTo(u) : n("<div><\/div>");
            u.data("metrojs.tile", {
              animating: !1
            });
            r.capabilities.canFlip3d && f.useHardwareAccel ? (u.addClass("ha"), e.$front.addClass("ha"), e.$back.addClass("ha"), c = f.direction === "vertical" ? "rotateX(180deg)" : "rotateY(180deg)", s = i.appendStyleProperties({}, ["transform"], [c]), e.$back.css(s)) : (l = f.direction === "vertical" ? {
              height: "100%",
              width: "100%",
              marginTop: "0px",
              opacity: "1"
            } : {
              height: "100%",
              width: "100%",
              marginLeft: "0px",
              opacity: "1"
            }, s = f.direction === "vertical" ? {
              height: "0%",
              width: "100%",
              marginTop: f.margin + "px",
              opacity: "0"
            } : {
              height: "100%",
              width: "0%",
              marginLeft: f.margin + "px",
              opacity: "0"
            }, e.$front.css(l), e.$back.css(s));
        }
        return e;
      },
      bindPauseOnHover: function (t) {
        (function () {
          var i = t.data("LiveTile"),
            f = !1,
            u = !1,
            s = !1,
            h = !1,
            e = i.pauseOnHoverEvent == "both" || i.pauseOnHoverEvent == "mouseover" || i.pauseOnHoverEvent == "mouseenter",
            o = i.pauseOnHoverEvent == "both" || i.pauseOnHoverEvent == "mouseout" || i.pauseOnHoverEvent == "mouseleave",
            c;
          i.pOnHoverMethods = {
            pause: function () {
              i.timer.pause();
              i.mode === "flip-list" && i.faces.$listTiles.each(function (t, i) {
                window.clearTimeout(n(i).data("metrojs.tile").completeTimeout);
              });
            },
            over: function (n, t) {
              (t = typeof t == "undefined" ? !1 : t, t || !s) && (f || u || i.runEvents && (u = !0, i.eventTimeout = window.setTimeout(function () {
                u = !1;
                o && (f = !0);
                s = !1;
                i.pOnHoverMethods.pause();
              }, i.onHoverDelay)));
            },
            out: function (n, t) {
              if (t = typeof t == "undefined" ? !1 : t, t || h != !0) {
                if (u) {
                  window.clearTimeout(i.eventTimeout);
                  u = !1;
                  return;
                }
                if (e) {
                  if (!f && !u) return;
                  i.runEvents && i.timer.start(i.hasRun ? i.delay : i.initDelay);
                } else i.pOnHoverMethods.pause();
                f = !1;
                h = !1;
              }
            }
          };
          r.capabilities.canTouch ? window.PointerEvent || window.MSPointerEvent ? (c = window.MSPointerEvent ? "MS" : "", e && t[0].addEventListener(c + "PointerOver", i.pOnHoverMethods.over, !1), o && t[0].addEventListener(c + "PointerOut", i.pOnHoverMethods.out, !1)) : (e && (t.bind("mouseover.liveTile", i.pOnHoverMethods.over), t.bind("touchstart.liveTile", function (n) {
            s = !1;
            i.pOnHoverMethods.over.apply(t[0], [n, !0]);
          })), o && (t.bind("mouseout.liveTile", i.pOnHoverMethods.out), t.bind("touchend.liveTile", function (n) {
            h = !1;
            i.pOnHoverMethods.out.apply(t[0], [n, !0]);
          }))) : (e && t.bind("mouseover.liveTile", i.pOnHoverMethods.over), o && t.bind("mouseout.liveTile", i.pOnHoverMethods.out));
        })();
      },
      unbindMsPauseOnHover: function (n, t) {
        if (typeof t.pOnHoverMethods != "undefined" && (window.PointerEvent || window.MSPointerEvent)) {
          var i = window.MSPointerEvent ? "MS" : "";
          n[0].removeEventListener(i + "PointerOver", t.pOnHoverMethods.over, !1);
          n[0].removeEventListener(i + "PointerOut", t.pOnHoverMethods.out, !1);
        }
      },
      bindPlayOnHover: function (n, t) {
        (function () {
          var f = !1,
            i = !1,
            s = !1,
            h = !1,
            e = t.playOnHoverEvent == "both" || t.playOnHoverEvent == "mouseover" || t.playOnHoverEvent == "mouseenter",
            o = t.playOnHoverEvent == "both" || t.playOnHoverEvent == "mouseout" || t.playOnHoverEvent == "mouseleave",
            c;
          t.onHoverMethods = {
            over: function (r, e) {
              if ((e = typeof e == "undefined" ? !1 : e, e || !s) && !f && !i && (!t.bounce || t.bounceMethods.down == "no")) {
                var h = t.mode == "flip" || (t.startNow ? !t.isReversed : t.isReversed);
                window.clearTimeout(t.eventTimeout);
                (t.runEvents && h || !t.hasRun) && (i = !0, t.eventTimeout = window.setTimeout(function () {
                  i = !1;
                  o && (f = !0);
                  u.play.apply(n[0], [0]);
                  s = !1;
                }, t.onHoverDelay));
              }
            },
            out: function (r, o) {
              if (o = typeof o == "undefined" ? !1 : o, o || h != !0) {
                if (i) {
                  window.clearTimeout(t.eventTimeout);
                  i = !1;
                  return;
                }
                (!e || f || i) && (window.clearTimeout(t.eventTimeout), t.eventTimeout = window.setTimeout(function () {
                  var i = t.mode == "flip" || (t.startNow ? t.isReversed : !t.isReversed);
                  t.runEvents && i && u.play.apply(n[0], [0]);
                  h = !1;
                  f = !1;
                }, t.speed + t.onHoverOutDelay));
              }
            }
          };
          r.capabilities.canTouch ? window.PointerEvent || window.MSPointerEvent ? (c = window.MSPointerEvent ? "MS" : "", e && n[0].addEventListener(c + "PointerEnter", t.onHoverMethods.over, !1), o && n[0].addEventListener(c + "PointerLeave", t.onHoverMethods.out, !1)) : (e && (n.bind("touchstart.liveTile", function (i) {
            s = !0;
            t.onHoverMethods.over.apply(n[0], [i, !0]);
          }), n.bind("mouseenter.liveTile", t.onHoverMethods.over)), o && (n.bind("touchend.liveTile,touchcancel.liveTile", function (i) {
            h = !1;
            t.onHoverMethods.out.apply(n[0], [i, !0]);
          }), n.bind("mouseleave.liveTile", t.onHoverMethods.out))) : (e && n.bind("mouseenter.liveTile", t.onHoverMethods.over), o && n.bind("mouseleave.liveTile", t.onHoverMethods.out));
        })();
      },
      unbindMsPlayOnHover: function (n, t) {
        if (typeof t.onHoverMethods != "undefined" && (window.PointerEvent || window.MSPointerEvent)) {
          var i = window.MSPointerEvent ? "MS" : "";
          n[0].removeEventListener(i + "PointerOver", t.onHoverMethods.over, !1);
        }
      },
      bindBounce: function (t, u) {
        u.bounce && (t.addClass("bounce"), t.addClass("noselect"), function () {
          if (u.bounceMethods = {
            down: "no",
            threshold: 30,
            zeroPos: {
              x: 0,
              y: 0
            },
            eventPos: {
              x: 0,
              y: 0
            },
            inTilePos: {
              x: 0,
              y: 0
            },
            pointPos: {
              x: 0,
              y: 0
            },
            regions: {
              c: [0, 0],
              tl: [-1, -1],
              tr: [1, -1],
              bl: [-1, 1],
              br: [1, 1],
              t: [null, -1],
              r: [1, null],
              b: [null, 1],
              l: [-1, null]
            },
            targets: {
              all: ["c", "t", "r", "b", "l", "tl", "tr", "bl", "br"],
              edges: ["c", "t", "r", "b", "l"],
              corners: ["c", "tl", "tr", "bl", "br"]
            },
            hitTest: function (t, i, f, e) {
              var k = u.bounceMethods.regions,
                h = u.bounceMethods.targets[f],
                l = 0,
                c = null,
                y = null,
                p = {
                  hit: [0, 0],
                  name: "c"
                },
                s,
                o;
              if (r.capabilities.isOldAndroid || !r.capabilities.canTransition) return p;
              typeof h == "undefined" && (typeof f == "string" && (h = f.split(",")), n.isArray(h) && n.inArray("c") == -1 && (e = 0, p = null));
              for (var d = t.width(), g = t.height(), a = [d * e, g * e], w = i.x - d * .5, b = i.y - g * .5, v = [w > 0 ? Math.abs(w) <= a[0] ? 0 : 1 : Math.abs(w) <= a[0] ? 0 : -1, b > 0 ? Math.abs(b) <= a[1] ? 0 : 1 : Math.abs(b) <= a[1] ? 0 : -1]; l < h.length; l++) {
                if (c != null) return c;
                if (s = h[l], o = k[s], s == "*") return s = h[l + 1], {
                  region: k[s],
                  name: s
                };
                v[0] == o[0] && v[1] == o[1] ? c = {
                  hit: o,
                  name: s
                } : (v[0] == o[0] || o[0] == null) && (v[1] == o[1] || o[1] == null) && (y = {
                  hit: o,
                  name: s
                });
              }
              return c != null ? c : y != null ? y : p;
            },
            bounceDown: function (r) {
              var s, h, f, c;
              if (r.target.tagName != "A" || n(r).is(".bounce")) {
                var e = r.originalEvent && r.originalEvent.touches ? r.originalEvent.touches[0] : r,
                  o = t.offset(),
                  l = window.pageXOffset,
                  a = window.pageYOffset;
                u.bounceMethods.pointPos = {
                  x: e.pageX,
                  y: e.pageY
                };
                u.bounceMethods.inTilePos = {
                  x: e.pageX - o.left,
                  y: e.pageY - o.top
                };
                u.$tileParent || (u.$tileParent = t.parent());
                s = u.$tileParent.offset();
                u.bounceMethods.eventPos = {
                  x: o.left - s.left + t.width() / 2,
                  y: o.top - s.top + t.height() / 2
                };
                h = u.bounceMethods.hitTest(t, u.bounceMethods.inTilePos, u.bounceDirections, .25);
                h == null ? u.bounceMethods.down = "no" : (window.PointerEvent || window.MSPointerEvent ? (f = window.MSPointerEvent ? "MS" : "", document.addEventListener(f + "PointerUp", u.bounceMethods.bounceUp, !1), t[0].addEventListener(f + "PointerUp", u.bounceMethods.bounceUp, !1), document.addEventListener(f + "PointerCancel", u.bounceMethods.bounceUp, !1), u.bounceFollowsMove && t[0].addEventListener(f + "PointerMove", u.bounceMethods.bounceMove, !1)) : (n(document).bind("mouseup.liveTile, touchend.liveTile, touchcancel.liveTile, dragstart.liveTile", u.bounceMethods.bounceUp), u.bounceFollowsMove && (t.bind("touchmove.liveTile", u.bounceMethods.bounceMove), t.bind("mousemove.liveTile", u.bounceMethods.bounceMove))), c = "bounce-" + h.name, t.addClass(c), u.bounceMethods.down = c, u.bounceMethods.downPcss = i.appendStyleProperties({}, ["perspective-origin"], [u.bounceMethods.eventPos.x + "px " + u.bounceMethods.eventPos.y + "px"]), u.$tileParent.css(u.bounceMethods.downPcss));
              }
            },
            bounceUp: function () {
              if (u.bounceMethods.down != "no") {
                if (u.bounceMethods.unBounce(), window.PointerEvent || window.MSPointerEvent) {
                  var i = window.MSPointerEvent ? "MS" : "";
                  document.removeEventListener(i + "PointerUp", u.bounceMethods.bounceUp, !1);
                  t[0].removeEventListener(i + "PointerUp", u.bounceMethods.bounceUp, !1);
                  document.removeEventListener(i + "PointerCancel", u.bounceMethods.bounceUp, !1);
                  u.bounceFollowsMove && t[0].removeEventListener(i + "PointerMove", u.bounceMethods.bounceMove, !1);
                } else n(document).unbind("mouseup.liveTile, touchend.liveTile, touchcancel.liveTile, dragstart.liveTile", u.bounceMethods.bounceUp);
                u.bounceFollowsMove && (t.unbind("touchmove.liveTile", u.bounceMethods.bounceMove), t.unbind("mousemove.liveTile", u.bounceMethods.bounceMove));
              }
            },
            bounceMove: function (n) {
              var i;
              if (u.bounceMethods.down != "no") {
                var r = n.originalEvent && n.originalEvent.touches ? n.originalEvent.touches[0] : n,
                  f = Math.abs(r.pageX - u.bounceMethods.pointPos.x),
                  e = Math.abs(r.pageY - u.bounceMethods.pointPos.y);
                (f > u.bounceMethods.threshold || e > u.bounceMethods.threshold) && (i = u.bounceMethods.down, u.bounceMethods.bounceDown(n), i != u.bounceMethods.down && t.removeClass(i));
              }
            },
            unBounce: function () {
              if (t.removeClass(u.bounceMethods.down), typeof u.bounceMethods.downPcss == "object") u.bounceMethods.downPcss = i.appendStyleProperties({}, ["perspective-origin", "perspective-origin-x", "perspective-origin-y"], ["", "", ""]), window.setTimeout(function () {
                u.$tileParent.css(u.bounceMethods.downPcss);
              }, 200);
              u.bounceMethods.down = "no";
              u.bounceMethods.inTilePos = u.bounceMethods.zeroPos;
              u.bounceMethods.eventPos = u.bounceMethods.zeroPos;
            }
          }, window.PointerEvent || window.MSPointerEvent) {
            var f = window.MSPointerEvent ? "MS" : "";
            t[0].addEventListener(f + "PointerDown", u.bounceMethods.bounceDown, !1);
          } else r.capabilities.canTouch ? (t.bind("touchstart.liveTile", u.bounceMethods.bounceDown), t.bind("mousedown.liveTile", u.bounceMethods.bounceDown)) : t.bind("mousedown.liveTile", u.bounceMethods.bounceDown);
        }());
      },
      unbindMsBounce: function (n, t) {
        if (t.bounce && (window.PointerEvent || window.MSPointerEvent)) {
          var i = window.MSPointerEvent ? "MS" : "";
          n[0].removeEventListener(i + "PointerDown", t.bounceMethods.bounceDown, !1);
          n[0].removeEventListener(i + "PointerCancel", t.bounceMethods.bounceUp, !1);
          n[0].removeEventListener(i + "PointerOut", t.bounceMethods.bounceUp, !1);
        }
      },
      bindLink: function (t, i) {
        i.link.length > 0 && t.css({
          cursor: "pointer"
        }).bind("click.liveTile", function (t) {
          (t.target.tagName != "A" || n(t).is(".live-tile,.slide,.flip")) && (i.newWindow ? window.open(i.link) : window.location = i.link);
        });
      },
      runContenModules: function (n, t, i, r) {
        for (var f, u = 0; u < n.contentModules.length; u++) f = n.contentModules[u], typeof f.action == "function" && f.action(n, t, i, r);
      },
      fade: function (i, r, u) {
        var f = typeof u == "object" ? u : i.data("LiveTile"),
          c = function () {
            (f.timer.repeatCount > 0 || f.timer.repeatCount == -1) && f.timer.count != f.timer.repeatCount && f.timer.start(f.delay);
          },
          o,
          s,
          h;
        if (typeof f == "undefined") {
          e(n.fn.liveTile.defaults.rebindMessage);
          return;
        }
        if (!f.faces.$front.is(":animated")) {
          if (f.timer.pause(), o = f.loopCount + 1, f.isReversed = o % 2 == 0, s = f.animationStarting.call(i[0], f, f.faces.$front, f.faces.$back), typeof s != "undefined" && s == !1) {
            c();
            return;
          }
          f.loopCount = o;
          h = function () {
            c();
            t.runContenModules(f, f.faces.$front, f.faces.$back);
            f.animationComplete.call(i[0], f, f.faces.$front, f.faces.$back);
          };
          f.isReversed ? f.faces.$front.fadeIn(f.speed, f.noHaTransFunc, h) : f.faces.$front.fadeOut(f.speed, f.noHaTransFunc, h);
        }
      },
      slide: function (u, f, o, s, h) {
        var c = typeof o == "object" ? o : u.data("LiveTile"),
          l = u.data("metrojs.tile"),
          tt,
          it,
          w,
          ut,
          d,
          g,
          ft,
          nt,
          st,
          ht;
        if (typeof c == "undefined") {
          e(n.fn.liveTile.defaults.rebindMessage);
          return;
        }
        if (l.animating == !0 || u.is(":animated")) {
          c = null;
          l = null;
          return;
        }
        if (tt = function () {
          (c.timer.repeatCount > 0 || c.timer.repeatCount == -1) && c.timer.count != c.timer.repeatCount && c.timer.start(c.delay);
        }, c.mode !== "carousel") {
          if (c.isReversed = c.currentIndex % 2 != 0, c.timer.pause(), it = c.animationStarting.call(u[0], c, c.faces.$front, c.faces.$back), typeof it != "undefined" && it == !1) {
            tt();
            return;
          }
          c.loopCount = c.loopCount + 1;
        } else c.isReversed = !0;
        w = typeof c.tempValues.direction == "string" && c.tempValues.direction.length > 0 ? c.tempValues.direction : c.direction;
        c.tempValues.direction = null;
        var a = {},
          v = {},
          ct = typeof s == "undefined" ? c.currentIndex : s,
          y = n.trim(c.stops[Math.min(ct, c.stops.length - 1)]),
          et = y.indexOf("px"),
          p = 0,
          b = 0,
          lt = w === "vertical" ? c.height : c.width,
          rt = w === "vertical" ? "top" : "left",
          k = c.stack == !0,
          ot = function () {
            typeof h == "undefined" ? (c.currentIndex = c.currentIndex + 1, c.currentIndex > c.stops.length - 1 && (c.currentIndex = 0)) : h();
            c.mode != "carousel" && tt();
            t.runContenModules(c, c.faces.$front, c.faces.$back, c.currentIndex);
            c.animationComplete.call(u[0], c, c.faces.$front, c.faces.$back);
            c = null;
            l = null;
          };
        if (et > 0 ? (b = parseInt(y.substring(0, et), 10), p = b - lt + "px") : (b = parseInt(y.replace("%", ""), 10), p = b - 100 + "%"), r.capabilities.canTransition && c.useHardwareAccel) {
          if (typeof l.animating != "undefined" && l.animating == !0) return;
          l.animating = !0;
          ut = ["transition-property", "transition-duration", "transition-timing-function"];
          d = [c.useTranslate ? "transform" : rt, c.speed + "ms", c.haTransFunc];
          d[i.browserPrefix + "transition-property"] = i.browserPrefix + "transform";
          a = i.appendStyleProperties(a, ut, d);
          v = i.appendStyleProperties(v, ut, d);
          g = w === "vertical";
          ft = g ? "top" : "left";
          c.useTranslate ? (nt = g ? "translate(0%, " + y + ")" : "translate(" + y + ", 0%)", a = i.appendStyleProperties(a, ["transform"], [nt + "translateZ(0)"]), k && (nt = g ? "translate(0%, " + p + ")" : "translate(" + p + ", 0%)", v = i.appendStyleProperties(v, ["transform"], [nt + "translateZ(0)"]))) : (a[ft] = y, k && (v[ft] = p));
          c.faces.$front.css(a);
          k && c.faces.$back.css(v);
          window.clearTimeout(c.completeTimeout);
          c.completeTimeout = window.setTimeout(function () {
            l.animating = !1;
            ot();
          }, c.speed);
        } else a[rt] = y, v[rt] = p, l.animating = !0, st = c.faces.$front.stop(), ht = c.faces.$back.stop(), st.animate(a, c.speed, c.noHaTransFunc, function () {
          l.animating = !1;
          ot();
        }), k && ht.animate(v, c.speed, c.noHaTransFunc, function () {});
      },
      carousel: function (u, f) {
        var o = u.data("LiveTile"),
          a,
          b,
          tt,
          v,
          c,
          d,
          s,
          y,
          w;
        if (typeof o == "undefined") {
          e(n.fn.liveTile.defaults.rebindMessage);
          return;
        }
        if (a = u.data("metrojs.tile"), a.animating == !0 || o.faces.$listTiles.length <= 1) {
          a = null;
          return;
        }
        b = function () {
          (o.timer.repeatCount > 0 || o.timer.repeatCount == -1) && o.timer.count != o.timer.repeatCount && o.timer.start(o.delay);
        };
        o.timer.pause();
        var h = o.faces.$listTiles.filter(".active"),
          k = o.faces.$listTiles.index(h),
          g = o.currentIndex,
          nt = g != k ? g : k,
          p = nt + 1 >= o.faces.$listTiles.length ? 0 : nt + 1,
          l = o.listData[p];
        if (k == p) {
          a = null;
          h = null;
          return;
        }
        if (tt = typeof o.tempValues.animationDirection == "string" && o.tempValues.animationDirection.length > 0 ? o.tempValues.animationDirection : typeof l.animationDirection == "string" && l.animationDirection.length > 0 ? l.animationDirection : o.animationDirection, o.tempValues.animationDirection = null, typeof o.tempValues.direction == "string" && o.tempValues.direction.length > 0 ? v = o.tempValues.direction : typeof l.direction == "string" && l.direction.length > 0 ? (v = l.direction, o.tempValues.direction = v) : v = o.direction, c = o.faces.$listTiles.eq(p), d = o.animationStarting.call(u[0], o, h, c), typeof d != "undefined" && d == !1) {
          b();
          return;
        }
        o.loopCount = o.loopCount + 1;
        s = i.appendStyleProperties({}, ["transition-duration"], ["0s"]);
        y = v === "vertical";
        tt === "backward" ? (o.useTranslate && r.capabilities.canTransition ? (w = y ? "translate(0%, -100%)" : "translate(-100%, 0%)", s = i.appendStyleProperties(s, ["transform"], [w + " translateZ(0)"]), o.stops = ["100%"]) : (y ? (s.top = "-100%", s.left = "0%") : (s.top = "0%", s.left = "-100%"), o.stops = ["100%"]), o.faces.$front = h, o.faces.$back = c) : (o.useTranslate && r.capabilities.canTransition ? (w = y ? "translate(0%, 100%)" : "translate(100%, 0%)", s = i.appendStyleProperties(s, ["transform"], [w + " translateZ(0)"])) : y ? (s.top = "100%", s.left = "0%") : (s.top = "0%", s.left = "100%"), o.faces.$front = c, o.faces.$back = h, o.stops = ["0%"]);
        c.css(s);
        window.setTimeout(function () {
          h.removeClass("active");
          c.addClass("active");
          t.slide(u, f, o, 0, function () {
            o.currentIndex = p;
            a = null;
            h = null;
            c = null;
            b();
          });
        }, 150);
      },
      flip: function (u, f, o, s) {
        var a = u.data("metrojs.tile"),
          h,
          nt,
          ft,
          tt,
          it;
        if (typeof a != "undefined" && a.animating == !0) {
          a = null;
          return;
        }
        if (h = typeof o == "object" ? o : u.data("LiveTile"), typeof h == "undefined") {
          e(n.fn.liveTile.defaults.rebindMessage);
          return;
        }
        var c,
          l,
          w,
          g,
          rt,
          ut,
          k = typeof s == "undefined",
          v = 0,
          y,
          d = function () {
            (h.timer.repeatCount > 0 || h.timer.repeatCount == -1) && h.timer.count != h.timer.repeatCount && h.timer.start(h.delay);
          };
        if (k) {
          if (h.timer.pause(), nt = h.loopCount + 1, y = nt % 2 == 0, h.isReversed = y, c = h.faces.$front, l = h.faces.$back, ft = y ? [h, l, c] : [h, c, l], tt = h.animationStarting.apply(u[0], ft), typeof tt != "undefined" && tt == !1) {
            d();
            return;
          }
          w = h.direction;
          height = h.height;
          width = h.width;
          margin = h.margin;
          h.loopCount = nt;
        } else y = f % 2 == 0, v = a.index, c = h.listData[v].faces.$front, l = h.listData[v].faces.$back, h.listData[v].isReversed = y, w = h.listData[v].direction, height = h.listData[v].height, width = h.listData[v].width, margin = h.listData[v].margin;
        if (r.capabilities.canFlip3d && h.useHardwareAccel) {
          g = y ? "360deg" : "180deg";
          rt = w === "vertical" ? "rotateX(" + g + ")" : "rotateY(" + g + ")";
          ut = i.appendStyleProperties({}, ["transform", "transition"], [rt, "all " + h.speed + "ms " + h.haTransFunc + " 0s"]);
          var et = y ? "540deg" : "360deg",
            ht = w === "vertical" ? "rotateX(" + et + ")" : "rotateY(" + et + ")",
            ct = i.appendStyleProperties({}, ["transform", "transition"], [ht, "all " + h.speed + "ms " + h.haTransFunc + " 0s"]);
          c.css(ut);
          l.css(ct);
          it = function () {
            a.animating = !1;
            var n, r;
            y ? (n = w === "vertical" ? "rotateX(0deg)" : "rotateY(0deg)", r = i.appendStyleProperties({}, ["transform", "transition"], [n, "all 0s " + h.haTransFunc + " 0s"]), c.css(r), t.runContenModules(h, c, l, v), k ? (d(), h.animationComplete.call(u[0], h, c, l)) : s(h, c, l), c = null, l = null, h = null, a = null) : (t.runContenModules(h, l, c, v), k ? (d(), h.animationComplete.call(u[0], h, l, c)) : s(h, l, c));
          };
          h.mode === "flip-list" ? (window.clearTimeout(h.listData[v].completeTimeout), h.listData[v].completeTimeout = window.setTimeout(it, h.speed)) : (window.clearTimeout(h.completeTimeout), h.completeTimeout = window.setTimeout(it, h.speed));
        } else {
          var p = h.speed / 2,
            ot = w === "vertical" ? {
              height: "0px",
              width: "100%",
              marginTop: margin + "px",
              opacity: h.noHAflipOpacity
            } : {
              height: "100%",
              width: "0px",
              marginLeft: margin + "px",
              opacity: h.noHAflipOpacity
            },
            st = w === "vertical" ? {
              height: "100%",
              width: "100%",
              marginTop: "0px",
              opacity: "1"
            } : {
              height: "100%",
              width: "100%",
              marginLeft: "0px",
              opacity: "1"
            },
            b;
          y ? (a.animating = !0, l.stop().animate(ot, {
            duration: p
          }), b = function () {
            a.animating = !1;
            c.stop().animate(st, {
              duration: p,
              complete: function () {
                t.runContenModules(h, c, l, v);
                k ? (d(), h.animationComplete.call(u[0], h, c, l)) : s(h, c, l);
                a = null;
                c = null;
                l = null;
              }
            });
          }, h.mode === "flip-list" ? (window.clearTimeout(h.listData[a.index].completeTimeout), h.listData[a.index].completeTimeout = window.setTimeout(b, p)) : (window.clearTimeout(h.completeTimeout), h.completeTimeout = window.setTimeout(b, p))) : (a.animating = !0, c.stop().animate(ot, {
            duration: p
          }), b = function () {
            a.animating = !1;
            l.stop().animate(st, {
              duration: p,
              complete: function () {
                t.runContenModules(h, l, c, v);
                k ? (d(), h.animationComplete.call(u[0], h, l, c)) : s(h, l, c);
                c = null;
                l = null;
                h = null;
                a = null;
              }
            });
          }, h.mode === "flip-list" ? (window.clearTimeout(h.listData[a.index].completeTimeout), h.listData[a.index].completeTimeout = window.setTimeout(b, p)) : (window.clearTimeout(h.completeTimeout), h.completeTimeout = window.setTimeout(b, p)));
        }
      },
      flipList: function (i) {
        var r = i.data("LiveTile"),
          u = r.speed,
          s = !1,
          h = function () {
            (r.timer.repeatCount > 0 || r.timer.repeatCount == -1) && r.timer.count != r.timer.repeatCount && r.timer.start(r.delay);
          },
          f;
        if (typeof r == "undefined") {
          e(n.fn.liveTile.defaults.rebindMessage);
          return;
        }
        if (r.timer.pause(), f = r.animationStarting.call(i[0], r, null, null), typeof f != "undefined" && f == !1) {
          h();
          return;
        }
        r.loopCount = r.loopCount + 1;
        r.faces.$listTiles.each(function (i, f) {
          var h = n(f),
            e = h.data("metrojs.tile"),
            a = r.triggerDelay(i),
            l = r.speed + Math.max(a, 0),
            c = r.alwaysTrigger;
          c || (c = Math.random() * 351 > 150 ? !0 : !1);
          c && (s = !0, u = Math.max(l + r.speed, u), window.clearTimeout(e.flCompleteTimeout), e.flCompleteTimeout = window.setTimeout(function () {
            t.flip(h, e.count, r, function () {
              e.count++;
              e.count >= o && (e.count = 1);
              h = null;
              e = null;
            });
          }, l));
        });
        s && (window.clearTimeout(r.flCompleteTimeout), r.flCompleteTimeout = window.setTimeout(function () {
          t.runContenModules(r, null, null, -1);
          r.animationComplete.call(i[0], r, null, null);
          h();
        }, u + r.speed));
      }
    },
    i = {
      stylePrefixes: "Webkit Moz O ms Khtml ".split(" "),
      domPrefixes: "-webkit- -moz- -o- -ms- -khtml- ".split(" "),
      browserPrefix: null,
      appendStyleProperties: function (t, i, r) {
        for (var u = 0; u <= i.length - 1; u++) t[n.trim(this.browserPrefix + i[u])] = r[u], t[n.trim(i[u])] = r[u];
        return t;
      },
      applyStyleValue: function (t, i, r) {
        return t[n.trim(this.browserPrefix + i)] = r, t[i] = r, t;
      },
      getBrowserPrefix: function () {
        var t, n;
        if (this.browserPrefix == null) {
          for (t = "", n = 0; n <= this.domPrefixes.length - 1; n++) typeof document.body.style[this.domPrefixes[n] + "transform"] != "undefined" && (t = this.domPrefixes[n]);
          return this.browserPrefix = t;
        }
        return this.browserPrefix;
      },
      shuffleArray: function (n) {
        for (var t = []; n.length;) t.push(n.splice(Math.random() * n.length, 1));
        while (t.length) n.push(t.pop());
        return n;
      }
    },
    s = {
      moduleName: "custom",
      customSwap: {
        data: {
          customDoSwapFront: function () {
            return !1;
          },
          customDoSwapBack: function () {
            return !1;
          },
          customGetContent: function () {
            return null;
          }
        },
        initData: function (t) {
          var i = {};
          i.doSwapFront = n.inArray("custom", t.swapFront) > -1 && t.customDoSwapFront();
          i.doSwapBack = n.inArray("custom", t.swapBack) > -1 && t.customDoSwapBack();
          t.customSwap = typeof t.customSwap != "undefined" ? n.extend(i, t.customSwap) : i;
        },
        action: function () {}
      },
      htmlSwap: {
        moduleName: "html",
        data: {
          frontContent: [],
          frontIsRandom: !0,
          frontIsInGrid: !1,
          backContent: [],
          backIsRandom: !0,
          backIsInGrid: !1
        },
        initData: function (i, r) {
          var u = {
            backBag: [],
            backIndex: 0,
            backStaticIndex: 0,
            backStaticRndm: -1,
            prevBackIndex: -1,
            frontBag: [],
            frontIndex: 0,
            frontStaticIndex: 0,
            frontStaticRndm: -1,
            prevFrontIndex: -1
          };
          i.ignoreDataAttributes ? (u.frontIsRandom = i.frontIsRandom, u.frontIsInGrid = i.frontIsInGrid, u.backIsRandom = i.backIsRandom, u.backIsInGrid = i.backIsInGrid) : (u.frontIsRandom = t.getDataOrDefault(r, "front-israndom", i.frontIsRandom), u.frontIsInGrid = t.getDataOrDefault(r, "front-isingrid", i.frontIsInGrid), u.backIsRandom = t.getDataOrDefault(r, "back-israndom", i.backIsRandom), u.backIsInGrid = t.getDataOrDefault(r, "back-isingrid", i.backIsInGrid));
          u.doSwapFront = n.inArray("html", i.swapFront) > -1 && i.frontContent instanceof Array && i.frontContent.length > 0;
          u.doSwapBack = n.inArray("html", i.swapBack) > -1 && i.backContent instanceof Array && i.backContent.length > 0;
          i.htmlSwap = typeof i.htmlSwap != "undefined" ? n.extend(u, i.htmlSwap) : u;
          i.htmlSwap.doSwapFront && (i.htmlSwap.frontBag = this.prepBag(i.htmlSwap.frontBag, i.frontContent, i.htmlSwap.prevFrontIndex), i.htmlSwap.frontStaticRndm = i.htmlSwap.frontBag.pop());
          i.htmlSwap.doSwapBack && (i.htmlSwap.backBag = this.prepBag(i.htmlSwap.backBag, i.backContent, i.htmlSwap.prevBackIndex), i.htmlSwap.backStaticRndm = i.htmlSwap.backBag.pop());
        },
        prepBag: function (n, t, r) {
          var f, u;
          for (n = n || [], f = 0, u = 0; u < t.length; u++) (u != r || n.length === 1) && (n[f] = u, f++);
          return i.shuffleArray(n);
        },
        getFrontSwapIndex: function (n) {
          var t = 0;
          return n.htmlSwap.frontIsRandom ? (n.htmlSwap.frontBag.length === 0 && (n.htmlSwap.frontBag = this.prepBag(n.htmlSwap.frontBag, n.frontContent, n.htmlSwap.prevFrontIndex)), t = n.htmlSwap.frontIsInGrid ? n.htmlSwap.frontStaticRndm : n.htmlSwap.frontBag.pop()) : t = n.htmlSwap.frontIsInGrid ? n.htmlSwap.frontStaticIndex : n.htmlSwap.frontIndex, t;
        },
        getBackSwapIndex: function (n) {
          var t = 0;
          return n.htmlSwap.backIsRandom ? (n.htmlSwap.backBag.length === 0 && (n.htmlSwap.backBag = this.prepBag(n.htmlSwap.backBag, n.backContent, n.htmlSwap.prevBackIndex)), t = n.htmlSwap.backIsInGrid ? n.htmlSwap.backStaticRndm : n.htmlSwap.backBag.pop()) : t = n.htmlSwap.backIsInGrid ? n.htmlSwap.backStaticIndex : n.htmlSwap.backIndex, t;
        },
        action: function (n, t, i, r) {
          if (n.htmlSwap.doSwapFront || n.htmlSwap.doSwapBack) {
            var f = n.mode === "flip-list",
              u = 0,
              e = f ? n.listData[Math.max(r, 0)].isReversed : n.isReversed;
            if (f && r == -1) {
              e ? n.htmlSwap.doSwapBack && (n.htmlSwap.backBag.length === 0 && (n.htmlSwap.backBag = this.prepBag(n.htmlSwap.backBag, n.backContent, n.htmlSwap.backStaticRndm)), n.htmlSwap.backStaticRndm = n.htmlSwap.backBag.pop(), n.htmlSwap.backStaticIndex++, n.htmlSwap.backStaticIndex >= n.backContent.length && (n.htmlSwap.backStaticIndex = 0)) : n.htmlSwap.doSwapFront && (n.htmlSwap.frontBag.length === 0 && (n.htmlSwap.frontBag = this.prepBag(n.htmlSwap.frontBag, n.frontContent, n.htmlSwap.frontStaticRndm)), n.htmlSwap.frontStaticRndm = n.htmlSwap.frontBag.pop(), n.htmlSwap.frontStaticIndex++, n.htmlSwap.frontStaticIndex >= n.frontContent.length && (n.htmlSwap.frontStaticIndex = 0));
              return;
            }
            if (e) {
              if (!n.htmlSwap.doSwapBack) return;
              u = this.getBackSwapIndex(n);
              n.htmlSwap.prevBackIndex = u;
              i.html(n.backContent[n.htmlSwap.backIndex]);
              n.htmlSwap.backIndex++;
              n.htmlSwap.backIndex >= n.backContent.length && (n.htmlSwap.backIndex = 0);
              f || (n.htmlSwap.backStaticIndex++, n.htmlSwap.backStaticIndex >= n.backContent.length && (n.htmlSwap.backStaticIndex = 0));
            } else {
              if (!n.htmlSwap.doSwapFront) return;
              u = this.getFrontSwapIndex(n);
              n.htmlSwap.prevFrontIndex = u;
              n.mode === "slide" ? n.startNow ? i.html(n.frontContent[u]) : t.html(n.frontContent[u]) : i.html(n.frontContent[u]);
              n.htmlSwap.frontIndex++;
              n.htmlSwap.frontIndex >= n.frontContent.length && (n.htmlSwap.frontIndex = 0);
              f || (n.htmlSwap.frontStaticIndex++, n.htmlSwap.frontStaticIndex >= n.frontContent.length && (n.htmlSwap.frontStaticIndex = 0));
            }
          }
        }
      },
      imageSwap: {
        moduleName: "image",
        data: {
          preloadImages: !1,
          imageCssSelector: ">img,>a>img",
          fadeSwap: !1,
          frontImages: [],
          frontIsRandom: !0,
          frontIsBackgroundImage: !1,
          frontIsInGrid: !1,
          backImages: null,
          backIsRandom: !0,
          backIsBackgroundImage: !1,
          backIsInGrid: !1
        },
        initData: function (i, r) {
          var u = {
              backBag: [],
              backIndex: 0,
              backStaticIndex: 0,
              backStaticRndm: -1,
              frontBag: [],
              frontIndex: 0,
              frontStaticIndex: 0,
              frontStaticRndm: -1,
              prevBackIndex: -1,
              prevFrontIndex: -1
            },
            f = i.ignoreDataAttributes;
          f ? (u.imageCssSelector = t.getDataOrDefault(r, "image-css", i.imageCssSelector), u.fadeSwap = t.getDataOrDefault(r, "fadeswap", i.fadeSwap), u.frontIsRandom = t.getDataOrDefault(r, "front-israndom", i.frontIsRandom), u.frontIsInGrid = t.getDataOrDefault(r, "front-isingrid", i.frontIsInGrid), u.frontIsBackgroundImage = t.getDataOrDefault(r, "front-isbg", i.frontIsBackgroundImage), u.backIsRandom = t.getDataOrDefault(r, "back-israndom", i.backIsRandom), u.backIsInGrid = t.getDataOrDefault(r, "back-isingrid", i.backIsInGrid), u.backIsBackgroundImage = t.getDataOrDefault(r, "back-isbg", i.backIsBackgroundImage), u.doSwapFront = n.inArray("image", i.swapFront) > -1 && i.frontImages instanceof Array && i.frontImages.length > 0, u.doSwapBack = n.inArray("image", i.swapBack) > -1 && i.backImages instanceof Array && i.backImages.length > 0, u.alwaysSwapFront = t.getDataOrDefault(r, "front-alwaysswap", i.alwaysSwapFront), u.alwaysSwapBack = t.getDataOrDefault(r, "back-alwaysswap", i.alwaysSwapBack)) : (u.imageCssSelector = i.imageCssSelector, u.fadeSwap = i.fadeSwap, u.frontIsRandom = i.frontIsRandom, u.frontIsInGrid = i.frontIsInGrid, u.frontIsBackgroundImage = i.frontIsBackgroundImage, u.backIsRandom = i.backIsRandom, u.backIsInGrid = i.backIsInGrid, u.backIsBackgroundImage = i.backIsBackgroundImage, u.doSwapFront = n.inArray("image", i.swapFront) > -1 && i.frontImages instanceof Array && i.frontImages.length > 0, u.doSwapBack = n.inArray("image", i.swapBack) > -1 && i.backImages instanceof Array && i.backImages.length > 0, u.alwaysSwapFront = i.alwaysSwapFront, u.alwaysSwapBack = i.alwaysSwapBack);
          i.imgSwap = typeof i.imgSwap != "undefined" ? n.extend(u, i.imgSwap) : u;
          i.imgSwap.doSwapFront && (i.imgSwap.frontBag = this.prepBag(i.imgSwap.frontBag, i.frontImages, i.imgSwap.prevFrontIndex), i.imgSwap.frontStaticRndm = i.imgSwap.frontBag.pop(), i.preloadImages && n(i.frontImages).metrojs.preloadImages(function () {}));
          i.imgSwap.doSwapBack && (i.imgSwap.backBag = this.prepBag(i.imgSwap.backBag, i.backImages, i.imgSwap.prevBackIndex), i.imgSwap.backStaticRndm = i.imgSwap.backBag.pop(), i.preloadImages && n(i.backImages).metrojs.preloadImages(function () {}));
        },
        prepBag: function (n, t, r) {
          var f, u;
          for (n = n || [], f = 0, u = 0; u < t.length; u++) (u != r || t.length === 1) && (n[f] = u, f++);
          return i.shuffleArray(n);
        },
        getFrontSwapIndex: function (n) {
          var t = 0;
          return n.imgSwap.frontIsRandom ? (n.imgSwap.frontBag.length === 0 && (n.imgSwap.frontBag = this.prepBag(n.imgSwap.frontBag, n.frontImages, n.imgSwap.prevFrontIndex)), t = n.imgSwap.frontIsInGrid ? n.imgSwap.frontStaticRndm : n.imgSwap.frontBag.pop()) : t = n.imgSwap.frontIsInGrid ? n.imgSwap.frontStaticIndex : n.imgSwap.frontIndex, t;
        },
        getBackSwapIndex: function (n) {
          var t = 0;
          return n.imgSwap.backIsRandom ? (n.imgSwap.backBag.length === 0 && (n.imgSwap.backBag = this.prepBag(n.imgSwap.backBag, n.backImages, n.imgSwap.prevBackIndex)), t = n.imgSwap.backIsInGrid ? n.imgSwap.backStaticRndm : n.imgSwap.backBag.pop()) : t = n.imgSwap.backIsInGrid ? n.imgSwap.backStaticIndex : n.imgSwap.backIndex, t;
        },
        setImageProperties: function (t, i, r) {
          var f = {},
            u = {};
          typeof i.src != "undefined" && (r ? f.backgroundImage = "url('" + i.src + "')" : u.src = i.src);
          typeof i.alt != "undefined" && (u.alt = i.alt);
          typeof i.css == "object" ? t.css(n.extend(f, i.css)) : t.css(f);
          typeof i.attr == "object" ? t.attr(n.extend(u, i.attr)) : t.attr(u);
        },
        action: function (n, t, i, r) {
          var c, f, l, e;
          if (n.imgSwap.doSwapFront || n.imgSwap.doSwapBack) {
            var o = n.mode === "flip-list",
              a = n.mode == "slide",
              u = 0,
              h = o ? n.listData[Math.max(r, 0)].isReversed : n.isReversed;
            if (o && r == -1) {
              (n.alwaysSwapFront || !h) && n.imgSwap.doSwapFront && (n.imgSwap.frontBag.length === 0 && (n.imgSwap.frontBag = this.prepBag(n.imgSwap.frontBag, n.frontImages, n.imgSwap.frontStaticRndm)), n.imgSwap.frontStaticRndm = n.imgSwap.frontBag.pop(), n.imgSwap.frontStaticIndex++, n.imgSwap.frontStaticIndex >= n.frontImages.length && (n.imgSwap.frontStaticIndex = 0));
              (n.alwaysSwapBack || h) && n.imgSwap.doSwapBack && (n.imgSwap.backBag.length === 0 && (n.imgSwap.backBag = this.prepBag(n.imgSwap.backBag, n.backImages, n.imgSwap.backStaticRndm)), n.imgSwap.backStaticRndm = n.imgSwap.backBag.pop(), n.imgSwap.backStaticIndex++, n.imgSwap.backStaticIndex >= n.backImages.length && (n.imgSwap.backStaticIndex = 0));
              return;
            }
            if (n.alwaysSwapFront || !h) {
              if (!n.imgSwap.doSwapFront) return;
              u = this.getFrontSwapIndex(n);
              n.imgSwap.prevFrontIndex = u;
              c = n.mode === "slide" ? t : i;
              f = c.find(n.imgSwap.imageCssSelector);
              l = typeof n.frontImages[u] == "object" ? n.frontImages[u] : {
                src: n.frontImages[u]
              };
              e = function (t) {
                var i = n.imgSwap.frontIsBackgroundImage;
                typeof t == "function" && (i ? window.setTimeout(t, 100) : f[0].onload = t);
                s.imageSwap.setImageProperties(f, l, i);
              };
              n.fadeSwap ? f.fadeOut(function () {
                e(function () {
                  f.fadeIn();
                });
              }) : e();
              n.imgSwap.frontIndex++;
              n.imgSwap.frontIndex >= n.frontImages.length && (n.imgSwap.frontIndex = 0);
              o || (n.imgSwap.frontStaticIndex++, n.imgSwap.frontStaticIndex >= n.frontImages.length && (n.imgSwap.frontStaticIndex = 0));
            }
            if (n.alwaysSwapBack || h) {
              if (!n.imgSwap.doSwapBack) return;
              u = this.getBackSwapIndex(n);
              n.imgSwap.prevBackIndex = u;
              c = i;
              f = c.find(n.imgSwap.imageCssSelector);
              l = typeof n.backImages[u] == "object" ? n.backImages[u] : {
                src: n.backImages[u]
              };
              e = function () {
                s.imageSwap.setImageProperties(f, l, n.imgSwap.backIsBackgroundImage);
              };
              n.fadeSwap ? f.fadeOut(function () {
                e(function () {
                  f.fadeIn();
                });
              }) : e();
              n.imgSwap.backIndex++;
              n.imgSwap.backIndex >= n.backImages.length && (n.imgSwap.backIndex = 0);
              o || (n.imgSwap.backStaticIndex++, n.imgSwap.backStaticIndex >= n.backImages.length && (n.imgSwap.backStaticIndex = 0));
            }
          }
        }
      }
    };
  n.fn.metrojs.TileTimer = function (n, t, i) {
    this.timerId = null;
    this.interval = n;
    this.action = t;
    this.count = 0;
    this.repeatCount = typeof i == "undefined" ? 0 : i;
    this.start = function (t) {
      window.clearTimeout(this.timerId);
      var i = this;
      this.timerId = window.setTimeout(function () {
        i.tick.call(i, n);
      }, t);
    };
    this.tick = function (n) {
      this.action(this.count + 1);
      this.count++;
      this.count >= o && (this.count = 0);
      (this.repeatCount > 0 || this.repeatCount == -1) && (this.count != this.repeatCount ? this.start(n) : this.stop());
    };
    this.stop = function () {
      this.timerId = window.clearTimeout(this.timerId);
      this.reset();
    };
    this.resume = function () {
      (this.repeatCount > 0 || this.repeatCount == -1) && this.count != this.repeatCount && this.start(n);
    };
    this.pause = function () {
      this.timerId = window.clearTimeout(this.timerId);
    };
    this.reset = function () {
      this.count = 0;
    };
    this.restart = function (n) {
      this.stop();
      this.start(n);
    };
  };
  jQuery.fn.metrojs.theme = {
    loadDefaultTheme: function (n) {
      var t, i, r;
      typeof n == "undefined" || n == null ? n = jQuery.fn.metrojs.theme.defaults : (t = jQuery.fn.metrojs.theme.defaults, jQuery.extend(t, n), n = t);
      i = typeof localStorage != "undefined";
      r = function (n) {
        return typeof window.localStorage[n] != "undefined" && window.localStorage[n] != null;
      };
      !i || r("Metro.JS.AccentColor") && r("Metro.JS.BaseAccentColor") ? i ? (n.accentColor = window.localStorage["Metro.JS.AccentColor"], n.baseTheme = window.localStorage["Metro.JS.BaseAccentColor"], jQuery(n.accentCssSelector).addClass(n.accentColor).data("accent", n.accentColor), jQuery(n.baseThemeCssSelector).addClass(n.baseTheme), typeof n.loaded == "function" && n.loaded(n.baseTheme, n.accentColor)) : (jQuery(n.accentCssSelector).addClass(n.accentColor).data("accent", n.accentColor), jQuery(n.baseThemeCssSelector).addClass(n.baseTheme), typeof n.loaded == "function" && n.loaded(n.baseTheme, n.accentColor), typeof n.preloadAltBaseTheme != "undefined" && n.preloadAltBaseTheme && jQuery([n.baseTheme == "dark" ? n.metroLightUrl : n.metroDarkUrl]).metrojs.preloadImages(function () {})) : (window.localStorage["Metro.JS.AccentColor"] = n.accentColor, window.localStorage["Metro.JS.BaseAccentColor"] = n.baseTheme, jQuery(n.accentCssSelector).addClass(n.accentColor).data("accent", n.accentColor), jQuery(n.baseThemeCssSelector).addClass(n.baseTheme), typeof n.loaded == "function" && n.loaded(n.baseTheme, n.accentColor), typeof n.preloadAltBaseTheme != "undefined" && n.preloadAltBaseTheme && jQuery([n.baseTheme == "dark" ? n.metroLightUrl : n.metroDarkUrl]).metrojs.preloadImages(function () {}));
    },
    applyTheme: function (n, t, i) {
      var e, r, u, f;
      typeof i == "undefined" || i == null ? i = jQuery.fn.metrojs.theme.defaults : (e = jQuery.fn.metrojs.theme.defaults, i = jQuery.extend({}, e, i));
      typeof n != "undefined" && n != null && (typeof localStorage != "undefined" && (window.localStorage["Metro.JS.BaseAccentColor"] = n), r = jQuery(i.baseThemeCssSelector), r.length > 0 && (n == "dark" ? r.addClass("dark").removeClass("light") : n == "light" && r.addClass("light").removeClass("dark")));
      typeof t != "undefined" && t != null && (typeof localStorage != "undefined" && (window.localStorage["Metro.JS.AccentColor"] = t), u = jQuery(i.accentCssSelector), u.length > 0 && (f = !1, u.each(function () {
        var i, n;
        jQuery(this).addClass(t);
        i = jQuery(this).data("accent");
        i != t && (n = jQuery(this).attr("class").replace(i, ""), n = n.replace(/(\s)+/, " "), jQuery(this).attr("class", n), jQuery(this).data("accent", t), f = !0);
      }), f && typeof i.accentPicked == "function" && i.accentPicked(t)));
    },
    appendAccentColors: function (t) {
      var r, i;
      typeof t == "undefined" || t == null ? t = jQuery.fn.metrojs.theme.defaults : (r = jQuery.fn.metrojs.theme.defaults, t = jQuery.extend({}, r, t));
      var u = "",
        f = t.accentColors,
        e = t.accentListTemplate;
      for (i = 0; i < f.length; i++) u += e.replace(/\{0\}/g, f[i]);
      n(u).appendTo(t.accentListContainer);
    },
    appendBaseThemes: function (t) {
      var r, i;
      typeof t == "undefined" || t == null ? t = jQuery.fn.metrojs.theme.defaults : (r = jQuery.fn.metrojs.theme.defaults, t = jQuery.extend({}, r, t));
      var u = "",
        f = t.baseThemes,
        e = t.baseThemeListTemplate;
      for (i = 0; i < f.length; i++) u += e.replace(/\{0\}/g, f[i]);
      n(u).appendTo(t.baseThemeListContainer);
    },
    defaults: {
      baseThemeCssSelector: "body",
      accentCssSelector: ".tiles",
      accentColor: "blue",
      baseTheme: "dark",
      accentColors: ["amber", "blue", "brown", "cobalt", "crimson", "cyan", "magenta", "lime", "indigo", "green", "emerald", "mango", "mauve", "olive", "orange", "pink", "red", "sienna", "steel", "teal", "violet", "yellow"],
      baseThemes: ["light", "dark"],
      accentListTemplate: "<li><a href='javascript:;' title='{0}' class='accent {0}'><\/a><\/li>",
      accentListContainer: "ul.theme-options,.theme-options>ul",
      baseThemeListTemplate: "<li><a href='javascript:;' title='{0}' class='accent {0}'><\/a><\/li>",
      baseThemeListContainer: "ul.base-theme-options,.base-theme-options>ul"
    }
  };
  jQuery.fn.applicationBar = function (t) {
    var i = typeof jQuery.fn.metrojs.theme != "undefined" ? jQuery.fn.metrojs.theme.defaults : {},
      r;
    if (jQuery.extend(i, jQuery.fn.applicationBar.defaults, t), typeof jQuery.fn.metrojs.theme != "undefined") {
      r = jQuery.fn.metrojs.theme;
      i.shouldApplyTheme && r.loadDefaultTheme(i);
      var u = i.accentListContainer.replace(",", " a,") + " a",
        f = function () {
          var n = jQuery(this).attr("class").replace("accent", "").replace(" ", "");
          r.applyTheme(null, n, i);
          typeof i.accentPicked == "function" && i.accentPicked(n);
        },
        e = i.baseThemeListContainer.replace(",", " a,") + " a",
        o = function () {
          var n = jQuery(this).attr("class").replace("accent", "").replace(" ", "");
          r.applyTheme(n, null, i);
          typeof i.themePicked == "function" && i.themePicked(n);
        };
      if (typeof n.fn.on == "function") {
        n(this).on("click.appBar", u, f);
        n(this).on("click.appBar", e, o);
      } else n(u).live("click.appBar", f), n(e).live("click.appBar", o);
    }
    return n(this).each(function (t, r) {
      var f = n(r),
        u = n.extend({}, i);
      u.collapseHeight == "auto" && (u.collapseHeight = n(this).outerHeight());
      navigator.userAgent.match(/(Android|webOS|iPhone|iPod|BlackBerry|PIE|IEMobile)/i) && (navigator.userAgent.match(/(IEMobile\/1)/i) || navigator.userAgent.match(/(iPhone OS [56789])/i) || f.css({
        position: "absolute",
        bottom: "0px"
      }));
      u.slideOpen = function () {
        f.hasClass("expanded") || u.animateAppBar(!1);
      };
      u.slideClosed = function () {
        f.hasClass("expanded") && u.animateAppBar(!0);
      };
      u.animateAppBar = function (n) {
        var r = n ? u.collapseHeight : u.expandHeight,
          t;
        if (n) {
          if (t = i.collapse(), typeof t != "undefined" && t === !1) return;
          f.removeClass("expanded");
        } else {
          if (t = i.expand(), typeof t != "undefined" && t === !1) return;
          f.hasClass("expanded") || f.addClass("expanded");
        }
        f.stop().animate({
          height: r
        }, {
          duration: u.duration
        }, function () {
          n ? i.collapsed() : i.expanded();
        });
      };
      f.data("ApplicationBar", u);
      f.find(i.handleSelector).click(function () {
        u.animateAppBar(f.hasClass("expanded"));
      });
      u.bindKeyboard == !0 && jQuery(document.documentElement).keyup(function (n) {
        n.keyCode == 38 ? n.target && n.target.tagName.match(/INPUT|TEXTAREA|SELECT/i) == null && (f.hasClass("expanded") || u.animateAppBar(!1)) : n.keyCode == 40 && n.target && n.target.tagName.match(/INPUT|TEXTAREA|SELECT/i) == null && f.hasClass("expanded") && u.animateAppBar(!0);
      });
    });
  };
  jQuery.fn.applicationBar.defaults = {
    applyTheme: !0,
    themePicked: function () {},
    accentPicked: function () {},
    loaded: function () {},
    duration: 300,
    expandHeight: "320px",
    collapseHeight: "auto",
    bindKeyboard: !0,
    handleSelector: "a.etc",
    metroLightUrl: "images/metroIcons_light.jpg",
    metroDarkUrl: "images/metroIcons.jpg",
    preloadAltBaseTheme: !1,
    expand: function () {},
    collapse: function () {},
    expanded: function () {},
    collapsed: function () {}
  };
  n.fn.metrojs.preloadImages = function (t) {
    var i = n(this).toArray(),
      r = n("<img style='display:none;' />").appendTo("body");
    n(this).each(function () {
      var n = this;
      typeof this == "object" && (n = this.src);
      r.attr({
        src: n
      }).load(function () {
        for (var n = 0; n < i.length; n++) i[n] == element && i.splice(n, 1);
        i.length == 0 && t();
      });
    });
    r.remove();
  };
  n.fn.metrojs.MetroModernizr = function (t) {
    if (typeof t == "undefined" && (t = {
      useHardwareAccel: !0,
      useModernizr: typeof Modernizr != "undefined"
    }), this.isOldJQuery = /^1\.[0123]/.test(n.fn.jquery), this.isOldAndroid = function () {
      var t, i;
      try {
        if (t = navigator.userAgent, t.indexOf("Android") >= 0 && (i = parseFloat(t.slice(t.indexOf("Android") + 8)), i < 2.3)) return !0;
      } catch (r) {
        n.error(r);
      }
      return !1;
    }(), this.canTransform = !1, this.canTransition = !1, this.canTransform3d = !1, this.canAnimate = !1, this.canTouch = !1, this.canFlip3d = t.useHardwareAccel, t.useHardwareAccel == !0) if (t.useModernizr == !1) {
      if (typeof MetroModernizr != "undefined") this.canTransform = window.MetroModernizr.canTransform, this.canTransition = window.MetroModernizr.canTransition, this.canTransform3d = window.MetroModernizr.canTransform3d, this.canAnimate = window.MetroModernizr.canAnimate, this.canTouch = window.MetroModernizr.canTouch;else {
        window.MetroModernizr = {};
        var i = "metromodernizr",
          r = document.documentElement,
          e = document.head || document.getElementsByTagName("head")[0],
          u = document.createElement(i),
          o = u.style,
          s = " -webkit- -moz- -o- -ms- ".split(" "),
          l = "Webkit Moz O ms Khtml".split(" "),
          f = function (n, t) {
            for (var i in n) if (o[n[i]] !== undefined && (!t || t(n[i], u))) return !0;
          },
          h = function (n, t) {
            var i = n.charAt(0).toUpperCase() + n.substr(1),
              r = (n + " " + l.join(i + " ") + i).split(" ");
            return !!f(r, t);
          },
          a = function () {
            var n = !!f(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]);
            return n && "webkitPerspective" in r.style && (n = c(["@media (", s.join("transform-3d),("), i, ")", "{#metromodernizr{left:9px;position:absolute;height:3px;}}"].join(""), function (n) {
              return n.offsetHeight === 3 && n.offsetLeft === 9;
            })), n;
          },
          c = function (n, t) {
            var f = document.createElement("style"),
              u = document.createElement("div"),
              o;
            return f.textContent = n, e.appendChild(f), u.id = i, r.appendChild(u), o = t(u), f.parentNode.removeChild(f), u.parentNode.removeChild(u), !!o;
          },
          v = function () {
            return canTouch = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || window.PointerEvent && window.navigator.maxTouchPoints > 0 || window.MSPointerEvent && window.navigator.msMaxTouchPoints > 0 || c(["@media (", s.join("touch-enabled),("), i, ")", "{#metromodernizr{top:9px;position:absolute}}"].join(""), function (n) {
              return n.offsetTop === 9;
            });
          };
        this.canTransform = !!f(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"]);
        this.canTransition = h("transitionProperty");
        this.canTransform3d = a();
        this.canAnimate = h("animationName");
        this.canTouch = v();
        window.MetroModernizr.canTransform = this.canTransform;
        window.MetroModernizr.canTransition = this.canTransition;
        window.MetroModernizr.canTransform3d = this.canTransform3d;
        window.MetroModernizr.canAnimate = this.canAnimate;
        window.MetroModernizr.canTouch = this.canTouch;
        r = null;
        e = null;
        u = null;
        o = null;
      }
    } else this.canTransform = n("html").hasClass("csstransforms"), this.canTransition = n("html").hasClass("csstransitions"), this.canTransform3d = n("html").hasClass("csstransforms3d"), this.canAnimate = n("html").hasClass("cssanimations"), this.canTouch = n("html").hasClass("touch") || typeof window.navigator.msMaxTouchPoints != "undefined" && window.navigator.msMaxTouchPoints > 0;
    this.canFlip3d = this.canFlip3d && this.canAnimate && this.canTransform && this.canTransform3d;
  };
})(jQuery);

/***/ }),

/***/ 85152:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/expand.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expand": () => (/* binding */ expand)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 41944);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeInternals */ 99280);


function expand(project, concurrent = Infinity, scheduler) {
  concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => (0,_mergeInternals__WEBPACK_IMPORTED_MODULE_1__.mergeInternals)(source, subscriber, project, concurrent, undefined, true, scheduler));
}

/***/ }),

/***/ 44276:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/pluck.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pluck": () => (/* binding */ pluck)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ 50635);

function pluck(...properties) {
  const length = properties.length;
  if (length === 0) {
    throw new Error('list of properties cannot be empty.');
  }
  return (0,_map__WEBPACK_IMPORTED_MODULE_0__.map)(x => {
    let currentProp = x;
    for (let i = 0; i < length; i++) {
      const p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
      if (typeof p !== 'undefined') {
        currentProp = p;
      } else {
        return undefined;
      }
    }
    return currentProp;
  });
}

/***/ }),

/***/ 89648:
/*!*******************************************!*\
  !*** ./node_modules/widgster/widgster.js ***!
  \*******************************************/
/***/ (function() {

/**
 * Widgster plugin.
 */
(function (global, factory) {
  "use strict";

  if (global.jQuery && global.jQuery.fn) {
    factory(global.jQuery);
  } else {
    console.warn("Widgster must be executed in a browser environment with jQuery defined");
  }
})(typeof window !== "undefined" ? window : this, function ($) {
  // WIDGSTER CLASS DEFINITION
  // ======================

  var Widgster = function (el, options) {
    this.$element = $(el);
    this.$collapse = this.$element.find('[data-widgster=collapse]');
    this.$expand = this.$element.find('[data-widgster=expand]');
    this.$fullscreen = this.$element.find('[data-widgster=fullscreen]');
    this.$restore = this.$element.find('[data-widgster=restore]');
    this.options = options;
    this.collapsed = options.collapsed;
    this.fullscreened = options.fullscreened;
    this._initHandlers();
    if (this.collapsed) {
      this.collapse(false);
    } else {
      this.$expand.hide();
    }
    if (this.fullscreened) {
      this.fullscreen();
    } else {
      this.$restore.hide();
    }
    this.options.autoload && this.load();
    var interval = parseInt(this.options.autoload);
    if (!isNaN(interval)) {
      var widgster = this;
      this._autoloadInterval = setInterval(function () {
        widgster.load();
      }, interval);
    }
  };
  Widgster.DEFAULTS = {
    collapsed: false,
    fullscreened: false,
    transitionDuration: 150,
    bodySelector: '.body',
    showLoader: true,
    autoload: false,
    loaderTemplate: '<div style="text-align: center; margin-top: 10px;">Loading...</div>',
    /**
     * provide a way to insert a prompt before removing widget
     * @param callback
     */
    closePrompt: function (callback) {
      callback();
    }
  };
  Widgster.prototype.collapse = function (animate) {
    animate = typeof animate == "undefined" ? true : animate;
    var e = $.Event('collapse.widgster');
    this.$element.trigger(e);
    if (e.isDefaultPrevented()) return;
    var widgster = this,
      duration = animate ? this.options.transitionDuration : 0;
    this.$element.find(this.options.bodySelector).slideUp(duration, function () {
      widgster.$element.addClass('collapsed');
      widgster.$element.trigger($.Event('collapsed.widgster'));
      widgster.collapsed = true;
    });
    this.$collapse.hide();
    this.$expand.show();
    return false;
  };
  Widgster.prototype.expand = function (animate) {
    animate = typeof animate == "undefined" ? true : animate;
    var e = $.Event('expand.widgster');
    this.$element.trigger(e);
    if (e.isDefaultPrevented()) return;
    var widgster = this,
      duration = animate ? this.options.transitionDuration : 0;
    this.$element.find(this.options.bodySelector).slideDown(duration, function () {
      widgster.$element.removeClass('collapsed');
      widgster.$element.trigger($.Event('expanded.widgster'));
      widgster.collapsed = false;
    });
    this.$collapse.show();
    this.$expand.hide();
    return false;
  };
  Widgster.prototype.close = function () {
    this.options.closePrompt && this.options.closePrompt($.proxy(this._doClose, this));
    return false;
  };
  Widgster.prototype.load = function () {
    var e = $.Event('load.widgster');
    this.$element.trigger(e);
    if (e.isDefaultPrevented()) return;
    var widgster = this;
    this.$element.find(this.options.bodySelector).load(this.options.load, function (responseText, textStatus, xhr) {
      widgster.expand();
      widgster.options.showLoader && widgster._hideLoader();
      widgster.$element.trigger($.Event('loaded.widgster', {
        responseText: responseText,
        textStatus: textStatus,
        xhr: xhr
      }));
    });
    this.options.showLoader && this._showLoader();
    return false;
  };
  Widgster.prototype.fullscreen = function () {
    var e = $.Event('fullscreen.widgster');
    this.$element.trigger(e);
    if (e.isDefaultPrevented()) return;
    this.$element.css({
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      margin: 0,
      'z-index': 10000
    });
    $('body').css('overflow', 'hidden');
    this.wasCollapsed = this.collapsed;
    this.expand(false);
    this.$fullscreen.hide();
    this.$restore.show();
    this.$collapse.hide();
    this.$expand.hide();
    this.$element.addClass('fullscreened');
    this.$element.trigger($.Event('fullscreened.widgster'));
    return false;
  };
  Widgster.prototype.restore = function () {
    var e = $.Event('restore.widgster');
    this.$element.trigger(e);
    if (e.isDefaultPrevented()) return;
    this.$element.css({
      position: '',
      top: '',
      right: '',
      bottom: '',
      left: '',
      margin: '',
      'z-index': ''
    });
    $('body').css('overflow', '');
    this.$fullscreen.show();
    this.$restore.hide();
    if (this.collapsed) {
      this.$collapse.hide();
      this.$expand.show();
    } else {
      this.$collapse.show();
      this.$expand.hide();
    }
    this.wasCollapsed && this.collapse(false);
    this.$element.removeClass('fullscreened');
    this.$element.trigger($.Event('restored.widgster'));
    return false;
  };
  Widgster.prototype._doClose = function () {
    //could have been remove.widgster, but http://bugs.jquery.com/ticket/14600
    var e = $.Event('close.widgster');
    this.$element.trigger(e);
    if (e.isDefaultPrevented()) return;
    $('body').css('overflow', '');
    this.$element.detach();
    e = $.Event('closed.widgster', {
      $element: this.$element
    });
    this.$element.trigger(e);
  };
  Widgster.prototype._showLoader = function () {
    var $body = this.$element.find(this.options.bodySelector);
    this.$loaderWrap = this.$element.find('.widgster-loader-wrap');

    //create loader html if does not exist
    if (this.$loaderWrap.length == 0) {
      this.$loaderWrap = $('<div class="widgster-loader-wrap" style="position: absolute; top: 0; right: 0; bottom: 0; ' + 'left: 0; display: none"></div>');
      this.$element.append(this.$loaderWrap);
    }
    this.$loaderWrap.html(this.options.loaderTemplate);
    this.$loaderWrap.css({
      'margin-top': $body.position().top
    });
    if (!this.collapsed) {
      $body.fadeTo(this.options.transitionDuration, 0);
      this.$loaderWrap.fadeIn(this.options.transitionDuration);
    }
  };
  Widgster.prototype._hideLoader = function () {
    this.$loaderWrap.fadeOut(this.options.transitionDuration);
    this.$element.find(this.options.bodySelector).fadeTo(this.options.transitionDuration, 1);
  };

  /**
   * Attach all required widgster functions to data-widgster elements.
   * @private
   */
  Widgster.prototype._initHandlers = function () {
    this.$element.on('click.collapse.widgster', '[data-widgster=collapse]', $.proxy(this.collapse, this));
    this.$element.on('click.expand.widgster', '[data-widgster=expand]', $.proxy(this.expand, this));
    this.$element.on('click.close.widgster', '[data-widgster=close]', $.proxy(this.close, this));
    this.$element.on('click.load.widgster', '[data-widgster=load]', $.proxy(this.load, this));
    this.$element.on('click.fullscreen.widgster', '[data-widgster=fullscreen]', $.proxy(this.fullscreen, this));
    this.$element.on('click.restore.widgster', '[data-widgster=restore]', $.proxy(this.restore, this));
  };

  // NAMESPACED DATA ATTRIBUTES
  // =======================

  function getNamespacedData(namespace, data) {
    var namespacedData = {};
    for (var key in data) {
      // key starts with namespace
      if (key.slice(0, namespace.length) == namespace) {
        var namespacedKey = key.slice(namespace.length, key.length);
        namespacedKey = namespacedKey.charAt(0).toLowerCase() + namespacedKey.slice(1);
        namespacedData[namespacedKey] = data[key];
      }
    }
    return namespacedData;
  }

  // WIDGSTER PLUGIN DEFINITION
  // =======================

  $.fn.widgster = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('widgster');
      var options = $.extend({}, Widgster.DEFAULTS, getNamespacedData('widgster', $this.data()), typeof option == 'object' && option);
      if (!data) $this.data('widgster', new Widgster(this, options));
      if (typeof option == 'string') data[option]();
    });
  };
  $.fn.widgster.Constructor = Widgster;
});

/***/ }),

/***/ 48880:
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-scrollbar/fesm2020/ngx-scrollbar-smooth-scroll.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SMOOTH_SCROLL_OPTIONS": () => (/* binding */ SMOOTH_SCROLL_OPTIONS),
/* harmony export */   "SmoothScroll": () => (/* binding */ SmoothScroll),
/* harmony export */   "SmoothScrollManager": () => (/* binding */ SmoothScrollManager),
/* harmony export */   "SmoothScrollModule": () => (/* binding */ SmoothScrollModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 70867);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/platform */ 15712);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 58184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85152);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 62566);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bezier-easing */ 24609);








const SMOOTH_SCROLL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('SMOOTH_SCROLL_OPTIONS');

// @dynamic
class SmoothScrollManager {
  get _w() {
    return this._document.defaultView;
  }
  /**
   * Timing method
   */
  get _now() {
    return this._w.performance && this._w.performance.now ? this._w.performance.now.bind(this._w.performance) : Date.now;
  }
  constructor(_document, _platform, customDefaultOptions) {
    this._document = _document;
    this._platform = _platform;
    // Keeps track of the ongoing SmoothScroll functions so they can be handled in case of duplication.
    // Each scrolled element gets a destroyer stream which gets deleted immediately after it completes.
    // Purpose: If user called a scroll function again on the same element before the scrolls completes,
    // it cancels the ongoing scroll and starts a new one
    this._onGoingScrolls = new Map();
    this._defaultOptions = {
      duration: 468,
      easing: {
        x1: 0.42,
        y1: 0,
        x2: 0.58,
        y2: 1
      },
      ...customDefaultOptions
    };
  }
  /**
   * changes scroll position inside an element
   */
  _scrollElement(el, x, y) {
    el.scrollLeft = x;
    el.scrollTop = y;
  }
  /**
   * Handles a given parameter of type HTMLElement, ElementRef or selector
   */
  _getElement(el, parent) {
    if (typeof el === 'string') {
      return (parent || this._document).querySelector(el);
    }
    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceElement)(el);
  }
  /**
   * Initializes a destroyer stream, re-initializes it if the element is already being scrolled
   */
  _initSmoothScroll(el) {
    if (this._onGoingScrolls.has(el)) {
      this._onGoingScrolls.get(el).next();
    }
    return this._onGoingScrolls.set(el, new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject()).get(el);
  }
  /**
   * Checks if smooth scroll has reached, cleans up the smooth scroll stream and resolves its promise
   */
  _isFinished(context, destroyed, resolve) {
    if (context.currentX !== context.x || context.currentY !== context.y) {
      return true;
    }
    destroyed.next();
    resolve();
    return false;
  }
  /**
   * Terminates an ongoing smooth scroll
   */
  _interrupted(el, destroyed) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(el, 'wheel', {
      passive: true,
      capture: true
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(el, 'touchmove', {
      passive: true,
      capture: true
    }), destroyed).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1));
  }
  /**
   * Deletes the destroyer function, runs if the smooth scroll has finished or interrupted
   */
  _destroy(el, destroyed) {
    destroyed.complete();
    this._onGoingScrolls.delete(el);
  }
  /**
   * A function called recursively that, given a context, steps through scrolling
   */
  _step(context) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(subscriber => {
      let elapsed = (this._now() - context.startTime) / context.duration;
      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;
      // apply easing to elapsed time
      const value = context.easing(elapsed);
      context.currentX = context.startX + (context.x - context.startX) * value;
      context.currentY = context.startY + (context.y - context.startY) * value;
      this._scrollElement(context.scrollable, context.currentX, context.currentY);
      // Proceed to the step
      rxjs__WEBPACK_IMPORTED_MODULE_8__.animationFrameScheduler.schedule(() => subscriber.next(context));
    });
  }
  _applyScrollToOptions(el, options) {
    if (!options.duration) {
      this._scrollElement(el, options.left, options.top);
      return Promise.resolve();
    }
    // Initialize a destroyer stream, reinitialize it if the element is already being scrolled
    const destroyed = this._initSmoothScroll(el);
    const context = {
      scrollable: el,
      startTime: this._now(),
      startX: el.scrollLeft,
      startY: el.scrollTop,
      x: options.left == null ? el.scrollLeft : ~~options.left,
      y: options.top == null ? el.scrollTop : ~~options.top,
      duration: options.duration,
      easing: bezier_easing__WEBPACK_IMPORTED_MODULE_0__(options.easing.x1, options.easing.y1, options.easing.x2, options.easing.y2)
    };
    return new Promise(resolve => {
      // Scroll each step recursively
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.expand)(() => this._step(context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeWhile)(currContext => this._isFinished(currContext, destroyed, resolve)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._interrupted(el, destroyed)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.finalize)(() => this._destroy(el, destroyed))).subscribe();
    });
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param scrollable element
   * @param customOptions specified the offsets to scroll to.
   */
  scrollTo(scrollable, customOptions) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.isPlatformBrowser)(this._platform)) {
      const el = this._getElement(scrollable);
      const isRtl = getComputedStyle(el).direction === 'rtl';
      const rtlScrollAxisType = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__.getRtlScrollAxisType)();
      const options = {
        ...this._defaultOptions,
        ...customOptions,
        ...{
          // Rewrite start & end offsets as right or left offsets.
          left: customOptions.left == null ? isRtl ? customOptions.end : customOptions.start : customOptions.left,
          right: customOptions.right == null ? isRtl ? customOptions.start : customOptions.end : customOptions.right
        }
      };
      // Rewrite the bottom offset as a top offset.
      if (options.bottom != null) {
        options.top = el.scrollHeight - el.clientHeight - options.bottom;
      }
      // Rewrite the right offset as a left offset.
      if (isRtl && rtlScrollAxisType !== 0 /* RtlScrollAxisType.NORMAL */) {
        if (options.left != null) {
          options.right = el.scrollWidth - el.clientWidth - options.left;
        }
        if (rtlScrollAxisType === 2 /* RtlScrollAxisType.INVERTED */) {
          options.left = options.right;
        } else if (rtlScrollAxisType === 1 /* RtlScrollAxisType.NEGATED */) {
          options.left = options.right ? -options.right : options.right;
        }
      } else {
        if (options.right != null) {
          options.left = el.scrollWidth - el.clientWidth - options.right;
        }
      }
      return this._applyScrollToOptions(el, options);
    }
    return Promise.resolve();
  }
  /**
   * Scroll to element by reference or selector
   */
  scrollToElement(scrollable, target, customOptions = {}) {
    const scrollableEl = this._getElement(scrollable);
    const targetEl = this._getElement(target, scrollableEl);
    const options = {
      ...customOptions,
      ...{
        left: targetEl.offsetLeft + (customOptions.left || 0),
        top: targetEl.offsetTop + (customOptions.top || 0)
      }
    };
    return targetEl ? this.scrollTo(scrollableEl, options) : Promise.resolve();
  }
}
SmoothScrollManager.ɵfac = function SmoothScrollManager_Factory(t) {
  return new (t || SmoothScrollManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](SMOOTH_SCROLL_OPTIONS, 8));
};
SmoothScrollManager.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SmoothScrollManager,
  factory: SmoothScrollManager.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SmoothScrollManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [SMOOTH_SCROLL_OPTIONS]
      }]
    }];
  }, null);
})();
class SmoothScroll {
  constructor(element, smoothScroll) {
    this.element = element;
    this.smoothScroll = smoothScroll;
  }
  scrollTo(options) {
    return this.smoothScroll.scrollTo(this.element, options);
  }
  scrollToElement(target, options) {
    return this.smoothScroll.scrollToElement(this.element, target, options);
  }
}
SmoothScroll.ɵfac = function SmoothScroll_Factory(t) {
  return new (t || SmoothScroll)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SmoothScrollManager));
};
SmoothScroll.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: SmoothScroll,
  selectors: [["", "smoothScroll", ""], ["", "smooth-scroll", ""]],
  exportAs: ["smoothScroll"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SmoothScroll, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[smoothScroll], [smooth-scroll]',
      exportAs: 'smoothScroll'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: SmoothScrollManager
    }];
  }, null);
})();
class SmoothScrollModule {}
SmoothScrollModule.ɵfac = function SmoothScrollModule_Factory(t) {
  return new (t || SmoothScrollModule)();
};
SmoothScrollModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SmoothScrollModule
});
SmoothScrollModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SmoothScrollModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [SmoothScroll],
      exports: [SmoothScroll]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 24203:
/*!***************************************************************!*\
  !*** ./node_modules/ngx-scrollbar/fesm2020/ngx-scrollbar.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NG_SCROLLBAR_OPTIONS": () => (/* binding */ NG_SCROLLBAR_OPTIONS),
/* harmony export */   "NgScrollbar": () => (/* binding */ NgScrollbar),
/* harmony export */   "NgScrollbarModule": () => (/* binding */ NgScrollbarModule),
/* harmony export */   "ScrollViewport": () => (/* binding */ ScrollViewport),
/* harmony export */   "ScrollbarManager": () => (/* binding */ ScrollbarManager)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/bidi */ 4564);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/portal */ 12035);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ 15712);
/* harmony import */ var ngx_scrollbar_smooth_scroll__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-scrollbar/smooth-scroll */ 48880);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/coercion */ 70867);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 20591);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 58184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 44276);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 70679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 30998);














const _c0 = ["scrollbarY"];
const _c1 = ["scrollbarX"];
function NgScrollbar_ng_container_5_scrollbar_x_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "scrollbar-x", null, 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("scrollable", ctx_r1.state.isHorizontallyScrollable)("fit", ctx_r1.state.verticalUsed);
  }
}
function NgScrollbar_ng_container_5_scrollbar_y_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "scrollbar-y", null, 5);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("scrollable", ctx_r2.state.isVerticallyScrollable)("fit", ctx_r2.state.horizontalUsed);
  }
}
function NgScrollbar_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgScrollbar_ng_container_5_scrollbar_x_1_Template, 2, 2, "scrollbar-x", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgScrollbar_ng_container_5_scrollbar_y_2_Template, 2, 2, "scrollbar-y", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.state.horizontalUsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.state.verticalUsed);
  }
}
const _c2 = ["*"];
function preventSelection(doc) {
  return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {
    doc.onselectstart = () => false;
  });
}
function enableSelection(doc) {
  return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {
    doc.onselectstart = null;
  });
}
function stopPropagation() {
  return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(e => e.stopPropagation());
}
/**
 * Check if pointer is within scrollbar bounds
 */
function isWithinBounds(e, rect) {
  return e.clientX >= rect.left && e.clientX <= rect.left + rect.width && e.clientY >= rect.top && e.clientY <= rect.top + rect.height;
}
class ScrollViewport {
  // Get viewport size, clientHeight or clientWidth
  get clientHeight() {
    return this.nativeElement.clientHeight;
  }
  get clientWidth() {
    return this.nativeElement.clientWidth;
  }
  get scrollHeight() {
    return this.nativeElement.scrollHeight;
  }
  get scrollWidth() {
    return this.nativeElement.scrollWidth;
  }
  // Get viewport scroll offset, scrollTop or scrollLeft
  get scrollTop() {
    return this.nativeElement.scrollTop;
  }
  get scrollLeft() {
    return this.nativeElement.scrollLeft;
  }
  // Get the available scrollable size
  get scrollMaxX() {
    return this.scrollWidth - this.clientWidth;
  }
  get scrollMaxY() {
    return this.scrollHeight - this.clientHeight;
  }
  get contentHeight() {
    return this.contentWrapperElement?.clientHeight || 0;
  }
  get contentWidth() {
    return this.contentWrapperElement?.clientWidth || 0;
  }
  constructor(viewPort) {
    this.viewPort = viewPort;
    this.nativeElement = viewPort.nativeElement;
  }
  /**
   * Activate viewport pointer events such as 'hovered' and 'clicked' events
   */
  activatePointerEvents(propagate, destroyed) {
    this.hovered = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
      // Stream that emits when pointer is moved over the viewport (used to set the hovered state)
      const mouseMoveStream = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.nativeElement, 'mousemove', {
        passive: true
      });
      const mouseMove = propagate ? mouseMoveStream : mouseMoveStream.pipe(stopPropagation());
      // Stream that emits when pointer leaves the viewport (used to remove the hovered state)
      const mouseLeave = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.nativeElement, 'mouseleave', {
        passive: true
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => false));
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(mouseMove, mouseLeave).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(e => subscriber.next(e)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(destroyed)).subscribe();
    });
    this.clicked = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
      const mouseDown = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.nativeElement, 'mousedown', {
        passive: true
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(e => subscriber.next(e)));
      const mouseUp = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.nativeElement, 'mouseup', {
        passive: true
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => subscriber.next(false)));
      mouseDown.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => mouseUp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(destroyed)).subscribe();
    });
  }
  /**
   * Set this directive as a non-functional wrapper, called when a custom viewport is used
   */
  setAsWrapper() {
    // In this case the default viewport and the default content wrapper will act as a mask
    this.nativeElement.className = 'ng-native-scrollbar-hider ng-scroll-layer';
    if (this.nativeElement.firstElementChild) {
      this.nativeElement.firstElementChild.className = 'ng-scroll-layer';
    }
  }
  /**
   * Set this directive as  the viewport, called when no custom viewport is used
   */
  setAsViewport(customClassName) {
    this.nativeElement.className = `ng-native-scrollbar-hider ng-scroll-viewport ${customClassName}`;
    // Check if the custom viewport has only one child and set it as the content wrapper
    if (this.nativeElement.firstElementChild) {
      this.contentWrapperElement = this.nativeElement.firstElementChild;
      this.contentWrapperElement.classList.add('ng-scroll-content');
    }
  }
  /**
   * Scroll viewport vertically
   */
  scrollYTo(value) {
    this.nativeElement.scrollTop = value;
  }
  /**
   * Scroll viewport horizontally
   */
  scrollXTo(value) {
    this.nativeElement.scrollLeft = value;
  }
}
ScrollViewport.ɵfac = function ScrollViewport_Factory(t) {
  return new (t || ScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
ScrollViewport.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ScrollViewport,
  selectors: [["", "scrollViewport", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollViewport, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[scrollViewport]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, null);
})();
class NgScrollbarBase {}
NgScrollbarBase.ɵfac = function NgScrollbarBase_Factory(t) {
  return new (t || NgScrollbarBase)();
};
NgScrollbarBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgScrollbarBase
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgScrollbarBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], null, null);
})();
const NG_SCROLLBAR_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NG_SCROLLBAR_OPTIONS');
const defaultOptions = {
  viewClass: '',
  trackClass: '',
  thumbClass: '',
  track: 'vertical',
  appearance: 'compact',
  visibility: 'native',
  position: 'native',
  pointerEventsMethod: 'viewport',
  trackClickScrollDuration: 300,
  minThumbSize: 20,
  windowResizeDebounce: 0,
  sensorDebounce: 0,
  scrollAuditTime: 0,
  viewportPropagateMouseMove: true,
  autoHeightDisabled: true,
  autoWidthDisabled: true,
  sensorDisabled: false,
  pointerEventsDisabled: false
};
class ScrollbarManager {
  constructor(options) {
    this.globalOptions = options ? {
      ...defaultOptions,
      ...options
    } : defaultOptions;
    this.rtlScrollAxisType = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.getRtlScrollAxisType)();
  }
}
ScrollbarManager.ɵfac = function ScrollbarManager_Factory(t) {
  return new (t || ScrollbarManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NG_SCROLLBAR_OPTIONS, 8));
};
ScrollbarManager.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ScrollbarManager,
  factory: ScrollbarManager.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollbarManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [NG_SCROLLBAR_OPTIONS]
      }]
    }];
  }, null);
})();
class NativeScrollbarSizeFactory {
  constructor(document, manager, platform) {
    this.document = document;
    this.manager = manager;
    this.platform = platform;
    this._scrollbarSize = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(this.getNativeScrollbarSize());
    this.scrollbarSize = this._scrollbarSize.asObservable();
    // Calculate native scrollbar size on window resize event, because the size changes if use zoomed in/out
    if (platform.isBrowser) {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.document.defaultView, 'resize', {
        passive: true
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(this.manager.globalOptions.windowResizeDebounce), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => this.getNativeScrollbarSize()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(size => this._scrollbarSize.next(size))).subscribe();
    }
  }
  /**
   * Get native scrollbar size
   */
  getNativeScrollbarSize() {
    // Avoid executing browser code in server side rendering
    if (!this.platform.isBrowser) {
      return 0;
    }
    // Hide iOS browsers native scrollbar
    if (this.platform.IOS) {
      return 6;
    }
    const box = this.document.createElement('div');
    box.className = 'ng-scrollbar-measure';
    box.style.left = '0px';
    box.style.overflow = 'scroll';
    box.style.position = 'fixed';
    box.style.top = '-9999px';
    this.document.body.appendChild(box);
    const size = box.getBoundingClientRect().right;
    this.document.body.removeChild(box);
    return size;
  }
}
NativeScrollbarSizeFactory.ɵfac = function NativeScrollbarSizeFactory_Factory(t) {
  return new (t || NativeScrollbarSizeFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ScrollbarManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform));
};
NativeScrollbarSizeFactory.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NativeScrollbarSizeFactory,
  factory: NativeScrollbarSizeFactory.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeScrollbarSizeFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: ScrollbarManager
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform
    }];
  }, null);
})();
class HideNativeScrollbar {
  constructor(el, renderer, hideNativeScrollbar) {
    this.renderer = renderer;
    this.hideNativeScrollbar = hideNativeScrollbar;
    this._subscriber = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY;
    this._subscriber = hideNativeScrollbar.scrollbarSize.subscribe(size => {
      this.renderer.setStyle(el.nativeElement, '--native-scrollbar-size', `-${size}px`, _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.DashCase);
    });
  }
  ngOnDestroy() {
    this._subscriber.unsubscribe();
  }
}
HideNativeScrollbar.ɵfac = function HideNativeScrollbar_Factory(t) {
  return new (t || HideNativeScrollbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NativeScrollbarSizeFactory));
};
HideNativeScrollbar.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: HideNativeScrollbar,
  selectors: [["", "hideNativeScrollbar", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HideNativeScrollbar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[hideNativeScrollbar]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: NativeScrollbarSizeFactory
    }];
  }, null);
})();
class NgAttr {
  constructor(el) {
    this.el = el;
  }
  set ngAttr(attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      this.el.nativeElement.setAttribute(key, value);
    }
  }
}
NgAttr.ɵfac = function NgAttr_Factory(t) {
  return new (t || NgAttr)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
NgAttr.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgAttr,
  selectors: [["", "ngAttr", ""]],
  inputs: {
    ngAttr: "ngAttr"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgAttr, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngAttr]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    ngAttr: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class ResizeSensor {
  /** Debounce interval for emitting the changes. */
  get debounce() {
    return this._debounce;
  }
  set debounce(value) {
    this._debounce = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceNumberProperty)(value);
    this._subscribe();
  }
  /** Whether ResizeObserver is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  constructor(zone, platform, scrollbar) {
    this.zone = zone;
    this.platform = platform;
    this.scrollbar = scrollbar;
    this._disabled = false;
    this._currentSubscription = null;
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    if (!scrollbar) {
      throw new Error('[NgScrollbar Resize Sensor Directive]: Host element must be an NgScrollbar component.');
    }
  }
  ngAfterContentInit() {
    if (!this._currentSubscription && !this._disabled) {
      this._subscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    if (this.platform.isBrowser) {
      const stream = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
        this._resizeObserver = new ResizeObserver(e => observer.next(e));
        this._resizeObserver.observe(this.scrollbar.viewport.nativeElement);
        if (this.scrollbar.viewport.contentWrapperElement) {
          this._resizeObserver.observe(this.scrollbar.viewport.contentWrapperElement);
        }
      });
      this.zone.runOutsideAngular(() => {
        this._currentSubscription = (this._debounce ? stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(this._debounce)) : stream).subscribe(this.event);
      });
    }
  }
  _unsubscribe() {
    this._resizeObserver?.disconnect();
    this._currentSubscription?.unsubscribe();
  }
}
ResizeSensor.ɵfac = function ResizeSensor_Factory(t) {
  return new (t || ResizeSensor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgScrollbarBase));
};
ResizeSensor.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ResizeSensor,
  selectors: [["", "resizeSensor", ""]],
  inputs: {
    debounce: ["sensorDebounce", "debounce"],
    disabled: ["sensorDisabled", "disabled"]
  },
  outputs: {
    event: "resizeSensor"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizeSensor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[resizeSensor]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform
    }, {
      type: NgScrollbarBase
    }];
  }, {
    debounce: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['sensorDebounce']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['sensorDisabled']
    }],
    event: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['resizeSensor']
    }]
  });
})();

// @dynamic
class TrackAdapter {
  // Stream that emits when the track element is clicked
  get clicked() {
    const mouseDown = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.trackElement, 'mousedown', {
      passive: true
    }).pipe(stopPropagation(), preventSelection(this.document));
    const mouseup = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.document, 'mouseup', {
      passive: true
    }).pipe(stopPropagation(), enableSelection(this.document), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => rxjs__WEBPACK_IMPORTED_MODULE_15__.EMPTY));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(mouseDown, mouseup);
  }
  // Get track client rect
  get clientRect() {
    return this.trackElement.getBoundingClientRect();
  }
  constructor(cmp, trackElement, document) {
    this.cmp = cmp;
    this.trackElement = trackElement;
    this.document = document;
  }
  /**
   * Stream that emits when scrollbar track is clicked
   */
  onTrackClicked(e, thumbSize, scrollSize) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(e).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.pluck)(this.pageProperty),
    // Calculate scrollTo position
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(pageOffset => {
      const clickOffset = pageOffset - this.offset;
      const offset = clickOffset - thumbSize / 2;
      const ratio = offset / this.size;
      return ratio * scrollSize;
    }),
    // Smooth scroll to position
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(value => {
      this.cmp.scrollTo({
        ...this.mapToScrollToOption(value),
        duration: (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceNumberProperty)(this.cmp.trackClickScrollDuration)
      });
    }));
  }
}
TrackAdapter.ɵfac = function TrackAdapter_Factory(t) {
  return new (t || TrackAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgScrollbarBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](HTMLElement), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Document));
};
TrackAdapter.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: TrackAdapter
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrackAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: NgScrollbarBase
    }, {
      type: HTMLElement
    }, {
      type: Document
    }];
  }, null);
})();
class TrackXDirective extends TrackAdapter {
  get pageProperty() {
    return 'pageX';
  }
  get offset() {
    return this.clientRect.left;
  }
  get size() {
    return this.trackElement.clientWidth;
  }
  constructor(cmp, trackElement, document) {
    super(cmp, trackElement.nativeElement, document);
    this.cmp = cmp;
    this.document = document;
  }
  mapToScrollToOption(value) {
    return {
      left: value
    };
  }
}
TrackXDirective.ɵfac = function TrackXDirective_Factory(t) {
  return new (t || TrackXDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgScrollbarBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT));
};
TrackXDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: TrackXDirective,
  selectors: [["", "scrollbarTrackX", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrackXDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[scrollbarTrackX]'
    }]
  }], function () {
    return [{
      type: NgScrollbarBase
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }];
  }, null);
})();
class TrackYDirective extends TrackAdapter {
  get pageProperty() {
    return 'pageY';
  }
  get offset() {
    return this.clientRect.top;
  }
  get size() {
    return this.trackElement.clientHeight;
  }
  constructor(cmp, trackElement, document) {
    super(cmp, trackElement.nativeElement, document);
    this.cmp = cmp;
    this.document = document;
  }
  mapToScrollToOption(value) {
    return {
      top: value
    };
  }
}
TrackYDirective.ɵfac = function TrackYDirective_Factory(t) {
  return new (t || TrackYDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgScrollbarBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT));
};
TrackYDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: TrackYDirective,
  selectors: [["", "scrollbarTrackY", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrackYDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[scrollbarTrackY]'
    }]
  }], function () {
    return [{
      type: NgScrollbarBase
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }];
  }, null);
})();

// @dynamic
class ThumbAdapter {
  get trackMax() {
    return this.track.size - this.size;
  }
  // Get thumb client rect
  get clientRect() {
    return this.thumbElement.getBoundingClientRect();
  }
  // Stream that emits when scrollbar thumb is clicked
  get clicked() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.thumbElement, 'mousedown', {
      passive: true
    }).pipe(stopPropagation());
  }
  constructor(cmp, track, thumbElement, document) {
    this.cmp = cmp;
    this.track = track;
    this.thumbElement = thumbElement;
    this.document = document;
    // Stream that emits dragging state
    this._dragging = new rxjs__WEBPACK_IMPORTED_MODULE_18__.Subject();
    this.dragging = this._dragging.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)());
  }
  // Calculate and update thumb position and size
  update() {
    const size = calculateThumbSize(this.track.size, this.viewportScrollSize, this.cmp.minThumbSize);
    const position = calculateThumbPosition(this.viewportScrollOffset, this.viewportScrollMax, this.trackMax);
    rxjs__WEBPACK_IMPORTED_MODULE_19__.animationFrameScheduler.schedule(() => this.updateStyles(this.handleDirection(position, this.trackMax), size));
  }
  /**
   * Stream that emits the 'scrollTo' position when a scrollbar thumb element is dragged
   * This function is called by thumb drag event using viewport or scrollbar pointer events
   */
  dragged(event) {
    let trackMaxStart;
    let scrollMaxStart;
    const dragStart = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(event).pipe(preventSelection(this.document), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {
      // Capture scrollMax and trackMax once
      trackMaxStart = this.trackMax;
      scrollMaxStart = this.viewportScrollMax;
      this.setDragging(true);
    }));
    const dragging = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.document, 'mousemove', {
      capture: true,
      passive: true
    }).pipe(stopPropagation());
    const dragEnd = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.document, 'mouseup', {
      capture: true
    }).pipe(stopPropagation(), enableSelection(this.document), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => this.setDragging(false)));
    return dragStart.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.pluck)(this.pageProperty), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(pageOffset => pageOffset - this.dragStartOffset), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.mergeMap)(mouseDownOffset => dragging.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.pluck)(this.clientProperty),
    // Calculate how far the pointer is from the top/left of the scrollbar (minus the dragOffset).
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(mouseOffset => mouseOffset - this.track.offset), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(offset => scrollMaxStart * (offset - mouseDownOffset) / trackMaxStart), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(position => this.handleDrag(position, scrollMaxStart)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(position => this.scrollTo(position)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(dragEnd))));
  }
}
ThumbAdapter.ɵfac = function ThumbAdapter_Factory(t) {
  return new (t || ThumbAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgScrollbarBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TrackAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](HTMLElement), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Document));
};
ThumbAdapter.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ThumbAdapter,
  outputs: {
    dragging: "dragging"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThumbAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: NgScrollbarBase
    }, {
      type: TrackAdapter
    }, {
      type: HTMLElement
    }, {
      type: Document
    }];
  }, {
    dragging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Calculate scrollbar thumb size
 */
function calculateThumbSize(trackSize, contentSize, minThumbSize) {
  const scrollbarRatio = trackSize / contentSize;
  const thumbSize = scrollbarRatio * trackSize;
  return Math.max(~~thumbSize, minThumbSize);
}
/**
 * Calculate scrollbar thumb position
 */
function calculateThumbPosition(scrollPosition, scrollMax, trackMax) {
  return scrollPosition * trackMax / scrollMax;
}
class ThumbXDirective extends ThumbAdapter {
  get clientProperty() {
    return 'clientX';
  }
  get pageProperty() {
    return 'pageX';
  }
  get viewportScrollSize() {
    return this.cmp.viewport.scrollWidth;
  }
  get viewportScrollOffset() {
    return this.cmp.viewport.scrollLeft;
  }
  get viewportScrollMax() {
    return this.cmp.viewport.scrollMaxX;
  }
  get dragStartOffset() {
    return this.clientRect.left + this.document.defaultView.pageXOffset || 0;
  }
  get size() {
    return this.thumbElement.clientWidth;
  }
  constructor(cmp, track, element, document, dir) {
    super(cmp, track, element.nativeElement, document);
    this.cmp = cmp;
    this.track = track;
    this.element = element;
    this.document = document;
    this.dir = dir;
  }
  updateStyles(position, size) {
    this.thumbElement.style.width = `${size}px`;
    this.thumbElement.style.transform = `translate3d(${position}px, 0, 0)`;
  }
  handleDrag(position, scrollMax) {
    if (this.dir.value === 'rtl') {
      if (this.cmp.manager.rtlScrollAxisType === 1 /* RtlScrollAxisType.NEGATED */) {
        return position - scrollMax;
      }
      if (this.cmp.manager.rtlScrollAxisType === 2 /* RtlScrollAxisType.INVERTED */) {
        return scrollMax - position;
      }
      // Keeping this as a memo
      // if (this.rtlScrollAxisType === RtlScrollAxisType.NORMAL) {
      //   return position;
      // }
    }

    return position;
  }
  handleDirection(position, trackMax) {
    if (this.dir.value === 'rtl') {
      if (this.cmp.manager.rtlScrollAxisType === 2 /* RtlScrollAxisType.INVERTED */) {
        return -position;
      }
      if (this.cmp.manager.rtlScrollAxisType === 0 /* RtlScrollAxisType.NORMAL */) {
        return position - trackMax;
      }
      // Keeping this as a memo
      // if (this.rtlScrollAxisType === RtlScrollAxisType.NEGATED) {
      //   return position;
      // }
    }

    return position;
  }
  setDragging(value) {
    this.cmp.setDragging({
      horizontalDragging: value
    });
  }
  scrollTo(position) {
    this.cmp.viewport.scrollXTo(position);
  }
}
ThumbXDirective.ɵfac = function ThumbXDirective_Factory(t) {
  return new (t || ThumbXDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgScrollbarBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TrackXDirective), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality));
};
ThumbXDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ThumbXDirective,
  selectors: [["", "scrollbarThumbX", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThumbXDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[scrollbarThumbX]'
    }]
  }], function () {
    return [{
      type: NgScrollbarBase
    }, {
      type: TrackXDirective
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality
    }];
  }, null);
})();
class ThumbYDirective extends ThumbAdapter {
  get pageProperty() {
    return 'pageY';
  }
  get viewportScrollSize() {
    return this.cmp.viewport.scrollHeight;
  }
  get viewportScrollOffset() {
    return this.cmp.viewport.scrollTop;
  }
  get viewportScrollMax() {
    return this.cmp.viewport.scrollMaxY;
  }
  get clientProperty() {
    return 'clientY';
  }
  get dragStartOffset() {
    return this.clientRect.top + this.document.defaultView.pageYOffset || 0;
  }
  get size() {
    return this.thumbElement.clientHeight;
  }
  constructor(cmp, track, element, document) {
    super(cmp, track, element.nativeElement, document);
    this.cmp = cmp;
    this.track = track;
    this.element = element;
    this.document = document;
  }
  updateStyles(position, size) {
    this.thumbElement.style.height = `${size}px`;
    this.thumbElement.style.transform = `translate3d(0px, ${position}px, 0)`;
  }
  handleDrag(position) {
    return position;
  }
  handleDirection(position) {
    return position;
  }
  setDragging(value) {
    this.cmp.setDragging({
      verticalDragging: value
    });
  }
  scrollTo(position) {
    this.cmp.viewport.scrollYTo(position);
  }
}
ThumbYDirective.ɵfac = function ThumbYDirective_Factory(t) {
  return new (t || ThumbYDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgScrollbarBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TrackYDirective), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT));
};
ThumbYDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ThumbYDirective,
  selectors: [["", "scrollbarThumbY", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThumbYDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[scrollbarThumbY]'
    }]
  }], function () {
    return [{
      type: NgScrollbarBase
    }, {
      type: TrackYDirective
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }];
  }, null);
})();

// @dynamic
class Scrollbar {
  constructor(el, cmp, platform, document, zone) {
    this.el = el;
    this.cmp = cmp;
    this.platform = platform;
    this.document = document;
    this.zone = zone;
    // Stream that emits to unsubscribe from all streams
    this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_18__.Subject();
  }
  /**
   * Activate scrollbar pointer events
   */
  activatePointerEvents() {
    // Stream that emits when scrollbar thumb is dragged
    let thumbDragEvent;
    // Stream that emits when scrollbar track is clicked
    let trackClickEvent;
    // Stream that emits when scrollbar track is hovered
    let trackHoveredEvent;
    // Set the method used for the pointer events option
    if (this.cmp.pointerEventsMethod === 'viewport') {
      // Pointer events using the viewport
      this.viewportTrackClicked = new rxjs__WEBPACK_IMPORTED_MODULE_18__.Subject();
      this.viewportThumbClicked = new rxjs__WEBPACK_IMPORTED_MODULE_18__.Subject();
      // Activate the pointer events of the viewport directive
      this.cmp.viewport.activatePointerEvents(this.cmp.viewportPropagateMouseMove, this.destroyed);
      // Set streams
      thumbDragEvent = this.viewportThumbClicked;
      trackClickEvent = this.viewportTrackClicked;
      trackHoveredEvent = this.cmp.viewport.hovered.pipe(
      // Check if track is hovered
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(e => e ? isWithinBounds(e, this.el.getBoundingClientRect()) : false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)(),
      // Enable / disable text selection
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(hovered => this.document.onselectstart = hovered ? () => false : null));
      this.cmp.viewport.clicked.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(e => {
        if (e) {
          if (isWithinBounds(e, this.thumb.clientRect)) {
            this.viewportThumbClicked.next(e);
          } else if (isWithinBounds(e, this.track.clientRect)) {
            this.cmp.setClicked(true);
            this.viewportTrackClicked.next(e);
          }
        } else {
          this.cmp.setClicked(false);
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroyed)).subscribe();
    } else {
      // Pointer events method is using 'scrollbar'
      thumbDragEvent = this.thumb.clicked;
      trackClickEvent = this.track.clicked;
      trackHoveredEvent = this.hovered;
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(
    // Activate scrollbar hovered event
    trackHoveredEvent.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(e => this.setHovered(e))),
    // Activate scrollbar thumb drag event
    thumbDragEvent.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(e => this.thumb.dragged(e))),
    // Activate scrollbar track click event
    trackClickEvent.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(e => this.track.onTrackClicked(e, this.thumb.size, this.viewportScrollSize))));
  }
  // Stream that emits when the track element is hovered
  get hovered() {
    const mouseEnter = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.el, 'mouseenter', {
      passive: true
    }).pipe(stopPropagation(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => true));
    const mouseLeave = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.el, 'mouseleave', {
      passive: true
    }).pipe(stopPropagation(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => false));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(mouseEnter, mouseLeave);
  }
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      // Activate pointer events on Desktop only
      if (!(this.platform.IOS || this.platform.ANDROID) && !this.cmp.pointerEventsDisabled) {
        this.activatePointerEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroyed)).subscribe();
      }
      // Update scrollbar thumb when viewport is scrolled and when scrollbar component is updated
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(this.cmp.scrolled, this.cmp.updated).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => this.thumb?.update()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroyed)).subscribe();
    });
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
    // Clean up viewport streams if used
    if (this.viewportThumbClicked && this.viewportTrackClicked) {
      this.viewportTrackClicked.complete();
      this.viewportThumbClicked.complete();
    }
  }
}
Scrollbar.ɵfac = function Scrollbar_Factory(t) {
  return new (t || Scrollbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](HTMLElement), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgScrollbarBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Document), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
Scrollbar.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: Scrollbar
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Scrollbar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: HTMLElement
    }, {
      type: NgScrollbarBase
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform
    }, {
      type: Document
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();
class ScrollbarY extends Scrollbar {
  get viewportScrollSize() {
    return this.cmp.viewport.scrollHeight;
  }
  constructor(el, cmp, platform, document, zone) {
    super(el.nativeElement, cmp, platform, document, zone);
    this.cmp = cmp;
    this.platform = platform;
    this.document = document;
    this.zone = zone;
  }
  setHovered(value) {
    this.cmp.setHovered({
      verticalHovered: value
    });
  }
}
ScrollbarY.ɵfac = function ScrollbarY_Factory(t) {
  return new (t || ScrollbarY)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgScrollbarBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
ScrollbarY.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ScrollbarY,
  selectors: [["scrollbar-y"]],
  viewQuery: function ScrollbarY_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](TrackYDirective, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ThumbYDirective, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.track = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.thumb = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function ScrollbarY_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrollbar-control", true);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 6,
  consts: [["scrollbarTrackY", ""], ["scrollbarThumbY", ""]],
  template: function ScrollbarY_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ng-scrollbar-track ", ctx.cmp.trackClass, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ng-scrollbar-thumb ", ctx.cmp.thumbClass, "");
    }
  },
  dependencies: [ThumbYDirective, TrackYDirective],
  styles: [".ng-scrollbar-wrapper>scrollbar-y.scrollbar-control{width:var(--vertical-scrollbar-total-size)}  .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track{width:var(--vertical-scrollbar-size);height:calc(100% - var(--scrollbar-padding) * 2)}  .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{height:0;width:100%}  .ng-scrollbar-wrapper[verticalHovered=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb,   .ng-scrollbar-wrapper[verticalDragging=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}  .ng-scrollbar-wrapper[deactivated=false]>scrollbar-y.scrollbar-control{top:0;bottom:0}  .ng-scrollbar-wrapper[deactivated=false][dir=ltr]>scrollbar-y.scrollbar-control{right:0;left:unset}  .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertY]>scrollbar-y.scrollbar-control,   .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertAll]>scrollbar-y.scrollbar-control{left:0;right:unset}  .ng-scrollbar-wrapper[deactivated=false][dir=rtl]>scrollbar-y.scrollbar-control{left:0;right:unset}  .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertY]>scrollbar-y.scrollbar-control,   .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertAll]>scrollbar-y.scrollbar-control{left:unset;right:0}  .ng-scrollbar-wrapper[deactivated=false][track=all]>scrollbar-y.scrollbar-control[fit=true]{bottom:var(--scrollbar-total-size);top:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertX]>scrollbar-y.scrollbar-control[fit=true],   .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertAll]>scrollbar-y.scrollbar-control[fit=true]{top:var(--scrollbar-total-size);bottom:0}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollbarY, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'scrollbar-y',
      host: {
        '[class.scrollbar-control]': 'true'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <div scrollbarTrackY class="ng-scrollbar-track {{cmp.trackClass}}">
      <div scrollbarThumbY class="ng-scrollbar-thumb {{cmp.thumbClass}}"></div>
    </div>
  `,
      styles: ["::ng-deep .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control{width:var(--vertical-scrollbar-total-size)}::ng-deep .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track{width:var(--vertical-scrollbar-size);height:calc(100% - var(--scrollbar-padding) * 2)}::ng-deep .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{height:0;width:100%}::ng-deep .ng-scrollbar-wrapper[verticalHovered=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb,::ng-deep .ng-scrollbar-wrapper[verticalDragging=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}::ng-deep .ng-scrollbar-wrapper[deactivated=false]>scrollbar-y.scrollbar-control{top:0;bottom:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=ltr]>scrollbar-y.scrollbar-control{right:0;left:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertY]>scrollbar-y.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertAll]>scrollbar-y.scrollbar-control{left:0;right:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=rtl]>scrollbar-y.scrollbar-control{left:0;right:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertY]>scrollbar-y.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertAll]>scrollbar-y.scrollbar-control{left:unset;right:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all]>scrollbar-y.scrollbar-control[fit=true]{bottom:var(--scrollbar-total-size);top:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertX]>scrollbar-y.scrollbar-control[fit=true],::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertAll]>scrollbar-y.scrollbar-control[fit=true]{top:var(--scrollbar-total-size);bottom:0}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: NgScrollbarBase
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform
    }, {
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    track: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [TrackYDirective, {
        static: true
      }]
    }],
    thumb: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [ThumbYDirective, {
        static: true
      }]
    }]
  });
})();
class ScrollbarX extends Scrollbar {
  get viewportScrollSize() {
    return this.cmp.viewport.scrollWidth;
  }
  constructor(el, cmp, platform, document, zone) {
    super(el.nativeElement, cmp, platform, document, zone);
    this.cmp = cmp;
    this.platform = platform;
    this.document = document;
    this.zone = zone;
  }
  setHovered(value) {
    this.cmp.setHovered({
      horizontalHovered: value
    });
  }
}
ScrollbarX.ɵfac = function ScrollbarX_Factory(t) {
  return new (t || ScrollbarX)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgScrollbarBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
ScrollbarX.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ScrollbarX,
  selectors: [["scrollbar-x"]],
  viewQuery: function ScrollbarX_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](TrackXDirective, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ThumbXDirective, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.track = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.thumb = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function ScrollbarX_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrollbar-control", true);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 6,
  consts: [["scrollbarTrackX", ""], ["scrollbarThumbX", ""]],
  template: function ScrollbarX_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ng-scrollbar-track ", ctx.cmp.trackClass, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ng-scrollbar-thumb ", ctx.cmp.thumbClass, "");
    }
  },
  dependencies: [ThumbXDirective, TrackXDirective],
  styles: [".ng-scrollbar-wrapper>scrollbar-x.scrollbar-control{height:var(--horizontal-scrollbar-total-size)}  .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track{height:var(--horizontal-scrollbar-size);width:calc(100% - var(--scrollbar-padding) * 2)}  .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{width:0;height:100%}  .ng-scrollbar-wrapper[horizontalHovered=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb,   .ng-scrollbar-wrapper[horizontalDragging=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}  .ng-scrollbar-wrapper[position=invertX]>scrollbar-x.scrollbar-control,   .ng-scrollbar-wrapper[position=invertAll]>scrollbar-x.scrollbar-control{top:0;bottom:unset}  .ng-scrollbar-wrapper[deactivated=false]>scrollbar-x.scrollbar-control{left:0;right:0;bottom:0;top:unset}  .ng-scrollbar-wrapper[deactivated=false][position=invertX]>scrollbar-x.scrollbar-control,   .ng-scrollbar-wrapper[deactivated=false][position=invertAll]>scrollbar-x.scrollbar-control{top:0;bottom:unset}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertY]>scrollbar-x.scrollbar-control[fit=true],   .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertAll]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertY]>scrollbar-x.scrollbar-control[fit=true],   .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertAll]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollbarX, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'scrollbar-x',
      host: {
        '[class.scrollbar-control]': 'true'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <div scrollbarTrackX class="ng-scrollbar-track {{cmp.trackClass}}">
      <div scrollbarThumbX class="ng-scrollbar-thumb {{cmp.thumbClass}}"></div>
    </div>
  `,
      styles: ["::ng-deep .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control{height:var(--horizontal-scrollbar-total-size)}::ng-deep .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track{height:var(--horizontal-scrollbar-size);width:calc(100% - var(--scrollbar-padding) * 2)}::ng-deep .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{width:0;height:100%}::ng-deep .ng-scrollbar-wrapper[horizontalHovered=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb,::ng-deep .ng-scrollbar-wrapper[horizontalDragging=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}::ng-deep .ng-scrollbar-wrapper[position=invertX]>scrollbar-x.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[position=invertAll]>scrollbar-x.scrollbar-control{top:0;bottom:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false]>scrollbar-x.scrollbar-control{left:0;right:0;bottom:0;top:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][position=invertX]>scrollbar-x.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[deactivated=false][position=invertAll]>scrollbar-x.scrollbar-control{top:0;bottom:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertY]>scrollbar-x.scrollbar-control[fit=true],::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertAll]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertY]>scrollbar-x.scrollbar-control[fit=true],::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertAll]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: NgScrollbarBase
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.Platform
    }, {
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    track: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [TrackXDirective, {
        static: true
      }]
    }],
    thumb: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [ThumbXDirective, {
        static: true
      }]
    }]
  });
})();
class NgScrollbar {
  /** Disable custom scrollbar and switch back to native scrollbar */
  get disabled() {
    return this._disabled;
  }
  set disabled(disabled) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(disabled);
  }
  /** Whether ResizeObserver is disabled */
  get sensorDisabled() {
    return this._sensorDisabled;
  }
  set sensorDisabled(disabled) {
    this._sensorDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(disabled);
  }
  /** A flag used to enable/disable the scrollbar thumb dragged event */
  get pointerEventsDisabled() {
    return this._pointerEventsDisabled;
  }
  set pointerEventsDisabled(disabled) {
    this._pointerEventsDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(disabled);
  }
  /** Enable viewport mousemove event propagation (only when pointerEventsMethod="viewport") */
  get viewportPropagateMouseMove() {
    return this._viewportPropagateMouseMove;
  }
  set viewportPropagateMouseMove(disabled) {
    this._viewportPropagateMouseMove = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(disabled);
  }
  /** Disable auto-height */
  get autoHeightDisabled() {
    return this._autoHeightDisabled;
  }
  set autoHeightDisabled(disabled) {
    this._autoHeightDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(disabled);
  }
  /** Disable auto-width */
  get autoWidthDisabled() {
    return this._autoWidthDisabled;
  }
  set autoWidthDisabled(disabled) {
    this._autoWidthDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(disabled);
  }
  get nativeElement() {
    return this.el.nativeElement;
  }
  constructor(el, zone, changeDetectorRef, dir, smoothScroll, manager) {
    this.el = el;
    this.zone = zone;
    this.changeDetectorRef = changeDetectorRef;
    this.dir = dir;
    this.smoothScroll = smoothScroll;
    this.manager = manager;
    this._disabled = false;
    this._sensorDisabled = this.manager.globalOptions.sensorDisabled;
    this._pointerEventsDisabled = this.manager.globalOptions.pointerEventsDisabled;
    this._autoHeightDisabled = this.manager.globalOptions.autoHeightDisabled;
    this._autoWidthDisabled = this.manager.globalOptions.autoWidthDisabled;
    this._viewportPropagateMouseMove = this.manager.globalOptions.viewportPropagateMouseMove;
    /** A class forwarded to scrollable viewport element */
    this.viewClass = this.manager.globalOptions.viewClass;
    /** A class forwarded to the scrollbar track element */
    this.trackClass = this.manager.globalOptions.trackClass;
    /** A class forwarded to the scrollbar thumb element */
    this.thumbClass = this.manager.globalOptions.thumbClass;
    /** Minimum scrollbar thumb size */
    this.minThumbSize = this.manager.globalOptions.minThumbSize;
    /** The duration which the scrolling takes to reach its target when scrollbar rail is clicked */
    this.trackClickScrollDuration = this.manager.globalOptions.trackClickScrollDuration;
    /**
     * Sets the pointer events method
     * Use viewport pointer events  to handle dragging and track click (This makes scrolling work when mouse is over the scrollbar)
     * Use scrollbar pointer events to handle dragging and track click
     */
    this.pointerEventsMethod = this.manager.globalOptions.pointerEventsMethod;
    /**
     * Sets the supported scroll track of the viewport, there are 3 options:
     *
     * - `vertical` Use both vertical and horizontal scrollbar
     * - `horizontal` Use both vertical and horizontal scrollbar
     * - `all` Use both vertical and horizontal scrollbar
     */
    this.track = this.manager.globalOptions.track;
    /**
     * When to show the scrollbar, and there are 3 options:
     *
     * - `native` (default) Scrollbar will be visible when viewport is scrollable like with native scrollbar
     * - `hover` Scrollbars are hidden by default, only visible on scrolling or hovering
     * - `always` Scrollbars are always shown even if the viewport is not scrollable
     */
    this.visibility = this.manager.globalOptions.visibility;
    /**
     *  Sets the appearance of the scrollbar, there are 2 options:
     *
     * - `standard` (default) scrollbar space will be reserved just like with native scrollbar.
     * - `compact` scrollbar doesn't reserve any space, they are placed over the viewport.
     */
    this.appearance = this.manager.globalOptions.appearance;
    /**
     * Sets the position of each scrollbar, there are 4 options:
     *
     * - `native` (Default) Use the default position like in native scrollbar.
     * - `invertY` Inverts vertical scrollbar position
     * - `invertX` Inverts Horizontal scrollbar position
     * - `invertAll` Inverts both scrollbar positions
     */
    this.position = this.manager.globalOptions.position;
    /** Debounce interval for detecting changes via ResizeObserver */
    this.sensorDebounce = this.manager.globalOptions.sensorDebounce;
    /** Scroll Audit Time */
    this.scrollAuditTime = this.manager.globalOptions.scrollAuditTime;
    /** Steam that emits when scrollbar is updated */
    this.updated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Set of attributes added on the scrollbar wrapper */
    this.state = {};
    /** Stream that destroys components' observables */
    this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_18__.Subject();
  }
  /**
   * Update local state with each change detection
   */
  updateState() {
    let verticalUsed = false;
    let horizontalUsed = false;
    let isVerticallyScrollable = false;
    let isHorizontallyScrollable = false;
    // Check if vertical scrollbar should be displayed
    if (this.track === 'all' || this.track === 'vertical') {
      isVerticallyScrollable = this.viewport.scrollHeight > this.viewport.clientHeight;
      verticalUsed = this.visibility === 'always' || isVerticallyScrollable;
    }
    // Check if horizontal scrollbar should be displayed
    if (this.track === 'all' || this.track === 'horizontal') {
      isHorizontallyScrollable = this.viewport.scrollWidth > this.viewport.clientWidth;
      horizontalUsed = this.visibility === 'always' || isHorizontallyScrollable;
    }
    // Update inner wrapper attributes
    this.setState({
      position: this.position,
      track: this.track,
      appearance: this.appearance,
      visibility: this.visibility,
      deactivated: this.disabled,
      dir: this.dir.value,
      pointerEventsMethod: this.pointerEventsMethod,
      verticalUsed,
      horizontalUsed,
      isVerticallyScrollable,
      isHorizontallyScrollable
    });
  }
  setState(state) {
    this.state = {
      ...this.state,
      ...state
    };
    this.changeDetectorRef.detectChanges();
  }
  getScrolledByDirection(property) {
    let event;
    return this.scrolled.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(e => event = e), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.pluck)('target', property), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.pairwise)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.filter)(([prev, curr]) => prev !== curr), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => event));
  }
  /**
   * Set hovered state if a scrollbar is being hovered
   */
  setHovered(hovered) {
    this.zone.run(() => this.setState({
      ...hovered
    }));
  }
  /**
   * Set dragging state if a scrollbar is being dragged
   */
  setDragging(dragging) {
    this.zone.run(() => this.setState({
      ...dragging
    }));
  }
  /**
   * Set clicked state if a scrollbar track is being click
   */
  setClicked(scrollbarClicked) {
    this.zone.run(() => this.setState({
      scrollbarClicked
    }));
  }
  ngOnInit() {
    // Set the viewport based on user choice
    this.zone.runOutsideAngular(() => {
      if (this.customViewPort) {
        this.viewport = this.customViewPort;
        this.defaultViewPort.setAsWrapper();
      } else {
        this.viewport = this.defaultViewPort;
      }
      // Activate the selected viewport
      this.viewport.setAsViewport(this.viewClass);
      let scrollStream = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(this.viewport.nativeElement, 'scroll', {
        passive: true
      });
      // Throttle scroll event if 'scrollAuditTime' is set
      scrollStream = this.scrollAuditTime ? scrollStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.auditTime)(this.scrollAuditTime)) : scrollStream;
      // Initialize scroll streams
      this.scrolled = scrollStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroyed));
      this.verticalScrolled = this.getScrolledByDirection('scrollTop');
      this.horizontalScrolled = this.getScrolledByDirection('scrollLeft');
    });
  }
  ngOnChanges(changes) {
    // Update only when the viewport is initialized
    if (this.viewport) {
      this.update();
    }
  }
  ngAfterViewInit() {
    // Initial update
    this.update();
    // Update on dir changes
    this.dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => this.update()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroyed)).subscribe();
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
  /**
   * Update local state and the internal scrollbar controls
   */
  update() {
    if (!this.autoHeightDisabled) {
      this.updateHeight();
    }
    if (!this.autoWidthDisabled) {
      this.updateWidth();
    }
    // Re-evaluate the state after setting height or width
    this.updateState();
    this.updated.next();
  }
  /**
   * Smooth scroll functions
   */
  scrollTo(options) {
    return this.smoothScroll.scrollTo(this.viewport.nativeElement, options);
  }
  /**
   * Scroll to element by reference or selector
   */
  scrollToElement(target, options) {
    return this.smoothScroll.scrollToElement(this.viewport.nativeElement, target, options);
  }
  updateHeight() {
    // Auto-height: Set component height to content height
    if (this.appearance === 'standard' && this.scrollbarX) {
      // if scrollbar-x is displayed in standard mode
      this.nativeElement.style.height = `${this.viewport.contentHeight + this.scrollbarX.nativeElement.clientHeight}px`;
    } else {
      this.nativeElement.style.height = `${this.viewport.contentHeight}px`;
    }
  }
  updateWidth() {
    // Auto-width: Set component minWidth to content width
    if (this.appearance === 'standard' && this.scrollbarY) {
      // if scrollbar-y is displayed in standard mode
      this.nativeElement.style.width = `${this.viewport.contentWidth + this.scrollbarY.nativeElement.clientWidth}px`;
    } else {
      this.nativeElement.style.width = `${this.viewport.contentWidth}px`;
    }
  }
}
NgScrollbar.ɵfac = function NgScrollbar_Factory(t) {
  return new (t || NgScrollbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_scrollbar_smooth_scroll__WEBPACK_IMPORTED_MODULE_25__.SmoothScrollManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollbarManager));
};
NgScrollbar.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgScrollbar,
  selectors: [["ng-scrollbar"]],
  contentQueries: function NgScrollbar_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, ScrollViewport, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customViewPort = _t.first);
    }
  },
  viewQuery: function NgScrollbar_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ScrollViewport, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollbarY = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollbarX = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.defaultViewPort = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function NgScrollbar_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-scrollbar", true);
    }
  },
  inputs: {
    disabled: "disabled",
    sensorDisabled: "sensorDisabled",
    pointerEventsDisabled: "pointerEventsDisabled",
    viewportPropagateMouseMove: "viewportPropagateMouseMove",
    autoHeightDisabled: "autoHeightDisabled",
    autoWidthDisabled: "autoWidthDisabled",
    viewClass: "viewClass",
    trackClass: "trackClass",
    thumbClass: "thumbClass",
    minThumbSize: "minThumbSize",
    trackClickScrollDuration: "trackClickScrollDuration",
    pointerEventsMethod: "pointerEventsMethod",
    track: "track",
    visibility: "visibility",
    appearance: "appearance",
    position: "position",
    sensorDebounce: "sensorDebounce",
    scrollAuditTime: "scrollAuditTime"
  },
  outputs: {
    updated: "updated"
  },
  exportAs: ["ngScrollbar"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: NgScrollbarBase,
    useExisting: NgScrollbar
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c2,
  decls: 6,
  vars: 4,
  consts: [[1, "ng-scrollbar-wrapper", 3, "ngAttr"], [1, "ng-scroll-viewport-wrapper", 3, "sensorDebounce", "sensorDisabled", "resizeSensor"], ["scrollViewport", "", "hideNativeScrollbar", ""], [4, "ngIf"], ["scrollbarX", ""], ["scrollbarY", ""]],
  template: function NgScrollbar_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resizeSensor", function NgScrollbar_Template_div_resizeSensor_1_listener() {
        return ctx.update();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgScrollbar_ng_container_5_Template, 3, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngAttr", ctx.state);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sensorDebounce", ctx.sensorDebounce)("sensorDisabled", ctx.sensorDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.disabled);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ScrollViewport, HideNativeScrollbar, NgAttr, ResizeSensor, ScrollbarY, ScrollbarX],
  styles: [".ng-scrollbar-measure{scrollbar-width:none;-ms-overflow-style:none}  .ng-scrollbar-measure::-webkit-scrollbar{display:none}[_nghost-%COMP%]{--scrollbar-border-radius: 7px;--scrollbar-padding: 4px;--scrollbar-track-color: transparent;--scrollbar-thumb-color: rgba(0, 0, 0, .2);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-color);--scrollbar-size: 5px;--scrollbar-hover-size: var(--scrollbar-size);--scrollbar-overscroll-behavior: initial;--scrollbar-transition-duration: .4s;--scrollbar-transition-delay: .8s;--scrollbar-thumb-transition: height ease-out .15s, width ease-out .15s;--scrollbar-track-transition: height ease-out .15s, width ease-out .15s;display:block;position:relative;height:100%;max-height:100%;max-width:100%;box-sizing:content-box!important}[_nghost-%COMP%] > .ng-scrollbar-wrapper[_ngcontent-%COMP%]{--scrollbar-total-size: calc(var(--scrollbar-size) + var(--scrollbar-padding) * 2);--vertical-scrollbar-size: var(--scrollbar-size);--horizontal-scrollbar-size: var(--scrollbar-size);--vertical-scrollbar-total-size: calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);--horizontal-scrollbar-total-size: calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalHovered=true][_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalDragging=true][_ngcontent-%COMP%]{--vertical-scrollbar-size: var(--scrollbar-hover-size);--vertical-scrollbar-total-size: calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}[_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalHovered=true][_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalDragging=true][_ngcontent-%COMP%]{--horizontal-scrollbar-size: var(--scrollbar-hover-size);--horizontal-scrollbar-total-size: calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:0;right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:var(--scrollbar-total-size);right:0}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:var(--scrollbar-total-size);right:0}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:0;right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{top:0;bottom:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-bottom:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-bottom:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{top:var(--scrollbar-total-size);bottom:0}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{padding-top:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%] > .ng-scroll-content[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport>.ng-scroll-content{padding-top:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{scrollbar-width:none;-ms-overflow-style:none}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport::-webkit-scrollbar{display:none}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-native-scrollbar-hider[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-native-scrollbar-hider{bottom:var(--native-scrollbar-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-native-scrollbar-hider[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-native-scrollbar-hider{left:0;right:var(--native-scrollbar-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-native-scrollbar-hider[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-native-scrollbar-hider{right:0;left:var(--native-scrollbar-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%] > .scrollbar-control[_ngcontent-%COMP%]{opacity:0;transition-property:opacity;transition-duration:var(--scrollbar-transition-duration);transition-delay:var(--scrollbar-transition-delay)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%]:hover > .scrollbar-control[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%]:active > .scrollbar-control[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%]:focus > .scrollbar-control[_ngcontent-%COMP%]{opacity:1;transition-duration:var(--scrollbar-transition-duration);transition-delay:0ms}[_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{overflow-x:auto;overflow-y:hidden}[_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{overflow-y:auto;overflow-x:hidden}[_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >   .ng-scroll-viewport{overflow:auto}.ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{overflow:hidden}.ng-scroll-viewport[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch;contain:strict;will-change:scroll-position;overscroll-behavior:var(--scrollbar-overscroll-behavior)}  .ng-scroll-content{display:inline-block;min-width:100%}.ng-scrollbar-wrapper[_ngcontent-%COMP%], .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], .ng-scroll-layer[_ngcontent-%COMP%],   .ng-scroll-viewport{position:absolute;inset:0}", ".ng-scrollbar-wrapper[pointerEventsMethod=viewport]>.scrollbar-control{pointer-events:none}  .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,   .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>*>*>  .ng-scroll-viewport,   .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,   .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>*>*>  .ng-scroll-viewport,   .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,   .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>*>*>  .ng-scroll-viewport{-webkit-user-select:none;-moz-user-select:none;user-select:none}  .ng-scrollbar-wrapper>.scrollbar-control{position:absolute;display:flex;justify-content:center;align-items:center;transition:var(--scrollbar-track-transition)}  .ng-scrollbar-wrapper>.scrollbar-control[scrollable=false] .ng-scrollbar-thumb{display:none}  .ng-scrollbar-track{height:100%;width:100%;z-index:1;border-radius:var(--scrollbar-border-radius);background-color:var(--scrollbar-track-color);overflow:hidden;transition:var(--scrollbar-track-transition);cursor:default}  .ng-scrollbar-thumb{box-sizing:border-box;position:relative;border-radius:inherit;background-color:var(--scrollbar-thumb-color);transform:translateZ(0);transition:var(--scrollbar-thumb-transition)}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgScrollbar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ng-scrollbar',
      exportAs: 'ngScrollbar',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        '[class.ng-scrollbar]': 'true'
      },
      providers: [{
        provide: NgScrollbarBase,
        useExisting: NgScrollbar
      }],
      template: "<div class=\"ng-scrollbar-wrapper\" [ngAttr]=\"state\">\r\n  <div class=\"ng-scroll-viewport-wrapper\"\r\n       (resizeSensor)=\"update()\"\r\n       [sensorDebounce]=\"sensorDebounce\"\r\n       [sensorDisabled]=\"sensorDisabled\">\r\n    <div scrollViewport\r\n         hideNativeScrollbar>\r\n      <div>\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-container *ngIf=\"!disabled\">\r\n    <scrollbar-x #scrollbarX\r\n                 *ngIf=\"state.horizontalUsed\"\r\n                 [attr.scrollable]=\"state.isHorizontallyScrollable\"\r\n                 [attr.fit]=\"state.verticalUsed\">\r\n    </scrollbar-x>\r\n    <scrollbar-y #scrollbarY\r\n                 *ngIf=\"state.verticalUsed\"\r\n                 [attr.scrollable]=\"state.isVerticallyScrollable\"\r\n                 [attr.fit]=\"state.horizontalUsed\">\r\n    </scrollbar-y>\r\n  </ng-container>\r\n</div>\r\n\r\n",
      styles: ["::ng-deep .ng-scrollbar-measure{scrollbar-width:none;-ms-overflow-style:none}::ng-deep .ng-scrollbar-measure::-webkit-scrollbar{display:none}:host{--scrollbar-border-radius: 7px;--scrollbar-padding: 4px;--scrollbar-track-color: transparent;--scrollbar-thumb-color: rgba(0, 0, 0, .2);--scrollbar-thumb-hover-color: var(--scrollbar-thumb-color);--scrollbar-size: 5px;--scrollbar-hover-size: var(--scrollbar-size);--scrollbar-overscroll-behavior: initial;--scrollbar-transition-duration: .4s;--scrollbar-transition-delay: .8s;--scrollbar-thumb-transition: height ease-out .15s, width ease-out .15s;--scrollbar-track-transition: height ease-out .15s, width ease-out .15s;display:block;position:relative;height:100%;max-height:100%;max-width:100%;box-sizing:content-box!important}:host>.ng-scrollbar-wrapper{--scrollbar-total-size: calc(var(--scrollbar-size) + var(--scrollbar-padding) * 2);--vertical-scrollbar-size: var(--scrollbar-size);--horizontal-scrollbar-size: var(--scrollbar-size);--vertical-scrollbar-total-size: calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);--horizontal-scrollbar-total-size: calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2)}:host>.ng-scrollbar-wrapper[verticalHovered=true],:host>.ng-scrollbar-wrapper[verticalDragging=true]{--vertical-scrollbar-size: var(--scrollbar-hover-size);--vertical-scrollbar-total-size: calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}:host>.ng-scrollbar-wrapper[horizontalHovered=true],:host>.ng-scrollbar-wrapper[horizontalDragging=true]{--horizontal-scrollbar-size: var(--scrollbar-hover-size);--horizontal-scrollbar-total-size: calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:0;right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:var(--scrollbar-total-size);right:0}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:var(--scrollbar-total-size);right:0}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:0;right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{top:0;bottom:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-bottom:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-bottom:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{top:var(--scrollbar-total-size);bottom:0}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{padding-top:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport>.ng-scroll-content,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport>.ng-scroll-content{padding-top:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{scrollbar-width:none;-ms-overflow-style:none}:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport::-webkit-scrollbar,:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport::-webkit-scrollbar{display:none}:host>.ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true]>.ng-scroll-viewport-wrapper>.ng-native-scrollbar-hider,:host>.ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-native-scrollbar-hider{bottom:var(--native-scrollbar-size)}:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true]>.ng-scroll-viewport-wrapper>.ng-native-scrollbar-hider,:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-native-scrollbar-hider{left:0;right:var(--native-scrollbar-size)}:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl]>.ng-scroll-viewport-wrapper>.ng-native-scrollbar-hider,:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-native-scrollbar-hider{right:0;left:var(--native-scrollbar-size)}:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]>.scrollbar-control{opacity:0;transition-property:opacity;transition-duration:var(--scrollbar-transition-duration);transition-delay:var(--scrollbar-transition-delay)}:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]:hover>.scrollbar-control,:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]:active>.scrollbar-control,:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]:focus>.scrollbar-control{opacity:1;transition-duration:var(--scrollbar-transition-duration);transition-delay:0ms}:host>.ng-scrollbar-wrapper[horizontalUsed=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[horizontalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{overflow-x:auto;overflow-y:hidden}:host>.ng-scrollbar-wrapper[verticalUsed=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[verticalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{overflow-y:auto;overflow-x:hidden}:host>.ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{overflow:auto}.ng-scroll-viewport-wrapper{overflow:hidden}.ng-scroll-viewport{-webkit-overflow-scrolling:touch;contain:strict;will-change:scroll-position;overscroll-behavior:var(--scrollbar-overscroll-behavior)}::ng-deep .ng-scroll-content{display:inline-block;min-width:100%}.ng-scrollbar-wrapper,.ng-scroll-viewport-wrapper,.ng-scroll-layer,::ng-deep .ng-scroll-viewport{position:absolute;inset:0}\n", "::ng-deep .ng-scrollbar-wrapper[pointerEventsMethod=viewport]>.scrollbar-control{pointer-events:none}::ng-deep .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep .ng-scroll-viewport{-webkit-user-select:none;-moz-user-select:none;user-select:none}::ng-deep .ng-scrollbar-wrapper>.scrollbar-control{position:absolute;display:flex;justify-content:center;align-items:center;transition:var(--scrollbar-track-transition)}::ng-deep .ng-scrollbar-wrapper>.scrollbar-control[scrollable=false] .ng-scrollbar-thumb{display:none}::ng-deep .ng-scrollbar-track{height:100%;width:100%;z-index:1;border-radius:var(--scrollbar-border-radius);background-color:var(--scrollbar-track-color);overflow:hidden;transition:var(--scrollbar-track-transition);cursor:default}::ng-deep .ng-scrollbar-thumb{box-sizing:border-box;position:relative;border-radius:inherit;background-color:var(--scrollbar-thumb-color);transform:translateZ(0);transition:var(--scrollbar-thumb-transition)}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality
    }, {
      type: ngx_scrollbar_smooth_scroll__WEBPACK_IMPORTED_MODULE_25__.SmoothScrollManager
    }, {
      type: ScrollbarManager
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sensorDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pointerEventsDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    viewportPropagateMouseMove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoHeightDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoWidthDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    viewClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    thumbClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minThumbSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackClickScrollDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pointerEventsMethod: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    track: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    visibility: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sensorDebounce: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollAuditTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    updated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    scrollbarY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['scrollbarY', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }],
    scrollbarX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['scrollbarX', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }],
    defaultViewPort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [ScrollViewport, {
        static: true
      }]
    }],
    customViewPort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [ScrollViewport, {
        static: true
      }]
    }]
  });
})();
class NgScrollbarModule {
  static withConfig(options) {
    return {
      ngModule: NgScrollbarModule,
      providers: [{
        provide: NG_SCROLLBAR_OPTIONS,
        useValue: options
      }]
    };
  }
}
NgScrollbarModule.ɵfac = function NgScrollbarModule_Factory(t) {
  return new (t || NgScrollbarModule)();
};
NgScrollbarModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgScrollbarModule
});
NgScrollbarModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.BidiModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_26__.PortalModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.PlatformModule, ngx_scrollbar_smooth_scroll__WEBPACK_IMPORTED_MODULE_25__.SmoothScrollModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgScrollbarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.BidiModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_26__.PortalModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__.PlatformModule, ngx_scrollbar_smooth_scroll__WEBPACK_IMPORTED_MODULE_25__.SmoothScrollModule],
      declarations: [NgScrollbar, ScrollViewport, HideNativeScrollbar, NgAttr, ResizeSensor, ThumbYDirective, ThumbXDirective, TrackXDirective, TrackYDirective, ScrollbarY, ScrollbarX],
      exports: [NgScrollbar, ScrollViewport]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-scrollbar
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_module_ts.js.map