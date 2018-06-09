import { Component } from '@angular/core';

declare var $ : any;

@Component({
	selector: 'header-pages',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.scss']
})

export class HeaderComponent {
	constructor() { }

	openSidenav() {
		var menu = JSON.parse(localStorage.getItem("openedMenu"));
		$("#sidenav").toggleClass("expanded");
		$('.overlay').removeClass("close");
		$('.overlay').addClass("open");
		$('body').addClass("page-body-block");
		localStorage.setItem("openedMenu", JSON.stringify(true));
	}
}