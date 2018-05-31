import {Component} from '@angular/core'
import {AuthProvider} from '../../providers/auth/auth'
import {NativeStorage} from '@ionic-native/native-storage';
import {NavController, LoadingController} from 'ionic-angular'
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'login.html',
  selector: 'login-page'
})
export class LoginPage {
  username : string


    constructor(public auth : AuthProvider, private nativestorage : NativeStorage,
       private navCtrl : NavController,public loadingctrl : LoadingController)
       {
       
       }
  
    Login(){
      let loading = this.loadingctrl.create({
        content: "Please Wait"
       
       });
       loading.present();
     this.auth.Auth(this.username).subscribe(
       data =>{
        // let jsonstring = JSON.stringify(data);
        // alert(jsonstring);
         this.nativestorage.setItem('Auth', {username: this.username, token : data.access_token})
         .then(
            () =>{
              loading.dismiss();
              this.navCtrl.setRoot(HomePage)
            }
            
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