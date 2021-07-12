import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class AuthPublicService {
    constructor(private httpClient: HttpClient) {
    }


    public createUserValid(dataUser: any) {
        return this.httpClient
            .post<any>(environment.ENDPOINTBASE + 'user/validarUsuario', dataUser);
    }

    getCountries() {
        return this.httpClient.get<any>(`${environment.ENDPOINTBASE2}`);
    }

}
