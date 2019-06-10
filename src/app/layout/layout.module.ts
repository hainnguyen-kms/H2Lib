import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { H2LibraryModule } from 'h2-library';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    H2LibraryModule,
    CommonModule,
  ],
  declarations: [LayoutComponent],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {}
