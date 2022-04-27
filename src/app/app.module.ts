import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FocusDirective } from './focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    FocusDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
