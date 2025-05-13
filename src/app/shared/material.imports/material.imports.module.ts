import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [MatTableModule, MatToolbarModule, MatCardModule],
  exports: [MatTableModule, MatToolbarModule, MatCardModule],
})
export class MaterialImportsModule {}
