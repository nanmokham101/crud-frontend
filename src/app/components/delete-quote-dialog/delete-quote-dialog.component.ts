import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CrudService } from 'src/app/_services/crud.service';
@Component({
  selector: 'app-delete-quote-dialog',
  templateUrl: './delete-quote-dialog.component.html',
  styleUrls: ['./delete-quote-dialog.component.css']
})
export class DeleteQuoteDialogComponent {
  quoteIdToDelete: number;
  constructor(
    private crudService: CrudService,
    public dialogRef: MatDialogRef<DeleteQuoteDialogComponent>) { }

  deleteQuote() {
    this.crudService.deleteQuote(this.quoteIdToDelete).subscribe(
      (response: any) => {
        const message = response.message;
        this.crudService.swal(message, 'success');
      },
      (error: any) => {
        console.error('Please enter quote id to delete.', error);
        this.crudService.swal('Please enter quote id to delete.', 'error');
      }
    );
  }
}
