import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  addform! : FormGroup;

  constructor() { }

  ngOnInit(): void {
    // initialise the form

  }


  save() {

  }

  close() {
    
  }


}
