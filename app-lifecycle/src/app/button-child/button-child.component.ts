import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button-child',
  templateUrl: './button-child.component.html',
  styleUrls: ['./button-child.component.scss']
})
export class ButtonChildComponent implements OnInit, OnChanges {

  @Input()
  data: number | undefined;
  constructor() { }
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
}
