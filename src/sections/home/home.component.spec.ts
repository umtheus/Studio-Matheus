import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('deve exibir o nome "Matheus Brambila" no cabeçalho', () => {
    const elemento = fixture.nativeElement as HTMLElement;
    const titulo = elemento.querySelector('header div');
    expect(titulo?.textContent).toContain('Matheus Brambila');
  });

  it('deve renderizar o componente de habilidades', () => {
    const elemento = fixture.nativeElement as HTMLElement;
    const skills = elemento.querySelector('app-skills');
    expect(skills).toBeTruthy();
  });
  it('deve iniciar com o tema "laranja"', () => {
    expect(component.themeSelecionado).toBe('laranja');
    expect(document.body.getAttribute('data-theme')).toBe('laranja');
  });

  it('deve alterar o tema para "azul"', () => {
    component.setTheme('azul');
    expect(component.themeSelecionado).toBe('azul');
    expect(document.body.getAttribute('data-theme')).toBe('azul');
  });

  it('deve abrir e fechar o menu corretamente', () => {
    expect(component.menuAberto).toBe(false);
    component.toggleMenu();
    expect(component.menuAberto).toBe(true);
    component.fecharMenu();
    expect(component.menuAberto).toBe(false);
  });

  it('deve renderizar o componente de habilidades', () => {
    const elemento = fixture.nativeElement as HTMLElement;
    const skills = elemento.querySelector('app-skills');
    expect(skills).toBeTruthy();
  });
});
