import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardModule } from './pages/dashboard/dashboard.modules';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WidgetOptionsComponent } from './components/widget/widget-options/widget-options.component';
import { FilterComponent } from './pages/dashboard/fmp_widgets/filter/filter.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatTableModule } from '@angular/material/table';
import { EvangelistsRankComponent } from './pages/dashboard/fmp_widgets/evangelists-rank/evangelists-rank.component';
import { MatPaginator } from '@angular/material/paginator';
import { GroupactiveRateComponent } from './pages/dashboard/fmp_widgets/groupactive-rate/groupactive-rate.component';
import { CctFilterComponent } from './pages/dashboard/cct_widgets/cct-filter/cct-filter.component';
import { CctConversionComponent } from './pages/dashboard/cct_widgets/cct-conversion/cct-conversion.component';
import { CctDepartmentComponent } from './pages/dashboard/cct_widgets/cct-department/cct-department.component';
import { BbDataComponent } from './pages/dashboard/cct_widgets/bb-data/bb-data.component';
import { TableFilterComponent } from './pages/dashboard/table_view/table-filter/table-filter.component';
import { TableDepartmentComponent } from './pages/dashboard/table_view/table-department/table-department.component';
import { TopGroupsComponent } from './pages/dashboard/fmp_widgets/top-groups/top-groups.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // WidgetOptionsComponent
    FilterComponent,
    EvangelistsRankComponent,
    GroupactiveRateComponent,
    CctFilterComponent,
    CctConversionComponent,
    CctDepartmentComponent,
    BbDataComponent,
    TableFilterComponent,
    TableDepartmentComponent,
    TopGroupsComponent,
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
    MatPaginator,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
