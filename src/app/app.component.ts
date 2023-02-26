import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portal';
  //injección de dependencias
  http = inject(HttpClient);
  Posts: Array<Post> = [];

  ShowAlert() {
    alert('Hello World');
  }

  ngOnInit() {
    this.http.get<Post>('https://jsonplaceholder.typicode.com/posts')
    .subscribe((data) => {
        this.Posts.push(data);
      }
    );
  }
}
