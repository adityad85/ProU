import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
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
    this.authProvider.signUp(user).subscribe(data=>{
      if(data)
      this.navCtrl.pop();
    });
    
    }

}
