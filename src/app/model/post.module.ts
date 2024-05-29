import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from '../user-posts/edit/edit.component';
import { IndexComponent } from '../user-posts/index/index.component';
import { ViewComponent } from '../user-posts/view/view.component';
import { CreateComponent } from '../user-posts/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostRoutingModule } from './post-routing.module';
import { PostService } from '../services/post.service';

@NgModule({
  declarations: [CreateComponent, ViewComponent, IndexComponent, EditComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PostRoutingModule],
  providers:[PostService]
})
export class PostModule {}
