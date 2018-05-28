import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {NativeStorage} from '@ionic-native/native-storage'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import {AuthProvider} from '../providers/auth/auth'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    LoginPage,
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    LoginPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
