import { Component } from '@angular/core';

import { Service } from '../../service.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent {

	cursos: string[] = [];
	ifTrue: boolean = false;

	constructor(private service: Service) {}

	ngOnInit() {
		this.cursos = this.service.getCursos();
	}

	onClick() {
		this.ifTrue = !this.ifTrue;
	}
    
}