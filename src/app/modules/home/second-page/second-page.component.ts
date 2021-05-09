import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor(private _user:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this._user.logged=false;
    this.router.navigateByUrl("user")
  }

}
