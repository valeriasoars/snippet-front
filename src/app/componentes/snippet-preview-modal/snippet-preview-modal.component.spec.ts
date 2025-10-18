import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetPreviewModalComponent } from './snippet-preview-modal.component';

describe('SnippetPreviewModalComponent', () => {
  let component: SnippetPreviewModalComponent;
  let fixture: ComponentFixture<SnippetPreviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetPreviewModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnippetPreviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
