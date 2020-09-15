import { Component, OnInit } from '@angular/core';
import { carousel } from '../../carousel.js';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
