import { Component } from '@angular/core';
import { StoriesService } from '../services/stories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-story',
  templateUrl: './single-story.component.html',
  styleUrl: './single-story.component.css'
})
export class SingleStoryComponent {
  story: any;
  videoKey: string | undefined;
  stories: any[] = [];

  constructor(private route: ActivatedRoute, private storiesService: StoriesService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? 0;
    this.getStoryDetails(+id);
    this.fetchStories();
  }

  getStoryDetails(id: number) {
    this.storiesService.getStoryById(id).subscribe((data: any) => {
      this.story = data;
      this.videoKey = data.youtube;
    }, error => {
      console.error('Error fetching story details:', error);
    });
  }

  fetchStories(): void {
    this.storiesService.getStories().subscribe(data => {
      this.stories = data;
    });
  }
}
