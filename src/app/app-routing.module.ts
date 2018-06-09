import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components (Pages) */
import { HomeComponent } from "./pages/home-page/home.component";
import { ComponentsPageComponent } from "./pages/components-page/components-page.component";
import { DesignPageComponent } from "./pages/design-page/design-page.component";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'components-page',
        component: ComponentsPageComponent
    },
    {
        path: 'design-page',
        component: DesignPageComponent
    },
    {  
        path: '**', 
        component: HomeComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}