import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.css']
})
export class OrderNowComponent implements OnInit {
  myform2 : FormGroup = new FormGroup(
    {
    Name: new FormControl('',Validators.required), 
    Address:new FormControl('',Validators.required), 
    phone: new FormControl('',Validators.required)
  });
  isUserAdded: boolean=false;
  constructor(private myhttp:HttpClient) { }

  ngOnInit(): void {
  }
  getValues(myform2:any)
  {
    console.log(this.myform2);
    
    alert("Order Placed")
    let data = {
      Name: myform2.value.Name,
      Address: myform2.value.Address,
      phone:myform2.value.phone
    };
    console.log(myform2)
    this.myhttp.post('/api/users/order-now', data)
      .subscribe(data => {
        console.log(data);
        this.isUserAdded = true;
        myform2.form.reset();

      });
  }
  }



