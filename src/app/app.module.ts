import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import {AgGridModule} from "ag-grid-angular";
import {HttpClientModule} from "@angular/common/http";
import { ContentProjectionComponent } from './component/content-projection/content-projection.component';
import { MyimagesComponent } from './component/myimages/myimages.component';
import { ClassDirective } from './class.directive';
import { FancycomponentComponent } from './component/fancycomponent/fancycomponent.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoadingComponent } from './component/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentProjectionComponent,
    MyimagesComponent,
    ClassDirective,
    FancycomponentComponent,
    LoadingComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AgGridModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
