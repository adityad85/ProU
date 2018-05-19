import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { AuthProvider} from '../../providers/auth/auth';
import { QuestionfullPage } from '../questionfull/questionfull';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  quess: any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
    private authProvider: AuthProvider) {

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.authProvider.getQues().then((data) => {
     
      this.quess = data;
    
    });
  
    
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ionViewWillEnter(){
    this.authProvider.getQues().then((data) => {
     
      this.quess = data;
    

    }); 
  }

  ionViewDidLoad(){

    this.viewCtrl.showBackButton(false);
 
    this.authProvider.getQues().then((data) => {
      
      this.quess = data;
    });

}

cardOpen(ques){
  this.navCtrl.push(QuestionfullPage,{data: ques});
}
}