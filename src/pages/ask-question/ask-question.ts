import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-ask-question',
  templateUrl: 'ask-question.html',
})
export class AskQuestionPage {

   title: String;
   description: String;
   category: String;

  constructor(public viewCtrl: ViewController,
      public navCtrl: NavController,
      public navParams: NavParams,
      private authProvider: AuthProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AskQuestionPage');
  }

  ionViewWillEnter(){
    this.title = null;
    this.description = null;
    this.category = null;
  }
   
  saveQues(){
   let ques = {
     title:this.title,
     description: this.description,
     category:this.category
   }
  
   this.authProvider.saveQuesService(ques);

  }
 


}
