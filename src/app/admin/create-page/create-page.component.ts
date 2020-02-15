import { Component, OnInit } from '@angular/core';
import { FormGroup, FormContorl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormContorl(null, Validators.required),
      text: new FormContorl(null, Validators.required),
      author: new FormContorl(null, Validators.required)
    });

  }

  submit() {
    if (this.form.invalid) {
      return;
    }
  }

}
