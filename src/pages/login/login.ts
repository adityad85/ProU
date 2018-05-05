import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: String;
  password: String;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public authProvider:AuthProvider) { 
  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
   let user = {
      email: this.email,
    password: this.password
   };
   console.log('User has been logged in');
   console.log(user);
   this.navCtrl.push(TabsPage);
  }

 
}
