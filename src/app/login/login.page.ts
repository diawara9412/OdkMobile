import { Component, ContentChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,private service : ServiceService) { }
passwordType :string ='password';
passwordIcon: string ='eye-off';
loginInfo :any;

  ngOnInit() {
  }
  hideShowpassword(){
    this.passwordType= this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon= this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
  connexion(form: NgForm){
    this.service.loginApprenant(form.value["username"],form.value["password"]).subscribe((data)=>{
      console.log(form.value["username"]);
      if(data){
      this.loginInfo = data;
     
      let loginStatus = true
      let apprenant = true;
      location.replace("/home");
      localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
      localStorage.setItem('apprenant', JSON.stringify(apprenant));
      
     
      localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
    }else{
      // this.toast.error("Login ou mot de passe incorrect");
      this.router.navigate(["/login"])
      let loginStatus = false;
      localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
      console.log("login non connecter");
    }
  
  },
    )}
}
