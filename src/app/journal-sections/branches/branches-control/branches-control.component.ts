import { Component, OnInit } from '@angular/core';
import { BranchesService } from '../shared/branches.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-branches-control',
  templateUrl: './branches-control.component.html',
  styleUrls: ['./branches-control.component.css']
})
export class BranchesControlComponent implements OnInit {

  constructor(public service: BranchesService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      codigo_rama : null,
      nombre : '',
    };
  }

  onSubmit(form: NgForm){
    this.insertRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postBranch(form.value).subscribe(res =>{
      this.resetForm(form);
    });
  }
}
