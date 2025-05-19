import { Injectable, OnInit } from '@angular/core';
import { CoursesModel } from 'src/app/models/courses.model';
import { HttpClient } from '@angular/common/http';
import { delay, pipe, take, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ListService {
  private readonly API = '../../../assets/courses.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<CoursesModel[]>(this.API).pipe(
      take(1),
      delay(30000),
      tap((courses) => console.log('o que ta vindo aqui', courses))
    );
  }
}
