import { bootstrap }          from 'angular2/platform/browser';
import { HTTP_PROVIDERS }     from 'angular2/http';
import { ROUTER_PROVIDERS }   from 'angular2/router';
import { SPOTIFY_PROVIDERS }  from './services/spotify-services';
import { AppComponent }       from './app.component';
import 'rxjs/add/operator/map';

bootstrap(AppComponent, [ ROUTER_PROVIDERS, HTTP_PROVIDERS, SPOTIFY_PROVIDERS ]);
