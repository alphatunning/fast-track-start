import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"
import { RouterModule, Routes } from '@angular/router';

/* Components Module */
import { ComponentsModule } from '../components/components.module';

/* Components (Pages) */
import { HomeComponent } from './home-page/home.component';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { DesignPageComponent } from './design-page/design-page.component';

@NgModule({
    imports: [
        RouterModule,
        ComponentsModule,
        CommonModule
    ],
    exports: [
        HomeComponent,
        ComponentsPageComponent,
        DesignPageComponent
    ],
    declarations: [
        HomeComponent,
        ComponentsPageComponent,
        DesignPageComponent,
    ],
    providers: []
})
export class PagesModule { }