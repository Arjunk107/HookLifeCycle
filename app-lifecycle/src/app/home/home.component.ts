import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  ngOnInit() {
    console.log("onInit called");
  }
  ngOnChange() {
    console.log("Onchange Called");
  }
  ngDoCheck() {
    console.log("DoChange Called ")
  }
  ngOnDestroy() {
    console.log("Destroyed")
  }
}

