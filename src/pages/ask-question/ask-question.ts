import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ask-question',
  templateUrl: 'ask-question.html',
})
export class AskQuestionPage {

   title: any;
   description: any;
   category: any;

  constructor(public viewCtrl: ViewController,
      public navCtrl: NavController,
      public navParams: NavParams,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AskQuestionPage');
  }


}
