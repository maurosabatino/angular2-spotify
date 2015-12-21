import { Injectable } from 'angular2/core';
import { Http, URLSearchParams } from 'angular2/http';
import { SpotifyApi } from './spotify.interface';
import { SearchResponse } from '../entities/response.entity';
import { Artist } from '../entities/artist.entity';
import { SpotifyOptions } from '../entities/spotify-options.entity';
import { DEFAULT_OPTIONS } from './spotify.constants';

@Injectable()
export class SpotifyService implements SpotifyApi {

  private options: SpotifyOptions;

	constructor (private http: Http/*, private options?: SpotifyOptions*/) {
    this.options = DEFAULT_OPTIONS;
  }

  getArtist (id: string): Promise<Artist> {
    return new Promise((resolve, reject) => {
      let endpoint = this.getArtistEndpoint(id);

      this.http.get(endpoint)
        .map(res => res.json())
        .subscribe(response => resolve(response));
    });
  }

	search(text: string, types: Array<string>): Promise<SearchResponse> {
		return new Promise((resolve, reject) => {
      let endpoint     = this.getSearchEndpoint(),
          searchParams = this.getURLSearchParams({
            q: encodeURI(text),
            type: types.join(',')
          }),
          options      = { search: searchParams };

			this.http.get(endpoint, options)
				.map(res => res.json())
				.subscribe(response => resolve(response));
		});
	}

  private getJSONResponse (response) {
    return response.json();
  }

	private getURLSearchParams(params: Object): URLSearchParams {
		let searchParams = new URLSearchParams();

		for (let param in params) {
			if (params.hasOwnProperty(param)) {
				searchParams.set(param, params[param]);
			}
		}

		return searchParams;
	}

  private getArtistEndpoint (id: string) {
    let artist = this.options.endpoints.artist;
    return this.getEndpoint(`${artist}/${id}`);
  }

	private getSearchEndpoint (): string {
		return this.getEndpoint(this.options.endpoints.search);
	}

	private getEndpoint (endpoint: string): string {
		return `${this.options.baseUrl}/${this.options.version}/${endpoint}`;
	}

}
