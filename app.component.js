System.register(['@angular/core', '@angular/forms', './services/search.service', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, forms_1, search_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (search_service_1_1) {
                search_service_1 = search_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(searchService, fb) {
                    this.searchService = searchService;
                    this.fb = fb;
                    this.searchField = new forms_1.FormControl();
                    this.coolForm = fb.group({ search: this.searchField });
                }
                AppComponent.prototype.getUsers = function () {
                    var _this = this;
                    this.searchService.getUser()
                        .subscribe(function (result) {
                        _this.user = result.user1;
                        console.log(_this.user.name);
                        _this.name = _this.user.name;
                    });
                };
                AppComponent.prototype.search = function () {
                    var _this = this;
                    this.searchService.search(this.searchField.value)
                        .subscribe(function (result) {
                        _this.result = result.artists.items;
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n\t\t<form [formGroup]=\"coolForm\">\n\t\t  <input formControlName=\"search\" placeholder=\"Search Spotify artist\">\n\t\t  <input (click)=\"search()\" type=\"submit\" value=\"SearchFor Spotify Artist\">\n\t\t   <input (click)=\"getUsers()\" type=\"submit\" value=\"User1Data\">\n\t\t</form>\n\t\t\n\t\t<div *ngFor=\"let artist of result\">\n\t\t  {{artist.name}}\n\t\t</div>\n\t\t<div>\n\t\t  {{name}}\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [search_service_1.SearchService, (typeof (_a = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _a) || Object])
                ], AppComponent);
                return AppComponent;
                var _a;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map