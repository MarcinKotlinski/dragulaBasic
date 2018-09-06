import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DragulaService } from 'ng2-dragula';

@IonicPage()
@Component({
  selector: 'page-spill',
  templateUrl: 'spill.html',
})
export class SpillPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private dragulaService: DragulaService) {
    dragulaService.createGroup("SPILL", {
      removeOnSpill: true
    });
  }
}
