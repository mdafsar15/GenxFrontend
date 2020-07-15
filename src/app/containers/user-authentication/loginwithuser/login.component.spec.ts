import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithUser } from './login.component';

describe('LoginComponent', () => {
  let component: LoginWithUser;
  let fixture: ComponentFixture<LoginWithUser>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWithUser ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
