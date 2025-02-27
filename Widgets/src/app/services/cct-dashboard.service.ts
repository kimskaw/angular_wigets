import { computed, Injectable, signal, ChangeDetectorRef } from '@angular/core';
import { Widget } from '../models/dashboard';

import { CctConversionComponent } from '../pages/dashboard/cct_widgets/cct-conversion/cct-conversion.component';
import { CctFilterComponent } from '../pages/dashboard/cct_widgets/cct-filter/cct-filter.component';
import { CctDepartmentComponent } from '../pages/dashboard/cct_widgets/cct-department/cct-department.component';
import { BbDataComponent } from '../pages/dashboard/cct_widgets/bb-data/bb-data.component';

@Injectable({
  providedIn: 'root'
})
export class CctService {

cct_widgets = signal<Widget[]>([
    {
      id: 1,
      label: 'CctFilterComponent',
      content: CctFilterComponent,
      rows: 2,
      columns: 5,
      color: 'black'
    },
    {
      id: 2,
      label: 'CctConversionComponent',
      content: CctConversionComponent,
      rows: 1,
      columns: 6,
      color: 'black'
    },
    {
      id: 3,
      label: 'CctDepartmentComponent',
      content: CctDepartmentComponent,
      rows: 2,
      columns: 3,
      color: 'black'
    },
    {
      id: 4,
      label: 'BbDataComponent',
      content: BbDataComponent,
      rows: 2,
      columns: 5,
      color: 'black'
    },
  ]);
  cct_addedWidgets = signal<Widget[]>([
    {
      id: 1,
      label: 'CctFilterComponent',
      content: CctFilterComponent,
      rows: 2,
      columns: 5,
      color: 'black'
    },
  ]);

  widgetstoAdd = computed(() => {
    const addedIds = new Set(this.cct_addedWidgets().map((w) => w.id)); // Use Set for faster lookup
    return this.cct_widgets().filter((w) => !addedIds.has(w.id));
  });

  addWidget(widget: Widget) {
    this.cct_addedWidgets.set([...this.cct_addedWidgets(), { ...widget }]);
  }

  updateWidget(id: number, widget: Partial<Widget>) {
    console.log(`Updating widget with ID: ${id}`, widget);
    const index = this.cct_addedWidgets().findIndex((w) => w.id === id);
    if (index !== -1) {
      const newWidgets = [...this.cct_addedWidgets()];
      newWidgets[index] = { ...newWidgets[index], ...widget };
      console.log('Updated widgets:', newWidgets);
      this.cct_addedWidgets.set(newWidgets);
      this.cdr.detectChanges(); // Manually trigger change detection
    }
  }

  moveWidgetToRight(id: number) {
    const index = this.cct_addedWidgets().findIndex(w => w.id === id);
    if (index === this.cct_addedWidgets().length - 1) {
      return;
    }
    const newWidgets = [...this.cct_addedWidgets()];
    [newWidgets[index], newWidgets[index + 1]] = [{...newWidgets[index + 1]}, { ...newWidgets[index]}];
    this.cct_addedWidgets.set(newWidgets);
  }

  moveWidgetToLeft(id: number) {
    const index = this.cct_addedWidgets().findIndex(w => w.id === id);
    if (index === 0) {
      return;
    }
    const newWidgets = [...this.cct_addedWidgets()];
    [newWidgets[index], newWidgets[index - 1]] = [{...newWidgets[index - 1]}, { ...newWidgets[index]}];
    this.cct_addedWidgets.set(newWidgets);
  }

  removeWidget(id: number) {
    this.cct_addedWidgets.set(this.cct_addedWidgets().filter(w => w.id !== id));

  }

  constructor(private cdr: ChangeDetectorRef) {}
}
