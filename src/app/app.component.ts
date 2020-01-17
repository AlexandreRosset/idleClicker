import { Component } from '@angular/core';
import { Element } from './Element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'idleClicker';
  listeElement: Element[] = [
    {Value: 5, MaxValue: 100, Color: '#fc0303', BackColor: '#d0d0d0'},
    {Value: 15, MaxValue: 100, Color: '#ff9900', BackColor: '#d0d0d0'}
    ];
}
