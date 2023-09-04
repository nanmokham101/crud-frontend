import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/_services/crud.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent {
  fetchDatas:any;
  constructor(
    private router: Router,
    private crudService: CrudService,
  ) {
   
  }
 fetch(){
  this.crudService.fetch().subscribe({
    next: (response: any) => {
      this.fetchDatas = JSON.stringify(response, null, 2); // Beautify JSON
      this.crudService.swal("Data fetch successfully", "success");     
    },
    error: (error: any) => {
      console.error('Error fetching data:', error);
      this.crudService.swal("Error fetching data", "error");
    }
  });
 }
}
