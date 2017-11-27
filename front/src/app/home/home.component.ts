import { Component, OnInit } from '@angular/core';
import {AppService} from "../service/app.service";

@Component({
  selector: 'home-header',
  providers: [AppService],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private _service:AppService){}

  ngOnInit(){
    this._service.checkCredentials();
  }

  logout() {
    this._service.logout();
  }
}
