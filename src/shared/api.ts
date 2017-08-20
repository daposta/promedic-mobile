
import { Injectable } from '@angular/core';

Injectable()
export class Globals{
	HOST_URL =   'http://139.162.213.237:8002';// 'http://0.0.0.0:8002'; // 
	LOGIN_URL =  this.HOST_URL + '/client/api/api-token-auth/';
    LOGOUT_URL =  this.HOST_URL + '/client/api/logout/';
    REGISTER_URL = this.HOST_URL + '/client/api/register/';
    BLOOD_GRPS_URL =  this.HOST_URL + '/client/api/blood_groups/';
    DISABILITY_URL =  this.HOST_URL + '/client/api/disabilities/';
    ALLERGIES_URL =  this.HOST_URL + '/client/api/allergies/';
    DISEASE_URL =  this.HOST_URL + '/client/api/diseases/';
    GENOTYPES_URL =  this.HOST_URL + '/client/api/genotypes/';
    GENDER_URL =  this.HOST_URL + '/client/api/genders/';
    CREATE_PROFILE_URL =  this.HOST_URL + '/client/api/create_profile/';
    CURRENT_PROFILE_URL = this.HOST_URL + '/client/api/current_profile/'; //current_profile
    PROFILE_DETAIL_URL = this.HOST_URL + '/client/api/profile_detail/';

    RESPONDER_LOGIN_URL =  this.HOST_URL + '/responder/api/api-token-auth/';
    RESPONDER_PROFILE_URL = this.HOST_URL + '/responder/api/current_profile/';
    RESPONDER_LOGOUT_URL =  this.HOST_URL + '/responder/api/logout/';


    constructor(){}

    // public get LoginURL(){
    //     return  this.LOGIN_URL;
    // }

    
}
