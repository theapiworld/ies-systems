import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-maincontainer',
    templateUrl: './maincontainer.component.html',
    styleUrls: ['../dashboard.component.scss']
})
export class MaincontainerComponent implements OnInit {
    resultadoFin: any = {}
    key = {};

    constructor() {
    }

    ngOnInit() {
        const array = [
            {value: 1, name: 'CampoUno'},
            {value: 2, name: 'CampoDos'},
            {value: 3, name: 'CampoTres'}, {value: 4, name: 'CampoCuatro'}, {value: 5, name: 'CampoCinco'}, {
                value: 6,
                name: 'CampoSeis'
            },];

        for(let elemento of array){
            this.resultadoFin[elemento.name] = elemento.value;
        }

        const arreglo = [];
        for (let index in this.resultadoFin) {
            arreglo.push({
               value: this.resultadoFin[index],
                name: index,
            });
        }
        console.log(this.resultadoFin)
        console.log(arreglo);
    }
}
