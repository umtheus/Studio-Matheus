import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  menuAberto = false;

  @ViewChild('navbar') navbarRef!: ElementRef;

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  @HostListener('document:click', ['$event'])
  fecharAoClicarFora(event: MouseEvent): void {
    const clicouDentro = this.navbarRef?.nativeElement.contains(event.target);
    if (!clicouDentro) {
      this.menuAberto = false;
    }
  }

  fecharMenu(): void {
    this.menuAberto = false;
  }

  // Padrão já está como laranja

  themeSelecionado: 'laranja' | 'azul' = 'laranja';

  ngOnInit(): void {
    document.body.setAttribute('data-theme', 'laranja');
  }

  setTheme(theme: 'laranja' | 'azul'): void {
    document.body.setAttribute('data-theme', theme);
    this.themeSelecionado = theme;
  }
}
