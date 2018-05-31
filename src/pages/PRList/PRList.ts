import {Component} from '@angular/core'
import {PRListProvider} from '../../providers/prlist/prlist'
import {NativeStorage} from '@ionic-native/native-storage';
import {NavController, LoadingController} from 'ionic-angular'
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'PRList.html',
  selector: 'prlist-page'
})
export class PRListPage {
   prlists: Array<any>;
   token : string;


    constructor(public prprovider : PRListProvider, public loadingctrl : LoadingController, private nativestorage : NativeStorage){
       
    }
    ionViewWillEnter(){
        let loading = this.loadingctrl.create({
            content: "Please Wait"
           
        });
        loading.present();
        this.nativestorage.getItem('Auth').then
        ( datas =>  { 
          if(datas != null){
           // this.navCtrl.setRoot(HomePage);
           this.token = datas.token;
           this.prprovider.GetPRList(datas.token).subscribe(
            data => {
                this.prlists = data;
               
                loading.dismiss();
              
            },
            err => {
                alert(err)
                alert(datas.token)
            }
        )
  
          }    
          err => {
           alert(err);
          }
        })
     

  }
  ApprovePR(parmWorkflowWorkItemTable:string){
     
    this.prprovider.ApprovePR(parmWorkflowWorkItemTable, this.token).subscribe(
        data => {
            alert(data.parmStatus);
        },
        err => {
            alert(err);
        }

    )
    
  

  }
  RejectPR(parmWorkflowWorkItemTable:string){
      this.prprovider.RejectPR(parmWorkflowWorkItemTable, this.token).subscribe(
          data => {
              alert(data.parmStatus);
          },
          err => {
              alert(err);
          }
      )
  }
 }