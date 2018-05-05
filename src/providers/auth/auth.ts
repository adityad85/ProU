import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';



@Injectable()
export class AuthProvider {
data:any;
  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  loginUser(user){ 
    
  }

  saveQuesService(ques){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8080/saveQues', ques, {headers: headers})
      .subscribe(data => {
        console.log(data);
      });
  }


  getQues(){
    
    return new Promise(resolve => {

      this.http.get('http://localhost:8080/getQues')
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          console.log(this.data);
        });
    });

    
  }

}
