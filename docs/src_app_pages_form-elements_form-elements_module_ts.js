"use strict";
(self["webpackChunkazimuth"] = self["webpackChunkazimuth"] || []).push([["src_app_pages_form-elements_form-elements_module_ts"],{

/***/ 33405:
/*!*************************************************************!*\
  !*** ./src/app/pages/form-elements/form-elements.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormElementsModule": () => (/* binding */ FormElementsModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var ng_multiselect_dropdown3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-multiselect-dropdown3 */ 24273);
/* harmony import */ var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/directives/directives.module */ 19212);
/* harmony import */ var _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs/inputs.component */ 12630);
/* harmony import */ var _inputs_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputs/file-uploader/file-uploader.component */ 86828);
/* harmony import */ var _inputs_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputs/image-uploader/image-uploader.component */ 89278);
/* harmony import */ var _inputs_multiple_image_uploader_multiple_image_uploader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inputs/multiple-image-uploader/multiple-image-uploader.component */ 76091);
/* harmony import */ var _layouts_layouts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/layouts.component */ 54767);
/* harmony import */ var _validations_validations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validations/validations.component */ 93869);
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wizard/wizard.component */ 42433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86839);














const routes = [{
  path: '',
  redirectTo: 'inputs',
  pathMatch: 'full'
}, {
  path: 'inputs',
  component: _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_1__.InputsComponent,
  data: {
    breadcrumb: 'Inputs'
  }
}, {
  path: 'layouts',
  component: _layouts_layouts_component__WEBPACK_IMPORTED_MODULE_5__.LayoutsComponent,
  data: {
    breadcrumb: 'Layouts'
  }
}, {
  path: 'validations',
  component: _validations_validations_component__WEBPACK_IMPORTED_MODULE_6__.ValidationsComponent,
  data: {
    breadcrumb: 'Validations'
  }
}, {
  path: 'wizard',
  component: _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_7__.WizardComponent,
  data: {
    breadcrumb: 'Wizard'
  }
}];
class FormElementsModule {
  static #_ = this.ɵfac = function FormElementsModule_Factory(t) {
    return new (t || FormElementsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: FormElementsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, ng_multiselect_dropdown3__WEBPACK_IMPORTED_MODULE_11__.NgMultiselectDropdown3Module, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes)]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](FormElementsModule, {
    declarations: [_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_1__.InputsComponent, _inputs_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_2__.FileUploaderComponent, _inputs_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_3__.ImageUploaderComponent, _inputs_multiple_image_uploader_multiple_image_uploader_component__WEBPACK_IMPORTED_MODULE_4__.MultipleImageUploaderComponent, _layouts_layouts_component__WEBPACK_IMPORTED_MODULE_5__.LayoutsComponent, _validations_validations_component__WEBPACK_IMPORTED_MODULE_6__.ValidationsComponent, _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_7__.WizardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, ng_multiselect_dropdown3__WEBPACK_IMPORTED_MODULE_11__.NgMultiselectDropdown3Module, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 86828:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/form-elements/inputs/file-uploader/file-uploader.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploaderComponent": () => (/* binding */ FileUploaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 86477);


function FileUploaderComponent_i_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUploaderComponent_i_5_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.removeFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class FileUploaderComponent {
  fileChange(input) {
    const reader = new FileReader();
    if (input.files.length) {
      this.file = input.files[0].name;
    }
  }
  removeFile() {
    this.file = '';
  }
  static #_ = this.ɵfac = function FileUploaderComponent_Factory(t) {
    return new (t || FileUploaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FileUploaderComponent,
    selectors: [["az-file-uploader"]],
    decls: 9,
    vars: 2,
    consts: [[1, "form-group"], [1, "input-group", "file-upload"], ["type", "file", 1, "file-upload-btn", 3, "change"], ["input", ""], ["type", "text", "placeholder", "Choose a file...", 1, "form-control", 3, "value"], ["class", "fa fa-times delete-file", 3, "click", 4, "ngIf"], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-upload"], [1, "fa", "fa-times", "delete-file", 3, "click"]],
    template: function FileUploaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUploaderComponent_Template_input_change_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.fileChange(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FileUploaderComponent_i_5_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6)(7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.file);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".file-upload .file-upload-btn {\n  position: absolute;\n  width: 100%;\n  height: 35px;\n  z-index: 9;\n  opacity: 0;\n}\n.file-upload .delete-file {\n  position: absolute;\n  right: 50px;\n  top: 8px;\n  font-size: 16px;\n  opacity: 0.8;\n  cursor: pointer;\n  z-index: 99;\n  visibility: hidden;\n}\n.file-upload:hover .delete-file {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZm9ybS1lbGVtZW50cy9pbnB1dHMvZmlsZS11cGxvYWRlci9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vU2NoZWR1bGluZyUyMFNvZnR3YXJlL3NyYy9hcHAvcGFnZXMvZm9ybS1lbGVtZW50cy9pbnB1dHMvZmlsZS11cGxvYWRlci9maWxlLXVwbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVJO0VBQ0ksbUJBQUE7QUNBUiIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLXVwbG9hZHtcclxuICAgIC5maWxlLXVwbG9hZC1idG57XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAuZGVsZXRlLWZpbGV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBvcGFjaXR5OiAuODtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciAuZGVsZXRlLWZpbGV7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxufVxyXG4iLCIuZmlsZS11cGxvYWQgLmZpbGUtdXBsb2FkLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgei1pbmRleDogOTtcbiAgb3BhY2l0eTogMDtcbn1cbi5maWxlLXVwbG9hZCAuZGVsZXRlLWZpbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1MHB4O1xuICB0b3A6IDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBvcGFjaXR5OiAwLjg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogOTk7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5maWxlLXVwbG9hZDpob3ZlciAuZGVsZXRlLWZpbGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 89278:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/form-elements/inputs/image-uploader/image-uploader.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageUploaderComponent": () => (/* binding */ ImageUploaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 86477);


function ImageUploaderComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Select Image... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ImageUploaderComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Change Image... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ImageUploaderComponent_i_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageUploaderComponent_i_6_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.removeImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ImageUploaderComponent_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ImageUploaderComponent_img_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
  }
}
class ImageUploaderComponent {
  fileChange(input) {
    const reader = new FileReader();
    if (input.files.length) {
      const file = input.files[0];
      reader.onload = () => {
        this.image = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  removeImage() {
    this.image = '';
  }
  static #_ = this.ɵfac = function ImageUploaderComponent_Factory(t) {
    return new (t || ImageUploaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ImageUploaderComponent,
    selectors: [["az-image-uploader"]],
    decls: 9,
    vars: 5,
    consts: [["type", "file", 1, "img-upload-btn", 3, "change"], ["input", ""], ["type", "button", 1, "btn", "btn-main", "btn-block"], [4, "ngIf"], [1, "image-wrapper"], ["class", "fa fa-times delete-img", 3, "click", 4, "ngIf"], ["width", "100%", 4, "ngIf"], ["src", "assets/img/app/no-image.png", "width", "100%", 4, "ngIf"], [1, "fa", "fa-upload"], [1, "fa", "fa-refresh"], [1, "fa", "fa-times", "delete-img", 3, "click"], ["width", "100%"], ["src", "assets/img/app/no-image.png", "width", "100%"]],
    template: function ImageUploaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageUploaderComponent_Template_input_change_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.fileChange(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImageUploaderComponent_span_3_Template, 3, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImageUploaderComponent_span_4_Template, 3, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ImageUploaderComponent_i_6_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ImageUploaderComponent_img_7_Template, 1, 1, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ImageUploaderComponent_img_8_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.image);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".img-upload-btn {\n  position: absolute;\n  padding: 0;\n  width: calc(100% - 30px);\n  height: 38px;\n  opacity: 0;\n}\n\n.image-wrapper {\n  position: relative;\n}\n.image-wrapper .delete-img {\n  position: absolute;\n  top: 8px;\n  right: 10px;\n  border: 2px solid #fff;\n  color: #fff;\n  padding: 3px 5px;\n  border-radius: 50%;\n  visibility: hidden;\n  cursor: pointer;\n}\n.image-wrapper:hover .delete-img {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZm9ybS1lbGVtZW50cy9pbnB1dHMvaW1hZ2UtdXBsb2FkZXIvaW1hZ2UtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9TY2hlZHVsaW5nJTIwU29mdHdhcmUvc3JjL2FwcC9wYWdlcy9mb3JtLWVsZW1lbnRzL2lucHV0cy9pbWFnZS11cGxvYWRlci9pbWFnZS11cGxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRVI7QURBSTtFQUNJLG1CQUFBO0FDRVIiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXVwbG9hZC1idG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuZGVsZXRlLWltZ3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciAuZGVsZXRlLWltZ3tcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG59XHJcbiIsIi5pbWctdXBsb2FkLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBoZWlnaHQ6IDM4cHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmltYWdlLXdyYXBwZXIgLmRlbGV0ZS1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW1hZ2Utd3JhcHBlcjpob3ZlciAuZGVsZXRlLWltZyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 12630:
/*!****************************************************************!*\
  !*** ./src/app/pages/form-elements/inputs/inputs.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputsComponent": () => (/* binding */ InputsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var ng_multiselect_dropdown3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown3 */ 24273);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/directives/widget/widget.directive */ 3090);
/* harmony import */ var _theme_directives_dropzone_dropzone_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/directives/dropzone/dropzone.directive */ 90965);
/* harmony import */ var _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-uploader/file-uploader.component */ 86828);
/* harmony import */ var _image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-uploader/image-uploader.component */ 89278);
/* harmony import */ var _multiple_image_uploader_multiple_image_uploader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multiple-image-uploader/multiple-image-uploader.component */ 76091);








class InputsComponent {
  constructor() {
    this.firstControlData = [{
      id: 1,
      name: 'Option 1'
    }, {
      id: 2,
      name: 'Option 2'
    }, {
      id: 3,
      name: 'Option 3'
    }];
    this.firstControlSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false,
      enableCheckAll: false
    };
    this.secondControlData = [{
      id: 1,
      name: 'Sweden'
    }, {
      id: 2,
      name: 'Norway'
    }, {
      id: 3,
      name: 'Canada'
    }, {
      id: 4,
      name: 'USA'
    }];
    this.secondControlSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false,
      enableCheckAll: true
    };
    this.thirdControlData = [{
      id: 1,
      name: 'Sweden'
    }, {
      id: 2,
      name: 'Norway'
    }, {
      id: 3,
      name: 'Canada'
    }, {
      id: 4,
      name: 'USA'
    }];
    this.thirdControlSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      enableCheckAll: true
    };
  }
  onItemSelect(item) {
    console.log(item);
  }
  onSelectAll(items) {
    console.log(items);
  }
  static #_ = this.ɵfac = function InputsComponent_Factory(t) {
    return new (t || InputsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: InputsComponent,
    selectors: [["az-inputs"]],
    decls: 584,
    vars: 12,
    consts: [[1, "row"], [1, "col-xl-6", "col-lg-6", "col-12", "bottom-30"], ["widget", "", 1, "card"], [1, "card-header"], [1, "widget-controls"], ["data-widgster", "expand", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-down"], ["data-widgster", "collapse", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-up"], ["data-widgster", "fullscreen", "href", "#", 1, "transition"], [1, "fa", "fa-expand"], ["data-widgster", "restore", "href", "#", 1, "transition"], [1, "fa", "fa-compress"], ["data-widgster", "close", "href", "#", 1, "transition"], [1, "fa", "fa-times"], [1, "card-body", "widget-body"], [1, "form-group"], ["for", "input-1"], ["type", "text", "id", "input-1", 1, "form-control"], ["for", "input-2"], ["type", "password", "id", "input-2", 1, "form-control"], ["for", "input-3"], ["type", "text", "id", "input-3", "placeholder", "Enter your text here...", 1, "form-control"], ["for", "input-4"], ["type", "text", "id", "input-4", "value", "This is default value", 1, "form-control"], ["for", "input-5"], ["type", "text", "id", "input-5", 1, "form-control", "form-control-rounded"], ["for", "input-6"], ["type", "text", "id", "input-6", 1, "form-control"], [1, "help-block"], ["for", "input-7"], ["type", "email", "id", "input-7", "disabled", "", "value", "admin@themeseason.com", 1, "form-control"], ["for", "textarea-1"], ["id", "textarea-1", 1, "form-control"], ["for", "input-8"], ["type", "text", "id", "input-8", 1, "form-control", "form-control-sm"], ["for", "input-9"], ["type", "text", "id", "input-9", 1, "form-control", "form-control-lg"], ["for", "input-10"], ["type", "number", "value", "42", "id", "input-10", 1, "form-control"], ["for", "input-11"], ["type", "datetime-local", "value", "2011-08-19T13:45:00", "id", "input-11", 1, "form-control"], ["for", "input-12"], ["type", "date", "value", "2011-08-19", "id", "input-12", 1, "form-control"], ["for", "input-13"], ["type", "month", "value", "2011-08", "id", "input-13", 1, "form-control"], ["for", "input-14"], ["type", "week", "value", "2011-W33", "id", "input-14", 1, "form-control"], ["for", "input-15"], ["type", "time", "value", "13:45:00", "id", "input-15", 1, "form-control"], ["for", "input-16"], ["type", "color", "value", "#58bc43", "id", "input-16", 1, "form-control"], [1, "help-block", "sub-little-text"], ["widget", "", 1, "card", "bottom-30"], [1, "input-group", "mb-3"], ["type", "text", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "fa", "fa-user"], [1, "input-group-prepend"], ["type", "email", "placeholder", "email", 1, "form-control"], [1, "input-group-text", "text-primary"], ["type", "text", "placeholder", "Search for...", 1, "form-control"], ["type", "button", 1, "btn", "btn-info"], ["type", "checkbox"], ["type", "radio"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", "dropdown-toggle-split"], [1, "sr-only"], ["type", "button", 1, "btn", "btn-danger"], ["type", "text", "placeholder", "Product name", 1, "form-control"], ["type", "button", 1, "btn", "btn-success"], [1, "input-group", "input-group-sm", "mb-3"], [1, "fa", "fa-paperclip"], [1, "input-group", "input-group-lg", "mb-3"], [1, "form-group", "has-success"], ["for", "inputSuccess1", 1, "form-control-label"], ["type", "text", "id", "inputSuccess1", 1, "form-control", "form-control-success"], [1, "form-group", "has-warning"], ["for", "inputWarning1", 1, "form-control-label"], ["type", "text", "id", "inputWarning1", 1, "form-control", "form-control-warning"], [1, "form-group", "has-danger"], ["for", "inputDanger1", 1, "form-control-label"], ["type", "text", "id", "inputDanger1", 1, "form-control", "form-control-danger"], ["for", "input-primary", 1, "text-primary"], ["type", "text", "id", "input-primary", 1, "form-control", "bg-primary", "text-white"], ["for", "input-success", 1, "text-success"], ["type", "text", "id", "input-success", 1, "form-control", "bg-success", "text-white"], ["for", "input-info", 1, "text-info"], ["type", "text", "id", "input-info", 1, "form-control", "bg-info", "text-white"], ["for", "input-warning", 1, "text-warning"], ["type", "text", "id", "input-warning", 1, "form-control", "bg-warning", "text-white"], ["for", "input-danger", 1, "text-danger"], ["type", "text", "id", "input-danger", 1, "form-control", "bg-danger", "text-white"], [1, "row", "bottom-30"], [1, "col"], [1, "card-body", "widget-body", "row", "mbm-20"], [1, "col-md-4", "col-12", "bottom-15"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "checkboxDefault", 1, "custom-control-input"], ["for", "checkboxDefault", 1, "custom-control-label"], ["type", "checkbox", "id", "checkboxPrimary", "checked", "", 1, "custom-control-input", "checkbox-primary"], ["for", "checkboxPrimary", 1, "custom-control-label"], ["type", "checkbox", "id", "checkboxSuccess", "checked", "", 1, "custom-control-input", "checkbox-success"], ["for", "checkboxSuccess", 1, "custom-control-label"], ["type", "checkbox", "id", "checkboxInfo", 1, "custom-control-input", "checkbox-info"], ["for", "checkboxInfo", 1, "custom-control-label"], ["type", "checkbox", "id", "checkboxWarning", "checked", "", 1, "custom-control-input", "checkbox-warning"], ["for", "checkboxWarning", 1, "custom-control-label"], ["type", "checkbox", "id", "checkboxDanger", 1, "custom-control-input", "checkbox-danger"], ["for", "checkboxDanger", 1, "custom-control-label"], ["type", "checkbox", "id", "checkboxMain", 1, "custom-control-input", "checkbox-main"], ["for", "checkboxMain", 1, "custom-control-label"], [1, "custom-control", "custom-checkbox", "checkbox-circle"], ["type", "checkbox", "id", "checkboxDefault2", "checked", "", 1, "custom-control-input"], ["for", "checkboxDefault2", 1, "custom-control-label"], ["type", "checkbox", "id", "checkboxPrimary2", 1, "custom-control-input", "checkbox-primary"], ["for", "checkboxPrimary2", 1, "custom-control-label"], ["type", "checkbox", "id", "checkboxSuccess2", "checked", "", 1, "custom-control-input", "checkbox-success"], ["for", "checkboxSuccess2", 1, "custom-control-label"], ["type", "checkbox", "id", "checkboxInfo2", "checked", "", 1, "custom-control-input", "checkbox-info"], ["for", "checkboxInfo2", 1, "custom-control-label"], ["type", "checkbox", "id", "checkboxWarning2", 1, "custom-control-input", "checkbox-warning"], ["for", "checkboxWarning2", 1, "custom-control-label"], ["type", "checkbox", "id", "checkboxDanger2", "checked", "", 1, "custom-control-input", "checkbox-danger"], ["for", "checkboxDanger2", 1, "custom-control-label"], ["type", "checkbox", "id", "checkboxMain2", "checked", "", 1, "custom-control-input", "checkbox-main"], ["for", "checkboxMain2", 1, "custom-control-label"], [1, "col-md-4", "col-12"], [1, "abc-checkbox"], ["id", "checkbox1", "type", "checkbox"], ["for", "checkbox1"], [1, "abc-checkbox", "abc-checkbox-primary"], ["id", "checkbox2", "type", "checkbox", "checked", ""], ["for", "checkbox2"], [1, "abc-checkbox", "abc-checkbox-success"], ["id", "checkbox3", "type", "checkbox"], ["for", "checkbox3"], [1, "abc-checkbox", "abc-checkbox-info"], ["id", "checkbox4", "type", "checkbox", "checked", ""], ["for", "checkbox4"], [1, "abc-checkbox", "abc-checkbox-warning"], ["id", "checkbox5", "type", "checkbox"], ["for", "checkbox5"], [1, "abc-checkbox", "abc-checkbox-danger"], ["id", "checkbox6", "type", "checkbox", "checked", ""], ["for", "checkbox6"], ["checked", "", "disabled", "", "id", "disabled-checkbox", "type", "checkbox"], ["for", "disabled-checkbox"], [1, "col", "bottom-15"], [1, "custom-control", "custom-radio", "custom-control-inline"], ["id", "radio1", "type", "radio", "name", "radioInline", "checked", "", 1, "custom-control-input"], ["for", "radio1", 1, "custom-control-label"], ["id", "radio2", "type", "radio", "name", "radioInline", 1, "custom-control-input"], ["for", "radio2", 1, "custom-control-label"], [1, "row", "pl-3", "pr-3"], [1, "col-md-6", "col-12", "bottom-15"], [1, "custom-control", "custom-radio"], ["type", "radio", "name", "radio", "id", "radioDefault", 1, "custom-control-input"], ["for", "radioDefault", 1, "custom-control-label"], ["type", "radio", "name", "radio", "id", "radioPrimary", 1, "custom-control-input", "radio-primary"], ["for", "radioPrimary", 1, "custom-control-label"], ["type", "radio", "name", "radio", "id", "radioSuccess", "checked", "", 1, "custom-control-input", "radio-success"], ["for", "radioSuccess", 1, "custom-control-label"], ["type", "radio", "name", "radio", "id", "radioInfo", 1, "custom-control-input", "radio-info"], ["for", "radioInfo", 1, "custom-control-label"], ["type", "radio", "name", "radio", "id", "radioWarning", 1, "custom-control-input", "radio-warning"], ["for", "radioWarning", 1, "custom-control-label"], ["type", "radio", "name", "radio", "id", "radioDanger", 1, "custom-control-input", "radio-danger"], ["for", "radioDanger", 1, "custom-control-label"], ["type", "radio", "name", "radio", "id", "radioMain", 1, "custom-control-input", "radio-main"], ["for", "radioMain", 1, "custom-control-label"], [1, "col-md-6", "col-12"], [1, "abc-radio"], ["type", "radio", "name", "abc-radio", "id", "abc-radio1", "checked", ""], ["for", "abc-radio1"], [1, "abc-radio", "abc-radio-primary"], ["type", "radio", "name", "abc-radio", "id", "abc-radio2"], ["for", "abc-radio2"], [1, "abc-radio", "abc-radio-success"], ["type", "radio", "name", "abc-radio", "id", "abc-radio3"], ["for", "abc-radio3"], [1, "abc-radio", "abc-radio-info"], ["type", "radio", "name", "abc-radio", "id", "abc-radio4"], ["for", "abc-radio4"], [1, "abc-radio", "abc-radio-warning"], ["type", "radio", "name", "abc-radio", "id", "abc-radio5"], ["for", "abc-radio5"], [1, "abc-radio", "abc-radio-danger"], ["type", "radio", "name", "abc-radio", "id", "abc-radio6"], ["for", "abc-radio6"], ["for", "exampleSelect1"], ["id", "exampleSelect1", 1, "form-control"], ["for", "exampleSelect2"], ["multiple", "", "id", "exampleSelect2", 1, "form-control"], ["for", "exampleSelect3"], ["id", "exampleSelect3", 1, "form-control", "custom-select"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["widget", "", 1, "card", "o-visible"], [1, "col-12"], [1, "ml-3"], ["href", "https://www.npmjs.com/package/ng-multiselect-dropdown3", "target", "_blank"], [3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onSelectAll"], [1, "col-lg-4", "col-12", "bottom-15"], [1, "col-lg-8", "col-12", "bottom-15"], [1, "text-center"], ["dropzone", "", "action", "#", "id", "my-awesome-dropzone", 1, "dropzone"]],
    template: function InputsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "STANDARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 15)(18, "form")(19, "div", 16)(20, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 16)(24, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 16)(28, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "With placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 16)(32, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "With default value");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 16)(36, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Rounded Corners");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 16)(40, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "With help text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "A block of help text that breaks onto a new line and may extend beyond one line.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 16)(46, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 16)(50, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "textarea", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 16)(54, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Small Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 16)(58, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Large Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 16)(62, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 16)(66, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Date and time");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 16)(70, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 16)(74, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 16)(78, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](80, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 16)(82, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 16)(86, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](88, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "span", 52)(90, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, " type=\"color\" is not supported in Internet Explorer 11 and earlier versions or Safari 9.1 and earlier versions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 1)(94, "div", 53)(95, "div", 3)(96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "INPUT GROUPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 4)(99, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](100, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](102, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](104, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](106, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](108, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div", 15)(110, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](111, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 56)(113, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](114, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "div", 54)(116, "div", 59)(117, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](119, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "div", 56)(121, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](124, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 56)(126, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "@domain.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](129, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "div", 56)(131, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "Go!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div", 54)(134, "div", 59)(135, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](136, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, "0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](139, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "div", 54)(141, "div", 59)(142, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](143, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](144, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "div", 54)(146, "div", 59)(147, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](148, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](149, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "div", 54)(151, "div", 59)(152, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "div", 67)(155, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](156, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](158, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](159, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](160, "div", 54)(161, "div", 59)(162, "button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "button", 70)(165, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](166, "Toggle Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "div", 67)(168, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](169, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](170, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](171, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](172, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](173, "div", 54)(174, "div", 59)(175, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](176, "Hate it");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](177, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](178, "div", 56)(179, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](180, "Love it");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "div", 75)(182, "div", 59)(183, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](184, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](185, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](186, "div", 77)(187, "div", 59)(188, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](189, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](190, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](191, "div", 2)(192, "div", 3)(193, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](194, "INPUT COLORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](195, "div", 4)(196, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](197, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](198, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](199, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](201, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](202, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](203, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](204, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](205, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](206, "div", 15)(207, "div", 78)(208, "label", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](209, "Input with success");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](210, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](211, "div", 81)(212, "label", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](213, "Input with warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](214, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](215, "div", 84)(216, "label", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](217, "Input with danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](218, "input", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](219, "div", 16)(220, "label", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](221, "Primary input");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](222, "input", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](223, "div", 16)(224, "label", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](225, "Success input");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](226, "input", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](227, "div", 16)(228, "label", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](229, "Info input");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](230, "input", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](231, "div", 16)(232, "label", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](233, "Warning input");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](234, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](235, "div", 16)(236, "label", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](237, "Danger input");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](238, "input", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](239, "div", 97)(240, "div", 98)(241, "div", 2)(242, "div", 3)(243, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](244, "CHECKBOX");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](245, "div", 4)(246, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](247, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](248, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](249, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](250, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](251, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](252, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](253, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](254, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](255, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](256, "div", 99)(257, "div", 100)(258, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](259, "Custom checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](260, "div", 16)(261, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](262, "input", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](263, "label", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](264, "Custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](265, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](266, "input", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](267, "label", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](268, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](269, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](270, "input", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](271, "label", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](272, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](273, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](274, "input", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](275, "label", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](276, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](277, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](278, "input", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](279, "label", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](280, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](281, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](282, "input", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](283, "label", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](284, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](285, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](286, "input", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](287, "label", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](288, "Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](289, "div", 100)(290, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](291, "Circled checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](292, "div", 16)(293, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](294, "input", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](295, "label", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](296, "Custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](297, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](298, "input", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](299, "label", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](300, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](301, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](302, "input", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](303, "label", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](304, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](305, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](306, "input", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](307, "label", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](308, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](309, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](310, "input", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](311, "label", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](312, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](313, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](314, "input", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](315, "label", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](316, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](317, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](318, "input", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](319, "label", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](320, "Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](321, "div", 131)(322, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](323, "ABC checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](324, "div", 16)(325, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](326, "input", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](327, "label", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](328, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](329, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](330, "input", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](331, "label", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](332, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](333, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](334, "input", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](335, "label", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](336, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](337, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](338, "input", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](339, "label", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](340, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](341, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](342, "input", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](343, "label", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](344, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](345, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](346, "input", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](347, "label", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](348, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](349, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](350, "input", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](351, "label", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](352, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](353, "div", 0)(354, "div", 1)(355, "div", 2)(356, "div", 3)(357, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](358, "RADIO BUTTON");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](359, "div", 4)(360, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](361, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](362, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](363, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](364, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](365, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](366, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](367, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](368, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](369, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](370, "div", 15)(371, "div", 152)(372, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](373, "Inline radio buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](374, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](375, "input", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](376, "label", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](377, "radio button 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](378, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](379, "input", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](380, "label", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](381, "radio button 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](382, "div", 158)(383, "div", 159)(384, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](385, "Custom radio buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](386, "div", 16)(387, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](388, "input", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](389, "label", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](390, "Custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](391, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](392, "input", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](393, "label", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](394, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](395, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](396, "input", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](397, "label", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](398, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](399, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](400, "input", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](401, "label", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](402, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](403, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](404, "input", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](405, "label", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](406, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](407, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](408, "input", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](409, "label", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](410, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](411, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](412, "input", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](413, "label", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](414, "Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](415, "div", 175)(416, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](417, "ABC radio buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](418, "div", 16)(419, "div", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](420, "input", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](421, "label", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](422, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](423, "div", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](424, "input", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](425, "label", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](426, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](427, "div", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](428, "input", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](429, "label", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](430, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](431, "div", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](432, "input", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](433, "label", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](434, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](435, "div", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](436, "input", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](437, "label", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](438, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](439, "div", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](440, "input", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](441, "label", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](442, "Danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](443, "div", 1)(444, "div", 2)(445, "div", 3)(446, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](447, "SELECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](448, "div", 4)(449, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](450, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](451, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](452, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](453, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](454, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](455, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](456, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](457, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](458, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](459, "div", 15)(460, "div", 16)(461, "label", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](462, "Example select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](463, "select", 195)(464, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](465, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](466, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](467, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](468, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](469, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](470, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](471, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](472, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](473, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](474, "div", 16)(475, "label", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](476, "Example multiple select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](477, "select", 197)(478, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](479, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](480, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](481, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](482, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](483, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](484, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](485, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](486, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](487, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](488, "div", 16)(489, "label", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](490, "Custom select");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](491, "select", 199)(492, "option", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](493, "Open this select menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](494, "option", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](495, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](496, "option", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](497, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](498, "option", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](499, "Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](500, "div", 97)(501, "div", 98)(502, "div", 204)(503, "div", 3)(504, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](505, "Angular 2 Dropdown Multiselect");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](506, "div", 4)(507, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](508, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](509, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](510, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](511, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](512, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](513, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](514, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](515, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](516, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](517, "div", 99)(518, "div", 205)(519, "p", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](520, "Angular multiselect dropdown component for web applications. More information: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](521, "a", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](522, "Angular Multiselect Dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](523, "div", 100)(524, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](525, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](526, "ng-multiselect-dropdown3", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InputsComponent_Template_ng_multiselect_dropdown3_ngModelChange_526_listener($event) {
          return ctx.firstControlModel = $event;
        })("onSelect", function InputsComponent_Template_ng_multiselect_dropdown3_onSelect_526_listener($event) {
          return ctx.onItemSelect($event);
        })("onSelectAll", function InputsComponent_Template_ng_multiselect_dropdown3_onSelectAll_526_listener($event) {
          return ctx.onSelectAll($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](527, "div", 100)(528, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](529, "Select all/none");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](530, "ng-multiselect-dropdown3", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InputsComponent_Template_ng_multiselect_dropdown3_ngModelChange_530_listener($event) {
          return ctx.secondControlModel = $event;
        })("onSelect", function InputsComponent_Template_ng_multiselect_dropdown3_onSelect_530_listener($event) {
          return ctx.onItemSelect($event);
        })("onSelectAll", function InputsComponent_Template_ng_multiselect_dropdown3_onSelectAll_530_listener($event) {
          return ctx.onSelectAll($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](531, "div", 100)(532, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](533, "Search filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](534, "ng-multiselect-dropdown3", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function InputsComponent_Template_ng_multiselect_dropdown3_ngModelChange_534_listener($event) {
          return ctx.thirdControlModel = $event;
        })("onSelect", function InputsComponent_Template_ng_multiselect_dropdown3_onSelect_534_listener($event) {
          return ctx.onItemSelect($event);
        })("onSelectAll", function InputsComponent_Template_ng_multiselect_dropdown3_onSelectAll_534_listener($event) {
          return ctx.onSelectAll($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](535, "div", 97)(536, "div", 205)(537, "div", 2)(538, "div", 3)(539, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](540, "UPLOADS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](541, "div", 4)(542, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](543, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](544, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](545, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](546, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](547, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](548, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](549, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](550, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](551, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](552, "div", 15)(553, "div", 0)(554, "div", 209)(555, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](556, "File upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](557, "az-file-uploader");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](558, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](559, "Image upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](560, "az-image-uploader");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](561, "div", 210)(562, "h6", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](563, "Multiple Image Uploader");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](564, "az-multiple-image-uploader");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](565, "div", 0)(566, "div", 98)(567, "div", 2)(568, "div", 3)(569, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](570, "DROP ZONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](571, "div", 4)(572, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](573, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](574, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](575, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](576, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](577, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](578, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](579, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](580, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](581, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](582, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](583, "form", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](526);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", "Custom placeholder")("settings", ctx.firstControlSettings)("data", ctx.firstControlData)("ngModel", ctx.firstControlModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", "Custom placeholder")("settings", ctx.secondControlSettings)("data", ctx.secondControlData)("ngModel", ctx.secondControlModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", "Custom placeholder")("settings", ctx.thirdControlSettings)("data", ctx.thirdControlData)("ngModel", ctx.thirdControlModel);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, ng_multiselect_dropdown3__WEBPACK_IMPORTED_MODULE_7__.NgMultiselectDropdown3Component, _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__.Widget, _theme_directives_dropzone_dropzone_directive__WEBPACK_IMPORTED_MODULE_1__.DropzoneUpload, _file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_2__.FileUploaderComponent, _image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_3__.ImageUploaderComponent, _multiple_image_uploader_multiple_image_uploader_component__WEBPACK_IMPORTED_MODULE_4__.MultipleImageUploaderComponent],
    encapsulation: 2
  });
}


/***/ }),

/***/ 76091:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/form-elements/inputs/multiple-image-uploader/multiple-image-uploader.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultipleImageUploaderComponent": () => (/* binding */ MultipleImageUploaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 86477);


function MultipleImageUploaderComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultipleImageUploaderComponent_div_7_Template_i_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const i_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.removeImage(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", image_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class MultipleImageUploaderComponent {
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.images = [];
  }
  fileChange(input) {
    this.readFiles(input.files);
  }
  readFile(file, reader, callback) {
    reader.onload = () => {
      callback(reader.result);
    };
    reader.readAsDataURL(file);
  }
  readFiles(files, index = 0) {
    let reader = new FileReader();
    if (index in files) {
      this.readFile(files[index], reader, result => {
        this.images.push(result);
        this.readFiles(files, index + 1);
      });
    } else {
      this.changeDetectorRef.detectChanges();
    }
  }
  removeImage(index) {
    this.images.splice(index, 1);
  }
  static #_ = this.ɵfac = function MultipleImageUploaderComponent_Factory(t) {
    return new (t || MultipleImageUploaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MultipleImageUploaderComponent,
    selectors: [["az-multiple-image-uploader"]],
    decls: 8,
    vars: 1,
    consts: [[1, "col-8", "mx-auto"], ["type", "file", "multiple", "", 1, "m-img-upload-btn", 3, "change"], ["input", ""], ["type", "button", 1, "btn", "btn-success", "btn-block"], [1, "fa", "fa-upload"], [1, "card", "images-container"], ["class", "m-image-wrapper", 4, "ngFor", "ngForOf"], [1, "m-image-wrapper"], [1, "fa", "fa-times", "m-delete-img", 3, "click"]],
    template: function MultipleImageUploaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MultipleImageUploaderComponent_Template_input_change_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.fileChange(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Choose images... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MultipleImageUploaderComponent_div_7_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: [".m-img-upload-btn {\n  position: absolute;\n  padding: 0;\n  width: calc(100% - 30px);\n  height: 38px;\n  opacity: 0;\n}\n\n.images-container {\n  width: 100%;\n  top: 15px;\n  border: 2px dashed #ccc;\n  background: rgb(241, 241, 241);\n  min-height: 293px;\n  padding: 10px;\n  display: block;\n}\n.images-container .m-image-wrapper {\n  position: relative;\n  display: inline-block;\n  margin: 10px;\n  width: 120px;\n  height: 120px;\n}\n.images-container .m-image-wrapper .m-delete-img {\n  position: absolute;\n  top: 8px;\n  right: 10px;\n  border: 2px solid #fff;\n  color: #fff;\n  padding: 3px 5px;\n  border-radius: 50%;\n  visibility: hidden;\n  cursor: pointer;\n}\n.images-container .m-image-wrapper:hover .m-delete-img {\n  visibility: visible;\n}\n.images-container .m-image-wrapper img {\n  width: 120px;\n  height: 120px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZm9ybS1lbGVtZW50cy9pbnB1dHMvbXVsdGlwbGUtaW1hZ2UtdXBsb2FkZXIvbXVsdGlwbGUtaW1hZ2UtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9TY2hlZHVsaW5nJTIwU29mdHdhcmUvc3JjL2FwcC9wYWdlcy9mb3JtLWVsZW1lbnRzL2lucHV0cy9tdWx0aXBsZS1pbWFnZS11cGxvYWRlci9tdWx0aXBsZS1pbWFnZS11cGxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNFSjtBRERJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0dSO0FERlE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0laO0FERlE7RUFDSSxtQkFBQTtBQ0laO0FERlE7RUFDRyxZQUFBO0VBQ0EsYUFBQTtBQ0lYIiwic291cmNlc0NvbnRlbnQiOlsiLm0taW1nLXVwbG9hZC1idG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4uaW1hZ2VzLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICNjY2M7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgICBtaW4taGVpZ2h0OiAyOTNweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC5tLWltYWdlLXdyYXBwZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgLm0tZGVsZXRlLWltZ3tcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIC5tLWRlbGV0ZS1pbWd7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgaGVpZ2h0OiAxMjBweDsgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSAgIFxyXG59XHJcblxyXG4iLCIubS1pbWctdXBsb2FkLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBoZWlnaHQ6IDM4cHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5pbWFnZXMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMTVweDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNjY2M7XG4gIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcbiAgbWluLWhlaWdodDogMjkzcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmltYWdlcy1jb250YWluZXIgLm0taW1hZ2Utd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cbi5pbWFnZXMtY29udGFpbmVyIC5tLWltYWdlLXdyYXBwZXIgLm0tZGVsZXRlLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbWFnZXMtY29udGFpbmVyIC5tLWltYWdlLXdyYXBwZXI6aG92ZXIgLm0tZGVsZXRlLWltZyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uaW1hZ2VzLWNvbnRhaW5lciAubS1pbWFnZS13cmFwcGVyIGltZyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 54767:
/*!******************************************************************!*\
  !*** ./src/app/pages/form-elements/layouts/layouts.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutsComponent": () => (/* binding */ LayoutsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/directives/widget/widget.directive */ 3090);



class LayoutsComponent {
  static #_ = this.ɵfac = function LayoutsComponent_Factory(t) {
    return new (t || LayoutsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LayoutsComponent,
    selectors: [["az-layouts"]],
    decls: 182,
    vars: 0,
    consts: [[1, "row", "bottom-30"], [1, "col"], ["widget", "", 1, "card"], [1, "card-header"], [1, "widget-controls"], ["data-widgster", "expand", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-down"], ["data-widgster", "collapse", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-up"], ["data-widgster", "fullscreen", "href", "#", 1, "transition"], [1, "fa", "fa-expand"], ["data-widgster", "restore", "href", "#", 1, "transition"], [1, "fa", "fa-compress"], ["data-widgster", "close", "href", "#", 1, "transition"], [1, "fa", "fa-times"], [1, "card-body", "widget-body"], [1, "row", "form-inline"], [1, "form-group", "col-md-3", "col-sm-6"], ["type", "email", "placeholder", "Email", 1, "form-control"], ["type", "password", "placeholder", "Password", 1, "form-control"], [1, "form-group", "col-lg-2", "col-md-3", "col-sm-6"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "checkboxRemember", 1, "custom-control-input"], ["for", "checkboxRemember", 1, "custom-control-label"], ["type", "submit", 1, "btn", "btn-main"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-12", "bottom-30"], [1, "form"], [1, "form-group"], ["for", "email-b-f"], ["id", "email-b-f", "type", "email", 1, "form-control"], ["for", "password-b-f"], ["id", "password-b-f", "type", "password", 1, "form-control"], [1, "form-group", "d-flex", "justify-content-between"], ["type", "checkbox", "id", "checkbox-b-f", "checked", "", 1, "custom-control-input", "checkbox-main"], ["for", "checkbox-b-f", 1, "custom-control-label"], ["href", "javascript:void(0);", 1, "text-primary", "align-middle"], ["type", "submit", 1, "btn", "btn-main", "btn-block"], [1, "card-title", "text-center"], [1, "form-horizontal"], [1, "form-group", "row", "text-sm-right"], ["for", "email-h-f", 1, "col-sm-3", "form-control-label", "m-t-5"], [1, "col-sm-9"], ["type", "email", "id", "email-h-t", 1, "form-control"], ["for", "password-h-f", 1, "col-sm-3", "form-control-label", "m-t-5"], ["type", "password", "id", "password-h-f", 1, "form-control"], ["for", "re-password-h-f", 1, "col-sm-3", "form-control-label", "m-t-5"], ["type", "password", "id", "re-password-h-f", 1, "form-control"], [1, "form-group", "row"], [1, "col-sm-9", "ml-sm-auto", "d-flex", "justify-content-between"], ["type", "checkbox", "id", "checkbox-h-f", "checked", "", 1, "custom-control-input", "checkbox-main"], ["for", "checkbox-h-f", 1, "custom-control-label"], ["type", "submit", 1, "btn", "btn-main", "pull-right"], ["type", "text", "placeholder", "Recipients", 1, "form-control"], ["type", "text", "placeholder", "Subject", 1, "form-control"], ["placeholder", "Message", "rows", "3", 1, "form-control"], [1, "col-sm-6"], ["for", "inputFirstName"], ["type", "text", "id", "inputFirstName", "placeholder", "First Name", 1, "form-control"], ["for", "inputLastName"], ["type", "text", "id", "inputLastName", "placeholder", "Last Name", 1, "form-control"], ["type", "email", "id", "inputEmail", "placeholder", "Email", 1, "form-control"], ["for", "inputWebsite"], ["type", "text", "id", "inputWebsite", "placeholder", "Website", 1, "form-control"], [1, "row", "justify-content-center"]],
    template: function LayoutsComponent_Template(rf, ctx) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15)(18, "form", 16)(19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 20)(24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17)(29, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 25)(32, "div", 26)(33, "div", 2)(34, "div", 3)(35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "BASIC FORM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 4)(38, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 15)(49, "form", 27)(50, "div", 28)(51, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 28)(55, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 33)(59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Keep me signed in.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 28)(66, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 26)(69, "div", 2)(70, "div", 3)(71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "HORIZONTAL FORM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 4)(74, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 15)(85, "h6", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "To enjoy more, sing in!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "form", 39)(88, "div", 40)(89, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 40)(94, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 40)(99, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Re Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 48)(104, "div", 49)(105, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Keep me signed in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 25)(112, "div", 26)(113, "div", 2)(114, "div", 3)(115, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "FORM WITHOUT LABELS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 4)(118, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 15)(129, "form")(130, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "textarea", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 26)(139, "div", 2)(140, "div", 3)(141, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "BLOCK FORM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 4)(144, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 15)(155, "h6", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Fill in the fields!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 25)(158, "div", 56)(159, "div", 28)(160, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 56)(164, "div", 28)(165, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 25)(169, "div", 56)(170, "div", 28)(171, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 56)(175, "div", 28)(176, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 64)(180, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__.Widget],
    encapsulation: 2
  });
}


/***/ }),

/***/ 93869:
/*!**************************************************************************!*\
  !*** ./src/app/pages/form-elements/validations/validations.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationsComponent": () => (/* binding */ ValidationsComponent),
/* harmony export */   "emailValidator": () => (/* binding */ emailValidator),
/* harmony export */   "matchingPasswords": () => (/* binding */ matchingPasswords),
/* harmony export */   "websiteValidator": () => (/* binding */ websiteValidator)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../theme/directives/widget/widget.directive */ 3090);





function ValidationsComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ValidationsComponent_span_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ValidationsComponent_span_32_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Minimum of 3 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ValidationsComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ValidationsComponent_span_32_span_1_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ValidationsComponent_span_32_span_2_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.myForm.get("minLength").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.myForm.get("minLength").hasError("minlength"));
  }
}
function ValidationsComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ValidationsComponent_span_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Maximum of 10 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ValidationsComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ValidationsComponent_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ValidationsComponent_span_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ValidationsComponent_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password isn't long enough, minimum of 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ValidationsComponent_span_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ValidationsComponent_span_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ValidationsComponent_span_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Website is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ValidationsComponent_span_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid url address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class ValidationsComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      simple: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      minLength: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3)])],
      maxLength: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(10)])],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, emailValidator])],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      website: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, websiteValidator])]
    }, {
      validator: matchingPasswords('password', 'confirmPassword')
    });
  }
  onSubmit({
    value,
    valid
  }) {
    console.log(value, valid);
  }
  static #_ = this.ɵfac = function ValidationsComponent_Factory(t) {
    return new (t || ValidationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ValidationsComponent,
    selectors: [["az-validations"]],
    decls: 72,
    vars: 14,
    consts: [[1, "row"], [1, "col"], ["widget", "", 1, "card"], [1, "card-header"], [1, "widget-controls"], ["data-widgster", "expand", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-down"], ["data-widgster", "collapse", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-up"], ["data-widgster", "fullscreen", "href", "#", 1, "transition"], [1, "fa", "fa-expand"], ["data-widgster", "restore", "href", "#", 1, "transition"], [1, "fa", "fa-compress"], ["data-widgster", "close", "href", "#", 1, "transition"], [1, "fa", "fa-times"], [1, "card-body", "widget-body"], [1, "row", "justify-content-center"], [1, "col-md-9", "col-12"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row", "text-sm-right"], [1, "col-sm-3", "form-control-label", "m-t-5"], [1, "col-sm-8", "text-left"], ["type", "text", "formControlName", "simple", "required", "", 1, "form-control", "checking-field"], ["class", "help-block text-danger", 4, "ngIf"], ["type", "text", "formControlName", "minLength", "required", "", 1, "form-control", "checking-field"], ["class", "help-block", 4, "ngIf"], ["type", "text", "formControlName", "maxLength", "required", "", 1, "form-control", "checking-field"], ["type", "email", "formControlName", "email", "required", "", 1, "form-control", "checking-field"], ["type", "password", "formControlName", "password", "minlength", "6", "required", "", 1, "form-control", "checking-field"], ["type", "password", "formControlName", "confirmPassword", "required", "", 1, "form-control", "checking-field"], ["type", "text", "formControlName", "website", "required", "", 1, "form-control", "checking-field"], [1, "form-group", "row"], [1, "col-sm-8", "mx-auto", "text-center"], ["type", "submit", 1, "btn", "btn-main", 3, "disabled"], [1, "help-block", "text-danger"], [1, "help-block"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
    template: function ValidationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "VALIDATORS");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15)(18, "div", 16)(19, "div", 17)(20, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ValidationsComponent_Template_form_ngSubmit_20_listener() {
          return ctx.onSubmit(ctx.myForm);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 19)(22, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ValidationsComponent_span_26_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19)(28, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Min length (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ValidationsComponent_span_32_Template, 3, 2, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 19)(34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Max length (10)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ValidationsComponent_span_38_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ValidationsComponent_span_39_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 19)(41, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ValidationsComponent_span_45_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ValidationsComponent_span_46_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 19)(48, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, ValidationsComponent_span_52_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, ValidationsComponent_span_53_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 19)(55, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, ValidationsComponent_span_59_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, ValidationsComponent_span_60_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 19)(62, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, ValidationsComponent_span_66_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, ValidationsComponent_span_67_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 31)(69, "div", 32)(70, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Validate & Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.get("simple").touched && ctx.myForm.get("simple").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.get("minLength").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.get("maxLength").touched && ctx.myForm.get("maxLength").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.get("maxLength").touched && ctx.myForm.get("maxLength").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.get("email").touched && ctx.myForm.get("email").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.get("email").touched && ctx.myForm.get("email").hasError("invalidEmail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.get("password").touched && ctx.myForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.get("password").touched && ctx.myForm.get("password").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.get("confirmPassword").touched && ctx.myForm.get("confirmPassword").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.get("confirmPassword").touched && ctx.myForm.get("confirmPassword").hasError("mismatchedPasswords"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.get("website").touched && ctx.myForm.get("website").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.myForm.get("website").touched && ctx.myForm.get("website").hasError("invalidUrl"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.myForm.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_0__.Widget],
    encapsulation: 2
  });
}

function emailValidator(control) {
  var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (control.value && !emailRegexp.test(control.value)) {
    return {
      invalidEmail: true
    };
  }
  return {
    invalidEmail: false
  };
}
function websiteValidator(control) {
  var websiteRegexp = /(https?:\/\/)?([\w\d]+\.)?[\w\d]+\.\w+\/?.+$/;
  if (control.value && !websiteRegexp.test(control.value)) {
    return {
      invalidUrl: true
    };
  }
  return {
    invalidUrl: true
  };
}
function matchingPasswords(passwordKey, passwordConfirmationKey) {
  return group => {
    let password = group.controls[passwordKey];
    let passwordConfirmation = group.controls[passwordConfirmationKey];
    if (password.value !== passwordConfirmation.value) {
      return passwordConfirmation.setErrors({
        mismatchedPasswords: true
      });
    }
  };
}

/***/ }),

/***/ 30221:
/*!*************************************************************************!*\
  !*** ./src/app/pages/form-elements/wizard/wizard-validation.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WizardValidationService": () => (/* binding */ WizardValidationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class WizardValidationService {
  static emailValidator(control) {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
      return {
        invalidEmail: true
      };
    }
    return {
      invalidEmail: false
    };
  }
  static matchingPasswords(passwordKey, passwordConfirmationKey) {
    return group => {
      let password = group.controls[passwordKey];
      let passwordConfirmation = group.controls[passwordConfirmationKey];
      if (password.value !== passwordConfirmation.value) {
        return passwordConfirmation.setErrors({
          mismatchedPasswords: true
        });
      }
    };
  }
  static numberValidator(control) {
    var onlyNumberRegexp = /.*[^0-9].*/;
    if (control.value && onlyNumberRegexp.test(control.value)) {
      return {
        invalidNumber: true
      };
    }
    return {
      invalidNumber: false
    };
  }
  static #_ = this.ɵfac = function WizardValidationService_Factory(t) {
    return new (t || WizardValidationService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: WizardValidationService,
    factory: WizardValidationService.ɵfac
  });
}


/***/ }),

/***/ 42433:
/*!****************************************************************!*\
  !*** ./src/app/pages/form-elements/wizard/wizard.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WizardComponent": () => (/* binding */ WizardComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _wizard_validation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wizard-validation.service */ 30221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/directives/widget/widget.directive */ 3090);






const _c0 = function (a0) {
  return {
    "last": a0
  };
};
function WizardComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    const last_r5 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", step_r4.active)("valid", step_r4.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, last_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fa ", step_r4.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", step_r4.active)("valid", step_r4.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](step_r4.name);
  }
}
function WizardComponent_div_20_form_5_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_5_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_5_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password isn't long enough, minimum of 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_5_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_5_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_5_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_5_span_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0, a1) {
  return {
    "has-danger": a0,
    "has-success": a1
  };
};
const _c2 = function (a0, a1) {
  return {
    "form-control-danger": a0,
    "form-control-success": a1
  };
};
function WizardComponent_div_20_form_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 29)(1, "div", 30)(2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 32)(5, "div", 33)(6, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, WizardComponent_div_20_form_5_span_9_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 38)(11, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 32)(14, "div", 33)(15, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, WizardComponent_div_20_form_5_span_18_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, WizardComponent_div_20_form_5_span_19_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 38)(21, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 32)(24, "div", 33)(25, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, WizardComponent_div_20_form_5_span_28_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, WizardComponent_div_20_form_5_span_29_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 38)(31, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 32)(34, "div", 33)(35, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, WizardComponent_div_20_form_5_span_38_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, WizardComponent_div_20_form_5_span_39_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const step_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r7.accountForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](16, _c1, step_r6.hasError && ctx_r7.accountForm.get("username").hasError("required"), !ctx_r7.accountForm.get("username").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](19, _c2, ctx_r7.accountForm.get("username").hasError("required"), !ctx_r7.accountForm.get("username").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r7.accountForm.get("username").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](22, _c1, step_r6.hasError && ctx_r7.accountForm.get("password").hasError("required") || step_r6.hasError && ctx_r7.accountForm.get("password").hasError("minlength"), !ctx_r7.accountForm.get("password").hasError("required") && !ctx_r7.accountForm.get("password").hasError("minlength")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](25, _c2, step_r6.hasError && ctx_r7.accountForm.get("password").hasError("required") || step_r6.hasError && ctx_r7.accountForm.get("password").hasError("minlength"), !ctx_r7.accountForm.get("password").hasError("required") && !ctx_r7.accountForm.get("password").hasError("minlength")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r7.accountForm.get("password").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r7.accountForm.get("password").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](28, _c1, step_r6.hasError && ctx_r7.accountForm.get("confirmPassword").hasError("required") || step_r6.hasError && ctx_r7.accountForm.get("confirmPassword").hasError("mismatchedPasswords"), !ctx_r7.accountForm.get("confirmPassword").hasError("required") && !ctx_r7.accountForm.get("confirmPassword").hasError("mismatchedPasswords")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](31, _c2, step_r6.hasError && ctx_r7.accountForm.get("confirmPassword").hasError("required") || step_r6.hasError && ctx_r7.accountForm.get("confirmPassword").hasError("mismatchedPasswords"), !ctx_r7.accountForm.get("confirmPassword").hasError("required") && !ctx_r7.accountForm.get("confirmPassword").hasError("mismatchedPasswords")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r7.accountForm.get("confirmPassword").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r7.accountForm.get("confirmPassword").hasError("mismatchedPasswords"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](34, _c1, step_r6.hasError && ctx_r7.accountForm.get("email").hasError("required") || step_r6.hasError && ctx_r7.accountForm.get("email").hasError("invalidEmail"), !ctx_r7.accountForm.get("email").hasError("required") && !ctx_r7.accountForm.get("email").hasError("invalidEmail")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](37, _c2, step_r6.hasError && ctx_r7.accountForm.get("email").hasError("required") || step_r6.hasError && ctx_r7.accountForm.get("email").hasError("invalidEmail"), !ctx_r7.accountForm.get("email").hasError("required") && !ctx_r7.accountForm.get("email").hasError("invalidEmail")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r7.accountForm.get("email").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r7.accountForm.get("email").hasError("invalidEmail"));
  }
}
function WizardComponent_div_20_form_6_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_6_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_6_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_6_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_6_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_6_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_6_span_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Country is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 29)(1, "div", 45)(2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Salutation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "select", 46)(5, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Mr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Mrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 47)(10, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, WizardComponent_div_20_form_6_span_13_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 47)(15, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, WizardComponent_div_20_form_6_span_18_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 50)(20, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "select", 51)(23, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 47)(28, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Contact email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 32)(31, "div", 33)(32, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, WizardComponent_div_20_form_6_span_35_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, WizardComponent_div_20_form_6_span_36_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 52)(38, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 32)(41, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, WizardComponent_div_20_form_6_span_44_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 56)(46, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Zip Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, WizardComponent_div_20_form_6_span_49_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 47)(51, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Select Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "select", 58)(54, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "USA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Canada");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Mexico");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "UK");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "France");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Italy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, WizardComponent_div_20_form_6_span_66_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 59)(68, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Select State");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "select", 60)(71, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Arkansas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Texas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "California");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Florida");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 61)(82, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "textarea", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const step_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r8.personalForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](20, _c1, step_r6.hasError && ctx_r8.personalForm.get("firstname").hasError("required"), !ctx_r8.personalForm.get("firstname").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](23, _c2, ctx_r8.personalForm.get("firstname").hasError("required"), !ctx_r8.personalForm.get("firstname").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r8.personalForm.get("firstname").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](26, _c1, step_r6.hasError && ctx_r8.personalForm.get("lastname").hasError("required"), !ctx_r8.personalForm.get("lastname").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](29, _c2, ctx_r8.personalForm.get("lastname").hasError("required"), !ctx_r8.personalForm.get("lastname").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r8.personalForm.get("lastname").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](32, _c1, step_r6.hasError && ctx_r8.personalForm.get("email").hasError("required") || step_r6.hasError && ctx_r8.personalForm.get("email").hasError("invalidEmail"), !ctx_r8.personalForm.get("email").hasError("required") && !ctx_r8.personalForm.get("email").hasError("invalidEmail")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](35, _c2, step_r6.hasError && ctx_r8.personalForm.get("email").hasError("required") || step_r6.hasError && ctx_r8.personalForm.get("email").hasError("invalidEmail"), !ctx_r8.personalForm.get("email").hasError("required") && !ctx_r8.personalForm.get("email").hasError("invalidEmail")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r8.personalForm.get("email").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r8.personalForm.get("email").hasError("invalidEmail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](38, _c1, step_r6.hasError && ctx_r8.personalForm.get("phone").hasError("required"), !ctx_r8.personalForm.get("phone").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](41, _c2, ctx_r8.personalForm.get("phone").hasError("required"), !ctx_r8.personalForm.get("phone").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r8.personalForm.get("phone").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](44, _c1, step_r6.hasError && ctx_r8.personalForm.get("zipcode").hasError("required"), !ctx_r8.personalForm.get("zipcode").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](47, _c2, ctx_r8.personalForm.get("zipcode").hasError("required"), !ctx_r8.personalForm.get("zipcode").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r8.personalForm.get("zipcode").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](50, _c1, step_r6.hasError && ctx_r8.personalForm.get("country").hasError("required"), !ctx_r8.personalForm.get("country").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](53, _c2, step_r6.hasError && ctx_r8.personalForm.get("country").hasError("required"), !ctx_r8.personalForm.get("country").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r8.personalForm.get("country").hasError("required"));
  }
}
function WizardComponent_div_20_form_7_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Card Type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_7_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Card Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_7_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid Card Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_7_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "CVC is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_7_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid CVC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_7_span_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Expiry Month is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_7_span_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Expiry Year is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_div_20_form_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 29)(1, "div", 38)(2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "select", 63)(5, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Visa");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Master Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, WizardComponent_div_20_form_7_span_11_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 38)(13, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Card Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, WizardComponent_div_20_form_7_span_16_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, WizardComponent_div_20_form_7_span_17_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 38)(19, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "CVC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, WizardComponent_div_20_form_7_span_22_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, WizardComponent_div_20_form_7_span_23_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 38)(25, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Expiry Month");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "select", 66)(28, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "01");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "02");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "03");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "04");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "05");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "06");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "07");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "08");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "09");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "11");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, WizardComponent_div_20_form_7_span_52_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 38)(54, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Expiry Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "select", 67)(57, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "2017");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "2018");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "2019");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "2021");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "2023");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "2024");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](73, WizardComponent_div_20_form_7_span_73_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const step_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r9.paymentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](18, _c1, step_r6.hasError && ctx_r9.paymentForm.get("cardtype").hasError("required"), !ctx_r9.paymentForm.get("cardtype").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](21, _c2, step_r6.hasError && ctx_r9.paymentForm.get("cardtype").hasError("required"), !ctx_r9.paymentForm.get("cardtype").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r9.paymentForm.get("cardtype").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](24, _c1, step_r6.hasError && ctx_r9.paymentForm.get("cardnumber").hasError("required") || step_r6.hasError && ctx_r9.paymentForm.get("cardnumber").hasError("invalidNumber"), !ctx_r9.paymentForm.get("cardnumber").hasError("required") && !ctx_r9.paymentForm.get("cardnumber").hasError("invalidNumber")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](27, _c2, step_r6.hasError && ctx_r9.paymentForm.get("cardnumber").hasError("required") || step_r6.hasError && ctx_r9.paymentForm.get("cardnumber").hasError("invalidNumber"), !ctx_r9.paymentForm.get("cardnumber").hasError("required") && !ctx_r9.paymentForm.get("cardnumber").hasError("invalidNumber")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r9.paymentForm.get("cardnumber").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r9.paymentForm.get("cardnumber").hasError("invalidNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](30, _c1, step_r6.hasError && ctx_r9.paymentForm.get("cvc").hasError("required") || step_r6.hasError && ctx_r9.paymentForm.get("cvc").hasError("invalidNumber"), !ctx_r9.paymentForm.get("cvc").hasError("required") && !ctx_r9.paymentForm.get("cvc").hasError("invalidNumber")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](33, _c2, step_r6.hasError && ctx_r9.paymentForm.get("cvc").hasError("required") || step_r6.hasError && ctx_r9.paymentForm.get("cvc").hasError("invalidNumber"), !ctx_r9.paymentForm.get("cvc").hasError("required") && !ctx_r9.paymentForm.get("cvc").hasError("invalidNumber")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r9.paymentForm.get("cvc").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r9.paymentForm.get("cvc").hasError("invalidNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](36, _c1, step_r6.hasError && ctx_r9.paymentForm.get("expirymonth").hasError("required"), !ctx_r9.paymentForm.get("expirymonth").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](39, _c2, step_r6.hasError && ctx_r9.paymentForm.get("expirymonth").hasError("required"), !ctx_r9.paymentForm.get("expirymonth").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r9.paymentForm.get("expirymonth").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](42, _c1, step_r6.hasError && ctx_r9.paymentForm.get("expiryyear").hasError("required"), !ctx_r9.paymentForm.get("expiryyear").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](45, _c2, step_r6.hasError && ctx_r9.paymentForm.get("expiryyear").hasError("required"), !ctx_r9.paymentForm.get("expiryyear").hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.hasError && ctx_r9.paymentForm.get("expiryyear").hasError("required"));
  }
}
function WizardComponent_div_20_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 68)(2, "strong", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 70)(5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 68)(8, "strong", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 70)(11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 68)(14, "strong", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 70)(17, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 68)(20, "strong", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Contact Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 70)(23, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 68)(26, "strong", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Phone NO.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 70)(29, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 68)(32, "strong", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 70)(35, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 68)(38, "strong", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 70)(41, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 68)(44, "strong", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Zip Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 70)(47, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 68)(50, "strong", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 70)(53, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 68)(56, "strong", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Card Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 70)(59, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.details.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.details.fullname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r10.details.gender, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.details.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.details.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r10.details.address, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.details.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.details.zipcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.details.cardtype);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.details.cardnumber);
  }
}
function WizardComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, WizardComponent_div_20_form_5_Template, 40, 40, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, WizardComponent_div_20_form_6_Template, 85, 56, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, WizardComponent_div_20_form_7_Template, 74, 48, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, WizardComponent_div_20_div_8_Template, 61, 10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !step_r6.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fa ", step_r6.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", step_r6.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.name == "Account Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.name == "Personal Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.name == "Payment Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", step_r6.name == "Confirm Your Details");
  }
}
function WizardComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WizardComponent_button_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r35.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Next Step \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function WizardComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WizardComponent_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r37.confirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Confirm \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class WizardComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.details = {};
    this.steps = [{
      name: 'Account Information',
      icon: 'fa-lock',
      active: true,
      valid: false,
      hasError: false
    }, {
      name: 'Personal Information',
      icon: 'fa-user',
      active: false,
      valid: false,
      hasError: false
    }, {
      name: 'Payment Information',
      icon: 'fa-credit-card',
      active: false,
      valid: false,
      hasError: false
    }, {
      name: 'Confirm Your Details',
      icon: 'fa-check-square-o',
      active: false,
      valid: false,
      hasError: false
    }];
    this.accountForm = this.formBuilder.group({
      'username': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)])],
      'confirmPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _wizard_validation_service__WEBPACK_IMPORTED_MODULE_0__.WizardValidationService.emailValidator])]
    }, {
      validator: _wizard_validation_service__WEBPACK_IMPORTED_MODULE_0__.WizardValidationService.matchingPasswords('password', 'confirmPassword')
    });
    this.personalForm = this.formBuilder.group({
      'salutation': [''],
      'firstname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      'lastname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      'gender': [''],
      'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _wizard_validation_service__WEBPACK_IMPORTED_MODULE_0__.WizardValidationService.emailValidator])],
      'phone': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      'zipcode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      'country': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      'state': [''],
      'address': ['']
    });
    this.paymentForm = this.formBuilder.group({
      'cardtype': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      'cardnumber': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _wizard_validation_service__WEBPACK_IMPORTED_MODULE_0__.WizardValidationService.numberValidator])],
      'cvc': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _wizard_validation_service__WEBPACK_IMPORTED_MODULE_0__.WizardValidationService.numberValidator])],
      'expirymonth': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      'expiryyear': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  next() {
    let accountForm = this.accountForm;
    let personalForm = this.personalForm;
    let paymentForm = this.paymentForm;
    if (this.steps[this.steps.length - 1].active) return false;
    this.steps.some(function (step, index, steps) {
      if (index < steps.length - 1) {
        if (step.active) {
          if (step.name == 'Account Information') {
            if (accountForm.valid) {
              step.active = false;
              step.valid = true;
              steps[index + 1].active = true;
              return true;
            } else {
              step.hasError = true;
            }
          }
          if (step.name == 'Personal Information') {
            if (personalForm.valid) {
              step.active = false;
              step.valid = true;
              steps[index + 1].active = true;
              return true;
            } else {
              step.hasError = true;
            }
          }
          if (step.name == 'Payment Information') {
            if (paymentForm.valid) {
              step.active = false;
              step.valid = true;
              steps[index + 1].active = true;
              return true;
            } else {
              step.hasError = true;
            }
          }
        }
      }
    });
    this.details.username = this.accountForm.value.username;
    this.details.fullname = this.personalForm.value.firstname + " " + this.personalForm.value.lastname;
    this.details.gender = this.personalForm.value.gender;
    this.details.email = this.personalForm.value.email;
    this.details.phone = this.personalForm.value.phone;
    this.details.country = this.personalForm.value.country;
    this.details.zipcode = this.personalForm.value.zipcode;
    this.details.address = this.personalForm.value.address;
    this.details.cardtype = this.paymentForm.value.cardtype;
    this.details.cardnumber = this.paymentForm.value.cardnumber;
  }
  prev() {
    if (this.steps[0].active) return false;
    this.steps.some(function (step, index, steps) {
      if (index != 0) {
        if (step.active) {
          step.active = false;
          steps[index - 1].active = true;
          return true;
        }
      }
    });
  }
  confirm() {
    this.steps.forEach(step => step.valid = true);
  }
  static #_ = this.ɵfac = function WizardComponent_Factory(t) {
    return new (t || WizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: WizardComponent,
    selectors: [["az-wizard"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_wizard_validation_service__WEBPACK_IMPORTED_MODULE_0__.WizardValidationService])],
    decls: 28,
    vars: 4,
    consts: [[1, "row"], [1, "col-12"], ["widget", "", 1, "card"], [1, "card-header"], [1, "widget-controls"], ["data-widgster", "expand", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-down"], ["data-widgster", "collapse", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-up"], ["data-widgster", "fullscreen", "href", "#", 1, "transition"], [1, "fa", "fa-expand"], ["data-widgster", "restore", "href", "#", 1, "transition"], [1, "fa", "fa-compress"], ["data-widgster", "close", "href", "#", 1, "transition"], [1, "fa", "fa-times"], [1, "card-body", "widget-body"], ["class", "col-md-3 col-sm-6 col-12 step", 3, "active", "valid", "ngClass", 4, "ngFor", "ngForOf"], ["class", "col form-wizard", 3, "hidden", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "pull-left", 3, "click"], [1, "fa", "fa-chevron-left", "arrow"], ["class", "btn btn-primary pull-right", 3, "click", 4, "ngIf"], [1, "col-md-3", "col-sm-6", "col-12", "step", 3, "ngClass"], [1, "step-icon"], ["aria-hidden", "true"], [1, "step-name"], [1, "col", "form-wizard", 3, "hidden"], [1, "row", "form-title"], ["class", "row", 3, "formGroup", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row", 3, "formGroup"], [1, "form-group", "col-md-7", "mb-3", 3, "ngClass"], [1, "form-control-label"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user-o"], ["formControlName", "username", "type", "text", 1, "form-control", 3, "ngClass"], ["class", "help-block text-danger", 4, "ngIf"], [1, "form-group", "col-md-7", 3, "ngClass"], [1, "fa", "fa-key"], ["formControlName", "password", "type", "password", 1, "form-control", 3, "ngClass"], ["formControlName", "confirmPassword", "type", "password", 1, "form-control", 3, "ngClass"], [1, "fa", "fa-envelope"], ["formControlName", "email", "type", "text", 1, "form-control", 3, "ngClass"], [1, "help-block", "text-danger"], [1, "form-group", "col-md-2"], ["formControlName", "salutation", 1, "form-control"], [1, "form-group", "col-md-5", 3, "ngClass"], ["formControlName", "firstname", "type", "text", 1, "form-control", 3, "ngClass"], ["formControlName", "lastname", "type", "text", 1, "form-control", 3, "ngClass"], [1, "form-group", "col-md-3"], ["formControlName", "gender", 1, "form-control"], [1, "form-group", "col-md-4", 3, "ngClass"], [1, "input-group-addon"], [1, "fa", "fa-phone"], ["formControlName", "phone", "type", "number", 1, "form-control", 3, "ngClass"], [1, "form-group", "col-md-2", 3, "ngClass"], ["formControlName", "zipcode", "type", "text", 1, "form-control", 3, "ngClass"], ["formControlName", "country", 1, "form-control", 3, "ngClass"], [1, "form-group", "col-md-5"], ["formControlName", "state", 1, "form-control"], [1, "form-group", "col"], ["formControlName", "address", 1, "form-control"], ["formControlName", "cardtype", 1, "form-control", 3, "ngClass"], ["formControlName", "cardnumber", "type", "text", "maxlength", "16", 1, "form-control", 3, "ngClass"], ["formControlName", "cvc", "type", "text", "maxlength", "3", 1, "form-control", 3, "ngClass"], ["formControlName", "expirymonth", 1, "form-control", 3, "ngClass"], ["formControlName", "expiryyear", 1, "form-control", 3, "ngClass"], [1, "col-2"], [1, "text-truncate"], [1, "col-10"], [1, "btn", "btn-primary", "pull-right", 3, "click"], [1, "fa", "fa-chevron-right", "arrow"], [1, "fa", "fa-check", "arrow"]],
    template: function WizardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Form Wizard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 15)(18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, WizardComponent_div_19_Template, 5, 15, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, WizardComponent_div_20_Template, 9, 9, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 0)(22, "div", 1)(23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WizardComponent_Template_button_click_23_listener() {
          return ctx.prev();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\u00A0 Prev Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, WizardComponent_button_26_Template, 3, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, WizardComponent_button_27_Template, 3, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.steps[ctx.steps.length - 1].active);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.steps[ctx.steps.length - 1].active);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_1__.Widget],
    styles: ["/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n\n.step {\n  text-align: center;\n}\n.step:before, .step:after {\n  content: \"\";\n  position: absolute;\n  background-color: #ccc;\n  top: 0;\n  margin-top: 23px;\n  width: 50%;\n  height: 5px;\n  border-top: 1px solid #555;\n  border-bottom: 1px solid #555;\n}\n.step:before {\n  left: 0;\n}\n.step:after {\n  right: 0;\n}\n.step:first-child:before {\n  display: none;\n}\n.step.last:after {\n  display: none;\n}\n.step .step-icon {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  background: #ccc;\n  border: 1px solid #555;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n.step .step-icon i {\n  margin: 0 auto;\n  font-size: 20px;\n  color: #555;\n}\n.step.active:before, .step.active:after {\n  background: #bf1725;\n  border: none;\n}\n.step.active .step-icon {\n  background: #bf1725;\n  border: none;\n}\n.step.active .step-icon i {\n  color: #fff;\n}\n.step.valid:before, .step.valid:after {\n  background: #2d922d;\n  border: none;\n}\n.step.valid .step-icon {\n  background: #2d922d;\n  border: none;\n}\n.step.valid .step-icon i {\n  color: #fff;\n}\n.step .step-name {\n  display: block;\n  margin-top: 14px;\n  color: #555;\n}\n.step .step-name.active {\n  color: #bf1725;\n}\n.step .step-name.valid {\n  color: #2d922d;\n}\n\n.form-wizard {\n  margin-top: 25px;\n  margin-bottom: 20px;\n  background: #e9ebee;\n  padding-top: 15px;\n  min-height: 400px;\n}\n.form-wizard .form-title {\n  margin-bottom: 15px;\n  color: #555;\n  border-bottom: 1px solid #ccc;\n  padding: 0 15px;\n}\n.form-wizard .form-control-label {\n  color: #242424 !important;\n}\n.form-wizard .help-block {\n  position: absolute;\n  font-size: 11px;\n}\n\n.arrow {\n  font-size: 12px;\n}\n\n@media (max-width: 767px) {\n  .step {\n    margin-bottom: 10px;\n    text-align: left;\n  }\n  .step .step-icon {\n    float: left;\n    margin-right: 15px;\n  }\n  .step:before, .step:after {\n    content: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc3R5bGVzL3NraW5zL19ibHVlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9TY2hlZHVsaW5nJTIwU29mdHdhcmUvc3JjL2FwcC9wYWdlcy9mb3JtLWVsZW1lbnRzL3dpemFyZC93aXphcmQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3BhZ2VzL2Zvcm0tZWxlbWVudHMvd2l6YXJkL3dpemFyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBQTtBQ2FBLG9CQUFBO0FBTUEsa0JBQUE7QUFJQSxpQkFBQTtBQUtBLGtCQUFBO0FBS0EsbUJBQUE7QUFLQSxnQkFBQTtBQVNBLHVCQUFBO0FBOENBO0VBQ0ksMlFBQUE7RUFDQSxhQUFBO0FDcEZKOztBQ1RBO0VBQ0ksa0JBQUE7QURZSjtBQ1hJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JGREs7RUVFTCxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QURhUjtBQ1hJO0VBQ0ksT0FBQTtBRGFSO0FDWEk7RUFDSSxRQUFBO0FEYVI7QUNYSTtFQUNJLGFBQUE7QURhUjtBQ1hJO0VBQ0ksYUFBQTtBRGFSO0FDWEk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkYxQks7RUUyQkwsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRGFSO0FDWlE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdGcENMO0FDa0RQO0FDVlE7RUFDSSxtQkg5Qkc7RUcrQkgsWUFBQTtBRFlaO0FDVlE7RUFDSSxtQkhsQ0c7RUdtQ0gsWUFBQTtBRFlaO0FDWFk7RUFDSSxXSG5ERDtBRWdFZjtBQ1JRO0VBQ0ksbUJIOUNJO0VHK0NKLFlBQUE7QURVWjtBQ1JRO0VBQ0ksbUJIbERJO0VHbURKLFlBQUE7QURVWjtBQ1RZO0VBQ0ksV0hoRUQ7QUUyRWY7QUNQSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdGcEVEO0FDNkVQO0FDUlE7RUFDSSxjSDNERztBRXFFZjtBQ1JRO0VBQ0ksY0hqRUk7QUUyRWhCOztBQ0xBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CRnBGWTtFRXFGWixpQkFBQTtFQUNBLGlCQUFBO0FEUUo7QUNQSTtFQUNJLG1CQUFBO0VBQ0EsV0Z0RkQ7RUV1RkMsNkJBQUE7RUFDQSxlQUFBO0FEU1I7QUNQSTtFQUNJLHlCQUFBO0FEU1I7QUNQSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBRFNSOztBQ0xBO0VBQ0ksZUFBQTtBRFFKOztBQ0pBO0VBQ0k7SUFDSSxtQkFBQTtJQUNBLGdCQUFBO0VET047RUNOTTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtFRFFWO0VDTk07SUFDSSxhQUFBO0VEUVY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqIENvbG9ycyAocmVjb21tZW5kZWQgdXNlIEhFWCBjb2xvcnMpICoqKiovIFxyXG4kbWFpbi1jb2xvcjogIzI0MkQzQTsgXHJcbiRkZWZhdWx0LWNvbG9yOiNmZmY7IFxyXG4kZGFyay1jb2xvcjogIzAwMDtcclxuXHJcbiRib2R5LWJnLWdyYWRpZW50LWNvbG9yLTE6ICMxZTU3OTk7XHJcbiRib2R5LWJnLWdyYWRpZW50LWNvbG9yLTI6ICAjYTVjOWU1O1xyXG5cclxuJHNpZGViYXItYmctY29sb3I6IzM0NDE1NDtcclxuJHNpZGViYXItaXRlbS1hY3RpdmUtYmctY29sb3I6ICM2MzdDQTA7Ly8gIzAwOTljYztcclxuXHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzAyNGE4ODtcclxuJHN1Y2Nlc3MtY29sb3I6ICMyZDkyMmQ7XHJcbiRpbmZvLWNvbG9yOiAjMjQ4ZGFkO1xyXG4kd2FybmluZy1jb2xvcjogI2Y3OWExNztcclxuJGRhbmdlci1jb2xvcjogI2JmMTcyNTsiLCJAaW1wb3J0IFwic2tpbnMvYmx1ZVwiO1xyXG5cclxuJGJvZHktYmctY29sb3I6ICNlOWViZWU7XHJcbiR0ZXh0LWNvbG9yOiAjMjQyNDI0O1xyXG4kZ3JheS1kYXJrOiAjMjkyYjJjO1xyXG4kZ3JheTogIzU1NTtcclxuJGdyYXktbGlnaHQ6ICNjY2M7XHJcbiRncmF5LWxpZ2h0ZXI6ICNlY2VlZWY7XHJcblxyXG4kdGFibGUtYmctYWN0aXZlOiByZ2JhKCMwMDAsLjA3NSk7XHJcbiR0YWJsZS1ib3JkZXItd2lkdGg6IDFweDtcclxuJHRhYmxlLWJvcmRlci1jb2xvcjogJGdyYXktbGlnaHRlcjtcclxuXHJcbi8qKioqIEFwcCByb290cyAqKioqL1xyXG4kYXNzZXRzLXJvb3Q6ICd+L2Fzc2V0cy8nO1xyXG4kaW1hZ2VzLXJvb3Q6ICRhc3NldHMtcm9vdCArICdpbWcvJztcclxuJGZvbnRzLXJvb3Q6ICRhc3NldHMtcm9vdCArICdmb250cy8nO1xyXG5cclxuXHJcbi8qKioqIEdlbmVyYWwgKioqKi9cclxuJGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHJcblxyXG4vKioqKiBOYXZiYXIgKioqKi9cclxuJG5hdmJhci10ZXh0LWNvbG9yOiAkZGVmYXVsdC1jb2xvcjtcclxuJG5hdmJhci1oZWlnaHQ6IDYwcHg7XHJcblxyXG5cclxuLyoqKiogU2lkZWJhciAqKioqL1xyXG4kc2lkZWJhci13aWR0aDogMjMwcHg7XHJcblxyXG5cclxuXHJcbi8qKioqIFByb2dyZXNzICoqKiovXHJcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAwO1xyXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAyMHB4O1xyXG5cclxuXHJcbi8qKioqIEZvbnRzICoqKiovXHJcbiRmb250LXRoaW46IDEwMDtcclxuJGZvbnQtbGlnaHQ6IDMwMDtcclxuJGZvbnQtbm9ybWFsOiA0MDA7XHJcbiRmb250LWJvbGQ6IDUwMDtcclxuJGZvbnQtYm9sZGVyOiA3MDA7XHJcbiRmb250LXVsdHJhQm9sZDogOTAwO1xyXG5cclxuXHJcbi8qKioqIFNvY2lhbCBpY29ucyAqKioqL1xyXG4kZmFjZWJvb2stY29sb3I6ICMzYjU5OTg7XHJcbiR0d2l0dGVyLWNvbG9yOiAjNTVhY2VlO1xyXG4kaW5zdGFncmFtLWNvbG9yOiAjOGEzYWI5O1xyXG4kcGludGVyZXN0LWNvbG9yOiAjYzkyMjI4OyBcclxuJGdvb2dsZS1jb2xvcjogI2RkNGIzOTtcclxuJGxpbmtlZGluLWNvbG9yOiAjMDE3N0I1O1xyXG4kZ2l0aHViLWNvbG9yOiAjNmI2YjZiO1xyXG4kc3RhY2tvdmVyZmxvdy1jb2xvcjogIzJGOTZFODtcclxuJGRyaWJibGUtY29sb3I6ICNGMjY3OTg7XHJcbiRiZWhhY2UtY29sb3I6ICMwMDkzRkE7XHJcblxyXG4vLy0tLS0tLS0tZm9yIHByZXZlbnQgYXdlc29tZS1ib290c3RyYXAtY2hlY2tib3ggZXJyb3JzLS0tLS0tLS0tXHJcbi8vQGltcG9ydCBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcclxuLy9AaW1wb3J0IFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGluc1wiO1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiByZ2JhKCMwMDAsLjE1KTtcclxuJGVuYWJsZS10cmFuc2l0aW9uczogdHJ1ZTtcclxuJGlucHV0LWNvbG9yOiAkZ3JheTtcclxuJGlucHV0LWJnLWRpc2FibGVkOiAkZ3JheS1saWdodGVyO1xyXG4kYnJhbmQtcHJpbWFyeTogJHByaW1hcnktY29sb3I7XHJcbiRicmFuZC1zdWNjZXNzOiAkc3VjY2Vzcy1jb2xvcjtcclxuJGJyYW5kLWluZm86ICRpbmZvLWNvbG9yO1xyXG4kYnJhbmQtd2FybmluZzogJHdhcm5pbmctY29sb3I7XHJcbiRicmFuZC1kYW5nZXI6ICRkYW5nZXItY29sb3I7XHJcbiRicmFuZC1pbnZlcnNlOiAkZ3JheS1kYXJrO1xyXG5cclxuXHJcblxyXG5cclxuLy9TZXQgdmFyaWFibGVzIHRvIGJlIGFjY2Vzc2libGUgZm9yIEpTXHJcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy10by1qcy9zYXNzL3Nhc3MtdG8tanNcIjtcclxuXHJcbiR2YXJpYWJsZXNNYXA6ICggXHJcbiAgbWFpbi1jb2xvcjogJG1haW4tY29sb3IsXHJcbiAgZGVmYXVsdC1jb2xvcjogJGRlZmF1bHQtY29sb3IsXHJcbiAgZGFyay1jb2xvcjogJGRhcmstY29sb3IsXHJcbiAgcHJpbWFyeS1jb2xvcjogJHByaW1hcnktY29sb3IsXHJcbiAgc3VjY2Vzcy1jb2xvcjogJHN1Y2Nlc3MtY29sb3IsXHJcbiAgd2FybmluZy1jb2xvcjogJHdhcm5pbmctY29sb3IsXHJcbiAgZGFuZ2VyLWNvbG9yOiAkZGFuZ2VyLWNvbG9yLFxyXG4gIGluZm8tY29sb3I6ICRpbmZvLWNvbG9yLFxyXG4gIHNpZGViYXItYmctY29sb3I6ICRzaWRlYmFyLWJnLWNvbG9yLFxyXG4gIGdyYXk6ICRncmF5LFxyXG4gIGdyYXktbGlnaHQ6ICRncmF5LWxpZ2h0XHJcbik7XHJcblxyXG5ib2R5OjphZnRlciB7XHJcbiAgICBjb250ZW50OiBzYXNzVG9KcygkdmFyaWFibGVzTWFwKTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiIsIi8qKioqIENvbG9ycyAocmVjb21tZW5kZWQgdXNlIEhFWCBjb2xvcnMpICoqKiovXG4vKioqKiBBcHAgcm9vdHMgKioqKi9cbi8qKioqIEdlbmVyYWwgKioqKi9cbi8qKioqIE5hdmJhciAqKioqL1xuLyoqKiogU2lkZWJhciAqKioqL1xuLyoqKiogUHJvZ3Jlc3MgKioqKi9cbi8qKioqIEZvbnRzICoqKiovXG4vKioqKiBTb2NpYWwgaWNvbnMgKioqKi9cbmJvZHk6OmFmdGVyIHtcbiAgY29udGVudDogJ3tcIm1haW4tY29sb3JcIjpcIiMyNDJEM0FcIixcImRlZmF1bHQtY29sb3JcIjpcIiNmZmZcIixcImRhcmstY29sb3JcIjpcIiMwMDBcIixcInByaW1hcnktY29sb3JcIjpcIiMwMjRhODhcIixcInN1Y2Nlc3MtY29sb3JcIjpcIiMyZDkyMmRcIixcIndhcm5pbmctY29sb3JcIjpcIiNmNzlhMTdcIixcImRhbmdlci1jb2xvclwiOlwiI2JmMTcyNVwiLFwiaW5mby1jb2xvclwiOlwiIzI0OGRhZFwiLFwic2lkZWJhci1iZy1jb2xvclwiOlwiIzM0NDE1NFwiLFwiZ3JheVwiOlwiIzU1NVwiLFwiZ3JheS1saWdodFwiOlwiI2NjY1wifSc7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zdGVwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN0ZXA6YmVmb3JlLCAuc3RlcDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAyM3B4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1NTU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTU1O1xufVxuLnN0ZXA6YmVmb3JlIHtcbiAgbGVmdDogMDtcbn1cbi5zdGVwOmFmdGVyIHtcbiAgcmlnaHQ6IDA7XG59XG4uc3RlcDpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN0ZXAubGFzdDphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc3RlcCAuc3RlcC1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnN0ZXAgLnN0ZXAtaWNvbiBpIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM1NTU7XG59XG4uc3RlcC5hY3RpdmU6YmVmb3JlLCAuc3RlcC5hY3RpdmU6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjYmYxNzI1O1xuICBib3JkZXI6IG5vbmU7XG59XG4uc3RlcC5hY3RpdmUgLnN0ZXAtaWNvbiB7XG4gIGJhY2tncm91bmQ6ICNiZjE3MjU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5zdGVwLmFjdGl2ZSAuc3RlcC1pY29uIGkge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zdGVwLnZhbGlkOmJlZm9yZSwgLnN0ZXAudmFsaWQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMmQ5MjJkO1xuICBib3JkZXI6IG5vbmU7XG59XG4uc3RlcC52YWxpZCAuc3RlcC1pY29uIHtcbiAgYmFja2dyb3VuZDogIzJkOTIyZDtcbiAgYm9yZGVyOiBub25lO1xufVxuLnN0ZXAudmFsaWQgLnN0ZXAtaWNvbiBpIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uc3RlcCAuc3RlcC1uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIGNvbG9yOiAjNTU1O1xufVxuLnN0ZXAgLnN0ZXAtbmFtZS5hY3RpdmUge1xuICBjb2xvcjogI2JmMTcyNTtcbn1cbi5zdGVwIC5zdGVwLW5hbWUudmFsaWQge1xuICBjb2xvcjogIzJkOTIyZDtcbn1cblxuLmZvcm0td2l6YXJkIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogI2U5ZWJlZTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuLmZvcm0td2l6YXJkIC5mb3JtLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgY29sb3I6ICM1NTU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG4uZm9ybS13aXphcmQgLmZvcm0tY29udHJvbC1sYWJlbCB7XG4gIGNvbG9yOiAjMjQyNDI0ICFpbXBvcnRhbnQ7XG59XG4uZm9ybS13aXphcmQgLmhlbHAtYmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmFycm93IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnN0ZXAge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAuc3RlcCAuc3RlcC1pY29uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIH1cbiAgLnN0ZXA6YmVmb3JlLCAuc3RlcDphZnRlciB7XG4gICAgY29udGVudDogbm9uZTtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4uc3RlcHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICY6YmVmb3JlLCAmOmFmdGVye1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWxpZ2h0O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyM3B4OyAgICAgICAgXHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGdyYXk7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmF5OyAgICAgICAgXHJcbiAgICB9XHJcbiAgICAmOmJlZm9yZXtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgJjphZnRlcntcclxuICAgICAgICByaWdodDogMDtcclxuICAgIH1cclxuICAgICY6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lOyBcclxuICAgIH1cclxuICAgICYubGFzdDphZnRlcntcclxuICAgICAgICBkaXNwbGF5OiBub25lOyBcclxuICAgIH1cclxuICAgIC5zdGVwLWljb257XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRncmF5LWxpZ2h0O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmF5O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgaXtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICRncmF5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYuYWN0aXZle1xyXG4gICAgICAgICY6YmVmb3JlLCAmOmFmdGVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZGFuZ2VyLWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0ZXAtaWNvbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGRhbmdlci1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRlZmF1bHQtY29sb3I7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi52YWxpZHtcclxuICAgICAgICAmOmJlZm9yZSwgJjphZnRlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHN1Y2Nlc3MtY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RlcC1pY29ue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc3VjY2Vzcy1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRlZmF1bHQtY29sb3I7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN0ZXAtbmFtZXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAkZ3JheTtcclxuICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgY29sb3I6ICRkYW5nZXItY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYudmFsaWR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkc3VjY2Vzcy1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLXdpemFyZHsgIFxyXG4gICAgbWFyZ2luLXRvcDoyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICRib2R5LWJnLWNvbG9yO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7IFxyXG4gICAgbWluLWhlaWdodDogNDAwcHg7ICAgXHJcbiAgICAuZm9ybS10aXRsZXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAkZ3JheTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyYXktbGlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmZvcm0tY29udHJvbC1sYWJlbHtcclxuICAgICAgICBjb2xvcjogJHRleHQtY29sb3IgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5oZWxwLWJsb2Nre1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcnJvd3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5zdGVwe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAuc3RlcC1pY29ue1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmJlZm9yZSwgJjphZnRlcntcclxuICAgICAgICAgICAgY29udGVudDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9ICBcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}


/***/ })

}]);
//# sourceMappingURL=src_app_pages_form-elements_form-elements_module_ts.js.map