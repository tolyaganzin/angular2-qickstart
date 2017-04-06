import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService5 {

    constructor(private http: Http){ }

    getUsers() : Observable<User[]>{
        return this.http.get('usersP.json')
                        .map((resp:Response)=>{

                            let usersList = resp.json().data;
                            let users :User[] = [];
                            for(let index in usersList){
                                console.log(usersList[index]);
                                let user = usersList[index];
                                users.push({name: user.userName, age: user.userAge});
                            }
                            return users;
                        })
                        .catch((error: any)=> { return Observable.throw(error);});
    }
}
