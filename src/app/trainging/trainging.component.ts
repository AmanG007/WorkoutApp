import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainging',
  templateUrl: './trainging.component.html',
  styleUrls: ['./trainging.component.css']
})
export class TraingingComponent implements OnInit {
  ongoingTraining = false;

  constructor() { }

  ngOnInit(): void {
  }

}
