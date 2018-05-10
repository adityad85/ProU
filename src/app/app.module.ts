import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AskQuestionPage } from '../pages/ask-question/ask-question';
import { SettingsPage} from '../pages/settings/settings';
import { ProfilePage} from '../pages/profile/profile';
import { SignupPage} from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { WelcomePage} from '../pages/welcome/welcome';
import { QuestionPage } from '../pages/question/question';

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
    WelcomePage,
    QuestionPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
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
    WelcomePage,
    QuestionPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostsProvider,
    AuthProvider,
    HttpClientModule
  ]
})
export class AppModule {}
