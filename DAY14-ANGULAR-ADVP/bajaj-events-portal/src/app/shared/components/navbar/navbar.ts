import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SecurityApi } from '../../../features/security/services/security-api';
 
@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
 
export class Navbar {
  private _router = inject(Router);
  private _securityApi: SecurityApi = inject(SecurityApi);
  protected isLoggedIn: boolean= false;
 
  ngOnInit(): void {  
    this._router.events.subscribe({
      next: () => {
        if(this._securityApi.getToken()!==null){
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
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
 
 