import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SingleStoryComponent } from './single-story/single-story.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import localeAr from '@angular/common/locales/ar'; 
import { registerLocaleData } from '@angular/common';
import { StoriesComponent } from './stories/stories.component';

registerLocaleData(localeAr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SingleStoryComponent,
    SafeUrlPipe,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ar' }], 
  bootstrap: [AppComponent]
})
export class AppModule { }
