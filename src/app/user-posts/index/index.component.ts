import { Component, OnInit } from '@angular/core';
import { UserPost } from '../user-post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
      
  posts: UserPost[] = [];
    
  constructor(public postService: PostService) { }
  
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: UserPost[])=>{
      this.posts = data;
      console.log(this.posts);
    })  
  }

  deletePost(id:number){
    this.postService.delete(id).subscribe((res:any) => {
         this.posts = this.posts.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
    
}