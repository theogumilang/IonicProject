import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NativeStorage} from '@ionic-native/native-storage'
import { AboutPage } from '../about/about';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private nativestorage : NativeStorage) {
	}

  aboutPage() {
  	this.navCtrl.push(AboutPage);
  }
  Logout(){
    this.nativestorage.remove('Auth').then(
      () => 
      this.navCtrl.setRoot(LoginPage)
    );
  }
  GetItem(){
    this.nativestorage.getItem('Auth').then(
      data => alert(data.username)
    )
  }

}
