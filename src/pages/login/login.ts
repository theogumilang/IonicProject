import {Component} from '@angular/core'
import {AuthProvider} from '../../providers/auth/auth'
import {NativeStorage} from '@ionic-native/native-storage';
import {NavController} from 'ionic-angular'
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'login.html',
  selector: 'login-page'
})
export class LoginPage {
  username : string
  password : string

    constructor(public auth : AuthProvider, private nativestorage : NativeStorage, private navCtrl : NavController){
       
    }
  
    Login(){
     this.auth.Auth(this.username, this.password).subscribe(
       data =>{
        // let jsonstring = JSON.stringify(data);
        // alert(jsonstring);
         this.nativestorage.setItem('Auth', {username: this.username, password: this.password, token : data.access_token})
         .then(
            () =>
            this.navCtrl.setRoot(HomePage)
        );
        
       },
       Err=> {
         alert(Err);
       } 

     );
    }
    GetItem(){
      this.nativestorage.getItem('Auth').then(
        data => alert(data.token)
      )
    
     
    }
 }