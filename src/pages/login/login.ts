import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;
  data: any;
  xyz: any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public authProvider:AuthProvider,
     public alrtCtrl: AlertController) { 
  }
 
  ionViewDidLoad() {  
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
   let loginUser = {
      email: this.email,
      password: this.password
   };
   
   this.authProvider.loginUser(loginUser).subscribe(data => {
     this.xyz = data;
     console.log(this.xyz);
     if(this.xyz.success){
      window.localStorage.setItem('email', loginUser.email);
      window.localStorage.setItem('password', loginUser.password);
      window.localStorage.setItem('name', this.xyz.name);
      this.navCtrl.setRoot(TabsPage);
     }else{
    
       let alert = this.alrtCtrl.create({
        title: 'UNSUCCESSFUL LOGIN',
        subTitle: 'Wrong Email or Password',
        buttons: ['DONE']
       });
       alert.present(); 
     }
   });
  
  }

 
}
 