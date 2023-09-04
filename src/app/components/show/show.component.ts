import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/_services/crud.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  productsData:any;
  postsData:any;
  qoutesData:any;
  constructor(
    private router: Router,
    private crudService: CrudService,
  ) {
   
  }
 show(){
    this.crudService.show().subscribe({
        next: (response: any) => {
          this.productsData = response.products;
          this.postsData = response.posts;
          this.qoutesData = response.quotes;
        },
        error: (error: any) => {
          console.error('Error showing data:', error);
          this.crudService.swal("Error showing data", "error");
        }
  });
   }

   deleteProduct(id:number){
    this.crudService.deleteProduct(id).subscribe(
      (response: any) => {
        const message = response.message; // Extract the message field from the response
        this.crudService.swal(message, "success");
        this.show();
      },
      (error: any) => {
        console.error('Error deleting data:', error);
        this.crudService.swal("Error deleting data", "error");
      }
    );
  
   }
   deletePost(id:number){
    this.crudService.deletePost(id).subscribe(
      (response: any) => {
        const message = response.message; // Extract the message field from the response
        this.crudService.swal(message, "success");
        this.show();
      },
      (error: any) => {
        console.error('Error deleting data:', error);
        this.crudService.swal("Error deleting data", "error");
      }
    );
   }
   deleteQuote(id:number){
    this.crudService.deleteQuote(id).subscribe(
      (response: any) => {
        const message = response.message; // Extract the message field from the response
        this.crudService.swal(message, "success");
        this.show();
      },
      (error: any) => {
        console.error('Error deleting data:', error);
        this.crudService.swal("Error deleting data", "error");
      }
    );
   }
}
