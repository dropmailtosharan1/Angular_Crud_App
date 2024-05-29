import { Component, OnInit } from '@angular/core';
import { UserPost } from '../user-post';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
     
  id!: number;
  post!: UserPost;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
        
    this.postService.find(this.id).subscribe((data: UserPost)=>{
      this.post = data;
    });
  }
    
}