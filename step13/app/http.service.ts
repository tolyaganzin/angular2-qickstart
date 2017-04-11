import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService{

    constructor(private http: Http){ }

    getUsers() : Observable<User[]>{
        return this.http.get('users.json')
                    .map((resp:Response)=> resp.json());
    }
}
