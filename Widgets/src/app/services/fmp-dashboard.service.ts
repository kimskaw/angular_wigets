import { computed, Injectable, signal, ChangeDetectorRef } from '@angular/core';
import { Widget } from '../models/dashboard';
import { weeklygoalComponent } from '../pages/dashboard/fmp_widgets/weeklygoal/weeklygoal.component';
import { SeasonStatsComponent } from '../pages/dashboard/fmp_widgets/season-stats/season-stats.component';
import { SeasonProgressComponent } from '../pages/dashboard/fmp_widgets/seasonProgress/seasonProgress.component';
import { FilterComponent } from '../pages/dashboard/fmp_widgets/filter/filter.component';
import { DepartmentPickingComponent } from '../pages/dashboard/fmp_widgets/department-picking/department-picking.component';
import { TopGroupsComponent } from '../pages/dashboard/fmp_widgets/top-groups/top-groups.component';
import { WeeklyComparisonComponent } from '../pages/dashboard/fmp_widgets/weekly-comparison/weekly-comparison.component';
import { MeetingsComponent } from '../pages/dashboard/fmp_widgets/meetings/meetings.component';
import { EvangelistsRankComponent } from '../pages/dashboard/fmp_widgets/evangelists-rank/evangelists-rank.component';
import { GroupactiveRateComponent } from '../pages/dashboard/fmp_widgets/groupactive-rate/groupactive-rate.component';
import { CctDepartmentComponent } from '../pages/dashboard/cct_widgets/cct-department/cct-department.component';

import { filter } from '@angular-devkit/schematics';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  fmp_widgets = signal<Widget[]>([
    {
      id: 1,
      label: 'Season Stats',
      content: SeasonStatsComponent,
      rows: 1,
      columns: 6,
      color: 'black'
    },
    {
      id: 2,
      label: 'Weekly Goal',
      content: weeklygoalComponent,
      rows: 2,
      columns: 2,
      color: 'black'
    },
    {
      id: 3,
      label: 'Season Progress',
      content: SeasonProgressComponent,
      rows: 2,
      columns: 2,
      color: 'black'
    },
    {
      id: 4,
      label: 'Filter',
      content: FilterComponent,
      rows: 2,
      columns: 6,
      color: 'black'
    },
    {
      id: 5,
      label: 'DepartmentPickingComponent',
      content: DepartmentPickingComponent,
      rows: 2,
      columns: 2,
      color: 'black'
    },
    {
      id: 6,
      label: 'TopGroupsComponent',
      content: TopGroupsComponent,
      rows: 2,
      columns: 2,
      color: 'black'
    },
    {
      id: 7,
      label: 'WeeklyComparisonComponent',
      content: WeeklyComparisonComponent,
      rows: 2,
      columns: 2,
      color: 'black'
    },
    {
      id: 8,
      label: 'MeetingsComponent',
      content: MeetingsComponent,
      rows: 2,
      columns: 2,
      color: 'black'
    },
    {
      id: 9,
      label: 'EvangelistsRankComponent',
      content: EvangelistsRankComponent,
      rows: 2,
      columns: 6,
      color: 'black'
    },
    {
      id: 10,
      label: 'GroupactiveRateComponent',
      content: GroupactiveRateComponent,
      rows: 2,
      columns: 6,
      color: 'black'
    }
  ]);
  fmp_addedWidgets = signal<Widget[]>([
    {
      id: 4,
      label: 'Filter',
      content: FilterComponent,
      rows: 2,
      columns: 6,
      color: 'black'
    },
  ]);

  widgetstoAdd = computed(() => {
    const addedIds = new Set(this.fmp_addedWidgets().map((w) => w.id)); // Use Set for faster lookup
    return this.fmp_widgets().filter((w) => !addedIds.has(w.id));
  });

  addWidget(widget: Widget) {
    this.fmp_addedWidgets.set([...this.fmp_addedWidgets(), { ...widget }]);
  }

  updateWidget(id: number, widget: Partial<Widget>) {
    console.log(`Updating widget with ID: ${id}`, widget);
    const index = this.fmp_addedWidgets().findIndex((w) => w.id === id);
    if (index !== -1) {
      const newWidgets = [...this.fmp_addedWidgets()];
      newWidgets[index] = { ...newWidgets[index], ...widget };
      console.log('Updated widgets:', newWidgets);
      this.fmp_addedWidgets.set(newWidgets);
      this.cdr.detectChanges(); // Manually trigger change detection
    }
  }

  moveWidgetToRight(id: number) {
    const index = this.fmp_addedWidgets().findIndex(w => w.id === id);
    if (index === this.fmp_addedWidgets().length - 1) {
      return;
    }
    const newWidgets = [...this.fmp_addedWidgets()];
    [newWidgets[index], newWidgets[index + 1]] = [{...newWidgets[index + 1]}, { ...newWidgets[index]}];
    this.fmp_addedWidgets.set(newWidgets);
  }

  moveWidgetToLeft(id: number) {
    const index = this.fmp_addedWidgets().findIndex(w => w.id === id);
    if (index === 0) {
      return;
    }
    const newWidgets = [...this.fmp_addedWidgets()];
    [newWidgets[index], newWidgets[index - 1]] = [{...newWidgets[index - 1]}, { ...newWidgets[index]}];
    this.fmp_addedWidgets.set(newWidgets);
  }

  removeWidget(id: number) {
    this.fmp_addedWidgets.set(this.fmp_addedWidgets().filter(w => w.id !== id));

  }

  constructor(private cdr: ChangeDetectorRef) {}
}
