import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrls: ['./landing-page.component.styl'],
})
export class LandingPageComponent implements OnInit {
	@Input() landingResponse;
	@Input() searchValue: string;
	constructor() {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges): void {
		this.landingResponse = changes.landingResponse.currentValue;
	}
}
