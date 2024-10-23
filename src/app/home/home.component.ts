import { Component } from '@angular/core';
import { StoriesService } from '../services/stories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  stories: any[] = [];

  constructor(private storiesService: StoriesService) { }

  ngOnInit(): void {
    this.fetchStories();
  }

  fetchStories(): void {
    this.storiesService.getStories().subscribe(data => {
      this.stories = data;
    });
  }
}
