import { Component, View, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../entities/artist.entity';

@Component({
  selector: 'artist'
})
@View({
  template: `
    <p *ngIf="error">Ha ocurrido un error</p>
    <div *ngIf="artist">
      <h1>{{artist.name}}</h1>
      <img [src]="artist.images[0].url"/>
    </div>
  `
})
export class ArtistComponent implements OnInit {
  private error: boolean;
  private artist: Artist;

  constructor (private spotifyService: SpotifyService, private routeParams: RouteParams) {
    console.log(routeParams);
  }

  ngOnInit () {
    this.spotifyService.getArtist(this.routeParams.params['id'])
      .subscribe(artist => this.artist = artist);
  }

}
