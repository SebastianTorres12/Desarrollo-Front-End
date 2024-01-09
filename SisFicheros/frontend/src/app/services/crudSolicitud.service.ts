import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Solicitud } from '../models/solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class CrudSolicitudService {
  private REST_API: string = 'http://localhost:8000/api/solicitudes/';
  httpHeaders = new HttpHeaders().set('Content-type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  getSolicitudes(): Observable<Solicitud[]> {
    return this.httpClient.get(this.REST_API, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  getSolicitud(id: any): Observable<Solicitud> {
    return this.httpClient.get(`${this.REST_API}/${id}`, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  createSolicitud(data: Solicitud): Observable<Solicitud> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<Solicitud>(this.REST_API, data, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  
  updateSolicitud(id: any, data: any): Observable<Solicitud> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<Solicitud>(`${this.REST_API}/${id}`, data, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  
  deleteSolicitud(id: any): Observable<any> {
    return this.httpClient.delete(`${this.REST_API}/${id}`, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMsg: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMsg = error.error.message;
    } else {
      errorMsg = `Error code: ${error.status}. Message: ${error.message}`;
    }
    return throwError(() => {
      errorMsg;
    });
  }
}
