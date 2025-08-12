import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('deve bloquear envio se honeypot estiver preenchido', () => {
    component.honeypot = 'sou um bot';
    const spy = jest.spyOn(window, 'open');
    component.handleSubmit();
    expect(spy).not.toHaveBeenCalled();
  });
  it('deve abrir link de email se opção for "email"', () => {
    component.selectedOption = 'email';
    component.message = 'Olá!';
    component.honeypot = ''; // campo limpo

    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);
    component.handleSubmit();

    expect(spy).toHaveBeenCalledWith(
      expect.stringContaining('mailto:gm.arr.matheus@gmail.com'),
      '_blank'
    );
  });

  it('deve abrir link do WhatsApp se opção for "whatsapp"', () => {
    component.selectedOption = 'whatsapp';
    component.message = 'Olá!';
    component.honeypot = ''; // campo limpo

    const spy = jest.spyOn(window, 'open').mockImplementation(() => null);
    component.handleSubmit();

    expect(spy).toHaveBeenCalledWith(
      expect.stringContaining('https://wa.me/5518996407118'),
      '_blank'
    );
  });
});
