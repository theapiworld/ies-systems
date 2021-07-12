import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-maincontainer',
    templateUrl: './maincontainer.component.html',
    styleUrls: ['../dashboard.component.scss']
})
export class MaincontainerComponent implements OnInit {
    resultado = {};

    constructor() {
    }

    ngOnInit() {
        const array = [{value: 1, name: 'CampoUno'}, {value: 2, name: 'CampoDos'}, {
            value: 3,
            name: 'CampoTres'
        }, {value: 4, name: 'CampoCuatro'}, {value: 5, name: 'CampoCinco'}, {value: 6, name: 'CampoSeis'},];
        this.resultado = {CampoUno: 1, CampoDos: 2, CampoTres: 3, CampoCuatro: 4, CampoCinco: 5, CampoSeis: 6}

    }
}
