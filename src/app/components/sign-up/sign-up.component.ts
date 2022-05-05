import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  myform1 : FormGroup = new FormGroup(
    {
    name: new FormControl('',Validators.required),  
    phone: new FormControl('',Validators.required),
    email:new FormControl('',[Validators.email,Validators.required,Validators.pattern(this.emailRegEx)]),
    city:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    zip:new FormControl('',Validators.required)

    
  });
  constructor() { }

  ngOnInit(): void {
  }
  getValues()
  {
    console.log(this.myform1);
  }

}
