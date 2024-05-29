import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../user-posts/index/index.component';
import { ViewComponent } from '../user-posts/view/view.component';
import { CreateComponent } from '../user-posts/create/create.component';
import { EditComponent } from '../user-posts/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'post/index', pathMatch: 'full'},
  { path: 'post/index', component: IndexComponent },
  { path: 'post/:postId/view', component: ViewComponent },
  { path: 'post/create', component: CreateComponent },
  { path: 'post/:postId/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostRoutingModule { }
