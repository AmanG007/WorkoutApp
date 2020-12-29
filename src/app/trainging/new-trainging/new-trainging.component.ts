import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'new-trainging',
  templateUrl: './new-trainging.component.html',
  styleUrls: ['./new-trainging.component.css']
})
export class NewTraingingComponent implements OnInit {
  @Output() traingStart = new EventEmitter<void>();
  exercises: Exercise[] = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.exercises = this.trainingService.availableExercises;
  }

  // tslint:disable-next-line:typedef
  onStartTraining() {
    this.traingStart.emit();
  }

}
