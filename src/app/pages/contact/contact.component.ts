import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  tasks: { text: string; numero: string; descripcion: string, email: string }[] = [];
  name: string = '';
  descripcion: string = '';
  numero: string = '';
  email: string = '';

  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;
  addTask() {
    const numeroAsString = String(this.numero).trim();

    if (this.name.trim() !== '') {
      this.tasks.push({
        text: this.name.trim(),
        descripcion: this.descripcion.trim(),
        numero: numeroAsString,
        email: this.email.trim(),
      });

      this.showSuccessMessage = true;
      this.showErrorMessage = false;

      setTimeout(() => this.showSuccessMessage = false, 10000);
    } else {
      this.showErrorMessage = true;
      this.showSuccessMessage = false;

      setTimeout(() => this.showErrorMessage = false, 10000);
    }
  }
}
