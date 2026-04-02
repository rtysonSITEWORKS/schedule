"use strict";
(self["webpackChunkazimuth"] = self["webpackChunkazimuth"] || []).push([["src_app_pages_mail_mail_module_ts"],{

/***/ 11902:
/*!*******************************************************************!*\
  !*** ./src/app/pages/mail/mail-compose/mail-compose.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailComposeComponent": () => (/* binding */ MailComposeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);



const _c0 = function () {
  return ["../mail-list/inbox"];
};
class MailComposeComponent {
  static #_ = this.ɵfac = function MailComposeComponent_Factory(t) {
    return new (t || MailComposeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MailComposeComponent,
    selectors: [["az-mail-compose"]],
    decls: 15,
    vars: 2,
    consts: [[1, "card-body", "compose"], ["method", "get", "action", "#"], [1, "form-group"], ["type", "text", "placeholder", "To", 1, "form-control"], ["type", "text", "placeholder", "Cc / Bcc", 1, "form-control"], ["type", "text", "placeholder", "Subject", 1, "form-control"], ["placeholder", "Message", "rows", "10", 1, "form-control"], [1, "form-group", "pull-right"], [1, "btn", "btn-secondary", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-main"]],
    template: function MailComposeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    encapsulation: 2
  });
}


/***/ }),

/***/ 30888:
/*!*****************************************************************!*\
  !*** ./src/app/pages/mail/mail-detail/mail-detail.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailDetailComponent": () => (/* binding */ MailDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mail.service */ 7116);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);






function MailDetailComponent_div_0_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("<", ctx_r1.mail.senderMail, ">");
  }
}
function MailDetailComponent_div_0_div_49_section_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " 457K \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const attachment_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", attachment_r4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("image-", i_r5 + 1, ".jpg");
  }
}
function MailDetailComponent_div_0_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 29)(3, "div", 30)(4, "p")(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \u00A0-\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Download all attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "View all Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MailDetailComponent_div_0_div_49_section_13_Template, 11, 2, "section", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.mail.attachments.length, " attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.mail.attachments);
  }
}
function MailDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 2)(3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MailDetailComponent_div_0_span_14_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "to me");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11)(19, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ul", 17)(27, "li")(28, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li")(32, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li")(41, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Spam");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MailDetailComponent_div_0_Template_a_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.trash(ctx_r6.mail.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, MailDetailComponent_div_0_div_49_Template, 14, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.mail.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.mail.sender);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.mail.senderMail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.mail.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.mail.body, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.mail.attachments.length > 0);
  }
}
class MailDetailComponent {
  constructor(service, route, router) {
    this.service = service;
    this.route = route;
    this.router = router;
    this.replyMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(params => this.service.getMail(+params['id']))).subscribe(mail => this.mail = mail);
  }
  goToReply(mail) {
    this.replyMessage.emit(mail);
  }
  trash(id) {
    this.service.getMail(id).then(mail => {
      if (mail) {
        mail.trash = true;
        mail.sent = false;
        mail.draft = false;
        mail.starred = false;
      }
    });
    this.router.navigate(['pages/mail/mail-list/inbox']);
  }
  static #_ = this.ɵfac = function MailDetailComponent_Factory(t) {
    return new (t || MailDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MailDetailComponent,
    selectors: [["az-mail-detail"]],
    outputs: {
      replyMessage: "replyMessage"
    },
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "card-body"], [1, "detail-header", "clearfix"], ["href", "#", 1, "text-muted", "pull-right"], [1, "fa", "fa-print"], [1, "pull-left"], [1, "detail-content", "bottom-15", "clearfix"], [1, "avatar", "pull-left"], ["aria-hidden", "true", 1, "fa", "fa-user"], ["class", "email", 4, "ngIf"], [1, "receiver"], [1, "pull-right"], [1, "mail-date"], [1, "btn-group"], [1, "btn", "btn-sm", "btn-secondary"], [1, "fa", "fa-reply"], ["data-toggle", "dropdown", 1, "btn", "btn-sm", "btn-secondary", "dropdown-toggle"], [1, "dropdown-menu", "pull-xs-right"], ["href", "#", 1, "dropdown-item"], [1, "fa", "fa-reply", "reply-btn"], [1, "fa", "fa-arrow-right", "reply-btn"], [1, "dropdown-divider"], [1, "fa", "fa-ban"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-trash"], [3, "innerHTML"], ["class", "mail-attachments", 4, "ngIf"], [1, "email"], [1, "mail-attachments"], [1, "row"], [1, "col-sm-6"], ["href", "#"], ["class", "attachment", 4, "ngFor", "ngForOf"], [1, "attachment"], ["alt", "", 3, "src"], [1, "title"]],
    template: function MailDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MailDetailComponent_div_0_Template, 50, 6, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mail);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    encapsulation: 2
  });
}


/***/ }),

/***/ 77863:
/*!*************************************************************!*\
  !*** ./src/app/pages/mail/mail-list/mail-list.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailListComponent": () => (/* binding */ MailListComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mail.service */ 7116);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.state */ 82534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _theme_pipes_search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/pipes/search/mail-search.pipe */ 96555);









const _c0 = function (a0, a1) {
  return {
    "fa-star": a0,
    "fa-star-o": a1
  };
};
function MailListComponent_tr_9_td_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 18)(1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MailListComponent_tr_9_td_5_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const mail_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.changeStarStatus(mail_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mail_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c0, mail_r1.starred, !mail_r1.starred));
  }
}
function MailListComponent_tr_9_i_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 20);
  }
}
const _c1 = function (a0, a1) {
  return {
    "unread": a0,
    "selected": a1
  };
};
function MailListComponent_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 9)(1, "td", 10)(2, "div", 1)(3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MailListComponent_tr_9_Template_input_ngModelChange_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const mail_r1 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](mail_r1.selected = $event);
    })("ngModelChange", function MailListComponent_tr_9_Template_input_ngModelChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.toggleOne());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MailListComponent_tr_9_td_5_Template, 2, 4, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MailListComponent_tr_9_Template_td_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const mail_r1 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.goToDetail(mail_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MailListComponent_tr_9_Template_td_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const mail_r1 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.goToDetail(mail_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MailListComponent_tr_9_Template_td_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const mail_r1 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.goToDetail(mail_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MailListComponent_tr_9_i_10_Template, 1, 0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MailListComponent_tr_9_Template_td_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const mail_r1 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.goToDetail(mail_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mail_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c1, mail_r1.unread, mail_r1.selected));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "checkbox", mail_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", mail_r1.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattributeInterpolate1"]("for", "checkbox", mail_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.router.url != "/pages/mail/mail-list/trash");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](mail_r1.sender);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", mail_r1.subject, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", mail_r1.attachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](mail_r1.date);
  }
}
class MailListComponent {
  constructor(service, route, router, state) {
    this.service = service;
    this.route = route;
    this.router = router;
    this.state = state;
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
        this.unSelectAll();
        this.searchText = '';
      }
    });
    this.state.subscribe('markAsRead', () => {
      this.markAllAsRead();
    });
    this.state.subscribe('markAsUnRead', () => {
      this.markAllAsUnRead();
    });
    this.state.subscribe('deleteChecked', () => {
      this.deleteAllCheckedMail();
    });
  }
  ngOnInit() {
    this.getMails();
  }
  getMails() {
    this.mails = this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(params => {
      this.type = params['type'];
      switch (this.type) {
        case 'inbox':
          return this.service.getInboxMails();
        case 'starred':
          return this.service.getStarredMails();
        case 'sent':
          return this.service.getSentMails();
        case 'drafts':
          return this.service.getDraftMails();
        case 'trash':
          return this.service.getTrashMails();
        default:
          return this.service.getInboxMails();
      }
    }));
  }
  toggleAll() {
    let toggleStatus = !this.isAllSelected;
    this.mails.subscribe(result => {
      result.forEach(mail => {
        mail.selected = toggleStatus;
      });
    });
  }
  toggleOne() {
    this.mails.subscribe(result => {
      this.isAllSelected = result.every(mail => {
        return mail.selected == true;
      });
    });
  }
  unSelectAll() {
    this.isAllSelected = false;
    if (this.mails) {
      this.mails.subscribe(result => {
        result.forEach(mail => {
          mail.selected = false;
        });
      });
    }
  }
  markAllAsRead() {
    this.mails.subscribe(result => {
      result.forEach(mail => {
        if (mail.selected) mail.unread = false;
      });
    });
  }
  markAllAsUnRead() {
    this.mails.subscribe(result => {
      result.forEach(mail => {
        if (mail.selected) mail.unread = true;
      });
    });
  }
  deleteAllCheckedMail() {
    this.mails.subscribe(result => {
      result.forEach(mail => {
        if (mail.selected) {
          mail.trash = true;
          mail.sent = false;
          mail.draft = false;
          mail.starred = false;
        }
      });
    });
    this.getMails();
    this.isAllSelected = false;
  }
  goToDetail(mail) {
    mail.unread = false;
    this.router.navigate(['pages/mail/mail-list/' + this.type, mail.id]);
  }
  changeStarStatus(mail) {
    mail.starred = !mail.starred;
  }
  static #_ = this.ɵfac = function MailListComponent_Factory(t) {
    return new (t || MailListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_state__WEBPACK_IMPORTED_MODULE_1__.AppState));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MailListComponent,
    selectors: [["az-mail-list"]],
    decls: 12,
    vars: 8,
    consts: [[1, "table-header"], [1, "abc-checkbox", "inbox-checkbox"], ["id", "toggle-all", "type", "checkbox", 3, "ngModel", "ngModelChange", "click"], ["for", "toggle-all"], [1, "w-200", "pull-right"], ["id", "table-search-input", "type", "text", "placeholder", "Search mail...", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [1, "table-responsive"], [1, "table", "inbox-table"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "mail-checkbox"], ["type", "checkbox", 3, "id", "ngModel", "ngModelChange"], ["class", "mail-star", 4, "ngIf"], [1, "sender", 3, "click"], [1, "subject", 3, "innerHTML", "click"], [1, "attachment", 3, "click"], ["class", "fa fa-paperclip", 4, "ngIf"], [1, "date", 3, "click"], [1, "mail-star"], [1, "fa", 3, "ngClass", "click"], [1, "fa", "fa-paperclip"]],
    template: function MailListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MailListComponent_Template_input_ngModelChange_2_listener($event) {
          return ctx.isAllSelected = $event;
        })("click", function MailListComponent_Template_input_click_2_listener() {
          return ctx.toggleAll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MailListComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.searchText = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "table", 7)(8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MailListComponent_tr_9_Template, 13, 12, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "MailSearch");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.isAllSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 6, ctx.mails), ctx.searchText));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _theme_pipes_search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__.MailSearchPipe],
    encapsulation: 2
  });
}


/***/ }),

/***/ 71994:
/*!**********************************************!*\
  !*** ./src/app/pages/mail/mail.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailComponent": () => (/* binding */ MailComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mail.service */ 7116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.state */ 82534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);







function MailComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41)(1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function MailComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43)(1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function MailComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45)(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MailComponent_div_19_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.trash());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return ["mail-compose"];
};
const _c1 = function () {
  return ["mail-list/inbox"];
};
const _c2 = function () {
  return ["mail-list/starred"];
};
const _c3 = function () {
  return ["mail-list/sent"];
};
const _c4 = function () {
  return ["mail-list/drafts"];
};
const _c5 = function () {
  return ["mail-list/trash"];
};
class MailComponent {
  constructor(service, route, router, state) {
    this.service = service;
    this.route = route;
    this.router = router;
    this.state = state;
    this.markAsRead = false;
    this.markAsUnRead = false;
    this.deleteChecked = false;
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        this.id = this.route.snapshot.firstChild.params['id'];
        this.type = this.route.snapshot.firstChild.params['type'];
        setTimeout(() => {
          jQuery('[data-toggle="tooltip"]').tooltip({
            trigger: "hover",
            sanitize: false,
            sanitizeFn: function (content) {
              return null;
            }
          });
        });
      }
    });
  }
  getBack() {
    if (this.type) this.router.navigate(['pages/mail/mail-list/' + this.type]);else this.router.navigate(['pages/mail/mail-list/inbox']);
  }
  trash() {
    jQuery('[data-toggle="tooltip"]').tooltip({
      sanitize: false,
      sanitizeFn: function (content) {
        return null;
      }
    });
    jQuery('[data-toggle="tooltip"]').tooltip('hide');
    this.service.getMail(this.id).then(mail => {
      if (mail) {
        mail.trash = true;
        mail.sent = false;
        mail.draft = false;
        mail.starred = false;
      }
    });
    this.router.navigate(['pages/mail/mail-list/inbox']);
  }
  setAsRead() {
    this.markAsRead = !this.markAsRead;
    this.state.notifyDataChanged('markAsRead', this.markAsRead);
  }
  setAsUnRead() {
    this.markAsUnRead = !this.markAsUnRead;
    this.state.notifyDataChanged('markAsUnRead', this.markAsUnRead);
  }
  deleteCheckedMail() {
    this.deleteChecked = !this.deleteChecked;
    this.state.notifyDataChanged('deleteChecked', this.deleteChecked);
  }
  static #_ = this.ɵfac = function MailComponent_Factory(t) {
    return new (t || MailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_state__WEBPACK_IMPORTED_MODULE_1__.AppState));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MailComponent,
    selectors: [["az-mail"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_mail_service__WEBPACK_IMPORTED_MODULE_0__.MailService])],
    decls: 125,
    vars: 22,
    consts: [[1, "inbox-container"], [1, "row"], [1, "col-sm-3", "col-md-2"], [1, "btn-group"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-main", "btn-sm", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "col-sm-9", "col-md-10"], ["data-toggle", "tooltip", "data-placement", "top", "data-animation", "false", 1, "b-btn", "mr-1", 3, "title"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "fa", "fa-arrow-left"], ["class", "b-btn mr-1", "data-toggle", "tooltip", "data-placement", "top", "data-animation", "false", "title", "Archive", 4, "ngIf"], ["class", "b-btn mr-1", "data-toggle", "tooltip", "data-placement", "top", "data-animation", "false", "title", "Report Spam", 4, "ngIf"], ["class", "b-btn mr-1", "data-toggle", "tooltip", "data-placement", "top", "data-animation", "false", "title", "Delete", 4, "ngIf"], ["data-toggle", "tooltip", "data-placement", "top", "data-animation", "false", "title", "Refresh", 1, "b-btn", "mr-1"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm"], [1, "fa", "fa-refresh"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "pull-right"], [1, "inbox-paging", "mr-1"], [1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", "btn-secondary", "mr-1"], [1, "fa", "fa-chevron-left"], ["type", "button", 1, "btn", "btn-secondary"], [1, "fa", "fa-chevron-right"], ["role", "button", 1, "btn", "btn-danger", "btn-sm", "btn-block", 3, "routerLink"], [1, "nav", "flex-column"], [1, "nav-item"], [3, "routerLink"], [1, "badge", "badge-pill", "badge-main", "pull-right"], ["data-toggle", "collapse", "href", "#circles", "aria-expanded", "false", "aria-controls", "circles"], [1, "fa", "fa-caret-down", "pull-right"], ["id", "circles", 1, "collapse"], ["href", "#"], [1, "fa", "fa-circle-o", "text-muted", "pull-right"], ["data-toggle", "collapse", "href", "#more", "aria-expanded", "false", "aria-controls", "more"], ["id", "more", 1, "collapse"], [1, "fa", "fa-circle", "text-danger", "pull-right"], [1, "fa", "fa-circle", "text-white", "pull-right"], [1, "fa", "fa-circle", "pull-right"], [1, "inbox-body"], ["data-toggle", "tooltip", "data-placement", "top", "data-animation", "false", "title", "Archive", 1, "b-btn", "mr-1"], [1, "fa", "fa-archive"], ["data-toggle", "tooltip", "data-placement", "top", "data-animation", "false", "title", "Report Spam", 1, "b-btn", "mr-1"], [1, "fa", "fa-exclamation-circle"], ["data-toggle", "tooltip", "data-placement", "top", "data-animation", "false", "title", "Delete", 1, "b-btn", "mr-1"], [1, "fa", "fa-trash"]],
    template: function MailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7)(14, "div", 8)(15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MailComponent_Template_button_click_15_listener() {
          return ctx.getBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, MailComponent_div_17_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MailComponent_div_18_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, MailComponent_div_19_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14)(21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 3)(24, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 5)(27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MailComponent_Template_a_click_27_listener() {
          return ctx.setAsRead();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Mark as read");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MailComponent_Template_a_click_29_listener() {
          return ctx.setAsUnRead();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Mark as unread");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MailComponent_Template_a_click_31_listener() {
          return ctx.deleteCheckedMail();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 18)(34, "span", 19)(35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\u2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "277");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 20)(44, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 1)(50, "div", 2)(51, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "COMPOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "ul", 26)(55, "li", 27)(56, "a", 28)(57, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "li", 27)(61, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Starred");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "li", 27)(64, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Sent Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "li", 27)(67, "a", 28)(68, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Drafts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "li", 27)(72, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Trash");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "ul", 26)(76, "li", 27)(77, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " Circles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 32)(81, "ul", 26)(82, "li", 27)(83, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, " Friends ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "li", 27)(87, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, " Family ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "li", 27)(91, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, " Work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "li", 27)(95, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "li", 27)(98, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "li", 27)(101, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "li", 27)(104, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 36)(108, "ul", 26)(109, "li", 27)(110, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, " Chats ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "li", 27)(114, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, " Spam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "li", 27)(118, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, " Trash ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 7)(122, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.id || !ctx.type ? "inline-block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("title", "Back to ", ctx.type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.router.url == "/pages/mail/mail-compose" || ctx.id ? "none" : "inline-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.router.url == "/pages/mail/mail-compose" ? "none" : "inline-block");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](18, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](20, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c5));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: ["/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none;\n}\n\n.inbox-container .b-btn {\n  display: inline-block;\n}\n.inbox-container .check-all {\n  position: relative;\n  top: 2px;\n  margin: 0 4px;\n}\n.inbox-container .inbox-paging {\n  color: #555;\n}\n.inbox-container .inbox-checkbox {\n  display: inline-flex;\n  padding-left: 0;\n}\n.inbox-container .inbox-checkbox label {\n  margin-bottom: 0;\n  padding-left: 0;\n}\n.inbox-container .inbox-checkbox label::before {\n  width: 15px;\n  height: 15px;\n  margin-left: -14px;\n  border-radius: 0;\n  top: 1px;\n}\n.inbox-container .inbox-checkbox label::after {\n  margin-left: -15px;\n  padding-top: 0;\n}\n.inbox-container .nav-item a {\n  display: block;\n  padding: 2px 3px;\n  color: #555;\n}\n.inbox-container .nav-item a i {\n  margin-top: 3px;\n}\n.inbox-container .nav-item a:hover {\n  background: #242D3A;\n  color: #fff;\n}\n.inbox-container .nav-item ul {\n  padding-left: 4px;\n}\n.inbox-container .inbox-body {\n  background: #fff;\n}\n.inbox-container .inbox-table {\n  margin-bottom: 0;\n}\n.inbox-container .inbox-table > tbody > tr {\n  cursor: pointer;\n}\n.inbox-container .inbox-table > tbody > tr.unread td {\n  font-weight: bold;\n}\n.inbox-container .inbox-table > tbody > tr.selected {\n  background: #f7f7f7;\n}\n.inbox-container .inbox-table > tbody > tr:hover {\n  background: #f7f7f7;\n}\n.inbox-container .inbox-table > tbody > tr > td {\n  padding: 0.4rem;\n}\n.inbox-container .inbox-table > tbody > tr > td.mail-checkbox {\n  width: 34px;\n  padding-left: 10px;\n}\n.inbox-container .inbox-table > tbody > tr > td.mail-checkbox .inbox-checkbox label::after {\n  margin-left: -15px;\n  padding-top: 0;\n}\n.inbox-container .inbox-table > tbody > tr > td.mail-star {\n  width: 28px;\n  font-size: 15px;\n  color: rgba(0, 0, 0, 0.3);\n}\n.inbox-container .inbox-table > tbody > tr > td.mail-star i.fa-star {\n  color: #f79a17;\n}\n.inbox-container .inbox-table > tbody > tr > td.sender {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 150px;\n  overflow: hidden;\n}\n.inbox-container .inbox-table > tbody > tr > td.subject {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 500px;\n  overflow: hidden;\n}\n.inbox-container .inbox-table > tbody > tr > td.attachment {\n  width: 24px;\n  text-align: center;\n}\n.inbox-container .inbox-table > tbody > tr > td.date {\n  width: 80px;\n  text-align: right;\n  padding-right: 6px;\n  white-space: nowrap;\n}\n.inbox-container .table-header {\n  padding: 0.4rem 0.6rem;\n  overflow: hidden;\n}\n.inbox-container .detail-content .avatar {\n  width: 38px;\n  height: 38px;\n  margin-right: 10px;\n  background: #e9ebee;\n  border: 1px solid #ccc;\n  color: #ccc;\n  text-align: center;\n  padding: 3px;\n  font-size: 20px;\n}\n.inbox-container .detail-content .mail-date {\n  line-height: 28px;\n  margin-right: 10px;\n}\n\n.compose {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc3R5bGVzL3NraW5zL19ibHVlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi9TY2hlZHVsaW5nJTIwU29mdHdhcmUvc3JjL2FwcC9wYWdlcy9tYWlsL21haWwuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3BhZ2VzL21haWwvbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBQTtBQ2FBLG9CQUFBO0FBTUEsa0JBQUE7QUFJQSxpQkFBQTtBQUtBLGtCQUFBO0FBS0EsbUJBQUE7QUFLQSxnQkFBQTtBQVNBLHVCQUFBO0FBOENBO0VBQ0ksMlFBQUE7RUFDQSxhQUFBO0FDcEZKOztBQ1JJO0VBQ0kscUJBQUE7QURXUjtBQ1RJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBRFdSO0FDVEk7RUFDSSxXRlBEO0FDa0JQO0FDVEk7RUFDSSxvQkFBQTtFQUNBLGVBQUE7QURXUjtBQ1ZRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FEWVo7QUNYWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7QURhaEI7QUNYWTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBRGFoQjtBQ1JRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0ZoQ0w7QUMwQ1A7QUNUWTtFQUNJLGVBQUE7QURXaEI7QUNUWTtFQUNJLG1CSHpDSDtFRzBDRyxXQUFBO0FEV2hCO0FDUlE7RUFDSSxpQkFBQTtBRFVaO0FDUEk7RUFDSSxnQkFBQTtBRFNSO0FDUEk7RUFDSSxnQkFBQTtBRFNSO0FDUlE7RUFDSSxlQUFBO0FEVVo7QUNUWTtFQUNJLGlCQUFBO0FEV2hCO0FDVFk7RUFDSSxtQkFBQTtBRFdoQjtBQ1RZO0VBQ0ksbUJBQUE7QURXaEI7QUNUWTtFQUNJLGVBQUE7QURXaEI7QUNWZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QURZcEI7QUNYb0I7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QURheEI7QUNWZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FEWXBCO0FDWG9CO0VBQ0ksY0hsRVI7QUUrRWhCO0FDVmdCO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURZcEI7QUNWZ0I7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRFlwQjtBQ1ZnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBRFlwQjtBQ1ZnQjtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURZcEI7QUNQSTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QURTUjtBQ0xRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRE9aO0FDTFE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FET1o7O0FDREE7RUFDSSxnQkFBQTtBRElKIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiogQ29sb3JzIChyZWNvbW1lbmRlZCB1c2UgSEVYIGNvbG9ycykgKioqKi8gXHJcbiRtYWluLWNvbG9yOiAjMjQyRDNBOyBcclxuJGRlZmF1bHQtY29sb3I6I2ZmZjsgXHJcbiRkYXJrLWNvbG9yOiAjMDAwO1xyXG5cclxuJGJvZHktYmctZ3JhZGllbnQtY29sb3ItMTogIzFlNTc5OTtcclxuJGJvZHktYmctZ3JhZGllbnQtY29sb3ItMjogICNhNWM5ZTU7XHJcblxyXG4kc2lkZWJhci1iZy1jb2xvcjojMzQ0MTU0O1xyXG4kc2lkZWJhci1pdGVtLWFjdGl2ZS1iZy1jb2xvcjogIzYzN0NBMDsvLyAjMDA5OWNjO1xyXG5cclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMDI0YTg4O1xyXG4kc3VjY2Vzcy1jb2xvcjogIzJkOTIyZDtcclxuJGluZm8tY29sb3I6ICMyNDhkYWQ7XHJcbiR3YXJuaW5nLWNvbG9yOiAjZjc5YTE3O1xyXG4kZGFuZ2VyLWNvbG9yOiAjYmYxNzI1OyIsIkBpbXBvcnQgXCJza2lucy9ibHVlXCI7XHJcblxyXG4kYm9keS1iZy1jb2xvcjogI2U5ZWJlZTtcclxuJHRleHQtY29sb3I6ICMyNDI0MjQ7XHJcbiRncmF5LWRhcms6ICMyOTJiMmM7XHJcbiRncmF5OiAjNTU1O1xyXG4kZ3JheS1saWdodDogI2NjYztcclxuJGdyYXktbGlnaHRlcjogI2VjZWVlZjtcclxuXHJcbiR0YWJsZS1iZy1hY3RpdmU6IHJnYmEoIzAwMCwuMDc1KTtcclxuJHRhYmxlLWJvcmRlci13aWR0aDogMXB4O1xyXG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkZ3JheS1saWdodGVyO1xyXG5cclxuLyoqKiogQXBwIHJvb3RzICoqKiovXHJcbiRhc3NldHMtcm9vdDogJ34vYXNzZXRzLyc7XHJcbiRpbWFnZXMtcm9vdDogJGFzc2V0cy1yb290ICsgJ2ltZy8nO1xyXG4kZm9udHMtcm9vdDogJGFzc2V0cy1yb290ICsgJ2ZvbnRzLyc7XHJcblxyXG5cclxuLyoqKiogR2VuZXJhbCAqKioqL1xyXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuXHJcbi8qKioqIE5hdmJhciAqKioqL1xyXG4kbmF2YmFyLXRleHQtY29sb3I6ICRkZWZhdWx0LWNvbG9yO1xyXG4kbmF2YmFyLWhlaWdodDogNjBweDtcclxuXHJcblxyXG4vKioqKiBTaWRlYmFyICoqKiovXHJcbiRzaWRlYmFyLXdpZHRoOiAyMzBweDtcclxuXHJcblxyXG5cclxuLyoqKiogUHJvZ3Jlc3MgKioqKi9cclxuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6IDA7XHJcbiRwcm9ncmVzcy1oZWlnaHQ6IDIwcHg7XHJcblxyXG5cclxuLyoqKiogRm9udHMgKioqKi9cclxuJGZvbnQtdGhpbjogMTAwO1xyXG4kZm9udC1saWdodDogMzAwO1xyXG4kZm9udC1ub3JtYWw6IDQwMDtcclxuJGZvbnQtYm9sZDogNTAwO1xyXG4kZm9udC1ib2xkZXI6IDcwMDtcclxuJGZvbnQtdWx0cmFCb2xkOiA5MDA7XHJcblxyXG5cclxuLyoqKiogU29jaWFsIGljb25zICoqKiovXHJcbiRmYWNlYm9vay1jb2xvcjogIzNiNTk5ODtcclxuJHR3aXR0ZXItY29sb3I6ICM1NWFjZWU7XHJcbiRpbnN0YWdyYW0tY29sb3I6ICM4YTNhYjk7XHJcbiRwaW50ZXJlc3QtY29sb3I6ICNjOTIyMjg7IFxyXG4kZ29vZ2xlLWNvbG9yOiAjZGQ0YjM5O1xyXG4kbGlua2VkaW4tY29sb3I6ICMwMTc3QjU7XHJcbiRnaXRodWItY29sb3I6ICM2YjZiNmI7XHJcbiRzdGFja292ZXJmbG93LWNvbG9yOiAjMkY5NkU4O1xyXG4kZHJpYmJsZS1jb2xvcjogI0YyNjc5ODtcclxuJGJlaGFjZS1jb2xvcjogIzAwOTNGQTtcclxuXHJcbi8vLS0tLS0tLS1mb3IgcHJldmVudCBhd2Vzb21lLWJvb3RzdHJhcC1jaGVja2JveCBlcnJvcnMtLS0tLS0tLS1cclxuLy9AaW1wb3J0IFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xyXG4vL0BpbXBvcnQgXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHJnYmEoIzAwMCwuMTUpO1xyXG4kZW5hYmxlLXRyYW5zaXRpb25zOiB0cnVlO1xyXG4kaW5wdXQtY29sb3I6ICRncmF5O1xyXG4kaW5wdXQtYmctZGlzYWJsZWQ6ICRncmF5LWxpZ2h0ZXI7XHJcbiRicmFuZC1wcmltYXJ5OiAkcHJpbWFyeS1jb2xvcjtcclxuJGJyYW5kLXN1Y2Nlc3M6ICRzdWNjZXNzLWNvbG9yO1xyXG4kYnJhbmQtaW5mbzogJGluZm8tY29sb3I7XHJcbiRicmFuZC13YXJuaW5nOiAkd2FybmluZy1jb2xvcjtcclxuJGJyYW5kLWRhbmdlcjogJGRhbmdlci1jb2xvcjtcclxuJGJyYW5kLWludmVyc2U6ICRncmF5LWRhcms7XHJcblxyXG5cclxuXHJcblxyXG4vL1NldCB2YXJpYWJsZXMgdG8gYmUgYWNjZXNzaWJsZSBmb3IgSlNcclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXRvLWpzL3Nhc3Mvc2Fzcy10by1qc1wiO1xyXG5cclxuJHZhcmlhYmxlc01hcDogKCBcclxuICBtYWluLWNvbG9yOiAkbWFpbi1jb2xvcixcclxuICBkZWZhdWx0LWNvbG9yOiAkZGVmYXVsdC1jb2xvcixcclxuICBkYXJrLWNvbG9yOiAkZGFyay1jb2xvcixcclxuICBwcmltYXJ5LWNvbG9yOiAkcHJpbWFyeS1jb2xvcixcclxuICBzdWNjZXNzLWNvbG9yOiAkc3VjY2Vzcy1jb2xvcixcclxuICB3YXJuaW5nLWNvbG9yOiAkd2FybmluZy1jb2xvcixcclxuICBkYW5nZXItY29sb3I6ICRkYW5nZXItY29sb3IsXHJcbiAgaW5mby1jb2xvcjogJGluZm8tY29sb3IsXHJcbiAgc2lkZWJhci1iZy1jb2xvcjogJHNpZGViYXItYmctY29sb3IsXHJcbiAgZ3JheTogJGdyYXksXHJcbiAgZ3JheS1saWdodDogJGdyYXktbGlnaHRcclxuKTtcclxuXHJcbmJvZHk6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IHNhc3NUb0pzKCR2YXJpYWJsZXNNYXApO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuIiwiLyoqKiogQ29sb3JzIChyZWNvbW1lbmRlZCB1c2UgSEVYIGNvbG9ycykgKioqKi9cbi8qKioqIEFwcCByb290cyAqKioqL1xuLyoqKiogR2VuZXJhbCAqKioqL1xuLyoqKiogTmF2YmFyICoqKiovXG4vKioqKiBTaWRlYmFyICoqKiovXG4vKioqKiBQcm9ncmVzcyAqKioqL1xuLyoqKiogRm9udHMgKioqKi9cbi8qKioqIFNvY2lhbCBpY29ucyAqKioqL1xuYm9keTo6YWZ0ZXIge1xuICBjb250ZW50OiAne1wibWFpbi1jb2xvclwiOlwiIzI0MkQzQVwiLFwiZGVmYXVsdC1jb2xvclwiOlwiI2ZmZlwiLFwiZGFyay1jb2xvclwiOlwiIzAwMFwiLFwicHJpbWFyeS1jb2xvclwiOlwiIzAyNGE4OFwiLFwic3VjY2Vzcy1jb2xvclwiOlwiIzJkOTIyZFwiLFwid2FybmluZy1jb2xvclwiOlwiI2Y3OWExN1wiLFwiZGFuZ2VyLWNvbG9yXCI6XCIjYmYxNzI1XCIsXCJpbmZvLWNvbG9yXCI6XCIjMjQ4ZGFkXCIsXCJzaWRlYmFyLWJnLWNvbG9yXCI6XCIjMzQ0MTU0XCIsXCJncmF5XCI6XCIjNTU1XCIsXCJncmF5LWxpZ2h0XCI6XCIjY2NjXCJ9JztcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmluYm94LWNvbnRhaW5lciAuYi1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uaW5ib3gtY29udGFpbmVyIC5jaGVjay1hbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xuICBtYXJnaW46IDAgNHB4O1xufVxuLmluYm94LWNvbnRhaW5lciAuaW5ib3gtcGFnaW5nIHtcbiAgY29sb3I6ICM1NTU7XG59XG4uaW5ib3gtY29udGFpbmVyIC5pbmJveC1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4uaW5ib3gtY29udGFpbmVyIC5pbmJveC1jaGVja2JveCBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5pbmJveC1jb250YWluZXIgLmluYm94LWNoZWNrYm94IGxhYmVsOjpiZWZvcmUge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW4tbGVmdDogLTE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHRvcDogMXB4O1xufVxuLmluYm94LWNvbnRhaW5lciAuaW5ib3gtY2hlY2tib3ggbGFiZWw6OmFmdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbi5pbmJveC1jb250YWluZXIgLm5hdi1pdGVtIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMnB4IDNweDtcbiAgY29sb3I6ICM1NTU7XG59XG4uaW5ib3gtY29udGFpbmVyIC5uYXYtaXRlbSBhIGkge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG4uaW5ib3gtY29udGFpbmVyIC5uYXYtaXRlbSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI0MkQzQTtcbiAgY29sb3I6ICNmZmY7XG59XG4uaW5ib3gtY29udGFpbmVyIC5uYXYtaXRlbSB1bCB7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuLmluYm94LWNvbnRhaW5lciAuaW5ib3gtYm9keSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uaW5ib3gtY29udGFpbmVyIC5pbmJveC10YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uaW5ib3gtY29udGFpbmVyIC5pbmJveC10YWJsZSA+IHRib2R5ID4gdHIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW5ib3gtY29udGFpbmVyIC5pbmJveC10YWJsZSA+IHRib2R5ID4gdHIudW5yZWFkIHRkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW5ib3gtY29udGFpbmVyIC5pbmJveC10YWJsZSA+IHRib2R5ID4gdHIuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xufVxuLmluYm94LWNvbnRhaW5lciAuaW5ib3gtdGFibGUgPiB0Ym9keSA+IHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbn1cbi5pbmJveC1jb250YWluZXIgLmluYm94LXRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcbiAgcGFkZGluZzogMC40cmVtO1xufVxuLmluYm94LWNvbnRhaW5lciAuaW5ib3gtdGFibGUgPiB0Ym9keSA+IHRyID4gdGQubWFpbC1jaGVja2JveCB7XG4gIHdpZHRoOiAzNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uaW5ib3gtY29udGFpbmVyIC5pbmJveC10YWJsZSA+IHRib2R5ID4gdHIgPiB0ZC5tYWlsLWNoZWNrYm94IC5pbmJveC1jaGVja2JveCBsYWJlbDo6YWZ0ZXIge1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLmluYm94LWNvbnRhaW5lciAuaW5ib3gtdGFibGUgPiB0Ym9keSA+IHRyID4gdGQubWFpbC1zdGFyIHtcbiAgd2lkdGg6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5pbmJveC1jb250YWluZXIgLmluYm94LXRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLm1haWwtc3RhciBpLmZhLXN0YXIge1xuICBjb2xvcjogI2Y3OWExNztcbn1cbi5pbmJveC1jb250YWluZXIgLmluYm94LXRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLnNlbmRlciB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmluYm94LWNvbnRhaW5lciAuaW5ib3gtdGFibGUgPiB0Ym9keSA+IHRyID4gdGQuc3ViamVjdCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmluYm94LWNvbnRhaW5lciAuaW5ib3gtdGFibGUgPiB0Ym9keSA+IHRyID4gdGQuYXR0YWNobWVudCB7XG4gIHdpZHRoOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5ib3gtY29udGFpbmVyIC5pbmJveC10YWJsZSA+IHRib2R5ID4gdHIgPiB0ZC5kYXRlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uaW5ib3gtY29udGFpbmVyIC50YWJsZS1oZWFkZXIge1xuICBwYWRkaW5nOiAwLjRyZW0gMC42cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmluYm94LWNvbnRhaW5lciAuZGV0YWlsLWNvbnRlbnQgLmF2YXRhciB7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogI2U5ZWJlZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgY29sb3I6ICNjY2M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogM3B4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uaW5ib3gtY29udGFpbmVyIC5kZXRhaWwtY29udGVudCAubWFpbC1kYXRlIHtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNvbXBvc2Uge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSIsIkBpbXBvcnQgXCIuLi8uLi90aGVtZS9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4uaW5ib3gtY29udGFpbmVye1xyXG4gICAgLmItYnRue1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIC5jaGVjay1hbGx7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICB9XHJcbiAgICAuaW5ib3gtcGFnaW5ne1xyXG4gICAgICAgIGNvbG9yOiAkZ3JheTtcclxuICAgIH1cclxuICAgIC5pbmJveC1jaGVja2JveHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDotMTRweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICB0b3A6MXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6LTE1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICAubmF2LWl0ZW17ICAgICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4IDNweDtcclxuICAgICAgICAgICAgY29sb3I6ICRncmF5O1xyXG4gICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbWFpbi1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5ib3gtYm9keXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmluYm94LXRhYmxle1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgPiB0Ym9keSA+IHRye1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICYudW5yZWFkIHRke1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5zZWxlY3RlZHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPiB0ZHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgICAgICAgICAgICAgICYubWFpbC1jaGVja2JveHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzRweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLmluYm94LWNoZWNrYm94IGxhYmVsOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5tYWlsLXN0YXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaS5mYS1zdGFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdhcm5pbmctY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5zZW5kZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLnN1YmplY3R7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuYXR0YWNobWVudHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLmRhdGV7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGFibGUtaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNHJlbSAwLjZyZW07XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuIFxyXG4gICAgLmRldGFpbC1jb250ZW50e1xyXG4gICAgICAgIC5hdmF0YXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U5ZWJlZTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYWlsLWRhdGV7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmNvbXBvc2V7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 35185:
/*!*******************************************!*\
  !*** ./src/app/pages/mail/mail.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailModule": () => (/* binding */ MailModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/pipes/pipes.module */ 39045);
/* harmony import */ var _mail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail.component */ 71994);
/* harmony import */ var _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail-compose/mail-compose.component */ 11902);
/* harmony import */ var _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mail-list/mail-list.component */ 77863);
/* harmony import */ var _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mail-detail/mail-detail.component */ 30888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);










const routes = [{
  path: '',
  component: _mail_component__WEBPACK_IMPORTED_MODULE_1__.MailComponent,
  data: {
    breadcrumb: 'Mail'
  },
  children: [{
    path: '',
    redirectTo: 'mail-list/inbox',
    pathMatch: 'full'
  }, {
    path: 'mail-list/:type',
    component: _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_3__.MailListComponent,
    data: {
      breadcrumb: 'Inbox'
    }
  }, {
    path: 'mail-compose',
    component: _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_2__.MailComposeComponent,
    data: {
      breadcrumb: 'Compose'
    }
  }, {
    path: 'mail-list/:type/:id',
    component: _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_4__.MailDetailComponent,
    data: {
      breadcrumb: 'Detail'
    }
  }]
}];
class MailModule {
  static #_ = this.ɵfac = function MailModule_Factory(t) {
    return new (t || MailModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: MailModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MailModule, {
    declarations: [_mail_component__WEBPACK_IMPORTED_MODULE_1__.MailComponent, _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_2__.MailComposeComponent, _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_3__.MailListComponent, _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_4__.MailDetailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 7116:
/*!********************************************!*\
  !*** ./src/app/pages/mail/mail.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mail": () => (/* binding */ Mail),
/* harmony export */   "MailService": () => (/* binding */ MailService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class Mail {
  constructor(id, sender, senderMail, subject, date, body, attachment, attachments, unread, sent, starred, draft, trash, selected) {
    this.id = id;
    this.sender = sender;
    this.senderMail = senderMail;
    this.subject = subject;
    this.date = date;
    this.body = body;
    this.attachment = attachment;
    this.attachments = attachments;
    this.unread = unread;
    this.sent = sent;
    this.starred = starred;
    this.draft = draft;
    this.trash = trash;
    this.selected = selected;
  }
}
let Mails = [new Mail(1, 'Envato Market', 'do-not-reply@market.envato.com', 'Your updated item has been approved', '4:08 PM', '<p>Congratulations! Your update to Azimuth - Angular 2 Admin Template on ThemeForest has been approved. ' + 'You can view your item here: </p>' + '<p><a href="http://themeforest.net/item/azimuth-angular-2-admin-template/19182105" target="blank">http://themeforest.net/item/azimuth-angular-2-admin-template/19182105</a></p>' + '<p>Thanks for your submission!</p>' + '<p>Regards,<br> Envato Market Team</p>', false, [], true, false, false, false, false, false), new Mail(2, 'Josiah Fromdahl', 'Reekie8647@gmail.com', 'Useful tool for those who are involved in SEO', '9:47 AM', '<p>Hi, I want to introduce the Website Reviewer is an incredibly useful tool for those who are involved in SEO and web designing. ' + 'This particular tool will provide you with quick website review and SEO audit of the websites you’ve created so ' + 'you will be able to determine if and where any changes should be made so you can make it as effective ' + 'as possible when it comes to getting visitors and keeping them interested. ' + 'Unlike many similar tools, website reviewer is completely free.</p>', true, ['assets/img/app/snow.jpg', 'assets/img/app/sample.jpg'], true, false, true, false, false, false), new Mail(3, 'Google Cloud Platform', 'CloudPlatform-noreply@google.com', 'Lessons from the field: surviving success with Customer Reliability Engineering', 'Jan 5', '<h4>TRENDING</h4>' + '<p>For those who missed the early adoption of Infrastructure as a Service circa 2007,' + 'this in-depth history stresses why businesses need to begin building around "serverless" architectures.</p>', false, [], false, false, false, false, false, false), new Mail(4, 'Microsoft Visual Studio', 'MVS@e-mail.microsoft.com', 'Welcome to Visual Studio Team Services', '24.12.2016', 'Whether your teams develop in Java, .NET, or in multiple languages, Visual Studio Team Services offers an open, cloud-hosted development hub. Use your favorite IDE, develop in any language, and empower your teams to iterate rapidly', false, [], true, false, false, false, false, false), new Mail(5, 'Draft', '', 'no subject', '4:46 PM', '', false, [], false, false, false, true, false, false), new Mail(6, 'Draft', '', 'Please confirm your email', 'Jan 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum interdum ex, sed aliquet nisl maximus imperdiet. Phasellus pharetra nunc eu dui hendrerit, quis ullamcorper tortor malesuada. Nullam ante mi, auctor eu nunc vitae, gravida molestie arcu.', false, [], false, false, false, true, false, false), new Mail(7, 'MailChimp', 'hello@mailchimp.com', 'Our 2016 annual report', '22.12.2016', '<p>For our 2016 annual report, we let our design team run wild with our most fun facts and proudest moments from the year. From GIFs in email campaigns to physical tons of infrastructure added to dollars raised for charity, it’s our year in numbers.</p>' + '<p>We’re proud of our new features, our customer support tickets solved, and our philanthropy in Atlanta. But we’re even more proud of you and the billions of emails you’ve sent to grow your businesses your way in 2016. Keep up the good work!</p>' + '<p>Cheers to the new year,</p>' + '<p>MailChimp</p>', false, [], false, false, false, false, false, false), new Mail(8, 'Bluehost', 'no-reply@e.bluehost.com', 'Your domain privacy may be at risk', '20.12.2016', '<h4>New ICANN Rules Require Accurate Contact Information</h4>' + '<p>Your domain information may be at risk. However, you can protect your information with domain privacy.</p>' + '<p>Protect yourself with Domain Privacy.</p>' + '<p><small>Only $11.88 per year.**</small></p>' + '<p><a href="http://bluehost.com/" target="blank" class="btn btn-success">Get started</a></p>', false, [], false, false, true, false, false, false), new Mail(9, 'Vimeo', 'vimeo@email.vimeo.com', 'The year\'s best videos and milestones', '20.12.2016', '<h4>Now presenting: 2016\'s best videos</h4>' + '<p>Every day, the world\'s best creators upload their videos to Vimeo. And now, the most inventive, most striking, most all-around mind-blowing videos of 2016 are in. Enjoy, wondrous humans.</p>' + '<p><a href="https://vimeo.com/blog/post/The-Top-Videos-of-2016?utm_source=email&utm_medium=vimeo-decembernewsletter-201612&utm_campaign=30389" target="blank" class="btn btn-info">See the list</a></p>', false, [], false, false, false, false, false, false), new Mail(10, 'Andy Dufresne', 'andy.dufresne@gmail.com', 'The Shawshank Redemption', '18.11.2016', '<p>From Wikipedia, the free encyclopedia</p>' + '<p>The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont. and starring Tim Robbins and Morgan Freeman. Adapted from the Stephen King novella Rita Hayworth and Shawshank Redemption, the film tells the story of Andy Dufresne, ' + 'a banker who is sentenced to life in Shawshank State Penitentiary for the murder of his wife and her lover, despite his claims of innocence. During his time at the prison, he befriends a fellow inmate, Ellis Boyd "Red" Redding, ' + 'and finds himself protected by the guards after the warden begins using him in his money-laundering operation.</p>', false, [], false, true, false, false, false, false), new Mail(11, 'The Envato Team', 'donotreply@envato.com', 'Author Driven Pricing on ThemeForest, CodeCanyon and 3DOcean', '05.09.2016', '<h5>Hey Envato Community Members!</h5>' + '<p>As many of you know, over the past 12 months we have been rolling out Author Driven Pricing (ADP) across a range of different categories on Envato Market. So far this has included GraphicRiver and a handful of categories within ThemeForest.</p>' + '<p>In a few weeks, we\'ll be moving on to the next stage of our Author Driven Pricing project. This will involve introducing ADP to three new areas of Envato Market. These areas are:</p>' + '<ul><li>All remaining ThemeForest categories (including WordPress). </li><li>All categories on CodeCanyon.</li><li>All categories on 3DOcean</li></ul>' + '<p>We strongly recommend reading the full announcement on our forums where you will find:</p>' + '<ul><li>More details about the change.</li><li>How ADP has impacted pricing on previous categories.</li><li>Technical details regarding how to set prices.</li> <li>Why we’ve made the change. </li></ul>' + '<p>You will also be able to ask any questions you might have.</p>' + '<p>We will send you another email to let you know when this feature goes live.</p>' + '<p>All the best,</p>' + '<p>The Envato Team</p>', false, [], false, false, false, false, false, false), new Mail(12, 'Jonathan Cantu', 'JCantu@billingsleyco.com', 'Ability to Customize', '02.09.2016', '<p>Hi,</p><p>Upon purchases, will I have the ability to modify color palette, font, etc. beyond your own design?</p><p>Thanks</p>', false, [], false, false, false, false, false, false), new Mail(13, 'Jennifer Adam', 'jenniferadam2009@gmail.com', 'Guest Post Request - 2016 !!!', '09.05.2016', '<p><b>Hello,</b></p>' + '<p>I\'m Jennifer, constant follower of your blog posts and I\'ve liked most of the blog posts written here. I could realize you\'ve already published some great guest posts from different authors with distinct styles ' + 'and I\'d be privileged if I were provided with an opportunity to delight your blog followers with some informative blog posts.</p>' + '<p>I\'m a content expert and I\'ve contributed some sensible and informative articles to surplus niche-specific blogs. I realize the value of content and its part in helping out numerous people out there in the space. </p>', false, [], false, false, false, false, false, false)];
let mailsPromise = Promise.resolve(Mails);
class MailService {
  getInboxMails() {
    return mailsPromise.then(mails => mails.filter(mail => mail.sent == false && mail.draft == false && mail.trash == false));
  }
  getStarredMails() {
    return mailsPromise.then(mails => mails.filter(mail => mail.starred == true));
  }
  getSentMails() {
    return mailsPromise.then(mails => mails.filter(mail => mail.sent == true));
  }
  getDraftMails() {
    return mailsPromise.then(mails => mails.filter(mail => mail.draft == true));
  }
  getTrashMails() {
    return mailsPromise.then(mails => mails.filter(mail => mail.trash == true));
  }
  getMail(id) {
    return mailsPromise.then(mails => mails.find(mail => mail.id === +id));
  }
  static #_ = this.ɵfac = function MailService_Factory(t) {
    return new (t || MailService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MailService,
    factory: MailService.ɵfac
  });
}


/***/ })

}]);
//# sourceMappingURL=src_app_pages_mail_mail_module_ts.js.map