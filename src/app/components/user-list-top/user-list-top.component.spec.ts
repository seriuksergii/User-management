import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListTopComponent } from './user-list-top.component';

describe('UserListTopComponent', () => {
  let component: UserListTopComponent;
  let fixture: ComponentFixture<UserListTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
