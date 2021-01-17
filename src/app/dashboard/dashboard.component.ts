import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Profile } from '../utils/profile';
import { CurdService } from '../curd.service';
import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import { DataTransferService } from '../utils/data-transfer-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  profiles!: Profile[];
  public profile: Profile; 

  constructor(private router: Router, private curdService: CurdService) {
    this.profile = new Profile();
  }

  ngOnInit() {
    this.curdService.findAll().subscribe(data => {
      this.profiles = data;
    });
  } 
  gotoHomePage() {
    this.router.navigate(['/dashboard']);
  }
 
  showProfileDetails(profile: any) {
    console.log(profile); 
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "id": profile.id,
        "firstname": profile.firstname,
        "lastname": profile.lastname,
        "email": profile.email,
        "mobile": profile.mobile,
      }
    };
    this.router.navigate(['/profileform'], navigationExtras);
  } 
  deleteProfileDetails(profile: Profile): void {
    this.curdService.delete(profile.id).subscribe(data => {
      alert("Successfylly Deleted");
      this.profiles = data;
    })
  };

}
