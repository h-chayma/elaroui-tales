import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'elaroui-tales';

  isLoading = true;

  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
