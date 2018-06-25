import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export class WorkOut{
    constructor(public task:string,
        public parentTask:string,
        public priority:number,
        public startDate:string,
        public endDate:string){

    }
}