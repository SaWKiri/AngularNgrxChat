import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatConverstionComponent } from './chat-converstion.component';

describe('ChatConverstionComponent', () => {
  let component: ChatConverstionComponent;
  let fixture: ComponentFixture<ChatConverstionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatConverstionComponent]
    });
    fixture = TestBed.createComponent(ChatConverstionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
