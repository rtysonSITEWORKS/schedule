"use strict";
(self["webpackChunkazimuth"] = self["webpackChunkazimuth"] || []).push([["src_app_pages_charting_charting_module_ts"],{

/***/ 59701:
/*!***************************************************!*\
  !*** ./src/app/pages/charting/charting.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartingModule": () => (/* binding */ ChartingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var chart_js_dist_Chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/dist/Chart.js */ 37942);
/* harmony import */ var chart_js_dist_Chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js_dist_Chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/directives/directives.module */ 19212);
/* harmony import */ var _ng2_charts_ng2_charts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng2-charts/ng2-charts.component */ 72848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);








const routes = [{
  path: '',
  redirectTo: 'ng2charts',
  pathMatch: 'full'
}, {
  path: 'ng2charts',
  component: _ng2_charts_ng2_charts_component__WEBPACK_IMPORTED_MODULE_2__.Ng2ChartsComponent,
  data: {
    breadcrumb: 'Ng2 Charts'
  }
}];
class ChartingModule {
  static #_ = this.ɵfac = function ChartingModule_Factory(t) {
    return new (t || ChartingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ChartingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.NgChartsModule, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ChartingModule, {
    declarations: [_ng2_charts_ng2_charts_component__WEBPACK_IMPORTED_MODULE_2__.Ng2ChartsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.NgChartsModule, _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 72848:
/*!*******************************************************************!*\
  !*** ./src/app/pages/charting/ng2-charts/ng2-charts.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2ChartsComponent": () => (/* binding */ Ng2ChartsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app.config */ 49670);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../theme/directives/widget/widget.directive */ 3090);




class Ng2ChartsComponent {
  constructor(_appConfig) {
    this._appConfig = _appConfig;
    this.verticalBarChartType = 'bar';
    this.verticalBarChartLegend = true;
    this.verticalBarChartPlugins = [];
    this.verticalBarChartData = {
      datasets: []
    };
    this.horizontalBarChartType = 'bar';
    this.horizontalBarChartLegend = true;
    this.horizontalBarChartPlugins = [];
    this.horizontalBarChartData = {
      datasets: []
    };
    this.lineChartType = 'line';
    this.lineChartLegend = true;
    this.lineChartData = {
      datasets: []
    };
    this.doughnutChartType = 'doughnut';
    this.pieChartType = 'pie';
    this.pieChartData = {
      datasets: []
    };
    this.pieChartLegend = true;
    this.radarChartType = 'radar';
    this.radarChartLegend = true;
    this.radarChartData = {
      datasets: []
    };
    this.polarAreaChartType = 'polarArea';
    this.polarAreaChartLegend = true;
    this.polarAreaChartData = {
      datasets: []
    };
    this.config = this._appConfig.config;
    this.configFn = this._appConfig;
  }
  ngOnInit() {
    //--- Vertical Bar Chart --- 
    this.verticalBarChartData.labels = ['2007', '2008', '2009', '2010', '2011', '2012'];
    this.verticalBarChartData.datasets = [{
      data: [59, 80, 72, 56, 55, 40],
      label: 'Series A',
      borderWidth: 2,
      backgroundColor: this.configFn.rgba(this.config.colors.danger, 0.5),
      borderColor: this.config.colors.danger,
      hoverBackgroundColor: this.config.colors.danger
    }, {
      data: [48, 40, 19, 75, 27, 80],
      label: 'Series B',
      borderWidth: 2,
      backgroundColor: this.configFn.rgba(this.config.colors.info, 0.5),
      borderColor: this.config.colors.info,
      hoverBackgroundColor: this.config.colors.info
    }];
    this.verticalBarChartOptions = {
      responsive: true,
      scales: {
        y: {
          display: true,
          beginAtZero: true,
          ticks: {
            color: this.configFn.rgba(this.config.colors.gray, 0.7),
            stepSize: 10,
            font: {
              size: 14
            }
          },
          grid: {
            display: true,
            color: this.configFn.rgba(this.config.colors.gray, 0.1)
          }
        },
        x: {
          display: true,
          beginAtZero: true,
          ticks: {
            color: this.configFn.rgba(this.config.colors.gray, 0.7),
            stepSize: 10,
            font: {
              size: 14
            }
          },
          grid: {
            display: true,
            color: this.configFn.rgba(this.config.colors.gray, 0.1)
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: this.configFn.rgba(this.config.colors.gray, 0.9)
          }
        },
        tooltip: {
          enabled: true,
          backgroundColor: this.configFn.rgba(this.config.colors.main, 0.6)
        }
      }
    };
    //--- Horizontal  Bar Chart --- 
    this.horizontalBarChartData.labels = ['2007', '2008', '2009', '2010', '2011', '2012'];
    this.horizontalBarChartData.datasets = [{
      data: [59, 80, 72, 56, 55, 40],
      label: 'Series A',
      borderWidth: 2,
      backgroundColor: this.configFn.rgba(this.config.colors.danger, 0.5),
      borderColor: this.config.colors.danger,
      hoverBackgroundColor: this.config.colors.danger
    }, {
      data: [48, 40, 19, 75, 27, 80],
      label: 'Series B',
      borderWidth: 2,
      backgroundColor: this.configFn.rgba(this.config.colors.info, 0.5),
      borderColor: this.config.colors.info,
      hoverBackgroundColor: this.config.colors.info
    }];
    this.horizontalBarChartOptions = {
      responsive: true,
      indexAxis: 'y',
      scales: {
        y: {
          display: true,
          beginAtZero: true,
          ticks: {
            color: this.configFn.rgba(this.config.colors.gray, 0.7),
            stepSize: 10,
            font: {
              size: 14
            }
          },
          grid: {
            display: true,
            color: this.configFn.rgba(this.config.colors.gray, 0.1)
          }
        },
        x: {
          display: true,
          beginAtZero: true,
          ticks: {
            color: this.configFn.rgba(this.config.colors.gray, 0.7),
            stepSize: 10,
            font: {
              size: 14
            }
          },
          grid: {
            display: true,
            color: this.configFn.rgba(this.config.colors.gray, 0.1)
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: this.configFn.rgba(this.config.colors.gray, 0.9)
          }
        },
        tooltip: {
          enabled: true,
          backgroundColor: this.configFn.rgba(this.config.colors.main, 0.6)
        }
      }
    };
    //--- Line Chart ---
    this.lineChartData.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    this.lineChartData.datasets = [{
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
      fill: true,
      tension: 0.5,
      borderWidth: 2,
      backgroundColor: this.configFn.rgba(this.config.colors.success, 0.5),
      borderColor: this.config.colors.success,
      pointBorderColor: this.config.colors.default,
      pointHoverBorderColor: this.config.colors.success,
      pointHoverBackgroundColor: this.config.colors.default,
      hoverBackgroundColor: this.config.colors.success
    }, {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B',
      fill: true,
      tension: 0.5,
      borderWidth: 2,
      backgroundColor: this.configFn.rgba(this.config.colors.warning, 0.5),
      borderColor: this.config.colors.warning,
      pointBorderColor: this.config.colors.default,
      pointHoverBorderColor: this.config.colors.warning,
      pointHoverBackgroundColor: this.config.colors.default,
      hoverBackgroundColor: this.config.colors.warning
    }, {
      data: [18, 48, 77, 9, 100, 27, 40],
      label: 'Series C',
      fill: true,
      tension: 0.5,
      borderWidth: 2,
      backgroundColor: this.configFn.rgba(this.config.colors.primary, 0.5),
      borderColor: this.config.colors.primary,
      pointBorderColor: this.config.colors.default,
      pointHoverBorderColor: this.config.colors.primary,
      pointHoverBackgroundColor: this.config.colors.default,
      hoverBackgroundColor: this.config.colors.primary
    }];
    this.lineChartOptions = {
      scales: {
        y: {
          display: true,
          beginAtZero: true,
          ticks: {
            color: this.configFn.rgba(this.config.colors.gray, 0.7),
            stepSize: 10
          },
          grid: {
            display: true,
            color: this.configFn.rgba(this.config.colors.gray, 0.1)
          }
        },
        x: {
          display: true,
          beginAtZero: true,
          ticks: {
            color: this.configFn.rgba(this.config.colors.gray, 0.7)
          },
          grid: {
            display: true,
            color: this.configFn.rgba(this.config.colors.gray, 0.1)
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: this.configFn.rgba(this.config.colors.gray, 0.9)
          }
        },
        tooltip: {
          enabled: true,
          backgroundColor: this.configFn.rgba(this.config.colors.main, 0.7)
        }
      }
    };
    //--- Doughnut/Pie Chart ---
    this.pieChartData.labels = [['Downloads'], ['Sales'], ['Orders']];
    this.pieChartData.datasets = [{
      data: [350, 420, 130],
      backgroundColor: [this.configFn.rgba(this.config.colors.success, 0.6), this.configFn.rgba(this.config.colors.warning, 0.6), this.configFn.rgba(this.config.colors.danger, 0.6)],
      hoverBackgroundColor: [this.config.colors.success, this.config.colors.warning, this.config.colors.danger],
      borderColor: this.config.colors.grayLight,
      borderWidth: 1,
      hoverBorderWidth: 3
    }];
    this.pieChartOptions = {
      plugins: {
        legend: {
          display: true,
          labels: {
            color: this.configFn.rgba(this.config.colors.gray, 0.9)
          }
        },
        tooltip: {
          enabled: true,
          backgroundColor: this.configFn.rgba(this.config.colors.main, 0.7)
        }
      }
    };
    //--- Radar Chart ---
    this.radarChartData.labels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
    this.radarChartData.datasets = [{
      data: [65, 59, 90, 81, 56, 55, 40],
      label: 'Series A',
      fill: true,
      borderWidth: 2,
      backgroundColor: this.configFn.rgba(this.config.colors.danger, 0.5),
      borderColor: this.config.colors.danger,
      pointBorderColor: this.config.colors.default,
      pointHoverBorderColor: this.config.colors.danger,
      pointHoverBackgroundColor: this.config.colors.default,
      hoverBackgroundColor: this.config.colors.danger
    }, {
      data: [28, 48, 40, 19, 96, 27, 100],
      label: 'Series B',
      fill: true,
      borderWidth: 2,
      backgroundColor: this.configFn.rgba(this.config.colors.primary, 0.5),
      borderColor: this.config.colors.primary,
      pointBorderColor: this.config.colors.default,
      pointHoverBorderColor: this.config.colors.primary,
      pointHoverBackgroundColor: this.config.colors.default,
      hoverBackgroundColor: this.config.colors.primary
    }];
    this.radarChartOptions = {
      scales: {
        r: {
          angleLines: {
            display: true,
            lineWidth: 2,
            color: this.configFn.rgba(this.config.colors.gray, 0.3)
          },
          pointLabels: {
            color: this.configFn.rgba(this.config.colors.gray, 0.7),
            backdropColor: this.configFn.rgba(this.config.colors.gray, 0.1)
          }
        },
        y: {
          display: false,
          beginAtZero: true,
          ticks: {
            color: this.configFn.rgba(this.config.colors.gray, 0.7),
            stepSize: 10
          }
        },
        x: {
          display: false,
          beginAtZero: true,
          ticks: {
            color: this.configFn.rgba(this.config.colors.gray, 0.7)
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: this.configFn.rgba(this.config.colors.gray, 0.9)
          }
        },
        tooltip: {
          enabled: true,
          backgroundColor: this.configFn.rgba(this.config.colors.main, 0.7)
        }
      }
    };
    //--- Polar Area Chart ---
    this.polarAreaChartData.labels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    this.polarAreaChartData.datasets = [{
      data: [300, 500, 100, 240, 130],
      backgroundColor: [this.configFn.rgba(this.config.colors.success, 0.6), this.configFn.rgba(this.config.colors.warning, 0.6), this.configFn.rgba(this.config.colors.danger, 0.6), this.configFn.rgba(this.config.colors.primary, 0.6), this.configFn.rgba(this.config.colors.info, 0.6)],
      hoverBackgroundColor: [this.config.colors.success, this.config.colors.warning, this.config.colors.danger, this.config.colors.primary, this.config.colors.info],
      borderColor: this.config.colors.default,
      borderWidth: 1,
      hoverBorderWidth: 3
    }];
    this.polarAreaChartOptions = {
      scales: {
        y: {
          display: false,
          beginAtZero: true,
          ticks: {
            color: this.config.colors.main,
            stepSize: 10
          },
          grid: {
            display: true,
            color: this.configFn.rgba(this.config.colors.gray, 0.1)
          }
        },
        x: {
          display: false,
          beginAtZero: true,
          ticks: {
            color: this.config.colors.main
          },
          grid: {
            display: true,
            color: this.configFn.rgba(this.config.colors.gray, 0.1)
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: this.configFn.rgba(this.config.colors.gray, 0.9)
          }
        },
        tooltip: {
          enabled: true,
          backgroundColor: this.configFn.rgba(this.config.colors.main, 0.7)
        }
      }
    };
  }
  chartClicked(e) {
    //console.log(e);
  }
  chartHovered(e) {
    //console.log(e);
  }
  static #_ = this.ɵfac = function Ng2ChartsComponent_Factory(t) {
    return new (t || Ng2ChartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: Ng2ChartsComponent,
    selectors: [["az-ng2-charts"]],
    decls: 102,
    vars: 30,
    consts: [[1, "row"], [1, "col-xl-6", "col-lg-6", "col-12", "bottom-30"], ["widget", "", 1, "card"], [1, "card-header"], [1, "widget-controls"], ["data-widgster", "expand", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-down"], ["data-widgster", "collapse", "href", "#", 1, "transition"], [1, "fa", "fa-chevron-up"], ["data-widgster", "close", "href", "#", 1, "transition"], [1, "fa", "fa-times"], [1, "card-body", "widget-body"], ["baseChart", "", 3, "data", "options", "plugins", "legend", "type", "chartHover", "chartClick"], [1, "col-xl-12", "col-lg-12", "col-12", "bottom-30"], ["baseChart", "", 3, "type", "data", "legend", "options", "chartHover", "chartClick"], ["baseChart", "", 3, "type", "data", "options", "legend", "chartHover", "chartClick"], ["baseChart", "", 3, "data", "options", "legend", "type", "chartHover", "chartClick"], ["baseChart", "", 3, "data", "legend", "options", "type", "chartHover", "chartClick"]],
    template: function Ng2ChartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Vertical Bar Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11)(14, "canvas", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function Ng2ChartsComponent_Template_canvas_chartHover_14_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function Ng2ChartsComponent_Template_canvas_chartClick_14_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Horizontal Bar Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 4)(21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11)(28, "canvas", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function Ng2ChartsComponent_Template_canvas_chartHover_28_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function Ng2ChartsComponent_Template_canvas_chartClick_28_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 0)(30, "div", 13)(31, "div", 2)(32, "div", 3)(33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Line Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 4)(36, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 11)(43, "canvas", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function Ng2ChartsComponent_Template_canvas_chartHover_43_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function Ng2ChartsComponent_Template_canvas_chartClick_43_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 0)(45, "div", 1)(46, "div", 2)(47, "div", 3)(48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Doughnut Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 4)(51, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 11)(58, "canvas", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function Ng2ChartsComponent_Template_canvas_chartHover_58_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function Ng2ChartsComponent_Template_canvas_chartClick_58_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 1)(60, "div", 2)(61, "div", 3)(62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Pie Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 4)(65, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 11)(72, "canvas", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function Ng2ChartsComponent_Template_canvas_chartHover_72_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function Ng2ChartsComponent_Template_canvas_chartClick_72_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 0)(74, "div", 1)(75, "div", 2)(76, "div", 3)(77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Radar Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 4)(80, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 11)(87, "canvas", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function Ng2ChartsComponent_Template_canvas_chartHover_87_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function Ng2ChartsComponent_Template_canvas_chartClick_87_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 1)(89, "div", 2)(90, "div", 3)(91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Polar Area Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 4)(94, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 11)(101, "canvas", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function Ng2ChartsComponent_Template_canvas_chartHover_101_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function Ng2ChartsComponent_Template_canvas_chartClick_101_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.verticalBarChartData)("options", ctx.verticalBarChartOptions)("plugins", ctx.verticalBarChartPlugins)("legend", ctx.verticalBarChartLegend)("type", ctx.verticalBarChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.horizontalBarChartData)("options", ctx.horizontalBarChartOptions)("plugins", ctx.horizontalBarChartPlugins)("legend", ctx.horizontalBarChartLegend)("type", ctx.horizontalBarChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.lineChartType)("data", ctx.lineChartData)("legend", ctx.lineChartLegend)("options", ctx.lineChartOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.doughnutChartType)("data", ctx.pieChartData)("options", ctx.pieChartOptions)("legend", ctx.pieChartLegend);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.pieChartType)("data", ctx.pieChartData)("options", ctx.pieChartOptions)("legend", ctx.pieChartLegend);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.radarChartData)("options", ctx.radarChartOptions)("legend", ctx.radarChartLegend)("type", ctx.radarChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.polarAreaChartData)("legend", ctx.polarAreaChartLegend)("options", ctx.polarAreaChartOptions)("type", ctx.polarAreaChartType);
      }
    },
    dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__.BaseChartDirective, _theme_directives_widget_widget_directive__WEBPACK_IMPORTED_MODULE_1__.Widget],
    encapsulation: 2
  });
}


/***/ })

}]);
//# sourceMappingURL=src_app_pages_charting_charting_module_ts.js.map