import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


 
@Injectable()
export class AuthProvider {
data:any; 
xyz: any;
userboy: any;
  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }
  
  loginUser(user){ 
    let headers = new HttpHeaders();
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:8080/loginUser', user, {headers: headers}).
      map(res => res);
  }

  signUp(user){
      let headers = new HttpHeaders();
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:8080/registerUser', user, {headers: headers}).
      subscribe(data => {
        this.userboy = data;
        console.log(user.name);
      });
  } 

  saveQuesService(ques){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8080/saveQues', ques, {headers: headers})
      .subscribe(data => {
      
      });
  }


getQues(){
    
    return new Promise(resolve => {

      this.http.get('http://localhost:8080/getQues')
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          
          
        });
    });
  }

}
