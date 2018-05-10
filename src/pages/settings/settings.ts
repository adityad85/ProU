import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { WelcomePage } from '../welcome/welcome';
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {


  pushPage1: any; 
  pushPage2: any;
  rootpage: any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public app: App) {
    this.pushPage1 = AboutPage;
    this.pushPage2 = ContactPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  logout(): void{
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('password');
   
}
  
 
}
