import { Component } from '@angular/core';
import { CrudService } from 'src/app/_services/crud.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-delete-product-dialog',
  templateUrl: './delete-product-dialog.component.html',
  styleUrls: ['./delete-product-dialog.component.css']
})
export class DeleteProductDialogComponent {
  productIdToDelete: number;
  constructor(
    private crudService: CrudService,
    public dialogRef: MatDialogRef<DeleteProductDialogComponent>) { }

  deleteProduct() {
    this.crudService.deleteProduct(this.productIdToDelete).subscribe(
      (response: any) => {
        const message = response.message;
        this.crudService.swal(message, 'success');
      },
      (error: any) => {
        console.error('Please enter product id to delete.', error);
        this.crudService.swal('Please enter product id to delete.', 'error');
      }
    );
  }
}
