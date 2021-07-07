import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {AuthPublicService} from "../../../services/security/auth-public.service";
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {AlertService} from "../../../_alert";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }

    username = '';
    password = '';
    formDatos: FormGroup;
    formValidate = false;
    cargando: any;
    userData: any;
    validate: any;

    constructor(public authPublic: AuthPublicService, private router: Router, private alertService: AlertService) {
    }

    error(message: string) {
        this.alertService.error(message);
    }

    clear() {
        this.alertService.clear();
    }

    succes(message: string) {
        this.alertService.success(message);
    }

    info(message: string) {
        this.alertService.info(message);
    }


    emailFormControl = new FormControl('', [
        Validators.required,
    ]);
    passwordFormControl = new FormControl('', [
        Validators.required,
    ]);

    ngOnInit() {
        this.formDatos = new FormGroup({
            emailFormControl: new FormControl('', [Validators.required]),
            passwordFormControl: new FormControl('', [Validators.required]),
        });
    }

    logIn(username: string, password: string) {
        debugger
        this.cargando = true;
        this.username = username;
        this.password = password;
        if (this.formDatos.invalid) {
          this.formValidate = true;
          console.log('Error');
          return;
        }
        const dataUser = {
            "usuario": username,
            "contrasena": password
        }
        // se validan datos de acceso
        this.authPublic.createUserValid(dataUser).subscribe((res: any) => {
            debugger
            this.userData = res;
            console.log(res)
            localStorage.setItem('userData', JSON.stringify(res));
            this.validate = localStorage.getItem('userData');
            const dataValidate = JSON.parse(this.validate);
            if (dataValidate.resultado) {
                this.succes('¡Inicio de sesión exitoso!');
                setTimeout(() => {
                    this.router.navigate(['dashboard/principal']);
                }, 2000);
            } else {
                this.error('¡Error, por favor verifica tus datos!');
                setTimeout(() => {
                    this.clear();
                }, 3000);
            }
        }, error => {
            if (navigator.onLine) {
                console.log('navegador está conectado a la red');
                this.error('¡Error por favor verifica tus datos!');
                setTimeout(() => {
                    this.clear();
                }, 3000);
            } else {
                this.cargando = false;
                console.log('navegador NO está conectado a la red');
                this.info('¡Error por favor verifica tu conexión a Internet!');
                setTimeout(() => {
                    this.clear();
                }, 3000);
            }
        });
    }
}
