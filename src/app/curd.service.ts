import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './utils/profile';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CurdService {
 
  private profileSubmitUrl: string;
  private getprofilelist: string;
  private deleteprofileURL: string;

  constructor(private http: HttpClient) {
    this.profileSubmitUrl = 'http://localhost:8080/saveprofile';
   this.getprofilelist = 'http://localhost:8080/getprofilelist';
   this.deleteprofileURL = 'http://localhost:8080/deleteprofile';
  }

  public findAll(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.getprofilelist);
  }
   
  public save(profile: Profile) {
    console.log("ID :: "+profile.id)
    return this.http.post<Profile>(this.profileSubmitUrl, profile);
  } 


  public delete(profile: any) {
    console.log("ID :: "+profile)
    return this.http.get<any>(this.deleteprofileURL + "/"+profile);
  } 
}
