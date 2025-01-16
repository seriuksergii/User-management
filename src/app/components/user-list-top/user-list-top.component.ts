import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateEditUserComponent } from '../modal-create-edit-user/modal-create-edit-user.component';

@Component({
  selector: 'app-user-list-top',
  standalone: true,
  templateUrl: './user-list-top.component.html',
  styleUrl: './user-list-top.component.scss',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class UserListTopComponent {
  constructor(private _dialog: MatDialog) {}

  openAddUserForm() {
    this._dialog.open(ModalCreateEditUserComponent);
  }
}
