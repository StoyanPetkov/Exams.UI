import { Component } from '@angular/core';
import { ChatComponent } from './chat/chat.component'; // Import the ChatComponent

@Component({
  selector: 'app-root', // The selector for the root component
  standalone: true,    // Mark as standalone
  imports: [
    ChatComponent     // Import ChatComponent so it can be used in the template
    // CommonModule might be needed if you add *ngIf, *ngFor etc. here
    // RouterOutlet might be needed if using routing
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exams-ui-app'; // Your application title
}