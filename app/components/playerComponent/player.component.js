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
var core_1 = require("@angular/core");
var playlist_service_1 = require('../../services/playlist/playlist.service');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var PlayerComponent = (function () {
    function PlayerComponent(_playlistService) {
        this._playlistService = _playlistService;
        this.durationMinutes = 0;
        this.durationSeconds = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.playBtn = "glyphicon-play-circle";
        this.pauseBtn = "glyphicon-pause";
        this.btn = this.playBtn;
        this.load = false;
        this.active = "active";
        this.playlist = _playlistService.getPlaylist();
        this.playing = this.playlist[0];
    }
    PlayerComponent.prototype.seekUpdate = function (audio, slider) {
        if (this.seeking) {
            this.seekTo = audio.duration * (slider.value / 100);
            audio.currentTime = this.seekTo;
        }
    };
    PlayerComponent.prototype.timeUpdate = function (audio, slider) {
        this.newTime = audio.currentTime * (100 / audio.duration);
        slider.value = this.newTime;
        this.minutes = Math.floor(parseFloat(audio.currentTime) / 60);
        this.seconds = Math.floor(audio.currentTime - this.minutes * 60);
    };
    PlayerComponent.prototype.playPause = function (audio) {
        this.duration(audio);
        if (audio.paused) {
            this.btn = this.pauseBtn;
            audio.play();
        }
        else {
            this.btn = this.playBtn;
            audio.pause();
        }
    };
    PlayerComponent.prototype.mouseDown = function () {
        this.seeking = true;
    };
    PlayerComponent.prototype.mouseUp = function () {
        this.seeking = false;
    };
    PlayerComponent.prototype.duration = function (audio) {
        this.durationMinutes = Math.floor(parseFloat(audio.duration) / 60);
        this.durationSeconds = Math.floor(audio.duration - this.durationMinutes * 60);
    };
    PlayerComponent.prototype.play = function (audio, song) {
        this.btn = this.pauseBtn;
        this.duration(audio);
        this.playing = song;
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    };
    PlayerComponent.prototype.forward = function (audio) {
        this.changeTrack(audio);
    };
    PlayerComponent.prototype.rewind = function (audio) {
        this.btn = this.pauseBtn;
        if (this.playing.id === 0) {
            this.next(0);
        }
        else {
            this.next(this.playing.id - 1);
        }
        audio.pause();
        audio.currentTime = 0;
        this.play(audio, this.playing);
    };
    PlayerComponent.prototype.download = function (song) {
        var _this = this;
        this.load = true;
        console.log("Downloading....");
        console.log(song);
        setTimeout(function () {
            _this.load = false;
        }, 1000);
    };
    PlayerComponent.prototype.changeTrack = function (audio) {
        this.btn = this.pauseBtn;
        if (this.playing.id === this.numberOfTracks - 1) {
            this.next(0);
        }
        else {
            this.next(this.playing.id + 1);
        }
        audio.pause();
        audio.currentTime = 0;
        this.play(audio, this.playing);
    };
    PlayerComponent.prototype.next = function (id) {
        this.playing = this.playlist[id];
    };
    PlayerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'player',
            templateUrl: 'player.component.html',
            styleUrls: ['player.component.css', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'],
            providers: [playlist_service_1.PlaylistService]
        }), 
        __metadata('design:paramtypes', [playlist_service_1.PlaylistService])
    ], PlayerComponent);
    return PlayerComponent;
}());
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=player.component.js.map