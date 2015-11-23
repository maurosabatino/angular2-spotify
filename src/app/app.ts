import { bootstrap, Component } from 'angular2/angular2';
import { HTTP_PROVIDERS } from 'angular2/http';
import { SpotifySearchComponent } from './components/search/search.component';

@Component({
	selector: 'my-app',
	directives: [SpotifySearchComponent],
	template: `
		<h1>My Angular2 App</h1>
		<spotify-search></spotify-search>
	`
})
class AppComponent {

}

bootstrap(AppComponent, [HTTP_PROVIDERS]);