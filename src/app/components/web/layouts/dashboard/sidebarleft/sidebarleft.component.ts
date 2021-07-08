import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-sidebarleft',
    templateUrl: './sidebarleft.component.html',
    styleUrls: ['../dashboard.component.scss']
})
export class SidebarleftComponent implements OnInit {
    styleDash: string;
    par1 = 1;
    selectedOK: boolean;
    selected: string;
    selected1: string;
    selected2: string;
    selected3: string;
    display: string;
    display1: string;
    display2: string;
    display3: string;

    constructor(private element: ElementRef, private router: Router) {
    }

    dash(num: number) {
        this.par1 = this.par1 + num;
        if (this.par1 % 2 === 0) {
            this.styleDash = 'sidebar-mini';
        } else {
            this.styleDash = '';
        }
    }

    logout() {
        localStorage.clear()
    }

    menuSelected(id: any) {
        if (id === 1) {
            this.selected = 'nav-item dropdown active';
            this.display = 'display: block;'
            this.display1 = 'display: none;'
            this.display2 = 'display: none;'
            this.display3 = 'display: none;'
            this.selected1 = 'nav-item dropdown';
            this.selected2 = 'nav-item dropdown';
            this.selected3 = 'nav-item dropdown';
        }
        if (id === 2) {
            this.selected = 'nav-item dropdown';
            this.selected1 = 'nav-item dropdown active';
            this.display1 = 'display: block;'
            this.display = 'display: none;'
            this.display2 = 'display: none;'
            this.display3 = 'display: none;'
            this.selected2 = 'nav-item dropdown';
            this.selected3 = 'nav-item dropdown';
        }
        if (id === 3) {
            this.selected = 'nav-item dropdown';
            this.selected1 = 'nav-item dropdown';
            this.selected2 = 'nav-item dropdown active';
            this.display2 = 'display: block;'
            this.display = 'display: none;'
            this.display1 = 'display: none;'
            this.display3 = 'display: none;'
            this.selected3 = 'nav-item dropdown';
        }
        if (id === 4) {
            this.selected = 'nav-item dropdown';
            this.selected1 = 'nav-item dropdown';
            this.selected3 = 'nav-item dropdown active';
            this.display3 = 'display: block;'
            this.display2 = 'display: none;'
            this.display1 = 'display: none;'
            this.display = 'display: none;'
            this.selected2 = 'nav-item dropdown';
        }
    }

    isHome() {
            this.selectedOK = true;
    }

    ngOnInit(): void {
        this.menuSelected(1);
        this.isHome();
    }

}
