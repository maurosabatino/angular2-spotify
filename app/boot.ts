import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { SpotifyService } from './services/spotify.service';
import { AppComponent } from './app.component';
import 'rxjs/add/operator/map';

bootstrap(AppComponent, [ ROUTER_PROVIDERS, HTTP_PROVIDERS, SpotifyService ]);
