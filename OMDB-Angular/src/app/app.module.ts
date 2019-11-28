import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';

import { httpInterceptorProviders } from './interceptor/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OMDBService } from './services/omdb.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

@NgModule({
	declarations: [AppComponent, LandingPageComponent, HeaderComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		MatCardModule,
		MatInputModule,
		MatGridListModule,
	],
	providers: [httpInterceptorProviders, OMDBService],
	bootstrap: [AppComponent],
})
export class AppModule {}
