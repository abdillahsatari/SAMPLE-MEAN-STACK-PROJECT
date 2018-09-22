import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

	createForm: FormGroup;

  constructor(private ServerService: ServerService, private fb: FormBuilder, private router: Router) { 
  	this.createForm = this.fb.group({
  		u_id : ['', Validators.required],
  		email : '',
  		pwd : '',
  		name : '',
  		phone : '',
  		gender : ''
  	});
  }

  addDataUser(u_id, email, pwd, name, phone, gender){
  	this.ServerService.addData(u_id, email, pwd, name, phone, gender).subscribe(() =>{
  		this.router.navigate(['/list']);
  	})
  }

  ngOnInit() {
  }

}
