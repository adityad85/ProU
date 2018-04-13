import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
 
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  name: String;
  email:String;
  password:String;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authProvider:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    let user = {
      name: this.name,
      email:this.email,
      password:this.password
    }
    console.log(user.name+' has been registered');
    console.log(user);
    this.navCtrl.pop();
    }

}
