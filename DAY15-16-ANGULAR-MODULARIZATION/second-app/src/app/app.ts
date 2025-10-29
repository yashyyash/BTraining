import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected remote1Message!:string;
 
  ngOnInit(): void {
    window.addEventListener('messageFromFirstApp', (event) => {
      const customEvent = event as CustomEvent;
      this.remote1Message = customEvent.detail?.['morningMessage'];
    })
  }
   ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
