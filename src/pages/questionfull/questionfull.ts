import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the QuestionfullPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questionfull',
  templateUrl: 'questionfull.html',
})
export class QuestionfullPage {
  parameter: any;
  comment: string;
  replys: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider) {
    this.parameter = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log(this.parameter);
    this.authProvider.viewComment(this.parameter._id).then((data) => {

      this.replys = data;

    });;
  }

  addComment() {
    let commentObj = {
      comment: this.comment,
      name: window.localStorage.getItem('name'),
      postID: this.parameter._id
    }

    this.authProvider.addComment(commentObj);

    this.authProvider.viewComment(this.parameter._id).then((data) => {

      this.replys = data;

      this.comment = null;


    });;

  }

}
