import { Observable} from 'rxjs';
import { SearchResponse } from '../entities/response.entity';
import { Artist } from '../entities/artist.entity';

export interface ISpotify {
	search(text: string, types: Array<string>): Observable<SearchResponse>;
  getArtist(id: string): Observable<Artist>;
}
