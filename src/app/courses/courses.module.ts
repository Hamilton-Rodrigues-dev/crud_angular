import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { MatTableModule } from '@angular/material/table';
import { MaterialImportsModule } from '../shared/material.imports/material.imports.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, CoursesRoutingModule, MaterialImportsModule],
})
export class CoursesModule {}
