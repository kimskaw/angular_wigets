import { computed, Injectable, signal, ChangeDetectorRef } from '@angular/core';
import { Widget } from '../models/dashboard';
import { weeklygoalComponent } from '../pages/dashboard/widgets/weeklygoal/weeklygoal.component';
import { SeasonStatsComponent } from '../pages/dashboard/widgets/season-stats/season-stats.component';
import { SeasonProgressComponent } from '../pages/dashboard/widgets/seasonProgress/seasonProgress.component';
import { FilterComponent } from '../pages/dashboard/widgets/filter/filter.component';
import { DepartmentPickingComponent } from '../pages/dashboard/widgets/department-picking/department-picking.component';
import { TopGroupsComponent } from '../pages/dashboard/widgets/top-groups/top-groups.component';
import { WeeklyComparisonComponent } from '../pages/dashboard/widgets/weekly-comparison/weekly-comparison.component';
import { MeetingsComponent } from '../pages/dashboard/widgets/meetings/meetings.component';
import { EvangelistsRankComponent } from '../pages/dashboard/widgets/evangelists-rank/evangelists-rank.component';
import { GroupactiveRateComponent } from '../pages/dashboard/widgets/groupactive-rate/groupactive-rate.component';

import { filter } from '@angular-devkit/schematics';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  widgets = signal<Widget[]>([
    {
      id: 1,
      label: 'Season Stats',
      content: SeasonStatsComponent,
      rows: 1,
      columns: 2,
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
      columns: 5,
      color: 'black'
    },
    {
      id: 5,
      label: 'DepartmentPickingComponent',
      content: DepartmentPickingComponent,
      rows: 2,
      columns: 3,
      color: 'black'
    },
    {
      id: 6,
      label: 'TopGroupsComponent',
      content: TopGroupsComponent,
      rows: 1,
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
      columns: 5,
      color: 'black'
    },
    {
      id: 10,
      label: 'GroupactiveRateComponent',
      content: GroupactiveRateComponent,
      rows: 2,
      columns: 5,
      color: 'black'
    },
  ]);
  addedWidgets = signal<Widget[]>([
  ]);

  widgetstoAdd = computed(() => {
    const addedIds = new Set(this.addedWidgets().map((w) => w.id)); // Use Set for faster lookup
    return this.widgets().filter((w) => !addedIds.has(w.id));
  });

  addWidget(widget: Widget) {
    this.addedWidgets.set([...this.addedWidgets(), { ...widget }]);
  }

  updateWidget(id: number, widget: Partial<Widget>) {
    console.log(`Updating widget with ID: ${id}`, widget);
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index !== -1) {
      const newWidgets = [...this.addedWidgets()];
      newWidgets[index] = { ...newWidgets[index], ...widget };
      console.log('Updated widgets:', newWidgets);
      this.addedWidgets.set(newWidgets);
      this.cdr.detectChanges(); // Manually trigger change detection
    }
  }

  moveWidgetToRight(id: number) {
    const index = this.addedWidgets().findIndex(w => w.id === id);
    if (index === this.addedWidgets().length - 1) {
      return;
    }
    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index + 1]] = [{...newWidgets[index + 1]}, { ...newWidgets[index]}];
    this.addedWidgets.set(newWidgets);
  }

  moveWidgetToLeft(id: number) {
    const index = this.addedWidgets().findIndex(w => w.id === id);
    if (index === 0) {
      return;
    }
    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index - 1]] = [{...newWidgets[index - 1]}, { ...newWidgets[index]}];
    this.addedWidgets.set(newWidgets);
  }

  removeWidget(id: number) {
    this.addedWidgets.set(this.addedWidgets().filter(w => w.id !== id));

  }

  constructor(private cdr: ChangeDetectorRef) {}
}
