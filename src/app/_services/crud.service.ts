import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
const AUTH_API = 'http://localhost:8080/api/v1/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {}


  swal(text  :any , icon : any){
    Swal.fire({
      text : text,
      icon : icon
    });
  }
  show(){
    return this.http.get(AUTH_API + 'show');
  }
  deleteProduct(id: number) {
    return this.http.delete(AUTH_API +'delete/product?id='+ id);
  }
  deletePost(id: number) {
    return this.http.delete(AUTH_API +'delete/post?id='+ id);
  }
  deleteQuote(id: number) {
    return this.http.delete(AUTH_API +'delete/quote?id='+ id);
  }
  save(): Observable<any> {
    return this.http.get(AUTH_API + 'save');
  }
  fetch(){
    return this.http.get(AUTH_API + 'fetch');
  }
  }
