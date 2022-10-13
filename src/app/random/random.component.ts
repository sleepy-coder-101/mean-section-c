import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent implements OnInit {
  randomNumber: number = 0;
  constructor() {}

  ngOnInit(): void {}

  generateRandom() {
    this.randomNumber = Math.floor(Math.random() * 64);
  }
}
