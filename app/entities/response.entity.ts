import { ResponseType } from './search-type.interface';
import { Album } from './album.entity';
import { Artist } from './artist.entity';

export class SearchResponse {
	albums:  ResponseType<Album>;
  artists: ResponseType<Artist>;
}