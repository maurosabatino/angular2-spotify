import { Component, View, FORM_DIRECTIVES } from 'angular2/angular2';
import { SpotifyService} from '../../services/spotify.service';

@Component({
	selector: 'spotify-search',
	providers: [ SpotifyService ]
})
@View({
	template: `
		<input type="text" [(ng-model)]="text"></input>
		{{text}}
		<button (click)="search(text)">Search</button>
	`,
	directives: [ FORM_DIRECTIVES ]
})
export class SpotifySearchComponent {
	text: string;
	
	constructor (private spotify: SpotifyService) {}
	
	search (text: string) {
		this.spotify.search(text, [ 'artist' ]).then(function (response) {
			console.log(response);
			
		});
	}
}