import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {
 
  isUserAdded=false;
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  myform3: FormGroup = new FormGroup(
    {
      Name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required, Validators.pattern(this.emailRegEx)]),
      date: new FormControl('', Validators.required),
      time : new FormControl(''),
      noa: new FormControl('', Validators.required)
      


    });
  constructor(private myhttp:HttpClient) { }

  
  ngOnInit(): void {
  }
  getValues(myform3: any) {
    console.log(this.myform3);
    alert("Booked your table successfully")
    let data = {
      Name: myform3.value.Name,
      phone: myform3.value.phone,
      email: myform3.value.email,
      
      date: myform3.value.date,
      time: myform3.value.time,
      noa: myform3.value.noa
    };
    console.log(myform3)
    this.myhttp.post('/api/users/book-now', data)
      .subscribe(data => {
        console.log(data);
        this.isUserAdded = true;
        myform3.form.reset();

      });
  }
}
 
