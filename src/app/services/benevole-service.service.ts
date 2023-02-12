import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BenevoleDto, Root, Root1} from "../models/BenevoleDto";
const baseUrl = 'https://localhost:7228/api/BeneoleApi';

@Injectable({
  providedIn: 'root'
})
export class BenevoleServiceService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Root> {
    return this.http.get<Root>(baseUrl);
  }
  get(id: any): Observable<Root1> {
    return this.http.get<Root1>(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: BenevoleDto): Observable<BenevoleDto> {
    return this.http.put<BenevoleDto>(`${baseUrl}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }




}
