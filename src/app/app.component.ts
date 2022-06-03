import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {ContentProjectionComponent} from "./component/content-projection/content-projection.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: any = 'App component';
  testExplosion: any


  constructor() {
  }

  getExplosion(params:any)
  {
    this.testExplosion = params;
  }



}
