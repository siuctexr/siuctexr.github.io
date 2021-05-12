(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/bijay/CTE_Projects/ng-three-template/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1AWo":
    /*!******************************!*\
      !*** ./src/app/safe-html.ts ***!
      \******************************/

    /*! exports provided: SafeHtmlPipe */

    /***/
    function AWo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function () {
        return SafeHtmlPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      var SafeHtmlPipe = /*#__PURE__*/function () {
        function SafeHtmlPipe(sanitizer) {
          _classCallCheck(this, SafeHtmlPipe);

          this.sanitizer = sanitizer;
        }

        _createClass(SafeHtmlPipe, [{
          key: "transform",
          value: function transform(value, args) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(value);
          }
        }]);

        return SafeHtmlPipe;
      }();

      SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
        return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
      };

      SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "safeHtml",
        type: SafeHtmlPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'safeHtml'
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "1W4x":
    /*!************************************************!*\
      !*** ./src/app/register/register.component.ts ***!
      \************************************************/

    /*! exports provided: MyErrorStateMatcher, RegisterComponent */

    /***/
    function W4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
        return MyErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _app_helpers_mustMatch_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/helpers/mustMatch.validator */
      "hU2h");
      /* harmony import */


      var _app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/services/user.service */
      "qfBg");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      function RegisterComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error);
        }
      }

      function RegisterComponent_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_mat_error_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_mat_error_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Min 6 characters are required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_mat_error_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_mat_error_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Min 6 characters are required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_mat_error_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords must match ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }
      /** Error when invalid control is dirty, touched, or submitted. */


      var MyErrorStateMatcher = /*#__PURE__*/function () {
        function MyErrorStateMatcher() {
          _classCallCheck(this, MyErrorStateMatcher);
        }

        _createClass(MyErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            var isSubmitted = form && form.submitted;
            return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
          }
        }]);

        return MyErrorStateMatcher;
      }();

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(formBuilder, userService, route, router) {
          _classCallCheck(this, RegisterComponent);

          this.formBuilder = formBuilder;
          this.userService = userService;
          this.route = route;
          this.router = router;
          this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
          this.submitted = false;
          this.error = '';
          this.loading = false;
          this.matcher = new MyErrorStateMatcher();
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registerForm = this.formBuilder.group({
              firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
              confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
            }, {
              validator: Object(_app_helpers_mustMatch_validator__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('password', 'confirmPassword')
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.registerForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            console.log(this.registerForm.value);
            this.submitted = true; // stop here if form is invalid

            if (this.registerForm.invalid) {
              return;
            }

            this.userService.addUser(this.registerForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe({
              next: function next() {
                alert('User successfully registered. You can now login');

                _this.router.navigate(['./login']);
              },
              error: function error(_error) {
                _this.error = _error;
                _this.loading = false;
              }
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])],
        decls: 37,
        vars: 11,
        consts: [[1, "container"], [1, "example-form", 3, "formGroup", "ngSubmit"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], [1, "row"], [1, "col-6"], [1, "example-full-width"], ["matInput", "", "formControlName", "firstName"], ["matInput", "", "formControlName", "lastName"], ["type", "email", "matInput", "", "formControlName", "username", "placeholder", "Ex. pat@example.com", 3, "errorStateMatcher"], [4, "ngIf"], ["matInput", "", "formControlName", "password"], ["matInput", "", "formControlName", "confirmPassword"], ["mat-flat-button", "", "color", "warn", "type", "submit", 3, "disabled"], [1, "alert", "alert-danger", "mt-3", "mb-0"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegisterComponent_div_4_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegisterComponent_mat_error_20_Template, 2, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegisterComponent_mat_error_21_Template, 4, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegisterComponent_mat_error_26_Template, 2, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegisterComponent_mat_error_27_Template, 2, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RegisterComponent_mat_error_32_Template, 2, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RegisterComponent_mat_error_33_Template, 2, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, RegisterComponent_mat_error_34_Template, 2, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.controls["username"].hasError("email") && !ctx.f.username.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.controls["username"].hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.password.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.password.hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.confirmPassword.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.confirmPassword.hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.confirmPassword.hasError("mustMatch"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]],
        styles: [".example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss'],
            providers: [_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "4QRZ":
    /*!********************************************!*\
      !*** ./src/app/engine/engine.component.ts ***!
      \********************************************/

    /*! exports provided: EngineComponent */

    /***/
    function QRZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EngineComponent", function () {
        return EngineComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _engine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./engine.service */
      "eW6i");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");

      var _c0 = ["rendererCanvas"];

      var EngineComponent = /*#__PURE__*/function () {
        function EngineComponent(engServ) {
          _classCallCheck(this, EngineComponent);

          this.engServ = engServ;
        }

        _createClass(EngineComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.engServ.createScene(this.rendererCanvas);
            this.engServ.animate();
          }
        }, {
          key: "resetMap",
          value: function resetMap() {
            this.engServ.controls.reset(); // this.engServ.camera.position.x = this.engServ.camera.position.x - 1000;
            // this.engServ.camera.position.y = this.engServ.camera.position.y - 1000;
            // this.engServ.camera.position.z = this.engServ.camera.position.z - 10000;
            // this.engServ.controls.target = new THREE.Vector3(-52387.88408561413,.5665546803992394e-12,21794.446764586413);

            this.engServ.camera.position.x = 30000;
            this.engServ.camera.position.y = 90000;
            this.engServ.camera.position.z = 460000;
            this.engServ.controls.update();
          }
        }]);

        return EngineComponent;
      }();

      EngineComponent.ɵfac = function EngineComponent_Factory(t) {
        return new (t || EngineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_engine_service__WEBPACK_IMPORTED_MODULE_1__["EngineService"]));
      };

      EngineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EngineComponent,
        selectors: [["app-engine"]],
        viewQuery: function EngineComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rendererCanvas = _t.first);
          }
        },
        decls: 14,
        vars: 0,
        consts: [[1, "engine-wrapper"], ["id", "renderCanvas"], ["rendererCanvas", ""], [2, "display", "none"], ["id", "number", "width", "64", "height", "64"], ["id", "number_0", "width", "64", "height", "64"], ["id", "number_1", "width", "64", "height", "64"], ["id", "number_2", "width", "64", "height", "64"], ["id", "number_3", "width", "64", "height", "64"], ["id", "number_4", "width", "64", "height", "64"], ["mat-stroked-button", "", 1, "reset", 3, "click"]],
        template: function EngineComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "canvas", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "canvas", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "canvas", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "canvas", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "canvas", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EngineComponent_Template_button_click_10_listener() {
              return ctx.resetMap();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "repeat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Reset Map\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
        styles: [".reset[_ngcontent-%COMP%] {\n    z-index: 100;\n    position: absolute;\n    top: 8%;\n    left: 50%\n  }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EngineComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-engine',
            templateUrl: './engine.component.html'
          }]
        }], function () {
          return [{
            type: _engine_service__WEBPACK_IMPORTED_MODULE_1__["EngineService"]
          }];
        }, {
          rendererCanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['rendererCanvas', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "7jBp":
    /*!**********************************************************!*\
      !*** ./src/app/activity-list/activity-list.component.ts ***!
      \**********************************************************/

    /*! exports provided: ActivityListComponent */

    /***/
    function jBp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityListComponent", function () {
        return ActivityListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_activities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/activities.service */
      "Tlm4");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

      function ActivityListComponent_mat_list_option_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityListComponent_mat_list_option_5_Template_mat_list_option_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var act_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.clickActivity(act_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "folder_shared");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var act_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", act_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", act_r2.title, "...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", act_r2.subTitle, "...");
        }
      }

      var ActivityListComponent = /*#__PURE__*/function () {
        function ActivityListComponent(activitiesService, route, router) {
          _classCallCheck(this, ActivityListComponent);

          this.activitiesService = activitiesService;
          this.route = route;
          this.router = router;
          this.activities = [];
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              gtag('event', 'page_view', {
                page_title: 'Acivity List',
                page_location: event.urlAfterRedirects,
                page_path: '/activitylist',
                send_to: 'G-89L1L09TTY'
              });
            }
          });
        }

        _createClass(ActivityListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.activities = this.activitiesService.getAllActivitites(); // this.activitiesService.getAllActivitites();
          }
        }, {
          key: "clickActivity",
          value: function clickActivity(act) {
            this.router.navigate(['/activities/', act.id]);
          }
        }]);

        return ActivityListComponent;
      }();

      ActivityListComponent.ɵfac = function ActivityListComponent_Factory(t) {
        return new (t || ActivityListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_activities_service__WEBPACK_IMPORTED_MODULE_2__["ActivitiesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      ActivityListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ActivityListComponent,
        selectors: [["app-activity-list"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_activities_service__WEBPACK_IMPORTED_MODULE_2__["ActivitiesService"]])],
        decls: 6,
        vars: 2,
        consts: [[1, "container"], [3, "multiple"], ["activitiesBox", ""], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["mat-list-icon", ""], ["mat-line", ""]],
        template: function ActivityListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Exercises");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-selection-list", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ActivityListComponent_mat_list_option_5_Template, 7, 3, "mat-list-option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activities);
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatLine"]],
        styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  overflow: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FjdGl2aXR5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6ImFjdGl2aXR5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5e1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-activity-list',
            templateUrl: './activity-list.component.html',
            styleUrls: ['./activity-list.component.scss'],
            providers: [_services_activities_service__WEBPACK_IMPORTED_MODULE_2__["ActivitiesService"]]
          }]
        }], function () {
          return [{
            type: _services_activities_service__WEBPACK_IMPORTED_MODULE_2__["ActivitiesService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 29,
        vars: 0,
        consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Credits");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Concept by");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dr. Maria Franca");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dr. Maria Franca");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Video Credits");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Chloe Grover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Prativa Tripathee");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Web App created at SIU CTE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Dr. Kayeleigh Sharp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Bijay Raj Paudel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Upesh Nepal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-dialog-actions", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "8adc":
    /*!**********************************************************!*\
      !*** ./src/app/activity-card/activity-card.component.ts ***!
      \**********************************************************/

    /*! exports provided: ActivityCardComponent */

    /***/
    function adc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityCardComponent", function () {
        return ActivityCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_activities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/activities.service */
      "Tlm4");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _recorder_recorder_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../recorder/recorder.component */
      "gVS+");
      /* harmony import */


      var _safe_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../safe-html */
      "1AWo");

      function ActivityCardComponent_mat_card_5_img_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.activity.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r1.activity.title);
        }
      }

      function ActivityCardComponent_mat_card_5_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safeHtml");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.activity.videoURL), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      }

      function ActivityCardComponent_mat_card_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ActivityCardComponent_mat_card_5_img_7_Template, 1, 2, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ActivityCardComponent_mat_card_5_div_8_Template, 3, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-recorder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityCardComponent_mat_card_5_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.previousActivity();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityCardComponent_mat_card_5_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.nextActivity();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.activity.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.activity.subTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.activity.videoURL);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activity.videoURL);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.activity.details, " ");
        }
      }

      var ActivityCardComponent = /*#__PURE__*/function () {
        function ActivityCardComponent(activitiesService, route, router, sanitizer) {
          _classCallCheck(this, ActivityCardComponent);

          this.activitiesService = activitiesService;
          this.route = route;
          this.router = router;
          this.sanitizer = sanitizer;
        }

        _createClass(ActivityCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.route.params.subscribe(function (routeParams) {
              _this2.selectedId = Number(routeParams.id);
              _this2.maxItems = _this2.activitiesService.getActivityCount();
              _this2.activity = _this2.activitiesService.getActivityById(_this2.selectedId);
              gtag('event', 'page_view', {
                page_title: 'Acivity/' + _this2.selectedId,
                page_path: '/activitylist/' + _this2.selectedId,
                send_to: 'G-89L1L09TTY'
              });
            });
          }
        }, {
          key: "previousActivity",
          value: function previousActivity() {
            if (this.selectedId > 1) {
              this.router.navigate(['/activities', this.selectedId - 1]);
            }
          }
        }, {
          key: "nextActivity",
          value: function nextActivity() {
            if (this.selectedId < this.maxItems) {
              this.router.navigate(['/activities', this.selectedId + 1]);
            }
          }
        }, {
          key: "backToList",
          value: function backToList() {
            this.router.navigate(['/activities']);
          }
        }, {
          key: "safeUrl",
          value: function safeUrl(url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
          }
        }]);

        return ActivityCardComponent;
      }();

      ActivityCardComponent.ɵfac = function ActivityCardComponent_Factory(t) {
        return new (t || ActivityCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_activities_service__WEBPACK_IMPORTED_MODULE_1__["ActivitiesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]));
      };

      ActivityCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ActivityCardComponent,
        selectors: [["app-activity-card"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_activities_service__WEBPACK_IMPORTED_MODULE_1__["ActivitiesService"]])],
        decls: 10,
        vars: 3,
        consts: [[1, "container"], [1, "text-center"], [1, "center", 2, "align-items", "center", "justify-content", "center", "display", "flex", "flex-direction", "column"], ["class", "example-card", 4, "ngIf"], ["mat-button", "", "color", "accent", 3, "click"], [1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", 3, "src", "alt", 4, "ngIf"], ["class", "video-responsive", 4, "ngIf"], [1, "timer1"], ["mat-button", "", 2, "float", "left", 3, "click"], ["mat-button", "", 2, "float", "right", 3, "click"], ["mat-card-image", "", 3, "src", "alt"], [1, "video-responsive"], ["width", "510", "height", "420", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"]],
        template: function ActivityCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ActivityCardComponent_mat_card_5_Template, 21, 5, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityCardComponent_Template_button_click_6_listener() {
              return ctx.backToList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Back to list ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Practise ", ctx.selectedId, " of ", ctx.maxItems, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activity);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _recorder_recorder_component__WEBPACK_IMPORTED_MODULE_8__["RecorderComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"]],
        pipes: [_safe_html__WEBPACK_IMPORTED_MODULE_9__["SafeHtmlPipe"]],
        styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://p1.hiclipart.com/preview/973/121/301/dots-v-1-4-gray-condenser-microphone-icon-png-clipart.jpg\");\n  background-size: cover;\n}\n\n.video-responsive[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding-bottom: 56.25%;\n  position: relative;\n  height: 0;\n}\n\n.video-responsive[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FjdGl2aXR5LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsK0hBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQURKOztBQUdBO0VBQ0ksT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQUoiLCJmaWxlIjoiYWN0aXZpdHktY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3AxLmhpY2xpcGFydC5jb20vcHJldmlldy85NzMvMTIxLzMwMS9kb3RzLXYtMS00LWdyYXktY29uZGVuc2VyLW1pY3JvcGhvbmUtaWNvbi1wbmctY2xpcGFydC5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cblxuXG4gIC52aWRlby1yZXNwb25zaXZle1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICBwYWRkaW5nLWJvdHRvbTo1Ni4yNSU7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgaGVpZ2h0OjA7XG59XG4udmlkZW8tcmVzcG9uc2l2ZSBpZnJhbWV7XG4gICAgbGVmdDowO1xuICAgIHRvcDowO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-activity-card',
            templateUrl: './activity-card.component.html',
            styleUrls: ['./activity-card.component.scss'],
            providers: [_services_activities_service__WEBPACK_IMPORTED_MODULE_1__["ActivitiesService"]]
          }]
        }], function () {
          return [{
            type: _services_activities_service__WEBPACK_IMPORTED_MODULE_1__["ActivitiesService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9YMx":
    /*!*********************************************************************!*\
      !*** ./src/app/ui/ui-infobar-bottom/ui-infobar-bottom.component.ts ***!
      \*********************************************************************/

    /*! exports provided: UiInfobarBottomComponent */

    /***/
    function YMx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiInfobarBottomComponent", function () {
        return UiInfobarBottomComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var UiInfobarBottomComponent = /*#__PURE__*/function () {
        function UiInfobarBottomComponent() {
          _classCallCheck(this, UiInfobarBottomComponent);
        }

        _createClass(UiInfobarBottomComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UiInfobarBottomComponent;
      }();

      UiInfobarBottomComponent.ɵfac = function UiInfobarBottomComponent_Factory(t) {
        return new (t || UiInfobarBottomComponent)();
      };

      UiInfobarBottomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UiInfobarBottomComponent,
        selectors: [["app-ui-infobar-bottom"]],
        decls: 2,
        vars: 0,
        template: function UiInfobarBottomComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ui-infobar-bottom works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiInfobarBottomComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ui-infobar-bottom',
            templateUrl: './ui-infobar-bottom.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _side_buttons_side_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../side-buttons/side-buttons.component */
      "tDHM");
      /* harmony import */


      var _engine_engine_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../engine/engine.component */
      "4QRZ");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 2,
        vars: 0,
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-side-buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-engine");
          }
        },
        directives: [_side_buttons_side_buttons_component__WEBPACK_IMPORTED_MODULE_1__["SideButtonsComponent"], _engine_engine_component__WEBPACK_IMPORTED_MODULE_2__["EngineComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false,
        version: __webpack_require__(
        /*! ../../package.json */
        "kiQV").version,
        apiBaseUrl: 'http://localhost:3000',
        apiUrl: 'http://localhost:3001/api/v1'
      };
      /***/
    },

    /***/
    "JQrR":
    /*!*********************************************!*\
      !*** ./src/app/helpers/http.interceptor.ts ***!
      \*********************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function JQrR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/services/authentication.service */
      "ej43");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(authenticationService) {
          _classCallCheck(this, ErrorInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this3 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              if ([401, 403].includes(err.status) && _this3.authenticationService.userValue) {
                // auto logout if 401 or 403 response returned from api
                _this3.authenticationService.logout();
              }

              var error = err && err.error && err.error.message || err.statusText;
              console.error(err);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "NuIt":
    /*!*******************************************!*\
      !*** ./src/app/helpers/app.initilizer.ts ***!
      \*******************************************/

    /*! exports provided: appInitializer */

    /***/
    function NuIt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "appInitializer", function () {
        return appInitializer;
      });

      function appInitializer(authenticationService) {
        return function () {
          return new Promise(function (resolve) {
            // attempt to refresh token on app start up to auto authenticate
            authenticationService.refreshToken().subscribe().add(resolve);
          });
        };
      }
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menubar/menubar.component */
      "oQVO");

      var AppComponent = function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            gtag('config', 'G-89L1L09TTY', {
              'page_path': event.urlAfterRedirects
            });
          }
        });
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        consts: [[1, "main-content"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menubar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_2__["MenubarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".main-content[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Tlm4":
    /*!************************************************!*\
      !*** ./src/app/services/activities.service.ts ***!
      \************************************************/

    /*! exports provided: ActivitiesService */

    /***/
    function Tlm4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivitiesService", function () {
        return ActivitiesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _activity_list_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./activity-list.json */
      "wKGj");

      var _activity_list_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ./activity-list.json */
      "wKGj", 1);

      var ActivitiesService = /*#__PURE__*/function () {
        function ActivitiesService() {
          _classCallCheck(this, ActivitiesService);
        }

        _createClass(ActivitiesService, [{
          key: "getAllActivitites",
          value: function getAllActivitites() {
            var activities = _activity_list_json__WEBPACK_IMPORTED_MODULE_1__;
            console.log(activities);
            return activities;
          }
        }, {
          key: "getActivityById",
          value: function getActivityById(id) {
            console.log('looking for ' + id);
            var activities = _activity_list_json__WEBPACK_IMPORTED_MODULE_1__;
            var selectedElement;
            activities.forEach(function (element) {
              if (element.id === id) {
                selectedElement = element;
              }
            });
            console.log("Found..");
            console.log(selectedElement);
            return selectedElement;
          }
        }, {
          key: "getActivityCount",
          value: function getActivityCount() {
            return _activity_list_json__WEBPACK_IMPORTED_MODULE_1__.length;
          }
        }]);

        return ActivitiesService;
      }();

      ActivitiesService.ɵfac = function ActivitiesService_Factory(t) {
        return new (t || ActivitiesService)();
      };

      ActivitiesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ActivitiesService,
        factory: ActivitiesService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivitiesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "U+fn":
    /*!***************************************!*\
      !*** ./src/app/helpers/auth-guard.ts ***!
      \***************************************/

    /*! exports provided: AuthGuard */

    /***/
    function UFn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/services/authentication.service */
      "ej43");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authenticationService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var user = this.authenticationService.userValue;

            if (user) {
              // logged in so return true
              return true;
            } else {
              // not logged in so redirect to login page with the return url
              this.router.navigate(['/login'], {
                queryParams: {
                  returnUrl: state.url
                }
              });
              return false;
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _engine_engine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./engine/engine.component */
      "4QRZ");
      /* harmony import */


      var _ui_ui_infobar_bottom_ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ui/ui-infobar-bottom/ui-infobar-bottom.component */
      "9YMx");
      /* harmony import */


      var _ui_ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ui/ui-infobar-top/ui-infobar-top.component */
      "k7SL");
      /* harmony import */


      var _ui_ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ui/ui-sidebar-left/ui-sidebar-left.component */
      "leit");
      /* harmony import */


      var _ui_ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ui/ui-sidebar-right/ui-sidebar-right.component */
      "kHhy");
      /* harmony import */


      var _ui_ui_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./ui/ui.component */
      "lxnM");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./menubar/menubar.component */
      "oQVO");
      /* harmony import */


      var _side_buttons_side_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./side-buttons/side-buttons.component */
      "tDHM");
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./material.module */
      "vvyD");
      /* harmony import */


      var _activity_card_activity_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./activity-card/activity-card.component */
      "8adc");
      /* harmony import */


      var _activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./activity-list/activity-list.component */
      "7jBp");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _recorder_recorder_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./recorder/recorder.component */
      "gVS+");
      /* harmony import */


      var _services_audio_recording_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./services/audio-recording.service */
      "vaZA");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _count_down_timer_count_down_timer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./count-down-timer/count-down-timer.component */
      "w/st");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _helpers_app_initilizer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./helpers/app.initilizer */
      "NuIt");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./services/authentication.service */
      "ej43");
      /* harmony import */


      var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./helpers/jwt.interceptor */
      "eMGG");
      /* harmony import */


      var _helpers_http_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./helpers/http.interceptor */
      "JQrR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./services/google-analytics.service */
      "fHJZ");
      /* harmony import */


      var _safe_html__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./safe-html */
      "1AWo");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_audio_recording_service__WEBPACK_IMPORTED_MODULE_18__["AudioRecordingService"], _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_28__["GoogleAnalyticsService"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
          useFactory: _helpers_app_initilizer__WEBPACK_IMPORTED_MODULE_22__["appInitializer"],
          multi: true,
          deps: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_23__["AuthenticationService"]]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"],
          useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_24__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"],
          useClass: _helpers_http_interceptor__WEBPACK_IMPORTED_MODULE_25__["ErrorInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _engine_engine_component__WEBPACK_IMPORTED_MODULE_3__["EngineComponent"], _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_10__["MenubarComponent"], _ui_ui_component__WEBPACK_IMPORTED_MODULE_8__["UiComponent"], _ui_ui_infobar_bottom_ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_4__["UiInfobarBottomComponent"], _ui_ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_5__["UiInfobarTopComponent"], _ui_ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_6__["UiSidebarLeftComponent"], _ui_ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_7__["UiSidebarRightComponent"], _side_buttons_side_buttons_component__WEBPACK_IMPORTED_MODULE_11__["SideButtonsComponent"], _activity_card_activity_card_component__WEBPACK_IMPORTED_MODULE_13__["ActivityCardComponent"], _activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_14__["ActivityListComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"], _recorder_recorder_component__WEBPACK_IMPORTED_MODULE_17__["RecorderComponent"], _count_down_timer_count_down_timer_component__WEBPACK_IMPORTED_MODULE_20__["CountDownTimerComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_27__["RegisterComponent"], _safe_html__WEBPACK_IMPORTED_MODULE_29__["SafeHtmlPipe"], _about_about_component__WEBPACK_IMPORTED_MODULE_30__["AboutComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _engine_engine_component__WEBPACK_IMPORTED_MODULE_3__["EngineComponent"], _menubar_menubar_component__WEBPACK_IMPORTED_MODULE_10__["MenubarComponent"], _ui_ui_component__WEBPACK_IMPORTED_MODULE_8__["UiComponent"], _ui_ui_infobar_bottom_ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_4__["UiInfobarBottomComponent"], _ui_ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_5__["UiInfobarTopComponent"], _ui_ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_6__["UiSidebarLeftComponent"], _ui_ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_7__["UiSidebarRightComponent"], _side_buttons_side_buttons_component__WEBPACK_IMPORTED_MODULE_11__["SideButtonsComponent"], _activity_card_activity_card_component__WEBPACK_IMPORTED_MODULE_13__["ActivityCardComponent"], _activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_14__["ActivityListComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"], _recorder_recorder_component__WEBPACK_IMPORTED_MODULE_17__["RecorderComponent"], _count_down_timer_count_down_timer_component__WEBPACK_IMPORTED_MODULE_20__["CountDownTimerComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_27__["RegisterComponent"], _safe_html__WEBPACK_IMPORTED_MODULE_29__["SafeHtmlPipe"], _about_about_component__WEBPACK_IMPORTED_MODULE_30__["AboutComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"]],
            providers: [_services_audio_recording_service__WEBPACK_IMPORTED_MODULE_18__["AudioRecordingService"], _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_28__["GoogleAnalyticsService"], {
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
              useFactory: _helpers_app_initilizer__WEBPACK_IMPORTED_MODULE_22__["appInitializer"],
              multi: true,
              deps: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_23__["AuthenticationService"]]
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"],
              useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_24__["JwtInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"],
              useClass: _helpers_http_interceptor__WEBPACK_IMPORTED_MODULE_25__["ErrorInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "dyDF":
    /*!**********************************************!*\
      !*** ./src/app/recorder/recorder.service.ts ***!
      \**********************************************/

    /*! exports provided: RecorderService */

    /***/
    function dyDF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecorderService", function () {
        return RecorderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json',
          Authorization: 'my-auth-token'
        })
      };

      var RecorderService = /*#__PURE__*/function () {
        function RecorderService(http) {
          _classCallCheck(this, RecorderService);

          this.http = http;
          this.recordurl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl, "/update"); // URL to web api
        } //////// Save methods //////////

        /** POST: add a new recording to the database */


        _createClass(RecorderService, [{
          key: "sendRecord",
          value: function sendRecord(body) {
            console.log('Got ');
            console.log(body);
            var formData = new FormData();
            formData.append('file', body.file.blob, body.filename);
            return this.http.post(this.recordurl, formData);
          }
        }]);

        return RecorderService;
      }();

      RecorderService.ɵfac = function RecorderService_Factory(t) {
        return new (t || RecorderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      RecorderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RecorderService,
        factory: RecorderService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecorderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "eMGG":
    /*!********************************************!*\
      !*** ./src/app/helpers/jwt.interceptor.ts ***!
      \********************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function eMGG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @environments/environment */
      "AytR");
      /* harmony import */


      var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/services/authentication.service */
      "ej43");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(authenticationService) {
          _classCallCheck(this, JwtInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // add auth header with jwt if user is logged in and request is to the api url
            var user = this.authenticationService.userValue;
            var isLoggedIn = user && user.jwtToken;
            var isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl);

            if (isLoggedIn && isApiUrl) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(user.jwtToken)
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "eW6i":
    /*!******************************************!*\
      !*** ./src/app/engine/engine.service.ts ***!
      \******************************************/

    /*! exports provided: EngineService */

    /***/
    function eW6i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EngineService", function () {
        return EngineService;
      });
      /* harmony import */


      var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! three */
      "Womt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! three/examples/jsm/loaders/GLTFLoader */
      "NK00");
      /* harmony import */


      var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! three/examples/jsm/controls/OrbitControls */
      "RyHr");

      var EngineService = /*#__PURE__*/function () {
        function EngineService(ngZone) {
          _classCallCheck(this, EngineService);

          this.ngZone = ngZone;
          this.frameId = null;
        }

        _createClass(EngineService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.frameId != null) {
              cancelAnimationFrame(this.frameId);
            }
          }
        }, {
          key: "add_styles_to_annotations",
          value: function add_styles_to_annotations() {
            var i = 0;

            for (i = 0; i < 5; i++) {
              var canvas2 = document.getElementById('number_' + i.toString());
              var ctx = canvas2.getContext('2d');
              var x = 32;
              var y = 32;
              var radius = 30;
              var startAngle = 0;
              var endAngle = Math.PI * 2;
              ctx.fillStyle = 'rgb(0, 0, 0)';
              ctx.beginPath();
              ctx.arc(x, y, radius, startAngle, endAngle);
              ctx.fill();
              ctx.strokeStyle = 'rgb(255, 255, 255)';
              ctx.lineWidth = 3;
              ctx.beginPath();
              ctx.arc(x, y, radius, startAngle, endAngle);
              ctx.stroke();
              ctx.fillStyle = 'rgb(255, 255, 255)';
              ctx.font = '32px sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText((i + 1).toString(), x, y);
              this.annotationArray.push(document.querySelector('#annotation_' + i.toString()));
            }

            console.log(this.annotationArray);
          }
        }, {
          key: "createScene",
          value: function createScene(canvas) {
            var _this4 = this;

            // The first step is to get the reference of the canvas element from our HTML document
            this.canvas = canvas.nativeElement;
            this.annotationArray = []; // this.add_styles_to_annotations();

            this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({
              canvas: this.canvas,
              alpha: true,
              antialias: true // smooth edges

            });
            this.renderer.toneMapping = three__WEBPACK_IMPORTED_MODULE_0__["ReinhardToneMapping"];
            this.renderer.toneMappingExposure = 1.2;
            this.renderer.setSize(window.innerWidth, window.innerHeight); // create the scene

            this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
            this.scene.background = new three__WEBPACK_IMPORTED_MODULE_0__["Color"](0xdddddd);
            this.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](1000000, window.innerWidth / window.innerHeight, 2, 3000000);
            this.camera.position.x = 30000;
            this.camera.position.y = 90000;
            this.camera.position.z = 460000; // this.camera.rotation.x = Math.PI / 2;
            // this.camera.rotation.y = 0.11;
            // this.camera.rotation.z = 2.11;

            this.scene.add(this.camera); // soft white light
            // this.light = new THREE.AmbientLight(0x404040);
            // this.light.position.z = 100000;
            // this.scene.add(this.light);

            this.hemLight = new three__WEBPACK_IMPORTED_MODULE_0__["HemisphereLight"](0xFFFBE5, 0x000000, 2);
            this.scene.add(this.hemLight);
            this.hemLight.castShadow = true; // this.spotLight = new THREE.SpotLight(0xFDEAC8, 3);
            // this.spotLight.castShadow = false;
            // this.scene.add(this.spotLight);
            // this.controls = new Control.OrbitControls(this.camera, this.renderer.domElement);
            // this.controls.addEventListener('change');

            this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__["MapControls"](this.camera, this.renderer.domElement);
            this.controls.enableDamping = true;
            this.controls.dampingFactor = 0.05;
            this.controls.screenSpacePanning = false;
            this.controls.enableRotate = true;
            this.controls.enableZoom = true; // this.controls.minDistance = 100;
            // this.controls.maxDistance = 500;

            this.controls.maxPolarAngle = Math.PI / 3;
            this.controls.minPolarAngle = Math.PI / 3; // this.controls.maxPolarAngle = Math.PI/8;
            // this.controls.minPolarAngle = Math.PI/8;

            this.controls.addEventListener('change', function (e) {
              console.log(e);
            });
            var loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__["GLTFLoader"]();
            loader.load('assets/siu_map_v2/scene.gltf', function (gltf) {
              console.log(gltf);
              var car = gltf.scene.children[0];
              var obj1 = gltf.scene.children[0].children;
              console.log(obj1);
              _this4.sceneObj = obj1[0].children; // obj1[0].children[20].visible = false;

              car.scale.set(1, 1, 1);
              car.rotation.set(1.1, 2.0, 0.8);

              _this4.scene.add(gltf.scene);

              _this4.animate();
            }); // for (let i = 0; i < 5; i++){
            //   const numberTexture = new THREE.CanvasTexture(
            //     document.querySelector('#number_' +  i.toString())
            //   );
            //   const spriteMaterial = new THREE.SpriteMaterial({
            //       map: numberTexture,
            //       alphaTest: 0.5,
            //       transparent: true,
            //       depthTest: false,
            //       depthWrite: false
            //   });
            //   const sprite = new THREE.Sprite(spriteMaterial);
            //   sprite.position.set(250, 250, 250);
            //   sprite.scale.set(60, 60, 1);
            //   this.scene.add(sprite);
            // }
          }
        }, {
          key: "animate",
          value: function animate() {
            var _this5 = this;

            // We have to run this outside angular zones,
            // because it could trigger heavy changeDetection cycles.
            this.ngZone.runOutsideAngular(function () {
              if (document.readyState !== 'loading') {
                _this5.render();
              } else {
                window.addEventListener('DOMContentLoaded', function () {
                  _this5.render();
                });
              }

              window.addEventListener('resize', function () {
                _this5.resize();
              });
            });
          }
        }, {
          key: "render",
          value: function render() {
            var _this6 = this;

            this.frameId = requestAnimationFrame(function () {
              _this6.render();
            }); // this.cube.rotation.x += 0.01;
            // this.cube.rotation.y += 0.01;
            // this.spotLight.position.set(
            //   this.camera.position.x + 1000,
            //   this.camera.position.y + 1000,
            //   this.camera.position.z + 10000
            // );

            this.renderer.render(this.scene, this.camera); // const vector = new THREE.Vector3(10000, 220000, 120000);

            var vectors = [new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](10000, 220000, 120000), new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](70000, 220000, 120000), new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-150000, -20000, 120000), new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-70000, 60000, 120000), new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-230000, 100000, 120000)];
            var canvas = this.renderer.domElement; // for (let i = 0; i < 5; i++){
            //   vectors[i].project(this.camera);
            //   vectors[i].x = Math.round((0.5 + vectors[i].x / 2) * (canvas.width / window.devicePixelRatio));
            //   vectors[i].y = Math.round((0.5 - vectors[i].y / 2) * (canvas.height / window.devicePixelRatio));
            // }
            // for (let i = 0; i < 5 ; i++){
            //   this.annotationArray[i].style.top = `${vectors[i].y}px`;
            //   this.annotationArray[i].style.left = `${vectors[i].x}px`;
            //   this.annotationArray[i].style.opacity = '1';
            // }
          }
        }, {
          key: "resize",
          value: function resize() {
            var width = window.innerWidth;
            var height = window.innerHeight;
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height);
          }
        }]);

        return EngineService;
      }();

      EngineService.ɵfac = function EngineService_Factory(t) {
        return new (t || EngineService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      EngineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: EngineService,
        factory: EngineService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EngineService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ej43":
    /*!****************************************************!*\
      !*** ./src/app/services/authentication.service.ts ***!
      \****************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function ej43(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @environments/environment */
      "AytR");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(router, http) {
          _classCallCheck(this, AuthenticationService);

          this.router = router;
          this.http = http;
          this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          this.user = this.userSubject.asObservable();
        }

        _createClass(AuthenticationService, [{
          key: "userValue",
          get: function get() {
            return this.userSubject.value;
          }
        }, {
          key: "login",
          value: function login(username, password) {
            var _this7 = this;

            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/login"), {
              username: username,
              password: password
            }, {
              withCredentials: false
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
              _this7.userSubject.next(user);

              _this7.startRefreshTokenTimer();

              _this7.setSession(user);

              return user;
            }));
          }
        }, {
          key: "setSession",
          value: function setSession(user) {
            localStorage.setItem('token', user.jwtToken);
            localStorage.setItem('token2', user.refreshToken);
          }
        }, {
          key: "clearSession",
          value: function clearSession() {
            localStorage.removeItem('token');
            localStorage.removeItem('token2');
          }
        }, {
          key: "logout",
          value: function logout() {
            this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/revoke-token"), {}, {
              withCredentials: false
            }).subscribe();
            this.stopRefreshTokenTimer();
            this.userSubject.next(null);
            this.clearSession();
            this.router.navigate(['/login']);
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {
            var _this8 = this;

            var refreshToken = localStorage.getItem('token2');
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/refresh-token?refreshToken=").concat(refreshToken), {}, {
              withCredentials: false
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
              _this8.userSubject.next(user);

              _this8.setSession(user);

              _this8.startRefreshTokenTimer();

              return user;
            }));
          } // helper methods

        }, {
          key: "startRefreshTokenTimer",
          value: function startRefreshTokenTimer() {
            var _this9 = this;

            // parse json object from base64 encoded jwt token
            var jwtToken = JSON.parse(atob(this.userValue.jwtToken.split('.')[1])); // set a timeout to refresh the token a minute before it expires

            var expires = new Date(jwtToken.exp * 1000);
            var timeout = expires.getTime() - Date.now() - 60 * 1000;
            this.refreshTokenTimeout = setTimeout(function () {
              return _this9.refreshToken().subscribe();
            }, timeout);
          }
        }, {
          key: "stopRefreshTokenTimer",
          value: function stopRefreshTokenTimer() {
            clearTimeout(this.refreshTokenTimeout);
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
        return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthenticationService,
        factory: AuthenticationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fHJZ":
    /*!******************************************************!*\
      !*** ./src/app/services/google-analytics.service.ts ***!
      \******************************************************/

    /*! exports provided: GoogleAnalyticsService */

    /***/
    function fHJZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsService", function () {
        return GoogleAnalyticsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var GoogleAnalyticsService = /*#__PURE__*/function () {
        function GoogleAnalyticsService() {
          _classCallCheck(this, GoogleAnalyticsService);
        }

        _createClass(GoogleAnalyticsService, [{
          key: "eventEmitter",
          value: function eventEmitter(eventName, eventCategory, eventAction) {
            var eventLabel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var eventValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            gtag('event', eventName, {
              eventCategory: eventCategory,
              eventLabel: eventLabel,
              eventAction: eventAction,
              eventValue: eventValue
            });
          }
        }]);

        return GoogleAnalyticsService;
      }();

      GoogleAnalyticsService.ɵfac = function GoogleAnalyticsService_Factory(t) {
        return new (t || GoogleAnalyticsService)();
      };

      GoogleAnalyticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GoogleAnalyticsService,
        factory: GoogleAnalyticsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleAnalyticsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "gVS+":
    /*!************************************************!*\
      !*** ./src/app/recorder/recorder.component.ts ***!
      \************************************************/

    /*! exports provided: RecorderComponent */

    /***/
    function gVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecorderComponent", function () {
        return RecorderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _count_down_timer_count_down_timer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../count-down-timer/count-down-timer.component */
      "w/st");
      /* harmony import */


      var _services_audio_recording_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/audio-recording.service */
      "vaZA");
      /* harmony import */


      var _recorder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./recorder.service */
      "dyDF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var _c0 = ["downCounter"];

      function RecorderComponent_audio_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "audio", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.blobUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function RecorderComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecorderComponent_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.startRecording();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Practise this for 10 seconds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecorderComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-count-down-timer", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecorderComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecorderComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.stopRecording();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Stop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RecorderComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecorderComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.clearRecordedData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var RecorderComponent = /*#__PURE__*/function () {
        function RecorderComponent(audioRecordingService, recorderService, sanitizer) {
          var _this10 = this;

          _classCallCheck(this, RecorderComponent);

          this.audioRecordingService = audioRecordingService;
          this.recorderService = recorderService;
          this.sanitizer = sanitizer;
          this.recording = false;
          this.recordingCaption = 'Record';
          this.isRecording = false;
          this.audioRecordingService.recordingFailed().subscribe(function () {
            _this10.isRecording = false;
          });
          this.audioRecordingService.getRecordedTime().subscribe(function (time) {
            _this10.recordedTime = time;
          });
          this.audioRecordingService.getRecordedBlob().subscribe(function (data) {
            _this10.blobUrl = _this10.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
            recorderService.sendRecord({
              item: 'Recorded',
              file: data,
              filename: _this10.blobUrl
            }).subscribe({
              next: function next(dt) {
                console.log('Hit the server');
                console.log(dt);
              },
              error: function error(_error2) {
                console.error('There was an error!', _error2);
              }
            });
            console.log('Send recording');
          });
        }

        _createClass(RecorderComponent, [{
          key: "content",
          set: function set(content) {
            if (content) {
              this.downCounter = content;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "startRecording",
          value: function startRecording() {
            if (!this.isRecording) {
              this.isRecording = true;
              this.audioRecordingService.startRecording();

              if (this.downCounter) {
                this.downCounter.beginPractise();
              }
            }
          }
        }, {
          key: "abortRecording",
          value: function abortRecording() {
            if (this.isRecording) {
              this.isRecording = false;
              this.audioRecordingService.abortRecording();
              this.downCounter.onTimesUp();
            }
          }
        }, {
          key: "stopRecording",
          value: function stopRecording() {
            if (this.isRecording) {
              this.audioRecordingService.stopRecording();
              this.isRecording = false;
              this.downCounter.onTimesUp();
            }
          }
        }, {
          key: "clearRecordedData",
          value: function clearRecordedData() {
            this.blobUrl = null;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.abortRecording();

            if (this.downCounter) {
              this.downCounter.onTimesUp();
            }
          }
        }]);

        return RecorderComponent;
      }();

      RecorderComponent.ɵfac = function RecorderComponent_Factory(t) {
        return new (t || RecorderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_audio_recording_service__WEBPACK_IMPORTED_MODULE_3__["AudioRecordingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_recorder_service__WEBPACK_IMPORTED_MODULE_4__["RecorderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
      };

      RecorderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RecorderComponent,
        selectors: [["app-recorder"]],
        viewQuery: function RecorderComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_recorder_service__WEBPACK_IMPORTED_MODULE_4__["RecorderService"]])],
        decls: 7,
        vars: 5,
        consts: [[1, "text-center"], ["controls", "", 4, "ngIf"], ["class", "btn btn-danger start", 3, "click", 4, "ngIf"], ["class", "text-center flex-center", 4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-warning", 3, "click", 4, "ngIf"], ["controls", ""], ["type", "audio/webm", 3, "src"], [1, "btn", "btn-danger", "start", 3, "click"], [1, "fa", "fa-2x", "fa-microphone"], [1, "text-center", "flex-center"], [1, "flex-center"], ["downCounter", ""], [1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-2x", "fa-stop-circle"], [1, "btn", "btn-warning", 3, "click"], [1, "fa", "fa-2x", "fa-repeat"]],
        template: function RecorderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RecorderComponent_audio_2_Template, 2, 1, "audio", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RecorderComponent_button_3_Template, 3, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RecorderComponent_div_4_Template, 4, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RecorderComponent_button_5_Template, 3, 0, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RecorderComponent_button_6_Template, 3, 0, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isRecording && ctx.blobUrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isRecording && !ctx.blobUrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRecording && !ctx.blobUrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRecording && !ctx.blobUrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isRecording && ctx.blobUrl);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _count_down_timer_count_down_timer_component__WEBPACK_IMPORTED_MODULE_2__["CountDownTimerComponent"]],
        styles: [".flex-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlY29yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUNKIiwiZmlsZSI6InJlY29yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtY2VudGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecorderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-recorder',
            templateUrl: './recorder.component.html',
            styleUrls: ['./recorder.component.scss'],
            providers: [_recorder_service__WEBPACK_IMPORTED_MODULE_4__["RecorderService"]]
          }]
        }], function () {
          return [{
            type: _services_audio_recording_service__WEBPACK_IMPORTED_MODULE_3__["AudioRecordingService"]
          }, {
            type: _recorder_service__WEBPACK_IMPORTED_MODULE_4__["RecorderService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
          }];
        }, {
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['downCounter', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "hU2h":
    /*!************************************************!*\
      !*** ./src/app/helpers/mustMatch.validator.ts ***!
      \************************************************/

    /*! exports provided: MustMatch */

    /***/
    function hU2h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
        return MustMatch;
      }); // custom validator to check that two fields match


      function MustMatch(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
          } // set error on matchingControl if validation fails


          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              mustMatch: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    },

    /***/
    "k7SL":
    /*!***************************************************************!*\
      !*** ./src/app/ui/ui-infobar-top/ui-infobar-top.component.ts ***!
      \***************************************************************/

    /*! exports provided: UiInfobarTopComponent */

    /***/
    function k7SL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiInfobarTopComponent", function () {
        return UiInfobarTopComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var UiInfobarTopComponent = /*#__PURE__*/function () {
        function UiInfobarTopComponent() {
          _classCallCheck(this, UiInfobarTopComponent);
        }

        _createClass(UiInfobarTopComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UiInfobarTopComponent;
      }();

      UiInfobarTopComponent.ɵfac = function UiInfobarTopComponent_Factory(t) {
        return new (t || UiInfobarTopComponent)();
      };

      UiInfobarTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UiInfobarTopComponent,
        selectors: [["app-ui-infobar-top"]],
        decls: 2,
        vars: 0,
        template: function UiInfobarTopComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ui-infobar-top works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiInfobarTopComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ui-infobar-top',
            templateUrl: './ui-infobar-top.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "kHhy":
    /*!*******************************************************************!*\
      !*** ./src/app/ui/ui-sidebar-right/ui-sidebar-right.component.ts ***!
      \*******************************************************************/

    /*! exports provided: UiSidebarRightComponent */

    /***/
    function kHhy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiSidebarRightComponent", function () {
        return UiSidebarRightComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var UiSidebarRightComponent = /*#__PURE__*/function () {
        function UiSidebarRightComponent() {
          _classCallCheck(this, UiSidebarRightComponent);
        }

        _createClass(UiSidebarRightComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UiSidebarRightComponent;
      }();

      UiSidebarRightComponent.ɵfac = function UiSidebarRightComponent_Factory(t) {
        return new (t || UiSidebarRightComponent)();
      };

      UiSidebarRightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UiSidebarRightComponent,
        selectors: [["app-ui-sidebar-right"]],
        decls: 2,
        vars: 0,
        template: function UiSidebarRightComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ui-sidebar-right works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiSidebarRightComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ui-sidebar-right',
            templateUrl: './ui-sidebar-right.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "kiQV":
    /*!**********************!*\
      !*** ./package.json ***!
      \**********************/

    /*! exports provided: name, version, license, scripts, private, dependencies, devDependencies, default */

    /***/
    function kiQV(module) {
      module.exports = JSON.parse("{\"name\":\"siu-vog\",\"version\":\"0.0.0\",\"license\":\"MIT\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve --ssl --ssl-key localhost.key --ssl-cert localhost.crt\",\"build\":\"ng build\",\"build:prod\":\"ng build --prod\",\"build:both\":\"npm run build && npm run build:prod\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"postinstall\":\"ngcc\",\"prod\":\"ng build --prod --base-href https://siuctexr.github.io/vog/\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~11.0.3\",\"@angular/cdk\":\"^11.2.2\",\"@angular/common\":\"~11.0.3\",\"@angular/compiler\":\"~11.0.3\",\"@angular/core\":\"~11.0.3\",\"@angular/flex-layout\":\"^11.0.0-beta.33\",\"@angular/forms\":\"~11.0.3\",\"@angular/material\":\"^11.2.2\",\"@angular/platform-browser\":\"~11.0.3\",\"@angular/platform-browser-dynamic\":\"~11.0.3\",\"@angular/router\":\"~11.0.3\",\"bootstrap\":\"^4.5.2\",\"font-awesome\":\"^4.7.0\",\"moment\":\"^2.29.1\",\"recordrtc\":\"^5.6.2\",\"rxjs\":\"~6.6.3\",\"three\":\"^0.121.1\",\"tslib\":\"^2.0.0\",\"zone.js\":\"~0.10.3\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.1100.3\",\"@angular/cli\":\"~11.0.3\",\"@angular/compiler-cli\":\"~11.0.3\",\"@angular/language-service\":\"~11.0.3\",\"@types/jasmine\":\"~3.6.0\",\"@types/jasminewd2\":\"~2.0.8\",\"@types/node\":\"^12.12.47\",\"@types/three\":\"^0.103.2\",\"@types/webgl2\":\"^0.0.5\",\"codelyzer\":\"^6.0.0\",\"jasmine-core\":\"~3.6.0\",\"jasmine-spec-reporter\":\"~5.0.0\",\"karma\":\"~5.1.1\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.3\",\"karma-jasmine\":\"~4.0.0\",\"karma-jasmine-html-reporter\":\"^1.5.0\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~8.10.2\",\"tslint\":\"~6.1.2\",\"typescript\":\"~4.0.3\"}}");
      /***/
    },

    /***/
    "leit":
    /*!*****************************************************************!*\
      !*** ./src/app/ui/ui-sidebar-left/ui-sidebar-left.component.ts ***!
      \*****************************************************************/

    /*! exports provided: UiSidebarLeftComponent */

    /***/
    function leit(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiSidebarLeftComponent", function () {
        return UiSidebarLeftComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var UiSidebarLeftComponent = /*#__PURE__*/function () {
        function UiSidebarLeftComponent() {
          _classCallCheck(this, UiSidebarLeftComponent);
        }

        _createClass(UiSidebarLeftComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UiSidebarLeftComponent;
      }();

      UiSidebarLeftComponent.ɵfac = function UiSidebarLeftComponent_Factory(t) {
        return new (t || UiSidebarLeftComponent)();
      };

      UiSidebarLeftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UiSidebarLeftComponent,
        selectors: [["app-ui-sidebar-left"]],
        decls: 2,
        vars: 0,
        template: function UiSidebarLeftComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ui-sidebar-left works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiSidebarLeftComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ui-sidebar-left',
            templateUrl: './ui-sidebar-left.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "lxnM":
    /*!************************************!*\
      !*** ./src/app/ui/ui.component.ts ***!
      \************************************/

    /*! exports provided: UiComponent */

    /***/
    function lxnM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiComponent", function () {
        return UiComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ui-infobar-top/ui-infobar-top.component */
      "k7SL");
      /* harmony import */


      var _ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ui-sidebar-left/ui-sidebar-left.component */
      "leit");
      /* harmony import */


      var _ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ui-sidebar-right/ui-sidebar-right.component */
      "kHhy");
      /* harmony import */


      var _ui_infobar_bottom_ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ui-infobar-bottom/ui-infobar-bottom.component */
      "9YMx");

      var UiComponent = /*#__PURE__*/function () {
        function UiComponent() {
          _classCallCheck(this, UiComponent);
        }

        _createClass(UiComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UiComponent;
      }();

      UiComponent.ɵfac = function UiComponent_Factory(t) {
        return new (t || UiComponent)();
      };

      UiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UiComponent,
        selectors: [["app-ui"]],
        decls: 5,
        vars: 0,
        consts: [[1, "ui-wrapper"]],
        template: function UiComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ui-infobar-top");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-ui-sidebar-left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-ui-sidebar-right");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-ui-infobar-bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_1__["UiInfobarTopComponent"], _ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_2__["UiSidebarLeftComponent"], _ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_3__["UiSidebarRightComponent"], _ui_infobar_bottom_ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_4__["UiInfobarBottomComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ui',
            templateUrl: './ui.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "oQVO":
    /*!**********************************************!*\
      !*** ./src/app/menubar/menubar.component.ts ***!
      \**********************************************/

    /*! exports provided: MenubarComponent */

    /***/
    function oQVO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenubarComponent", function () {
        return MenubarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");

      function MenubarComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "person_pin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.user.firstName, " ", ctx_r0.user.lastName, "");
        }
      }

      function MenubarComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var MenubarComponent = /*#__PURE__*/function () {
        function MenubarComponent(authService) {
          var _this11 = this;

          _classCallCheck(this, MenubarComponent);

          this.authService = authService;
          this.authService.user.subscribe(function (x) {
            return _this11.user = x;
          });
        }

        _createClass(MenubarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
          }
        }]);

        return MenubarComponent;
      }();

      MenubarComponent.ɵfac = function MenubarComponent_Factory(t) {
        return new (t || MenubarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
      };

      MenubarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MenubarComponent,
        selectors: [["app-menubar"]],
        decls: 14,
        vars: 2,
        consts: [["role", "banner", 1, "toolbar"], ["routerLink", "/home", 1, "home-link"], ["width", "60", "alt", "Angular Logo", "src", "assets/images/siu_logo_white.png"], ["id", "app-title"], [1, "spacer"], ["class", "user-info", 3, "matMenuTriggerFor", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["class", "user-info", 4, "ngIf"], [1, "user-info", 3, "matMenuTriggerFor"], ["mat-button", ""], [1, "double-size"], [1, "user-info"], ["mat-button", "", "routerLink", "/register"], ["mat-button", "", "routerLink", "/login"]],
        template: function MenubarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Voice on the Go");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenubarComponent_div_6_Template, 5, 3, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-menu", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenubarComponent_Template_button_click_11_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MenubarComponent_div_13_Template, 5, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #b71c1c;\n  color: white;\n  font-weight: 600;\n  z-index: 10;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n#app-title[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\n.home-link[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.user-info[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lbnViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxPQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtBQUNKIiwiZmlsZSI6Im1lbnViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLnRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNzFjMWM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgei1pbmRleDogMTA7XG4gIH1cblxuICAudG9vbGJhciBpbWcge1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICB9XG5cbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICB9XG5cbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbzpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5cbiAgI2FwcC10aXRsZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLmhvbWUtbGluazpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAudXNlci1pbmZve1xuICAgIG1hcmdpbi1yaWdodDo1cHg7XG4gIH0iXX0= */", ".toolbar[_ngcontent-%COMP%]{\n      position: sticky;\n      position: -webkit-sticky;\n      top: 0;\n      z-index: 1000;\n    }\n    .toolbar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n        padding-right:10px;\n        vertical-align: middle;\n        cursor: pointer;\n       \n    }\n    #app-title[_ngcontent-%COMP%]{\n        font-size:1.6em;\n    }\n\n    .double-size[_ngcontent-%COMP%]{\n      transform:scale(2);\n      margin-right: 10px;\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenubarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-menubar',
            templateUrl: './menubar.component.html',
            styleUrls: ['./menubar.component.scss']
          }]
        }], function () {
          return [{
            type: _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qfBg":
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /*! exports provided: UserService */

    /***/
    function qfBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @environments/environment */
      "AytR");

      var UserService = /*#__PURE__*/function () {
        function UserService(router, http) {
          _classCallCheck(this, UserService);

          this.router = router;
          this.http = http;
        }

        _createClass(UserService, [{
          key: "addUser",
          value: function addUser(userData) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/user"), userData, {
              withCredentials: false
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
              return user;
            }));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tDHM":
    /*!********************************************************!*\
      !*** ./src/app/side-buttons/side-buttons.component.ts ***!
      \********************************************************/

    /*! exports provided: SideButtonsComponent */

    /***/
    function tDHM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideButtonsComponent", function () {
        return SideButtonsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _engine_engine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../engine/engine.service */
      "eW6i");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _app_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/about/about.component */
      "84zG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      function SideButtonsComponent_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 18);
        }
      }

      function SideButtonsComponent_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 19);
        }
      }

      var SideButtonsComponent = /*#__PURE__*/function () {
        function SideButtonsComponent(engServ, dialog) {
          _classCallCheck(this, SideButtonsComponent);

          this.engServ = engServ;
          this.dialog = dialog;
          this.showButtons = true;
        }

        _createClass(SideButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleButtons",
          value: function toggleButtons() {
            this.showButtons = !this.showButtons;
          }
        }, {
          key: "changePosition",
          value: function changePosition() {
            console.log(this.engServ.controls.keys); // this.engServ.controls.reset();
            // this.engServ.camera.position.x = this.engServ.camera.position.x - 1000;
            // this.engServ.camera.position.y = this.engServ.camera.position.y - 1000;
            // this.engServ.camera.position.z = this.engServ.camera.position.z - 10000;
            // this.engServ.controls.target = new THREE.Vector3(-52387.88408561413,.5665546803992394e-12,21794.446764586413);

            this.engServ.camera.position.x = -48834.02;
            this.engServ.camera.position.y = 29119;
            this.engServ.camera.position.z = 71553;
            this.engServ.controls.update();
          }
        }, {
          key: "buttonHover",
          value: function buttonHover(id) {
            var allAnns = document.getElementsByClassName('annotation'); // tslint:disable-next-line:prefer-for-of

            for (var i = 0; i < allAnns.length; i++) {
              allAnns[i].style.display = 'none';
            }

            var annElems = document.getElementById('annotation_' + id.toString());

            if (annElems != null) {
              annElems.style.display = 'block';
            }
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var dialogRef = this.dialog.open(_app_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]);
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }]);

        return SideButtonsComponent;
      }();

      SideButtonsComponent.ɵfac = function SideButtonsComponent_Factory(t) {
        return new (t || SideButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_engine_engine_service__WEBPACK_IMPORTED_MODULE_1__["EngineService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
      };

      SideButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SideButtonsComponent,
        selectors: [["app-side-buttons"]],
        decls: 44,
        vars: 4,
        consts: [["role", "main", 1, "content-wrapper", "button-container"], [1, "cardm-container"], ["mat-fab", "", "color", "warn", "aria-label", "Show Menu", 1, "d-block", "d-md-none", 3, "click"], ["class", "fa fa-2x fa-list", 4, "ngIf"], ["class", "fa fa-2x fa-arrow-left", 4, "ngIf"], [1, "d-md-block"], ["buttongrp", ""], ["routerLink", "/activities", "rel", "noopener", 1, "cardm", 3, "mouseover"], [1, "fa", "fa-heartbeat", "fa-grey"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "material-icons"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["target", "_blank", "rel", "noopener", "href", "#", 1, "cardm", 3, "mouseover"], [1, "fa", "fa-stethoscope", "fa-grey"], [1, "fa", "fa-flask", "fa-grey"], [1, "fa", "fa-film", "fa-grey"], [1, "fa", "fa-users", "fa-grey"], ["target", "_blank", "rel", "noopener", 1, "cardm", 3, "click"], [1, "fa", "fa-bell", "fa-grey"], [1, "fa", "fa-2x", "fa-list"], [1, "fa", "fa-2x", "fa-arrow-left"]],
        template: function SideButtonsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideButtonsComponent_Template_button_click_3_listener() {
              return ctx.toggleButtons();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SideButtonsComponent_i_4_Template, 1, 0, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SideButtonsComponent_i_5_Template, 1, 0, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function SideButtonsComponent_Template_a_mouseover_8_listener() {
              return ctx.buttonHover(0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Warmups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function SideButtonsComponent_Template_a_mouseover_14_listener() {
              return ctx.buttonHover(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Rules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function SideButtonsComponent_Template_a_mouseover_20_listener() {
              return ctx.buttonHover(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Caring");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function SideButtonsComponent_Template_a_mouseover_26_listener() {
              return ctx.buttonHover(3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Media Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function SideButtonsComponent_Template_a_mouseover_32_listener() {
              return ctx.buttonHover(4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Examples");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideButtonsComponent_Template_a_click_38_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Credits");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "svg", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButtons);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showButtons);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx.showButtons);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MifQ== */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 0px auto 0px;\n    padding: 0 0px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .cardm[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .cardm-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .cardm[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 80px;\n    width: 250px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .cardm-container[_ngcontent-%COMP%]   .cardm[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .cardm.cardm-small[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 280px;\n  }\n\n  .cardm-container[_ngcontent-%COMP%]   .cardm[_ngcontent-%COMP%]:not(.highlight-cardm) {\n    cursor: pointer;\n  }\n\n  .cardm-container[_ngcontent-%COMP%]   .cardm[_ngcontent-%COMP%]:not(.highlight-cardm):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .cardm-container[_ngcontent-%COMP%]   .cardm[_ngcontent-%COMP%]:not(.highlight-cardm):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .cardm.highlight-cardm[_ngcontent-%COMP%] {\n    background-color: #455a64;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .cardm.cardm.highlight-cardm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    \n    color: #b71c1c;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    \n    color: #e53935;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 92%;\n    \n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal-title[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 5px;\n    left: 40px;\n    color: white;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, .2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, .35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .cardm-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .cardm[_ngcontent-%COMP%]:not(.highlight-cardm) {\n      height: 50px;\n      margin: 8px 0;\n    }\n\n    .cardm.highlight-cardm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n\n\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }\n\n  .circle-icon[_ngcontent-%COMP%] {\n    border-radius: 50%;\n    background-color: #d50000;\n    \n    color: white;\n    height: 80px;\n    width: 80px;\n    text-align: center;\n    margin-left: -80px;\n  }\n\n  .circle-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    padding-top: 20%;\n  }\n\n  .circle-icon[_ngcontent-%COMP%]:hover {\n    border-color: #9ecaed;\n    border: 2px solid #dadada;\n    box-shadow: 0 0 10px #9ecaed;\n  }\n\n  .fa-grey[_ngcontent-%COMP%] {\n    font-size: 2em;\n    color: grey;\n    padding-right: 5px;\n  }\n\n  .voice-img[_ngcontent-%COMP%] {\n    position: absolute;\n\n    top: calc(100vh/2);\n    z-index: -10;\n    right: calc(100vw-100);\n  }\n\n  .button-container[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 100%;\n  }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideButtonsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-side-buttons',
            templateUrl: './side-buttons.component.html',
            styleUrls: ['./side-buttons.component.scss']
          }]
        }], function () {
          return [{
            type: _engine_engine_service__WEBPACK_IMPORTED_MODULE_1__["EngineService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _activity_card_activity_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./activity-card/activity-card.component */
      "8adc");
      /* harmony import */


      var _activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./activity-list/activity-list.component */
      "7jBp");
      /* harmony import */


      var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./helpers/auth-guard */
      "U+fn");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");

      var routes = [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
      }, {
        path: 'activities',
        component: _activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_3__["ActivityListComponent"]
      }, {
        path: 'activities/:id',
        component: _activity_card_activity_card_component__WEBPACK_IMPORTED_MODULE_2__["ActivityCardComponent"]
      }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }, {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              useHash: true
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vaZA":
    /*!*****************************************************!*\
      !*** ./src/app/services/audio-recording.service.ts ***!
      \*****************************************************/

    /*! exports provided: AudioRecordingService */

    /***/
    function vaZA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AudioRecordingService", function () {
        return AudioRecordingService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var recordrtc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! recordrtc */
      "qe5e");
      /* harmony import */


      var recordrtc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var AudioRecordingService = /*#__PURE__*/function () {
        function AudioRecordingService() {
          _classCallCheck(this, AudioRecordingService);

          this._recorded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this._recordingTime = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this._recordingFailed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        }

        _createClass(AudioRecordingService, [{
          key: "getRecordedBlob",
          value: function getRecordedBlob() {
            return this._recorded.asObservable();
          }
        }, {
          key: "getRecordedTime",
          value: function getRecordedTime() {
            return this._recordingTime.asObservable();
          }
        }, {
          key: "recordingFailed",
          value: function recordingFailed() {
            return this._recordingFailed.asObservable();
          }
        }, {
          key: "startRecording",
          value: function startRecording() {
            var _this12 = this;

            if (this.recorder) {
              // It means recording is already started or it is already recording something
              return;
            }

            this._recordingTime.next('00:00');

            navigator.mediaDevices.getUserMedia({
              audio: true
            }).then(function (s) {
              _this12.stream = s;

              _this12.record();
            })["catch"](function (error) {
              _this12._recordingFailed.next();
            });
          }
        }, {
          key: "abortRecording",
          value: function abortRecording() {
            this.stopMedia();
          }
        }, {
          key: "record",
          value: function record() {
            var _this13 = this;

            this.recorder = new recordrtc__WEBPACK_IMPORTED_MODULE_1__["StereoAudioRecorder"](this.stream, {
              type: 'audio',
              mimeType: 'audio/webm'
            });
            this.recorder.record();
            this.startTime = moment__WEBPACK_IMPORTED_MODULE_2__();
            this.interval = setInterval(function () {
              var currentTime = moment__WEBPACK_IMPORTED_MODULE_2__();
              var diffTime = moment__WEBPACK_IMPORTED_MODULE_2__["duration"](currentTime.diff(_this13.startTime));

              var time = _this13.toString(diffTime.minutes()) + ':' + _this13.toString(diffTime.seconds());

              _this13._recordingTime.next(time);
            }, 1000);
          }
        }, {
          key: "toString",
          value: function toString(value) {
            var val = value;

            if (!value) {
              val = '00';
            }

            if (value < 10) {
              val = '0' + value;
            }

            return val;
          }
        }, {
          key: "stopRecording",
          value: function stopRecording() {
            var _this14 = this;

            if (this.recorder) {
              this.recorder.stop(function (blob) {
                if (_this14.startTime) {
                  var mp3Name = encodeURIComponent('audio_' + new Date().getTime() + '.mp3');

                  _this14.stopMedia();

                  _this14._recorded.next({
                    blob: blob,
                    title: mp3Name
                  });
                }
              }, function () {
                _this14.stopMedia();

                _this14._recordingFailed.next();
              });
            }
          }
        }, {
          key: "stopMedia",
          value: function stopMedia() {
            if (this.recorder) {
              this.recorder = null;
              clearInterval(this.interval);
              this.startTime = null;

              if (this.stream) {
                this.stream.getAudioTracks().forEach(function (track) {
                  return track.stop();
                });
                this.stream = null;
              }
            }
          }
        }]);

        return AudioRecordingService;
      }();

      AudioRecordingService.ɵfac = function AudioRecordingService_Factory(t) {
        return new (t || AudioRecordingService)();
      };

      AudioRecordingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AudioRecordingService,
        factory: AudioRecordingService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioRecordingService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @app/services/authentication.service */
      "ej43");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      function LoginComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error);
        }
      }

      function LoginComponent_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_14_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.username.errors.required);
        }
      }

      function LoginComponent_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_19_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.required);
        }
      }

      function LoginComponent_span_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 25);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, route, router, authenticationService) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.route = route;
          this.router = router;
          this.authenticationService = authenticationService;
          this.loading = false;
          this.submitted = false;
          this.error = ''; // redirect to home if already logged in

          if (this.authenticationService.userValue) {
            this.router.navigate(['/']);
          }
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }); // get return url from route parameters or default to '/'

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this15 = this;

            this.submitted = true; // stop here if form is invalid

            if (this.loginForm.invalid) {
              return;
            }

            this.loading = true;
            this.authenticationService.login(this.f.username.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe({
              next: function next() {
                _this15.router.navigate([_this15.returnUrl]);
              },
              error: function error(_error3) {
                _this15.error = _error3;
                _this15.loading = false;
              }
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 31,
        vars: 12,
        consts: [[1, "container"], [1, "col-md-8", "col-sm-12", "col-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "img-container"], ["src", "assets/images/user_avatar.webp", 1, "user-image"], [3, "formGroup", "ngSubmit"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], [1, "form-group"], ["for", "username"], ["type", "text", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "row"], [1, "col-6"], ["routerLink", "/login"], ["routerLink", "/register"], [1, "col-6", "text-right"], ["mat-raised-button", "", "color", "warn", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "alert", "alert-danger", "mt-3", "mb-0"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Forgot Password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, LoginComponent_span_29_Template, 1, 0, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.f.username.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.f.password.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: [".img-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.user-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 20%;\n  width: 20%;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnVzZXItaW1hZ2V7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogMjAlO1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbi5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vvyD":
    /*!************************************!*\
      !*** ./src/app/material.module.ts ***!
      \************************************/

    /*! exports provided: MaterialModule */

    /***/
    function vvyD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MaterialModule_Factory(t) {
          return new (t || MaterialModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]],
            exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "w/st":
    /*!****************************************************************!*\
      !*** ./src/app/count-down-timer/count-down-timer.component.ts ***!
      \****************************************************************/

    /*! exports provided: CountDownTimerComponent */

    /***/
    function wSt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountDownTimerComponent", function () {
        return CountDownTimerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CountDownTimerComponent = /*#__PURE__*/function () {
        function CountDownTimerComponent() {
          _classCallCheck(this, CountDownTimerComponent);

          // Warning occurs at 10s
          this.WARNING_THRESHOLD = 5; // Alert occurs at 5s

          this.ALERT_THRESHOLD = 3;
          this.FULL_DASH_ARRAY = 283;
          this.COLOR_CODES = {
            info: {
              color: 'green'
            },
            warning: {
              color: 'orange',
              threshold: this.WARNING_THRESHOLD
            },
            alert: {
              color: 'red',
              threshold: this.ALERT_THRESHOLD
            }
          };
          this.TIME_LIMIT = 10;
          this.timePassed = 0;
          this.timeLeft = this.TIME_LIMIT;
          this.timerInterval = null;
          this.remainingPathColor = this.COLOR_CODES.info.color;
        }

        _createClass(CountDownTimerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.startTimer();
          }
        }, {
          key: "setRemainingPathColor",
          value: function setRemainingPathColor(timeLeft) {
            var _this$COLOR_CODES = this.COLOR_CODES,
                alert = _this$COLOR_CODES.alert,
                warning = _this$COLOR_CODES.warning,
                info = _this$COLOR_CODES.info; // If the remaining time is less than or equal to 5, remove the "warning" class and apply the "alert" class.

            if (timeLeft <= alert.threshold) {
              document.getElementById('base-timer-path-remaining').classList.remove(warning.color);
              document.getElementById('base-timer-path-remaining').classList.add(alert.color); // If the remaining time is less than or equal to 10, remove the base color and apply the "warning" class.
            } else if (timeLeft <= warning.threshold) {
              document.getElementById('base-timer-path-remaining').classList.remove(info.color);
              document.getElementById('base-timer-path-remaining').classList.add(warning.color);
            }
          }
        }, {
          key: "formatTime",
          value: function formatTime(time) {
            var minutes = Math.floor(time / 60);
            var seconds = time % 60;
            var secondsStr = seconds.toString();

            if (seconds < 10) {
              secondsStr = "0".concat(seconds);
            } // return `${minutes}:${secondsStr}`;


            return "".concat(secondsStr);
          }
        }, {
          key: "calculateTimeFraction",
          value: function calculateTimeFraction() {
            var rawTimeFraction = this.timeLeft / this.TIME_LIMIT;
            return rawTimeFraction - 1 / this.TIME_LIMIT * (1 - rawTimeFraction);
          }
        }, {
          key: "setCircleDasharray",
          value: function setCircleDasharray() {
            var circleDasharray = "".concat((this.calculateTimeFraction() * this.FULL_DASH_ARRAY).toFixed(0), " 283");
            document.getElementById('base-timer-path-remaining').setAttribute('stroke-dasharray', circleDasharray);
          }
        }, {
          key: "beginPractise",
          value: function beginPractise() {
            clearInterval(this.timerInterval);
            this.timeLeft = this.TIME_LIMIT;
            this.timePassed = 0;
            this.formatTime(0);
            this.startTimer();
            this.remainingPathColor = this.COLOR_CODES.info.color;
          }
        }, {
          key: "onTimesUp",
          value: function onTimesUp() {
            clearInterval(this.timerInterval);
          }
        }, {
          key: "startTimer",
          value: function startTimer() {
            var _this16 = this;

            this.timerInterval = setInterval(function () {
              _this16.timePassed = _this16.timePassed += 1;
              _this16.timeLeft = _this16.TIME_LIMIT - _this16.timePassed;
              document.getElementById('base-timer-label').innerHTML = _this16.formatTime(_this16.timeLeft);

              _this16.setCircleDasharray();

              _this16.setRemainingPathColor(_this16.timeLeft);

              if (_this16.timeLeft === 0) {
                _this16.onTimesUp();
              }
            }, 1000);
          }
        }]);

        return CountDownTimerComponent;
      }();

      CountDownTimerComponent.ɵfac = function CountDownTimerComponent_Factory(t) {
        return new (t || CountDownTimerComponent)();
      };

      CountDownTimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CountDownTimerComponent,
        selectors: [["app-count-down-timer"]],
        decls: 7,
        vars: 4,
        consts: [[1, "base-timer"], ["viewBox", "0 0 100 100", "xmlns", "http://www.w3.org/2000/svg", 1, "base-timer__svg"], [1, "base-timer__circle"], ["cx", "50", "cy", "50", "r", "45", 1, "base-timer__path-elapsed"], ["id", "base-timer-path-remaining", "stroke-dasharray", "283", "d", "\n            M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "], ["id", "base-timer-label", 1, "base-timer__label"]],
        template: function CountDownTimerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("base-timer__path-remaining ", ctx.remainingPathColor, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timeLeft);
          }
        },
        styles: [".base-timer[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100px;\n  height: 100px;\n}\n\n.base-timer__svg[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n\n.base-timer__circle[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: none;\n}\n\n.base-timer__path-elapsed[_ngcontent-%COMP%] {\n  stroke-width: 7px;\n  stroke: grey;\n}\n\n.base-timer__path-remaining[_ngcontent-%COMP%] {\n  stroke-width: 7px;\n  stroke-linecap: round;\n  transform: rotate(90deg);\n  transform-origin: center;\n  transition: 1s linear all;\n  fill-rule: nonzero;\n  stroke: currentColor;\n}\n\n.base-timer__path-remaining.green[_ngcontent-%COMP%] {\n  color: #41b883;\n}\n\n.base-timer__path-remaining.orange[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.base-timer__path-remaining.red[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.base-timer__label[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 48px;\n}\n\n.timer1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvdW50LWRvd24tdGltZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0U7RUFDRSxxQkFBQTtBQUFKOztBQUdFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFHRTtFQUNFLGNBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7QUFBSjs7QUFHRTtFQUNFLFVBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQUoiLCJmaWxlIjoiY291bnQtZG93bi10aW1lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJhc2UtdGltZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICBcbiAgLmJhc2UtdGltZXJfX3N2ZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICB9XG4gIFxuICAuYmFzZS10aW1lcl9fY2lyY2xlIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogbm9uZTtcbiAgfVxuICBcbiAgLmJhc2UtdGltZXJfX3BhdGgtZWxhcHNlZCB7XG4gICAgc3Ryb2tlLXdpZHRoOiA3cHg7XG4gICAgc3Ryb2tlOiBncmV5O1xuICB9XG4gIFxuICAuYmFzZS10aW1lcl9fcGF0aC1yZW1haW5pbmcge1xuICAgIHN0cm9rZS13aWR0aDogN3B4O1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IDFzIGxpbmVhciBhbGw7XG4gICAgZmlsbC1ydWxlOiBub256ZXJvO1xuICAgIHN0cm9rZTogY3VycmVudENvbG9yO1xuICB9XG4gIFxuICAuYmFzZS10aW1lcl9fcGF0aC1yZW1haW5pbmcuZ3JlZW4ge1xuICAgIGNvbG9yOiByZ2IoNjUsIDE4NCwgMTMxKTtcbiAgfVxuICBcbiAgLmJhc2UtdGltZXJfX3BhdGgtcmVtYWluaW5nLm9yYW5nZSB7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgfVxuICBcbiAgLmJhc2UtdGltZXJfX3BhdGgtcmVtYWluaW5nLnJlZCB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICBcbiAgLmJhc2UtdGltZXJfX2xhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgdG9wOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gIH1cbiAgXG4gIC50aW1lcjF7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountDownTimerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-count-down-timer',
            templateUrl: './count-down-timer.component.html',
            styleUrls: ['./count-down-timer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "wKGj":
    /*!*********************************************!*\
      !*** ./src/app/services/activity-list.json ***!
      \*********************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */

    /***/
    function wKGj(module) {
      module.exports = JSON.parse("[{\"id\":1,\"title\":\"Humming\",\"subTitle\":\"mmmmmmm\",\"details\":\"Keep a long face (closed lips & open jaw). Use comfortable pitch. You can also glide-up and down within a comfortable range and hum portions of favorite or recitable tunes such as ‘Happy birthday to you’ for example.\",\"done\":false,\"imageURL\":\"https://www.wikihow.com/images/thumb/a/a7/Exercise-Your-Voice-Step-6-Version-2.jpg/aid29483-v4-728px-Exercise-Your-Voice-Step-6-Version-2.jpg.webp\",\"videoURL\":\"https://www.youtube.com/embed/C8tvyPGTqTg?rel=0\",\"recordingURL\":\"\",\"type\":\"normal\"},{\"id\":2,\"title\":\"Lip Trills\",\"subTitle\":\"brrrrrrrrrrrrr\",\"details\":\"Vibrate your lips together. Use a steady comfortable pitch as well as sliding up and down. Applying gentle finger support on cheeks can be really helpful.\",\"done\":false,\"imageURL\":\"https://www.wikihow.com/images/thumb/6/62/Exercise-Your-Voice-Step-3-Version-2.jpg/aid29483-v4-728px-Exercise-Your-Voice-Step-3-Version-2.jpg.webp\",\"videoURL\":\"\",\"recordingURL\":\"\",\"type\":\"normal\"},{\"id\":3,\"title\":\"Tongue Trills\",\"subTitle\":\"trrrrrrrrrrrrr\",\"details\":\"Vibrate your tongue by making light contact between the tip of your tongue and the region right behind your upper teeth. Usea steady, comfortable pitch aswell as up and down glides.\",\"done\":false,\"imageURL\":\"https://www.wikihow.com/images/thumb/6/6c/Exercise-Your-Voice-Step-2-Version-2.jpg/aid29483-v4-728px-Exercise-Your-Voice-Step-2-Version-2.jpg.webp\",\"videoURL\":\"\",\"recordingURL\":\"\",\"type\":\"normal\"},{\"id\":4,\"title\":\"Straw Phonation\",\"subTitle\":\"bzzzzzzzz\",\"details\":\"Gently seal your lips around a narrow straw and produce a buzz. Use comfortable pitch. You can also slide up and down within a comfortable range and hum portions of favorite tunes.\",\"done\":false,\"imageURL\":\"https://www.wikihow.com/images/thumb/3/38/Exercise-Your-Voice-Step-9-Version-2.jpg/aid29483-v4-728px-Exercise-Your-Voice-Step-9-Version-2.jpg.webp\",\"videoURL\":\"https://www.youtube.com/embed/_urPjSwe5eA?rel=0\",\"recordingURL\":\"\",\"type\":\"normal\"},{\"id\":5,\"title\":\"Z Phonation\",\"subTitle\":\"zzzzzzzzz\",\"details\":\"Gently close your teeth and smile producing a zzzz buzz. Use comfortable pitch. You can also glide-up and down within a comfortable range.\",\"done\":false,\"imageURL\":\"https://www.wikihow.com/images/thumb/8/81/Exercise-Your-Voice-Step-8-Version-2.jpg/aid29483-v4-728px-Exercise-Your-Voice-Step-8-Version-2.jpg.webp\",\"videoURL\":\"https://www.youtube.com/embed/Hc9m-g69q-0?rel=0\",\"recordingURL\":\"\",\"type\":\"normal\"},{\"id\":6,\"title\":\"V Phonation\",\"subTitle\":\"vvvvvvvv\",\"details\":\"Gently touch your lower lip your upper teeth producing a vvvv buzz. Use comfortable pitch. You can also glide-up and down within a comfortable range.\",\"done\":false,\"imageURL\":\"https://www.wikihow.com/images/thumb/9/91/Exercise-Your-Voice-Step-15.jpg/aid29483-v4-728px-Exercise-Your-Voice-Step-15.jpg.webp\",\"videoURL\":\"https://www.youtube.com/embed/fRihlRKIY1E?rel=0\",\"recordingURL\":\"\",\"type\":\"normal\"},{\"id\":7,\"title\":\"Yawn & Sigh\",\"subTitle\":\"ahhh-hhaaa\",\"details\":\"Take in an easy relaxed breath while yawning and then gently expel the air while sighing. You can also sigh while producing vowels, words, and short sentences.\",\"done\":false,\"imageURL\":\"https://www.wikihow.com/images/thumb/7/7c/Exercise-Your-Voice-Step-11-Version-2.jpg/aid29483-v4-728px-Exercise-Your-Voice-Step-11-Version-2.jpg.webp\",\"videoURL\":\"\",\"recordingURL\":\"\",\"type\":\"normal\"},{\"id\":8,\"title\":\"Chew & Hum\",\"subTitle\":\"Mwam-mwam\",\"details\":\"Gently move your jaw around in slow masticating movements You can also ‘chew’ while producing vowels, words, and short sentences.\",\"done\":false,\"imageURL\":\"https://www.wikihow.com/images/thumb/7/78/Exercise-Your-Voice-Step-4-Version-2.jpg/aid29483-v4-728px-Exercise-Your-Voice-Step-4-Version-2.jpg.webp\",\"videoURL\":\"\",\"recordingURL\":\"\",\"type\":\"normal\"},{\"id\":9,\"title\":\"Chant & Resonate\",\"subTitle\":\"Mmm-mmm\",\"details\":\"Gently chant phrases and sentences in a ‘meditation voice’. Nasal utterances should help such as:Men-on-Moon;Mom-in-Morning; Many-Men.\",\"done\":false,\"imageURL\":\"https://www.wikihow.com/images/thumb/e/e8/Exercise-Your-Voice-Step-13.jpg/aid29483-v4-728px-Exercise-Your-Voice-Step-13.jpg.webp\",\"videoURL\":\"\",\"recordingURL\":\"\",\"type\":\"normal\"},{\"id\":10,\"title\":\"Oral Aerobics\",\"subTitle\":\"\",\"details\":\"Gently move your lips, jaw&tongue around, puff your cheeks, blow kisses, click your tongue. You can also produce effortless vowels and syllables as in:/aaa-ooo/ -/iii-ooo/ -/pa-pa-pa/ -/ba-ba-ba/ -/la-la-la/ -/na-na-na/\",\"done\":false,\"imageURL\":\"https://www.wikihow.com/images/thumb/8/89/Exercise-Your-Voice-Step-17.jpg/aid29483-v4-728px-Exercise-Your-Voice-Step-17.jpg.webp\",\"videoURL\":\"\",\"recordingURL\":\"\",\"type\":\"normal\"}]");
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], [{
        defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
      }])["catch"](function (err) {
        return console.log(err);
      });
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map