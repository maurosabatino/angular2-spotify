	import { SpotifyOptions } from '../entities/spotify-options.entity';
	
	export const DEFAULT_OPTIONS: SpotifyOptions = new SpotifyOptions(
		'https://api.spotify.com',
		'v1',
		{
			search: 'search'
		}
	);