import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {
  }

  public isLoggedIn(): boolean {
    const auth = localStorage.getItem('userData');
    return (auth !== null) ? true : false;
  }
}
