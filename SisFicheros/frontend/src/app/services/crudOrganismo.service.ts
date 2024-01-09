import { Injectable } from '@angular/core';
import { Organismo } from '../models/organismo.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudOrganismoService {
  private REST_API: string = 'http://localhost:8000/api/organismos/';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  getOrganismos(): Observable<Organismo[]> {
    return this.httpClient.get<Organismo[]>(this.REST_API, { headers: this.httpHeaders });
  }

  getOrganismo(id: any): Observable<Organismo> {
    return this.httpClient.get<Organismo>(`${this.REST_API}/${id}`, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      })
    );
  }

  createOrganismo(data: Organismo): Observable<Organismo> {
    return this.httpClient.post<Organismo>(this.REST_API, data, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    );
  }

  updateOrganismo(id: any, data: any): Observable<Organismo> {
    return this.httpClient.put<Organismo>(`${this.REST_API}/${id}`, data, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    );
  }

  deleteOrganismo(id: any): Observable<any> {
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
