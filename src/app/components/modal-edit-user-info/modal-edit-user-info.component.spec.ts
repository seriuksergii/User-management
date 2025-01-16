import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditUserInfoComponent } from './modal-edit-user-info.component';

describe('ModalEditUserInfoComponent', () => {
  let component: ModalEditUserInfoComponent;
  let fixture: ComponentFixture<ModalEditUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditUserInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
