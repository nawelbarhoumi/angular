import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  submitted = false;
  addProductForm: FormGroup = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    productDescription: new FormControl('', [Validators.required, Validators.minLength(8)]),
    quantity: new FormControl('', [Validators.required]),
  })
  constructor() { }

  ngOnInit(): void {
  }

  saveProduct()
  {
    this.submitted = true;
    if(this.addProductForm.invalid)
    {
      return ;
    }

    let products = JSON.parse(localStorage.getItem('products') || '[]');
    products.push(this.addProductForm.value);
    localStorage.setItem('products', JSON.stringify(products));

    this.addProductForm.reset();
    this.submitted = false;

    this.router.navigate(['addProduct-list'])
  }

}
