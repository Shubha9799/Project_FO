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

  constructor(private myhttp:HttpClient) { }

  ngOnInit(): void {
  }
  getValues(formRef:any) {
    
    let data={
      name:formRef.value.name,
      phone:formRef.value.phone

    };
    this.myhttp.post('/api/users/login', data, { responseType: 'text' })
    .subscribe(data => {
      console.log(data);
      this.myform.reset();
    });
  }


  onClickSubmit(data: any) {
    alert("Logged in successfully")
     console.log(data);
  }
}
  


