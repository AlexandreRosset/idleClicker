import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  Width: string;

  @Input()
  Value: number;
  @Input()
  MaxValue: number;
  @Input()
  DisplayValue: string;
  @Input()
  Color: string;
  @Input()
  BackColor: string;

  constructor() {
  }

  ngOnInit() {
    const temp: number = (this.Value * 100 / this.MaxValue);
    this.Width = temp.toString() + '%';
  }

}
