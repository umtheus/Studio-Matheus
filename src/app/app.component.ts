import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from 'src/sections/about/about.component';
import { ContactComponent } from 'src/sections/contact/contact.component';
import { FooterComponent } from 'src/sections/footer/footer.component';
import { HomeComponent } from 'src/sections/home/home.component';
import { ProjectsComponent } from 'src/sections/projects/projects.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Studio Matheus';
}
