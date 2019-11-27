import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.styl']
})
export class LandingPageComponent implements OnInit {
  @Input() landingResponse: object;
  constructor() {}

  ngOnInit() {
    console.log('df', this.landingResponse);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.landingResponse = changes.landingResponse.currentValue;
    console.log(this.landingResponse);
  }
}
