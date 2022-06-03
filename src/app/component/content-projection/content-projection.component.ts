import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit, AfterContentInit, AfterViewInit{

   isItReady : boolean = false;

  @ContentChild("role")
  adminTemplate: ElementRef<any> | undefined;

  @ViewChild("hello")
  testTemplate: ElementRef<any> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log("this is Template Ref",this.adminTemplate?.nativeElement.innerHTML);
  }

  ngAfterViewInit(): void {
    console.log("this is a View child", this.testTemplate?.nativeElement.innerHTML);
  }

}
