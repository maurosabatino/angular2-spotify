import { Observable } from 'rxjs';
import { Artist, Album, SearchResponse } from '../entities/entities';

export interface ISpotifyService {
	search(text: string, types: Array<string>): Observable<SearchResponse>;
  getArtist(id: string): Observable<Artist>;
}
