import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

	uri = 'http://localhost:4000';

	constructor(private http: HttpClient) { }

	getData(){
		return this.http.get(`${this.uri}/users`);
	}

	getDataById(id){
		return this.http.get(`${this.uri}/users/${id}`);
	}

	addData(u_id, email, pwd, name, phone, gender ){
		const newData = {
			u_id : u_id,
			email : email,
			pwd : pwd,
			name : name,
			phone : phone,
			gender : gender
		};
		return this.http.post(`${this.uri}/users/add`, newData);
	}

	updateData(id, u_id, email, pwd, name, phone, gender ){
		const updateData = {
			u_id : u_id,
			email : email,
			pwd : pwd,
			name : name,
			phone : phone,
			gender : gender
		};
		return this.http.post(`${this.uri}/users/update/${id}`, updateData);
	}

	deleteData(id){
		return this.http.get(`${this.uri}/users/delete/${id}`);
	}
}
