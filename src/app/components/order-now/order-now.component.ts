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
    name: new FormControl('',Validators.required), 
    address:new FormControl('',Validators.required), 
    phone: new FormControl('',Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }
  getValues()
  {
    console.log(this.myform2);
  }


}
