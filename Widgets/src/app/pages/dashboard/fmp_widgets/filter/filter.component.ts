import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  showDepartmentType: boolean = false;
  selectedDept = '';
  selectedGroup = '';
  selectedRegion = new FormControl('1');
  regionPrefix = '';

  regionData = [
    {
      Grp: '¹D1',
      Subdivision: 'Youth',
      Division: 'Inner',
      Region: 'Melbourne',
      Goal: 0,
      Achieved: 22,
    },
    {
      Grp: '¹D2',
      Subdivision: 'Youth',
      Division: 'Inner',
      Region: 'Melbourne',
      Goal: 0,
      Achieved: 32,
    },
    {
      Grp: '¹D3',
      Subdivision: 'Youth',
      Division: 'Inner',
      Region: 'Melbourne',
      Goal: 0,
      Achieved: 38.5,
    },
    {
      Grp: '¹D4',
      Subdivision: 'Youth',
      Division: 'Inner',
      Region: 'Melbourne',
      Goal: 0,
      Achieved: 45,
    },
    {
      Grp: '¹SFT',
      Subdivision: 'Youth',
      Division: 'Outer',
      Region: 'Melbourne',
      Goal: 0,
      Achieved: 14,
    },
  ];

  departmentGroups: Record<string, string[]> = {
    D1: ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7'],
    D2: ['G8', 'G9', 'G10', 'G11', 'G12', 'G13', 'G14'],
    D3: ['G15', 'G16', 'G17', 'G18', 'G19', 'G20', 'G21'],
    D4: ['G22', 'G23', 'G24', 'G25', 'G26', 'G27', 'G28'],
  };

  ngOnInit() {
    console.log('Filter called');
    console.log(this.selectedRegion.value, 'region selected');
  }

  changedRegion(region: MatRadioChange) {
    this.selectedRegion = region.value;
    console.log('Selected region:', this.selectedRegion);
  }

  changedDept(dept: any) {
    this.selectedDept = (dept.target as HTMLSelectElement).value;
    this.showDepartmentType = !!this.selectedDept; // Set to true if there's a selection
    this.selectedGroup = this.departmentGroups[this.selectedDept]?.[0] || '';
    console.log('Selected department:', this.selectedDept);
  }

  getDepts() {
    this.regionPrefix =
      this.selectedRegion.value === '1'
        ? '¹'
        : this.selectedRegion.value === '2'
        ? '²'
        : '';
    const departmentKeys = Object.keys(this.departmentGroups); // ['D1', 'D2', 'D3', 'D4']
    console.log(this.departmentGroups, 'departmentKeys');
    let departments: string[] = [];
    // Loop through department groups and prefix them with region-based prefix
    departmentKeys.forEach((deptKey) => {
      const deptList = this.departmentGroups[deptKey]; // G1, G2, G3, etc.
      departments.push(`${this.regionPrefix}${deptKey}`)
    });

    return departments;
  }

  getSelectedDeptGroup(deptSelected: any) {
 const departmentKeys = Object.keys(this.departmentGroups); // ['D1', 'D2', 'D3', 'D4']
  let groups: string[] = [];

  // Loop through department groups and filter based on the selected department
  departmentKeys.forEach((deptKey) => {
    if (`${this.regionPrefix}${deptKey}` === this.selectedDept) { // Only process the selected department
      const deptList = this.departmentGroups[deptKey]; // G1, G2, G3, etc.
      deptList.forEach((group) => {
        // Push the region-prefixed group names to the groups array
        groups.push(`${this.regionPrefix}${group}`);
      });
    }
  });

  return groups || [];
  }

  changedGroup(groupSelected: Event) {
    this.selectedGroup = (groupSelected.target as HTMLSelectElement).value;
  }
}
