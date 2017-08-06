import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http'; 
import {Globals} from '../shared/api';

// let LOGIN_URL = 'http://0.0.0.0:8002/'



@Injectable()
export class ClientAuthService{

	private loginUrl = this.globals.LOGIN_URL;
	private logoutURL = this.globals.LOGOUT_URL;
	private userProfile = this.globals.CURRENT_PROFILE_URL;
	constructor(private globals: Globals, private http: Http){

	}

	login(credentials){
		
		return new Promise((resolve, reject) =>{
			let headers = new Headers();
			headers.append('Content-Type', 'application/json');
			this.http.post(this.loginUrl, JSON.stringify(credentials), {headers:headers})
			.subscribe(result => {
				resolve(result.json());
			}, (err) => {
				reject(err);
			})
		});


	}

	logout(){
		return new Promise((resolve, reject) => {
			let headers = new Headers();
			headers.append('Authorization', 'JWT ' + localStorage.getItem('token') );
			this.http.post(this.logoutURL, {}, {headers: headers}).subscribe(res => {
				localStorage.clear();
			}, (err) => {
				reject(err);
			})
		}); 	
	};


	getProfile(){

		return new Promise((resolve, reject) => {
			let headers = new Headers();
			headers.append('Authorization', 'JWT ' + localStorage.getItem('token') );
			this.http.get(this.userProfile,  {headers: headers}).subscribe(res => {
				resolve(res.json());
			}, (err) => {
				reject(err);
			})
		}); 

	};
}