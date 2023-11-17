import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ButtonComponent } from './button/button.component';
import { ButtonChildComponent } from './button-child/button-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    ButtonComponent,
    ButtonChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
