import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-trainging',
  templateUrl: './trainging.component.html',
  styleUrls: ['./trainging.component.css']
})
export class TraingingComponent implements OnInit {
  ongoingTraining = false;
  exerciseSubscription: Subscription;

  constructor(private traingingService: TrainingService) { }

  ngOnInit(): void {
    this.exerciseSubscription = this.traingingService.exerciseChanged.subscribe(
      exercise => {
        if (exercise) {
          this.ongoingTraining = true;
        } else {
          this.ongoingTraining = false;
        }
    });
  }


}
