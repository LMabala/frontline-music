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
var track_1 = require('../../classes/track');
var http_1 = require('@angular/http');
var core_2 = require('@angular/core');
var SongComponent = (function () {
    function SongComponent(_http) {
        this._http = _http;
        this.onChange = new core_1.EventEmitter();
        this.pressed = false;
        this.onDownload = new core_1.EventEmitter();
        this.downloading = false;
    }
    SongComponent.prototype.change = function (press) {
        this.onChange.emit(press);
        this.pressed = true;
    };
    SongComponent.prototype.download = function (dLoad, song) {
        this.onDownload.emit(dLoad);
        this.downloading = true;
        this.fileUrl = "http://localhost:3003/download/" + this.getFileName(song.location);
        console.log(this.fileUrl);
        return this._http.get(this.fileUrl);
    };
    SongComponent.prototype.getFileName = function (loc) {
        return loc.split("/")[loc.split("/").length - 1];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', track_1.Track)
    ], SongComponent.prototype, "track", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', track_1.Track)
    ], SongComponent.prototype, "playing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SongComponent.prototype, "onChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SongComponent.prototype, "onDownload", void 0);
    SongComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'song',
            templateUrl: 'song.component.html',
            styleUrls: ['song.component.css']
        }),
        core_2.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SongComponent);
    return SongComponent;
}());
exports.SongComponent = SongComponent;
//# sourceMappingURL=song.component.js.map