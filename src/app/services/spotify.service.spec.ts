import { SpotifyService } from './spotify.service';
import { Injector, provide, inject } from 'angular2/angular2';
import { MockBackend, Http, DefaultOptions } from 'angular2/http';

describe('SpotifyService', function () {
	
	it('should call', (done) => {
		var connection;
		let injector = Injector.resolveAndCreate([
			MockBackend,
			DefaultOptions,
			provide(Http, {useFactory: (backend, defaultOptions) => {
				return new Http(backend, defaultOptions)
			}, deps: [MockBackend, DefaultOptions]})]);
		let http = injector.get(Http);
		let backend = injector.get(MockBackend);
		backend.connections.subscribe(c => connection = c);
		connection.mockRespond(new Response({body:'awesome'}));
		
		let service = new SpotifyService(http);
		
		service.search('Izal', ['artist']).then(function (response) {
			expect(response).toBe('awesome');
			done();
		});
		
	}));
	
});