import { Pipe, PipeTransform } from '@angular/core';
import { WorkOut } from '../entities/workout';


@Pipe({
    name: 'searchtasks'
})
export class SearchTaskPipe implements PipeTransform {

    transform(value: Array<WorkOut>, taskSearch:string,
        parentTaskSearch:string,priorityFromSearch:number,
        priorityToSearch:number) {
       if(value && value.length){
           return value.filter(val=>{
               if(taskSearch && 
                val.task.toLowerCase().indexOf(taskSearch.toLowerCase())===-1){
                    return false;
                    }
                if(parentTaskSearch && 
                val.parentTask.toLowerCase().indexOf(parentTaskSearch.
                    toLowerCase())===-1){
                     return false;
                     }
                if(priorityFromSearch && 
                        val.priority <priorityFromSearch) {
                             return false;
                             }
                if(priorityToSearch && 
                      val.priority >priorityToSearch) {
                        return false;
                          }
                return true;
           })
       }
       else{
           return value;
       }
    }

}