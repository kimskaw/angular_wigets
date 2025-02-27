import { Component } from '@angular/core';

@Component({
  selector: 'app-cct-filter',
  templateUrl: './cct-filter.component.html',
  styleUrl: './cct-filter.component.scss'
})
export class CctFilterComponent {
  showDepartmentType: boolean = false;
  
  checklog(){
    console.log(this.showDepartmentType, "DEPT")
  }
}
