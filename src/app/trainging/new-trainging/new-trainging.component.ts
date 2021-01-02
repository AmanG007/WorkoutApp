import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'new-trainging',
  templateUrl: './new-trainging.component.html',
  styleUrls: ['./new-trainging.component.css']
})
export class NewTraingingComponent implements OnInit {
  exercises: Observable<any>;

  constructor(
    private trainingService: TrainingService, 
    private db: AngularFirestore) { }

  ngOnInit(): void {
    this.exercises = this.db.collection('availableExercises')
    .valueChanges();
  }

  // tslint:disable-next-line:typedef
  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

}
