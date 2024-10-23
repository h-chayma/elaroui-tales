import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleStoryComponent } from './single-story/single-story.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'story/:id', component: SingleStoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
