import { Component, OnInit } from '@angular/core';
import {WorkOutService} from '../../services/work-out.service';
import {WorkOut} from '../../entities/workout';

@Component({
  selector: 'app-viewlist-workout',
  templateUrl: './viewlist-workout.component.html',
  styleUrls: ['./viewlist-workout.component.css']
})
export class ViewlistWorkoutComponent implements OnInit {

  constructor(private workOutService:WorkOutService) { }
  workouts:Array<WorkOut>;
  ngOnInit() {
   /** this.workOutService.getWorkOuts()
    .then((res) =>  res.json())
    .then((workouts) => {
      this.workouts = workouts.data;
      })*/
  }

}
