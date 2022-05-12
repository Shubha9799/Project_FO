import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform : FormGroup = new FormGroup(
    {
    name: new FormControl('',Validators.required),  
    phone: new FormControl('',Validators.required)
    
  });
  submitted: boolean | undefined;
  isUserAdded: boolean=false;

  constructor(private myhttp:HttpClient) { }

  ngOnInit(): void {
  }
  getValues(myform:any) {
    console.log(myform)
    let data={
      name:myform.value.name,
      phone:myform.value.phone

    };
    this.myhttp.post('/api/users/login', data)
    .subscribe(data => {
      console.log(data);
      this.isUserAdded = true;
     
    
      myform.form.reset();
    });
  }


  onClickSubmit(data: any) {
    alert("Logged in successfully")
     console.log(data);
  }
}
  


