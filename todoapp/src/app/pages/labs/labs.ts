import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.html',
  styleUrls: ['./labs.css']
})
export class Labs {
  saludo: string = 'Hola soy juan Daniel Sierra De Arco y aqui comienza mi proyecto Angular';

  tasks = signal<string[]>([
    "Instalar el Angular CLI",
    "Crear un proyecto",
    "Crear un componente"
  ]);

  name = signal('Juan Daniel Sierra De Arco');
  age: number = 27;
  disabled: boolean = false;
  img: string = 'https://www.w3schools.com/w3images/avatar2.png';

  person: { name: string; age: number; avatar: string } = {
    name: 'Juan Daniel Sierra De Arco',
    age: 27,
    avatar: 'https://www.w3schools.com/w3images/avatar2.png'
  };

  clickHandler(): void {
  alert('Hola Mundo');
  };
   
  changeHandler (event: Event): void {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
