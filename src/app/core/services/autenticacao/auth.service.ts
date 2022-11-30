import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/environment';

const url = environment.apiUrl + 'login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    const data = {
        email: email,
        senha: senha
    }

    return this.http.post<any>(
      url, data, httpOptions
    );
  }
}
