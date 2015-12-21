import { Component } from 'angular2/core';
import { Router, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { ROUTES } from './routes';



@Component({
	selector: 'my-app',
	directives: [ROUTER_DIRECTIVES],
	template: `
		<h1>Spotify</h1>
    <router-outlet></router-outlet>
	`
})
@RouteConfig(ROUTES)
export class AppComponent {

}