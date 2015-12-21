import { Component, View, Input } from 'angular2/core';
import { Album } from '../../entities/album.entity';

@Component({
  selector: 'albums-list'
})
@View({
  templateUrl: 'app/components/albums-list/albums-list.html',
  styleUrls: ['app/components/albums-list/albums-list.css'],
  directives: []
})
export class AlbumsListComponent {
  
  @Input()
  albums: Array<Album>;
  
}