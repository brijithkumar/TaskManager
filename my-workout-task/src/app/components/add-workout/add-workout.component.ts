import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {WorkOutService} from '../../services/work-out.service';
import {Router} from '@angular/router';
import {WorkOut} from '../../entities/workout';


@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent implements OnInit {
  myForm:FormGroup;
  message:string;
  submitted = false;
  statusCode: number;

  constructor(private workOutService:WorkOutService,
    private router:Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
          task: new FormControl('', [Validators.required] ),
          parentTask: new FormControl('', Validators.required),
          priority: new FormControl('', Validators.required),
          startDate: new FormControl('',Validators.required),
          endDate: new FormControl('',Validators.required)
      })     
  this.myForm.statusChanges.subscribe((data: any) => console.log(data));
  }
/**
  onArticleFormSubmit() {  
	  if (this.myForm.invalid) {
	       return; //Validation failed, exit from method.
	  }   
	  //Form is valid, now perform create
	  let task = this.myForm.get('task').value.trim();
    let parentTask = this.myForm.get('parentTask').value.trim();	  
	    let workOut= new WorkOut(task, parentTask);	  
	    this.workOutService.addWorkOut(workOut)
	      .subscribe(successCode => {
		           console.log("success creation");
	  }
  }*/



  onSubmit() {
	   
	  if (this.myForm.invalid) {
	       return; //Validation failed, exit from method.
	  }   
	  //Form is valid, now perform create or update
         
	  let task = this.myForm.get('task').value.trim();
    let parentTask = this.myForm.get('parentTask').value.trim();
    let priority = this.myForm.get('priority').value;	 
    let startDate= this.myForm.get('startDate') .value;
    let endDate= this.myForm.get('endDate') .value;
	    //Handle create article
      let workOut= new WorkOut(task, parentTask,priority,startDate,
      endDate);	  
	    this.workOutService.addWorkOut(workOut)
	      .subscribe(successCode => {
		              this.statusCode = successCode;
			      
			},
		        errorCode => this.statusCode = errorCode);
   }



  /*onSubmit() {
    console.log('briks'+this.myForm);
    console.log('brini'+this.myForm.value);
    this.workOutService.addWorkOut(this.myForm.value)
    .then((res)=> res.json())
    .then((data) =>{
      if(data.success){
        this.message = "Successfully added the workout!!"
      }
    })
}*/








}
