import { Component } from '@angular/core';
import { OMDBService } from './services/omdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  landingResponse = {};
  constructor(private omdbService: OMDBService) {
    this.omdbService.getMoviesList().subscribe(res => (this.landingResponse = res));
  }
  title = 'OMDB-Angular';
}
