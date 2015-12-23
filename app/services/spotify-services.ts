import { HttpSpotifyApi } from './http-spotify-api.service';
import { SpotifyService } from './spotify.service';
import { ArtistsService } from './artists.service';
import { ResponseMapper } from '../utils/mapper';

export const SPOTIFY_PROVIDERS: any[] = [
  HttpSpotifyApi,
  SpotifyService,
  ArtistsService,
  ResponseMapper
]
