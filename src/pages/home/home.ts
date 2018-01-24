import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public posts :any = [
    {
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Official_portrait_of_Barack_Obama.jpg/220px-Official_portrait_of_Barack_Obama.jpg',
      name: 'Obama',
      date: 'November 5, 2017',
      img: 'http://barkpost.com/wp-content/uploads/2016/04/instagram-boo.jpg',
      text: 'Picture of a dog',
      likes: '99',
      comments: '5'
    },
    {
      avatar:'http://barkpost.com/wp-content/uploads/2016/04/instagram-boo.jpg',
      name: 'Doglover123',
      date: 'Oktober 31, 2016',
      img: 'https://media1.popsugar-assets.com/files/thumbor/0yzGDDV9odnhbWxGyqj_rkTCh9A/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/03/14/175/n/1922243/34cd38a3_edit_img_image_40425785_1457026505_12328447_1664411397144999_1750840461_n/i/Celebrity-Cats-Instagram.jpg',
      text: 'Picture of a cat',
      likes: '32',
      comments: '3'
    },
    {
      avatar:'http://barkpost.com/wp-content/uploads/2016/04/instagram-boo.jpg',
      name: 'Dog234',
      date: 'September 12, 2016',
      img: 'https://media1.popsugar-assets.com/files/thumbor/0yzGDDV9odnhbWxGyqj_rkTCh9A/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/03/14/175/n/1922243/34cd38a3_edit_img_image_40425785_1457026505_12328447_1664411397144999_1750840461_n/i/Celebrity-Cats-Instagram.jpg',
      text: 'Picture of a cat',
      likes: '50',
      comments: '20'
    }

  ];
  public animalInput = "";

  constructor(public navCtrl: NavController) {

  }
}
