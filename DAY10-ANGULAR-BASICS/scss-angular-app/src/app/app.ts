import { Component, signal } from '@angular/core';

@Component({
  selector: 'bajaj-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('scss-angular-app');
}
