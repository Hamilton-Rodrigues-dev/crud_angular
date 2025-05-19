import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MaterialImportsModule } from './components/material.imports/material.imports.module';

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [CommonModule, MaterialImportsModule],
  exports: [ErrorDialogComponent],
})
export class SharedModule {}
