import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CrudService } from 'src/app/_services/crud.service';
@Component({
  selector: 'app-delete-post-dialog',
  templateUrl: './delete-post-dialog.component.html',
  styleUrls: ['./delete-post-dialog.component.css']
})
export class DeletePostDialogComponent {
  postIdToDelete: number;
  constructor(
    private crudService: CrudService,
    public dialogRef: MatDialogRef<DeletePostDialogComponent>) { }

  deletePost() {
    this.crudService.deletePost(this.postIdToDelete).subscribe(
      (response: any) => {
        const message = response.message;
        this.crudService.swal(message, 'success');
      },
      (error: any) => {
        console.error('Please enter post id to delete.', error);
        this.crudService.swal('Please enter post id to delete.', 'error');
      }
    );
  }
}
