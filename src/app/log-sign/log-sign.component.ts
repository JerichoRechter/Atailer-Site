import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-sign',
  templateUrl: 'log-sign.component.html',
  styleUrls: ['./log-sign.component.css']
})
export class LogSignComponent  implements OnInit{
  signupUsers:any[]=[];
  signupObject:any={
    userName:'',
    password:'',
    email:''
  };
  statusToken:any={
    code:0,
  }
  loginObject:any={
    userName:'',
    password:'',
 
  };
  constructor(){}
  ngOnInit(): void {
    const localData=localStorage.getItem('signUpUsers');
    
    if (localData !=null){
      this.signupUsers=JSON.parse(localData);
    }
  
  }
  onSignUp(){
    this.signupUsers.push(this.signupObject);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObject={
      userName:'',
      password:'',
      email:''
    };
  }
  
  
  onLogin(){
    const isUserExist=this.signupUsers.find(m=>m.userName==this.loginObject.userName&&m.password==this.loginObject.password);
    if (isUserExist!=undefined){
      alert("User Login Succesful!");
      this.statusToken.code==1;
      

    }else{
        alert("Login Failed")
        this.statusToken.code=0;
        
      }
    };

  
}
function isLoggedIn() {
  throw new Error('Function not implemented.');
}

