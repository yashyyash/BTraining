import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthRequest } from '../../models/auth-request';
import { AuthResponse } from '../../models/auth-response';

import { SecurirtyApi } from '../../services/securirty-api';




@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private _securityApi: SecurirtyApi = inject(SecurirtyApi);
  private _router: Router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute)
  
  protected user: AuthRequest = new AuthRequest();
  protected authResponse: AuthResponse;
  protected authErrorMessage: string = '';
  private _returnUrl: string = '';

  ngOnInit(): void {
    this._returnUrl = this._activatedRoute.snapshot.queryParams['returnUrl'] || '/events';
    
  }


  protected onCredentialSubmit(): void {
    console.log("User Credentials: ", this.user);

    this._securityApi.authenticateCredentials(this.user).subscribe({
      next: response => {
        if (response.token) {
          if(this._returnUrl){
            this._router.navigateByUrl(this._returnUrl);
          } else {
          this._router.navigate(['/home']);
          }
        } else {
          this.authErrorMessage = response.message;
          setTimeout(() => {
            this.authErrorMessage = '';
          }, 3000);
        }

      }
      // error: err => {
      //   console.log("Error during authentication: ", err);
      //   this.authErrorMessage = 'Authentication failed. Please try again.';
      //   setTimeout(() => {
      //     this.authErrorMessage = '';
      //   }, 3000);
      // }
    });
  }
}
