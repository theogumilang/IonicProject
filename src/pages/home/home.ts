import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NativeStorage} from '@ionic-native/native-storage'
import { AboutPage } from '../about/about';
import {LoginPage} from '../login/login';
import {PRListPage} from '../PRList/PRList';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController, private nativestorage : NativeStorage) {

	}

  PrlistPage() {
  	this.navCtrl.push(PRListPage);
  }
  Logout(){
    this.nativestorage.remove('Auth').then(
      () => 
      this.navCtrl.setRoot(LoginPage)
    );
  }
  GetItem(){
    this.nativestorage.getItem('Auth').then(
      data => alert(data.token)
    )
  }

}
