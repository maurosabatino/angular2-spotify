import { Injectable } from 'angular2/angular2';
import { Http, URLSearchParams } from 'angular2/http';
import { SpotifyApi } from './spotify.interface';
import { SearchResponse } from '../entities/response.entity';
import { SpotifyOptions } from '../entities/spotify-options.entity';
import { DEFAULT_OPTIONS } from './spotify.constants';

@Injectable()
export class SpotifyService implements SpotifyApi {
	options: SpotifyOptions;
  
	constructor (private http: Http/*, private options?: SpotifyOptions = DEFAULT_OPTIONS*/) {
		this.options = DEFAULT_OPTIONS;
	}
	
	search(text: string, types: Array<string>): Promise<SearchResponse> {
		return new Promise((resolve, reject) => {
      let endpoint     = this.getSearchEndpoint(),
          searchParams = this.getURLSearchParams({ 
            q: text, 
            type: types.join(',')
          }),
          options      = { search: searchParams };
          
			this.http.get(endpoint, options) 
				.map(res => res.json())
				.subscribe(response => resolve(response));
		});
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