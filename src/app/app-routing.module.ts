import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchComponent } from './components/fetch/fetch.component';
import { SaveComponent } from './components/save/save.component';
import { ShowComponent } from './components/show/show.component';
import { DeleteComponent } from './components/delete/delete.component';

const routes: Routes = [
  { path: 'fetch', component: FetchComponent },
  { path: 'save', component: SaveComponent },
  { path: 'show', component: ShowComponent },
  { path: 'delete', component: DeleteComponent },
  { path: '', redirectTo: 'fetch', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
