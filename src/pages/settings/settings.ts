import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { WelcomePage } from '../welcome/welcome';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  pushPage1: any; 
  pushPage2: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pushPage1 = AboutPage;
    this.pushPage2 = ContactPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

 
}
