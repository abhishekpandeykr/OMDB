import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OMDBService } from './services/omdb.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.styl'],
})
export class AppComponent {
	landingResponse = [];
	searchValue = new FormControl('');
	constructor(private omdbService: OMDBService) {
		this.omdbService.getMoviesList().subscribe((res) => {
			this.landingResponse.push(res);
			console.log(res, this.landingResponse);
		});
		this.searchValue.valueChanges.subscribe((res) => {
			this.omdbService.getSearchMovies(res).subscribe((res) => {
				this.landingResponse = [];
				// console.log(res['Search']);
				this.landingResponse.push(...res['Search']);
			});
		});
	}
	title = 'OMDB-Angular';
}
