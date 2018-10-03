import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
 import {ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormsComponent} from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
