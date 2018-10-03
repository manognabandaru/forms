import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  enterEmail="Enter Email";
  enterName="Enter Name";
  enterAddress="Enter Address";
  enterZipcode="Enter Zipcode";
  enterCountry="Enter Country";

  onSubmit(form : NgForm){
    console.log(form);

  }
}
