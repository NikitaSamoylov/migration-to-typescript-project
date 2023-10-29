import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { TResponse } from '../types/interfaces';
import { TSources } from '../types/interfaces';

class App {
  controller: AppController;
  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    (<HTMLElement>document.querySelector('.sources')).addEventListener(
      'click',
      (e) =>
        this.controller.getNews(e, (data: TResponse) =>
          this.view.drawNews(data),
        ),
    );
    this.controller.getSources((data: TSources) => this.view.drawSources(data));
  }
}

export default App;
