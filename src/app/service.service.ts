import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url='http://localhost:8080/api/';
  Photo='http://localhost:8080/api/findMatierePhoto/';
  PhotoBrief='http://localhost:8080/api/findBriefPhoto/';


  constructor(private http : HttpClient) { }

  loginApprenant(login :String,password : String){
    return this.http.get(this.url+"login/"+login+"&"+password)
  }
  ApprenantEvaluation(evaluation:any){
    return this.http.get(this.url +"evaluationByApprenant/"+ evaluation);
  }
  ApprenantBrief(brief:any){
    return this.http.get(this.url +"findBriefByApprenant/"+ brief);
  }
}
