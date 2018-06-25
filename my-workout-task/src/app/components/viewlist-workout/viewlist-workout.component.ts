import { Component, OnInit } from '@angular/core';
import {WorkOutService} from '../../services/work-out.service';
import {WorkOut} from '../../entities/workout';

@Component({
  selector: 'app-viewlist-workout',
  templateUrl: './viewlist-workout.component.html',
  styleUrls: ['./viewlist-workout.component.css']
})
export class ViewlistWorkoutComponent implements OnInit {
  allWorkOuts: WorkOut[];
  statusCode: any;

  constructor(private workOutService:WorkOutService) { }
  workouts:Array<WorkOut>;
  ngOnInit() {
      this.getAllArticles();
  }

  getAllArticles() {
    this.workOutService.getAllArticles()
    .subscribe(
            data => this.workouts = data,
            errorCode =>  this.statusCode = errorCode);   
}

}
