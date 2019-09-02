import { Component, OnInit, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

import { ContactModel } from '../../models';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.scss']
})
export class ContactTableComponent implements OnInit, OnChanges {
  @Input() data: Array<ContactModel>;
  @Output() selectionChange = new EventEmitter();

  dataSource: MatTableDataSource<ContactModel>;
  displayedColumns = ['select', 'username', 'name', 'email', 'phone'];
  selection = new SelectionModel<ContactModel>(true, []);

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data && this.data) {
      this.dataSource = new MatTableDataSource(this.data);
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;

    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.dataSource.data.forEach(row => this.selection.select(row));
    }

    this.selectionChange.emit(this.selection.selected);
  }

  toggleSelectionRow(row: ContactModel): void {
    this.selection.toggle(row);
    this.selectionChange.emit(this.selection.selected);
  }

  deSelectAll() {
    this.selection.clear();
    this.selectionChange.emit(this.selection.selected);
  }

}
