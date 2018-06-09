import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Headers */
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        HeaderComponent,
    ],
    declarations: [
        HeaderComponent,
    ],
    providers: [],
})
export class SharedModule { }
