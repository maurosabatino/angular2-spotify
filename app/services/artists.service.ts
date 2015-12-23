import { Artist, Album, Track } from '../entities/entities';
import { HttpSpotifyApi }       from './http-spotify-api.service';
import { IArtistsService }      from './artists.interface';
import { Injectable }           from 'angular2/core';
import { Observable }           from 'rxjs';
import { ResponseMapper }       from '../utils/mapper';
import { URLSearchParams }      from 'angular2/http';

@Injectable()
export class ArtistsService implements IArtistsService {

  constructor (private _httpSpotifyApi: HttpSpotifyApi, private _mapper: ResponseMapper) {}

  /**
   * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
   * @param  {string}             id [description]
   * @return {Observable<Artist>}    [description]
   */
  getArtist (id: string): Observable<Artist> {
    return this._httpSpotifyApi.get(`/artists/${id}`)
      .map(res => this._mapper.responseToArtist(res));
  }

  /**
   * Get Spotify catalog information for several artists based on their Spotify IDs.
   * @param  {string[]}             ids [description]
   * @return {Observable<Artist[]>}     [description]
   */
  getArtists (ids: string[]): Observable<Artist[]> {
    let params = new URLSearchParams();
    params.set('ids', ids.join(','));

    return this._httpSpotifyApi.get(`/artists`, { search: params })
      .map(res => this._mapper.responseToArtists(res));
  }

  /**
   * Get Spotify catalog information about an artist’s albums.
   * Optional parameters can be specified in the query string to filter and sort the response.
   * @param  {string}              id [description]
   * @return {Observable<Album[]>}    [description]
   */
  getArtistAlbums (id: string): Observable<Album[]> {
    return this._httpSpotifyApi.get(`/artists/${id}/albums`)
      .map(res => this._mapper.responseToAlbums(res));
  }

  /**
   * Get Spotify catalog information about an artist’s top tracks by country.
   * @param  {string}              id      [description]
   * @param  {string}              country [description]
   * @return {Observable<Track[]>}         [description]
   */
  getArtistTopTracks (id: string, country: string = 'ES'): Observable<Track[]> {
    let params = new URLSearchParams();
    params.set('country', country);

    return this._httpSpotifyApi.get(`/artists/${id}/top-tracks`, { search: params })
      .map(res => this._mapper.responseToTracks(res));
  }

  /**
   * Get Spotify catalog information about artists similar to a given artist.
   * Similarity is based on analysis of the Spotify community’s listening history.
   * @param  {string}               id [description]
   * @return {Observable<Artist[]>}    [description]
   */
  getArtistRelatedArtists (id: string): Observable<Artist[]> {
    return this._httpSpotifyApi.get(`/artists/${id}/related-artists`)
      .map(res => this._mapper.responseToArtists(res));
  }

}
