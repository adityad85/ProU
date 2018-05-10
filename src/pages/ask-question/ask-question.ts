import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Alert } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertController} from 'ionic-angular';


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
      private authProvider: AuthProvider,
      private atrCtrl: AlertController
    ) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AskQuestionPage');
    console.log(name);
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
     category:this.category,
     name: window.localStorage.getItem('name')
   } 
   let alert = this.atrCtrl.create({
    title: 'Success',
    subTitle: 'Your Question has been posted Successfully',
    buttons: ['DONE']
  });
  alert.present();
  
   this.authProvider.saveQuesService(ques); 

  
   this.title = null;
    this.description = null;
    this.category = null;

  }
 

   
}
