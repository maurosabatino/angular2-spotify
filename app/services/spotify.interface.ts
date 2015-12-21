import { SearchResponse } from '../entities/response.entity';
import { Artist } from '../entities/artist.entity';

export interface SpotifyApi {
	search(text: string, types: Array<string>): Promise<SearchResponse>;
  getArtist(id: string): Promise<Artist>;
}