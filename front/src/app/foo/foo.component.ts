import { Component, OnInit } from '@angular/core';
import {AppService} from "../service/app.service";

@Component({
  selector: 'foo-details',
  providers: [AppService],
  templateUrl: './foo.component.html',
})

export class FooComponent implements OnInit{

  private resourceServerUrl = 'http://localhost:8082/hello';
  private userDetailsUrl = 'http://localhost:8082/user';
  private message: string;
  private details: string;

  constructor(private _service:AppService) {}

  ngOnInit(): void {
    this._service.getResource(this.userDetailsUrl)
      .subscribe(data => this.details = data, error => this.details = error);
  }
  getMessage(){
    this._service.getResource(this.resourceServerUrl)
      .subscribe(
        data => {
            return this.message = data
        },error =>  {
            this.message = 'Error' + error;
        });
  }
}
