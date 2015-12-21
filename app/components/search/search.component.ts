import { Component, View } from 'angular2/core';
import { Router } from 'angular2/router';
import { SpotifyService} from '../../services/spotify.service';
import { Album } from '../../entities/album.entity';
import { Artist } from '../../entities/artist.entity';
import { Track } from '../../entities/track.entity';
import { AlbumsListComponent } from '../albums-list/albums-list.component';

@Component({
	selector: 'spotify-search',
	providers: [ SpotifyService ]
})
@View({
	template: `
		<input type="search" (keyup.enter)="search(text)" [(ngModel)]="text"/>
		<button (click)="search(text)">Search</button>
    
    <div *ngIf="artists?.length > 0">
      <h2>Artists</h2>
      <ul>
        <li (click)="goToArtistPage(artist.id)" *ngFor="#artist of artists">
          <img [src]="artist.images[1].url"/>
        </li>
      </ul>
    </div>
    
    <albums-list [albums]="albums"></albums-list>
	`,
	directives: [ AlbumsListComponent ]
})
export class SpotifySearchComponent {
	text: string;
  albums: Array<Album>;
  artists: Array<Artist>;
  track: Array<Track>;
	
	constructor (private spotify: SpotifyService, private router: Router) {}
	
	search (text: string) {
		this.spotify.search(text, [ 'artist', 'album', 'track' ]).then((response) => {
			//console.log(response);
      this.albums = response.albums.items;
      this.artists = response.artists.items;
			
		});
	}
  
  goToArtistPage (id: string) {
    this.router.navigate(['/Artist', { id: id }]);
  }
}