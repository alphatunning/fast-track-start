import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common"
import { Http, HttpModule } from '@angular/http';

/* Modules */
import { CarouselModule , AlertModule } from 'ngx-bootstrap';

/* Components */
import { CarouselComponent } from './carousel/carousel.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
  	CarouselModule,
  	AlertModule
  ],
  declarations: [
	CarouselComponent,
	AlertComponent
  ],
  exports: [
	CarouselComponent,
	AlertComponent
  ]
})
export class ComponentsModule { }
