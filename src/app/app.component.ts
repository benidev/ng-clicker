import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  points = 500;
  increaser = 1;

  ngOnInit() {
    Observable.interval(200).subscribe(
      (interval) => {
        this.points += this.increaser * 0.1;
      }
    );
  }
  
  increase() {
    this.points++; 
  }

  buy(multiplicator) {
    if(this.points > (this.increaser * 20)) {
      this.points = this.points - (this.increaser * 20);
      this.increaser = this.increaser * multiplicator;
    }
  }
}
