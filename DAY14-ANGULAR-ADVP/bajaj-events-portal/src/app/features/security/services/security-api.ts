import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , tap} from 'rxjs';

import { AuthRequest } from '../models/auth-request';
import { AuthResponse } from '../models/auth-response';

@Injectable({
  providedIn: 'root'
})

export class SecurityApi {
  private _baseUrl : string = "http://localhost:9090/api";
  private _httpClient = inject(HttpClient);
  
  public authenticateCredentials(user:AuthRequest):Observable<AuthResponse>{
    return this._httpClient.post<AuthResponse>(`${this._baseUrl}/users/authenticate`,user,{
         headers:{
        'Content-Type':'application/json'
      }
    }).pipe(tap({
      next: response => {
        if(response.token){
        localStorage.setItem("token",response.token);
        localStorage.setItem("refresh",response.refreshToken);
        localStorage.setItem("role",response.role);
        localStorage.setItem("token",response.email);
        }
      }
    }));
  }
  getToken():string | null {
    return `${localStorage.getItem('token')}`;
  }
  getRole():string | null {
    return `${localStorage.getItem('role')}`;
  }
  logout():void{
    localStorage.clear();
  }
}
