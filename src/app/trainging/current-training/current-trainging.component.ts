import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrainingService } from '../training.service';
import { StopTrainingComponent } from './stop-training.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'current-training',
  templateUrl: './current-trainging.component.html',
  styleUrls: ['./current-trainging.component.css']
})
export class CurrentTraingingComponent implements OnInit {
  progress = 0;
  timer: number;

  constructor(private dialog: MatDialog, private teainingService: TrainingService) { }

  ngOnInit(): void {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    const step = this.teainingService.getRunningExercise().duratioin / 100 * 1000
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.teainingService.completeExercise();
        clearInterval(this.timer);
      }
    }, step);
  }

  // tslint:disable-next-line:typedef
  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
  });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.teainingService.cancelExercise(this.progress);
      } else {
        this.startOrResumeTimer();
      }
    });
  }

}
