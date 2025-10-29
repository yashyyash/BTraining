import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-app');
  sendMessageToRemTocom(): void {
    window.dispatchEvent(new CustomEvent('messageFromFirstApp', { detail:{
        morningMessage:'Welcome to Bajaj Finserve message from Remote - 1 Application'
      } 
    }));
  }
}
