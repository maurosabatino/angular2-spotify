import { ResponseType } from './search-type.interface';
import { Album } from './album.entity';

export class SearchResponse {
	albums: ResponseType<Album>;
}