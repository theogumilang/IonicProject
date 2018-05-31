import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider{
    constructor(public http : Http){

    }
    Auth(username){
        var url = "http://139.255.50.205:4445/token ";
        let body = new URLSearchParams();
        body.set('username', username),   
        body.set('grant_type', 'password')
     

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded')
        let options = new RequestOptions({headers : headers})
        var response = this.http.post(url, body.toString(), options).map(res => res.json());
        return response;
    }
}