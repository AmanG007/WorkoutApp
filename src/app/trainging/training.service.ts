import { Exercise } from './exercise.model';

export class TrainingService {
    availableExercises: Exercise[] = [
        {id: 'crunches', name: 'Crunches', duratioin: 30, calories: 8 },
        {id: 'swimming', name: 'Swimming', duratioin: 180, calories: 15 },
        {id: 'pushups', name: 'Pushups', duratioin: 120, calories: 18 },
        {id: 'squats', name: 'Squats', duratioin: 60, calories: 8 }
    ];

    getAvailableExercises() {
        return this.availableExercises.slice();
    }
}