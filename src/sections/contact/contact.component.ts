import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  selectedOption = '';
  message = '';
  honeypot = ''; // Campo invisível para detectar bots

  handleSubmit() {
    // Verifica se o campo honeypot foi preenchido
    if (this.honeypot) {
      console.warn('Bot detectado. Envio bloqueado.');
      return;
    }

    const encodedMessage = encodeURIComponent(this.message);

    if (this.selectedOption === 'email') {
      const email = 'gm.arr.matheus@gmail.com';
      const subject = encodeURIComponent('Contato via Email');
      const mailtoLink = `mailto:${email}?subject=${subject}&body=${encodedMessage}`;
      window.open(mailtoLink, '_blank');
    } else if (this.selectedOption === 'whatsapp') {
      const phoneNumber = '5518996407118';
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
        '_blank'
      );
    }
  }
}
