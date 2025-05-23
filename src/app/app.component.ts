import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-docker';

  constructor(private http: HttpClient) { }

  onSpanClick() {

    this.http.get(`${environment.apiUrl}/api/juego-impostor-backend/get-categorias`)
      .subscribe({
        next: (data) => {
          console.log('Datos recibidos:', data);
        },
        error: (err) => {
          console.error('Error al obtener datos:', err);
        }
      });
  }
}
