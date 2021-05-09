import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private _fb: FormBuilder, private _us: UserService,private _router:Router) { }

  ngOnInit(): void {
    this.formGroup = this._fb.group({
      userName: ["aa", [Validators.minLength(6), Validators.required]],
      email: ["bb", [Validators.email, Validators.required]],
      password: ["cc", [Validators.minLength(6), Validators.required]]
    })
  }

  saveUser() {
    let std: Student = this.formGroup.value;
    this._us.insert(std).subscribe(e => {
      console.log(e);
      console.log("success")
      this._router.navigateByUrl("/user")


    },
      e => {
        console.log("error")
      });
  }

}
