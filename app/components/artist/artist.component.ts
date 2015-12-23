import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { ArtistsService } from '../../services/artists.service';
import { Artist, Album, Track } from '../../entities/entities';
import { AlbumsListComponent } from '../albums-list/albums-list.component';

@Component({
  selector: 'artist',
  template: `
    <div *ngIf="artist">
      <h1>{{artist.name}}</h1>
      <img [src]="artist.images[0].url"/>
    </div>
    <div *ngIf="albums?.length > 0">
      <albums-list [albums]="albums"></albums-list>
    </div>
    <div *ngIf="topTracks?.length > 0">
      <h1>Top Tracks</h1>
      <div *ngFor="#track of topTracks">
        <span>{{track.name}}</span>
        <audio controls>
          <source [src]="track.preview_url" type="audio/mp3">
        </audio>
      </div>
    </div>
    <div *ngIf="relatedArtists?.length > 0">
      <h1>Related artists</h1>

      <div *ngFor="#artist of relatedArtists">
        <span>{{artist.name}}</span>
      </div>
    </div>
  `,
  directives: [ AlbumsListComponent ]
})
export class ArtistComponent implements OnInit {
  private artist: Artist;
  private albums: Array<Album>;
  private topTracks: Array<Track>;
  private relatedArtists: Array<Artist>;

  constructor (private _artistsService: ArtistsService, private routeParams: RouteParams) {}

  ngOnInit () {
    let artistId = this.routeParams.params['id'];

    // Gets artist's info
    this._artistsService.getArtist(artistId)
      .subscribe(artist => this.artist = artist);
    // Gets artist's albums
    this._artistsService.getArtistAlbums(artistId)
      .subscribe(albums => this.albums = albums);
    // Gets artist's top tracks
    this._artistsService.getArtistTopTracks(artistId)
      .subscribe(topTracks => this.topTracks = topTracks);
    // Gets artist's related artists
    this._artistsService.getArtistRelatedArtists(artistId)
      .subscribe(relatedArtists => this.relatedArtists = relatedArtists);

  }

}
