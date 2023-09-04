import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FetchComponent } from './components/fetch/fetch.component';
import { ShowComponent } from './components/show/show.component';
import { SaveComponent } from './components/save/save.component';
import { DeleteComponent } from './components/delete/delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DeleteProductDialogComponent } from './components/delete-product-dialog/delete-product-dialog.component';
import { DeletePostDialogComponent } from './components/delete-post-dialog/delete-post-dialog.component';
import { DeleteQuoteDialogComponent } from './components/delete-quote-dialog/delete-quote-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FetchComponent,
    ShowComponent,
    SaveComponent,
    DeleteComponent,
    DeleteProductDialogComponent,
    DeletePostDialogComponent,
    DeleteQuoteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
    BrowserModule,
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
