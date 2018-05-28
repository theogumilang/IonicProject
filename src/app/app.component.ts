import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from '../pages/login/login'
import { HomePage } from '../pages/home/home';
import {NativeStorage} from '@ionic-native/native-storage'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage ;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private nativestorage : NativeStorage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      this.nativestorage.getItem('Auth').then
      ( data=>  { 
        if(data != null){
         // this.navCtrl.setRoot(HomePage);
         this.rootPage = HomePage;

        }       
      })
      
      
      splashScreen.hide();
     // alert(this.storedauth)
    });
  }
}

