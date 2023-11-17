import { Component, AfterContentInit, AfterContentChecked, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterContentInit, AfterContentChecked {
  @ContentChild('childContent', { static: false, read: ElementRef }) childContent!: ElementRef;
  ngAfterContentInit(): void {
    console.log("AfterContent Initialized");

  }
  ngAfterContentChecked(): void {
    console.log("After content checking started");

  }
}
