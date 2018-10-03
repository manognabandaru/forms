import { Component, OnInit } from '@angular/core';
//import {FormGroup,FormControl,Validators} from '@angular/forms';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  // FormControl;
  // user = new FormGroup({
  //   name: new FormControl('',[Validators.required,Validators.minLength(5)]),
  //   email: new FormControl('abc@gmail.com'),
  //   Age: new FormControl(),
  //   address: new FormGroup({
  //     street : new FormControl(),
  //     zipcode : new FormControl()
  //   })
  // })
  

  user : FormGroup;

  constructor(private fb: FormBuilder) { }

  onSubmit(){
    console.log(this.user.value);

  }

  ngOnInit() {
    this.user=this.fb.group({
      name:['Mano',Validators.required],
      email: '',
    Age: '',
    address: this.fb.group({
      street:'',
      zipcode:''
    })

    });
  }

}
