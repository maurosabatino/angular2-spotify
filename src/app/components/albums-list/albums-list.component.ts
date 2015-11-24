import { Component, View, Input, NgIf, NgFor } from 'angular2/angular2';
import { Album } from '../../entities/album.entity';

@Component({
  selector: 'albums-list'
})
@View({
  templateUrl: 'app/components/albums-list/albums-list.html',
  styleUrls: ['app/components/albums-list/albums-list.css'],
  directives: [ NgIf, NgFor ]
})
export class AlbumsListComponent {
  
  @Input()
  albums: Array<Album>;
  
}