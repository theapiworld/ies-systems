import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthPublicService} from "../../../../../../services/security/auth-public.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  minDate: any
  maxDate: any
  countries: any = [];
  countriesData: any = [];
  validateData: boolean;
  post: any;
  formGroup: FormGroup;
  paises: any;
   validateForm: boolean;

  get dataControls() {
    return this.formGroup.controls;
  }

  getErrorMessageDate() {
    if (this.dataControls.date.hasError('required')) {
      return 'Tiene que introducir una fecha';
    }
    return this.dataControls.date.hasError('date') ? 'Introduzca una fecha' : '';
  }
  getErrorMessage() {
    if (this.dataControls.email.hasError('required')) {
      return 'Tiene que introducir un correo';
    }

    return this.dataControls.email.hasError('email') ? 'Introduzca un correo valido' : '';
  }
  getErrorMessageNombre() {
    if (this.dataControls.nombre.hasError('required')) {
      return 'Tiene que introducir su nombre';
    }

    return this.dataControls.nombre.hasError('nombre') ? 'Introduzca su nombre' : '';
  }
  constructor(public authPublic: AuthPublicService) { }

  validate(){
    this.validateData = this.dataControls.nombre.invalid && this.dataControls.date.hasError('required') && this.dataControls.email.hasError('required');
  }

  onSubmit(post: any) {
    this.validateForm = true;
    this.post = post;
    debugger
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
    this.validateForm = false;
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      date: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      paises: new FormControl('', [Validators.required]),
    });
    this.getCountries();
    this.validateData = true;
    const day = new Date();
    this.minDate =  new Date(day.getFullYear(), day.getMonth()-11, day.getDay());
    this.maxDate =  new Date(day.getTime() + 86400000);
  }

}
