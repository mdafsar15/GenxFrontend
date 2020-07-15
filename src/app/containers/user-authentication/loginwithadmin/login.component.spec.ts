import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithAdmin } from './login.component';

describe('LoginComponent', () => {
  let component: LoginWithAdmin;
  let fixture: ComponentFixture<LoginWithAdmin>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWithAdmin ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
