import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/environment';
import { TokenStorageService } from './token.storage.service';

const url = environment.apiUrl + 'login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient, private token: TokenStorageService) {}

  login(email: string, senha: string): Observable<any> {
    const data = {
        email: email,
        senha: senha
    }

    return this.http.post<any>(
      url, data, httpOptions
    );
  }

  getAuthStatus(): boolean {
    return this.token.getToken() ? true : false;
  }
}
