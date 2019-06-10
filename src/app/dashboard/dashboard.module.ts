import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    LayoutModule,
    CommonModule,
    DashboardRoutingModule],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
