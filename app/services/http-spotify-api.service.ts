import { Http, RequestOptionsArgs, Response } from 'angular2/http';
import { Observable } from 'rxjs';
import { SpotifyOptions } from '../entities/spotify-options.entity';
import { DEFAULT_OPTIONS } from './spotify.constants';
import { Injectable } from 'angular2/core';

@Injectable()
export class HttpSpotifyApi {

  private baseUrl: string;

  constructor (private _http: Http) {
    let host = DEFAULT_OPTIONS.baseUrl,
        version = DEFAULT_OPTIONS.version;

    this.baseUrl = `${host}/${version}`;
  }

  get (url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._http.get(this.getApiUrl(url), options)
      .map(res => res.json());
  }

  private getApiUrl (url: string): string {
    return this.baseUrl + url;
  }

}
