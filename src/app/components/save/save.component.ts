import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/_services/crud.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent {
  constructor(
    private router: Router,
    private crudService: CrudService,
  ) {
   
  }
 save(){
  this.crudService.save().subscribe(
    (response: any) => {
      const message = response.message; // Extract the message field from the response
      this.crudService.swal(message, "success");
    },
    (error: any) => {
      console.error('Error saving data:', error);
      this.crudService.swal("Error saving data", "error");
    }
  );
}
  
}
