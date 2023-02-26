import { Component, Input } from '@angular/core';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() posts!: Post;
}
