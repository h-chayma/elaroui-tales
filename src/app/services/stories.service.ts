import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Story {
  id: number;
  title: string;
  date: string;
  text: string;
  youtube: string;
}

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  private apiUrl = 'https://abdelaziz-elaroui-stories-api-production.up.railway.app/stories';

  constructor(private http: HttpClient) { }

  getStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.apiUrl);
  }

  getStoryById(id: number): Observable<Story> {
    return this.http.get<Story>(`${this.apiUrl}/${id}`);
  }
}
