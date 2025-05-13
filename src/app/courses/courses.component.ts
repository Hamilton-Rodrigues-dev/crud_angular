import { Component, OnInit } from '@angular/core';
import { CoursesModel } from '../models/courses.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: CoursesModel[] = [
    { id: '1', name: 'Angular', category: 'Frontend' },
    { id: '2', name: 'React', category: 'Frontend' },
    { id: '3', name: 'Node.js', category: 'Backend' },
    { id: '4', name: 'Django', category: 'Backend' },
    { id: '5', name: 'Flask', category: 'Backend' },
    { id: '6', name: 'Spring Boot', category: 'Backend' },
    { id: '7', name: 'Ruby on Rails', category: 'Backend' },
    { id: '8', name: 'Laravel', category: 'Backend' },
    { id: '9', name: 'Express.js', category: 'Backend' },
    { id: '10', name: 'ASP.NET Core', category: 'Backend' },
  ];

  displayedColumns = ['name', 'category'];
  constructor() {}

  ngOnInit(): void {}
}
