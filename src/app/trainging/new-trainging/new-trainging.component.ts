import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'new-trainging',
  templateUrl: './new-trainging.component.html',
  styleUrls: ['./new-trainging.component.css']
})
export class NewTraingingComponent implements OnInit {
  exercises: Exercise[] = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.exercises = this.trainingService.getAvailableExercises();
  }

  // tslint:disable-next-line:typedef
  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

}
