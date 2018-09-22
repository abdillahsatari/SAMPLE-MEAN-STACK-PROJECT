import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';


import { User } from '../../user.model';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	user : User[];
	displayedColumns = ['u_id', 'email', 'pwd', 'name', 'phone', 'gender', 'actions' ];

  constructor(private ServerService: ServerService, private router: Router) { }

  ngOnInit() {
  	// this.ServerService.getData().subscribe((pengguna) =>{
  	// 	console.log(pengguna);
  	// });
  	this.fetchDataUser();
  }

  fetchDataUser(){
  	this.ServerService.getData().subscribe((data: User[]) => {
  		this.user = data;
  		console.log('Data requested ...');
  		console.log(this.user);
  	});
  }

  editDataUser(id){
  	this.router.navigate([`/edit/${id}`]);
  }

  deleteDataUser(id){
  	this.ServerService.deleteData(id).subscribe(() =>{
  		this.fetchDataUser();
  	});
  }


}
