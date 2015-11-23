import { SearchResponse } from '../entities/response.entity';

export interface SpotifyApi {
	search(text: string, types: Array<string>): Promise<SearchResponse>;
}