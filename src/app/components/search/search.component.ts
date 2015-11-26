import { Component, View, FORM_DIRECTIVES, CORE_DIRECTIVES } from 'angular2/angular2';
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
		<input type="search" (keyup.enter)="search(text)" [(ng-model)]="text"></input>
		<button (click)="search(text)">Search</button>
    
    <div *ng-if="artists?.length > 0">
      <h2>Artists</h2>
      <ul>
        <li *ng-for="#artist of artists">
          <img [src]="artist.images[1].url"></img>
        </li>
      </ul>
    </div>
    
    <albums-list [albums]="albums"></albums-list>
	`,
	directives: [ FORM_DIRECTIVES, AlbumsListComponent, CORE_DIRECTIVES ]
})
export class SpotifySearchComponent {
	text: string;
  albums: Array<Album>;
  artists: Array<Artist>;
  track: Array<Track>;
	
	constructor (private spotify: SpotifyService) {}
	
	search (text: string) {
		this.spotify.search(text, [ 'artist', 'album', 'track' ]).then((response) => {
			//console.log(response);
      this.albums = response.albums.items;
      this.artists = response.artists.items;
			
		});
	}
}