import { Injectable } from '@angular/core';
import { Branches } from './branches.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  formData: Branches;
  readonly rootURL = 'https://localhost:44364/';

  constructor(private http: HttpClient) { }

  postBranch(formData: Branches){
    return this.http.post(this.rootURL + '/RAMA_CIENTIFICA', formData);
  }
}
