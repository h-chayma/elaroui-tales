import { Component } from '@angular/core';
import { StoriesService } from '../services/stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent {
  stories: any[] = [];
  loading: boolean = true;

  constructor(private storiesService: StoriesService) { }

  ngOnInit(): void {
    this.fetchStories();
  }

  fetchStories(): void {
    this.storiesService.getStories().subscribe(data => {
      this.stories = data;
      this.loading = false;
    });
  }
}
