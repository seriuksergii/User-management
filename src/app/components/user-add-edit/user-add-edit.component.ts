import { Component, Inject, OnInit, signal } from '@angular/core';
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
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../../service/users.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  description: string;
  tags: string[];
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
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    CommonModule,
  ],
  templateUrl: './user-add-edit.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './user-add-edit.component.scss',
})
export class UserAddEditComponent implements OnInit {
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
    private dialogRef: MatDialogRef<UserAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    merge(this.email.statusChanges, this.email.valueChanges).pipe(
      takeUntilDestroyed()
    );

    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(100)]],
      lastName: ['', [Validators.required, Validators.maxLength(100)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(100)],
      ],
      createdAt: '',
      description: ['', [Validators.maxLength(1000)]],
      tags: [[]],
    });
  }

  ngOnInit(): void {
    this.userForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      if (this.data) {
        this.userService
          .updateUser(this.data.id, {
            ...this.userForm.value,
            id: this.data.id,
          })
          .subscribe({
            next: () => {
              this.dialogRef.close(true);
            },
          });
      } else {
        this.userService.addUser(this.userForm.value).subscribe({
          next: () => {
            this.dialogRef.close(true);
          },
        });
      }
    }
  }
}
