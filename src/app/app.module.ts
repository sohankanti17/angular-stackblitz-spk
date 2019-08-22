import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, CollapseModule.forRoot(), BsDropdownModule.forRoot() ],
  declarations: [ AppComponent, NavigationComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
