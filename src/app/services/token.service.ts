import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  set(data:any){
    localStorage.setItem('token', data.token);
  
    localStorage.setItem('username', data.username);
  
    }
    handle(data){
      this.set(data);
    }
    getToken(){
      return localStorage.getItem('token');
    }
    getUsername(){
      return localStorage.getItem('username');
    }
    remove(){
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    }
    decode(payload){
      return JSON.parse(atob(payload));
    }
    payload(token){
      const payload = token.split('.')[1];
      console.log('payload :', payload);
      return this.decode(payload);
    }
    isValid(){
      const token = this.getToken();
      const username = this.getUsername();
      if(token){
        const paylaad = this.payload(token);
        if(paylaad){
          return username == paylaad.username;
        }
      }
      return false;
    }
    getInfos(){
      const token = this.getToken();
      if(token){
        const payload = this.payload(token);
        return payload ? payload : null;
      }
      return null;
    }
    loggedIn(){
     
    
     return this.isValid();
    }
    
  
}
