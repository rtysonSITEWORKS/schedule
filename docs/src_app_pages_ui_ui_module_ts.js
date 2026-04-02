"use strict";
(self["webpackChunkazimuth"] = self["webpackChunkazimuth"] || []).push([["src_app_pages_ui_ui_module_ts"],{

/***/ 43538:
/*!*******************************************************!*\
  !*** ./src/app/pages/ui/buttons/buttons.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonsComponent": () => (/* binding */ ButtonsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/directives/widget/widget.directive */ 3090);


class ButtonsComponent {
  static #_ = this.ɵfac = function ButtonsComponent_Factory(t) {
    return new (t || ButtonsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ButtonsComponent,
    selectors: [["az-buttons"]],
    decls: 520,
    vars: 0,
    consts: [[1, "row", "bottom-30"], [1, "col"], ["widget", "", 1, "card"], [1, "card-header"], [1, "widget-controls"], ["data-widgster", "expand", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-down"], ["data-widgster", "collapse", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-up"], ["data-widgster", "fullscreen", "href", "#", 1, "transition"], [1, "fa", "fa-expand"], ["data-widgster", "restore", "href", "#", 1, "transition"], [1, "fa", "fa-compress"], ["data-widgster", "close", "href", "#", 1, "transition"], [1, "fa", "fa-times"], [1, "card-body", "widget-body", "buttons"], [1, "d-inline-block"], ["type", "button", 1, "btn", "btn-secondary"], [1, "card-text"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-info"], ["type", "button", 1, "btn", "btn-warning"], ["type", "button", 1, "btn", "btn-danger"], ["type", "button", 1, "btn", "btn-main"], ["type", "button", 1, "btn", "btn-link"], ["type", "button", 1, "btn", "btn-secondary", "btn-rounded"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded"], ["type", "button", 1, "btn", "btn-success", "btn-rounded"], ["type", "button", 1, "btn", "btn-info", "btn-rounded"], ["type", "button", 1, "btn", "btn-warning", "btn-rounded"], ["type", "button", 1, "btn", "btn-danger", "btn-rounded"], ["type", "button", 1, "btn", "btn-dark", "btn-rounded"], ["type", "button", 1, "btn", "btn-main", "btn-rounded"], ["type", "button", 1, "btn", "btn-outline-secondary", "transition"], ["type", "button", 1, "btn", "btn-outline-primary", "transition"], ["type", "button", 1, "btn", "btn-outline-success", "transition"], ["type", "button", 1, "btn", "btn-outline-info", "transition"], ["type", "button", 1, "btn", "btn-outline-warning", "transition"], ["type", "button", 1, "btn", "btn-outline-danger", "transition"], ["type", "button", 1, "btn", "btn-outline-dark", "transition"], ["type", "button", 1, "btn", "btn-outline-main", "transition"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-rounded", "transition"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-rounded", "transition"], ["type", "button", 1, "btn", "btn-outline-success", "btn-rounded", "transition"], ["type", "button", 1, "btn", "btn-outline-info", "btn-rounded", "transition"], ["type", "button", 1, "btn", "btn-outline-warning", "btn-rounded", "transition"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-rounded", "transition"], ["type", "button", 1, "btn", "btn-outline-dark", "btn-rounded", "transition"], ["type", "button", 1, "btn", "btn-outline-main", "btn-rounded", "transition"], ["type", "button", 1, "btn", "btn-main", "btn-lg", "transition"], ["type", "button", 1, "btn", "btn-main", "transition"], ["type", "button", 1, "btn", "btn-main", "btn-sm", "transition"], ["type", "button", 1, "btn", "btn-main", "btn-xs", "transition"], ["type", "button", "disabled", "disabled", 1, "btn", "btn-main", "transition"], ["type", "button", "disabled", "disabled", 1, "btn", "btn-main", "btn-rounded", "transition"], ["type", "button", "disabled", "disabled", 1, "btn", "btn-outline-main", "transition"], ["type", "button", "disabled", "disabled", 1, "btn", "btn-outline-main", "btn-rounded", "transition"], [1, "card-body", "widget-body", "row"], [1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-12", "col-xs-12", "bottom-15", "buttons"], [1, "card-body", "text-xs-center"], ["type", "button", 1, "btn", "btn-main", "btn-block", "transition"], ["type", "button", 1, "btn", "btn-outline-main", "btn-block", "transition"], ["type", "button", "disabled", "disabled", 1, "btn", "btn-main", "btn-rounded", "btn-block", "transition"], [1, "card-body", "widget-body"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "col-xs-12", "bottom-15", "buttons"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "btn-group-lg"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "btn-group-sm"], ["role", "group", "aria-label", "Basic example", 1, "btn-group-vertical"], ["role", "toolbar", "aria-label", "Toolbar with button groups", 1, "btn-toolbar"], ["role", "group", "aria-label", "First group", 1, "btn-group"], ["role", "group", "aria-label", "Second group", 1, "btn-group"], ["role", "group", "aria-label", "Third group", 1, "btn-group"]],
    template: function ButtonsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "GENERAL BUTTON");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15)(18, "div", 16)(19, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 18)(22, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, ".btn-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 18)(28, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, ".btn-primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16)(31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 18)(34, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, ".btn-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 16)(37, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 18)(40, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, ".btn-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 16)(43, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 18)(46, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, ".btn-warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 16)(49, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 18)(52, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, ".btn-danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 16)(55, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p", 18)(58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, ".btn-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 16)(61, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 18)(64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, ".btn-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 0)(67, "div", 1)(68, "div", 2)(69, "div", 3)(70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "ROUNDED BUTTON");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 4)(73, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 15)(84, "div", 16)(85, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p", 18)(88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, ".btn-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "p", 18)(91, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, ".btn-rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 16)(94, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "p", 18)(97, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, ".btn-primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "p", 18)(100, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, ".btn-rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 16)(103, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "p", 18)(106, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, ".btn-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "p", 18)(109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, ".btn-rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 16)(112, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "p", 18)(115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, ".btn-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "p", 18)(118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, ".btn-rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 16)(121, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "p", 18)(124, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, ".btn-warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "p", 18)(127, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, ".btn-rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 16)(130, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "p", 18)(133, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, ".btn-danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "p", 18)(136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, ".btn-rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 16)(139, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "p", 18)(142, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, ".btn-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "p", 18)(145, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, ".btn-rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 16)(148, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "p", 18)(151, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, ".btn-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "p", 18)(154, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, ".btn-rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 0)(157, "div", 1)(158, "div", 2)(159, "div", 3)(160, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "OUTLINE BUTTON");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 4)(163, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 15)(174, "div", 16)(175, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "p", 18)(178, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, ".btn-outline-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 16)(181, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "p", 18)(184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, ".btn-outline-primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 16)(187, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "p", 18)(190, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, ".btn-outline-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 16)(193, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "p", 18)(196, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, ".btn-outline-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 16)(199, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "p", 18)(202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, ".btn-outline-warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 16)(205, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "p", 18)(208, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, ".btn-outline-danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 16)(211, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "p", 18)(214, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, ".btn-outline-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 16)(217, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "p", 18)(220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, ".btn-outline-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 0)(223, "div", 1)(224, "div", 2)(225, "div", 3)(226, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "OUTLINE ROUNDED BUTTON");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 4)(229, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](230, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](232, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](234, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](236, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](238, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 15)(240, "div", 16)(241, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "p", 18)(244, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, ".btn-outline-secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "p", 18)(247, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, ".btn-rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 16)(250, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "p", 18)(253, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, ".btn-outline-primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "p", 18)(256, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, ".btn-rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 16)(259, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "p", 18)(262, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, ".btn-outline-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "p", 18)(265, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, ".btn-rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 16)(268, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "p", 18)(271, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, ".btn-outline-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "p", 18)(274, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, ".btn-rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 16)(277, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "p", 18)(280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, ".btn-outline-warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "p", 18)(283, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, ".btn-rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "div", 16)(286, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](287, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "p", 18)(289, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, ".btn-outline-danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "p", 18)(292, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, ".btn-rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "div", 16)(295, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "p", 18)(298, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, ".btn-outline-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "p", 18)(301, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](302, ".btn-rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "div", 16)(304, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "Button Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "p", 18)(307, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, ".btn-outline-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "p", 18)(310, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](311, ".btn-rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "div", 0)(313, "div", 1)(314, "div", 2)(315, "div", 3)(316, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "BUTTON SIZES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div", 4)(319, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](320, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](322, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](324, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](326, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](328, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 15)(330, "div", 16)(331, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "Button Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "p", 18)(334, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, ".btn-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "div", 16)(337, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "Button Normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "p", 18)(340, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, "No class required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "div", 16)(343, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, "Button Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "p", 18)(346, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, ".btn-sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "div", 16)(349, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "Button XS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "p", 18)(352, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](353, ".btn-xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "div", 0)(355, "div", 1)(356, "div", 2)(357, "div", 3)(358, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](359, "DISABLED BUTTONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "div", 4)(361, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](362, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](364, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](366, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](368, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](370, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "div", 15)(372, "div", 16)(373, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](374, "Button Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "p", 18)(376, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](377, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "div", 16)(379, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, "Button Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "p", 18)(382, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](383, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "div", 16)(385, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, "Button Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "p", 18)(388, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](389, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "div", 16)(391, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, "Button Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "p", 18)(394, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](395, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "div", 0)(397, "div", 1)(398, "div", 2)(399, "div", 3)(400, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](401, "BLOCK BUTTONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "div", 4)(403, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](404, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](406, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](408, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](410, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](412, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "div", 58)(414, "div", 59)(415, "div", 60)(416, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](417, "Button Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "p", 18)(419, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](420, ".btn-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "div", 59)(422, "div", 60)(423, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](424, "Button Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "p", 18)(426, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](427, ".btn-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](428, "div", 59)(429, "div", 60)(430, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](431, "Button Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "p", 18)(433, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](434, ".btn-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "div", 0)(436, "div", 1)(437, "div", 2)(438, "div", 3)(439, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](440, "GROUP BUTTONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](441, "div", 4)(442, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](443, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](444, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](445, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](447, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](449, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](451, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](452, "div", 64)(453, "div", 65)(454, "div", 66)(455, "div", 16)(456, "div", 67)(457, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](458, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](459, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, "Middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](462, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "p", 18)(464, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](465, ".btn-group .btn-group-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "div", 16)(467, "div", 68)(468, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](471, "Middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](473, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](474, "p", 18)(475, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](476, ".btn-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](477, "div", 16)(478, "div", 69)(479, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](480, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](481, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](482, "Middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](483, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](484, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](485, "p", 18)(486, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](487, ".btn-group .btn-group-sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](488, "div", 66)(489, "div", 16)(490, "div", 70)(491, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](492, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](494, "Middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](495, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](496, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](497, "p", 18)(498, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](499, ".btn-group-vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](500, "div", 16)(501, "div", 71)(502, "div", 72)(503, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](504, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](505, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](506, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](507, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](508, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](509, "div", 73)(510, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](511, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](512, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](513, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](514, "div", 74)(515, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](516, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](517, "p", 18)(518, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](519, ".btn-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    dependencies: [_theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__.Widget],
    styles: [".buttons {\n  text-align: center;\n}\n.buttons .d-inline-block {\n  margin-bottom: 8px;\n  margin-right: 6px;\n}\n.buttons p {\n  margin-top: 4px;\n  margin-bottom: 0;\n  font-size: 13px;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdWkvYnV0dG9ucy9idXR0b25zLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vU2NoZWR1bGluZyUyMFNvZnR3YXJlL3NyYy9hcHAvcGFnZXMvdWkvYnV0dG9ucy9idXR0b25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0VSO0FEQUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNFUiIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25ze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLmQtaW5saW5lLWJsb2Nre1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDsgICAgICBcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcbn0gIiwiLmJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnV0dG9ucyAuZC1pbmxpbmUtYmxvY2sge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuLmJ1dHRvbnMgcCB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 87575:
/*!***************************************************!*\
  !*** ./src/app/pages/ui/cards/cards.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsComponent": () => (/* binding */ CardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/directives/widget/widget.directive */ 3090);


class CardsComponent {
  static #_ = this.ɵfac = function CardsComponent_Factory(t) {
    return new (t || CardsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CardsComponent,
    selectors: [["az-cards"]],
    decls: 353,
    vars: 0,
    consts: [[1, "row", "bottom-30"], [1, "col"], ["widget", "", 1, "card"], [1, "card-header"], [1, "widget-controls"], ["data-widgster", "expand", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-down"], ["data-widgster", "collapse", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-up"], ["data-widgster", "close", "href", "#", 1, "transition"], [1, "fa", "fa-times"], [1, "card-body", "widget-body"], [1, "row", "mbm-20"], [1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-12", "bottom-30"], [1, "card"], [1, "card-body"], [1, "card-text"], [1, "card-footer"], [1, "card", "card-primary"], [1, "card-text", "text-white"], [1, "card", "card-success"], [1, "card", "card-info"], [1, "card", "card-warning"], [1, "card", "card-danger"], [1, "card", "card-outline-default", "text-center"], [1, "card-bodyquote", "mb-0"], ["title", "Source Title"], [1, "card", "card-outline-primary", "text-center"], [1, "card", "card-outline-success", "text-center"], [1, "card", "card-outline-info", "text-center"], [1, "card", "card-outline-warning", "text-center"], [1, "card", "card-outline-danger", "text-center"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "bottom-30"], ["src", "assets/img/app/snow.jpg", "alt", "Card image cap", 1, "card-img-top", "w-100"], [1, "card-body", "text-white"], ["src", "assets/img/app/snow.jpg", "alt", "Card image", 1, "w-100"], [1, "card-footer", "text-right"], ["src", "assets/img/app/snow.jpg", "alt", "Card image cap", 1, "card-img-bottom", "w-100"], [1, "card", "overlay"], ["src", "assets/img/app/sky-full.jpg", "alt", "Card image", 1, "card-img", "w-100", "transition"], [1, "card-img-overlay", "slide-down", "transition"], [1, "card-img-overlay", "overlay-bottom", "text-right", "slide-up", "transition"], [1, "card-img-overlay", "slide-left", "transition"], [1, "card-img-overlay", "overlay-bottom", "text-right", "slide-right", "transition"], [1, "card-img-overlay", "hover-opacity", "transition"], [1, "card-img-overlay", "overlay-bottom", "text-right", "hover-opacity", "transition"], [1, "row"], [1, "card-group"], [1, "card-title"], [1, "card-body", "widget-body", "text-white"], [1, "card-deck-wrapper"], [1, "card-deck"], [1, "card-columns"], [1, "card", "card-body"], [1, "card-bodyquote"], [1, "text-muted"], [1, "card", "card-body", "card-inverse", "card-primary", "text-center", "text-white"], [1, "card", "card-danger", "card-body", "text-right"], [1, "card", "card-warning", "card-body"]],
    template: function CardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "GENERAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Default card ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15)(20, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " card footer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "div", 18)(26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Primary card ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15)(29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " card footer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 13)(34, "div", 20)(35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Success card ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 15)(38, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " card footer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 13)(43, "div", 21)(44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Info card ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 15)(47, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " card footer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 13)(52, "div", 22)(53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Warning card ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 15)(56, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " card footer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 13)(61, "div", 23)(62, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Danger card ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 15)(65, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " card footer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 0)(70, "div", 1)(71, "div", 2)(72, "div", 3)(73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "OUTLINE CARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 4)(76, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 11)(83, "div", 12)(84, "div", 13)(85, "div", 24)(86, "div", 15)(87, "blockquote", 25)(88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "cite", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 13)(95, "div", 27)(96, "div", 15)(97, "blockquote", 25)(98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "cite", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 13)(105, "div", 28)(106, "div", 15)(107, "blockquote", 25)(108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "cite", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 13)(115, "div", 29)(116, "div", 15)(117, "blockquote", 25)(118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "cite", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 13)(125, "div", 30)(126, "div", 15)(127, "blockquote", 25)(128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "cite", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 13)(135, "div", 31)(136, "div", 15)(137, "blockquote", 25)(138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "cite", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 0)(145, "div", 1)(146, "div", 2)(147, "div", 3)(148, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "CARD WITH IMAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 4)(151, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 11)(158, "div", 12)(159, "div", 32)(160, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, " Card image top ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 32)(165, "div", 21)(166, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, " Card middle image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, " Card footer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 32)(172, "div", 23)(173, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, " Card bottom image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 0)(177, "div", 1)(178, "div", 2)(179, "div", 3)(180, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "CARD WITH OVERLAY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 4)(183, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 11)(190, "div", 12)(191, "div", 32)(192, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 40)(195, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "I'm text that has a background image!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, " Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 32)(200, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 42)(203, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "I'm text that has a background image!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, " Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 32)(208, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 44)(211, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "I'm text that has a background image!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, " Lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 0)(216, "div", 1)(217, "div", 2)(218, "div", 3)(219, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "CARD GROUP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 4)(222, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](223, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](225, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 11)(229, "div", 46)(230, "div", 1)(231, "div", 47)(232, "div", 14)(233, "div", 15)(234, "h5", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 14)(239, "div", 15)(240, "h5", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "This card has supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 14)(245, "div", 15)(246, "h5", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 0)(251, "div", 1)(252, "div", 2)(253, "div", 3)(254, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "CARD WRAPPER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 4)(257, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](260, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](262, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "div", 49)(264, "div", 46)(265, "div", 1)(266, "div", 50)(267, "div", 51)(268, "div", 21)(269, "div", 15)(270, "h4", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "div", 21)(275, "div", 15)(276, "h4", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "This card has supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 21)(281, "div", 15)(282, "h4", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 46)(287, "div", 1)(288, "div", 2)(289, "div", 3)(290, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, "CARD COLUMNS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "div", 4)(293, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](294, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](296, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](298, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "div", 11)(300, "div", 46)(301, "div", 1)(302, "div", 52)(303, "div", 20)(304, "div", 34)(305, "h4", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "Card title that wraps to a new line");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "div", 53)(310, "blockquote", 54)(311, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "footer")(314, "small", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, " Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "cite", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div", 14)(319, "div", 15)(320, "h4", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "This card has supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "p", 16)(325, "small", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "div", 56)(328, "blockquote", 54)(329, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "footer")(332, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, " Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "cite", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "div", 57)(337, "blockquote", 54)(338, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "footer")(341, "small", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, " Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "cite", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "div", 58)(346, "h4", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "p", 16)(351, "small", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](352, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
      }
    },
    dependencies: [_theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__.Widget],
    encapsulation: 2
  });
}


/***/ }),

/***/ 6836:
/*!*************************************************************!*\
  !*** ./src/app/pages/ui/components/components.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsComponent": () => (/* binding */ ComponentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/directives/widget/widget.directive */ 3090);


class ComponentsComponent {
  ngOnInit() {
    jQuery('[data-toggle="tooltip"]').tooltip({
      sanitize: false,
      sanitizeFn: function (content) {
        return null;
      }
    });
    jQuery('[data-toggle="popover"]').popover({
      sanitize: false,
      sanitizeFn: function (content) {
        return null;
      }
    });
  }
  static #_ = this.ɵfac = function ComponentsComponent_Factory(t) {
    return new (t || ComponentsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ComponentsComponent,
    selectors: [["az-components"]],
    decls: 600,
    vars: 0,
    consts: [[1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "bottom-30"], ["widget", "", 1, "card"], [1, "card-header"], [1, "widget-controls"], ["data-widgster", "expand", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-down"], ["data-widgster", "collapse", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-up"], ["data-widgster", "fullscreen", "href", "#", 1, "transition"], [1, "fa", "fa-expand"], ["data-widgster", "restore", "href", "#", 1, "transition"], [1, "fa", "fa-compress"], ["data-widgster", "close", "href", "#", 1, "transition"], [1, "fa", "fa-times"], [1, "card-body", "widget-body"], ["role", "alert", 1, "alert", "alert-success"], ["role", "alert", 1, "alert", "alert-info"], ["role", "alert", 1, "alert", "alert-warning"], ["role", "alert", 1, "alert", "alert-danger"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-info", "alert-dismissible", "fade", "show"], ["role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "fade", "show"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "badge", "badge-secondary", "mr-1"], [1, "badge", "badge-primary", "mr-1"], [1, "badge", "badge-info", "mr-1"], [1, "badge", "badge-success", "mr-1"], [1, "badge", "badge-warning", "mr-1"], [1, "badge", "badge-danger", "mr-1"], [1, "badge", "badge-dark", "mr-1"], [1, "badge", "badge-main"], [1, "badge", "badge-pill", "badge-secondary", "mr-1"], [1, "badge", "badge-pill", "badge-danger", "mr-1"], [1, "badge", "badge-pill", "badge-warning", "mr-1"], [1, "badge", "badge-pill", "badge-success", "mr-1"], [1, "badge", "badge-pill", "badge-info", "mr-1"], [1, "badge", "badge-pill", "badge-dark", "mr-1"], [1, "badge", "badge-pill", "badge-primary", "mr-1"], [1, "badge", "badge-pill", "badge-main"], [1, "col-xl-5", "col-lg-5", "col-md-12", "col-sm-12", "bottom-30"], ["type", "button", "data-toggle", "tooltip", "data-animation", "false", "data-placement", "top", "title", "Tooltip on top", 1, "btn", "btn-secondary", "mr-1"], ["type", "button", "data-toggle", "tooltip", "data-animation", "false", "data-placement", "right", "title", "Tooltip on right", 1, "btn", "btn-secondary", "mr-1"], ["type", "button", "data-toggle", "tooltip", "data-animation", "false", "data-placement", "bottom", "title", "Tooltip on bottom", 1, "btn", "btn-secondary", "mr-1"], ["type", "button", "data-toggle", "tooltip", "data-animation", "false", "data-placement", "left", "title", "Tooltip on left", 1, "btn", "btn-secondary"], [1, "col-xl-7", "col-lg-7", "col-md-12", "col-sm-12", "bottom-30"], ["type", "button", "data-container", "body", "data-toggle", "popover", "data-placement", "top", "data-content", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-secondary", "mr-1"], ["type", "button", "data-container", "body", "data-toggle", "popover", "data-placement", "right", "data-content", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-secondary", "mr-1"], ["type", "button", "data-container", "body", "data-toggle", "popover", "data-placement", "bottom", "data-content", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-secondary", "mr-1"], ["type", "button", "data-container", "body", "data-toggle", "popover", "data-placement", "left", "data-content", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", 1, "btn", "btn-secondary", "mr-1"], ["tabindex", "0", "role", "button", "data-placement", "top", "data-toggle", "popover", "data-trigger", "focus", "title", "Dismissible popover", "data-content", "Click anywhere to dismiss this popover", 1, "btn", "btn-danger"], ["aria-label", "Page navigation"], [1, "pagination"], [1, "page-item"], ["href", "#", "aria-label", "Previous", 1, "page-link"], [1, "sr-only"], ["href", "#", 1, "page-link"], ["href", "#", "aria-label", "Next", 1, "page-link"], [1, "page-item", "disabled"], [1, "page-item", "active"], [1, "pagination", "pagination-sm"], [1, "pagination", "pagination-lg"], [1, "row", "col", "bottom-15"], [1, "card-title", "w-100"], ["type", "button", "data-toggle", "modal", "data-target", "#default-modal", 1, "btn", "btn-info"], ["id", "default-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-label", 1, "modal", "fade", 2, "display", "none"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "modal-label", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["type", "button", "data-toggle", "modal", "data-target", "#noheader-modal", 1, "btn", "btn-danger"], ["id", "noheader-modal", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 2, "display", "none"], ["type", "button", "data-toggle", "modal", "data-target", "#nofooter-modal", 1, "btn", "btn-success"], ["id", "nofooter-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-nofooter-label", 1, "modal", "fade", 2, "display", "none"], ["id", "modal-nofooter-label", 1, "modal-title"], ["type", "button", "data-toggle", "modal", "data-target", "#md-modal", 1, "btn", "btn-primary"], ["id", "md-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-default-label", 1, "modal", "fade", 2, "display", "none"], [1, "modal-header", "state", "modal-primary"], ["id", "modal-default-label", 1, "modal-title"], ["type", "button", "data-toggle", "modal", "data-target", "#sm-modal", 1, "btn", "btn-primary"], ["id", "sm-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-small-label", 1, "modal", "fade", 2, "display", "none"], ["role", "document", 1, "modal-dialog", "modal-sm"], ["id", "modal-small-label", 1, "modal-title"], ["type", "button", "data-toggle", "modal", "data-target", "#lg-modal", 1, "btn", "btn-primary"], ["id", "lg-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-large-label", 1, "modal", "fade", 2, "display", "none"], ["role", "document", 1, "modal-dialog", "modal-lg"], ["id", "modal-large-label", 1, "modal-title"], [1, "row", "col"], ["type", "button", "data-toggle", "modal", "data-target", "#primary-modal", 1, "btn", "btn-primary"], ["id", "primary-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-primary-label", 1, "modal", "fade"], ["id", "modal-primary-label", 1, "modal-title"], [1, "fa", "fa-user"], ["type", "button", "data-toggle", "modal", "data-target", "#success-modal", 1, "btn", "btn-success"], ["id", "success-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-success-label", 1, "modal", "fade", 2, "display", "none"], [1, "modal-header", "state", "modal-success"], ["id", "modal-success-label", 1, "modal-title"], [1, "fa", "fa-check"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success"], ["type", "button", "data-toggle", "modal", "data-target", "#info-modal", 1, "btn", "btn-info"], ["id", "info-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-info-label", 1, "modal", "fade"], [1, "modal-header", "state", "modal-info"], ["id", "modal-info-label", 1, "modal-title"], [1, "fa", "fa-info"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-info"], ["type", "button", "data-toggle", "modal", "data-target", "#warning-modal", 1, "btn", "btn-warning"], ["id", "warning-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-warning-label", 1, "modal", "fade"], [1, "modal-header", "state", "modal-warning"], ["id", "modal-warning-label", 1, "modal-title"], [1, "fa", "fa-exclamation"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-warning"], ["type", "button", "data-toggle", "modal", "data-target", "#error-modal", 1, "btn", "btn-danger"], ["id", "error-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modal-error-label", 1, "modal", "fade"], [1, "modal-header", "state", "modal-danger"], ["id", "modal-error-label", 1, "modal-title"], [1, "fa", "fa-warning"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "row", "mbm-20"], [1, "progress", "bottom-15"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "25%"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "45%"], ["role", "progressbar", "aria-valuenow", "65", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "65%"], ["role", "progressbar", "aria-valuenow", "85", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "85%"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "75%"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "bg-info", 2, "width", "50%"], [1, "progress", "progress-xs", "bottom-15"], [1, "progress", "progress-sm", "bottom-15"], [1, "progress", "progress-md", "bottom-15"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "15", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "15%"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "30%"], ["role", "progressbar", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "20%"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["role", "listbox", 1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/img/app/snow.jpg", "alt", "First slide", 1, "d-block", "w-100p", "h-100p"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "carousel-item"], ["src", "assets/img/app/sky-full.jpg", "alt", "Second slide", 1, "d-block", "w-100p", "h-100p"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]],
    template: function ComponentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "DEFAULT ALERTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15)(18, "div", 16)(19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Well done!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " You successfully read this important alert message. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17)(23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Heads up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " This alert needs your attention. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18)(27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Warning!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Better check yourself, you're not looking too good. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19)(31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Oh snap!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Change a few things up and try submitting again. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 1)(35, "div", 2)(36, "div", 3)(37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "DISMISSIBLE ALERTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 4)(40, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 15)(51, "div", 20)(52, "button", 21)(53, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Well!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " You successfully read this important alert message. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 23)(59, "button", 21)(60, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Heads up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " This alert needs your attention. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 24)(66, "button", 21)(67, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Warning!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Better check yourself, you're not looking too good. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 25)(73, "button", 21)(74, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Oh snap!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " Change a few things up and try submitting again. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 0)(80, "div", 1)(81, "div", 2)(82, "div", 3)(83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "LABELS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 4)(86, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 15)(97, "p")(98, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 1)(115, "div", 2)(116, "div", 3)(117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "BADGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 4)(120, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 15)(131, "p")(132, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "31");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "41");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "33");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "17");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 0)(149, "div", 42)(150, "div", 2)(151, "div", 3)(152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "TOOLTIPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 4)(155, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 15)(166, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, " On top ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, " On right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, " On bottom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, " On left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 47)(175, "div", 2)(176, "div", 3)(177, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "POPOVERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 4)(180, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 15)(191, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, " On top ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, " On right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, " On bottom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, " On left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, " Dismissible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 0)(202, "div", 42)(203, "div", 2)(204, "div", 3)(205, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "PAGINATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 4)(208, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](217, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 15)(219, "nav", 53)(220, "ul", 54)(221, "li", 55)(222, "a", 56)(223, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "li", 55)(228, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "li", 55)(231, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "li", 55)(234, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "li", 55)(237, "a", 59)(238, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "nav", 53)(243, "ul", 54)(244, "li", 60)(245, "a", 56)(246, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "li", 55)(251, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "li", 61)(254, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "li", 55)(257, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "li", 55)(260, "a", 59)(261, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "nav", 53)(266, "ul", 62)(267, "li", 55)(268, "a", 56)(269, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "li", 55)(274, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "li", 55)(277, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "li", 55)(280, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "li", 55)(283, "a", 59)(284, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](287, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "nav", 53)(289, "ul", 63)(290, "li", 55)(291, "a", 56)(292, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "li", 55)(297, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "li", 55)(300, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "li", 55)(303, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "li", 55)(306, "a", 59)(307, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 47)(312, "div", 2)(313, "div", 3)(314, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "MODALS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "div", 4)(317, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](318, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](320, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](322, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](324, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](326, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "div", 15)(328, "div", 64)(329, "h6", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, "Basic Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "div", 67)(334, "div", 68)(335, "div", 69)(336, "div", 70)(337, "h4", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "Default Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "button", 72)(340, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "div", 74)(345, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](346, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](348, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "No Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "div", 78)(352, "div", 68)(353, "div", 69)(354, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "div", 74)(357, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](362, "No Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "div", 80)(364, "div", 68)(365, "div", 69)(366, "div", 70)(367, "h4", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](368, "No Footer Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "button", 72)(370, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](371, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](373, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "div", 64)(375, "h6", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](376, "Sizes of the Modals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "button", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](378, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "div", 83)(380, "div", 68)(381, "div", 69)(382, "div", 84)(383, "h4", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, "Default modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "button", 72)(386, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](387, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](389, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "div", 74)(391, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "button", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](396, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "div", 87)(398, "div", 88)(399, "div", 69)(400, "div", 84)(401, "h4", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](402, "Small modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "button", 72)(404, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](407, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](408, "div", 74)(409, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](410, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](412, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "button", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](414, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "div", 91)(416, "div", 92)(417, "div", 69)(418, "div", 84)(419, "h4", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](420, "Large modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "button", 72)(422, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](423, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](425, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur dignissimos minima nostrum omnis sapiente! Aut, culpa cum cupiditate, delectus dolor eos esse, harum id illo in maxime minima molestiae nostrum odio recusandae sunt voluptates? Autem esse ipsum libero saepe. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "div", 74)(427, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](428, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](430, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "div", 94)(432, "h6", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](433, "Styles of the Modals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](434, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](435, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](436, "div", 96)(437, "div", 68)(438, "div", 69)(439, "div", 84)(440, "h4", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](441, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](442, "Primary Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "button", 72)(444, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](445, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](447, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "div", 74)(449, "button", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](450, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](452, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "button", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](454, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "div", 100)(456, "div", 68)(457, "div", 69)(458, "div", 101)(459, "h4", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](460, "i", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](461, "Success Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "button", 72)(463, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](464, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](465, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](466, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](467, "div", 74)(468, "button", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](471, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "button", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](473, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](474, "div", 106)(475, "div", 68)(476, "div", 69)(477, "div", 107)(478, "h4", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](479, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](480, "Info Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](481, "button", 72)(482, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](483, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](485, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "div", 74)(487, "button", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](488, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](489, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](490, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](491, "button", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](492, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "div", 112)(494, "div", 68)(495, "div", 69)(496, "div", 113)(497, "h4", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](498, "i", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](499, "Warning Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](500, "button", 72)(501, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](502, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](503, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](504, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](505, "div", 74)(506, "button", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](507, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](508, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](509, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](510, "button", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](511, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](512, "div", 118)(513, "div", 68)(514, "div", 69)(515, "div", 119)(516, "h4", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](517, "i", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](518, "Danger Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](519, "button", 72)(520, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](521, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](522, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](523, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](524, "div", 74)(525, "button", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](526, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](527, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](528, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](529, "div", 123)(530, "div", 1)(531, "div", 2)(532, "div", 3)(533, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](534, "PROGRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](535, "div", 4)(536, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](537, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](538, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](539, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](540, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](541, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](542, "div", 15)(543, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](544, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](545, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](546, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](547, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](548, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](549, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](550, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](551, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](552, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](553, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](554, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](555, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](556, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](557, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](558, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](559, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](560, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](561, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](562, "div", 135)(563, "div", 136)(564, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](565, "div", 138)(566, "div", 2)(567, "div", 3)(568, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](569, "CAROUSEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](570, "div", 4)(571, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](572, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](573, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](574, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](575, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](576, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](577, "div", 15)(578, "div", 139)(579, "ol", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](580, "li", 141)(581, "li", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](582, "div", 143)(583, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](584, "img", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](585, "div", 146)(586, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](587, "Image caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](588, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](589, "Image description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](590, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](591, "img", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](592, "a", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](593, "span", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](594, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](595, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](596, "a", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](597, "span", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](598, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](599, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
    },
    dependencies: [_theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__.Widget],
    encapsulation: 2
  });
}


/***/ }),

/***/ 6195:
/*!*************************************************!*\
  !*** ./src/app/pages/ui/grid/grid.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridComponent": () => (/* binding */ GridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/directives/widget/widget.directive */ 3090);


class GridComponent {
  static #_ = this.ɵfac = function GridComponent_Factory(t) {
    return new (t || GridComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GridComponent,
    selectors: [["az-grid"]],
    decls: 584,
    vars: 0,
    consts: [[1, "row", "bottom-30"], [1, "col"], ["widget", "", 1, "card"], [1, "card-header"], [1, "widget-controls"], ["data-widgster", "expand", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-down"], ["data-widgster", "collapse", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-up"], ["data-widgster", "fullscreen", "href", "#", 1, "transition"], [1, "fa", "fa-expand"], ["data-widgster", "restore", "href", "#", 1, "transition"], [1, "fa", "fa-compress"], ["data-widgster", "close", "href", "#", 1, "transition"], [1, "fa", "fa-times"], [1, "card-body", "widget-body"], [1, "card-title"], [1, "row", "bottom-15", "grid"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "col-md-6"], [1, "col-md-4"], [1, "col-md-3"], [1, "col-md-2"], [1, "col-md-1"], [1, "col-12", "col-md-8"], [1, "col-6", "col-md-4"], [1, "col-6"], [1, "col-12", "col-sm-6", "col-md-8"], [1, "col-6", "col-sm-4"], [1, "col-9"], [1, "col-4"], [1, "col-md-4", "offset-md-4"], [1, "col-md-3", "offset-md-3"], [1, "col-md-6", "offset-md-3"], [1, "col-md-3", "col-md-pull-9"], [1, "col-md-9", "col-md-push-3"], [1, "table-responsive"], [1, "table", "table-bordered", "table-striped"], ["scope", "row", 1, "text-nowrap"], ["colspan", "4"], ["colspan", "5"], [1, "row", "mbm-20"], [1, "table", "table-bordered", "responsive-utilities"], ["scope", "row"], [1, "is-hidden"], [1, "is-visible"]],
    template: function GridComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "INLINE FORM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15)(18, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Stacked to horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Using a single set of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, ".col-md-*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns within any ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, ".row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17)(29, "div", 18)(30, "div", 19)(31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, ".col-md-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17)(34, "div", 21)(35, "div", 19)(36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, ".col-md-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 21)(39, "div", 19)(40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, ".col-md-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 17)(43, "div", 22)(44, "div", 19)(45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, ".col-md-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 22)(48, "div", 19)(49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, ".col-md-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 22)(52, "div", 19)(53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, ".col-md-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 17)(56, "div", 23)(57, "div", 19)(58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, ".col-md-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 23)(61, "div", 19)(62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, ".col-md-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 23)(65, "div", 19)(66, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, ".col-md-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 23)(69, "div", 19)(70, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, ".col-md-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 17)(73, "div", 24)(74, "div", 19)(75, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, ".col-md-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 24)(78, "div", 19)(79, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, ".col-md-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 24)(82, "div", 19)(83, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, ".col-md-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 24)(86, "div", 19)(87, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, ".col-md-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 24)(90, "div", 19)(91, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, ".col-md-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 24)(94, "div", 19)(95, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, ".col-md-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 17)(98, "div", 25)(99, "div", 19)(100, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, ".col-md-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 25)(103, "div", 19)(104, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, ".col-md-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 25)(107, "div", 19)(108, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, ".col-md-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 25)(111, "div", 19)(112, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, ".col-md-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 25)(115, "div", 19)(116, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, ".col-md-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 25)(119, "div", 19)(120, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, ".col-md-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 25)(123, "div", 19)(124, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, ".col-md-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 25)(127, "div", 19)(128, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, ".col-md-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 25)(131, "div", 19)(132, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, ".col-md-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 25)(135, "div", 19)(136, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, ".col-md-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 25)(139, "div", 19)(140, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, ".col-md-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 25)(143, "div", 19)(144, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, ".col-md-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Mobile and desktop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Don\u2019t want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, ".col-*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, ".col-md-*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, " to your columns. See the example below for a better idea of how it all works.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 17)(158, "div", 26)(159, "div", 19)(160, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, ".col-12 .col-md-8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 27)(163, "div", 19)(164, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, ".col-6 .col-md-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 17)(167, "div", 27)(168, "div", 19)(169, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, ".col-6 .col-md-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 27)(172, "div", 19)(173, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, ".col-6 .col-md-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 27)(176, "div", 19)(177, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, ".col-6 .col-md-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 17)(180, "div", 28)(181, "div", 19)(182, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, ".col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 28)(185, "div", 19)(186, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, ".col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Mobile, tablet, desktop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Build on the previous example by creating even more dynamic and powerful layouts with tablet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, ".col-sm-*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, " classes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 17)(197, "div", 29)(198, "div", 19)(199, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, ".col-12 .col-sm-6 .col-md-8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 27)(202, "div", 19)(203, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, ".col-6 .col-md-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 17)(206, "div", 30)(207, "div", 19)(208, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, ".col-6 .col-sm-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 30)(211, "div", 19)(212, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, ".col-6 .col-sm-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 30)(215, "div", 19)(216, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, ".col-6 .col-sm-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Column wrapping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 17)(224, "div", 31)(225, "div", 19)(226, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, ".col-9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 17)(229, "div", 32)(230, "div", 19)(231, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, ".col-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 28)(236, "div", 19)(237, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, ".col-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Subsequent columns continue along the new line.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](241, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Offsetting columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "Move columns to the right using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, ".offset-md-*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, " classes. These classes increase the left margin of a column by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, " columns. For example, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, ".offset-md-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, " moves ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, ".col-md-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, " over four columns.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 17)(259, "div", 22)(260, "div", 19)(261, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, ".col-md-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "div", 33)(264, "div", 19)(265, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, ".col-md-4 .offset-md-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 17)(268, "div", 34)(269, "div", 19)(270, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, ".col-md-3 .offset-md-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "div", 34)(273, "div", 19)(274, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, ".col-md-3 .offset-md-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 17)(277, "div", 35)(278, "div", 19)(279, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, ".col-md-6 .offset-md-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](281, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "Column ordering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "div", 17)(285, "div", 36)(286, "div", 19)(287, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, ".col-md-3 .col-md-pull-9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 37)(290, "div", 19)(291, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, ".col-md-9 .col-md-push-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "div", 0)(294, "div", 1)(295, "div", 2)(296, "div", 3)(297, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, "GRID OPTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "div", 4)(300, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](301, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](303, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](305, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](307, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](309, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div", 15)(311, "div", 38)(312, "table", 39)(313, "thead")(314, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](315, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, " Extra small devices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](319, "Phones (<576px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, " Small devices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "Tablets (\u2265576px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, " Medium devices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, "Desktops (\u2265768px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](329, " Large devices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, "Desktops (\u2265992px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, " Large devices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Desktops (\u22651200px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "tbody")(337, "tr")(338, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "Grid behavior");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, "Horizontal at all times");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "Collapsed to start, horizontal above breakpoints");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "tr")(345, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](346, "Container width");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](348, "None (auto)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "540px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](352, "720px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, "940px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "1140px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "tr")(358, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](359, "Class prefix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "td")(361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](362, ".col-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "td")(364, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](365, ".col-sm-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "td")(367, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](368, ".col-md-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "td")(370, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](371, ".col-lg-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "td")(373, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](374, ".col-xl-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "tr")(376, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](377, "# of columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](379, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "tr")(381, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](382, "Gutter width");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, "1.875rem / 30px (15px on each side of a column)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "tr")(386, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](387, "Nestable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](389, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "tr")(391, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, "Offsets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "tr")(396, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](397, "Column ordering");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](399, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "div", 43)(401, "div", 1)(402, "div", 2)(403, "div", 3)(404, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "RESPONSIVE UTILITIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "div", 4)(407, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](408, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](410, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](412, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](414, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](416, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "div", 15)(418, "div", 38)(419, "table", 44)(420, "thead")(421, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](422, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](424, " Extra small devices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](426, "Portrait phones (<544px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](428, " Small devices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](430, "Landscape phones (\u2265544px - <768px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](432, " Medium devices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](434, "Tablets (\u2265768px - <992px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](436, " Large devices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](438, "Desktops (\u2265992px - <1200px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](440, " Extra large devices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](441, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](442, "Desktops (\u22651200px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "tbody")(444, "tr")(445, "th", 45)(446, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](447, ".hidden-xs-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](449, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](451, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](452, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](453, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](454, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](455, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](457, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](458, "tr")(459, "th", 45)(460, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](461, ".hidden-sm-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](463, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](464, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](465, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](471, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "tr")(473, "th", 45)(474, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](475, ".hidden-md-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](477, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](478, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](479, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](480, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](481, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](482, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](483, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](485, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "tr")(487, "th", 45)(488, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](489, ".hidden-lg-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](490, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](491, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](492, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](493, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](494, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](495, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](496, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](497, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](498, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](499, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](500, "tr")(501, "th", 45)(502, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](503, ".hidden-xl-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](504, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](505, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](506, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](507, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](508, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](509, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](510, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](511, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](512, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](513, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](514, "tr")(515, "th", 45)(516, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](517, ".hidden-xs-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](518, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](519, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](520, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](521, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](522, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](523, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](524, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](525, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](526, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](527, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](528, "tr")(529, "th", 45)(530, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](531, ".hidden-sm-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](532, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](533, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](534, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](535, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](536, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](537, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](538, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](539, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](540, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](541, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](542, "tr")(543, "th", 45)(544, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](545, ".hidden-md-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](546, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](547, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](548, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](549, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](550, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](551, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](552, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](553, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](554, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](555, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](556, "tr")(557, "th", 45)(558, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](559, ".hidden-lg-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](560, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](561, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](562, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](563, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](564, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](565, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](566, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](567, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](568, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](569, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](570, "tr")(571, "th", 45)(572, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](573, ".hidden-xl-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](574, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](575, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](576, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](577, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](578, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](579, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](580, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](581, "Visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](582, "td", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](583, "Hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    dependencies: [_theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__.Widget],
    styles: ["/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n\n.grid .card {\n  padding: 6px;\n  background: #248dad;\n  color: #fff;\n  margin-bottom: 12px;\n}\n.grid .card .card-body {\n  padding: 2px 0;\n  text-align: center;\n}\n\n.responsive-utilities td {\n  text-align: center;\n  vertical-align: middle;\n}\n.responsive-utilities td.is-visible {\n  color: #468847;\n  background-color: #dff0d8;\n}\n.responsive-utilities td.is-hidden {\n  color: #ccc;\n  background-color: #f9f9f9;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc3R5bGVzL3NraW5zL19ibHVlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9TY2hlZHVsaW5nJTIwU29mdHdhcmUvc3JjL2FwcC9wYWdlcy91aS9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3BhZ2VzL3VpL2dyaWQvZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBQTtBQ2FBLG9CQUFBO0FBTUEsa0JBQUE7QUFJQSxpQkFBQTtBQUtBLGtCQUFBO0FBS0EsbUJBQUE7QUFLQSxnQkFBQTtBQVNBLHVCQUFBO0FBOENBO0VBQ0ksMlFBQUE7RUFDQSxhQUFBO0FDcEZKOztBQ1JLO0VBQ0csWUFBQTtFQUNBLG1CSFNLO0VHUkwsV0hKTztFR0tQLG1CQUFBO0FEV1I7QUNWUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBRFlaOztBQ1BJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBRFVSO0FDVFE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QURXWjtBQ1RRO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FEV1oiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKiBDb2xvcnMgKHJlY29tbWVuZGVkIHVzZSBIRVggY29sb3JzKSAqKioqLyBcclxuJG1haW4tY29sb3I6ICMyNDJEM0E7IFxyXG4kZGVmYXVsdC1jb2xvcjojZmZmOyBcclxuJGRhcmstY29sb3I6ICMwMDA7XHJcblxyXG4kYm9keS1iZy1ncmFkaWVudC1jb2xvci0xOiAjMWU1Nzk5O1xyXG4kYm9keS1iZy1ncmFkaWVudC1jb2xvci0yOiAgI2E1YzllNTtcclxuXHJcbiRzaWRlYmFyLWJnLWNvbG9yOiMzNDQxNTQ7XHJcbiRzaWRlYmFyLWl0ZW0tYWN0aXZlLWJnLWNvbG9yOiAjNjM3Q0EwOy8vICMwMDk5Y2M7XHJcblxyXG5cclxuJHByaW1hcnktY29sb3I6ICMwMjRhODg7XHJcbiRzdWNjZXNzLWNvbG9yOiAjMmQ5MjJkO1xyXG4kaW5mby1jb2xvcjogIzI0OGRhZDtcclxuJHdhcm5pbmctY29sb3I6ICNmNzlhMTc7XHJcbiRkYW5nZXItY29sb3I6ICNiZjE3MjU7IiwiQGltcG9ydCBcInNraW5zL2JsdWVcIjtcclxuXHJcbiRib2R5LWJnLWNvbG9yOiAjZTllYmVlO1xyXG4kdGV4dC1jb2xvcjogIzI0MjQyNDtcclxuJGdyYXktZGFyazogIzI5MmIyYztcclxuJGdyYXk6ICM1NTU7XHJcbiRncmF5LWxpZ2h0OiAjY2NjO1xyXG4kZ3JheS1saWdodGVyOiAjZWNlZWVmO1xyXG5cclxuJHRhYmxlLWJnLWFjdGl2ZTogcmdiYSgjMDAwLC4wNzUpO1xyXG4kdGFibGUtYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRncmF5LWxpZ2h0ZXI7XHJcblxyXG4vKioqKiBBcHAgcm9vdHMgKioqKi9cclxuJGFzc2V0cy1yb290OiAnfi9hc3NldHMvJztcclxuJGltYWdlcy1yb290OiAkYXNzZXRzLXJvb3QgKyAnaW1nLyc7XHJcbiRmb250cy1yb290OiAkYXNzZXRzLXJvb3QgKyAnZm9udHMvJztcclxuXHJcblxyXG4vKioqKiBHZW5lcmFsICoqKiovXHJcbiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuLyoqKiogTmF2YmFyICoqKiovXHJcbiRuYXZiYXItdGV4dC1jb2xvcjogJGRlZmF1bHQtY29sb3I7XHJcbiRuYXZiYXItaGVpZ2h0OiA2MHB4O1xyXG5cclxuXHJcbi8qKioqIFNpZGViYXIgKioqKi9cclxuJHNpZGViYXItd2lkdGg6IDIzMHB4O1xyXG5cclxuXHJcblxyXG4vKioqKiBQcm9ncmVzcyAqKioqL1xyXG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogMDtcclxuJHByb2dyZXNzLWhlaWdodDogMjBweDtcclxuXHJcblxyXG4vKioqKiBGb250cyAqKioqL1xyXG4kZm9udC10aGluOiAxMDA7XHJcbiRmb250LWxpZ2h0OiAzMDA7XHJcbiRmb250LW5vcm1hbDogNDAwO1xyXG4kZm9udC1ib2xkOiA1MDA7XHJcbiRmb250LWJvbGRlcjogNzAwO1xyXG4kZm9udC11bHRyYUJvbGQ6IDkwMDtcclxuXHJcblxyXG4vKioqKiBTb2NpYWwgaWNvbnMgKioqKi9cclxuJGZhY2Vib29rLWNvbG9yOiAjM2I1OTk4O1xyXG4kdHdpdHRlci1jb2xvcjogIzU1YWNlZTtcclxuJGluc3RhZ3JhbS1jb2xvcjogIzhhM2FiOTtcclxuJHBpbnRlcmVzdC1jb2xvcjogI2M5MjIyODsgXHJcbiRnb29nbGUtY29sb3I6ICNkZDRiMzk7XHJcbiRsaW5rZWRpbi1jb2xvcjogIzAxNzdCNTtcclxuJGdpdGh1Yi1jb2xvcjogIzZiNmI2YjtcclxuJHN0YWNrb3ZlcmZsb3ctY29sb3I6ICMyRjk2RTg7XHJcbiRkcmliYmxlLWNvbG9yOiAjRjI2Nzk4O1xyXG4kYmVoYWNlLWNvbG9yOiAjMDA5M0ZBO1xyXG5cclxuLy8tLS0tLS0tLWZvciBwcmV2ZW50IGF3ZXNvbWUtYm9vdHN0cmFwLWNoZWNrYm94IGVycm9ycy0tLS0tLS0tLVxyXG4vL0BpbXBvcnQgXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcbi8vQGltcG9ydCBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnNcIjtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogcmdiYSgjMDAwLC4xNSk7XHJcbiRlbmFibGUtdHJhbnNpdGlvbnM6IHRydWU7XHJcbiRpbnB1dC1jb2xvcjogJGdyYXk7XHJcbiRpbnB1dC1iZy1kaXNhYmxlZDogJGdyYXktbGlnaHRlcjtcclxuJGJyYW5kLXByaW1hcnk6ICRwcmltYXJ5LWNvbG9yO1xyXG4kYnJhbmQtc3VjY2VzczogJHN1Y2Nlc3MtY29sb3I7XHJcbiRicmFuZC1pbmZvOiAkaW5mby1jb2xvcjtcclxuJGJyYW5kLXdhcm5pbmc6ICR3YXJuaW5nLWNvbG9yO1xyXG4kYnJhbmQtZGFuZ2VyOiAkZGFuZ2VyLWNvbG9yO1xyXG4kYnJhbmQtaW52ZXJzZTogJGdyYXktZGFyaztcclxuXHJcblxyXG5cclxuXHJcbi8vU2V0IHZhcmlhYmxlcyB0byBiZSBhY2Nlc3NpYmxlIGZvciBKU1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtdG8tanMvc2Fzcy9zYXNzLXRvLWpzXCI7XHJcblxyXG4kdmFyaWFibGVzTWFwOiAoIFxyXG4gIG1haW4tY29sb3I6ICRtYWluLWNvbG9yLFxyXG4gIGRlZmF1bHQtY29sb3I6ICRkZWZhdWx0LWNvbG9yLFxyXG4gIGRhcmstY29sb3I6ICRkYXJrLWNvbG9yLFxyXG4gIHByaW1hcnktY29sb3I6ICRwcmltYXJ5LWNvbG9yLFxyXG4gIHN1Y2Nlc3MtY29sb3I6ICRzdWNjZXNzLWNvbG9yLFxyXG4gIHdhcm5pbmctY29sb3I6ICR3YXJuaW5nLWNvbG9yLFxyXG4gIGRhbmdlci1jb2xvcjogJGRhbmdlci1jb2xvcixcclxuICBpbmZvLWNvbG9yOiAkaW5mby1jb2xvcixcclxuICBzaWRlYmFyLWJnLWNvbG9yOiAkc2lkZWJhci1iZy1jb2xvcixcclxuICBncmF5OiAkZ3JheSxcclxuICBncmF5LWxpZ2h0OiAkZ3JheS1saWdodFxyXG4pO1xyXG5cclxuYm9keTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogc2Fzc1RvSnMoJHZhcmlhYmxlc01hcCk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4iLCIvKioqKiBDb2xvcnMgKHJlY29tbWVuZGVkIHVzZSBIRVggY29sb3JzKSAqKioqL1xuLyoqKiogQXBwIHJvb3RzICoqKiovXG4vKioqKiBHZW5lcmFsICoqKiovXG4vKioqKiBOYXZiYXIgKioqKi9cbi8qKioqIFNpZGViYXIgKioqKi9cbi8qKioqIFByb2dyZXNzICoqKiovXG4vKioqKiBGb250cyAqKioqL1xuLyoqKiogU29jaWFsIGljb25zICoqKiovXG5ib2R5OjphZnRlciB7XG4gIGNvbnRlbnQ6ICd7XCJtYWluLWNvbG9yXCI6XCIjMjQyRDNBXCIsXCJkZWZhdWx0LWNvbG9yXCI6XCIjZmZmXCIsXCJkYXJrLWNvbG9yXCI6XCIjMDAwXCIsXCJwcmltYXJ5LWNvbG9yXCI6XCIjMDI0YTg4XCIsXCJzdWNjZXNzLWNvbG9yXCI6XCIjMmQ5MjJkXCIsXCJ3YXJuaW5nLWNvbG9yXCI6XCIjZjc5YTE3XCIsXCJkYW5nZXItY29sb3JcIjpcIiNiZjE3MjVcIixcImluZm8tY29sb3JcIjpcIiMyNDhkYWRcIixcInNpZGViYXItYmctY29sb3JcIjpcIiMzNDQxNTRcIixcImdyYXlcIjpcIiM1NTVcIixcImdyYXktbGlnaHRcIjpcIiNjY2NcIn0nO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZ3JpZCAuY2FyZCB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYmFja2dyb3VuZDogIzI0OGRhZDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uZ3JpZCAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMnB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlc3BvbnNpdmUtdXRpbGl0aWVzIHRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnJlc3BvbnNpdmUtdXRpbGl0aWVzIHRkLmlzLXZpc2libGUge1xuICBjb2xvcjogIzQ2ODg0NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcbn1cbi5yZXNwb25zaXZlLXV0aWxpdGllcyB0ZC5pcy1oaWRkZW4ge1xuICBjb2xvcjogI2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmdyaWR7XHJcbiAgICAgLmNhcmR7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRpbmZvLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkZGVmYXVsdC1jb2xvcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxufVxyXG4ucmVzcG9uc2l2ZS11dGlsaXRpZXN7XHJcbiAgICB0ZHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAmLmlzLXZpc2libGUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ2ODg0NztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5pcy1oaWRkZW57XHJcbiAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn0gXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 4058:
/*!***************************************************!*\
  !*** ./src/app/pages/ui/icons/icons.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsComponent": () => (/* binding */ IconsComponent)
/* harmony export */ });
/* harmony import */ var _icons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.service */ 68322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/directives/widget/widget.directive */ 3090);





function IconsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 31)(5, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const icon_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fa ", icon_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("fa ", icon_r2, " ");
  }
}
function IconsComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33)(1, "div", 28)(2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const icon_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("socicon socicon-", icon_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", icon_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("socicon socicon-", icon_r3.id, " ");
  }
}
class IconsComponent {
  constructor(_iconsService) {
    this._iconsService = _iconsService;
    this.icons = _iconsService.getAll();
  }
  changeBg(param) {
    this.bgColor = param;
  }
  static #_ = this.ɵfac = function IconsComponent_Factory(t) {
    return new (t || IconsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_icons_service__WEBPACK_IMPORTED_MODULE_0__.IconsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: IconsComponent,
    selectors: [["az-icons"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_icons_service__WEBPACK_IMPORTED_MODULE_0__.IconsService])],
    decls: 55,
    vars: 5,
    consts: [[1, "row", "bottom-30"], [1, "col"], ["widget", ""], [1, "card-header"], [1, "widget-controls"], ["href", "#", "data-toggle", "dropdown", 1, "dropdown-toggle", "transition", "setting"], [1, "fa", "fa-gear"], [1, "dropdown-menu"], ["title", "Default BG", "href", "javascript:void(0)", 3, "click"], ["title", "Success BG", "href", "javascript:void(0)", 3, "click"], ["title", "Warning BG", "href", "javascript:void(0)", 3, "click"], ["title", "Danger BG", "href", "javascript:void(0)", 3, "click"], ["data-widgster", "expand", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-down"], ["data-widgster", "collapse", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-up"], ["data-widgster", "fullscreen", "href", "#", 1, "transition"], [1, "fa", "fa-expand"], ["data-widgster", "restore", "href", "#", 1, "transition"], [1, "fa", "fa-compress"], ["data-widgster", "close", "href", "#", 1, "transition"], [1, "fa", "fa-times"], [1, "card-body", "widget-body"], [1, "row"], ["class", "col-xl-2 col-lg-3 col-md-4 col-sm-4 icon-font-awesome", 4, "ngFor", "ngForOf"], ["widget", "", 1, "card"], ["class", "col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 bottom-15 icon-socicon", 4, "ngFor", "ngForOf"], [1, "col-xl-2", "col-lg-3", "col-md-4", "col-sm-4", "icon-font-awesome"], [1, "card", "transition"], [1, "card-body"], [1, "card-text"], ["aria-hidden", "true"], [1, "sr-only"], [1, "col-xl-2", "col-lg-3", "col-md-4", "col-sm-4", "col-6", "bottom-15", "icon-socicon"], [1, "card-body", "text-center"]],
    template: function IconsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "FONT AWESOME ICONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ul", 7)(10, "li")(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IconsComponent_Template_a_click_11_listener() {
          return ctx.changeBg("");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Default BG");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li")(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IconsComponent_Template_a_click_14_listener() {
          return ctx.changeBg("success");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Success BG");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li")(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IconsComponent_Template_a_click_17_listener() {
          return ctx.changeBg("warning");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Warning BG");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li")(20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IconsComponent_Template_a_click_20_listener() {
          return ctx.changeBg("danger");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Danger BG");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 22)(33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, IconsComponent_div_34_Template, 7, 4, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 23)(36, "div", 1)(37, "div", 25)(38, "div", 3)(39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "SOCICONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 4)(42, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 22)(53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, IconsComponent_div_54_Template, 6, 6, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("card card-", ctx.bgColor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.icons.fontAwesome);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.icons.socicons);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_1__.Widget],
    styles: ["/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n\n.icon-font-awesome {\n  margin-bottom: 15px;\n}\n.icon-font-awesome .card {\n  float: left;\n  width: 100%;\n  background: #248dad;\n  color: #fff;\n}\n.icon-font-awesome .card:hover {\n  background: #024a88;\n}\n.icon-font-awesome .card .card-body {\n  padding: 2px 6px;\n}\n.icon-font-awesome .card .card-body p {\n  font-size: 14px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.icon-font-awesome .card .card-body p i {\n  margin-right: 8px;\n}\n\n.icon-socicon .card {\n  float: left;\n  height: 100px;\n  width: 100%;\n  line-height: 1.4;\n  background: #248dad;\n  color: #fff;\n}\n.icon-socicon .card:hover {\n  background: #024a88;\n}\n.icon-socicon .card .card-body {\n  padding: 15px;\n}\n.icon-socicon .card p {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc3R5bGVzL3NraW5zL19ibHVlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9TY2hlZHVsaW5nJTIwU29mdHdhcmUvc3JjL2FwcC9wYWdlcy91aS9pY29ucy9pY29ucy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdWkvaWNvbnMvaWNvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQUE7QUNhQSxvQkFBQTtBQU1BLGtCQUFBO0FBSUEsaUJBQUE7QUFLQSxrQkFBQTtBQUtBLG1CQUFBO0FBS0EsZ0JBQUE7QUFTQSx1QkFBQTtBQThDQTtFQUNJLDJRQUFBO0VBQ0EsYUFBQTtBQ3BGSjs7QUNWQTtFQUNJLG1CQUFBO0FEYUo7QUNaSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJIUUs7RUdQTCxXSExPO0FFbUJmO0FDYlE7RUFDSSxtQkhHSTtBRVloQjtBQ2JRO0VBQ0ksZ0JBQUE7QURlWjtBQ2RZO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBRGdCaEI7QUNmZ0I7RUFDSSxpQkFBQTtBRGlCcEI7O0FDVEk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CSGxCSztFR21CTCxXSC9CTztBRTJDZjtBQ1hRO0VBQ0ksbUJIdkJJO0FFb0NoQjtBQ1hRO0VBQ0ksYUFBQTtBRGFaO0FDWFE7RUFDSSxlQUFBO0FEYVoiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKiBDb2xvcnMgKHJlY29tbWVuZGVkIHVzZSBIRVggY29sb3JzKSAqKioqLyBcclxuJG1haW4tY29sb3I6ICMyNDJEM0E7IFxyXG4kZGVmYXVsdC1jb2xvcjojZmZmOyBcclxuJGRhcmstY29sb3I6ICMwMDA7XHJcblxyXG4kYm9keS1iZy1ncmFkaWVudC1jb2xvci0xOiAjMWU1Nzk5O1xyXG4kYm9keS1iZy1ncmFkaWVudC1jb2xvci0yOiAgI2E1YzllNTtcclxuXHJcbiRzaWRlYmFyLWJnLWNvbG9yOiMzNDQxNTQ7XHJcbiRzaWRlYmFyLWl0ZW0tYWN0aXZlLWJnLWNvbG9yOiAjNjM3Q0EwOy8vICMwMDk5Y2M7XHJcblxyXG5cclxuJHByaW1hcnktY29sb3I6ICMwMjRhODg7XHJcbiRzdWNjZXNzLWNvbG9yOiAjMmQ5MjJkO1xyXG4kaW5mby1jb2xvcjogIzI0OGRhZDtcclxuJHdhcm5pbmctY29sb3I6ICNmNzlhMTc7XHJcbiRkYW5nZXItY29sb3I6ICNiZjE3MjU7IiwiQGltcG9ydCBcInNraW5zL2JsdWVcIjtcclxuXHJcbiRib2R5LWJnLWNvbG9yOiAjZTllYmVlO1xyXG4kdGV4dC1jb2xvcjogIzI0MjQyNDtcclxuJGdyYXktZGFyazogIzI5MmIyYztcclxuJGdyYXk6ICM1NTU7XHJcbiRncmF5LWxpZ2h0OiAjY2NjO1xyXG4kZ3JheS1saWdodGVyOiAjZWNlZWVmO1xyXG5cclxuJHRhYmxlLWJnLWFjdGl2ZTogcmdiYSgjMDAwLC4wNzUpO1xyXG4kdGFibGUtYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRncmF5LWxpZ2h0ZXI7XHJcblxyXG4vKioqKiBBcHAgcm9vdHMgKioqKi9cclxuJGFzc2V0cy1yb290OiAnfi9hc3NldHMvJztcclxuJGltYWdlcy1yb290OiAkYXNzZXRzLXJvb3QgKyAnaW1nLyc7XHJcbiRmb250cy1yb290OiAkYXNzZXRzLXJvb3QgKyAnZm9udHMvJztcclxuXHJcblxyXG4vKioqKiBHZW5lcmFsICoqKiovXHJcbiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuLyoqKiogTmF2YmFyICoqKiovXHJcbiRuYXZiYXItdGV4dC1jb2xvcjogJGRlZmF1bHQtY29sb3I7XHJcbiRuYXZiYXItaGVpZ2h0OiA2MHB4O1xyXG5cclxuXHJcbi8qKioqIFNpZGViYXIgKioqKi9cclxuJHNpZGViYXItd2lkdGg6IDIzMHB4O1xyXG5cclxuXHJcblxyXG4vKioqKiBQcm9ncmVzcyAqKioqL1xyXG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogMDtcclxuJHByb2dyZXNzLWhlaWdodDogMjBweDtcclxuXHJcblxyXG4vKioqKiBGb250cyAqKioqL1xyXG4kZm9udC10aGluOiAxMDA7XHJcbiRmb250LWxpZ2h0OiAzMDA7XHJcbiRmb250LW5vcm1hbDogNDAwO1xyXG4kZm9udC1ib2xkOiA1MDA7XHJcbiRmb250LWJvbGRlcjogNzAwO1xyXG4kZm9udC11bHRyYUJvbGQ6IDkwMDtcclxuXHJcblxyXG4vKioqKiBTb2NpYWwgaWNvbnMgKioqKi9cclxuJGZhY2Vib29rLWNvbG9yOiAjM2I1OTk4O1xyXG4kdHdpdHRlci1jb2xvcjogIzU1YWNlZTtcclxuJGluc3RhZ3JhbS1jb2xvcjogIzhhM2FiOTtcclxuJHBpbnRlcmVzdC1jb2xvcjogI2M5MjIyODsgXHJcbiRnb29nbGUtY29sb3I6ICNkZDRiMzk7XHJcbiRsaW5rZWRpbi1jb2xvcjogIzAxNzdCNTtcclxuJGdpdGh1Yi1jb2xvcjogIzZiNmI2YjtcclxuJHN0YWNrb3ZlcmZsb3ctY29sb3I6ICMyRjk2RTg7XHJcbiRkcmliYmxlLWNvbG9yOiAjRjI2Nzk4O1xyXG4kYmVoYWNlLWNvbG9yOiAjMDA5M0ZBO1xyXG5cclxuLy8tLS0tLS0tLWZvciBwcmV2ZW50IGF3ZXNvbWUtYm9vdHN0cmFwLWNoZWNrYm94IGVycm9ycy0tLS0tLS0tLVxyXG4vL0BpbXBvcnQgXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcbi8vQGltcG9ydCBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnNcIjtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogcmdiYSgjMDAwLC4xNSk7XHJcbiRlbmFibGUtdHJhbnNpdGlvbnM6IHRydWU7XHJcbiRpbnB1dC1jb2xvcjogJGdyYXk7XHJcbiRpbnB1dC1iZy1kaXNhYmxlZDogJGdyYXktbGlnaHRlcjtcclxuJGJyYW5kLXByaW1hcnk6ICRwcmltYXJ5LWNvbG9yO1xyXG4kYnJhbmQtc3VjY2VzczogJHN1Y2Nlc3MtY29sb3I7XHJcbiRicmFuZC1pbmZvOiAkaW5mby1jb2xvcjtcclxuJGJyYW5kLXdhcm5pbmc6ICR3YXJuaW5nLWNvbG9yO1xyXG4kYnJhbmQtZGFuZ2VyOiAkZGFuZ2VyLWNvbG9yO1xyXG4kYnJhbmQtaW52ZXJzZTogJGdyYXktZGFyaztcclxuXHJcblxyXG5cclxuXHJcbi8vU2V0IHZhcmlhYmxlcyB0byBiZSBhY2Nlc3NpYmxlIGZvciBKU1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtdG8tanMvc2Fzcy9zYXNzLXRvLWpzXCI7XHJcblxyXG4kdmFyaWFibGVzTWFwOiAoIFxyXG4gIG1haW4tY29sb3I6ICRtYWluLWNvbG9yLFxyXG4gIGRlZmF1bHQtY29sb3I6ICRkZWZhdWx0LWNvbG9yLFxyXG4gIGRhcmstY29sb3I6ICRkYXJrLWNvbG9yLFxyXG4gIHByaW1hcnktY29sb3I6ICRwcmltYXJ5LWNvbG9yLFxyXG4gIHN1Y2Nlc3MtY29sb3I6ICRzdWNjZXNzLWNvbG9yLFxyXG4gIHdhcm5pbmctY29sb3I6ICR3YXJuaW5nLWNvbG9yLFxyXG4gIGRhbmdlci1jb2xvcjogJGRhbmdlci1jb2xvcixcclxuICBpbmZvLWNvbG9yOiAkaW5mby1jb2xvcixcclxuICBzaWRlYmFyLWJnLWNvbG9yOiAkc2lkZWJhci1iZy1jb2xvcixcclxuICBncmF5OiAkZ3JheSxcclxuICBncmF5LWxpZ2h0OiAkZ3JheS1saWdodFxyXG4pO1xyXG5cclxuYm9keTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogc2Fzc1RvSnMoJHZhcmlhYmxlc01hcCk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4iLCIvKioqKiBDb2xvcnMgKHJlY29tbWVuZGVkIHVzZSBIRVggY29sb3JzKSAqKioqL1xuLyoqKiogQXBwIHJvb3RzICoqKiovXG4vKioqKiBHZW5lcmFsICoqKiovXG4vKioqKiBOYXZiYXIgKioqKi9cbi8qKioqIFNpZGViYXIgKioqKi9cbi8qKioqIFByb2dyZXNzICoqKiovXG4vKioqKiBGb250cyAqKioqL1xuLyoqKiogU29jaWFsIGljb25zICoqKiovXG5ib2R5OjphZnRlciB7XG4gIGNvbnRlbnQ6ICd7XCJtYWluLWNvbG9yXCI6XCIjMjQyRDNBXCIsXCJkZWZhdWx0LWNvbG9yXCI6XCIjZmZmXCIsXCJkYXJrLWNvbG9yXCI6XCIjMDAwXCIsXCJwcmltYXJ5LWNvbG9yXCI6XCIjMDI0YTg4XCIsXCJzdWNjZXNzLWNvbG9yXCI6XCIjMmQ5MjJkXCIsXCJ3YXJuaW5nLWNvbG9yXCI6XCIjZjc5YTE3XCIsXCJkYW5nZXItY29sb3JcIjpcIiNiZjE3MjVcIixcImluZm8tY29sb3JcIjpcIiMyNDhkYWRcIixcInNpZGViYXItYmctY29sb3JcIjpcIiMzNDQxNTRcIixcImdyYXlcIjpcIiM1NTVcIixcImdyYXktbGlnaHRcIjpcIiNjY2NcIn0nO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaWNvbi1mb250LWF3ZXNvbWUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmljb24tZm9udC1hd2Vzb21lIC5jYXJkIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMjQ4ZGFkO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5pY29uLWZvbnQtYXdlc29tZSAuY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMjRhODg7XG59XG4uaWNvbi1mb250LWF3ZXNvbWUgLmNhcmQgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG59XG4uaWNvbi1mb250LWF3ZXNvbWUgLmNhcmQgLmNhcmQtYm9keSBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pY29uLWZvbnQtYXdlc29tZSAuY2FyZCAuY2FyZC1ib2R5IHAgaSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uaWNvbi1zb2NpY29uIC5jYXJkIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBiYWNrZ3JvdW5kOiAjMjQ4ZGFkO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5pY29uLXNvY2ljb24gLmNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDI0YTg4O1xufVxuLmljb24tc29jaWNvbiAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5pY29uLXNvY2ljb24gLmNhcmQgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG4uaWNvbi1mb250LWF3ZXNvbWV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGluZm8tY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRkZWZhdWx0LWNvbG9yO1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1ib2R5e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLmljb24tc29jaWNvbntcclxuICAgIC5jYXJke1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkaW5mby1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJGRlZmF1bHQtY29sb3I7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9ICAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 68322:
/*!*************************************************!*\
  !*** ./src/app/pages/ui/icons/icons.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsService": () => (/* binding */ IconsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class IconsService {
  constructor() {
    this.icons = {
      fontAwesome: ['fa-glass', 'fa-music', 'fa-search', 'fa-envelope-o', 'fa-heart', 'fa-star', 'fa-star-o', 'fa-user', 'fa-film', 'fa-th-large', 'fa-th', 'fa-th-list', 'fa-check', 'fa-remove', 'fa-close', 'fa-times', 'fa-search-plus', 'fa-search-minus', 'fa-power-off', 'fa-signal', 'fa-gear', 'fa-cog', 'fa-trash-o', 'fa-home', 'fa-file-o', 'fa-clock-o', 'fa-road', 'fa-download', 'fa-arrow-circle-o-down', 'fa-arrow-circle-o-up', 'fa-inbox', 'fa-play-circle-o', 'fa-rotate-right', 'fa-repeat', 'fa-refresh', 'fa-list-alt', 'fa-lock', 'fa-flag', 'fa-headphones', 'fa-volume-off', 'fa-volume-down', 'fa-volume-up', 'fa-qrcode', 'fa-barcode', 'fa-tag', 'fa-tags', 'fa-book', 'fa-bookmark', 'fa-print', 'fa-camera', 'fa-font', 'fa-bold', 'fa-italic', 'fa-text-height', 'fa-text-width', 'fa-align-left', 'fa-align-center', 'fa-align-right', 'fa-align-justify', 'fa-list', 'fa-dedent', 'fa-outdent', 'fa-indent', 'fa-video-camera', 'fa-photo', 'fa-image', 'fa-picture-o', 'fa-pencil', 'fa-map-marker', 'fa-adjust', 'fa-tint', 'fa-edit', 'fa-pencil-square-o', 'fa-share-square-o', 'fa-check-square-o', 'fa-arrows', 'fa-step-backward', 'fa-fast-backward', 'fa-backward', 'fa-play', 'fa-pause', 'fa-stop', 'fa-forward', 'fa-fast-forward', 'fa-step-forward', 'fa-eject', 'fa-chevron-left', 'fa-chevron-right', 'fa-plus-circle', 'fa-minus-circle', 'fa-times-circle', 'fa-check-circle', 'fa-question-circle', 'fa-info-circle', 'fa-crosshairs', 'fa-times-circle-o', 'fa-check-circle-o', 'fa-ban', 'fa-arrow-left', 'fa-arrow-right', 'fa-arrow-up', 'fa-arrow-down', 'fa-mail-forward', 'fa-share', 'fa-expand', 'fa-compress', 'fa-plus', 'fa-minus', 'fa-asterisk', 'fa-exclamation-circle', 'fa-gift', 'fa-leaf', 'fa-fire', 'fa-eye', 'fa-eye-slash', 'fa-warning', 'fa-exclamation-triangle', 'fa-plane', 'fa-calendar', 'fa-random', 'fa-comment', 'fa-magnet', 'fa-chevron-up', 'fa-chevron-down', 'fa-retweet', 'fa-shopping-cart', 'fa-folder', 'fa-folder-open', 'fa-arrows-v', 'fa-arrows-h', 'fa-bar-chart-o', 'fa-bar-chart', 'fa-twitter-square', 'fa-facebook-square', 'fa-camera-retro', 'fa-key', 'fa-gears', 'fa-cogs', 'fa-comments', 'fa-thumbs-o-up', 'fa-thumbs-o-down', 'fa-star-half', 'fa-heart-o', 'fa-sign-out', 'fa-linkedin-square', 'fa-thumb-tack', 'fa-external-link', 'fa-sign-in', 'fa-trophy', 'fa-github-square', 'fa-upload', 'fa-lemon-o', 'fa-phone', 'fa-square-o', 'fa-bookmark-o', 'fa-phone-square', 'fa-twitter', 'fa-facebook-f', 'fa-facebook', 'fa-github', 'fa-unlock', 'fa-credit-card', 'fa-rss', 'fa-hdd-o', 'fa-bullhorn', 'fa-bell', 'fa-certificate', 'fa-hand-o-right', 'fa-hand-o-left', 'fa-hand-o-up', 'fa-hand-o-down', 'fa-arrow-circle-left', 'fa-arrow-circle-right', 'fa-arrow-circle-up', 'fa-arrow-circle-down', 'fa-globe', 'fa-wrench', 'fa-tasks', 'fa-filter', 'fa-briefcase', 'fa-arrows-alt', 'fa-group', 'fa-users', 'fa-chain', 'fa-link', 'fa-cloud', 'fa-flask', 'fa-cut', 'fa-scissors', 'fa-copy', 'fa-files-o', 'fa-paperclip', 'fa-save', 'fa-floppy-o', 'fa-square', 'fa-navicon', 'fa-reorder', 'fa-bars', 'fa-list-ul', 'fa-list-ol', 'fa-strikethrough', 'fa-underline', 'fa-table', 'fa-magic', 'fa-truck', 'fa-pinterest', 'fa-pinterest-square', 'fa-google-plus-square', 'fa-google-plus', 'fa-money', 'fa-caret-down', 'fa-caret-up', 'fa-caret-left', 'fa-caret-right', 'fa-columns', 'fa-unsorted', 'fa-sort', 'fa-sort-down', 'fa-sort-desc', 'fa-sort-up', 'fa-sort-asc', 'fa-envelope', 'fa-linkedin', 'fa-rotate-left', 'fa-undo', 'fa-legal', 'fa-gavel', 'fa-dashboard', 'fa-tachometer', 'fa-comment-o', 'fa-comments-o', 'fa-flash', 'fa-bolt', 'fa-sitemap', 'fa-umbrella', 'fa-paste', 'fa-clipboard', 'fa-lightbulb-o', 'fa-exchange', 'fa-cloud-download', 'fa-cloud-upload', 'fa-user-md', 'fa-stethoscope', 'fa-suitcase', 'fa-bell-o', 'fa-coffee', 'fa-cutlery', 'fa-file-text-o', 'fa-building-o', 'fa-hospital-o', 'fa-ambulance', 'fa-medkit', 'fa-fighter-jet', 'fa-beer', 'fa-h-square', 'fa-plus-square', 'fa-angle-double-left', 'fa-angle-double-right', 'fa-angle-double-up', 'fa-angle-double-down', 'fa-angle-left', 'fa-angle-right', 'fa-angle-up', 'fa-angle-down', 'fa-desktop', 'fa-laptop', 'fa-tablet', 'fa-mobile-phone', 'fa-mobile', 'fa-circle-o', 'fa-quote-left', 'fa-quote-right', 'fa-spinner', 'fa-circle', 'fa-mail-reply', 'fa-reply', 'fa-github-alt', 'fa-folder-o', 'fa-folder-open-o', 'fa-smile-o', 'fa-frown-o', 'fa-meh-o', 'fa-gamepad', 'fa-keyboard-o', 'fa-flag-o', 'fa-flag-checkered', 'fa-terminal', 'fa-code', 'fa-mail-reply-all', 'fa-reply-all', 'fa-star-half-empty', 'fa-star-half-full', 'fa-star-half-o', 'fa-location-arrow', 'fa-crop', 'fa-code-fork', 'fa-unlink', 'fa-chain-broken', 'fa-question', 'fa-info', 'fa-exclamation', 'fa-superscript', 'fa-subscript', 'fa-eraser', 'fa-puzzle-piece', 'fa-microphone', 'fa-microphone-slash', 'fa-shield', 'fa-calendar-o', 'fa-fire-extinguisher', 'fa-rocket', 'fa-maxcdn', 'fa-chevron-circle-left', 'fa-chevron-circle-right', 'fa-chevron-circle-up', 'fa-chevron-circle-down', 'fa-html5', 'fa-css3', 'fa-anchor', 'fa-unlock-alt', 'fa-bullseye', 'fa-ellipsis-h', 'fa-ellipsis-v', 'fa-rss-square', 'fa-play-circle', 'fa-ticket', 'fa-minus-square', 'fa-minus-square-o', 'fa-level-up', 'fa-level-down', 'fa-check-square', 'fa-pencil-square', 'fa-external-link-square', 'fa-share-square', 'fa-compass', 'fa-toggle-down', 'fa-caret-square-o-down', 'fa-toggle-up', 'fa-caret-square-o-up', 'fa-toggle-right', 'fa-caret-square-o-right', 'fa-euro', 'fa-eur', 'fa-gbp', 'fa-dollar', 'fa-usd', 'fa-rupee', 'fa-inr', 'fa-cny', 'fa-rmb', 'fa-yen', 'fa-jpy', 'fa-ruble', 'fa-rouble', 'fa-rub', 'fa-won', 'fa-krw', 'fa-bitcoin', 'fa-btc', 'fa-file', 'fa-file-text', 'fa-sort-alpha-asc', 'fa-sort-alpha-desc', 'fa-sort-amount-asc', 'fa-sort-amount-desc', 'fa-sort-numeric-asc', 'fa-sort-numeric-desc', 'fa-thumbs-up', 'fa-thumbs-down', 'fa-youtube-square', 'fa-youtube', 'fa-xing', 'fa-xing-square', 'fa-youtube-play', 'fa-dropbox', 'fa-stack-overflow', 'fa-instagram', 'fa-flickr', 'fa-adn', 'fa-bitbucket', 'fa-bitbucket-square', 'fa-tumblr', 'fa-tumblr-square', 'fa-long-arrow-down', 'fa-long-arrow-up', 'fa-long-arrow-left', 'fa-long-arrow-right', 'fa-apple', 'fa-windows', 'fa-android', 'fa-linux', 'fa-dribbble', 'fa-skype', 'fa-foursquare', 'fa-trello', 'fa-female', 'fa-male', 'fa-gittip', 'fa-gratipay', 'fa-sun-o', 'fa-moon-o', 'fa-archive', 'fa-bug', 'fa-vk', 'fa-weibo', 'fa-renren', 'fa-pagelines', 'fa-stack-exchange', 'fa-arrow-circle-o-right', 'fa-arrow-circle-o-left', 'fa-toggle-left', 'fa-caret-square-o-left', 'fa-dot-circle-o', 'fa-wheelchair', 'fa-vimeo-square', 'fa-turkish-lira', 'fa-try', 'fa-plus-square-o', 'fa-space-shuttle', 'fa-slack', 'fa-envelope-square', 'fa-wordpress', 'fa-openid', 'fa-institution', 'fa-bank', 'fa-university', 'fa-mortar-board', 'fa-graduation-cap', 'fa-yahoo', 'fa-google', 'fa-reddit', 'fa-reddit-square', 'fa-stumbleupon-circle', 'fa-stumbleupon', 'fa-delicious', 'fa-digg', 'fa-pied-piper', 'fa-pied-piper-alt', 'fa-drupal', 'fa-joomla', 'fa-language', 'fa-fax', 'fa-building', 'fa-child', 'fa-paw', 'fa-spoon', 'fa-cube', 'fa-cubes', 'fa-behance', 'fa-behance-square', 'fa-steam', 'fa-steam-square', 'fa-recycle', 'fa-automobile', 'fa-car', 'fa-cab', 'fa-taxi', 'fa-tree', 'fa-spotify', 'fa-deviantart', 'fa-soundcloud', 'fa-database', 'fa-file-pdf-o', 'fa-file-word-o', 'fa-file-excel-o', 'fa-file-powerpoint-o', 'fa-file-photo-o', 'fa-file-picture-o', 'fa-file-image-o', 'fa-file-zip-o', 'fa-file-archive-o', 'fa-file-sound-o', 'fa-file-audio-o', 'fa-file-movie-o', 'fa-file-video-o', 'fa-file-code-o', 'fa-vine', 'fa-codepen', 'fa-jsfiddle', 'fa-life-bouy', 'fa-life-buoy', 'fa-life-saver', 'fa-support', 'fa-life-ring', 'fa-circle-o-notch', 'fa-ra', 'fa-rebel', 'fa-ge', 'fa-empire', 'fa-git-square', 'fa-git', 'fa-hacker-news', 'fa-tencent-weibo', 'fa-qq', 'fa-wechat', 'fa-weixin', 'fa-send', 'fa-paper-plane', 'fa-send-o', 'fa-paper-plane-o', 'fa-history', 'fa-genderless', 'fa-circle-thin', 'fa-header', 'fa-paragraph', 'fa-sliders', 'fa-share-alt', 'fa-share-alt-square', 'fa-bomb', 'fa-soccer-ball-o', 'fa-futbol-o', 'fa-tty', 'fa-binoculars', 'fa-plug', 'fa-slideshare', 'fa-twitch', 'fa-yelp', 'fa-newspaper-o', 'fa-wifi', 'fa-calculator', 'fa-paypal', 'fa-google-wallet', 'fa-cc-visa', 'fa-cc-mastercard', 'fa-cc-discover', 'fa-cc-amex', 'fa-cc-paypal', 'fa-cc-stripe', 'fa-bell-slash', 'fa-bell-slash-o', 'fa-trash', 'fa-copyright', 'fa-at', 'fa-eyedropper', 'fa-paint-brush', 'fa-birthday-cake', 'fa-area-chart', 'fa-pie-chart', 'fa-line-chart', 'fa-lastfm', 'fa-lastfm-square', 'fa-toggle-off', 'fa-toggle-on', 'fa-bicycle', 'fa-bus', 'fa-ioxhost', 'fa-angellist', 'fa-cc', 'fa-shekel', 'fa-sheqel', 'fa-ils', 'fa-meanpath', 'fa-buysellads', 'fa-connectdevelop', 'fa-dashcube', 'fa-forumbee', 'fa-leanpub', 'fa-sellsy', 'fa-shirtsinbulk', 'fa-simplybuilt', 'fa-skyatlas', 'fa-cart-plus', 'fa-cart-arrow-down', 'fa-diamond', 'fa-ship', 'fa-user-secret', 'fa-motorcycle', 'fa-street-view', 'fa-heartbeat', 'fa-venus', 'fa-mars', 'fa-mercury', 'fa-transgender', 'fa-transgender-alt', 'fa-venus-double', 'fa-mars-double', 'fa-venus-mars', 'fa-mars-stroke', 'fa-mars-stroke-v', 'fa-mars-stroke-h', 'fa-neuter', 'fa-facebook-official', 'fa-pinterest-p', 'fa-whatsapp', 'fa-server', 'fa-user-plus', 'fa-user-times', 'fa-hotel', 'fa-bed', 'fa-viacoin', 'fa-train', 'fa-subway', 'fa-medium'],
      socicons: [{
        "id": "twitter",
        "name": "Twitter",
        "character": "a",
        "color": "#4da7de"
      }, {
        "id": "facebook",
        "name": "Facebook",
        "character": "b",
        "color": "#3e5b98"
      }, {
        "id": "google",
        "name": "Google+",
        "character": "c",
        "color": "#d93e2d"
      }, {
        "id": "pinterest",
        "name": "Pinterest",
        "character": "d",
        "color": "#c92619"
      }, {
        "id": "foursquare",
        "name": "foursquare",
        "character": "e",
        "color": "#F94877"
      }, {
        "id": "yahoo",
        "name": "Yahoo!",
        "character": "f",
        "color": "#6E2A85"
      }, {
        "id": "skype",
        "name": "skype",
        "character": "g",
        "color": "#28abe3"
      }, {
        "id": "yelp",
        "name": "yelp",
        "character": "h",
        "color": "#c83218"
      }, {
        "id": "feedburner",
        "name": "FeedBurner",
        "character": "i",
        "color": "#FFCC00"
      }, {
        "id": "linkedin",
        "name": "Linkedin",
        "character": "j",
        "color": "#3371b7"
      }, {
        "id": "viadeo",
        "name": "Viadeo",
        "character": "k",
        "color": "#e4a000"
      }, {
        "id": "xing",
        "name": "Xing",
        "character": "l",
        "color": "#005a60"
      }, {
        "id": "myspace",
        "name": "Myspace",
        "character": "m",
        "color": "#323232"
      }, {
        "id": "soundcloud",
        "name": "soundcloud",
        "character": "n",
        "color": "#fe3801"
      }, {
        "id": "spotify",
        "name": "Spotify",
        "character": "o",
        "color": "#7bb342"
      }, {
        "id": "grooveshark",
        "name": "grooveshark",
        "character": "p",
        "color": "#000000"
      }, {
        "id": "lastfm",
        "name": "last.fm",
        "character": "q",
        "color": "#d41316"
      }, {
        "id": "youtube",
        "name": "YouTube",
        "character": "r",
        "color": "#e02a20"
      }, {
        "id": "vimeo",
        "name": "vimeo",
        "character": "s",
        "color": "#51b5e7"
      }, {
        "id": "dailymotion",
        "name": "Dailymotion",
        "character": "t",
        "color": "#004e72"
      }, {
        "id": "vine",
        "name": "Vine",
        "character": "u",
        "color": "#00b389"
      }, {
        "id": "flickr",
        "name": "flickr",
        "character": "v",
        "color": "#1e1e1b"
      }, {
        "id": "500px",
        "name": "500px",
        "character": "w",
        "color": "#58a9de"
      }, {
        "id": "instagram",
        "name": "Instagram",
        "character": "x",
        "color": "#9c7c6e"
      }, {
        "id": "wordpress",
        "name": "WordPress",
        "character": "y",
        "color": "#464646"
      }, {
        "id": "tumblr",
        "name": "tumblr",
        "character": "z",
        "color": "#45556c"
      }, {
        "id": "blogger",
        "name": "Blogger",
        "character": "A",
        "color": "#ec661c"
      }, {
        "id": "technorati",
        "name": "Technorati",
        "character": "B",
        "color": "#5cb030"
      }, {
        "id": "reddit",
        "name": "reddit",
        "character": "C",
        "color": "#e74a1e"
      }, {
        "id": "dribbble",
        "name": "dribbble",
        "character": "D",
        "color": "#e84d88"
      }, {
        "id": "stumbleupon",
        "name": "StumbleUpon",
        "character": "E",
        "color": "#e64011"
      }, {
        "id": "digg",
        "name": "Digg",
        "character": "F",
        "color": "#1d1d1b"
      }, {
        "id": "envato",
        "name": "Envato",
        "character": "G",
        "color": "#597c3a"
      }, {
        "id": "behance",
        "name": "Behance",
        "character": "H",
        "color": "#000000"
      }, {
        "id": "delicious",
        "name": "Delicious",
        "character": "I",
        "color": "#020202"
      }, {
        "id": "deviantart",
        "name": "deviantART",
        "character": "J",
        "color": "#c5d200"
      }, {
        "id": "forrst",
        "name": "Forrst",
        "character": "K",
        "color": "#5B9A68"
      }, {
        "id": "play",
        "name": "Play Store",
        "character": "L",
        "color": "#000000"
      }, {
        "id": "zerply",
        "name": "Zerply",
        "character": "M",
        "color": "#9DBC7A"
      }, {
        "id": "wikipedia",
        "name": "Wikipedia",
        "character": "N",
        "color": "#000000"
      }, {
        "id": "apple",
        "name": "Apple",
        "character": "O",
        "color": "#B9BFC1"
      }, {
        "id": "flattr",
        "name": "Flattr",
        "character": "P",
        "color": "#F67C1A"
      }, {
        "id": "github",
        "name": "GitHub",
        "character": "Q",
        "color": "#221e1b"
      }, {
        "id": "chimein",
        "name": "Chime.in",
        "character": "R",
        "color": "#888688"
      }, {
        "id": "friendfeed",
        "name": "FriendFeed",
        "character": "S",
        "color": "#2F72C4"
      }, {
        "id": "newsvine",
        "name": "NewsVine",
        "character": "T",
        "color": "#075B2F"
      }, {
        "id": "identica",
        "name": "Identica",
        "character": "U",
        "color": "#000000"
      }, {
        "id": "bebo",
        "name": "bebo",
        "character": "V",
        "color": "#EF1011"
      }, {
        "id": "zynga",
        "name": "zynga",
        "character": "W",
        "color": "#DC0606"
      }, {
        "id": "steam",
        "name": "steam",
        "character": "X",
        "color": "#8F8D8A"
      }, {
        "id": "xbox",
        "name": "XBOX",
        "character": "Y",
        "color": "#92C83E"
      }, {
        "id": "windows",
        "name": "Windows",
        "character": "Z",
        "color": "#00BDF6"
      }, {
        "id": "outlook",
        "name": "Outlook",
        "character": "1",
        "color": "#0072C6"
      }, {
        "id": "coderwall",
        "name": "coderwall",
        "character": "2",
        "color": "#3E8DCC"
      }, {
        "id": "tripadvisor",
        "name": "tripadvisor",
        "character": "3",
        "color": "#000000"
      }, {
        "id": "appnet",
        "name": "appnet",
        "character": "4",
        "color": "#494949"
      }, {
        "id": "goodreads",
        "name": "goodreads",
        "character": "5",
        "color": "#463020"
      }, {
        "id": "tripit",
        "name": "Tripit",
        "character": "6",
        "color": "#1982C3"
      }, {
        "id": "lanyrd",
        "name": "Lanyrd",
        "character": "7",
        "color": "#3c80c9"
      }, {
        "id": "slideshare",
        "name": "SlideShare",
        "character": "8",
        "color": "#4ba3a6"
      }, {
        "id": "buffer",
        "name": "Buffer",
        "character": "9",
        "color": "#000000"
      }, {
        "id": "rss",
        "name": "RSS",
        "character": ",",
        "color": "#f26109"
      }, {
        "id": "vkontakte",
        "name": "VKontakte",
        "character": ";",
        "color": "#5a7fa6"
      }, {
        "id": "disqus",
        "name": "DISQUS",
        "character": ":",
        "color": "#2e9fff"
      }, {
        "id": "houzz",
        "name": "houzz",
        "character": "+",
        "color": "#7CC04B"
      }, {
        "id": "mail",
        "name": "Mail",
        "character": "@",
        "color": "#000000"
      }, {
        "id": "patreon",
        "name": "Patreon",
        "character": "=",
        "color": "#E44727"
      }, {
        "id": "paypal",
        "name": "Paypal",
        "character": "-",
        "color": "#009cde"
      }, {
        "id": "playstation",
        "name": "PlayStation",
        "character": "^",
        "color": "#000000"
      }, {
        "id": "smugmug",
        "name": "SmugMug",
        "character": "¨",
        "color": "#ACFD32"
      }, {
        "id": "swarm",
        "name": "Swarm",
        "character": "$",
        "color": "#FC9D3C"
      }, {
        "id": "triplej",
        "name": "triplej",
        "character": "*",
        "color": "#E53531"
      }, {
        "id": "yammer",
        "name": "Yammer",
        "character": "&",
        "color": "#1175C4"
      }, {
        "id": "stackoverflow",
        "name": "stackoverflow",
        "character": "(",
        "color": "#FD9827"
      }, {
        "id": "drupal",
        "name": "Drupal",
        "character": "#",
        "color": "#00598e"
      }, {
        "id": "odnoklassniki",
        "name": "Odnoklassniki",
        "character": ".",
        "color": "#f48420"
      }, {
        "id": "android",
        "name": "Android",
        "character": "_",
        "color": "#8ec047"
      }, {
        "id": "meetup",
        "name": "Meeptup",
        "character": "]",
        "color": "#e2373c"
      }, {
        "id": "persona",
        "name": "Mozilla Persona",
        "character": ")",
        "color": "#e6753d"
      }]
    };
  }
  getAll() {
    return this.icons;
  }
  static #_ = this.ɵfac = function IconsService_Factory(t) {
    return new (t || IconsService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: IconsService,
    factory: IconsService.ɵfac
  });
}


/***/ }),

/***/ 36518:
/*!*************************************************************!*\
  !*** ./src/app/pages/ui/list-group/list-group.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListGroupComponent": () => (/* binding */ ListGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/directives/widget/widget.directive */ 3090);


class ListGroupComponent {
  static #_ = this.ɵfac = function ListGroupComponent_Factory(t) {
    return new (t || ListGroupComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ListGroupComponent,
    selectors: [["az-list-group"]],
    decls: 213,
    vars: 0,
    consts: [[1, "row"], [1, "col-xl-6", "col-lg-6", "col-12", "bottom-30"], ["widget", "", 1, "card"], [1, "card-header"], [1, "widget-controls"], ["data-widgster", "expand", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-down"], ["data-widgster", "collapse", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-up"], ["data-widgster", "fullscreen", "href", "#", 1, "transition"], [1, "fa", "fa-expand"], ["data-widgster", "restore", "href", "#", 1, "transition"], [1, "fa", "fa-compress"], ["data-widgster", "close", "href", "#", 1, "transition"], [1, "fa", "fa-times"], [1, "card-body", "widget-body"], [1, "list-group"], [1, "list-group-item"], [1, "list-group-item", "d-flex", "justify-content-between"], [1, "badge", "badge-main", "badge-pill"], ["href", "javascript:void(0);", 1, "list-group-item", "disabled"], ["href", "javascript:void(0);", 1, "list-group-item"], ["href", "javascript:void(0);", 1, "list-group-item", "active"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action"], [1, "row", "mbm-20"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-primary"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-success"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-info"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-warning"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "list-group-item-danger"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "active"], [1, "list-group-item-heading"], [1, "list-group-item-text"]],
    template: function ListGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "DEFAULT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15)(18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "list-group-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " class inside a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "list-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ul", 16)(27, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Cras justo odio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Dapibus ac facilisis in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Morbi leo risus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Porta ac consectetur ac");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Vestibulum at eros");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 1)(38, "div", 2)(39, "div", 3)(40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "WITH TAGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 4)(43, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 15)(54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Add badges to any list group item to show unread counts, activity, etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ul", 16)(57, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Cras justo odio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Dapibus ac facilisis in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Morbi leo risus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "31");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Porta ac consectetur ac ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "17");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Vestibulum at eros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "44");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 0)(78, "div", 1)(79, "div", 2)(80, "div", 3)(81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "DISABLED ITEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 4)(84, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 15)(95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, " to a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "list-group-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, " to show it as disabled.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 16)(104, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, " Cras justo odio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Dapibus ac facilisis in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Morbi leo risus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Porta ac consectetur ac");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Vestibulum at eros");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 1)(115, "div", 2)(116, "div", 3)(117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "ACTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 4)(120, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 15)(131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Use anchors or buttons to create actionable list group items with hover, disabled, and active states by adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "list-group-item-action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, ". This separate class contains a few overrides to add compatibility for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "<a>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "s and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "<button>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "s, as well as the hover and focus states.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 16)(143, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, " Cras justo odio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Dapibus ac facilisis in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Morbi leo risus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 24)(150, "div", 1)(151, "div", 2)(152, "div", 3)(153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "CONTEXTUAL CLASSES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 4)(156, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 15)(167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Use contextual classes to style list items, default or linked.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 16)(170, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Cras justo odio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Dapibus ac facilisis in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Cras sit amet nibh libero");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Porta ac consectetur ac");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Vestibulum at eros");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 1)(181, "div", 2)(182, "div", 3)(183, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "CUSTOM CONTENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 4)(186, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 15)(197, "div", 16)(198, "a", 30)(199, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "List group item heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Donec id elit non mi porta gravida at eget metus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "a", 23)(204, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "List group item heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Donec id elit non mi porta gravida at eget metus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "a", 23)(209, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "List group item heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Donec id elit non mi porta gravida at eget metus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
    },
    dependencies: [_theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__.Widget],
    encapsulation: 2
  });
}


/***/ }),

/***/ 56931:
/*!*******************************************************************!*\
  !*** ./src/app/pages/ui/media-objects/media-objects.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaObjectsComponent": () => (/* binding */ MediaObjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/directives/widget/widget.directive */ 3090);


class MediaObjectsComponent {
  static #_ = this.ɵfac = function MediaObjectsComponent_Factory(t) {
    return new (t || MediaObjectsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MediaObjectsComponent,
    selectors: [["az-media-objects"]],
    decls: 175,
    vars: 0,
    consts: [[1, "row"], [1, "col-xl-4", "col-lg-4", "col-12", "bottom-30"], ["widget", "", 1, "card"], [1, "card-header"], [1, "widget-controls"], ["data-widgster", "expand", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-down"], ["data-widgster", "collapse", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-up"], ["data-widgster", "fullscreen", "href", "#", 1, "transition"], [1, "fa", "fa-expand"], ["data-widgster", "restore", "href", "#", 1, "transition"], [1, "fa", "fa-compress"], ["data-widgster", "close", "href", "#", 1, "transition"], [1, "fa", "fa-times"], [1, "card-body", "widget-body"], [1, "media"], ["src", "assets/img/profile/tereza.jpg", "width", "70", "alt", "Generic placeholder image", 1, "d-flex", "mr-3"], [1, "media-body"], [1, "mt-0"], ["src", "assets/img/profile/bruno.jpg", "width", "70", "alt", "Generic placeholder image", 1, "d-flex", "align-self-center", "mr-3"], ["src", "assets/img/profile/michael.jpg", "width", "70", "alt", "Generic placeholder image", 1, "d-flex", "align-self-end", "mr-3"], [1, "media-heading"], ["src", "assets/img/profile/tereza.jpg", "width", "70", "alt", "Generic placeholder image", 1, "d-flex", "ml-3"], [1, "list-unstyled"], ["src", "assets/img/profile/bruno.jpg", "width", "70", "alt", "Generic placeholder image", 1, "d-flex", "mr-3"], ["src", "assets/img/profile/ashley.jpg", "width", "70", "alt", "Generic placeholder image", 1, "d-flex", "mr-3"], [1, "media", "mt-3"], ["src", "assets/img/profile/adam.jpg", "width", "70", "alt", "Generic placeholder image", 1, "d-flex", "mr-3"]],
    template: function MediaObjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "DEFAULT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15)(18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 18)(21, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Media heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Cras sit amet nibh libero, in gravida nulla.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Nulla vel metus scelerisque ante sollicitudin commodo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 1)(30, "div", 2)(31, "div", 3)(32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "MIDDLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 4)(35, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 15)(46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 18)(49, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Media heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Cras sit amet nibh libero, in gravida nulla.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Nulla vel metus scelerisque ante sollicitudin commodo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 1)(58, "div", 2)(59, "div", 3)(60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "BOTTOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 4)(63, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 15)(74, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 18)(77, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Media heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " Cras sit amet nibh libero, in gravida nulla.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " Nulla vel metus scelerisque ante sollicitudin commodo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 0)(86, "div", 1)(87, "div", 2)(88, "div", 3)(89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "RIGHT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 4)(92, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 15)(103, "div", 16)(104, "div", 18)(105, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Media heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, " Cras sit amet nibh libero, in gravida nulla.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " Nulla vel metus scelerisque ante sollicitudin commodo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, " Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 1)(115, "div", 2)(116, "div", 3)(117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "LIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 4)(120, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 15)(131, "ul", 24)(132, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 18)(135, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Media heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "A short sentence to save some space in the code sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 18)(142, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Media heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "A short sentence to save some space in the code sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 1)(147, "div", 2)(148, "div", 3)(149, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "NESTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 4)(152, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 15)(163, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 18)(166, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Media heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, " Cras sit amet nibh libero, in gravida nulla. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 18)(172, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Nested media heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, " Cras sit amet nibh libero, in gravida nulla. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      }
    },
    dependencies: [_theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__.Widget],
    encapsulation: 2
  });
}


/***/ }),

/***/ 38016:
/*!***********************************************************************!*\
  !*** ./src/app/pages/ui/tabs-accordions/tabs-accordions.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsAccordionsComponent": () => (/* binding */ TabsAccordionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/directives/widget/widget.directive */ 3090);


class TabsAccordionsComponent {
  static #_ = this.ɵfac = function TabsAccordionsComponent_Factory(t) {
    return new (t || TabsAccordionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TabsAccordionsComponent,
    selectors: [["az-tabs-accordions"]],
    decls: 313,
    vars: 0,
    consts: [[1, "row", "bottom-30"], [1, "col"], ["widget", "", 1, "card"], [1, "card-header"], [1, "widget-controls"], ["data-widgster", "expand", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-down"], ["data-widgster", "collapse", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-up"], ["data-widgster", "fullscreen", "href", "#", 1, "transition"], [1, "fa", "fa-expand"], ["data-widgster", "restore", "href", "#", 1, "transition"], [1, "fa", "fa-compress"], ["data-widgster", "close", "href", "#", 1, "transition"], [1, "fa", "fa-times"], [1, "card-body", "widget-body"], [1, "row", "mbm-20"], [1, "col-lg-6", "col-12", "bottom-30"], [1, "clearfix"], [1, "nav", "nav-tabs", "top", "pull-left", "w-100p"], [1, "nav-item"], ["data-toggle", "tab", "href", "#ta", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#tb", 1, "nav-link"], [1, "nav-item", "dropdown"], ["data-toggle", "dropdown", "href", "#", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "#tdropdown1", "data-toggle", "tab", 1, "dropdown-item"], ["href", "#tdropdown2", "data-toggle", "tab", 1, "dropdown-item"], [1, "tab-content", "top"], ["id", "ta", 1, "tab-pane", "active"], ["id", "tb", 1, "tab-pane"], ["id", "tdropdown1", 1, "tab-pane"], ["id", "tdropdown2", 1, "tab-pane"], [1, "tab-content", "bottom"], ["id", "ba", 1, "tab-pane", "active"], ["id", "bb", 1, "tab-pane"], ["id", "bdropdown1", 1, "tab-pane"], ["id", "bdropdown2", 1, "tab-pane"], [1, "nav", "nav-tabs", "bottom", "pull-left", "w-100p"], ["data-toggle", "tab", "href", "#ba", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#bb", 1, "nav-link"], [1, "nav-item", "dropup"], ["href", "#bdropdown1", "data-toggle", "tab", 1, "dropdown-item"], ["href", "#bdropdown2", "data-toggle", "tab", 1, "dropdown-item"], [1, "col-lg-6", "col-12", "vertical-tabs", "bottom-30"], [1, "row", "pl-3", "pr-3"], [1, "nav", "flex-column", "left", "col-3"], ["href", "#la", "data-toggle", "tab", 1, "nav-link", "active"], ["href", "#lb", "data-toggle", "tab", 1, "nav-link"], ["href", "javascript:void(0);", 1, "nav-link", "disabled"], [1, "tab-content", "col-9"], ["id", "la", 1, "tab-pane", "active"], ["id", "lb", 1, "tab-pane"], ["id", "ra", 1, "tab-pane", "active"], ["id", "rb", 1, "tab-pane"], [1, "nav", "flex-column", "right", "col-3"], ["href", "#ra", "data-toggle", "tab", 1, "nav-link", "active"], ["href", "#rb", "data-toggle", "tab", 1, "nav-link"], [1, "row"], [1, "col", "bottom-30"], ["role", "tablist", 1, "nav", "nav-tabs", "top", "tabs-primary"], ["href", "#p1", "role", "tab", "data-toggle", "tab", 1, "nav-link", "active"], ["href", "#p2", "role", "tab", "data-toggle", "tab", 1, "nav-link"], ["href", "#p3", "role", "tab", "data-toggle", "tab", 1, "nav-link"], [1, "tab-content", "tab-content-primary"], ["id", "p1", 1, "tab-pane", "fade", "show", "active"], ["id", "p2", 1, "tab-pane", "fade"], ["id", "p3", 1, "tab-pane", "fade"], ["role", "tablist", 1, "nav", "nav-tabs", "top", "tabs-success"], ["href", "#s1", "role", "tab", "data-toggle", "tab", 1, "nav-link", "active"], ["href", "#s2", "role", "tab", "data-toggle", "tab", 1, "nav-link"], ["href", "#s3", "role", "tab", "data-toggle", "tab", 1, "nav-link"], [1, "tab-content", "tab-content-success"], ["id", "s1", 1, "tab-pane", "fade", "show", "active"], ["id", "s2", 1, "tab-pane", "fade"], ["id", "s3", 1, "tab-pane", "fade"], ["role", "tablist", 1, "nav", "nav-tabs", "top", "tabs-info"], ["href", "#i1", "role", "tab", "data-toggle", "tab", 1, "nav-link", "active"], ["href", "#i2", "role", "tab", "data-toggle", "tab", 1, "nav-link"], ["href", "#i3", "role", "tab", "data-toggle", "tab", 1, "nav-link"], [1, "tab-content", "tab-content-info"], ["id", "i1", 1, "tab-pane", "fade", "show", "active"], ["id", "i2", 1, "tab-pane", "fade"], ["id", "i3", 1, "tab-pane", "fade"], ["role", "tablist", 1, "nav", "nav-tabs", "top", "tabs-warning"], ["href", "#w1", "role", "tab", "data-toggle", "tab", 1, "nav-link", "active"], ["href", "#w2", "role", "tab", "data-toggle", "tab", 1, "nav-link"], ["href", "#w3", "role", "tab", "data-toggle", "tab", 1, "nav-link"], [1, "tab-content", "tab-content-warning"], ["id", "w1", 1, "tab-pane", "fade", "show", "active"], ["id", "w2", 1, "tab-pane", "fade"], ["id", "w3", 1, "tab-pane", "fade"], ["role", "tablist", 1, "nav", "nav-tabs", "top", "tabs-danger"], ["href", "#d1", "role", "tab", "data-toggle", "tab", 1, "nav-link", "active"], ["href", "#d2", "role", "tab", "data-toggle", "tab", 1, "nav-link"], ["href", "#d3", "role", "tab", "data-toggle", "tab", 1, "nav-link"], [1, "tab-content", "tab-content-danger"], ["id", "d1", 1, "tab-pane", "fade", "show", "active"], ["id", "d2", 1, "tab-pane", "fade"], ["id", "d3", 1, "tab-pane", "fade"], ["id", "accordion", "role", "tablist", "aria-multiselectable", "true"], [1, "card"], ["role", "tab", "id", "headingOne", 1, "card-header"], [1, "mb-0"], ["data-toggle", "collapse", "href", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne"], ["id", "collapseOne", "data-parent", "#accordion", "role", "tabpanel", "aria-labelledby", "headingOne", 1, "collapse", "show"], [1, "card-body"], [1, "card", "card-primary"], ["role", "tab", "id", "headingTwo", 1, "card-header"], ["data-toggle", "collapse", "href", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "collapsed"], ["id", "collapseTwo", "data-parent", "#accordion", "role", "tabpanel", "aria-labelledby", "headingTwo", 1, "collapse"], [1, "card", "card-success"], ["role", "tab", "id", "headingThree", 1, "card-header"], ["data-toggle", "collapse", "href", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "collapsed"], ["id", "collapseThree", "data-parent", "#accordion", "role", "tabpanel", "aria-labelledby", "headingThree", 1, "collapse"], [1, "card", "card-info"], ["role", "tab", "id", "headingFour", 1, "card-header"], ["data-toggle", "collapse", "href", "#collapseFour", "aria-expanded", "false", "aria-controls", "collapseFour", 1, "collapsed"], ["id", "collapseFour", "data-parent", "#accordion", "role", "tabpanel", "aria-labelledby", "headingFour", 1, "collapse"], [1, "card", "card-warning"], ["role", "tab", "id", "headingFive", 1, "card-header"], ["data-toggle", "collapse", "href", "#collapseFive", "aria-expanded", "false", "aria-controls", "collapseFive", 1, "collapsed"], ["id", "collapseFive", "data-parent", "#accordion", "role", "tabpanel", "aria-labelledby", "headingFive", 1, "collapse"], [1, "card", "card-danger"], ["role", "tab", "id", "headingSix", 1, "card-header"], ["data-toggle", "collapse", "href", "#collapseSix", "aria-expanded", "false", "aria-controls", "collapseSix", 1, "collapsed"], ["id", "collapseSix", "data-parent", "#accordion", "role", "tabpanel", "aria-labelledby", "headingSix", 1, "collapse"]],
    template: function TabsAccordionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "TOP / BOTTOM HORIZONTAL TABS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15)(18, "div", 16)(19, "div", 17)(20, "div", 18)(21, "ul", 19)(22, "li", 20)(23, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 20)(26, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 23)(29, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 25)(32, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 28)(37, "div", 29)(38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 30)(41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 31)(44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 32)(47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Aliquam pulvinar lacinia euismod. Sed ante nisi, volutpat a ex vel, dapibus lacinia lacus. Nam pellentesque, ligula nec aliquet fermentum, lectus justo luctus mi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 17)(50, "div", 33)(51, "div", 34)(52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 35)(55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 36)(58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 37)(61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Aliquam pulvinar lacinia euismod. Sed ante nisi, volutpat a ex vel, dapibus lacinia lacus. Nam pellentesque, ligula nec aliquet fermentum, lectus justo luctus mi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 18)(64, "ul", 38)(65, "li", 20)(66, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li", 20)(69, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "li", 41)(72, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Dropup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 25)(75, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 0)(80, "div", 1)(81, "div", 2)(82, "div", 3)(83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "LEFT / RIGHT VERTICAL TABS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 4)(86, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 15)(97, "div", 16)(98, "div", 44)(99, "div", 45)(100, "ul", 46)(101, "li", 20)(102, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li", 20)(105, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "li", 20)(108, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 50)(111, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Lorem ipsum dolor sit amet, charetra varius rci quis tortor imperdiet venenatis quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Pellentesque dapibus molestie eleifend. Nam rhoncus justo sapien, a euismod turpis maximus a. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Thirdamuno, ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum auctor accumsan. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae. Pellentesque dapibus molestie eleifend. Nam rhoncus justo sapien, a euismod turpis maximus a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 44)(116, "div", 45)(117, "div", 50)(118, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Lorem ipsum dolor sit amet, charetra varius rci quis tortor imperdiet venenatis quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Pellentesque dapibus molestie eleifend. Nam rhoncus justo sapien, a euismod turpis maximus a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Thirdamuno, ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum auctor accumsan. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae. Pellentesque dapibus molestie eleifend. Nam rhoncus justo sapien, a euismod turpis maximus a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "ul", 55)(123, "li", 20)(124, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "li", 20)(127, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "li", 20)(130, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 58)(133, "div", 59)(134, "div", 2)(135, "div", 3)(136, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "TABS COLORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 4)(139, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 15)(150, "div", 0)(151, "div", 1)(152, "ul", 60)(153, "li", 20)(154, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "li", 20)(157, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "li", 20)(160, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 64)(163, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Curabitur dignissim molestie erat a eleifend.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Nunc feugiat dolor id quam accumsan, eu hendrerit massa dignissim.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 0)(170, "div", 1)(171, "ul", 68)(172, "li", 20)(173, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "li", 20)(176, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "li", 20)(179, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 72)(182, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Curabitur dignissim molestie erat a eleifend.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Nunc feugiat dolor id quam accumsan, eu hendrerit massa dignissim.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 0)(189, "div", 1)(190, "ul", 76)(191, "li", 20)(192, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "li", 20)(195, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "li", 20)(198, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 80)(201, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Curabitur dignissim molestie erat a eleifend.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Nunc feugiat dolor id quam accumsan, eu hendrerit massa dignissim.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 0)(208, "div", 1)(209, "ul", 84)(210, "li", 20)(211, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "li", 20)(214, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "li", 20)(217, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 88)(220, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Curabitur dignissim molestie erat a eleifend.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Nunc feugiat dolor id quam accumsan, eu hendrerit massa dignissim.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 58)(227, "div", 1)(228, "ul", 92)(229, "li", 20)(230, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "li", 20)(233, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "li", 20)(236, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 96)(239, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Curabitur dignissim molestie erat a eleifend.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "Nunc feugiat dolor id quam accumsan, eu hendrerit massa dignissim.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 16)(246, "div", 1)(247, "div", 2)(248, "div", 3)(249, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "ACCORDION");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 4)(252, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](253, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](255, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](257, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](259, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "div", 15)(264, "div", 100)(265, "div", 101)(266, "div", 102)(267, "h5", 103)(268, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, " Collapsible Group Item #1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 105)(271, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 107)(274, "div", 108)(275, "h5", 103)(276, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, " Collapsible Group Item #2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div", 110)(279, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 111)(282, "div", 112)(283, "h5", 103)(284, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, " Collapsible Group Item #3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 114)(287, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 115)(290, "div", 116)(291, "h5", 103)(292, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, " Collapsible Group Item #4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "div", 118)(295, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "div", 119)(298, "div", 120)(299, "h5", 103)(300, "a", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, " Collapsible Group Item #5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 122)(303, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "div", 123)(306, "div", 124)(307, "h5", 103)(308, "a", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, " Collapsible Group Item #6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div", 126)(311, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      }
    },
    dependencies: [_theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__.Widget],
    encapsulation: 2
  });
}


/***/ }),

/***/ 52559:
/*!*************************************************************!*\
  !*** ./src/app/pages/ui/typography/typography.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypographyComponent": () => (/* binding */ TypographyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/directives/widget/widget.directive */ 3090);


class TypographyComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function TypographyComponent_Factory(t) {
    return new (t || TypographyComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TypographyComponent,
    selectors: [["az-typography"]],
    decls: 460,
    vars: 0,
    consts: [[1, "row", "bottom-30"], [1, "col"], ["widget", "", 1, "card"], [1, "card-header"], [1, "widget-controls"], ["data-widgster", "expand", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-down"], ["data-widgster", "collapse", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-up"], ["data-widgster", "fullscreen", "href", "#", 1, "transition"], [1, "fa", "fa-expand"], ["data-widgster", "restore", "href", "#", 1, "transition"], [1, "fa", "fa-compress"], ["data-widgster", "close", "href", "#", 1, "transition"], [1, "fa", "fa-times"], [1, "card-body", "widget-body", "row"], [1, "col-xl-6", "col-lg-6", "col-12", "bottom-30"], [1, "card-body"], [1, "card-text", "desc"], [1, "col-xl-6", "col-lg-6", "col-12", "typography"], [1, "display-1"], [1, "display-2"], [1, "display-3"], [1, "display-4"], [1, "card-body", "widget-body", "row", "mbm-20"], [1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-12", "bottom-30", "typography"], [1, "card"], [1, "card-body", "text-center"], [1, "text-muted"], [1, "card", "card-outline-primary"], [1, "text-primary"], [1, "card", "card-outline-success"], [1, "text-success"], [1, "card", "card-outline-info"], [1, "text-info"], [1, "card", "card-outline-warning"], [1, "text-warning"], [1, "card", "card-outline-danger"], [1, "text-danger"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "bottom-30", "typography"], [1, "card", "card-info", "text-white"], [1, "text-left"], [1, "text-sm-left"], [1, "text-md-left"], [1, "text-lg-left"], [1, "text-xl-left"], [1, "text-center"], [1, "text-sm-center"], [1, "text-md-center"], [1, "text-lg-center"], [1, "text-xl-center"], [1, "text-right"], [1, "text-sm-right"], [1, "text-md-right"], [1, "text-lg-right"], [1, "text-xl-right"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "bottom-30", "typography"], [1, "blockquote"], [1, "mb-0"], [1, "blockquote-footer"], ["title", "Source Title"], [1, "card-text", "desc", "text-center"], [1, "blockquote", "blockquote-reverse"], [1, "list-unstyled"], [1, "card", "card-outline-info", "bottom-15"], [1, "list-inline"], [1, "list-inline-item"], [1, "col", "bottom-30", "typography"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-9"], [1, "col-sm-3", "text-truncate"], [1, "col-sm-4"], [1, "col-sm-8"], [1, "col-12", "bottom-30", "typography", "text-center"], [1, "d-inline-block"], [1, "align-baseline"], [1, "align-top"], [1, "align-middle"], [1, "align-bottom"], [1, "align-text-top"], [1, "align-text-bottom"], [1, "desc"], [1, "font-weight-bold"], [1, "font-weight-normal"], [1, "font-italic"], [1, "text-lowercase"], [1, "text-uppercase"], [1, "text-capitalize"], ["src", "assets/img/app/sample.jpg", "alt", "Rounded image", 1, "rounded"], ["src", "assets/img/app/sample.jpg", "alt", "Rounded circle image", 1, "rounded-circle"], ["src", "assets/img/app/sample.jpg", "alt", "Rounded top image", 1, "rounded-top"], ["src", "assets/img/app/sample.jpg", "alt", "Rounded right image", 1, "rounded-right"], ["src", "assets/img/app/sample.jpg", "alt", "Rounded bottom image", 1, "rounded-bottom"], ["src", "assets/img/app/sample.jpg", "alt", "Rounded left image", 1, "rounded-left"]],
    template: function TypographyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "HEADINGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15)(18, "div", 16)(19, "div", 17)(20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Heading 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Sub-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Heading 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Sub-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Heading 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Sub-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Heading 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Sub-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Heading 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Sub-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Heading 6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Sub-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 17)(45, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "All HTML headings, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "<h1>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " through ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "<h6>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " are available. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, ".h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " through ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, ".h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 19)(60, "div", 17)(61, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Display 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Display 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Display 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Display 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 0)(70, "div", 1)(71, "div", 2)(72, "div", 3)(73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "TEXT COLORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 4)(76, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 24)(87, "div", 25)(88, "div", 26)(89, "div", 27)(90, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 27)(93, "p", 18)(94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, ".text-muted");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 25)(97, "div", 29)(98, "div", 27)(99, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 27)(102, "p", 18)(103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, ".text-primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 25)(106, "div", 31)(107, "div", 27)(108, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 27)(111, "p", 18)(112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, ".text-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 25)(115, "div", 33)(116, "div", 27)(117, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 27)(120, "p", 18)(121, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, ".text-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 25)(124, "div", 35)(125, "div", 27)(126, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 27)(129, "p", 18)(130, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, ".text-warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 25)(133, "div", 37)(134, "div", 27)(135, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 27)(138, "p", 18)(139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, ".text-danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 0)(142, "div", 1)(143, "div", 2)(144, "div", 3)(145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "TEXT ALIGMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 4)(148, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 24)(159, "div", 39)(160, "div", 40)(161, "div", 17)(162, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Left aligned text on all viewport sizes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Left aligned text on viewports sized SM (small) or wider.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Left aligned text on viewports sized MD (medium) or wider.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Left aligned text on viewports sized LG (large) or wider.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Left aligned text on viewports sized XL (extra-large) or wider.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 27)(173, "p", 18)(174, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, ".text-*-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 39)(177, "div", 40)(178, "div", 17)(179, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Center aligned text on all viewport sizes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Center aligned text on viewports sized SM (small) or wider.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Center aligned text on viewports sized MD (medium) or wider.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Center aligned text on viewports sized LG (large) or wider.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Center aligned text on viewports sized XL (extra-large) or wider.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 27)(190, "p", 18)(191, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, ".text-*-center");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 39)(194, "div", 40)(195, "div", 17)(196, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Right aligned text on all viewport sizes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "p", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Right aligned text on viewports sized SM (small) or wider.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Right aligned text on viewports sized MD (medium) or wider.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Right aligned text on viewports sized LG (large) or wider.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Right aligned text on viewports sized XL (extra-large) or wider.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 27)(207, "p", 18)(208, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, ".text-*-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 0)(211, "div", 1)(212, "div", 2)(213, "div", 3)(214, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "BLOCKQUOTES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 4)(217, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](220, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](222, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 24)(228, "div", 56)(229, "div", 17)(230, "blockquote", 57)(231, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "footer", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "cite", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Use class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div", 56)(242, "div", 17)(243, "blockquote", 62)(244, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "footer", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "Someone famous in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "cite", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Source Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "Add class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "blockquote-reverse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 0)(255, "div", 1)(256, "div", 2)(257, "div", 3)(258, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, "LIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div", 4)(261, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](262, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](264, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](266, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](268, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](270, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 24)(272, "div", 56)(273, "div", 33)(274, "div", 17)(275, "ul", 63)(276, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "Integer molestie lorem at massa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "Facilisis in pretium nisl aliquet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, "Nulla volutpat aliquam velit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "ul")(283, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "Phasellus iaculis neque");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Purus sodales ultricies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "Faucibus porta lacus fringilla vel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Eget porttitor lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "div", 27)(292, "p", 18)(293, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, ".list-unstyled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "div", 56)(296, "div", 64)(297, "div", 17)(298, "ul", 65)(299, "li", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](300, "Lorem ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "li", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](302, "Phasellus iaculis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "li", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Nulla volutpat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "p", 61)(306, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, ".list-inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "div", 33)(309, "div", 17)(310, "ol")(311, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, "Facilisis in pretium nisl aliquet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](314, "Nulla volutpat aliquam velit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "Faucibus porta lacus fringilla vel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, "Integer molestie lorem at massa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "div", 67)(320, "div", 33)(321, "div", 17)(322, "dl", 68)(323, "dt", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "Description lists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "dd", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326, "A description list is perfect for defining terms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "dt", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, "Euismod");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "dd", 70)(330, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, "Donec id elit non mi porta gravida at eget metus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "dt", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Malesuada porta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "dd", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "Etiam porta sem malesuada magna mollis euismod.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "dt", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "Truncated term is truncated");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "dd", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "dt", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "Nesting");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "dd", 70)(345, "dl", 68)(346, "dt", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, "Nested definition list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "dd", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "div", 27)(351, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](352, "Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, "text-truncate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355, " class to truncate the text with an ellipsis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "div", 68)(357, "div", 1)(358, "div", 2)(359, "div", 3)(360, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](361, "OTHER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "div", 4)(363, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](364, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](366, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](368, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](370, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](372, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "div", 24)(374, "div", 74)(375, "div", 75)(376, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](377, "baseline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](379, "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](381, "middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](383, "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](385, "text-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](387, "text-bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](389, "Use class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](391, "align-baseline, align-top, align-middle, align-bottom, align-text-top, align-text-bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "div", 74)(393, "div", 75)(394, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](395, "Bold text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "p", 82)(397, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](398, ".font-weight-bold");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "div", 75)(400, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](401, "Normal weight text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "p", 82)(403, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](404, ".font-weight-normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "div", 75)(406, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](407, "Italicized text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](408, "p", 82)(409, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](410, ".font-italic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "div", 75)(412, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](413, "lowercased text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](414, "p", 82)(415, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](416, ".text-lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "div", 75)(418, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](419, "uppercased text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "p", 82)(421, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](422, ".text-uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "div", 75)(424, "p", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](425, "capitalized text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "p", 82)(427, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](428, ".text-capitalize");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "div", 74)(430, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](431, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "p", 82)(433, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](434, ".rounded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](436, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "p", 82)(438, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](439, ".rounded-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](441, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](442, "p", 82)(443, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](444, ".rounded-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](446, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "p", 82)(448, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](449, ".rounded-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](451, "img", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](452, "p", 82)(453, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](454, ".rounded-bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](456, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "p", 82)(458, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](459, ".rounded-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      }
    },
    dependencies: [_theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__.Widget],
    styles: [".typography .card {\n  padding: 6px;\n}\n.typography .card .card-body {\n  padding: 4px;\n}\n.typography .card-body {\n  padding: 4px;\n}\n.typography .d-inline-block {\n  margin-bottom: 8px;\n  margin-right: 10px;\n}\n.typography .d-inline-block img {\n  margin-bottom: 4px;\n}\n.typography .d-inline-block p {\n  margin-bottom: 0;\n}\n.typography p.desc {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdWkvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vU2NoZWR1bGluZyUyMFNvZnR3YXJlL3NyYy9hcHAvcGFnZXMvdWkvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtBQ0FSO0FEQ1E7RUFDSSxZQUFBO0FDQ1o7QURFSTtFQUNJLFlBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEQ1E7RUFDSSxrQkFBQTtBQ0NaO0FEQ1E7RUFDSSxnQkFBQTtBQ0NaO0FERUk7RUFDSSxlQUFBO0FDQVIiLCJzb3VyY2VzQ29udGVudCI6WyIudHlwb2dyYXBoeXtcclxuICAgIC5jYXJke1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICAuY2FyZC1ib2R5e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7ICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZC1ib2R5e1xyXG4gICAgICAgIHBhZGRpbmc6IDRweDsgICAgICBcclxuICAgIH1cclxuICAgIC5kLWlubGluZS1ibG9ja3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyBcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxuICAgIHAuZGVzY3tcclxuICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgIH1cclxufSIsIi50eXBvZ3JhcGh5IC5jYXJkIHtcbiAgcGFkZGluZzogNnB4O1xufVxuLnR5cG9ncmFwaHkgLmNhcmQgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDRweDtcbn1cbi50eXBvZ3JhcGh5IC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiA0cHg7XG59XG4udHlwb2dyYXBoeSAuZC1pbmxpbmUtYmxvY2sge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi50eXBvZ3JhcGh5IC5kLWlubGluZS1ibG9jayBpbWcge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4udHlwb2dyYXBoeSAuZC1pbmxpbmUtYmxvY2sgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4udHlwb2dyYXBoeSBwLmRlc2Mge1xuICBmb250LXNpemU6IDEzcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 8204:
/*!***************************************!*\
  !*** ./src/app/pages/ui/ui.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiModule": () => (/* binding */ UiModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/directives/directives.module */ 19212);
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/buttons.component */ 43538);
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards/cards.component */ 87575);
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/components.component */ 6836);
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/icons.component */ 4058);
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid/grid.component */ 6195);
/* harmony import */ var _list_group_list_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-group/list-group.component */ 36518);
/* harmony import */ var _media_objects_media_objects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media-objects/media-objects.component */ 56931);
/* harmony import */ var _tabs_accordions_tabs_accordions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs-accordions/tabs-accordions.component */ 38016);
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./typography/typography.component */ 52559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 86839);














const routes = [{
  path: '',
  redirectTo: 'buttons',
  pathMatch: 'full'
}, {
  path: 'buttons',
  component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_1__.ButtonsComponent,
  data: {
    breadcrumb: 'Buttons'
  }
}, {
  path: 'cards',
  component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_2__.CardsComponent,
  data: {
    breadcrumb: 'Cards'
  }
}, {
  path: 'components',
  component: _components_components_component__WEBPACK_IMPORTED_MODULE_3__.ComponentsComponent,
  data: {
    breadcrumb: 'Components'
  }
}, {
  path: 'icons',
  component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_4__.IconsComponent,
  data: {
    breadcrumb: 'Icons'
  }
}, {
  path: 'grid',
  component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent,
  data: {
    breadcrumb: 'Grid'
  }
}, {
  path: 'list-group',
  component: _list_group_list_group_component__WEBPACK_IMPORTED_MODULE_6__.ListGroupComponent,
  data: {
    breadcrumb: 'List Group'
  }
}, {
  path: 'media-objects',
  component: _media_objects_media_objects_component__WEBPACK_IMPORTED_MODULE_7__.MediaObjectsComponent,
  data: {
    breadcrumb: 'Media Objects'
  }
}, {
  path: 'tabs-accordions',
  component: _tabs_accordions_tabs_accordions_component__WEBPACK_IMPORTED_MODULE_8__.TabsAccordionsComponent,
  data: {
    breadcrumb: 'Tabs & Accordions'
  }
}, {
  path: 'typography',
  component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__.TypographyComponent,
  data: {
    breadcrumb: 'Typography'
  }
}];
class UiModule {
  static #_ = this.ɵfac = function UiModule_Factory(t) {
    return new (t || UiModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: UiModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes)]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](UiModule, {
    declarations: [_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_1__.ButtonsComponent, _cards_cards_component__WEBPACK_IMPORTED_MODULE_2__.CardsComponent, _components_components_component__WEBPACK_IMPORTED_MODULE_3__.ComponentsComponent, _icons_icons_component__WEBPACK_IMPORTED_MODULE_4__.IconsComponent, _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent, _list_group_list_group_component__WEBPACK_IMPORTED_MODULE_6__.ListGroupComponent, _media_objects_media_objects_component__WEBPACK_IMPORTED_MODULE_7__.MediaObjectsComponent, _tabs_accordions_tabs_accordions_component__WEBPACK_IMPORTED_MODULE_8__.TabsAccordionsComponent, _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__.TypographyComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ui_ui_module_ts.js.map