"use strict";
(self["webpackChunkazimuth"] = self["webpackChunkazimuth"] || []).push([["src_app_pages_tables_tables_module_ts"],{

/***/ 69015:
/*!**********************************************!*\
  !*** ./src/app/logic/services/epoch.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EpochToDatePipe": () => (/* binding */ EpochToDatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class EpochToDatePipe {
  transform(epoch) {
    if (epoch === null) {
      return ''; // Return an empty string if the epoch is null
    }

    if (!epoch) {
      return '';
    }
    const epochMilliseconds = epoch * 1000; // Convert seconds to milliseconds
    const dateObject = new Date(epochMilliseconds);
    // Adjust to local time zone
    const localDateObject = new Date(dateObject.toLocaleString('en-US', {
      timeZone: 'UTC'
    }));
    // Format the result as "January 6, 2024, 10:00 am"
    const formattedDate = localDateObject.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    return formattedDate;
  }
  static #_ = this.ɵfac = function EpochToDatePipe_Factory(t) {
    return new (t || EpochToDatePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "epochToDate",
    type: EpochToDatePipe,
    pure: true
  });
}


/***/ }),

/***/ 52431:
/*!*********************************************************************!*\
  !*** ./src/app/pages/tables/basic-tables/basic-tables.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicTablesComponent": () => (/* binding */ BasicTablesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/directives/widget/widget.directive */ 3090);


class BasicTablesComponent {
  static #_ = this.ɵfac = function BasicTablesComponent_Factory(t) {
    return new (t || BasicTablesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BasicTablesComponent,
    selectors: [["az-basic-tables"]],
    decls: 643,
    vars: 0,
    consts: [[1, "row"], [1, "col-xl-6", "col-lg-6", "col-12", "bottom-30"], ["widget", "", 1, "card"], [1, "card-header"], [1, "widget-controls"], ["data-widgster", "expand", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-down"], ["data-widgster", "collapse", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-up"], ["data-widgster", "fullscreen", "href", "#", 1, "transition"], [1, "fa", "fa-expand"], ["data-widgster", "restore", "href", "#", 1, "transition"], [1, "fa", "fa-compress"], ["data-widgster", "close", "href", "#", 1, "transition"], [1, "fa", "fa-times"], [1, "card-body", "widget-body"], [1, "table", "table-bordered"], ["scope", "row"], ["colspan", "2"], [1, "table", "table-hover"], [1, "row", "bottom-30"], [1, "col"], [1, "table-responsive"], [1, "table"], [1, "table", "table-striped"], [1, "table", "table-reflow"], [1, "table-active"], [1, "table-success"], [1, "table-warning"], [1, "table-danger"], [1, "table-info"], [1, "table", "table-sm"], [1, "table", "table-sm", "table-dark"]],
    template: function BasicTablesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "BORDERED TABLE");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15)(18, "table", 16)(19, "thead")(20, "tr")(21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tbody")(30, "tr")(31, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "tr")(40, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "@TwBootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "tr")(49, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "tr")(58, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Larry the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 1)(65, "div", 2)(66, "div", 3)(67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "HOVER TABLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 4)(70, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 15)(81, "table", 19)(82, "thead")(83, "tr")(84, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "tbody")(93, "tr")(94, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "tr")(103, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "tr")(112, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Larry the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "tr")(119, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Steve");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Urkel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "@steve");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 20)(128, "div", 21)(129, "div", 2)(130, "div", 3)(131, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "RESPONSIVE TABLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 4)(134, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 15)(145, "div", 22)(146, "table", 23)(147, "thead")(148, "tr")(149, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "tbody")(162, "tr")(163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Cityname");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "tr")(176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Cityname");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "tr")(189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Cityname");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "tr")(202, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Steve");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Mac Queen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "@steve");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Cityname");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 0)(215, "div", 1)(216, "div", 2)(217, "div", 3)(218, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "STRIPED ROWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 4)(221, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](222, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](230, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 15)(232, "table", 24)(233, "thead")(234, "tr")(235, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "tbody")(244, "tr")(245, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "tr")(254, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "tr")(263, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "tr")(272, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "Steve");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "Urkel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "@steve");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "tr")(281, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "Jeremy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Cutler");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "@jeremy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 1)(290, "div", 2)(291, "div", 3)(292, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "REFLOW TABLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "div", 4)(295, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](296, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](298, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](300, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](302, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](304, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "div", 15)(306, "table", 25)(307, "thead")(308, "tr")(309, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, "Table heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](314, "Table heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "Table heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, "Table heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "Table heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "tbody")(322, "tr")(323, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "tr")(336, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "tr")(349, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](352, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "div", 0)(362, "div", 1)(363, "div", 2)(364, "div", 3)(365, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, "CONTEXTUAL ROWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "div", 4)(368, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](369, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](371, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](373, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](375, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](377, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "div", 15)(379, "table", 23)(380, "thead")(381, "tr")(382, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](383, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](385, "Column heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](387, "Column heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](389, "Column heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "tbody")(391, "tr", 26)(392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](393, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](395, "Column content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](397, "Column content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](399, "Column content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "tr", 27)(401, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](402, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](404, "Column content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](406, "Column content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](408, "Column content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "tr", 28)(410, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](411, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](413, "Column content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](414, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](415, "Column content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](417, "Column content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "tr", 29)(419, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](420, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](422, "Column content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](424, "Column content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](426, "Column content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "tr", 30)(428, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](429, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](431, "Column content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](433, "Column content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](434, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](435, "Column content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](436, "div", 1)(437, "div", 2)(438, "div", 3)(439, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](440, "CONTEXTUAL COLUMNS");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](452, "div", 15)(453, "table", 23)(454, "thead")(455, "tr")(456, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](457, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](458, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](459, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](460, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](461, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](463, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](464, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](465, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "tbody")(469, "tr")(470, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](471, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](473, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](474, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](475, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](477, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](478, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](479, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](480, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](481, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](482, "tr")(483, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](484, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](485, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](486, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](487, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](488, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](489, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](490, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](491, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](492, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](494, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](495, "tr")(496, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](497, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](498, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](499, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](500, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](501, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](502, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](503, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](504, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](505, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](506, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](507, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](508, "tr")(509, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](510, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](511, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](512, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](513, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](514, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](515, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](516, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](517, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](518, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](519, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](520, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "tr")(522, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](523, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](524, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](525, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](526, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](527, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](528, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](529, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](530, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](531, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](532, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](533, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](534, "div", 0)(535, "div", 1)(536, "div", 2)(537, "div", 3)(538, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](539, "SMALL TABLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](540, "div", 4)(541, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](542, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](543, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](544, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](545, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](546, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](547, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](548, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](549, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](550, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](551, "div", 15)(552, "table", 31)(553, "thead")(554, "tr")(555, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](556, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](557, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](558, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](559, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](560, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](561, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](562, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](563, "tbody")(564, "tr")(565, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](566, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](567, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](568, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](569, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](570, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](571, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](572, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](573, "tr")(574, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](575, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](576, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](577, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](578, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](579, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](580, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](581, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](582, "tr")(583, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](584, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](585, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](586, "Larry the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](587, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](588, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](589, "div", 1)(590, "div", 2)(591, "div", 3)(592, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](593, "DARK TABLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](594, "div", 4)(595, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](596, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](597, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](598, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](599, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](600, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](601, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](602, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](603, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](604, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](605, "div", 15)(606, "table", 32)(607, "thead")(608, "tr")(609, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](610, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](611, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](612, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](613, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](614, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](615, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](616, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](617, "tbody")(618, "tr")(619, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](620, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](621, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](622, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](623, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](624, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](625, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](626, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](627, "tr")(628, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](629, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](630, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](631, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](632, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](633, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](634, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](635, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](636, "tr")(637, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](638, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](639, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](640, "Larry the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](641, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](642, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      }
    },
    dependencies: [_theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__.Widget],
    encapsulation: 2
  });
}


/***/ }),

/***/ 66971:
/*!*************************************************************************!*\
  !*** ./src/app/pages/tables/dynamic-tables/dynamic-tables.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicTablesComponent": () => (/* binding */ DynamicTablesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 77070);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _users_createUser_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../users/createUser/create-user/create-user.component */ 72904);
/* harmony import */ var _edit_table_edit_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-table/edit-table.component */ 72979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var src_app_logic_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/logic/services/users.service */ 95877);
/* harmony import */ var _dashboard_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dashboard/data.service */ 982);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/directives/widget/widget.directive */ 3090);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 84853);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
















function DynamicTablesComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r43 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", value_r43, " ");
  }
}
function DynamicTablesComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const value_r44 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 1, value_r44, "medium"), " ");
  }
}
function DynamicTablesComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const value_r45 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 1, value_r45, "medium"), " ");
  }
}
function DynamicTablesComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DynamicTablesComponent_ng_template_69_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r49);
      const row_r46 = restoredCtx.row;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r48.deleteRow(row_r46));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_86_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dblclick", function DynamicTablesComponent_ng_template_86_span_0_Template_span_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r56);
      const rowIndex_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowIndex;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r55.editingName[rowIndex_r50 + "-firstname"] = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", value_r51, " ");
  }
}
function DynamicTablesComponent_ng_template_86_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DynamicTablesComponent_ng_template_86_input_1_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61);
      const rowIndex_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowIndex;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r59.updateValueName($event, "firstname", rowIndex_r50));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", value_r51);
  }
}
function DynamicTablesComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DynamicTablesComponent_ng_template_86_span_0_Template, 2, 1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DynamicTablesComponent_ng_template_86_input_1_Template, 1, 1, "input", 52);
  }
  if (rf & 2) {
    const rowIndex_r50 = ctx.rowIndex;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r13.editingName[rowIndex_r50 + "-firstname"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.editingName[rowIndex_r50 + "-firstname"]);
  }
}
function DynamicTablesComponent_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_89_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dblclick", function DynamicTablesComponent_ng_template_89_span_0_Template_span_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r69);
      const rowIndex_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowIndex;
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r68.editingName[rowIndex_r63 + "-lastname"] = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", value_r64, " ");
  }
}
function DynamicTablesComponent_ng_template_89_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DynamicTablesComponent_ng_template_89_input_1_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r74);
      const rowIndex_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowIndex;
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r72.updateValueName($event, "lastname", rowIndex_r63));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", value_r64);
  }
}
function DynamicTablesComponent_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DynamicTablesComponent_ng_template_89_span_0_Template, 2, 1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DynamicTablesComponent_ng_template_89_input_1_Template, 1, 1, "input", 52);
  }
  if (rf & 2) {
    const rowIndex_r63 = ctx.rowIndex;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r15.editingName[rowIndex_r63 + "-lastname"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r15.editingName[rowIndex_r63 + "-lastname"]);
  }
}
function DynamicTablesComponent_ng_template_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DynamicTablesComponent_ng_template_92_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r79);
      const row_r76 = restoredCtx.row;
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r78.deleteRowManager(row_r76));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_105_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dblclick", function DynamicTablesComponent_ng_template_105_span_0_Template_span_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r86);
      const rowIndex_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowIndex;
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r85.editing[rowIndex_r80 + "-task"] = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", value_r81, " ");
  }
}
function DynamicTablesComponent_ng_template_105_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function DynamicTablesComponent_ng_template_105_input_1_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r91);
      const rowIndex_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().rowIndex;
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r89.updateValue($event, "task", rowIndex_r80));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", value_r81);
  }
}
function DynamicTablesComponent_ng_template_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DynamicTablesComponent_ng_template_105_span_0_Template, 2, 1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DynamicTablesComponent_ng_template_105_input_1_Template, 1, 1, "input", 52);
  }
  if (rf & 2) {
    const rowIndex_r80 = ctx.rowIndex;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r19.editing[rowIndex_r80 + "-task"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r19.editing[rowIndex_r80 + "-task"]);
  }
}
function DynamicTablesComponent_ng_template_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DynamicTablesComponent_ng_template_108_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r96);
      const row_r93 = restoredCtx.row;
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r95.deleteRowTask(row_r93));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Holiday");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r97 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", value_r97, " ");
  }
}
function DynamicTablesComponent_ng_template_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const value_r98 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 1, value_r98, "mediumDate"), " ");
  }
}
function DynamicTablesComponent_ng_template_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "End");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const value_r99 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 1, value_r99, "mediumDate"), " ");
  }
}
function DynamicTablesComponent_ng_template_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_151_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DynamicTablesComponent_ng_template_151_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r103);
      const row_r100 = restoredCtx.row;
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r102.deleteRowTask(row_r100));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_161_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Project Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r104 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", value_r104, " ");
  }
}
function DynamicTablesComponent_ng_template_164_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Foreman");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r105 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", value_r105, " ");
  }
}
function DynamicTablesComponent_ng_template_167_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_168_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const value_r106 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 1, value_r106, "medium"), " ");
  }
}
function DynamicTablesComponent_ng_template_170_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_171_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const value_r107 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 1, value_r107, "medium"), " ");
  }
}
function DynamicTablesComponent_ng_template_173_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DynamicTablesComponent_ng_template_174_Template(rf, ctx) {
  if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DynamicTablesComponent_ng_template_174_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r111);
      const row_r108 = restoredCtx.row;
      const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r110.deleteRowProject(row_r108));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class DynamicTablesComponent {
  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.projectRows[rowIndex][cell] = event.target.value;
    this.projectRows = [...this.projectRows];
  }
  updateValueName(event, cell, rowIndex) {
    this.editingName[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }
  constructor(usersService, dataService, dialog) {
    this.usersService = usersService;
    this.dataService = dataService;
    this.dialog = dialog;
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    this.editing = {};
    this.editingName = {};
    this.rows = [];
    this.projectRows = [];
    this.holidayRows = [];
    this.filtered_rows = [];
    this.selected = [];
    this.columns = [];
    this.project = {};
    this.projectManagers = [];
    this.availableTasks = [];
    this.selectedTask = {};
    this.selectedTasks = [];
    this.selectedHoliday = "";
    this.startDate = {};
    this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null)
    });
    this.taskrange = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      taskstart: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
      taskend: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required)
    });
    this.holidayRange = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      holidayStart: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null),
      holidayEnd: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null)
    });
  }
  ngOnInit() {
    this.loadUsers();
  }
  ngAfterViewInit() {
    console.log("entered");
    const selectedManager = localStorage.getItem('selectedManager');
    if (selectedManager) {
      this.selectedManager = selectedManager;
    }
    const range = localStorage.getItem('range');
    if (range) {
      this.range.setValue(JSON.parse(range));
    }
    const taskRange = localStorage.getItem('taskrange');
    if (taskRange) {
      this.taskrange.setValue(JSON.parse(taskRange));
    }
    const selectedTask = localStorage.getItem('selectedTask');
    if (selectedTask && selectedTask !== "null" && selectedTask !== "undefined") {
      console.log("Selected task:");
      console.log(selectedTask);
      this.selectedTask = selectedTask;
    } else {
      console.log("No valid selected task in localStorage");
      this.selectedTask = null; // or handle it however you want when there's no valid task
    }

    const selectedTasks = localStorage.getItem('selectedTasks');
    if (selectedTasks) {
      this.selectedTasks = JSON.parse(selectedTasks);
    }
    const project = localStorage.getItem('project');
    if (selectedTasks) {
      this.project = JSON.parse(project);
    }
  }
  loadUsers() {
    this.dataService.getForemans().subscribe(data => {
      console.log(data);
      this.projectManagers = data;
      this.rows = data;
      this.projectManagers = this.projectManagers.map(item => {
        return {
          label: `${item.firstname} ${item.lastname}`,
          value: `${item.firstname} ${item.lastname}`
        };
      });
    });
    try {
      this.subs.add(this.dataService.getActiveProjects().subscribe(res => {
        this.activeProjects = res;
        this.activeProjects = [...this.activeProjects];
      }));
    } catch {}
    try {
      this.subs.add(this.dataService.getHolidays().subscribe(res => {
        this.holidayRows = res;
        this.holidayRows = [...this.holidayRows];
      }));
    } catch {}
    try {
      this.subs.add(this.dataService.getTaskList().subscribe(res => {
        this.projectRows = res;
        this.availableTasks = res.map(user => {
          return {
            label: `${user.task}`,
            value: `${user.task}`
            // You can include other properties if needed
          };
        });

        this.availableTasks = [...this.availableTasks];
        this.projectRows = [...this.projectRows];
      }));
    } catch {}
    this.rows = [...this.rows];
    this.projectRows = [...this.projectRows];
    this.activeProjects = [...this.activeProjects];
  }
  submit() {
    if (this.taskrange.valid) {
      console.log('Task added:', this.taskrange.value);
      this.selectedTasks.push({
        task: this.selectedTask,
        start: new Date(this.taskrange.get('taskstart').value),
        end: new Date(this.taskrange.get('taskend').value)
      });
      this.selectedTasks = [...this.selectedTasks];
      // Process your task submission
    } else {
      console.log('Please select both a start and end date');
    }
  }
  toggleEdit(row) {
    row.isEditing = !row.isEditing;
    // If you want to save the changes immediately when toggling out of edit mode,
    // you can call a method to save the changes here.
    // Example: this.saveChanges(row);
  }

  cancelEdit(row) {
    row.isEditing = false;
  }
  submitProject() {
    if (!this.selectedManager) {
      alert('Please select a Foreman before submitting the project.');
      return;
    }
    if (!this.project.companyName || this.project.companyName == "") {
      alert('Please select a Project Name before submitting the project.');
      return;
    }
    console.log(this.selectedManager);
    let project = {
      name: this.project.companyName,
      companyName: this.selectedManager,
      start: new Date(this.range.get('start').value),
      end: new Date(this.range.get('end').value),
      tasks: this.selectedTasks,
      status: 'active'
    };
    try {
      this.subs.add(this.dataService.createProjectApi(project).subscribe(res => {
        this.dataService.getActiveProjects().subscribe(data => {
          this.activeProjects = data;
          this.activeProjects = [...this.activeProjects];
        });
      }));
    } catch {}
    //console.log(this.selectedTasks);
    //this.dataService.addProject(project);
    //this.dataService.createProject(project);
    this.selectedManager = null;
    this.range.reset();
    this.taskrange.reset();
    this.selectedTask = [];
    this.selectedTasks = [];
    this.project = {};
  }
  submitHoliday() {
    let holiday = {
      name: this.selectedHoliday,
      start: new Date(this.holidayRange.get('holidayStart').value),
      end: new Date(this.holidayRange.get('holidayEnd').value)
    };
    this.dataService.addHoliday(holiday).subscribe(response => {
      console.log('Project status updated successfully:', response);
    }, error => {
      console.error('Error updating project status:', error);
    });
    this.holidayRows.push(holiday);
    this.holidayRows = [...this.holidayRows];
    this.holidayRange.reset();
    this.selectedHoliday = "";
  }
  deleteRow(row) {
    this.selectedTasks = this.selectedTasks.filter(item => item !== row);
  }
  deleteRowProject(row) {
    if (confirm("Are you sure to Delete the Project?")) {
      this.dataService.deleteActiveProject(row.id).subscribe(response => {
        this.projectRows = this.projectRows.filter(item => item !== row);
        console.log('Project status updated successfully:', response);
      }, error => {
        console.error('Error updating project status:', error);
      });
    }
  }
  deleteRowManager(row) {
    this.rows = this.rows.filter(item => item !== row);
    this.dataService.deleteForeman(row.id).subscribe(response => {
      console.log('Project status updated successfully:', response);
    }, error => {
      console.error('Error updating project status:', error);
    });
  }
  deleteRowTask(row) {
    this.dataService.deleteTasklist(row.id).subscribe(response => {
      this.projectRows = this.projectRows.filter(item => item.id !== row.id);
      this.projectRows = [...this.projectRows];
      this.dataService.deleteRow(row);
      console.log('Project status updated successfully:', response);
    }, error => {
      console.error('Error updating project status:', error);
    });
  }
  addItem() {
    // Logic to add an item to the list
    // For example, you can push a new item to the existing list or navigate to a new item creation page
    const dialogRef = this.dialog.open(_users_createUser_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_0__.CreateUserComponent, {
      width: '1000px',
      height: '300px'
      // Add any additional configuration options as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadUsers();
    });
  }
  addProjectItem() {
    // Logic to add an item to the list
    // For example, you can push a new item to the existing list or navigate to a new item creation page
    const dialogRef = this.dialog.open(_edit_table_edit_table_component__WEBPACK_IMPORTED_MODULE_1__.EditTableComponent, {
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
    if (this.selectedManager) {
      localStorage.setItem('selectedManager', this.selectedManager);
    } else {
      localStorage.removeItem('selectedManager');
    }
    if (this.selectedTask && typeof this.selectedTask === 'object') {
      console.log("removiing item");
      localStorage.removeItem('selectedTask');
    } else if (this.selectedTask !== null && this.selectedTask !== undefined) {
      console.log("adding item");
      console.log(this.selectedTask);
      localStorage.setItem('selectedTask', this.selectedTask);
    } else {
      console.log("selectedTask is null or undefined, not adding to localStorage");
    }
    localStorage.setItem('range', JSON.stringify(this.range.value));
    localStorage.setItem('taskrange', JSON.stringify(this.taskrange.value));
    localStorage.setItem('selectedTask', this.selectedTask);
    localStorage.setItem('selectedTasks', JSON.stringify(this.selectedTasks));
    localStorage.setItem('project', JSON.stringify(this.project));
  }
  static #_ = this.ɵfac = function DynamicTablesComponent_Factory(t) {
    return new (t || DynamicTablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_logic_services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_dashboard_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DynamicTablesComponent,
    selectors: [["az-dynamic-tables"]],
    viewQuery: function DynamicTablesComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.DatatableComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
      }
    },
    decls: 178,
    vars: 104,
    consts: [[1, "row"], [1, "card", "col-md-12", "mb-2"], [1, "card-header"], [1, "text-uppercase"], [1, "card-body"], [1, "col-md-6", "bottom-15"], ["id", "input-8", 1, "rounded-input", "form-control-lg", 3, "ngModel", "ngModelChange"], [1, "mt-4"], ["bindLabel", "label", "bindValue", "value", "searchPlaceholder", "Select Foreman", 3, "items", "multiple", "ngModel", "ngModelChange"], [1, "col-md-6"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date"], ["matIconSuffix", "", 3, "for"], ["picker", ""], [1, "col-md-12"], [1, "col-md-4"], ["matStartDate", "", "formControlName", "taskstart", "placeholder", "Start date"], ["matEndDate", "", "formControlName", "taskend", "placeholder", "End date"], ["taskpicker", ""], [1, "col-md-4", "d-flex", "flex-column", "align-items-end", "justify-content-center", "text-center"], [1, "custom-button", "btn-sm", 3, "disabled", "click"], [1, "card-body", "widget-body"], [1, "bootstrap", 3, "headerHeight", "limit", "columnMode", "footerHeight", "rowHeight", "rows", "selected", "selectionType", "activate", "select"], ["taskTable", ""], [3, "width", "sortable", "canAutoResize", "draggable", "resizeable", "headerCheckboxable", "checkboxable"], ["name", "task"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "start"], ["name", "end"], ["name", "actions", 3, "sortable", "canAutoResize", "draggable", "resizeable"], [1, "custom-button", "btn-sm", 3, "click"], ["widget", "", 1, "card", "col-md-6", "mb-2"], [1, "button-container"], [1, "add-button", 3, "click"], ["foremanTable", ""], ["name", "firstname"], ["name", "lastname"], ["projectTable", ""], ["name", "Task"], [1, "form-group"], ["matStartDate", "", "formControlName", "holidayStart", "placeholder", "Start date"], ["matEndDate", "", "formControlName", "holidayEnd", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["holidayPicker", ""], [1, "bootstrap", 3, "headerHeight", "limit", "columnMode", "footerHeight", "rowHeight", "rows"], ["holidayTable", ""], ["name", "name"], ["name", "companyName"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], ["title", "Double click to edit", 3, "dblclick", 4, "ngIf"], ["autofocus", "", "type", "text", 3, "value", "blur", 4, "ngIf"], ["title", "Double click to edit", 3, "dblclick"], ["autofocus", "", "type", "text", 3, "value", "blur"]],
    template: function DynamicTablesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Create New Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4)(6, "div", 0)(7, "div", 5)(8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Enter Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DynamicTablesComponent_Template_input_ngModelChange_10_listener($event) {
          return ctx.project.companyName = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Select Foreman");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ng-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DynamicTablesComponent_Template_ng_select_ngModelChange_13_listener($event) {
          return ctx.selectedManager = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9)(15, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Select Start and End Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-form-field")(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Enter a date range");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-date-range-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 11)(22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "MM/DD/YYYY \u2013 MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "mat-datepicker-toggle", 13)(26, "mat-date-range-picker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 0)(29, "div", 15)(30, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Add Task to Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 0)(33, "div", 16)(34, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Select Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "ng-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DynamicTablesComponent_Template_ng_select_ngModelChange_36_listener($event) {
          return ctx.selectedTask = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 16)(38, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Select Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-form-field")(41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Enter a date range");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-date-range-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "input", 17)(45, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "MM/DD/YYYY \u2013 MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "mat-datepicker-toggle", 13)(49, "mat-date-range-picker", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 20)(52, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DynamicTablesComponent_Template_button_click_52_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Add Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 22)(55, "ngx-datatable", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("activate", function DynamicTablesComponent_Template_ngx_datatable_activate_55_listener($event) {
          return ctx.onActivate($event);
        })("select", function DynamicTablesComponent_Template_ngx_datatable_select_55_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "ngx-datatable-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "ngx-datatable-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, DynamicTablesComponent_ng_template_59_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, DynamicTablesComponent_ng_template_60_Template, 1, 1, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "ngx-datatable-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, DynamicTablesComponent_ng_template_62_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, DynamicTablesComponent_ng_template_63_Template, 2, 4, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, DynamicTablesComponent_ng_template_65_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, DynamicTablesComponent_ng_template_66_Template, 2, 4, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, DynamicTablesComponent_ng_template_68_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, DynamicTablesComponent_ng_template_69_Template, 2, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 20)(71, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DynamicTablesComponent_Template_button_click_71_listener() {
          return ctx.submitProject();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Submit Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 33)(74, "div", 2)(75, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Foreman/Superintendent List");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 22)(78, "div", 34)(79, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DynamicTablesComponent_Template_button_click_79_listener() {
          return ctx.addItem();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "ngx-datatable", 23, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("activate", function DynamicTablesComponent_Template_ngx_datatable_activate_81_listener($event) {
          return ctx.onActivate($event);
        })("select", function DynamicTablesComponent_Template_ngx_datatable_select_81_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "ngx-datatable-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "ngx-datatable-column", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](85, DynamicTablesComponent_ng_template_85_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, DynamicTablesComponent_ng_template_86_Template, 2, 2, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "ngx-datatable-column", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](88, DynamicTablesComponent_ng_template_88_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](89, DynamicTablesComponent_ng_template_89_Template, 2, 2, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, DynamicTablesComponent_ng_template_91_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](92, DynamicTablesComponent_ng_template_92_Template, 2, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 33)(94, "div", 2)(95, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Project Task List");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 22)(98, "div", 34)(99, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DynamicTablesComponent_Template_button_click_99_listener() {
          return ctx.addProjectItem();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "ngx-datatable", 23, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("activate", function DynamicTablesComponent_Template_ngx_datatable_activate_101_listener($event) {
          return ctx.onActivate($event);
        })("select", function DynamicTablesComponent_Template_ngx_datatable_select_101_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](103, "ngx-datatable-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "ngx-datatable-column", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](105, DynamicTablesComponent_ng_template_105_Template, 2, 2, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](107, DynamicTablesComponent_ng_template_107_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](108, DynamicTablesComponent_ng_template_108_Template, 2, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div", 1)(110, "div", 2)(111, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Add Holidays");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 4)(114, "div", 0)(115, "div", 5)(116, "div", 41)(117, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118, "Holiday Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DynamicTablesComponent_Template_input_ngModelChange_119_listener($event) {
          return ctx.selectedHoliday = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "div", 41)(121, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, "Select Start and End Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "mat-form-field")(124, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](125, "Enter a date range");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "mat-date-range-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](127, "input", 42)(128, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "MM/DD/YYYY \u2013 MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](131, "mat-datepicker-toggle", 44)(132, "mat-date-range-picker", null, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "div", 41)(135, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DynamicTablesComponent_Template_button_click_135_listener() {
          return ctx.submitHoliday();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](136, "Submit Holiday");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "div", 9)(138, "ngx-datatable", 46, 47)(140, "ngx-datatable-column", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](141, DynamicTablesComponent_ng_template_141_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](142, DynamicTablesComponent_ng_template_142_Template, 1, 1, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "ngx-datatable-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](144, DynamicTablesComponent_ng_template_144_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](145, DynamicTablesComponent_ng_template_145_Template, 2, 4, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](147, DynamicTablesComponent_ng_template_147_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](148, DynamicTablesComponent_ng_template_148_Template, 2, 4, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](150, DynamicTablesComponent_ng_template_150_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](151, DynamicTablesComponent_ng_template_151_Template, 2, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "div", 1)(153, "div", 2)(154, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](155, "Active Project List");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](156, "div", 22)(157, "ngx-datatable", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("activate", function DynamicTablesComponent_Template_ngx_datatable_activate_157_listener($event) {
          return ctx.onActivate($event);
        })("select", function DynamicTablesComponent_Template_ngx_datatable_select_157_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](159, "ngx-datatable-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "ngx-datatable-column", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](161, DynamicTablesComponent_ng_template_161_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](162, DynamicTablesComponent_ng_template_162_Template, 1, 1, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](163, "ngx-datatable-column", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](164, DynamicTablesComponent_ng_template_164_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](165, DynamicTablesComponent_ng_template_165_Template, 1, 1, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](166, "ngx-datatable-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](167, DynamicTablesComponent_ng_template_167_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](168, DynamicTablesComponent_ng_template_168_Template, 2, 4, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](169, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](170, DynamicTablesComponent_ng_template_170_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](171, DynamicTablesComponent_ng_template_171_Template, 2, 4, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](172, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](173, DynamicTablesComponent_ng_template_173_Template, 2, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](174, DynamicTablesComponent_ng_template_174_Template, 2, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](175, "footer")(176, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](177, "\u00A9 SiteWorks. Version 1.22");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](27);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](50);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](133);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.project.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.projectManagers)("multiple", false)("ngModel", ctx.selectedManager);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.availableTasks)("multiple", false)("ngModel", ctx.selectedTask);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.taskrange)("rangePicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.taskrange.invalid || !ctx.selectedTask);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("headerHeight", 50)("limit", 10)("columnMode", "force")("footerHeight", 50)("rowHeight", "auto")("rows", ctx.selectedTasks)("selected", ctx.selected)("selectionType", ctx.selection);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 30)("sortable", false)("canAutoResize", false)("draggable", true)("resizeable", true)("headerCheckboxable", false)("checkboxable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("headerHeight", 50)("limit", 10)("columnMode", "force")("footerHeight", 50)("rowHeight", "auto")("rows", ctx.rows)("selected", ctx.selected)("selectionType", ctx.selection);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 30)("sortable", false)("canAutoResize", false)("draggable", true)("resizeable", true)("headerCheckboxable", false)("checkboxable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("headerHeight", 50)("limit", 10)("columnMode", "force")("footerHeight", 50)("rowHeight", "auto")("rows", ctx.projectRows)("selected", ctx.selected)("selectionType", ctx.selection);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 30)("sortable", false)("canAutoResize", false)("draggable", true)("resizeable", true)("headerCheckboxable", false)("checkboxable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.selectedHoliday);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.holidayRange)("rangePicker", _r22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("headerHeight", 50)("limit", 10)("columnMode", "force")("footerHeight", 50)("rowHeight", "auto")("rows", ctx.holidayRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("headerHeight", 50)("limit", 10)("columnMode", "force")("footerHeight", 50)("rowHeight", "auto")("rows", ctx.activeProjects)("selected", ctx.selected)("selectionType", ctx.selection);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 30)("sortable", false)("canAutoResize", false)("draggable", true)("resizeable", true)("headerCheckboxable", false)("checkboxable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.DataTableColumnCellDirective, _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_4__.Widget, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDateRangePicker, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
    styles: ["/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n\n/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n\nbody::before {\n  content: \"\";\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #e9ebee;\n  z-index: -1;\n}\n\n.main-wrapper {\n  margin-left: 230px;\n  padding: 30px 40px 60px;\n  margin-top: 60px;\n  position: relative;\n  flex: 1;\n  overflow: hidden;\n}\n.main-wrapper.menu-collapsed {\n  margin-left: 50px;\n}\n\n.custom-input {\n  position: relative;\n}\n\n.custom-input input {\n  border: 1px solid #ccc;\n  border-radius: 1px;\n  padding: 0.5rem;\n  padding-right: 2rem;\n  width: 100%;\n}\n\n.column-width-small {\n  width: 6%; /* Adjust as needed */\n}\n\n.column-width-large {\n  width: 13%; /* Adjust as needed */\n}\n\n.custom-button {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  background-color: #ffffff;\n}\n\n.rounded-input {\n  border: 1px solid #ccc;\n  border-radius: 4rem;\n  padding: 0.25rem;\n  padding-right: 2rem;\n  width: 100%;\n}\n\n.main {\n  height: 100%;\n  min-height: calc(100vh - 202px);\n}\n\n.footer {\n  padding-top: 20px;\n  padding-bottom: 10px;\n}\n.footer .footer-main {\n  display: inline-block;\n}\n.footer .footer-main .copyright {\n  color: #242424;\n  font-size: 14px;\n}\n.footer .footer-main .copyright a {\n  color: #242D3A;\n}\n.footer .footer-main .share {\n  padding-left: 5px;\n  margin: 0;\n}\n.footer .footer-main .share li {\n  list-style: none;\n  float: left;\n  margin-left: 10px;\n}\n.footer .footer-main .share li i {\n  cursor: pointer;\n  transition: all 0.1s ease;\n  color: white;\n  padding: 9px 9px 6px 9px;\n  font-size: 12px;\n  border-radius: 50%;\n  background-color: #242D3A;\n}\n.footer .footer-main .share li i.socicon-facebook {\n  background-color: #3b5998;\n}\n.footer .footer-main .share li i.socicon-twitter {\n  background-color: #55acee;\n}\n.footer .footer-main .share li i.socicon-instagram {\n  background-color: #8a3ab9;\n}\n.footer .footer-main .share li i.socicon-pinterest {\n  background-color: #c92228;\n}\n.footer .footer-main .share li i:hover {\n  opacity: 0.9;\n}\n.footer .created {\n  color: #242424;\n  font-size: 14px;\n}\n.footer .created i {\n  color: red;\n}\n\n.az-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 8;\n  background: rgba(36, 45, 58, 0.2);\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n\n.rounded-input {\n  border-radius: 0.5rem;\n}\n\n@media (max-width: 544px) {\n  .main-wrapper, .main-wrapper.menu-collapsed {\n    margin-left: 0;\n    padding: 30px 20px 70px;\n  }\n  .main {\n    min-height: calc(100vh - 240px);\n  }\n  .az-overlay {\n    display: block;\n  }\n  .footer .footer-main, .footer .created {\n    float: none;\n  }\n}\n@media (min-width: 544px) and (max-width: 768px) {\n  .main-wrapper, .main-wrapper.menu-collapsed {\n    margin-left: 50px;\n  }\n  .az-overlay {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc3R5bGVzL3NraW5zL19ibHVlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9TY2hlZHVsaW5nJTIwU29mdHdhcmUvc3JjL2FwcC9wYWdlcy90YWJsZXMvZHluYW1pYy10YWJsZXMvcGFnZXMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3BhZ2VzL3RhYmxlcy9keW5hbWljLXRhYmxlcy9wYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBQTtBQ2FBLG9CQUFBO0FBTUEsa0JBQUE7QUFJQSxpQkFBQTtBQUtBLGtCQUFBO0FBS0EsbUJBQUE7QUFLQSxnQkFBQTtBQVNBLHVCQUFBO0FBOENBO0VBQ0ksMlFBQUE7RUFDQSxhQUFBO0FDcEZKOztBRlhBLDhDQUFBO0FDYUEsb0JBQUE7QUFNQSxrQkFBQTtBQUlBLGlCQUFBO0FBS0Esa0JBQUE7QUFLQSxtQkFBQTtBQUtBLGdCQUFBO0FBU0EsdUJBQUE7QUE4Q0E7RUFDSSwyUUFBQTtFQUNBLGFBQUE7QUN2RUo7O0FDckJBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsbUJGVFk7RUVVWixXQUFBO0FEdUJKOztBQ3BCQTtFQUNJLGtCRmFZO0VFWlosdUJBQUE7RUFDQSxnQkZPWTtFRU5aLGtCQUFBO0VBQ0EsT0FBQTtFQUVBLGdCQUFBO0FEc0JKO0FDckJJO0VBQ0ksaUJBQUE7QUR1QlI7O0FDbkJBO0VBQ0ksa0JBQUE7QURzQko7O0FDbkJBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURzQko7O0FDbkJBO0VBQ0ksU0FBQSxFQUFBLHFCQUFBO0FEc0JKOztBQ25CQTtFQUNJLFVBQUEsRUFBQSxxQkFBQTtBRHNCSjs7QUNsQkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBRHFCSjs7QUNsQkE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURxQko7O0FDbEJBO0VBQ0ksWUFBQTtFQUVBLCtCQUFBO0FEb0JKOztBQ2hCQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QURtQko7QUNsQkk7RUFDSSxxQkFBQTtBRG9CUjtBQ25CUTtFQUNJLGNGNUVDO0VFNkVELGVBQUE7QURxQlo7QUNwQlk7RUFDSSxjSGpGSDtBRXVHYjtBQ25CUTtFQUNJLGlCQUFBO0VBQ0EsU0FBQTtBRHFCWjtBQ3BCWTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FEc0JoQjtBQ3JCZ0I7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkhsR1A7QUV5SGI7QUN0Qm9CO0VBQ0kseUJGckRQO0FDNkVqQjtBQ3RCb0I7RUFDSSx5QkZ2RFI7QUMrRWhCO0FDdEJvQjtFQUNJLHlCRnpETjtBQ2lGbEI7QUN0Qm9CO0VBQ0kseUJGM0ROO0FDbUZsQjtBQ3RCb0I7RUFDSSxZQUFBO0FEd0J4QjtBQ2xCSTtFQUNJLGNGckhLO0VFc0hMLGVBQUE7QURvQlI7QUNuQlE7RUFDSSxVQUFBO0FEcUJaOztBQ2hCQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQU0sT0FBQTtFQUFPLFNBQUE7RUFBVyxRQUFBO0VBQ3hCLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBRHNCSjs7QUNuQkE7RUFDSSxxQkFBQTtBRHNCSjs7QUNsQkE7RUFDSTtJQUNJLGNBQUE7SUFDQSx1QkFBQTtFRHFCTjtFQ25CRTtJQUNJLCtCQUFBO0VEcUJOO0VDbkJFO0lBQ0ksY0FBQTtFRHFCTjtFQ25CRTtJQUNJLFdBQUE7RURxQk47QUFDRjtBQ2xCQTtFQUNJO0lBQ0csaUJBQUE7RURvQkw7RUNsQkU7SUFDSSxjQUFBO0VEb0JOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKiBDb2xvcnMgKHJlY29tbWVuZGVkIHVzZSBIRVggY29sb3JzKSAqKioqLyBcclxuJG1haW4tY29sb3I6ICMyNDJEM0E7IFxyXG4kZGVmYXVsdC1jb2xvcjojZmZmOyBcclxuJGRhcmstY29sb3I6ICMwMDA7XHJcblxyXG4kYm9keS1iZy1ncmFkaWVudC1jb2xvci0xOiAjMWU1Nzk5O1xyXG4kYm9keS1iZy1ncmFkaWVudC1jb2xvci0yOiAgI2E1YzllNTtcclxuXHJcbiRzaWRlYmFyLWJnLWNvbG9yOiMzNDQxNTQ7XHJcbiRzaWRlYmFyLWl0ZW0tYWN0aXZlLWJnLWNvbG9yOiAjNjM3Q0EwOy8vICMwMDk5Y2M7XHJcblxyXG5cclxuJHByaW1hcnktY29sb3I6ICMwMjRhODg7XHJcbiRzdWNjZXNzLWNvbG9yOiAjMmQ5MjJkO1xyXG4kaW5mby1jb2xvcjogIzI0OGRhZDtcclxuJHdhcm5pbmctY29sb3I6ICNmNzlhMTc7XHJcbiRkYW5nZXItY29sb3I6ICNiZjE3MjU7IiwiQGltcG9ydCBcInNraW5zL2JsdWVcIjtcclxuXHJcbiRib2R5LWJnLWNvbG9yOiAjZTllYmVlO1xyXG4kdGV4dC1jb2xvcjogIzI0MjQyNDtcclxuJGdyYXktZGFyazogIzI5MmIyYztcclxuJGdyYXk6ICM1NTU7XHJcbiRncmF5LWxpZ2h0OiAjY2NjO1xyXG4kZ3JheS1saWdodGVyOiAjZWNlZWVmO1xyXG5cclxuJHRhYmxlLWJnLWFjdGl2ZTogcmdiYSgjMDAwLC4wNzUpO1xyXG4kdGFibGUtYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRncmF5LWxpZ2h0ZXI7XHJcblxyXG4vKioqKiBBcHAgcm9vdHMgKioqKi9cclxuJGFzc2V0cy1yb290OiAnfi9hc3NldHMvJztcclxuJGltYWdlcy1yb290OiAkYXNzZXRzLXJvb3QgKyAnaW1nLyc7XHJcbiRmb250cy1yb290OiAkYXNzZXRzLXJvb3QgKyAnZm9udHMvJztcclxuXHJcblxyXG4vKioqKiBHZW5lcmFsICoqKiovXHJcbiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuLyoqKiogTmF2YmFyICoqKiovXHJcbiRuYXZiYXItdGV4dC1jb2xvcjogJGRlZmF1bHQtY29sb3I7XHJcbiRuYXZiYXItaGVpZ2h0OiA2MHB4O1xyXG5cclxuXHJcbi8qKioqIFNpZGViYXIgKioqKi9cclxuJHNpZGViYXItd2lkdGg6IDIzMHB4O1xyXG5cclxuXHJcblxyXG4vKioqKiBQcm9ncmVzcyAqKioqL1xyXG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogMDtcclxuJHByb2dyZXNzLWhlaWdodDogMjBweDtcclxuXHJcblxyXG4vKioqKiBGb250cyAqKioqL1xyXG4kZm9udC10aGluOiAxMDA7XHJcbiRmb250LWxpZ2h0OiAzMDA7XHJcbiRmb250LW5vcm1hbDogNDAwO1xyXG4kZm9udC1ib2xkOiA1MDA7XHJcbiRmb250LWJvbGRlcjogNzAwO1xyXG4kZm9udC11bHRyYUJvbGQ6IDkwMDtcclxuXHJcblxyXG4vKioqKiBTb2NpYWwgaWNvbnMgKioqKi9cclxuJGZhY2Vib29rLWNvbG9yOiAjM2I1OTk4O1xyXG4kdHdpdHRlci1jb2xvcjogIzU1YWNlZTtcclxuJGluc3RhZ3JhbS1jb2xvcjogIzhhM2FiOTtcclxuJHBpbnRlcmVzdC1jb2xvcjogI2M5MjIyODsgXHJcbiRnb29nbGUtY29sb3I6ICNkZDRiMzk7XHJcbiRsaW5rZWRpbi1jb2xvcjogIzAxNzdCNTtcclxuJGdpdGh1Yi1jb2xvcjogIzZiNmI2YjtcclxuJHN0YWNrb3ZlcmZsb3ctY29sb3I6ICMyRjk2RTg7XHJcbiRkcmliYmxlLWNvbG9yOiAjRjI2Nzk4O1xyXG4kYmVoYWNlLWNvbG9yOiAjMDA5M0ZBO1xyXG5cclxuLy8tLS0tLS0tLWZvciBwcmV2ZW50IGF3ZXNvbWUtYm9vdHN0cmFwLWNoZWNrYm94IGVycm9ycy0tLS0tLS0tLVxyXG4vL0BpbXBvcnQgXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcbi8vQGltcG9ydCBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnNcIjtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogcmdiYSgjMDAwLC4xNSk7XHJcbiRlbmFibGUtdHJhbnNpdGlvbnM6IHRydWU7XHJcbiRpbnB1dC1jb2xvcjogJGdyYXk7XHJcbiRpbnB1dC1iZy1kaXNhYmxlZDogJGdyYXktbGlnaHRlcjtcclxuJGJyYW5kLXByaW1hcnk6ICRwcmltYXJ5LWNvbG9yO1xyXG4kYnJhbmQtc3VjY2VzczogJHN1Y2Nlc3MtY29sb3I7XHJcbiRicmFuZC1pbmZvOiAkaW5mby1jb2xvcjtcclxuJGJyYW5kLXdhcm5pbmc6ICR3YXJuaW5nLWNvbG9yO1xyXG4kYnJhbmQtZGFuZ2VyOiAkZGFuZ2VyLWNvbG9yO1xyXG4kYnJhbmQtaW52ZXJzZTogJGdyYXktZGFyaztcclxuXHJcblxyXG5cclxuXHJcbi8vU2V0IHZhcmlhYmxlcyB0byBiZSBhY2Nlc3NpYmxlIGZvciBKU1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtdG8tanMvc2Fzcy9zYXNzLXRvLWpzXCI7XHJcblxyXG4kdmFyaWFibGVzTWFwOiAoIFxyXG4gIG1haW4tY29sb3I6ICRtYWluLWNvbG9yLFxyXG4gIGRlZmF1bHQtY29sb3I6ICRkZWZhdWx0LWNvbG9yLFxyXG4gIGRhcmstY29sb3I6ICRkYXJrLWNvbG9yLFxyXG4gIHByaW1hcnktY29sb3I6ICRwcmltYXJ5LWNvbG9yLFxyXG4gIHN1Y2Nlc3MtY29sb3I6ICRzdWNjZXNzLWNvbG9yLFxyXG4gIHdhcm5pbmctY29sb3I6ICR3YXJuaW5nLWNvbG9yLFxyXG4gIGRhbmdlci1jb2xvcjogJGRhbmdlci1jb2xvcixcclxuICBpbmZvLWNvbG9yOiAkaW5mby1jb2xvcixcclxuICBzaWRlYmFyLWJnLWNvbG9yOiAkc2lkZWJhci1iZy1jb2xvcixcclxuICBncmF5OiAkZ3JheSxcclxuICBncmF5LWxpZ2h0OiAkZ3JheS1saWdodFxyXG4pO1xyXG5cclxuYm9keTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogc2Fzc1RvSnMoJHZhcmlhYmxlc01hcCk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4iLCIvKioqKiBDb2xvcnMgKHJlY29tbWVuZGVkIHVzZSBIRVggY29sb3JzKSAqKioqL1xuLyoqKiogQXBwIHJvb3RzICoqKiovXG4vKioqKiBHZW5lcmFsICoqKiovXG4vKioqKiBOYXZiYXIgKioqKi9cbi8qKioqIFNpZGViYXIgKioqKi9cbi8qKioqIFByb2dyZXNzICoqKiovXG4vKioqKiBGb250cyAqKioqL1xuLyoqKiogU29jaWFsIGljb25zICoqKiovXG5ib2R5OjphZnRlciB7XG4gIGNvbnRlbnQ6ICd7XCJtYWluLWNvbG9yXCI6XCIjMjQyRDNBXCIsXCJkZWZhdWx0LWNvbG9yXCI6XCIjZmZmXCIsXCJkYXJrLWNvbG9yXCI6XCIjMDAwXCIsXCJwcmltYXJ5LWNvbG9yXCI6XCIjMDI0YTg4XCIsXCJzdWNjZXNzLWNvbG9yXCI6XCIjMmQ5MjJkXCIsXCJ3YXJuaW5nLWNvbG9yXCI6XCIjZjc5YTE3XCIsXCJkYW5nZXItY29sb3JcIjpcIiNiZjE3MjVcIixcImluZm8tY29sb3JcIjpcIiMyNDhkYWRcIixcInNpZGViYXItYmctY29sb3JcIjpcIiMzNDQxNTRcIixcImdyYXlcIjpcIiM1NTVcIixcImdyYXktbGlnaHRcIjpcIiNjY2NcIn0nO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKioqKiBDb2xvcnMgKHJlY29tbWVuZGVkIHVzZSBIRVggY29sb3JzKSAqKioqL1xuLyoqKiogQXBwIHJvb3RzICoqKiovXG4vKioqKiBHZW5lcmFsICoqKiovXG4vKioqKiBOYXZiYXIgKioqKi9cbi8qKioqIFNpZGViYXIgKioqKi9cbi8qKioqIFByb2dyZXNzICoqKiovXG4vKioqKiBGb250cyAqKioqL1xuLyoqKiogU29jaWFsIGljb25zICoqKiovXG5ib2R5OjphZnRlciB7XG4gIGNvbnRlbnQ6ICd7XCJtYWluLWNvbG9yXCI6XCIjMjQyRDNBXCIsXCJkZWZhdWx0LWNvbG9yXCI6XCIjZmZmXCIsXCJkYXJrLWNvbG9yXCI6XCIjMDAwXCIsXCJwcmltYXJ5LWNvbG9yXCI6XCIjMDI0YTg4XCIsXCJzdWNjZXNzLWNvbG9yXCI6XCIjMmQ5MjJkXCIsXCJ3YXJuaW5nLWNvbG9yXCI6XCIjZjc5YTE3XCIsXCJkYW5nZXItY29sb3JcIjpcIiNiZjE3MjVcIixcImluZm8tY29sb3JcIjpcIiMyNDhkYWRcIixcInNpZGViYXItYmctY29sb3JcIjpcIiMzNDQxNTRcIixcImdyYXlcIjpcIiM1NTVcIixcImdyYXktbGlnaHRcIjpcIiNjY2NcIn0nO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5ib2R5OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogI2U5ZWJlZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5tYWluLXdyYXBwZXIge1xuICBtYXJnaW4tbGVmdDogMjMwcHg7XG4gIHBhZGRpbmc6IDMwcHggNDBweCA2MHB4O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbi13cmFwcGVyLm1lbnUtY29sbGFwc2VkIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5jdXN0b20taW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jdXN0b20taW5wdXQgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb2x1bW4td2lkdGgtc21hbGwge1xuICB3aWR0aDogNiU7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cbn1cblxuLmNvbHVtbi13aWR0aC1sYXJnZSB7XG4gIHdpZHRoOiAxMyU7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cbn1cblxuLmN1c3RvbS1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLnJvdW5kZWQtaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDJweCk7XG59XG5cbi5mb290ZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uZm9vdGVyIC5mb290ZXItbWFpbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5mb290ZXIgLmZvb3Rlci1tYWluIC5jb3B5cmlnaHQge1xuICBjb2xvcjogIzI0MjQyNDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZvb3RlciAuZm9vdGVyLW1haW4gLmNvcHlyaWdodCBhIHtcbiAgY29sb3I6ICMyNDJEM0E7XG59XG4uZm9vdGVyIC5mb290ZXItbWFpbiAuc2hhcmUge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgbWFyZ2luOiAwO1xufVxuLmZvb3RlciAuZm9vdGVyLW1haW4gLnNoYXJlIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmZvb3RlciAuZm9vdGVyLW1haW4gLnNoYXJlIGxpIGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOXB4IDlweCA2cHggOXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MkQzQTtcbn1cbi5mb290ZXIgLmZvb3Rlci1tYWluIC5zaGFyZSBsaSBpLnNvY2ljb24tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xufVxuLmZvb3RlciAuZm9vdGVyLW1haW4gLnNoYXJlIGxpIGkuc29jaWNvbi10d2l0dGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZTtcbn1cbi5mb290ZXIgLmZvb3Rlci1tYWluIC5zaGFyZSBsaSBpLnNvY2ljb24taW5zdGFncmFtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhM2FiOTtcbn1cbi5mb290ZXIgLmZvb3Rlci1tYWluIC5zaGFyZSBsaSBpLnNvY2ljb24tcGludGVyZXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5MjIyODtcbn1cbi5mb290ZXIgLmZvb3Rlci1tYWluIC5zaGFyZSBsaSBpOmhvdmVyIHtcbiAgb3BhY2l0eTogMC45O1xufVxuLmZvb3RlciAuY3JlYXRlZCB7XG4gIGNvbG9yOiAjMjQyNDI0O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZm9vdGVyIC5jcmVhdGVkIGkge1xuICBjb2xvcjogcmVkO1xufVxuXG4uYXotb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM2LCA0NSwgNTgsIDAuMik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yb3VuZGVkLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTQ0cHgpIHtcbiAgLm1haW4td3JhcHBlciwgLm1haW4td3JhcHBlci5tZW51LWNvbGxhcHNlZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDcwcHg7XG4gIH1cbiAgLm1haW4ge1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDBweCk7XG4gIH1cbiAgLmF6LW92ZXJsYXkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5mb290ZXIgLmZvb3Rlci1tYWluLCAuZm9vdGVyIC5jcmVhdGVkIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU0NHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4td3JhcHBlciwgLm1haW4td3JhcHBlci5tZW51LWNvbGxhcHNlZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIH1cbiAgLmF6LW92ZXJsYXkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL3N0eWxlcy9taXhpbnNcIjtcclxuXHJcbmJvZHk6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgLy9AaW5jbHVkZSB0aGVtZS1iZygkYm9keS1iZy1ncmFkaWVudC1jb2xvci0xLCAkYm9keS1iZy1ncmFkaWVudC1jb2xvci0yKTtcclxuICAgIGJhY2tncm91bmQ6ICRib2R5LWJnLWNvbG9yOyAvLyAjNWI2ZThhOyAgICAgIFxyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXJ7IFxyXG4gICAgbWFyZ2luLWxlZnQ6ICRzaWRlYmFyLXdpZHRoO1xyXG4gICAgcGFkZGluZzogMzBweCA0MHB4IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAkbmF2YmFyLWhlaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICAvLyBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgJi5tZW51LWNvbGxhcHNlZHsgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXN0b20taW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY3VzdG9tLWlucHV0IGlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb2x1bW4td2lkdGgtc21hbGwge1xyXG4gICAgd2lkdGg6IDYlOyAvKiBBZGp1c3QgYXMgbmVlZGVkICovXHJcbn1cclxuXHJcbi5jb2x1bW4td2lkdGgtbGFyZ2Uge1xyXG4gICAgd2lkdGg6IDEzJTsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xyXG59XHJcbiAgXHJcblxyXG4uY3VzdG9tLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ucm91bmRlZC1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHJlbTtcclxuICAgIHBhZGRpbmc6IC4yNXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haW57XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgIC8vIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIwMnB4KTsgICBcclxufVxyXG5cclxuXHJcbi5mb290ZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLmZvb3Rlci1tYWlue1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAuY29weXJpZ2h0e1xyXG4gICAgICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2hhcmV7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggOXB4IDZweCA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAmLnNvY2ljb24tZmFjZWJvb2t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmYWNlYm9vay1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi5zb2NpY29uLXR3aXR0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0d2l0dGVyLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLnNvY2ljb24taW5zdGFncmFte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5zdGFncmFtLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLnNvY2ljb24tcGludGVyZXN0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGludGVyZXN0LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyeyAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45OyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNyZWF0ZWR7XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBpe1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkOyBcclxuICAgICAgICB9XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbi5hei1vdmVybGF5e1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOjA7bGVmdDowO2JvdHRvbTogMDsgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiA4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgkbWFpbi1jb2xvciwgMC4yKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIGRpc3BsYXk6IG5vbmU7ICAgXHJcbn1cclxuXHJcbi5yb3VuZGVkLWlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDRweCkgeyBcclxuICAgIC5tYWluLXdyYXBwZXIsIC5tYWluLXdyYXBwZXIubWVudS1jb2xsYXBzZWR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAyMHB4IDcwcHg7XHJcbiAgICB9IFxyXG4gICAgLm1haW57XHJcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDI0MHB4KTsgICBcclxuICAgIH1cclxuICAgIC5hei1vdmVybGF5e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmZvb3RlciAuZm9vdGVyLW1haW4sIC5mb290ZXIgLmNyZWF0ZWR7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NDRweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgLm1haW4td3JhcHBlciwgLm1haW4td3JhcHBlci5tZW51LWNvbGxhcHNlZHtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgfSBcclxuICAgIC5hei1vdmVybGF5e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59IFxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 72979:
/*!********************************************************************************!*\
  !*** ./src/app/pages/tables/dynamic-tables/edit-table/edit-table.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTableComponent": () => (/* binding */ EditTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 15874);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var src_app_logic_services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/logic/services/users.service */ 95877);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);








class EditTableComponent {
  constructor(data, dialogRef, toastr, datePipe, cdr, userService) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.toastr = toastr;
    this.datePipe = datePipe;
    this.cdr = cdr;
    this.userService = userService;
    this.projectTypes = [];
    this.update = {};
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
  }
  ngOnInit() {}
  submit() {
    let TaskList = {
      task: this.selectedTask,
      type: this.selectedType
    };
    this.userService.addTaskList(TaskList).subscribe(response => {
      console.log('Project status updated successfully:', response);
      this.dialogRef.close({
        result: true
      });
    }, error => {
      console.error('Error updating project status:', error);
    });
  }
  cancel() {
    this.dialogRef.close({
      result: false
    });
  }
  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
  static #_ = this.ɵfac = function EditTableComponent_Factory(t) {
    return new (t || EditTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_logic_services_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: EditTableComponent,
    selectors: [["az-edit-table"]],
    decls: 18,
    vars: 1,
    consts: [[1, "row"], [1, "col"], [1, "card"], [1, "card-header"], [1, "text-uppercase"], [1, "card-body", "widget-body", "row", "mbm-20", 2, "height", "100%"], [1, "col-md-6", "col-12", "bottom-15"], [1, "col-md-12", "col-12", "bottom-15"], ["id", "input-8", 1, "rounded-input", "form-control-lg", 3, "ngModel", "ngModelChange"], [1, "col-md-6", "col-12", "d-flex", "flex-column", "align-items-center", "justify-content-center", "text-center"], [1, "custom-button", 3, "click"], [1, "custom-button", 2, "margin-top", "30px", 3, "click"]],
    template: function EditTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 0)(9, "div", 7)(10, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Enter Project Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditTableComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.selectedTask = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9)(14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditTableComponent_Template_button_click_14_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditTableComponent_Template_button_click_16_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedTask);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel],
    styles: [".mat-dialog-container[_ngcontent-%COMP%] {\n  max-height: 90% !important; \n}\n\n.dialog-content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: calc(100vh - 200px); \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdGFibGVzL2R5bmFtaWMtdGFibGVzL2VkaXQtdGFibGUvZWRpdC10YWJsZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL1NjaGVkdWxpbmclMjBTb2Z0d2FyZS9zcmMvYXBwL3BhZ2VzL3RhYmxlcy9keW5hbWljLXRhYmxlcy9lZGl0LXRhYmxlL2VkaXQtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQSxFQUFBLCtCQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLCtCQUFBLEVBQUEsK0JBQUE7QUNDSiIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cclxuICB9XHJcbiAgXHJcbiAgLmRpYWxvZy1jb250ZW50IHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpOyAvKiBBZGp1c3QgdGhlIHZhbHVlIGFzIG5lZWRlZCAqL1xyXG4gIH0iLCIubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cbn1cblxuLmRpYWxvZy1jb250ZW50IHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 24272:
/*!***********************************************!*\
  !*** ./src/app/pages/tables/tables.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesModule": () => (/* binding */ TablesModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 77070);
/* harmony import */ var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/directives/directives.module */ 19212);
/* harmony import */ var _basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-tables/basic-tables.component */ 52431);
/* harmony import */ var _dynamic_tables_dynamic_tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-tables/dynamic-tables.component */ 66971);
/* harmony import */ var ng_multiselect_dropdown3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown3 */ 24273);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-select-dropdown */ 63277);
/* harmony import */ var _dynamic_tables_edit_table_edit_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-tables/edit-table/edit-table.component */ 72979);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 84853);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var mat_timepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! mat-timepicker */ 61656);
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-material-timepicker */ 81016);
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ 63115);
/* harmony import */ var src_app_logic_services_epoch_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/logic/services/epoch.pipe */ 69015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);





















const routes = [{
  path: '',
  redirectTo: 'dynamic-tables',
  pathMatch: 'full'
}, {
  path: 'basic-tables',
  component: _basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_1__.BasicTablesComponent,
  data: {
    breadcrumb: 'Basic'
  }
}, {
  path: 'dynamic-tables',
  component: _dynamic_tables_dynamic_tables_component__WEBPACK_IMPORTED_MODULE_2__.DynamicTablesComponent,
  data: {
    breadcrumb: 'Dynamic'
  }
}];
class TablesModule {
  static #_ = this.ɵfac = function TablesModule_Factory(t) {
    return new (t || TablesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: TablesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_8__.TimepickerModule.forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.NgxDatatableModule, ng_multiselect_dropdown3__WEBPACK_IMPORTED_MODULE_10__.NgMultiselectDropdown3Module, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule, ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_11__.SelectDropDownModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__.NgxMaterialTimepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatNativeDateModule, mat_timepicker__WEBPACK_IMPORTED_MODULE_17__.MatTimepickerModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild(routes)]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TablesModule, {
    declarations: [_basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_1__.BasicTablesComponent, _dynamic_tables_dynamic_tables_component__WEBPACK_IMPORTED_MODULE_2__.DynamicTablesComponent, _dynamic_tables_edit_table_edit_table_component__WEBPACK_IMPORTED_MODULE_3__.EditTableComponent, src_app_logic_services_epoch_pipe__WEBPACK_IMPORTED_MODULE_4__.EpochToDatePipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_8__.TimepickerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.NgxDatatableModule, ng_multiselect_dropdown3__WEBPACK_IMPORTED_MODULE_10__.NgMultiselectDropdown3Module, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule, ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_11__.SelectDropDownModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__.NgxMaterialTimepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatNativeDateModule, mat_timepicker__WEBPACK_IMPORTED_MODULE_17__.MatTimepickerModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
  });
})();

/***/ }),

/***/ 95864:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/QueueAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueueAction": () => (/* binding */ QueueAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 75198);

class QueueAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  schedule(state, delay = 0) {
    if (delay > 0) {
      return super.schedule(state, delay);
    }
    this.delay = delay;
    this.state = state;
    this.scheduler.flush(this);
    return this;
  }
  execute(state, delay) {
    return delay > 0 || this.closed ? super.execute(state, delay) : this._execute(state, delay);
  }
  requestAsyncId(scheduler, id, delay = 0) {
    if (delay != null && delay > 0 || delay == null && this.delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }
    scheduler.flush(this);
    return 0;
  }
}

/***/ }),

/***/ 14615:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/QueueScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueueScheduler": () => (/* binding */ QueueScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 75744);

class QueueScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {}

/***/ }),

/***/ 95650:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/queue.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queue": () => (/* binding */ queue),
/* harmony export */   "queueScheduler": () => (/* binding */ queueScheduler)
/* harmony export */ });
/* harmony import */ var _QueueAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueueAction */ 95864);
/* harmony import */ var _QueueScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueueScheduler */ 14615);


const queueScheduler = new _QueueScheduler__WEBPACK_IMPORTED_MODULE_0__.QueueScheduler(_QueueAction__WEBPACK_IMPORTED_MODULE_1__.QueueAction);
const queue = queueScheduler;

/***/ }),

/***/ 19804:
/*!***********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/mini-ngrx/fesm2022/ngx-bootstrap-mini-ngrx.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiniState": () => (/* binding */ MiniState),
/* harmony export */   "MiniStore": () => (/* binding */ MiniStore)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 95650);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8728);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 24503);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 98977);


class MiniState extends rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject {
  constructor(_initialState, actionsDispatcher$, reducer) {
    super(_initialState);
    const actionInQueue$ = actionsDispatcher$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.observeOn)(rxjs__WEBPACK_IMPORTED_MODULE_2__.queueScheduler));
    const state$ = actionInQueue$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.scan)((state, action) => {
      if (!action) {
        return state;
      }
      return reducer(state, action);
    }, _initialState));
    state$.subscribe(value => this.next(value));
  }
}

/**
 * @copyright ngrx
 */
class MiniStore extends rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable {
  constructor(_dispatcher,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _reducer,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state$) {
    super();
    this._dispatcher = _dispatcher;
    this._reducer = _reducer;
    this.source = state$;
  }
  select(pathOrMapFn) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mapped$ = this.source?.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(pathOrMapFn)) || new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(pathOrMapFn));
    return mapped$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)());
  }
  lift(operator) {
    const store = new MiniStore(this._dispatcher, this._reducer, this);
    store.operator = operator;
    return store;
  }
  dispatch(action) {
    this._dispatcher.next(action);
  }
  next(action) {
    this._dispatcher.next(action);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error(err) {
    this._dispatcher.error(err);
  }
  complete() {
    /*noop*/
  }
}

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 63115:
/*!*************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/timepicker/fesm2022/ngx-bootstrap-timepicker.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimepickerActions": () => (/* binding */ TimepickerActions),
/* harmony export */   "TimepickerComponent": () => (/* binding */ TimepickerComponent),
/* harmony export */   "TimepickerConfig": () => (/* binding */ TimepickerConfig),
/* harmony export */   "TimepickerModule": () => (/* binding */ TimepickerModule),
/* harmony export */   "TimepickerStore": () => (/* binding */ TimepickerStore)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/mini-ngrx */ 19804);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);







function TimepickerComponent_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0\xA0\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TimepickerComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td")(1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_td_7_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.changeMinutes(ctx_r18.minuteStep));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r1.canIncrementMinutes || !ctx_r1.isEditable);
  }
}
function TimepickerComponent_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TimepickerComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td")(1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_td_9_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.changeSeconds(ctx_r20.secondsStep));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r3.canIncrementSeconds || !ctx_r3.isEditable);
  }
}
function TimepickerComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0\xA0\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TimepickerComponent_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
  }
}
function TimepickerComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0:\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TimepickerComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4)(1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("wheel", function TimepickerComponent_td_16_Template_input_wheel_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r22.prevDef($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.changeMinutes(ctx_r22.minuteStep * ctx_r22.wheelSign($event), "wheel"));
    })("keydown.ArrowUp", function TimepickerComponent_td_16_Template_input_keydown_ArrowUp_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r24.changeMinutes(ctx_r24.minuteStep, "key"));
    })("keydown.ArrowDown", function TimepickerComponent_td_16_Template_input_keydown_ArrowDown_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r25.changeMinutes(-ctx_r25.minuteStep, "key"));
    })("change", function TimepickerComponent_td_16_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r26.updateMinutes($event.target));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-error", ctx_r7.invalidMinutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r7.invalidMinutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r7.minutesPlaceholder)("readonly", ctx_r7.readonlyInput)("disabled", ctx_r7.disabled)("value", ctx_r7.minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r7.labelMinutes);
  }
}
function TimepickerComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0:\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TimepickerComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4)(1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("wheel", function TimepickerComponent_td_18_Template_input_wheel_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r27.prevDef($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.changeSeconds(ctx_r27.secondsStep * ctx_r27.wheelSign($event), "wheel"));
    })("keydown.ArrowUp", function TimepickerComponent_td_18_Template_input_keydown_ArrowUp_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.changeSeconds(ctx_r29.secondsStep, "key"));
    })("keydown.ArrowDown", function TimepickerComponent_td_18_Template_input_keydown_ArrowDown_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r30.changeSeconds(-ctx_r30.secondsStep, "key"));
    })("change", function TimepickerComponent_td_18_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r31.updateSeconds($event.target));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-error", ctx_r9.invalidSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r9.invalidSeconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r9.secondsPlaceholder)("readonly", ctx_r9.readonlyInput)("disabled", ctx_r9.disabled)("value", ctx_r9.seconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r9.labelSeconds);
  }
}
function TimepickerComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0\xA0\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TimepickerComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td")(1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_td_20_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r32.toggleMeridian());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.meridian, " ");
  }
}
function TimepickerComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0\xA0\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TimepickerComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td")(1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_td_26_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r34.changeMinutes(-ctx_r34.minuteStep));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r13.canDecrementMinutes || !ctx_r13.isEditable);
  }
}
function TimepickerComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TimepickerComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td")(1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_td_28_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r36.changeSeconds(-ctx_r36.secondsStep));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r15.canDecrementSeconds || !ctx_r15.isEditable);
  }
}
function TimepickerComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0\xA0\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TimepickerComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
  }
}
class TimepickerActions {
  static #_ = this.WRITE_VALUE = '[timepicker] write value from ng model';
  static #_2 = this.CHANGE_HOURS = '[timepicker] change hours';
  static #_3 = this.CHANGE_MINUTES = '[timepicker] change minutes';
  static #_4 = this.CHANGE_SECONDS = '[timepicker] change seconds';
  static #_5 = this.SET_TIME_UNIT = '[timepicker] set time unit';
  static #_6 = this.UPDATE_CONTROLS = '[timepicker] update controls';
  writeValue(value) {
    return {
      type: TimepickerActions.WRITE_VALUE,
      payload: value
    };
  }
  changeHours(event) {
    return {
      type: TimepickerActions.CHANGE_HOURS,
      payload: event
    };
  }
  changeMinutes(event) {
    return {
      type: TimepickerActions.CHANGE_MINUTES,
      payload: event
    };
  }
  changeSeconds(event) {
    return {
      type: TimepickerActions.CHANGE_SECONDS,
      payload: event
    };
  }
  setTime(value) {
    return {
      type: TimepickerActions.SET_TIME_UNIT,
      payload: value
    };
  }
  updateControls(value) {
    return {
      type: TimepickerActions.UPDATE_CONTROLS,
      payload: value
    };
  }
  static #_7 = this.ɵfac = function TimepickerActions_Factory(t) {
    return new (t || TimepickerActions)();
  };
  static #_8 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TimepickerActions,
    factory: TimepickerActions.ɵfac,
    providedIn: 'platform'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimepickerActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'platform'
    }]
  }], null, null);
})();
const dex = 10;
const hoursPerDay = 24;
const hoursPerDayHalf = 12;
const minutesPerHour = 60;
const secondsPerMinute = 60;
function isValidDate(value) {
  if (!value) {
    return false;
  }
  if (value instanceof Date && isNaN(value.getHours())) {
    return false;
  }
  if (typeof value === 'string') {
    return isValidDate(new Date(value));
  }
  return true;
}
function isValidLimit(controls, newDate) {
  if (controls.min && newDate < controls.min) {
    return false;
  }
  if (controls.max && newDate > controls.max) {
    return false;
  }
  return true;
}
function toNumber(value) {
  if (typeof value === 'undefined') {
    return NaN;
  }
  if (typeof value === 'number') {
    return value;
  }
  return parseInt(value, dex);
}
function isNumber(value) {
  return !isNaN(toNumber(value));
}
function parseHours(value, isPM = false) {
  const hour = toNumber(value);
  if (isNaN(hour) || hour < 0 || hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
    return NaN;
  }
  return hour;
}
function parseMinutes(value) {
  const minute = toNumber(value);
  if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
    return NaN;
  }
  return minute;
}
function parseSeconds(value) {
  const seconds = toNumber(value);
  if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
    return NaN;
  }
  return seconds;
}
function parseTime(value) {
  if (typeof value === 'string') {
    return new Date(value);
  }
  return value;
}
function changeTime(value, diff) {
  if (!value) {
    return changeTime(createDate(new Date(), 0, 0, 0), diff);
  }
  if (!diff) {
    return value;
  }
  let hour = value.getHours();
  let minutes = value.getMinutes();
  let seconds = value.getSeconds();
  if (diff.hour) {
    hour = hour + toNumber(diff.hour);
  }
  if (diff.minute) {
    minutes = minutes + toNumber(diff.minute);
  }
  if (diff.seconds) {
    seconds = seconds + toNumber(diff.seconds);
  }
  return createDate(value, hour, minutes, seconds);
}
function setTime(value, opts) {
  let hour = parseHours(opts.hour);
  const minute = parseMinutes(opts.minute);
  const seconds = parseSeconds(opts.seconds) || 0;
  if (opts.isPM && hour !== 12) {
    hour += hoursPerDayHalf;
  }
  if (!value) {
    if (!isNaN(hour) && !isNaN(minute)) {
      return createDate(new Date(), hour, minute, seconds);
    }
    return value;
  }
  if (isNaN(hour) || isNaN(minute)) {
    return value;
  }
  return createDate(value, hour, minute, seconds);
}
function createDate(value, hours, minutes, seconds) {
  const newValue = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
  // #3139 ensure date part remains unchanged
  newValue.setFullYear(value.getFullYear());
  newValue.setMonth(value.getMonth());
  newValue.setDate(value.getDate());
  return newValue;
}
function padNumber(value) {
  const _value = value.toString();
  if (_value.length > 1) {
    return _value;
  }
  return `0${_value}`;
}
function isHourInputValid(hours, isPM) {
  return !isNaN(parseHours(hours, isPM));
}
function isMinuteInputValid(minutes) {
  return !isNaN(parseMinutes(minutes));
}
function isSecondInputValid(seconds) {
  return !isNaN(parseSeconds(seconds));
}
function isInputLimitValid(diff, max, min) {
  const newDate = setTime(new Date(), diff);
  if (!newDate) {
    return false;
  }
  if (max && newDate > max) {
    return false;
  }
  if (min && newDate < min) {
    return false;
  }
  return true;
}
function isOneOfDatesEmpty(hours, minutes, seconds) {
  return hours.length === 0 || minutes.length === 0 || seconds.length === 0;
}
function isInputValid(hours, minutes = '0', seconds = '0', isPM) {
  return isHourInputValid(hours, isPM) && isMinuteInputValid(minutes) && isSecondInputValid(seconds);
}
function canChangeValue(state, event) {
  if (state.readonlyInput || state.disabled) {
    return false;
  }
  if (event) {
    if (event.source === 'wheel' && !state.mousewheel) {
      return false;
    }
    if (event.source === 'key' && !state.arrowkeys) {
      return false;
    }
  }
  return true;
}
function canChangeHours(event, controls) {
  if (!event.step) {
    return false;
  }
  if (event.step > 0 && !controls.canIncrementHours) {
    return false;
  }
  if (event.step < 0 && !controls.canDecrementHours) {
    return false;
  }
  return true;
}
function canChangeMinutes(event, controls) {
  if (!event.step) {
    return false;
  }
  if (event.step > 0 && !controls.canIncrementMinutes) {
    return false;
  }
  if (event.step < 0 && !controls.canDecrementMinutes) {
    return false;
  }
  return true;
}
function canChangeSeconds(event, controls) {
  if (!event.step) {
    return false;
  }
  if (event.step > 0 && !controls.canIncrementSeconds) {
    return false;
  }
  if (event.step < 0 && !controls.canDecrementSeconds) {
    return false;
  }
  return true;
}
function getControlsValue(state) {
  const {
    hourStep,
    minuteStep,
    secondsStep,
    readonlyInput,
    disabled,
    mousewheel,
    arrowkeys,
    showSpinners,
    showMeridian,
    showSeconds,
    meridians,
    min,
    max
  } = state;
  return {
    hourStep,
    minuteStep,
    secondsStep,
    readonlyInput,
    disabled,
    mousewheel,
    arrowkeys,
    showSpinners,
    showMeridian,
    showSeconds,
    meridians,
    min,
    max
  };
}
function timepickerControls(value, state) {
  const hoursPerDay = 24;
  const hoursPerDayHalf = 12;
  const {
    min,
    max,
    hourStep,
    minuteStep,
    secondsStep,
    showSeconds
  } = state;
  const res = {
    canIncrementHours: true,
    canIncrementMinutes: true,
    canIncrementSeconds: true,
    canDecrementHours: true,
    canDecrementMinutes: true,
    canDecrementSeconds: true,
    canToggleMeridian: true
  };
  if (!value) {
    return res;
  }
  // compare dates
  if (max) {
    const _newHour = changeTime(value, {
      hour: hourStep
    });
    res.canIncrementHours = max > _newHour && value.getHours() + hourStep < hoursPerDay;
    if (!res.canIncrementHours) {
      const _newMinutes = changeTime(value, {
        minute: minuteStep
      });
      res.canIncrementMinutes = showSeconds ? max > _newMinutes : max >= _newMinutes;
    }
    if (!res.canIncrementMinutes) {
      const _newSeconds = changeTime(value, {
        seconds: secondsStep
      });
      res.canIncrementSeconds = max >= _newSeconds;
    }
    if (value.getHours() < hoursPerDayHalf) {
      res.canToggleMeridian = changeTime(value, {
        hour: hoursPerDayHalf
      }) < max;
    }
  }
  if (min) {
    const _newHour = changeTime(value, {
      hour: -hourStep
    });
    res.canDecrementHours = min < _newHour;
    if (!res.canDecrementHours) {
      const _newMinutes = changeTime(value, {
        minute: -minuteStep
      });
      res.canDecrementMinutes = showSeconds ? min < _newMinutes : min <= _newMinutes;
    }
    if (!res.canDecrementMinutes) {
      const _newSeconds = changeTime(value, {
        seconds: -secondsStep
      });
      res.canDecrementSeconds = min <= _newSeconds;
    }
    if (value.getHours() >= hoursPerDayHalf) {
      res.canToggleMeridian = changeTime(value, {
        hour: -hoursPerDayHalf
      }) > min;
    }
  }
  return res;
}

/** Provides default configuration values for timepicker */
class TimepickerConfig {
  constructor() {
    /** hours change step */
    this.hourStep = 1;
    /** minutes change step */
    this.minuteStep = 5;
    /** seconds changes step */
    this.secondsStep = 10;
    /** if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM */
    this.showMeridian = true;
    /** meridian labels based on locale */
    this.meridians = ['AM', 'PM'];
    /** if true hours and minutes fields will be readonly */
    this.readonlyInput = false;
    /** if true hours and minutes fields will be disabled */
    this.disabled = false;
    /** if true emptyTime is not marked as invalid */
    this.allowEmptyTime = false;
    /** if true scroll inside hours and minutes inputs will change time */
    this.mousewheel = true;
    /** if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard */
    this.arrowkeys = true;
    /** if true spinner arrows above and below the inputs will be shown */
    this.showSpinners = true;
    /** show seconds in timepicker */
    this.showSeconds = false;
    /** show minutes in timepicker */
    this.showMinutes = true;
    /** placeholder for hours field in timepicker */
    this.hoursPlaceholder = 'HH';
    /** placeholder for minutes field in timepicker */
    this.minutesPlaceholder = 'MM';
    /** placeholder for seconds field in timepicker */
    this.secondsPlaceholder = 'SS';
    /** hours aria label */
    this.ariaLabelHours = 'hours';
    /** minutes aria label */
    this.ariaLabelMinutes = 'minutes';
    /** seconds aria label */
    this.ariaLabelSeconds = 'seconds';
  }
  static #_ = this.ɵfac = function TimepickerConfig_Factory(t) {
    return new (t || TimepickerConfig)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TimepickerConfig,
    factory: TimepickerConfig.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimepickerConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
const initialState = {
  value: void 0,
  config: new TimepickerConfig(),
  controls: {
    canIncrementHours: true,
    canIncrementMinutes: true,
    canIncrementSeconds: true,
    canDecrementHours: true,
    canDecrementMinutes: true,
    canDecrementSeconds: true,
    canToggleMeridian: true
  }
};
function timepickerReducer(state = initialState, action) {
  switch (action.type) {
    case TimepickerActions.WRITE_VALUE:
      {
        return Object.assign({}, state, {
          value: action.payload
        });
      }
    case TimepickerActions.CHANGE_HOURS:
      {
        if (!canChangeValue(state.config, action.payload) || !canChangeHours(action.payload, state.controls)) {
          return state;
        }
        const _newTime = changeTime(state.value, {
          hour: action.payload.step
        });
        if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
          return state;
        }
        return Object.assign({}, state, {
          value: _newTime
        });
      }
    case TimepickerActions.CHANGE_MINUTES:
      {
        if (!canChangeValue(state.config, action.payload) || !canChangeMinutes(action.payload, state.controls)) {
          return state;
        }
        const _newTime = changeTime(state.value, {
          minute: action.payload.step
        });
        if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
          return state;
        }
        return Object.assign({}, state, {
          value: _newTime
        });
      }
    case TimepickerActions.CHANGE_SECONDS:
      {
        if (!canChangeValue(state.config, action.payload) || !canChangeSeconds(action.payload, state.controls)) {
          return state;
        }
        const _newTime = changeTime(state.value, {
          seconds: action.payload.step
        });
        if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
          return state;
        }
        return Object.assign({}, state, {
          value: _newTime
        });
      }
    case TimepickerActions.SET_TIME_UNIT:
      {
        if (!canChangeValue(state.config)) {
          return state;
        }
        const _newTime = setTime(state.value, action.payload);
        return Object.assign({}, state, {
          value: _newTime
        });
      }
    case TimepickerActions.UPDATE_CONTROLS:
      {
        const _newControlsState = timepickerControls(state.value, action.payload);
        const _newState = {
          value: state.value,
          config: action.payload,
          controls: _newControlsState
        };
        if (state.config.showMeridian !== _newState.config.showMeridian) {
          if (state.value) {
            _newState.value = new Date(state.value);
          }
        }
        return Object.assign({}, state, _newState);
      }
    default:
      return state;
  }
}
class TimepickerStore extends ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_1__.MiniStore {
  constructor() {
    const _dispatcher = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
      type: '[mini-ngrx] dispatcher init'
    });
    const state = new ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_1__.MiniState(initialState, _dispatcher, timepickerReducer);
    super(_dispatcher, timepickerReducer, state);
  }
  static #_ = this.ɵfac = function TimepickerStore_Factory(t) {
    return new (t || TimepickerStore)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TimepickerStore,
    factory: TimepickerStore.ɵfac,
    providedIn: 'platform'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimepickerStore, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'platform'
    }]
  }], function () {
    return [];
  }, null);
})();
const TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => TimepickerComponent),
  multi: true
};
class TimepickerComponent {
  constructor(_config, _cd, _store, _timepickerActions) {
    this._cd = _cd;
    this._store = _store;
    this._timepickerActions = _timepickerActions;
    /** hours change step */
    this.hourStep = 1;
    /** minutes change step */
    this.minuteStep = 5;
    /** seconds change step */
    this.secondsStep = 10;
    /** if true hours and minutes fields will be readonly */
    this.readonlyInput = false;
    /** if true hours and minutes fields will be disabled */
    this.disabled = false;
    /** if true scroll inside hours and minutes inputs will change time */
    this.mousewheel = true;
    /** if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard */
    this.arrowkeys = true;
    /** if true spinner arrows above and below the inputs will be shown */
    this.showSpinners = true;
    /** if true meridian button will be shown */
    this.showMeridian = true;
    /** show minutes in timepicker */
    this.showMinutes = true;
    /** show seconds in timepicker */
    this.showSeconds = false;
    /** meridian labels based on locale */
    this.meridians = ['AM', 'PM'];
    /** placeholder for hours field in timepicker */
    this.hoursPlaceholder = 'HH';
    /** placeholder for minutes field in timepicker */
    this.minutesPlaceholder = 'MM';
    /** placeholder for seconds field in timepicker */
    this.secondsPlaceholder = 'SS';
    /** emits true if value is a valid date */
    this.isValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** emits value of meridian*/
    this.meridianChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    // ui variables
    this.hours = '';
    this.minutes = '';
    this.seconds = '';
    this.meridian = '';
    // min\max validation for input fields
    this.invalidHours = false;
    this.invalidMinutes = false;
    this.invalidSeconds = false;
    // aria-label variables
    this.labelHours = 'hours';
    this.labelMinutes = 'minutes';
    this.labelSeconds = 'seconds';
    // time picker controls state
    this.canIncrementHours = true;
    this.canIncrementMinutes = true;
    this.canIncrementSeconds = true;
    this.canDecrementHours = true;
    this.canDecrementMinutes = true;
    this.canDecrementSeconds = true;
    this.canToggleMeridian = true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.onChange = Function.prototype;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.onTouched = Function.prototype;
    this.config = _config;
    Object.assign(this, this.config);
    this.timepickerSub = _store.select(state => state.value).subscribe(value => {
      // update UI values if date changed
      this._renderTime(value);
      this.onChange(value);
      this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
    });
    _store.select(state => state.controls).subscribe(controlsState => {
      const isTimepickerInputValid = isInputValid(this.hours, this.minutes, this.seconds, this.isPM());
      const isValid = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
      this.isValid.emit(isValid);
      Object.assign(this, controlsState);
      _cd.markForCheck();
    });
  }
  /** @deprecated - please use `isEditable` instead */
  get isSpinnersVisible() {
    return this.showSpinners && !this.readonlyInput;
  }
  get isEditable() {
    return !(this.readonlyInput || this.disabled);
  }
  resetValidation() {
    this.invalidHours = false;
    this.invalidMinutes = false;
    this.invalidSeconds = false;
  }
  isPM() {
    return this.showMeridian && this.meridian === this.meridians[1];
  }
  prevDef($event) {
    $event.preventDefault();
  }
  wheelSign($event) {
    return Math.sign($event.deltaY || 0) * -1;
  }
  ngOnChanges() {
    this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
  }
  changeHours(step, source = '') {
    this.resetValidation();
    this._store.dispatch(this._timepickerActions.changeHours({
      step,
      source
    }));
  }
  changeMinutes(step, source = '') {
    this.resetValidation();
    this._store.dispatch(this._timepickerActions.changeMinutes({
      step,
      source
    }));
  }
  changeSeconds(step, source = '') {
    this.resetValidation();
    this._store.dispatch(this._timepickerActions.changeSeconds({
      step,
      source
    }));
  }
  updateHours(target) {
    this.resetValidation();
    this.hours = target.value;
    const isTimepickerInputValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
    const isValid = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValid) {
      this.invalidHours = true;
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._updateTime();
  }
  updateMinutes(target) {
    this.resetValidation();
    this.minutes = target.value;
    const isTimepickerInputValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
    const isValid = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValid) {
      this.invalidMinutes = true;
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._updateTime();
  }
  updateSeconds(target) {
    this.resetValidation();
    this.seconds = target.value;
    const isTimepickerInputValid = isSecondInputValid(this.seconds) && this.isValidLimit();
    const isValid = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValid) {
      this.invalidSeconds = true;
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._updateTime();
  }
  isValidLimit() {
    return isInputLimitValid({
      hour: this.hours,
      minute: this.minutes,
      seconds: this.seconds,
      isPM: this.isPM()
    }, this.max, this.min);
  }
  isOneOfDatesIsEmpty() {
    return isOneOfDatesEmpty(this.hours, this.minutes, this.seconds);
  }
  _updateTime() {
    const _seconds = this.showSeconds ? this.seconds : void 0;
    const _minutes = this.showMinutes ? this.minutes : void 0;
    const isTimepickerInputValid = isInputValid(this.hours, _minutes, _seconds, this.isPM());
    const isValid = this.config.allowEmptyTime ? this.isOneOfDatesIsEmpty() || isTimepickerInputValid : isTimepickerInputValid;
    if (!isValid) {
      this.isValid.emit(false);
      this.onChange(null);
      return;
    }
    this._store.dispatch(this._timepickerActions.setTime({
      hour: this.hours,
      minute: this.minutes,
      seconds: this.seconds,
      isPM: this.isPM()
    }));
  }
  toggleMeridian() {
    if (!this.showMeridian || !this.isEditable) {
      return;
    }
    const _hoursPerDayHalf = 12;
    this._store.dispatch(this._timepickerActions.changeHours({
      step: _hoursPerDayHalf,
      source: ''
    }));
  }
  /**
   * Write a new value to the element.
   */
  writeValue(obj) {
    if (isValidDate(obj)) {
      this.resetValidation();
      this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
    } else if (obj == null) {
      this._store.dispatch(this._timepickerActions.writeValue());
    }
  }
  /**
   * Set the function to be called when the control receives a change event.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * This function is called when the control status changes to or from "disabled".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._cd.markForCheck();
  }
  ngOnDestroy() {
    this.timepickerSub?.unsubscribe();
  }
  _renderTime(value) {
    if (!value || !isValidDate(value)) {
      this.hours = '';
      this.minutes = '';
      this.seconds = '';
      this.meridian = this.meridians[0];
      this.meridianChange.emit(this.meridian);
      return;
    }
    const _value = parseTime(value);
    if (!_value) {
      return;
    }
    const _hoursPerDayHalf = 12;
    let _hours = _value.getHours();
    if (this.showMeridian) {
      this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
      this.meridianChange.emit(this.meridian);
      _hours = _hours % _hoursPerDayHalf;
      // should be 12 PM, not 00 PM
      if (_hours === 0) {
        _hours = _hoursPerDayHalf;
      }
    }
    this.hours = padNumber(_hours);
    this.minutes = padNumber(_value.getMinutes());
    this.seconds = padNumber(_value.getUTCSeconds());
  }
  static #_ = this.ɵfac = function TimepickerComponent_Factory(t) {
    return new (t || TimepickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TimepickerConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TimepickerStore), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TimepickerActions));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TimepickerComponent,
    selectors: [["timepicker"]],
    inputs: {
      hourStep: "hourStep",
      minuteStep: "minuteStep",
      secondsStep: "secondsStep",
      readonlyInput: "readonlyInput",
      disabled: "disabled",
      mousewheel: "mousewheel",
      arrowkeys: "arrowkeys",
      showSpinners: "showSpinners",
      showMeridian: "showMeridian",
      showMinutes: "showMinutes",
      showSeconds: "showSeconds",
      meridians: "meridians",
      min: "min",
      max: "max",
      hoursPlaceholder: "hoursPlaceholder",
      minutesPlaceholder: "minutesPlaceholder",
      secondsPlaceholder: "secondsPlaceholder"
    },
    outputs: {
      isValid: "isValid",
      meridianChange: "meridianChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 31,
    vars: 33,
    consts: [[1, "text-center", 3, "hidden"], ["href", "javascript:void(0);", 1, "btn", "btn-link", 3, "click"], [1, "bs-chevron", "bs-chevron-up"], [4, "ngIf"], [1, "form-group", "mb-3"], ["type", "text", "maxlength", "2", 1, "form-control", "text-center", "bs-timepicker-field", 3, "placeholder", "readonly", "disabled", "value", "wheel", "keydown.ArrowUp", "keydown.ArrowDown", "change"], ["class", "form-group mb-3", 3, "has-error", 4, "ngIf"], [1, "bs-chevron", "bs-chevron-down"], ["type", "button", 1, "btn", "btn-default", "text-center", 3, "disabled", "click"]],
    template: function TimepickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table")(1, "tbody")(2, "tr", 0)(3, "td")(4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_Template_a_click_4_listener() {
          return ctx.changeHours(ctx.hourStep);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TimepickerComponent_td_6_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TimepickerComponent_td_7_Template, 3, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TimepickerComponent_td_8_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TimepickerComponent_td_9_Template, 3, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TimepickerComponent_td_10_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TimepickerComponent_td_11_Template, 1, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr")(13, "td", 4)(14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("wheel", function TimepickerComponent_Template_input_wheel_14_listener($event) {
          ctx.prevDef($event);
          return ctx.changeHours(ctx.hourStep * ctx.wheelSign($event), "wheel");
        })("keydown.ArrowUp", function TimepickerComponent_Template_input_keydown_ArrowUp_14_listener() {
          return ctx.changeHours(ctx.hourStep, "key");
        })("keydown.ArrowDown", function TimepickerComponent_Template_input_keydown_ArrowDown_14_listener() {
          return ctx.changeHours(-ctx.hourStep, "key");
        })("change", function TimepickerComponent_Template_input_change_14_listener($event) {
          return ctx.updateHours($event.target);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TimepickerComponent_td_15_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TimepickerComponent_td_16_Template, 2, 9, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TimepickerComponent_td_17_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TimepickerComponent_td_18_Template, 2, 9, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TimepickerComponent_td_19_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TimepickerComponent_td_20_Template, 3, 4, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr", 0)(22, "td")(23, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimepickerComponent_Template_a_click_23_listener() {
          return ctx.changeHours(-ctx.hourStep);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TimepickerComponent_td_25_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TimepickerComponent_td_26_Template, 3, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TimepickerComponent_td_27_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TimepickerComponent_td_28_Template, 3, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TimepickerComponent_td_29_Template, 2, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TimepickerComponent_td_30_Template, 1, 0, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showSpinners);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canIncrementHours || !ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-error", ctx.invalidHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.invalidHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.hoursPlaceholder)("readonly", ctx.readonlyInput)("disabled", ctx.disabled)("value", ctx.hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.labelHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showSpinners);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canDecrementHours || !ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMinutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMeridian);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    styles: [".bs-chevron{border-style:solid;display:block;width:9px;height:9px;position:relative;border-width:3px 0px 0 3px}.bs-chevron-up{transform:rotate(45deg);top:2px}.bs-chevron-down{transform:rotate(-135deg);top:-2px}.bs-timepicker-field{width:65px;padding:.375rem .55rem}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimepickerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'timepicker',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: "<table>\n  <tbody>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- increment hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementHours || !isEditable\"\n         (click)=\"changeHours(hourStep)\"\n         href=\"javascript:void(0);\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- increment minutes button -->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(minuteStep)\"\n         href=\"javascript:void(0);\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- increment seconds button -->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(secondsStep)\"\n         href=\"javascript:void(0);\"\n      >\n        <span class=\"bs-chevron bs-chevron-up\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  <tr>\n    <!-- hours -->\n    <td class=\"form-group mb-3\" [class.has-error]=\"invalidHours\">\n      <input type=\"text\" [class.is-invalid]=\"invalidHours\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"hoursPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"hours\"\n             (wheel)=\"prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeHours(hourStep, 'key')\"\n             (keydown.ArrowDown)=\"changeHours(-hourStep, 'key')\"\n             (change)=\"updateHours($event.target)\" [attr.aria-label]=\"labelHours\"></td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;:&nbsp;</td>\n    <!-- minutes -->\n    <td class=\"form-group mb-3\" *ngIf=\"showMinutes\" [class.has-error]=\"invalidMinutes\">\n      <input type=\"text\" [class.is-invalid]=\"invalidMinutes\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"minutesPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"minutes\"\n             (wheel)=\"prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeMinutes(minuteStep, 'key')\"\n             (keydown.ArrowDown)=\"changeMinutes(-minuteStep, 'key')\"\n             (change)=\"updateMinutes($event.target)\" [attr.aria-label]=\"labelMinutes\">\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;:&nbsp;</td>\n    <!-- seconds -->\n    <td class=\"form-group mb-3\" *ngIf=\"showSeconds\" [class.has-error]=\"invalidSeconds\">\n      <input type=\"text\" [class.is-invalid]=\"invalidSeconds\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"secondsPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"seconds\"\n             (wheel)=\"prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeSeconds(secondsStep, 'key')\"\n             (keydown.ArrowDown)=\"changeSeconds(-secondsStep, 'key')\"\n             (change)=\"updateSeconds($event.target)\" [attr.aria-label]=\"labelSeconds\">\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian -->\n    <td *ngIf=\"showMeridian\">\n      <button type=\"button\" class=\"btn btn-default text-center\"\n              [disabled]=\"!isEditable || !canToggleMeridian\"\n              [class.disabled]=\"!isEditable || !canToggleMeridian\"\n              (click)=\"toggleMeridian()\"\n      >{{ meridian }}\n      </button>\n    </td>\n  </tr>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- decrement hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementHours || !isEditable\"\n         (click)=\"changeHours(-hourStep)\"\n         href=\"javascript:void(0);\"\n      >\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- decrement minutes button-->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(-minuteStep)\"\n         href=\"javascript:void(0);\"\n      >\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- decrement seconds button-->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(-secondsStep)\"\n         href=\"javascript:void(0);\"\n      >\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  </tbody>\n</table>\n",
      styles: [".bs-chevron{border-style:solid;display:block;width:9px;height:9px;position:relative;border-width:3px 0px 0 3px}.bs-chevron-up{transform:rotate(45deg);top:2px}.bs-chevron-down{transform:rotate(-135deg);top:-2px}.bs-timepicker-field{width:65px;padding:.375rem .55rem}\n"]
    }]
  }], function () {
    return [{
      type: TimepickerConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: TimepickerStore
    }, {
      type: TimepickerActions
    }];
  }, {
    hourStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minuteStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    secondsStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonlyInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mousewheel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    arrowkeys: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showSpinners: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showMeridian: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showMinutes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showSeconds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    meridians: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hoursPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minutesPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    secondsPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isValid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    meridianChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class TimepickerModule {
  static forRoot() {
    return {
      ngModule: TimepickerModule,
      providers: [TimepickerActions, TimepickerStore]
    };
  }
  static #_ = this.ɵfac = function TimepickerModule_Factory(t) {
    return new (t || TimepickerModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TimepickerModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [TimepickerStore],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimepickerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      declarations: [TimepickerComponent],
      exports: [TimepickerComponent],
      providers: [TimepickerStore]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_pages_tables_tables_module_ts.js.map