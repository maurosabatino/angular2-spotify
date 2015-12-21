import { RouteDefinition } from 'angular2/router';
import { SpotifySearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

export const ROUTE_NAMES = {
  search: 'Search',
  artist:   'Artist'
}

export const ROUTES: RouteDefinition[] = [
  //{path: '/', redirectTo: [ROUTE_NAMES.search] },
  {path: '/search', useAsDefault: true, name: ROUTE_NAMES.search, component: SpotifySearchComponent},
  {path: '/artist/:id', name: ROUTE_NAMES.artist, component: ArtistComponent}
];