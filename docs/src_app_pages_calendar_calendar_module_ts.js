"use strict";
(self["webpackChunkazimuth"] = self["webpackChunkazimuth"] || []).push([["src_app_pages_calendar_calendar_module_ts"],{

/***/ 51266:
/*!******************************************************!*\
  !*** ./src/app/pages/calendar/calendar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarComponent": () => (/* binding */ CalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.config */ 49670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/directives/widget/widget.directive */ 3090);





function CalendarComponent_h5_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.event.title);
  }
}
function CalendarComponent_p_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 1, ctx_r1.event.end, "EEE MMM d y hh:mm a"), "");
  }
}
function CalendarComponent_p_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.event.description);
  }
}
class CalendarComponent {
  constructor(_appConfig) {
    this._appConfig = _appConfig;
    this.dragOptions = {
      zIndex: 999,
      revert: true,
      revertDuration: 0
    };
    this.event = {};
    this.config = this._appConfig.config;
    this.configFn = this._appConfig;
    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth();
    let y = date.getFullYear();
    this.calendarOptions = {
      header: {
        left: 'today prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: [{
        title: 'All Day Event',
        start: new Date(y, m, 1),
        backgroundColor: this.config.colors.primary,
        textColor: this.config.colors.default,
        description: 'Will be busy throughout the whole day'
      }, {
        title: 'Long Event',
        start: new Date(y, m, d + 5),
        end: new Date(y, m, d + 7),
        description: 'This conference should be worse visiting'
      }, {
        id: 999,
        title: 'Blah Blah Car',
        start: new Date(y, m, d - 3, 16, 0),
        allDay: false,
        description: 'Agree with this guy on arrival time'
      }, {
        id: 1000,
        title: 'Buy this template',
        start: new Date(y, m, d + 3, 12, 0),
        allDay: false,
        backgroundColor: this.config.colors.warning,
        textColor: this.config.colors.default,
        description: 'Make sure everything is consistent first'
      }, {
        title: 'Got to school',
        start: new Date(y, m, d + 16, 12, 0),
        end: new Date(y, m, d + 16, 13, 0),
        backgroundColor: this.config.colors.danger,
        textColor: this.config.colors.default,
        description: 'Time to go back'
      }, {
        title: 'Study some Node',
        start: new Date(y, m, d + 18, 12, 0),
        end: new Date(y, m, d + 18, 13, 0),
        backgroundColor: this.config.colors.success,
        textColor: this.config.colors.default,
        description: 'Node.js is a platform built ' + 'on Chrome\'s JavaScript runtime for easily' + ' building fast, scalable network applications.' + ' Node.js uses an event-driven, non-blocking' + ' I/O model that makes it lightweight and' + ' efficient, perfect for data-intensive real-time' + ' applications that run across distributed devices.'
      }, {
        title: 'Azimuth link',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: 'http://themeseason.com/',
        backgroundColor: this.config.colors.info,
        textColor: this.config.colors.default,
        description: this.config.title
      }],
      eventColor: this.config.colors.info,
      selectable: true,
      selectHelper: true,
      select: (start, end, allDay) => {
        this.createEvent = () => {
          let title = this.event.title;
          if (title) {
            this.$calendar.fullCalendar('renderEvent', {
              title: title,
              start: start,
              end: end,
              allDay: allDay,
              backgroundColor: this.config.colors.success,
              textColor: this.config.colors.default
            }, true // make the event "stick"
            );
          }

          this.$calendar.fullCalendar('unselect');
          jQuery('#create-event-modal').modal('hide');
        };
        jQuery('#create-event-modal').modal('show');
      },
      eventClick: event => {
        this.event = event;
        jQuery('#show-event-modal').modal('show');
      },
      editable: true,
      droppable: true,
      drop: (dateItem, event) => {
        // retrieve the dropped element's stored Event Object
        let originalEventObject = {
          // use the element's text as the event title
          title: jQuery.trim(jQuery(event.target).text())
        };
        // we need to copy it, so that multiple events don't have a reference to the same object
        let copiedEventObject = jQuery.extend({}, originalEventObject);
        // assign it the date that was reported
        copiedEventObject.start = dateItem;
        copiedEventObject.allDay = !dateItem.hasTime();
        let $categoryClass = jQuery(event.target).data('event-class');
        if ($categoryClass) {
          copiedEventObject.className = [$categoryClass];
        }
        // render the event on the calendar
        // the last `true` argument determines if
        // the event 'sticks'
        // http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
        this.$calendar.fullCalendar('renderEvent', copiedEventObject, true);
        jQuery(event.target).remove();
      },
      dayRender: function (date, cell) {
        let today = new Date().toDateString();
        let compareDate = date.toDate().toDateString();
        if (today == compareDate) {
          cell.css("background-color", "#ccc");
        }
      }
    };
  }
  addEvent(event) {
    this.calendarOptions.events.push(event);
  }
  ngOnInit() {
    this.$calendar = jQuery('#calendar');
    this.$calendar.fullCalendar(this.calendarOptions);
    jQuery('.draggable').draggable(this.dragOptions);
  }
  static #_ = this.ɵfac = function CalendarComponent_Factory(t) {
    return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CalendarComponent,
    selectors: [["az-calendar"]],
    decls: 78,
    vars: 8,
    consts: [[1, "row"], [1, "col"], ["widget", "", 1, "card"], [1, "card-header"], [1, "widget-controls"], ["data-widgster", "expand", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-down"], ["data-widgster", "collapse", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-up"], ["data-widgster", "fullscreen", "href", "#", 1, "transition"], [1, "fa", "fa-expand"], ["data-widgster", "restore", "href", "#", 1, "transition"], [1, "fa", "fa-compress"], ["data-widgster", "close", "href", "#", 1, "transition"], [1, "fa", "fa-times"], [1, "card-body", "widget-body", "row"], [1, "col-xl-4", "col-lg-3", "col-12"], [1, "card-body"], [1, "fw-semi-bold"], ["data-event-class", "bg-primary text-white", 1, "btn", "btn-primary", "btn-block", "btn-sm", "text-left", "draggable", "text-truncate"], ["data-event-class", "bg-success text-white", 1, "btn", "btn-success", "btn-block", "btn-sm", "text-left", "draggable", "text-truncate"], ["data-event-class", "bg-dark text-white", 1, "btn", "btn-dark", "btn-block", "btn-sm", "text-left", "draggable", "text-truncate"], ["data-event-class", "bg-info text-white", 1, "btn", "btn-info", "btn-block", "btn-sm", "text-left", "draggable", "text-truncate"], ["data-event-class", "bg-warning text-white", 1, "btn", "btn-warning", "btn-block", "btn-sm", "text-left", "draggable", "text-truncate"], ["data-event-class", "bg-danger text-white", 1, "btn", "btn-danger", "btn-block", "btn-sm", "text-left", "draggable", "text-truncate"], ["data-event-class", "bg-main text-white", 1, "btn", "btn-main", "btn-block", "btn-sm", "text-left", "draggable", "text-truncate"], [1, "col-xl-8", "col-lg-9", "col-12"], ["id", "calendar"], ["id", "show-event-modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-header", "modal-info"], ["class", "modal-title", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close"], [1, "modal-body"], [1, "fa", "fa-calendar"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-info", "btn-sm"], ["id", "create-event-modal", 1, "modal", "fade"], [1, "modal-header", "modal-success", "d-block"], [1, "modal-title"], [1, "text-muted", "no-margin"], [1, "form-group"], ["type", "text", "placeholder", "Enter event here...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["data-dismiss", "modal", 1, "btn", "btn-default"], [1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-clock-o"]],
    template: function CalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "CALENDAR with Draggable Events");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 15)(18, "div", 16)(19, "div", 17)(20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Draggable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Just drap and drop events from there directly into the calendar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Client Meeting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Repeating Event ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Anniversary of the death of Adam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Product Seminar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Anniversary Celebrations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Search for a job ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Pay internet bills online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 26)(41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 28)(44, "div", 29)(45, "div", 30)(46, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, CalendarComponent_h5_47_Template, 2, 1, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 34)(51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, CalendarComponent_p_55_Template, 4, 4, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, CalendarComponent_p_56_Template, 2, 1, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 37)(58, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 39)(61, "div", 29)(62, "div", 30)(63, "div", 40)(64, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "New Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " Just enter event name to create a new one ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 34)(71, "div", 43)(72, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CalendarComponent_Template_input_ngModelChange_72_listener($event) {
          return ctx.event.title = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 37)(74, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_76_listener() {
          return ctx.createEvent();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.event.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](54, 5, ctx.event.start, "EEE MMM d y hh:mm a"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.event.end);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.event.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.event.title);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_1__.Widget, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
    encapsulation: 2
  });
}


/***/ }),

/***/ 36650:
/*!***************************************************!*\
  !*** ./src/app/pages/calendar/calendar.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarModule": () => (/* binding */ CalendarModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.component */ 51266);
/* harmony import */ var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/directives/directives.module */ 19212);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);







const routes = [{
  path: '',
  component: _calendar_component__WEBPACK_IMPORTED_MODULE_0__.CalendarComponent,
  pathMatch: 'full'
}];
class CalendarModule {
  static #_ = this.ɵfac = function CalendarModule_Factory(t) {
    return new (t || CalendarModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: CalendarModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CalendarModule, {
    declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_0__.CalendarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_calendar_calendar_module_ts.js.map