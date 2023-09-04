import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../_services/crud.service';
import { MatDialog } from '@angular/material/dialog';
import { DeletePostDialogComponent } from '../delete-post-dialog/delete-post-dialog.component';
import { DeleteQuoteDialogComponent } from '../delete-quote-dialog/delete-quote-dialog.component';
import { DeleteProductDialogComponent } from '../delete-product-dialog/delete-product-dialog.component';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  title='delete-dialog'
  constructor(
    private router: Router,
    private crudService: CrudService,
    private dialog: MatDialog
  ) {
   
  }
  
   openProductDeleteDialog() {
    this.dialog.open(DeleteProductDialogComponent,{
      width:'350px',
      position:{
        top:'5%',
        left: '40%'
      }
    })
  }

  openPostDeleteDialog() {
    this.dialog.open(DeletePostDialogComponent,{
      width:'350px',
      position:{
        top:'5%',
        left: '40%'
      }
    })
  }

  openQuoteDeleteDialog() {
    this.dialog.open(DeleteQuoteDialogComponent,{
      width:'350px',
      position:{
        top:'5%',
        left: '40%'
      }
    })
  }




  
}
