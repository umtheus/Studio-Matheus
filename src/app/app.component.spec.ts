import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { HomeComponent } from 'src/sections/home/home.component';
import { AboutComponent } from 'src/sections/about/about.component';
import { ProjectsComponent } from 'src/sections/projects/projects.component';
import { ContactComponent } from 'src/sections/contact/contact.component';
import { FooterComponent } from 'src/sections/footer/footer.component';
import { SkillsComponent } from 'src/sections/home/skills/skills.component';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterModule.forRoot([]),
        HomeComponent,
        AboutComponent,
        ProjectsComponent,
        ContactComponent,
        FooterComponent,
        SkillsComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Studio Matheus'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Studio Matheus');
  });
});
