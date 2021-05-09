import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  logged:boolean=false;
  env:string=environment.sutdentApiUrl;
  constructor(private _http:HttpClient) { }

  select(url:string):Observable<any>{
    return this._http.get<Student>(environment.sutdentApiUrl+url);
  }
  insert(obj:Student){
    return this._http.post(environment.sutdentApiUrl,obj);
  }
  login(obj:Login){
    return this._http.put(environment.sutdentApiUrl,obj);
  }

}
