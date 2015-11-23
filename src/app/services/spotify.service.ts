import { Injectable } from 'angular2/angular2';
import { Http, URLSearchParams } from 'angular2/http';
import { SpotifyApi } from './spotify.interface';
import { SearchResponse } from '../entities/response.entity';
import { SpotifyOptions } from '../entities/spotify-options.entity';
import { DEFAULT_OPTIONS } from './spotify.constants';

@Injectable()
export class SpotifyService implements SpotifyApi {
	
	constructor (private http: Http/*, private options?: SpotifyOptions = DEFAULT_OPTIONS*/) {
		this.options = DEFAULT_OPTIONS;
	}
	
	search(text: string, types: Array<string>): Promise<SearchResponse> {
		return new Promise(function (resolve, reject) {
			this.http.get(this.getSearchEndpoint(), this.getURLSearchParams({ 
					q: string, 
					type: types.join(',')
				}))
				.map(res => res.json())
				.subscribe(response => resolve(response));
		}.bind(this));
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
	
	private getSearchEndpoint (): string {
		return this.getEndpoint(this.options.endpoints.search);
	}

	private getEndpoint (endpoint: string): string {
		return `${this.options.baseUrl}/${this.options.version}/${endpoint}`;
	}
	
}