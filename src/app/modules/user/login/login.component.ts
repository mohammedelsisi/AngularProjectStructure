import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  invalid:boolean=false;
  constructor(private _user:UserService,private formBuilder:FormBuilder,private _router:Router) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      email:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }
  login(){
    let log:Login=this.form.value;
      this._user.login(log).subscribe(re=>{
        this._user.logged=true;
        this._router.navigateByUrl("/second")

      },
      error=>{
            this.invalid=true;
      })
  }
}
