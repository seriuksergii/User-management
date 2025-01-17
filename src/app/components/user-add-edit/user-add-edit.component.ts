import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup } from '@angular/forms';
import { UsersService } from '../../service/users.service';
import { MatDialogRef } from '@angular/material/dialog';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  description: string;
  tags: string[];
  actions?: string;
}

@Component({
  selector: 'app-user-add-edit',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  templateUrl: './user-add-edit.component.html',
  styleUrl: './user-add-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAddEditComponent {
  userForm: FormGroup;

  tags = new FormControl('');
  tagsList: string[] = [
    'decide',
    'almost',
    'response',
    'ten',
    'mission',
    'politics',
  ];

  readonly email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = signal('');

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private dialogRef: MatDialogRef<UserAddEditComponent>
  ) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());

    this.userForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      createdAt: '',
      description: '',
      tags: '',
      actions: '',
    });
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe({
        next: (val: any) => {
          this.dialogRef.close(true);
        },
      });
    }
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
}
