import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  formulario = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    lembrarLogin: new FormControl(false),
  });

  constructor(private authService: AuthService) { }

  onSubmit() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const { email, senha } = this.formulario.value;

    this.authService.login(email, senha).subscribe(
      (response) => {
        console.log('Login bem-sucedido:', response);

      },
      (error) => {
        console.error('Erro no login:', error);

        alert('Erro no login: ' + error.error.message);
      }
    );
  }

  get email() {
    return this.formulario.get('email');
  }

  get senha() {
    return this.formulario.get('senha');
  }
}
