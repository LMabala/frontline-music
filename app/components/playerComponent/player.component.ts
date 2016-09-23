import { Component , Input } from "@angular/core";
import { PlaylistService } from '../../services/playlist/playlist.service';
import { Track } from '../../classes/track';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Response } from '@angular/http';
@Component({
  moduleId:module.id,
  selector:'player',
  templateUrl:'player.component.html',
  styleUrls:['player.component.css','https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'],
  providers:[PlaylistService]

})

export class PlayerComponent {
  playing : Track;
  seekTo:number;
  newTime:number;
  seeking:boolean;
  playlist:Track [];
  durationMinutes:number = 0;
  durationSeconds:number = 0;
  numberOfTracks:number;
  minutes:number = 0;
  seconds:number = 0;
  playBtn:string = "glyphicon-play-circle";
  pauseBtn:string = "glyphicon-pause"
  btn:string = this.playBtn;
  load:boolean = false;
  active="active";
  constructor(private _playlistService:PlaylistService){
    this.playlist =  _playlistService.getPlaylist();
    this.playing  = this.playlist[0];
  }


  seekUpdate(audio : any , slider: any){
    if(this.seeking){

      this.seekTo = audio.duration*(slider.value/100);
      audio.currentTime = this.seekTo;
    }
}

  timeUpdate(audio : any, slider: any){
    this.newTime = audio.currentTime*(100/audio.duration);
    slider.value = this.newTime;
    this.minutes = Math.floor(parseFloat(audio.currentTime)/60);
    this.seconds = Math.floor(audio.currentTime - this.minutes*60);
  }

  playPause(audio : any){
    this.duration(audio);
    if(audio.paused){
      this.btn = this.pauseBtn;
      audio.play();
    }else{
      this.btn = this.playBtn;
      audio.pause();
    }
  }

  mouseDown(){
    this.seeking = true;

  }
  mouseUp(){
    this.seeking = false;
  }
  duration(audio:any){
    this.durationMinutes = Math.floor(parseFloat(audio.duration)/60);
    this.durationSeconds = Math.floor(audio.duration - this.durationMinutes*60);
  }
  play(audio : any, song:Track){
      this.btn = this.pauseBtn;
      this.duration(audio);
      this.playing = song;
      audio.pause();
      audio.currentTime = 0;
      audio.play();
  }
  forward(audio:any){
    this.changeTrack(audio);
  }
  rewind(audio:any){
    this.btn = this.pauseBtn;
    if(this.playing.id === 0 ){
      this.next(0);
    }else{
      this.next(this.playing.id - 1);
    }
    audio.pause();
    audio.currentTime = 0;
    this.play(audio,this.playing);

  }

  download(song:Track){
    this.load = true;
    console.log("Downloading....")
    console.log(song);
    setTimeout(()=>{
      this.load = false;
    },1000);
  }

  changeTrack(audio : any){
    this.btn = this.pauseBtn;
    if(this.playing.id === this.numberOfTracks - 1){
      this.next(0);
    }else{
      this.next(this.playing.id + 1);
    }
    audio.pause();
    audio.currentTime = 0;
    this.play(audio,this.playing);
  }

  next(id:number){
    this.playing = this.playlist[id];
  }




}
