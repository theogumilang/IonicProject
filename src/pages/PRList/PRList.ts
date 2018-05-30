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
  

    constructor(public prprovider : PRListProvider, public loadingctrl : LoadingController){
       
    }
    ionViewWillEnter(){
        let loading = this.loadingctrl.create({
            content: "Please Wait"
           
        });
        loading.present();
        this.prprovider.GetPRList().subscribe(
            data => {
                this.prlists = data;
                loading.dismiss();
              
            },
            err => {
                alert(err)
            }
        )

  }
  ApprovePR(parmWorkflowWorkItemTable:string){
     
    this.prprovider.ApprovePR(parmWorkflowWorkItemTable).subscribe(
        data => {
            alert(data.parmStatus);
        },
        err => {
            alert(err);
        }

    )
    
  

  }
  RejectPR(parmWorkflowWorkItemTable:string){
      this.prprovider.RejectPR(parmWorkflowWorkItemTable).subscribe(
          data => {
              alert(data.parmStatus);
          },
          err => {
              alert(err);
          }
      )
  }
 }