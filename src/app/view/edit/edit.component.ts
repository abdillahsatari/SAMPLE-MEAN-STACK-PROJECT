import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { ServerService } from'../../server.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	id: String;
	user: any = {};

	updateForm : FormGroup;

  constructor(private serverService: ServerService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb:FormBuilder ) {
  	this.updateUSer();
   }

   updateUSer(){
   	this.updateForm = this.fb.group({
  		u_id : ['', Validators.required],
  		email : '',
  		pwd : '',
  		name : '',
  		phone : '',
  		gender : ''
  	});
   }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.id=params.id;
  		this.serverService.getDataById(this.id).subscribe(res => {
  			this.user = res;
  			this.updateForm.get('u_id').setValue(this.user.u_id);
  			this.updateForm.get('email').setValue(this.user.email);
  			this.updateForm.get('pwd').setValue(this.user.pwd);
  			this.updateForm.get('name').setValue(this.user.name);
  			this.updateForm.get('phone').setValue(this.user.phone);
  			this.updateForm.get('gender').setValue(this.user.gender);
  			//this.updateForm.get('status').setValue(this.user.status);
  		});
  	});
  }

  updateDataUser(u_id, email, pwd, name, phone, gender){
  	this.serverService.updateData(this.id, u_id, email, pwd, name, phone, gender).subscribe(() => {
  		this.snackBar.open('User Updated Succesfully', 'OK', {
  			duration: 3000
  		});
  	});
  }

}
