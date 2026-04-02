"use strict";
(self["webpackChunkazimuth"] = self["webpackChunkazimuth"] || []).push([["src_app_pages_editors_editors_module_ts"],{

/***/ 4361:
/*!**************************************************************!*\
  !*** ./src/app/pages/editors/ckeditor/ckeditor.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CkeditorComponent": () => (/* binding */ CkeditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-ckeditor */ 23926);



class CkeditorComponent {
  constructor() {
    this.ckeditorContent = '<div>Hey we are testing CKEditor</div>';
    this.config = {
      uiColor: '#F0F3F4',
      height: '350',
      extraPlugins: 'divarea'
    };
  }
  onChange(event) {
    setTimeout(() => {
      this.ckeditorContent = event;
    });
  }
  onReady(event) {}
  onFocus(event) {
    console.log("editor is focused");
  }
  onBlur(event) {}
  static #_ = this.ɵfac = function CkeditorComponent_Factory(t) {
    return new (t || CkeditorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CkeditorComponent,
    selectors: [["az-ckeditor"]],
    decls: 1,
    vars: 2,
    consts: [["debounce", "500", 3, "ngModel", "config", "ngModelChange", "change", "ready", "focus", "blur"]],
    template: function CkeditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ckeditor", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CkeditorComponent_Template_ckeditor_ngModelChange_0_listener($event) {
          return ctx.ckeditorContent = $event;
        })("change", function CkeditorComponent_Template_ckeditor_change_0_listener($event) {
          return ctx.onChange($event);
        })("ready", function CkeditorComponent_Template_ckeditor_ready_0_listener($event) {
          return ctx.onReady($event);
        })("focus", function CkeditorComponent_Template_ckeditor_focus_0_listener($event) {
          return ctx.onFocus($event);
        })("blur", function CkeditorComponent_Template_ckeditor_blur_0_listener($event) {
          return ctx.onBlur($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ckeditorContent)("config", ctx.config);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng2_ckeditor__WEBPACK_IMPORTED_MODULE_2__.CKEditorComponent],
    encapsulation: 2
  });
}


/***/ }),

/***/ 32876:
/*!*************************************************!*\
  !*** ./src/app/pages/editors/editors.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorsModule": () => (/* binding */ EditorsModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-ckeditor */ 23926);
/* harmony import */ var _ckeditor_ckeditor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ckeditor/ckeditor.component */ 4361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);







const routes = [{
  path: '',
  redirectTo: 'ckeditor',
  pathMatch: 'full'
}, {
  path: 'ckeditor',
  component: _ckeditor_ckeditor_component__WEBPACK_IMPORTED_MODULE_0__.CkeditorComponent,
  data: {
    breadcrumb: 'Ckeditor'
  }
}];
class EditorsModule {
  static #_ = this.ɵfac = function EditorsModule_Factory(t) {
    return new (t || EditorsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: EditorsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__.CKEditorModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditorsModule, {
    declarations: [_ckeditor_ckeditor_component__WEBPACK_IMPORTED_MODULE_0__.CkeditorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, ng2_ckeditor__WEBPACK_IMPORTED_MODULE_4__.CKEditorModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 23926:
/*!*************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/fesm2020/ng2-ckeditor.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CKButtonDirective": () => (/* binding */ CKButtonDirective),
/* harmony export */   "CKEditorComponent": () => (/* binding */ CKEditorComponent),
/* harmony export */   "CKEditorModule": () => (/* binding */ CKEditorModule),
/* harmony export */   "CKGroupDirective": () => (/* binding */ CKGroupDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);





/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
 *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
 *      </ckbutton>
 *   </ckeditor>
 */
const _c0 = ["host"];
class CKButtonDirective {
  constructor() {
    this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  initialize(editor) {
    editor.instance.addCommand(this.command, {
      exec: edit => {
        this.click.emit(edit);
        return true;
      }
    });
    editor.instance.ui.addButton(this.name, {
      label: this.label,
      command: this.command,
      toolbar: this.toolbar,
      icon: this.icon
    });
  }
  ngOnInit() {
    if (!this.name) {
      throw new Error('Attribute "name" is required on <ckbutton>');
    }
    if (!this.command) {
      throw new Error('Attribute "command" is required on <ckbutton>');
    }
  }
}
CKButtonDirective.ɵfac = function CKButtonDirective_Factory(t) {
  return new (t || CKButtonDirective)();
};
CKButtonDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CKButtonDirective,
  selectors: [["ckbutton"]],
  inputs: {
    label: "label",
    command: "command",
    toolbar: "toolbar",
    name: "name",
    icon: "icon"
  },
  outputs: {
    click: "click"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CKButtonDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ckbutton'
    }]
  }], null, {
    click: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    command: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    toolbar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
 *          .
 *          .
 *      </ckgroup>
 *   </ckeditor>
 */
class CKGroupDirective {
  ngAfterContentInit() {
    // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
    this.toolbarButtons.forEach(button => button.toolbar = this.name);
  }
  initialize(editor) {
    editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf);
    // Initialize each button within ckgroup
    this.toolbarButtons.forEach(button => {
      button.initialize(editor);
    });
  }
}
CKGroupDirective.ɵfac = function CKGroupDirective_Factory(t) {
  return new (t || CKGroupDirective)();
};
CKGroupDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CKGroupDirective,
  selectors: [["ckgroup"]],
  contentQueries: function CKGroupDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CKButtonDirective, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toolbarButtons = _t);
    }
  },
  inputs: {
    name: "name",
    previous: "previous",
    subgroupOf: "subgroupOf"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CKGroupDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ckgroup'
    }]
  }], null, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    previous: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    subgroupOf: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    toolbarButtons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [CKButtonDirective]
    }]
  });
})();

// Imports
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
class CKEditorComponent {
  /**
   * Constructor
   */
  constructor(zone) {
    this.zone = zone;
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.editorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.contentDom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.fileUploadRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.fileUploadResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._value = '';
    this.destroyed = false;
  }
  get value() {
    return this._value;
  }
  set value(v) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }
  ngOnChanges(changes) {
    if (changes.readonly && this.instance) {
      this.instance.setReadOnly(changes.readonly.currentValue);
    }
  }
  /**
   * On component destroy
   */
  ngOnDestroy() {
    this.destroyed = true;
    this.zone.runOutsideAngular(() => {
      if (this.instance) {
        CKEDITOR.removeAllListeners();
        this.instance.destroy();
        this.instance = null;
      }
    });
  }
  /**
   * On component view init
   */
  ngAfterViewInit() {
    if (this.destroyed) {
      return;
    }
    this.ckeditorInit(this.config || {});
  }
  /**
   * On component view checked
   */
  ngAfterViewChecked() {
    this.ckeditorInit(this.config || {});
  }
  /**
   * Value update process
   */
  updateValue(value) {
    this.zone.run(() => {
      this.value = value;
      this.onChange(value);
      this.onTouched();
      this.change.emit(value);
    });
  }
  /**
   * CKEditor init
   */
  ckeditorInit(config) {
    if (typeof CKEDITOR === 'undefined') {
      console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
    } else {
      // Check textarea exists
      if (this.instance || !this.documentContains(this.host.nativeElement)) {
        return;
      }
      if (this.readonly) {
        config.readOnly = this.readonly;
      }
      // CKEditor replace textarea
      this.instance = CKEDITOR.replace(this.host.nativeElement, config);
      // Set initial value
      this.instance.setData(this.value);
      // listen for instanceReady event
      this.instance.on('instanceReady', evt => {
        // if value has changed while instance loading
        // update instance with current component value
        if (this.instance.getData() !== this.value) {
          this.instance.setData(this.value);
        }
        // send the evt to the EventEmitter
        this.ready.emit(evt);
      });
      // CKEditor change event
      this.instance.on('change', evt => {
        this.onTouched();
        const value = this.instance.getData();
        if (this.value !== value) {
          // Debounce update
          if (this.debounce) {
            if (this.debounceTimeout) {
              clearTimeout(this.debounceTimeout);
            }
            this.debounceTimeout = window.setTimeout(() => {
              this.updateValue(value);
              this.debounceTimeout = null;
            }, parseInt(this.debounce));
            // Live update
          } else {
            this.updateValue(value);
          }
        }
        // Original ckeditor event dispatch
        this.editorChange.emit(evt);
      });
      // CKEditor blur event
      this.instance.on('blur', evt => {
        this.blur.emit(evt);
      });
      // CKEditor focus event
      this.instance.on('focus', evt => {
        this.focus.emit(evt);
      });
      // CKEditor contentDom event
      this.instance.on('contentDom', evt => {
        this.contentDom.emit(evt);
      });
      // CKEditor fileUploadRequest event
      this.instance.on('fileUploadRequest', evt => {
        this.fileUploadRequest.emit(evt);
      });
      // CKEditor fileUploadResponse event
      this.instance.on('fileUploadResponse', evt => {
        this.fileUploadResponse.emit(evt);
      });
      // CKEditor paste event
      this.instance.on('paste', evt => {
        this.paste.emit(evt);
      });
      // CKEditor drop event
      this.instance.on('drop', evt => {
        this.drop.emit(evt);
      });
      // Add Toolbar Groups to Editor. This will also add Buttons within groups.
      this.toolbarGroups.forEach(group => {
        group.initialize(this);
      });
      // Add Toolbar Buttons to Editor.
      this.toolbarButtons.forEach(button => {
        button.initialize(this);
      });
    }
  }
  /**
   * Implements ControlValueAccessor
   */
  writeValue(value) {
    this._value = value;
    if (this.instance) this.instance.setData(value);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  documentContains(node) {
    return document.contains ? document.contains(node) : document.body.contains(node);
  }
}
CKEditorComponent.ɵfac = function CKEditorComponent_Factory(t) {
  return new (t || CKEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
CKEditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CKEditorComponent,
  selectors: [["ckeditor"]],
  contentQueries: function CKEditorComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CKButtonDirective, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CKGroupDirective, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toolbarButtons = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toolbarGroups = _t);
    }
  },
  viewQuery: function CKEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.host = _t.first);
    }
  },
  inputs: {
    config: "config",
    readonly: "readonly",
    debounce: "debounce",
    value: "value"
  },
  outputs: {
    change: "change",
    editorChange: "editorChange",
    ready: "ready",
    blur: "blur",
    focus: "focus",
    contentDom: "contentDom",
    fileUploadRequest: "fileUploadRequest",
    fileUploadResponse: "fileUploadResponse",
    paste: "paste",
    drop: "drop"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CKEditorComponent),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 0,
  consts: [["host", ""]],
  template: function CKEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "textarea", null, 0);
    }
  },
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CKEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ckeditor',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CKEditorComponent),
        multi: true
      }],
      template: `<textarea #host></textarea>`
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    debounce: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    editorChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    ready: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    blur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    focus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    contentDom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    fileUploadRequest: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    fileUploadResponse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    paste: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    drop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    host: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['host', {
        static: false
      }]
    }],
    toolbarButtons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [CKButtonDirective]
    }],
    toolbarGroups: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [CKGroupDirective]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * CKEditorModule
 */
class CKEditorModule {}
CKEditorModule.ɵfac = function CKEditorModule_Factory(t) {
  return new (t || CKEditorModule)();
};
CKEditorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CKEditorModule
});
CKEditorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CKEditorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [CKEditorComponent, CKButtonDirective, CKGroupDirective],
      exports: [CKEditorComponent, CKButtonDirective, CKGroupDirective]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_pages_editors_editors_module_ts.js.map