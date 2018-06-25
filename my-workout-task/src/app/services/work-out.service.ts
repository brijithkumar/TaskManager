import { Injectable } from '@angular/core';
import {Http,RequestOptions,Headers} from '@angular/http'
import {WorkOut} from '../entities/workout';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';


@Injectable()
export class WorkOutService {

  constructor(private http:Http) { }

  baseUrl: string = 'http://localhost:8081/api/';

  getWorkOuts(): Promise<any> {
    return this.http.get(this.baseUrl + 'workouts')
    .toPromise()

  }

  /**addWorkOut(workout: WorkOut): Promise<any> {
    return this.http.post(this.baseUrl + 'saveTaskDetails', workout)
    .toPromise()
  }**/

  addWorkOut(workout: WorkOut):Observable<any> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: cpHeaders });
          return this.http.post(this.baseUrl + 'saveTaskDetails', workout, options)
                 .map(success => success.status)
                 .catch(this.handleError);
      }
      
  getAllArticles(): Observable<WorkOut[]> {
        return this.http.get(this.baseUrl + 'getTaskDetails')
         .map(this.extractData)
         .catch(this.handleError);
  
    }
  
  private extractData(res: Response | any) {
      let body = res.json();
            return body;
        }

      
  private handleError (error: Response | any) {
       // console.error(error.message || error);
        return Observable.throw(error.status);
          }


    
}
