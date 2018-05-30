import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PRListProvider{
    constructor(public http : Http){

    }
    GetPRList(){
        let url = "http://139.255.50.205:4445/api/prgetlist ";
        let body = {
            "parmClaimsUser" :"ClaimGuy@MyApp.com",
            "parmCompany" :"APU"
        }
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers:headers})
        var response =  this.http.post(url,body, options ).map(res => res.json());
        return response;
       
    }
    ApprovePR(RecId){
        let url = "http://139.255.50.205:4445/api/prapprove ";
        let body = {
            "parmClaimsUser" :"ClaimGuy@MyApp.com",
            "parmCompany" :"APU",
            "parmRefRecId" : RecId
        }
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers:headers})
        var response =  this.http.post(url,body, options ).map(res => res.json());
        return response;
    }
    RejectPR(RecId){
        let url = "http://139.255.50.205:4445/api/prreject ";
        let body = {
            "parmClaimsUser" :"ClaimGuy@MyApp.com",
            "parmCompany" :"APU",
            "parmRefRecId" : RecId
        }
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers:headers})
        var response =  this.http.post(url,body, options ).map(res => res.json());
        return response;
    }
  
}