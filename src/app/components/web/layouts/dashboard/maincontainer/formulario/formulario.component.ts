import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthPublicService} from "../../../../../../services/security/auth-public.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  minDate: any
  maxDate: any
  email = new FormControl('', [Validators.required, Validators.email]);
  date = new FormControl('', [Validators.required]);
  nombre = new FormControl('', [Validators.required]);
  countries: any = [];
  countriesData: any = [];
  validateData: boolean;

  getErrorMessageDate() {
    if (this.date.hasError('required')) {
      return 'Tiene que introducir una fecha';
    }
    return this.email.hasError('date') ? 'Introduzca una fecha' : '';
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Tiene que introducir un correo';
    }

    return this.email.hasError('email') ? 'Introduzca un correo valido' : '';
  }
  getErrorMessageNombre() {
    if (this.nombre.hasError('required')) {
      return 'Tiene que introducir su nombre';
    }

    return this.nombre.hasError('nombre') ? 'Introduzca su nombre' : '';
  }
  constructor(public authPublic: AuthPublicService) { }

  validate(){
    this.validateData = this.nombre.invalid && this.date.hasError('required') && this.email.hasError('required');
  }

  getCountries(){
      this.authPublic.getCountries().subscribe(respuesta => {
          this.countries = respuesta;
        for (var key in this.countries.data) {
          this.countriesData.push(this.countries.data[key]);
        }
      });
  }

  ngOnInit(): void {
    this.getCountries();
    this.validateData = true;
    const day = new Date();
    this.minDate =  new Date(day.getFullYear(), day.getMonth()-11, day.getDay());
    this.maxDate =  new Date(day.getTime() + 86400000);
  }

}
