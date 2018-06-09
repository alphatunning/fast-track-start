import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { Service } from './service.service';

/* Modules*/
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule , AlertModule } from 'ngx-bootstrap';

import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		HttpModule,
		AppRoutingModule,
		CarouselModule.forRoot(),
		AlertModule.forRoot(),
		BrowserModule,
		PagesModule,
		SharedModule
	],
	exports: [],
	providers: [Service],
	bootstrap: [AppComponent]
})
export class AppModule { }