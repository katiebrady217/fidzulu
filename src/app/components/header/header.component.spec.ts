import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title "Fidzulu Project"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toBe(' Fidzulu Project ');
  })

  it('should have a Home link', () => {
    const homeLink = fixture.debugElement.query(By.css('.header-bar-link[href="/"]'));
    expect(homeLink).toBeTruthy();
    expect(homeLink.nativeElement.textContent).toContain('Home');
  });

  it('should have an About link', () => {
    const aboutLink = fixture.debugElement.query(By.css('.header-bar-link[href="/about"]'));
    expect(aboutLink).toBeTruthy();
    expect(aboutLink.nativeElement.textContent).toContain('About');
  });
});
