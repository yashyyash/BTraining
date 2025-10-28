import { Component, inject } from '@angular/core';
import { RouterModule, Router, NavigationStart } from '@angular/router';
import { SecurirtyApi } from '../../../features/security/services/securirty-api';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
  private _router = inject(Router);
  private _securityApi: SecurirtyApi = inject(SecurirtyApi);
  protected isLoggedIn: boolean= false;
  role: string;

  ngOnInit(): void {  
    this._router.events.subscribe({
      next: event => {
        if(event instanceof NavigationStart){
        if(this._securityApi.getToken()!==null){
          this.role = localStorage.getItem('role') || '';
            // this._router.navigate(['/events/register']);
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      }
      }
    })
  }
  logout(): void {
    this.isLoggedIn = false;
    this._securityApi.logout();
    // this._router.navigate(['/login']);
  }
  
}


/*

*/