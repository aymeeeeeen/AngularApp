import { AccountService } from './../../services/account.service';
import { TokenService } from './../../services/token.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm =new FormGroup ({
    username: new FormControl(null , Validators.required),
    password: new FormControl(null , Validators.required)

  })

  constructor(private authService : AuthService , private tokenService: TokenService , 
    private router: Router,
    private accountService : AccountService) { }

  login(){
   this.authService.login(this.loginForm.value).subscribe(res => this.handlResponse(res));
  }

  ngOnInit(): void {
  }
  handlResponse(res){

    this.tokenService.handle(res)
    this.accountService.changeStatus(true);
    this.router.navigateByUrl("/users")

  }


}
