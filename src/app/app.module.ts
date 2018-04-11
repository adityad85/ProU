import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AskQuestionPage } from '../pages/ask-question/ask-question';
import { SettingsPage} from '../pages/settings/settings';
import { ProfilePage} from '../pages/profile/profile';
import { SignupPage} from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';

import { PostsProvider } from '../providers/posts/posts';


import { AuthProvider } from '../providers/auth/auth';





@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingsPage,
    AskQuestionPage,
    ProfilePage,
    SignupPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingsPage,
    AskQuestionPage,
    ProfilePage,
    SignupPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostsProvider,
    AuthProvider
  ]
})
export class AppModule {}
