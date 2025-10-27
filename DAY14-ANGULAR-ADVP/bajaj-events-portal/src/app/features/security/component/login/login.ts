import { Component , inject} from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AuthRequest } from '../../models/auth-request';
import { AuthResponse } from '../../models/auth-response';
import { SecurityApi } from '../../services/security-api';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
    private _securityApi = inject(SecurityApi);
    protected user : AuthRequest = new AuthRequest();
    protected authResponse : AuthResponse ;


    protected onCredentialSubmit():void{
      console.log(this.user);
    }


}
