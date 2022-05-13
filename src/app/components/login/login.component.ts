import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl?: string;

  userMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private myuser: UserService

  ) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    alert("Logged in successfully!!!")

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;


    this.myuser.loginUser(this.f['name'].value, this.f['phone'].value)
      .subscribe(
        {
          next: (data: any) => {
            this.loading = true;
            console.log(data, this.f)

            if (data.length) {
              // sessionStorage.setItem('loggedUser', JSON.stringify(data[0]));
              this.router.navigate(['/listing']);
            } else {
              this.userMessage = 'Login user not found, please enter correct name and phone number';
            }

          },
          error: (e: any) => {
            this.loading = false;
            console.error(e)
          }
        }
      )
  }

}


