import { computed, Injectable, signal, ChangeDetectorRef } from '@angular/core';
import { Widget } from '../models/dashboard';

import { TableFilterComponent } from '../pages/dashboard/table_view/table-filter/table-filter.component';
import { TableDepartmentComponent } from '../pages/dashboard/table_view/table-department/table-department.component';

@Injectable({
  providedIn: 'root'
})
export class TableDashboardService {


table_widgets = signal<Widget[]>([
    {
      id: 1,
      label: 'TableFilterComponent',
      content: TableFilterComponent,
      rows: 2,
      columns: 5,
      color: 'black'
    },
    {
      id: 2,
      label: 'TableDepartmentComponent',
      content: TableDepartmentComponent,
      rows: 2,
      columns: 5,
      color: 'black'
    }
  ]);
  table_addedWidgets = signal<Widget[]>([
    {
      id: 1,
      label: 'TableFilterComponent',
      content: TableFilterComponent,
      rows: 2,
      columns: 5,
      color: 'black'
    },
  ]);

  widgetstoAdd = computed(() => {
    const addedIds = new Set(this.table_addedWidgets().map((w) => w.id)); // Use Set for faster lookup
    return this.table_widgets().filter((w) => !addedIds.has(w.id));
  });

  addWidget(widget: Widget) {
    this.table_addedWidgets.set([...this.table_addedWidgets(), { ...widget }]);
  }

  updateWidget(id: number, widget: Partial<Widget>) {
    console.log(`Updating widget with ID: ${id}`, widget);
    const index = this.table_addedWidgets().findIndex((w) => w.id === id);
    if (index !== -1) {
      const newWidgets = [...this.table_addedWidgets()];
      newWidgets[index] = { ...newWidgets[index], ...widget };
      console.log('Updated widgets:', newWidgets);
      this.table_addedWidgets.set(newWidgets);
      this.cdr.detectChanges(); // Manually trigger change detection
    }
  }

  moveWidgetToRight(id: number) {
    const index = this.table_addedWidgets().findIndex(w => w.id === id);
    if (index === this.table_addedWidgets().length - 1) {
      return;
    }
    const newWidgets = [...this.table_addedWidgets()];
    [newWidgets[index], newWidgets[index + 1]] = [{...newWidgets[index + 1]}, { ...newWidgets[index]}];
    this.table_addedWidgets.set(newWidgets);
  }

  moveWidgetToLeft(id: number) {
    const index = this.table_addedWidgets().findIndex(w => w.id === id);
    if (index === 0) {
      return;
    }
    const newWidgets = [...this.table_addedWidgets()];
    [newWidgets[index], newWidgets[index - 1]] = [{...newWidgets[index - 1]}, { ...newWidgets[index]}];
    this.table_addedWidgets.set(newWidgets);
  }

  removeWidget(id: number) {
    this.table_addedWidgets.set(this.table_addedWidgets().filter(w => w.id !== id));

  }

  constructor(private cdr: ChangeDetectorRef) {}
}
