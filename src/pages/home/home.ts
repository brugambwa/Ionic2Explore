import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {AddPage} from '../add/add';
import {Weather} from '../../providers/weather';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public weatherList = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public weather: Weather) {

  }


  addWeather(){
      let addWeatherModal = this.modalCtrl.create(AddPage);
      addWeatherModal.onDidDismiss((data) =>{
        if(data){
          this.getWeather(data.city, data.country);
        }

      });
      addWeatherModal.present(addWeatherModal);
  }

  getWeather(city: string, country: string){
    //Get Weather Via API
    this.weather.city(city, country)
      .map(data => data.json())
      .subscribe(data =>{
        this.weatherList.push(data)
      },
      err => console.log(err),
      () => console.log('getWeather completed'))
  }
}
