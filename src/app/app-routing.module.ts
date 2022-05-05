import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from "./book/book-list/book-list.component";
import {BookCreateComponent} from "./book/book-create/book-create.component";
import {BookEditComponent} from "./book/book-edit/book-edit.component";
import {BookDeleteComponent} from "./book/book-delete/book-delete.component";
import {BookViewComponent} from "./book/book-view/book-view.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: BookListComponent
  }, {
    path: 'create',
    component: BookCreateComponent
  }, {
    path: 'edit/:id',
    component: BookEditComponent
  }, {
    path: 'delete/:id',
    component: BookDeleteComponent
  }, {
    path: 'view/:id',
    component: BookViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
