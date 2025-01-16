import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  imports: [CommonModule, MatTableModule, MatButtonModule],
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'createdAt',
    'tags',
    'description',
  ];
  dataSource = new MatTableDataSource<any>([]);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('/users.json').subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (err) => console.error('Error loading JSON:', err),
    });
  }
}
