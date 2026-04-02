"use strict";
(self["webpackChunkazimuth"] = self["webpackChunkazimuth"] || []).push([["src_app_pages_tools_tools_module_ts"],{

/***/ 86866:
/*!**************************************************************!*\
  !*** ./src/app/pages/tools/drag-drop/drag-drop.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragDropComponent": () => (/* binding */ DragDropComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class DragDropComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function DragDropComponent_Factory(t) {
    return new (t || DragDropComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DragDropComponent,
    selectors: [["az-drag-drop"]],
    decls: 2,
    vars: 0,
    consts: [[1, "row", "bottom-30"], [1, "col"]],
    template: function DragDropComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: [".draggable {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdG9vbHMvZHJhZy1kcm9wL2RyYWctZHJvcC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL1NjaGVkdWxpbmclMjBTb2Z0d2FyZS9zcmMvYXBwL3BhZ2VzL3Rvb2xzL2RyYWctZHJvcC9kcmFnLWRyb3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUVBLG9CQUFBO0FDQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJhZ2dhYmxle1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgY3Vyc29yOiBncmFiO1xyXG4gICAgY3Vyc29yOiAtbW96LWdyYWI7XHJcbiAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcclxufSIsIi5kcmFnZ2FibGUge1xuICBjdXJzb3I6IG1vdmU7XG4gIGN1cnNvcjogZ3JhYjtcbiAgY3Vyc29yOiAtbW96LWdyYWI7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 70563:
/*!**************************************************************!*\
  !*** ./src/app/pages/tools/resizable/resizable.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizableComponent": () => (/* binding */ ResizableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-resizable-element */ 84454);



const _c0 = function () {
  return {
    left: 50,
    right: 50
  };
};
const _c1 = function () {
  return {
    top: true
  };
};
const _c2 = function () {
  return {
    left: true
  };
};
const _c3 = function () {
  return {
    right: true
  };
};
const _c4 = function () {
  return {
    bottom: true
  };
};
class ResizableComponent {
  constructor() {
    this.style = {};
  }
  ngOnInit() {}
  validate(event) {
    const MIN_DIMENSIONS_PX = 50;
    const rectangle = event.rectangle;
    if (rectangle.width < MIN_DIMENSIONS_PX || rectangle.height < MIN_DIMENSIONS_PX) {
      return false;
    }
    return true;
  }
  onResizeEnd(event) {
    this.style = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }
  static #_ = this.ɵfac = function ResizableComponent_Factory(t) {
    return new (t || ResizableComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ResizableComponent,
    selectors: [["az-resizable"]],
    decls: 21,
    vars: 13,
    consts: [[1, "row"], [1, "col"], ["mwlResizable", "", 1, "card", "resizable-card", 3, "ngStyle", "validateResize", "enableGhostResize", "resizeSnapGrid", "resizeEnd"], ["mwlResizeHandle", "", 1, "resize-handle-top", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "resize-handle-left", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "resize-handle-right", 3, "resizeEdges"], ["mwlResizeHandle", "", 1, "resize-handle-bottom", 3, "resizeEdges"], [1, "card-header"], [1, "fa", "fa-arrows-h", "ml-2", "mr-2"], [1, "fa", "fa-arrows-v"], [1, "card-body", "h-100"], ["href", "https://github.com/mattlewis92/angular-resizable-element", "target", "_blank"], ["src", "assets/img/profile/adam.jpg", "alt", "adam", 1, "mr-4", "mb-4"], ["src", "assets/img/profile/ashley.jpg", "alt", "ashley", 1, "mr-4", "mb-4"], ["src", "assets/img/profile/bruno.jpg", "alt", "bruno", 1, "mr-4", "mb-4"], ["src", "assets/img/profile/julia.jpg", "alt", "julia", 1, "mr-4", "mb-4"]],
    template: function ResizableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resizeEnd", function ResizableComponent_Template_div_resizeEnd_2_listener($event) {
          return ctx.onResizeEnd($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Resize me! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8)(11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Angular resizable element - An angular 4.0+ directive that allows an element to be resized. Built with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "angular-resizable-element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12)(18, "img", 13)(19, "img", 14)(20, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("validateResize", ctx.validate)("enableGhostResize", true)("resizeSnapGrid", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeEdges", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, angular_resizable_element__WEBPACK_IMPORTED_MODULE_2__.ResizableDirective, angular_resizable_element__WEBPACK_IMPORTED_MODULE_2__.ResizeHandleDirective],
    styles: [".resizable-card {\n  z-index: 9999;\n}\n.resizable-card .card-body {\n  overflow: auto;\n}\n\nmwlResizable {\n  box-sizing: border-box;\n}\n\n.resize-handle-top,\n.resize-handle-bottom {\n  position: absolute;\n  height: 5px;\n  cursor: row-resize;\n  width: 100%;\n}\n\n.resize-handle-top {\n  top: 0;\n}\n\n.resize-handle-bottom {\n  bottom: 0;\n}\n\n.resize-handle-left,\n.resize-handle-right {\n  position: absolute;\n  height: 100%;\n  cursor: col-resize;\n  width: 5px;\n}\n\n.resize-handle-left {\n  left: 0;\n}\n\n.resize-handle-right {\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdG9vbHMvcmVzaXphYmxlL3Jlc2l6YWJsZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL1NjaGVkdWxpbmclMjBTb2Z0d2FyZS9zcmMvYXBwL3BhZ2VzL3Rvb2xzL3Jlc2l6YWJsZS9yZXNpemFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURBSTtFQUNJLGNBQUE7QUNFUjs7QURFQTtFQUNBLHNCQUFBO0FDQ0E7O0FERUE7O0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxNQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0FDQ0o7O0FERUE7O0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxPQUFBO0FDQ0o7O0FERUE7RUFDSSxRQUFBO0FDQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzaXphYmxlLWNhcmQge1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5td2xSZXNpemFibGUge1xyXG5ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvLyByZXF1aXJlZCBmb3IgdGhlIGVuYWJsZUdob3N0UmVzaXplIG9wdGlvbiB0byB3b3JrXHJcbn0gICBcclxuXHJcbi5yZXNpemUtaGFuZGxlLXRvcCxcclxuLnJlc2l6ZS1oYW5kbGUtYm90dG9tIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgY3Vyc29yOiByb3ctcmVzaXplO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yZXNpemUtaGFuZGxlLXRvcCB7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi5yZXNpemUtaGFuZGxlLWJvdHRvbSB7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5yZXNpemUtaGFuZGxlLWxlZnQsXHJcbi5yZXNpemUtaGFuZGxlLXJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGN1cnNvcjogY29sLXJlc2l6ZTtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbi5yZXNpemUtaGFuZGxlLWxlZnQge1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLnJlc2l6ZS1oYW5kbGUtcmlnaHQge1xyXG4gICAgcmlnaHQ6IDA7XHJcbn0iLCIucmVzaXphYmxlLWNhcmQge1xuICB6LWluZGV4OiA5OTk5O1xufVxuLnJlc2l6YWJsZS1jYXJkIC5jYXJkLWJvZHkge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxubXdsUmVzaXphYmxlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnJlc2l6ZS1oYW5kbGUtdG9wLFxuLnJlc2l6ZS1oYW5kbGUtYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDVweDtcbiAgY3Vyc29yOiByb3ctcmVzaXplO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJlc2l6ZS1oYW5kbGUtdG9wIHtcbiAgdG9wOiAwO1xufVxuXG4ucmVzaXplLWhhbmRsZS1ib3R0b20ge1xuICBib3R0b206IDA7XG59XG5cbi5yZXNpemUtaGFuZGxlLWxlZnQsXG4ucmVzaXplLWhhbmRsZS1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi5yZXNpemUtaGFuZGxlLWxlZnQge1xuICBsZWZ0OiAwO1xufVxuXG4ucmVzaXplLWhhbmRsZS1yaWdodCB7XG4gIHJpZ2h0OiAwO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 24862:
/*!**********************************************************!*\
  !*** ./src/app/pages/tools/toaster/toaster.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToasterComponent": () => (/* binding */ ToasterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 15874);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 69542);




const quotes = [{
  title: 'Title',
  message: 'Message'
}, {
  title: '😃',
  message: 'Supports Emoji'
}, {
  title: null,
  message: 'My name is Inigo Montoya. You killed my father. Prepare to die!'
}, {
  title: null,
  message: 'Titles are not always needed'
}, {
  title: 'Title only 👊',
  message: null
}, {
  title: '',
  message: `Supports Angular ${_angular_core__WEBPACK_IMPORTED_MODULE_0__.VERSION.full}`
}];
const types = ['success', 'error', 'info', 'warning'];
class ToasterComponent {
  constructor(toastrService) {
    this.toastrService = toastrService;
    this.title = '';
    this.type = types[0];
    this.message = '';
    this.version = _angular_core__WEBPACK_IMPORTED_MODULE_0__.VERSION;
    this.lastInserted = [];
    this.options = this.toastrService.toastrConfig;
  }
  ngOnInit() {
    setTimeout(() => {
      this.toastrService.success('Welcome to toaster page!', 'Toastr fun!');
    });
  }
  openToast() {
    let m = this.message;
    let t = this.title;
    if (!this.title.length && !this.message.length) {
      const randomMessage = quotes[Math.floor(Math.random() * quotes.length)];
      m = randomMessage.message;
      t = randomMessage.title;
    }
    const opt = JSON.parse(JSON.stringify(this.options));
    const inserted = this.toastrService[this.type](m, t, opt);
    if (inserted) {
      this.lastInserted.push(inserted.toastId);
    }
    return inserted;
  }
  clearToasts() {
    this.toastrService.clear();
  }
  clearLastToast() {
    this.toastrService.clear(this.lastInserted.pop());
  }
  static #_ = this.ɵfac = function ToasterComponent_Factory(t) {
    return new (t || ToasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ToasterComponent,
    selectors: [["az-toaster"]],
    decls: 129,
    vars: 24,
    consts: [["href", "https://github.com/scttcper/ngx-toastr", "target", "_blank"], [1, "row", "justify-content-center"], [1, "col"], [1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-5"], [1, "form-group"], ["for", "toastTitle"], ["type", "text", "id", "toastTitle", "placeholder", "Toast title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "toastMessage"], ["rows", "3", "id", "toastMessage", "placeholder", "Toast message", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "checkboxEnableHtml", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "checkboxEnableHtml", 1, "custom-control-label"], ["type", "checkbox", "id", "checkboxDismiss", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "checkboxDismiss", 1, "custom-control-label"], ["type", "checkbox", "id", "checkboxCloseButton", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "checkboxCloseButton", 1, "custom-control-label"], ["type", "checkbox", "id", "checkboxPreventDuplicates", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "checkboxPreventDuplicates", 1, "custom-control-label"], ["type", "checkbox", "id", "checkboxNewToasts", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "checkboxNewToasts", 1, "custom-control-label"], ["type", "checkbox", "id", "checkboxProgressBar", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "checkboxProgressBar", 1, "custom-control-label"], [1, "col-md-4"], ["for", "toastTimeout"], ["type", "text", "id", "toastTimeout", "aria-describedby", "toastTimeoutHelp", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "toastTimeoutHelp", 1, "form-text", "text-muted"], ["for", "maxNumberToasts"], ["type", "text", "id", "maxNumberToasts", "aria-describedby", "maxNumberToastsHelp", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "maxNumberToastsHelp", 1, "form-text", "text-muted"], ["for", "toastExtendedTimeout"], ["type", "text", "id", "toastExtendedTimeout", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "id", "checkboxAutoDismiss", 1, "custom-control-input", "checkbox-main", 3, "ngModel", "ngModelChange"], ["for", "checkboxAutoDismiss", 1, "custom-control-label"], [1, "col-md-3"], [1, "custom-control", "custom-radio"], ["type", "radio", "name", "typeRadios", "id", "radioSuccess", "value", "success", 1, "custom-control-input", "radio-success", 3, "ngModel", "ngModelChange"], ["for", "radioSuccess", 1, "custom-control-label"], ["type", "radio", "name", "typeRadios", "id", "radioInfo", "value", "info", 1, "custom-control-input", "radio-info", 3, "ngModel", "ngModelChange"], ["for", "radioInfo", 1, "custom-control-label"], ["type", "radio", "name", "typeRadios", "id", "radioWarning", "value", "warning", 1, "custom-control-input", "radio-warning", 3, "ngModel", "ngModelChange"], ["for", "radioWarning", 1, "custom-control-label"], ["type", "radio", "name", "typeRadios", "id", "radioDanger", "value", "error", 1, "custom-control-input", "radio-danger", 3, "ngModel", "ngModelChange"], ["for", "radioDanger", 1, "custom-control-label"], ["type", "radio", "name", "positionRadio", "id", "toast-top-right", "value", "toast-top-right", 1, "custom-control-input", "radio-main", 3, "ngModel", "ngModelChange"], ["for", "toast-top-right", 1, "custom-control-label"], ["type", "radio", "name", "positionRadio", "id", "toast-bottom-right", "value", "toast-bottom-right", 1, "custom-control-input", "radio-main", 3, "ngModel", "ngModelChange"], ["for", "toast-bottom-right", 1, "custom-control-label"], ["type", "radio", "name", "positionRadio", "id", "toast-bottom-left", "value", "toast-bottom-left", 1, "custom-control-input", "radio-main", 3, "ngModel", "ngModelChange"], ["for", "toast-bottom-left", 1, "custom-control-label"], ["type", "radio", "name", "positionRadio", "id", "toast-top-left", "value", "toast-top-left", 1, "custom-control-input", "radio-main", 3, "ngModel", "ngModelChange"], ["for", "toast-top-left", 1, "custom-control-label"], ["type", "radio", "name", "positionRadio", "id", "toast-top-full-width", "value", "toast-top-full-width", 1, "custom-control-input", "radio-main", 3, "ngModel", "ngModelChange"], ["for", "toast-top-full-width", 1, "custom-control-label"], ["type", "radio", "name", "positionRadio", "id", "toast-bottom-full-width", "value", "toast-bottom-full-width", 1, "custom-control-input", "radio-main", 3, "ngModel", "ngModelChange"], ["for", "toast-bottom-full-width", 1, "custom-control-label"], ["type", "radio", "name", "positionRadio", "id", "toast-top-center", "value", "toast-top-center", 1, "custom-control-input", "radio-main", 3, "ngModel", "ngModelChange"], ["for", "toast-top-center", 1, "custom-control-label"], ["type", "radio", "name", "positionRadio", "id", "toast-bottom-center", "value", "toast-bottom-center", 1, "custom-control-input", "radio-main", 3, "ngModel", "ngModelChange"], ["for", "toast-bottom-center", 1, "custom-control-label"], [1, "col", "text-center"], [1, "mb-0", "mt-1"], ["type", "button", "role", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "role", "button", 1, "btn", "btn-secondary", "mx-2", 3, "click"], ["type", "button", "role", "button", 1, "btn", "btn-secondary", 3, "click"]],
    template: function ToasterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Angular Toastr - built with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ngx-toastr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1)(5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.title = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7)(15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_textarea_ngModelChange_17_listener($event) {
          return ctx.message = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7)(19, "div", 12)(20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_20_listener($event) {
          return ctx.options.enableHtml = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Enable Html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12)(24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_24_listener($event) {
          return ctx.options.tapToDismiss = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Tap to dismiss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12)(28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_28_listener($event) {
          return ctx.options.closeButton = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Close button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12)(32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_32_listener($event) {
          return ctx.options.preventDuplicates = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Prevent duplicates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12)(36, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_36_listener($event) {
          return ctx.options.newestOnTop = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "New toasts on top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12)(40, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_40_listener($event) {
          return ctx.options.progressBar = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Progress bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25)(44, "div", 7)(45, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Timeout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_47_listener($event) {
          return ctx.options.timeOut = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "small", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "0 never expires");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7)(51, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Maximum Toasts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_53_listener($event) {
          return ctx.toastrService.toastrConfig.maxOpened = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "small", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "0 is no limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 7)(57, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Extended Timeout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_59_listener($event) {
          return ctx.toastrService.toastrConfig.extendedTimeOut = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12)(61, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_61_listener($event) {
          return ctx.toastrService.toastrConfig.autoDismiss = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Auto dismiss on max");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 36)(65, "fieldset", 7)(66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Toast type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 37)(69, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_69_listener($event) {
          return ctx.type = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 37)(73, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_73_listener($event) {
          return ctx.type = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 37)(77, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_77_listener($event) {
          return ctx.type = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 37)(81, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_81_listener($event) {
          return ctx.type = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "fieldset", 7)(85, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Toast position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 37)(88, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_88_listener($event) {
          return ctx.options.positionClass = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Top Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 37)(92, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_92_listener($event) {
          return ctx.options.positionClass = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Bottom Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 37)(96, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_96_listener($event) {
          return ctx.options.positionClass = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Bottom Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 37)(100, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_100_listener($event) {
          return ctx.options.positionClass = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Top Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 37)(104, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_104_listener($event) {
          return ctx.options.positionClass = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Top Full Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 37)(108, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_108_listener($event) {
          return ctx.options.positionClass = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Top Bottom Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 37)(112, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_112_listener($event) {
          return ctx.options.positionClass = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Top Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 37)(116, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToasterComponent_Template_input_ngModelChange_116_listener($event) {
          return ctx.options.positionClass = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Bottom Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 5)(120, "div", 62)(121, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Toast Controls:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToasterComponent_Template_button_click_123_listener() {
          return ctx.openToast();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Open Toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToasterComponent_Template_button_click_125_listener() {
          return ctx.clearLastToast();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Clear Last Toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToasterComponent_Template_button_click_127_listener() {
          return ctx.clearToasts();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Clear All Toasts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.enableHtml);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.tapToDismiss);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.closeButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.preventDuplicates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.newestOnTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.progressBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.timeOut);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.toastrService.toastrConfig.maxOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.toastrService.toastrConfig.extendedTimeOut);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.toastrService.toastrConfig.autoDismiss);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.positionClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.positionClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.positionClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.positionClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.positionClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.positionClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.positionClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.options.positionClass);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
    encapsulation: 2
  });
}


/***/ }),

/***/ 40311:
/*!*********************************************!*\
  !*** ./src/app/pages/tools/tools.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsModule": () => (/* binding */ ToolsModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-scrollbar */ 24203);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-resizable-element */ 84454);
/* harmony import */ var _resizable_resizable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resizable/resizable.component */ 70563);
/* harmony import */ var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-drop/drag-drop.component */ 86866);
/* harmony import */ var _toaster_toaster_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toaster/toaster.component */ 24862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);










const routes = [{
  path: '',
  redirectTo: 'drag-drop',
  pathMatch: 'full'
}, {
  path: 'drag-drop',
  component: _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_1__.DragDropComponent,
  data: {
    breadcrumb: 'Drag and Drop'
  }
}, {
  path: 'resizable',
  component: _resizable_resizable_component__WEBPACK_IMPORTED_MODULE_0__.ResizableComponent,
  data: {
    breadcrumb: 'Resizable'
  }
}, {
  path: 'toaster',
  component: _toaster_toaster_component__WEBPACK_IMPORTED_MODULE_2__.ToasterComponent,
  data: {
    breadcrumb: 'Toaster'
  }
}];
class ToolsModule {
  static #_ = this.ɵfac = function ToolsModule_Factory(t) {
    return new (t || ToolsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ToolsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_6__.ResizableModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_7__.NgScrollbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ToolsModule, {
    declarations: [_resizable_resizable_component__WEBPACK_IMPORTED_MODULE_0__.ResizableComponent, _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_1__.DragDropComponent, _toaster_toaster_component__WEBPACK_IMPORTED_MODULE_2__.ToasterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, angular_resizable_element__WEBPACK_IMPORTED_MODULE_6__.ResizableModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_7__.NgScrollbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 84454:
/*!***************************************************************************************!*\
  !*** ./node_modules/angular-resizable-element/fesm2020/angular-resizable-element.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizableDirective": () => (/* binding */ ResizableDirective),
/* harmony export */   "ResizableModule": () => (/* binding */ ResizableModule),
/* harmony export */   "ResizeHandleDirective": () => (/* binding */ ResizeHandleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 81203);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 70679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 68951);






/**
 * @hidden
 */
const IS_TOUCH_DEVICE = (() => {
  // In case we're in Node.js environment.
  if (typeof window === 'undefined') {
    return false;
  } else {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
})();

/** Creates a deep clone of an element. */
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll('[id]');
  const nodeName = node.nodeName.toLowerCase();
  // Remove the `id` to avoid having multiple elements with the same id on the page.
  clone.removeAttribute('id');
  descendantsWithId.forEach(descendant => {
    descendant.removeAttribute('id');
  });
  if (nodeName === 'canvas') {
    transferCanvasData(node, clone);
  } else if (nodeName === 'input' || nodeName === 'select' || nodeName === 'textarea') {
    transferInputData(node, clone);
  }
  transferData('canvas', node, clone, transferCanvasData);
  transferData('input, textarea, select', node, clone, transferInputData);
  return clone;
}
/** Matches elements between an element and its clone and allows for their data to be cloned. */
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
// Counter for unique cloned radio button names.
let cloneUniqueId = 0;
/** Transfers the data of one input element to another. */
function transferInputData(source, clone) {
  // Browsers throw an error when assigning the value of a file input programmatically.
  if (clone.type !== 'file') {
    clone.value = source.value;
  }
  // Radio button `name` attributes must be unique for radio button groups
  // otherwise original radio buttons can lose their checked state
  // once the clone is inserted in the DOM.
  if (clone.type === 'radio' && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
/** Transfers the data of one canvas element to another. */
function transferCanvasData(source, clone) {
  const context = clone.getContext('2d');
  if (context) {
    // In some cases `drawImage` can throw (e.g. if the canvas size is 0x0).
    // We can't do much about it so just ignore the error.
    try {
      context.drawImage(source, 0, 0);
    } catch {}
  }
}
function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
  const newBoundingRect = {
    top: startingRect.top,
    bottom: startingRect.bottom,
    left: startingRect.left,
    right: startingRect.right
  };
  if (edges.top) {
    newBoundingRect.top += clientY;
  }
  if (edges.bottom) {
    newBoundingRect.bottom += clientY;
  }
  if (edges.left) {
    newBoundingRect.left += clientX;
  }
  if (edges.right) {
    newBoundingRect.right += clientX;
  }
  newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
  newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
  return newBoundingRect;
}
function getElementRect(element, ghostElementPositioning) {
  let translateX = 0;
  let translateY = 0;
  const style = element.nativeElement.style;
  const transformProperties = ['transform', '-ms-transform', '-moz-transform', '-o-transform'];
  const transform = transformProperties.map(property => style[property]).find(value => !!value);
  if (transform && transform.includes('translate')) {
    translateX = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$1');
    translateY = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$2');
  }
  if (ghostElementPositioning === 'absolute') {
    return {
      height: element.nativeElement.offsetHeight,
      width: element.nativeElement.offsetWidth,
      top: element.nativeElement.offsetTop - translateY,
      bottom: element.nativeElement.offsetHeight + element.nativeElement.offsetTop - translateY,
      left: element.nativeElement.offsetLeft - translateX,
      right: element.nativeElement.offsetWidth + element.nativeElement.offsetLeft - translateX
    };
  } else {
    const boundingRect = element.nativeElement.getBoundingClientRect();
    return {
      height: boundingRect.height,
      width: boundingRect.width,
      top: boundingRect.top - translateY,
      bottom: boundingRect.bottom - translateY,
      left: boundingRect.left - translateX,
      right: boundingRect.right - translateX,
      scrollTop: element.nativeElement.scrollTop,
      scrollLeft: element.nativeElement.scrollLeft
    };
  }
}
const DEFAULT_RESIZE_CURSORS = Object.freeze({
  topLeft: 'nw-resize',
  topRight: 'ne-resize',
  bottomLeft: 'sw-resize',
  bottomRight: 'se-resize',
  leftOrRight: 'col-resize',
  topOrBottom: 'row-resize'
});
function getResizeCursor(edges, cursors) {
  if (edges.left && edges.top) {
    return cursors.topLeft;
  } else if (edges.right && edges.top) {
    return cursors.topRight;
  } else if (edges.left && edges.bottom) {
    return cursors.bottomLeft;
  } else if (edges.right && edges.bottom) {
    return cursors.bottomRight;
  } else if (edges.left || edges.right) {
    return cursors.leftOrRight;
  } else if (edges.top || edges.bottom) {
    return cursors.topOrBottom;
  } else {
    return '';
  }
}
function getEdgesDiff({
  edges,
  initialRectangle,
  newRectangle
}) {
  const edgesDiff = {};
  Object.keys(edges).forEach(edge => {
    edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
  });
  return edgesDiff;
}
const RESIZE_ACTIVE_CLASS = 'resize-active';
const RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
const MOUSE_MOVE_THROTTLE_MS = 50;
/**
 * Place this on an element to make it resizable. For example:
 *
 * ```html
 * <div
 *   mwlResizable
 *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
 *   [enableGhostResize]="true">
 * </div>
 * ```
 * Or in case they are sibling elements:
 * ```html
 * <div mwlResizable #resizableElement="mwlResizable"></div>
 * <div mwlResizeHandle [resizableContainer]="resizableElement" [resizeEdges]="{bottom: true, right: true}"></div>
 * ```
 */
class ResizableDirective {
  /**
   * @hidden
   */
  constructor(platformId, renderer, elm, zone) {
    this.platformId = platformId;
    this.renderer = renderer;
    this.elm = elm;
    this.zone = zone;
    /**
     * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
     */
    this.enableGhostResize = false;
    /**
     * A snap grid that resize events will be locked to.
     *
     * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
     */
    this.resizeSnapGrid = {};
    /**
     * The mouse cursors that will be set on the resize edges
     */
    this.resizeCursors = DEFAULT_RESIZE_CURSORS;
    /**
     * Define the positioning of the ghost element (can be fixed or absolute)
     */
    this.ghostElementPositioning = 'fixed';
    /**
     * Allow elements to be resized to negative dimensions
     */
    this.allowNegativeResizes = false;
    /**
     * The mouse move throttle in milliseconds, default: 50 ms
     */
    this.mouseMoveThrottleMS = MOUSE_MOVE_THROTTLE_MS;
    /**
     * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
     */
    this.resizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
     */
    this.resizing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
     */
    this.resizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * @hidden
     */
    this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * @hidden
     */
    this.mousedown = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * @hidden
     */
    this.mousemove = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
  }
  /**
   * @hidden
   */
  ngOnInit() {
    const mousedown$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.pointerEventListeners.pointerDown, this.mousedown);
    const mousemove$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.pointerEventListeners.pointerMove, this.mousemove).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(({
      event
    }) => {
      if (currentResize && event.cancelable) {
        event.preventDefault();
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
    const mouseup$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.pointerEventListeners.pointerUp, this.mouseup);
    let currentResize;
    const removeGhostElement = () => {
      if (currentResize && currentResize.clonedNode) {
        this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
        this.renderer.setStyle(this.elm.nativeElement, 'visibility', 'inherit');
      }
    };
    const getResizeCursors = () => {
      return {
        ...DEFAULT_RESIZE_CURSORS,
        ...this.resizeCursors
      };
    };
    const mousedrag = mousedown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(startCoords => {
      function getDiff(moveCoords) {
        return {
          clientX: moveCoords.clientX - startCoords.clientX,
          clientY: moveCoords.clientY - startCoords.clientY
        };
      }
      const getSnapGrid = () => {
        const snapGrid = {
          x: 1,
          y: 1
        };
        if (currentResize) {
          if (this.resizeSnapGrid.left && currentResize.edges.left) {
            snapGrid.x = +this.resizeSnapGrid.left;
          } else if (this.resizeSnapGrid.right && currentResize.edges.right) {
            snapGrid.x = +this.resizeSnapGrid.right;
          }
          if (this.resizeSnapGrid.top && currentResize.edges.top) {
            snapGrid.y = +this.resizeSnapGrid.top;
          } else if (this.resizeSnapGrid.bottom && currentResize.edges.bottom) {
            snapGrid.y = +this.resizeSnapGrid.bottom;
          }
        }
        return snapGrid;
      };
      function getGrid(coords, snapGrid) {
        return {
          x: Math.ceil(coords.clientX / snapGrid.x),
          y: Math.ceil(coords.clientY / snapGrid.y)
        };
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(mousemove$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(coords => [, coords])), mousemove$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.pairwise)())).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([previousCoords, newCoords]) => {
        return [previousCoords ? getDiff(previousCoords) : previousCoords, getDiff(newCoords)];
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(([previousCoords, newCoords]) => {
        if (!previousCoords) {
          return true;
        }
        const snapGrid = getSnapGrid();
        const previousGrid = getGrid(previousCoords, snapGrid);
        const newGrid = getGrid(newCoords, snapGrid);
        return previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y;
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([, newCoords]) => {
        const snapGrid = getSnapGrid();
        return {
          clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
          clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
        };
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(mouseup$, mousedown$)));
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(() => !!currentResize));
    mousedrag.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({
      clientX,
      clientY
    }) => {
      return getNewBoundingRectangle(currentResize.startingRect, currentResize.edges, clientX, clientY);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(newBoundingRect => {
      return this.allowNegativeResizes || !!(newBoundingRect.height && newBoundingRect.width && newBoundingRect.height > 0 && newBoundingRect.width > 0);
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(newBoundingRect => {
      return this.validateResize ? this.validateResize({
        rectangle: newBoundingRect,
        edges: getEdgesDiff({
          edges: currentResize.edges,
          initialRectangle: currentResize.startingRect,
          newRectangle: newBoundingRect
        })
      }) : true;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(newBoundingRect => {
      if (currentResize && currentResize.clonedNode) {
        this.renderer.setStyle(currentResize.clonedNode, 'height', `${newBoundingRect.height}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'width', `${newBoundingRect.width}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'top', `${newBoundingRect.top}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'left', `${newBoundingRect.left}px`);
      }
      if (this.resizing.observers.length > 0) {
        this.zone.run(() => {
          this.resizing.emit({
            edges: getEdgesDiff({
              edges: currentResize.edges,
              initialRectangle: currentResize.startingRect,
              newRectangle: newBoundingRect
            }),
            rectangle: newBoundingRect
          });
        });
      }
      currentResize.currentRect = newBoundingRect;
    });
    mousedown$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({
      edges
    }) => {
      return edges || {};
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(edges => {
      return Object.keys(edges).length > 0;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(edges => {
      if (currentResize) {
        removeGhostElement();
      }
      const startingRect = getElementRect(this.elm, this.ghostElementPositioning);
      currentResize = {
        edges,
        startingRect,
        currentRect: startingRect
      };
      const resizeCursors = getResizeCursors();
      const cursor = getResizeCursor(currentResize.edges, resizeCursors);
      this.renderer.setStyle(document.body, 'cursor', cursor);
      this.setElementClass(this.elm, RESIZE_ACTIVE_CLASS, true);
      if (this.enableGhostResize) {
        currentResize.clonedNode = deepCloneNode(this.elm.nativeElement);
        this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
        this.renderer.setStyle(this.elm.nativeElement, 'visibility', 'hidden');
        this.renderer.setStyle(currentResize.clonedNode, 'position', this.ghostElementPositioning);
        this.renderer.setStyle(currentResize.clonedNode, 'left', `${currentResize.startingRect.left}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'top', `${currentResize.startingRect.top}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'height', `${currentResize.startingRect.height}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'width', `${currentResize.startingRect.width}px`);
        this.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));
        this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);
        currentResize.clonedNode.scrollTop = currentResize.startingRect.scrollTop;
        currentResize.clonedNode.scrollLeft = currentResize.startingRect.scrollLeft;
      }
      if (this.resizeStart.observers.length > 0) {
        this.zone.run(() => {
          this.resizeStart.emit({
            edges: getEdgesDiff({
              edges,
              initialRectangle: startingRect,
              newRectangle: startingRect
            }),
            rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
          });
        });
      }
    });
    mouseup$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => {
      if (currentResize) {
        this.renderer.removeClass(this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
        this.renderer.setStyle(document.body, 'cursor', '');
        this.renderer.setStyle(this.elm.nativeElement, 'cursor', '');
        if (this.resizeEnd.observers.length > 0) {
          this.zone.run(() => {
            this.resizeEnd.emit({
              edges: getEdgesDiff({
                edges: currentResize.edges,
                initialRectangle: currentResize.startingRect,
                newRectangle: currentResize.currentRect
              }),
              rectangle: currentResize.currentRect
            });
          });
        }
        removeGhostElement();
        currentResize = null;
      }
    });
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    // browser check for angular universal, because it doesn't know what document is
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.isPlatformBrowser)(this.platformId)) {
      this.renderer.setStyle(document.body, 'cursor', '');
    }
    this.mousedown.complete();
    this.mouseup.complete();
    this.mousemove.complete();
    this.destroy$.next();
  }
  setElementClass(elm, name, add) {
    if (add) {
      this.renderer.addClass(elm.nativeElement, name);
    } else {
      this.renderer.removeClass(elm.nativeElement, name);
    }
  }
}
ResizableDirective.ɵfac = function ResizableDirective_Factory(t) {
  return new (t || ResizableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
ResizableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ResizableDirective,
  selectors: [["", "mwlResizable", ""]],
  inputs: {
    validateResize: "validateResize",
    enableGhostResize: "enableGhostResize",
    resizeSnapGrid: "resizeSnapGrid",
    resizeCursors: "resizeCursors",
    ghostElementPositioning: "ghostElementPositioning",
    allowNegativeResizes: "allowNegativeResizes",
    mouseMoveThrottleMS: "mouseMoveThrottleMS"
  },
  outputs: {
    resizeStart: "resizeStart",
    resizing: "resizing",
    resizeEnd: "resizeEnd"
  },
  exportAs: ["mwlResizable"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mwlResizable]',
      exportAs: 'mwlResizable'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    validateResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    enableGhostResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizeSnapGrid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizeCursors: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ghostElementPositioning: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allowNegativeResizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mouseMoveThrottleMS: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizeStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    resizing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    resizeEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class PointerEventListeners {
  constructor(renderer, zone) {
    this.pointerDown = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable(observer => {
      let unsubscribeMouseDown;
      let unsubscribeTouchStart;
      zone.runOutsideAngular(() => {
        unsubscribeMouseDown = renderer.listen('document', 'mousedown', event => {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event
          });
        });
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchStart = renderer.listen('document', 'touchstart', event => {
            observer.next({
              clientX: event.touches[0].clientX,
              clientY: event.touches[0].clientY,
              event
            });
          });
        }
      });
      return () => {
        unsubscribeMouseDown();
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchStart();
        }
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
    this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable(observer => {
      let unsubscribeMouseMove;
      let unsubscribeTouchMove;
      zone.runOutsideAngular(() => {
        unsubscribeMouseMove = renderer.listen('document', 'mousemove', event => {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event
          });
        });
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchMove = renderer.listen('document', 'touchmove', event => {
            observer.next({
              clientX: event.targetTouches[0].clientX,
              clientY: event.targetTouches[0].clientY,
              event
            });
          });
        }
      });
      return () => {
        unsubscribeMouseMove();
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchMove();
        }
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
    this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable(observer => {
      let unsubscribeMouseUp;
      let unsubscribeTouchEnd;
      let unsubscribeTouchCancel;
      zone.runOutsideAngular(() => {
        unsubscribeMouseUp = renderer.listen('document', 'mouseup', event => {
          observer.next({
            clientX: event.clientX,
            clientY: event.clientY,
            event
          });
        });
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchEnd = renderer.listen('document', 'touchend', event => {
            observer.next({
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY,
              event
            });
          });
          unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', event => {
            observer.next({
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY,
              event
            });
          });
        }
      });
      return () => {
        unsubscribeMouseUp();
        if (IS_TOUCH_DEVICE) {
          unsubscribeTouchEnd();
          unsubscribeTouchCancel();
        }
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)());
  }
  static getInstance(renderer, zone) {
    if (!PointerEventListeners.instance) {
      PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
    }
    return PointerEventListeners.instance;
  }
}

/**
 * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
 *
 * For example
 *
 * ```html
 * <div mwlResizable>
 *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
 * </div>
 * ```
 * Or in case they are sibling elements:
 * ```html
 * <div mwlResizable #resizableElement="mwlResizable"></div>
 * <div mwlResizeHandle [resizableContainer]="resizableElement" [resizeEdges]="{bottom: true, right: true}"></div>
 * ```
 */
class ResizeHandleDirective {
  constructor(renderer, element, zone, resizableDirective) {
    this.renderer = renderer;
    this.element = element;
    this.zone = zone;
    this.resizableDirective = resizableDirective;
    /**
     * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
     */
    this.resizeEdges = {};
    this.eventListeners = {};
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.listenOnTheHost('mousedown').subscribe(event => {
        this.onMousedown(event, event.clientX, event.clientY);
      });
      this.listenOnTheHost('mouseup').subscribe(event => {
        this.onMouseup(event.clientX, event.clientY);
      });
      if (IS_TOUCH_DEVICE) {
        this.listenOnTheHost('touchstart').subscribe(event => {
          this.onMousedown(event, event.touches[0].clientX, event.touches[0].clientY);
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.listenOnTheHost('touchend'), this.listenOnTheHost('touchcancel')).subscribe(event => {
          this.onMouseup(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
        });
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.unsubscribeEventListeners();
  }
  /**
   * @hidden
   */
  onMousedown(event, clientX, clientY) {
    if (event.cancelable) {
      event.preventDefault();
    }
    if (!this.eventListeners.touchmove) {
      this.eventListeners.touchmove = this.renderer.listen(this.element.nativeElement, 'touchmove', touchMoveEvent => {
        this.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
      });
    }
    if (!this.eventListeners.mousemove) {
      this.eventListeners.mousemove = this.renderer.listen(this.element.nativeElement, 'mousemove', mouseMoveEvent => {
        this.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
      });
    }
    this.resizable.mousedown.next({
      clientX,
      clientY,
      edges: this.resizeEdges
    });
  }
  /**
   * @hidden
   */
  onMouseup(clientX, clientY) {
    this.unsubscribeEventListeners();
    this.resizable.mouseup.next({
      clientX,
      clientY,
      edges: this.resizeEdges
    });
  }
  // directive might be passed from DI or as an input
  get resizable() {
    return this.resizableDirective || this.resizableContainer;
  }
  onMousemove(event, clientX, clientY) {
    this.resizable.mousemove.next({
      clientX,
      clientY,
      edges: this.resizeEdges,
      event
    });
  }
  unsubscribeEventListeners() {
    Object.keys(this.eventListeners).forEach(type => {
      this.eventListeners[type]();
      delete this.eventListeners[type];
    });
  }
  listenOnTheHost(eventName) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.fromEvent)(this.element.nativeElement, eventName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$));
  }
}
ResizeHandleDirective.ɵfac = function ResizeHandleDirective_Factory(t) {
  return new (t || ResizeHandleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ResizableDirective, 8));
};
ResizeHandleDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ResizeHandleDirective,
  selectors: [["", "mwlResizeHandle", ""]],
  inputs: {
    resizeEdges: "resizeEdges",
    resizableContainer: "resizableContainer"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizeHandleDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mwlResizeHandle]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: ResizableDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    resizeEdges: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizableContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class ResizableModule {}
ResizableModule.ɵfac = function ResizableModule_Factory(t) {
  return new (t || ResizableModule)();
};
ResizableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ResizableModule
});
ResizableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [ResizableDirective, ResizeHandleDirective],
      exports: [ResizableDirective, ResizeHandleDirective]
    }]
  }], null, null);
})();

/*
 * Public API Surface of angular-resizable-element
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=angular-resizable-element.mjs.map

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tools_tools_module_ts.js.map