import { Injectable } from '@angular/core';
     import { HttpClient } from '@angular/common/http';
     import { Observable } from 'rxjs';

     export interface Asegurado {
       numeroPoliza: string;
       nombre: string;
       apellidoPaterno: string;
       apellidoMaterno: string;
       email: string;
       numeroMovil: string;
       direccion: {
         calle: string;
         colonia: string;
         ciudad: string;
       };
     }

     @Injectable({
       providedIn: 'root'
     })
     export class AseguradoService {
       private apiUrl = 'http://localhost:8080/asegurados';

       constructor(private http: HttpClient) { }

       getAsegurados(): Observable<Asegurado[]> {
         return this.http.get<Asegurado[]>(this.apiUrl);
       }
     }
