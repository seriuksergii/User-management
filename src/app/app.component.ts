import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserListTopComponent } from './components/user-list-top/user-list-top.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserListTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'user-management';
}
