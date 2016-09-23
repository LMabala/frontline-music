import {Injectable} from "@angular/core";
import { Track } from '../../classes/track'
import { Http, Response } from '@angular/http';
import { TRACKS } from './playlist'
import 'rxjs/add/operator/toPromise';
@Injectable()
export class PlaylistService {
  playlist:Track [] = [];
  test : any;
  constructor(private _http:Http){
  }

  getPlaylist(){
    return TRACKS;
    }
}
