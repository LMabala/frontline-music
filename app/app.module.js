"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./components/appComponent/app.component');
var playlist_service_1 = require('./services/playlist/playlist.service');
var player_component_1 = require('./components/playerComponent/player.component');
var song_component_1 = require('./components/songComponent/song.component');
var navbar_component_1 = require('./components/navbarComponent/navbar.component');
var contact_component_1 = require('./components/contactComponent/contact.component');
var home_component_1 = require('./components/homeComponent/home.component');
var footer_component_1 = require('./components/footerComponent/footer.component');
var pageNotFound_component_1 = require('./components/pageNotFoundComponent/pageNotFound.component');
var forms_1 = require('@angular/forms');
var app_routing_1 = require('./routing/app.routing');
var http_1 = require('@angular/http');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_1.routing,
                forms_1.FormsModule
            ],
            declarations: [
                navbar_component_1.NavbarComponent,
                app_component_1.AppComponent,
                player_component_1.PlayerComponent,
                song_component_1.SongComponent,
                home_component_1.HomeComponent,
                contact_component_1.ContactComponent,
                footer_component_1.FooterComponent,
                pageNotFound_component_1.PageNotFoundComponent
            ],
            providers: [
                playlist_service_1.PlaylistService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map