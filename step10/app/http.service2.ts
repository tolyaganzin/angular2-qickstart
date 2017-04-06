import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService2{

    constructor(private http: Http){ }

    getData(){
        return this.http.get('users.json')
    }
}
