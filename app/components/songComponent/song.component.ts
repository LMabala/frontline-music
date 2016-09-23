import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Track } from '../../classes/track';
import { Http, Response } from '@angular/http';
import { Injectable }     from '@angular/core';
@Component({
  moduleId:module.id,
  selector:'song',
  templateUrl:'song.component.html',
  styleUrls:['song.component.css']
})

@Injectable()
export class SongComponent{

  @Input() track : Track;
  @Input() playing : Track;
  @Output() onChange = new EventEmitter<boolean>();
  pressed = false;
  change(press: boolean){
    this.onChange.emit(press);
    this.pressed = true;
  }
  @Output() onDownload = new EventEmitter<boolean>();
  downloading = false;
  len:number;
  fileName:string;
  fileUrl:string;
  constructor(private _http:Http){

  }
  download(dLoad : boolean , song : Track){
    this.onDownload.emit(dLoad);
    this.downloading = true;
    this.fileUrl = "http://localhost:3003/download/" + this.getFileName(song.location);
    console.log(this.fileUrl);
    return this._http.get(this.fileUrl);
  }
  getFileName(loc:string){
    return loc.split("/")[loc.split("/").length - 1];
  }
}
