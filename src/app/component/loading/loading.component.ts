import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input() test: any;

  @Output() emitExplosion = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

    this.emitExplosion.emit("Atom Bomb Explosion")
  }

}
