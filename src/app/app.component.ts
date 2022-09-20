import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  joke: any;
  punchlineVisible: boolean = false;
  timer: number = 7200;
  hours: number = Math.floor(this.timer / 3600);
  minutes: number = Math.floor((this.timer % 3600) / 60);
  seconds: number = Math.floor((this.timer - this.minutes * 60) % 60);

  ngOnInit(): void {
    this.http
      .get('https://official-joke-api.appspot.com/random_joke')
      .subscribe((data) => (this.joke = data));
  }

  startTimer = () => {
    if (this.timer > 0) {
      setInterval(() => {
        this.timer--;
        this.hours = Math.floor(this.timer / 3600);
        this.minutes = Math.floor((this.timer % 3600) / 60);
        this.seconds = Math.floor((this.timer - this.minutes * 60) % 60);
      }, 1000);
    }
  };

  formatTime = (value: number): string => {
    if (value < 10) {
      return `0${value}`;
    } else return `${value}`;
  };

  getJoke = () => {
    this.punchlineVisible = false;
    this.http
      .get('https://official-joke-api.appspot.com/random_joke')
      .subscribe((data) => (this.joke = data));
  };

  showPunchline = () => {
    this.punchlineVisible = true;
  };
}
