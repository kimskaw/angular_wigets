import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardModule } from './pages/dashboard/dashboard.modules';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WidgetOptionsComponent } from './components/widget/widget-options/widget-options.component';
import { FilterComponent } from './pages/dashboard/widgets/filter/filter.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatTableModule } from '@angular/material/table';
import { EvangelistsRankComponent } from './pages/dashboard/widgets/evangelists-rank/evangelists-rank.component';
import { MatPaginator } from '@angular/material/paginator';
import { GroupactiveRateComponent } from './pages/dashboard/widgets/groupactive-rate/groupactive-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    // WidgetOptionsComponent
    FilterComponent,
    EvangelistsRankComponent,
    GroupactiveRateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashBoardModule,
    BrowserAnimationsModule,
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    MatTableModule,
    MatPaginator
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
