import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  dataSource: MatTableDataSource<any> | undefined;
  displayedColumns: string[] = ['productName', 'productDescription', 'productPurchasePrice', 'productSellingPrice', 'productQuantity', 'productActive'];

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource!.paginator = this.paginator;
        // this.paginator.pageSize = 25; // Set default page size to 25
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  // products?: any[];

  // constructor(private productService: ProductService) { }

  // ngOnInit(): void {
  //   this.loadProducts();
  // }

  // loadProducts() {
  //   this.productService.getAllProducts().subscribe(
  //     (data) => {
  //       this.products = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching products:', error);
  //     }
  //   );
  // }
  
}
