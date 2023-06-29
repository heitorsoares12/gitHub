import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroDialogComponent } from './components/erro-dialog/erro-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';

@NgModule({
  declarations: [ErroDialogComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [ErroDialogComponent],
})
export class SharedModule {}
