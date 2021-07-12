import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {

    constructor() {
    }

    public getToken(): string {
        return sessionStorage.getItem('userData');
    }
}
