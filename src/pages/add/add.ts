import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'add.html'
})
export class AddPage {
  public data = {
    country: 'us'
  }

  constructor(public viewCtrl: ViewController) {}

  dismiss(formData){
    this.viewCtrl.dismiss(formData);
  }
}
