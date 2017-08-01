import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ENVIRONMENT } from '../../environments/environment.default'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public code:string;

  constructor(public navCtrl: NavController) {
    this.code = JSON.stringify(ENVIRONMENT);
  }

}
