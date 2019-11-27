import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { httpInterceptorProviders } from './interceptor/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OMDBService } from './services/omdb.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  providers: [httpInterceptorProviders, OMDBService],
  bootstrap: [AppComponent]
})
export class AppModule {}
