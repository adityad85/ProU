//import { globalvar } from './../login/login';
import { WelcomePage } from './../welcome/welcome';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';


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
    public app: App,
    private authProvider: AuthProvider) {
    this.pushPage1 = AboutPage;
    this.pushPage2 = ContactPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  logout(): void {
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('password');
    this.app.getRootNav().setRoot(WelcomePage);
    this.authProvider.logOut(this.authProvider.data1);
  }


}
