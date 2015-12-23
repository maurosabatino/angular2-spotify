import { Observable } from 'rxjs';
import { Artist, Album, Track } from '../entities/entities';

/**
 * All the documentation is from Spotify's Web Api page.
 */
export interface IArtistsService {

  /**
   * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
   * @param  {string}             id [description]
   * @return {Observable<Artist>}    [description]
   */
  getArtist (id: string): Observable<Artist>;

  /**
   * Get Spotify catalog information for several artists based on their Spotify IDs.
   * @param  {string[]}             ids [description]
   * @return {Observable<Artist[]>}     [description]
   */
  getArtists (ids: string[]): Observable<Artist[]>;

  /**
   * Get Spotify catalog information about an artist’s albums.
   * Optional parameters can be specified in the query string to filter and sort the response.
   * @param  {string}              id [description]
   * @return {Observable<Album[]>}    [description]
   */
  getArtistAlbums (id: string): Observable<Album[]>;

  /**
   * Get Spotify catalog information about an artist’s top tracks by country.
   * @param  {string}              id      [description]
   * @param  {string}              country [description]
   * @return {Observable<Track[]>}         [description]
   */
  getArtistTopTracks (id: string, country: string): Observable<Track[]>;

  /**
   * Get Spotify catalog information about artists similar to a given artist.
   * Similarity is based on analysis of the Spotify community’s listening history.
   * @param  {string}               id [description]
   * @return {Observable<Artist[]>}    [description]
   */
  getArtistRelatedArtists (id: string): Observable<Artist[]>;

}
