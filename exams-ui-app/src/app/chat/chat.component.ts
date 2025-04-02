import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common'; // Import CommonModule for ngFor

interface ChatMessage {
  sender: string;
  text: string;
}

@Component({
  selector: 'app-chat', // How you'll use this component in HTML (<app-chat>)
  standalone: true, // Mark as standalone
  imports: [
    CommonModule, // Needed for *ngFor
    FormsModule   // Needed for [(ngModel)]
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: ChatMessage[] = [
    // Some initial dummy messages for display purposes
    { sender: 'System', text: 'Welcome to the chat!' },
    { sender: 'Alice', text: 'Hi everyone!' }
  ];
  newMessage: string = ''; // Holds the text typed by the user
  currentUser: string = 'Me'; // Placeholder for the current user's name

  sendMessage(): void {
    // Basic validation: don't send empty messages
    if (this.newMessage.trim() === '') {
      return;
    }

    // Create a new message object
    const messageToSend: ChatMessage = {
      sender: this.currentUser, // Use the placeholder name for now
      text: this.newMessage
    };

    // Add the message to the local list (simulates sending)
    this.messages.push(messageToSend);

    // Clear the input field
    this.newMessage = '';

    // In the next step, we will replace the push above
    // with logic to send the message to the .NET backend via sockets.
  }
}

// --- Notes for NON-Standalone Components ---
// If you are NOT using standalone components (you omitted --standalone):
// 1. Remove the `standalone: true` line.
// 2. Remove the `imports: [CommonModule, FormsModule]` array.
// 3. Go to `src/app/app.module.ts`.
// 4. Import the component: `import { ChatComponent } from './chat/chat.component';`
// 5. Add `ChatComponent` to the `declarations` array within `@NgModule`.
// 6. Ensure `CommonModule` and `FormsModule` are imported in `app.module.ts`
//    (usually `BrowserModule` which includes `CommonModule` is already there,
//    but you'll likely need to add `FormsModule` to the `imports` array).
//    `import { FormsModule } from '@angular/forms';`