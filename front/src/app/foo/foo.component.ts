import { Component } from '@angular/core';
import {AppService} from "../service/app.service";

@Component({
  selector: 'foo-details',
  providers: [AppService],
  templateUrl: './foo.component.html',
})

export class FooComponent {
  private resourceServerUrl = 'http://localhost:8082/hello';
  private message: string;

  constructor(private _service:AppService) {}

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
