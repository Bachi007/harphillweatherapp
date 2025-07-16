import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'weatherapp';
  drops = Array.from({ length: 50 }, (_, i) => i); 

}
