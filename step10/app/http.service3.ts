import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService3{

    constructor(private http: Http){ }

    getData(){
        return this.http.get('users3.json')
    }
}
