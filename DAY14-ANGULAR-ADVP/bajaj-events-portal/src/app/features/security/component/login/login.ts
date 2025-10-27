import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthRequest } from '../../models/auth-request';
import { AuthResponse } from '../../models/auth-response';
import { SecurityApi } from '../../services/security-api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  })
  
export class Login {
  private _securityApi = inject(SecurityApi);
  private _router = inject(Router);

  protected user: AuthRequest = new AuthRequest();
  protected authResponse?: AuthResponse;
  protected authErrorMessage: string = '';
  protected isLoading: boolean = false;

  ngOnInit(): void {
    // Initialization logic if needed
  }

  protected onCredentialSubmit(): void {
    this.isLoading = true;
    this._securityApi.authenticateCredentials(this.user).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.token) {
          this._router.navigate(['/home']);
        } else {
          this.authErrorMessage = response.message;
          setTimeout(() => {
            this.authErrorMessage = '';
          }, 5000);
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.authErrorMessage = 'Authentication failed. Please try again.';
        setTimeout(() => {
          this.authErrorMessage = '';
        }, 5000);
      }
    });
  }
}