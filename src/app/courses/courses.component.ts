import { Component, OnInit } from '@angular/core';
import { CoursesModel } from '../models/courses.model';
import { ListService } from '../shared/services/list.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<CoursesModel[]>;

  displayedColumns = ['name', 'category'];
  constructor(private courseService: ListService, public dialog: MatDialog) {
    this.courses$ = this.courseService.list().pipe(
      catchError((error) => {
        this.onError('Error ao carregar cursos');
        return of([]);
      })
    );
  }

  ngOnInit(): void {}

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
