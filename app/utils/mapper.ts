import { Artist, Album, Track } from '../entities/entities';
import { Injectable } from 'angular2/core';

@Injectable()
export class ResponseMapper {

  responseToArtist (any: any): Artist {
    let artist = new Artist();

    artist.id = any.id;
    artist.name = any.name;
    artist.images = any.images;

    return artist;
  }

  responseToAlbums (response: any): Album[] {
    let items: Array<any> = response.items,
        albums = new Array<Album>();

    items.filter(this.filterAlbumsAvailablesInSpain).forEach(item => {
      let album = new Album();

      album.name = item.name;
      album.images = item.images;

      albums.push(album);
    });

    return albums;
  }

  responseToTracks (response: any): Track[] {
    let tracks = new Array<Track>();

    response.tracks.forEach(item => {
      let track = new Track();

      track.external_urls = item.external_urls;
      track.name = item.name;
      track.popularity = item.popularity;
      track.preview_url = item.preview_url;

      tracks.push(track);
    });

    tracks.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    return tracks;
  }

  responseToArtists (response: any): Artist[] {
    let artists = new Array<Artist>();

    response.artists.forEach(item => {
      artists.push(this.responseToArtist(item));
    });

    return artists;
  }

  private filterAlbumsAvailablesInSpain (album) {
    return album.available_markets.indexOf('ES') !== -1;
  }
}
