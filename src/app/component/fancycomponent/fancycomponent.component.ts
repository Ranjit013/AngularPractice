import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fancycomponent',
  templateUrl: './fancycomponent.component.html',
  styleUrls: ['./fancycomponent.component.scss']
})
export class FancycomponentComponent implements OnInit {


  ngOnInit(): void {
    console.log("Hello Angular");
  }


}
