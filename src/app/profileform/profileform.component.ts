import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CurdService } from '../curd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataTransferService } from '../utils/data-transfer-service';
import { Profile } from '../utils/profile';

@Component({
  selector: 'app-profileform',
  templateUrl: './profileform.component.html',
  styleUrls: ['./profileform.component.css']
})
export class ProfileformComponent implements OnInit {
  form!: FormGroup; 
  constructor(private router: Router, private formBuilder: FormBuilder, private curdService: CurdService, public route: ActivatedRoute) {
    
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
     let  pid = params["id"];
     let firstname = params["firstname"];
     let lastname = params["lastname"];
     let email = params["email"];
     let mobile = params["mobile"];

     this.form = this.formBuilder.group({
      id: [pid],
      firstname: [firstname],
      lastname: [lastname],
      email: [email],
      mobile: [mobile],
    });

    });
  } 

  submit() { 
    this.curdService.save(this.form.value).subscribe(result => {
      alert("Successfylly Saved"); 
      this.router.navigate(['/dashboard']);
    })
}

gotoHomePage(){
  this.router.navigate(['/dashboard']);
}



}