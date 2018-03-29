import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LessonPage } from '../lesson/lesson';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openLessonPage(){
    this.navCtrl.push(LessonPage);
  }

}
