import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { SettingsPage} from '../settings/settings';
import { AskQuestionPage} from  '../ask-question/ask-question';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AskQuestionPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
