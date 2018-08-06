import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProviderJsonProvider } from '../../providers/provider-json/provider-json';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users
  constructor(public navCtrl: NavController, public provider: ProviderJsonProvider) { }

  ionViewDidLoad() {
    this.provider.getData()
    .subscribe((data) => { this.users = data },
    (error)=>{console.log(error);}
    )
  }

}
