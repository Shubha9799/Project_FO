import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 
  myform1 : FormGroup = new FormGroup(
    {
    Name: new FormControl('',Validators.required),  
    phone: new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    city:new FormControl('',Validators.required),
    Address:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    zip:new FormControl('',Validators.required)

    
  });
  userList: any;
  isUserAdded: boolean=false;
 
  
  
 
  constructor(private myhttp:HttpClient,
    private signService:UserService) { }

  ngOnInit(): void {
    this.signService.getUserdetails().subscribe((result: any) => {
      this.userList = result;
      console.log(result)
    })
  }
  getValues(formRef:any)
  {
    console.log(this.myform1);
    
    let data={
      Name: formRef.value.name,
      phone:formRef.value.phone,
      email:formRef.value.email,
      Address:formRef.value.address,
      city:formRef.value.city,
      state:formRef.value.state,
      zip:formRef.value.zip
    };
   
    this.myhttp.post('/api/users/sign-up', data).subscribe(data => {
      console.log(data);
      this.isUserAdded = true;
      
    });
  }


}
 

