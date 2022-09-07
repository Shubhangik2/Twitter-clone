import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController) {}
  hide=false;
  k: true;

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  hideTweet(){
    // console.log("print")
    if(this.hide==false){
      this.hide=true
    }
    else{
      this.hide=false;
    }
  }
}
