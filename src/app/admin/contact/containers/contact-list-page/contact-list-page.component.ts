import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

import { ConfirmDialogComponent } from '@app/shared/dialog';
import { ContactModel } from '../../models';
import { ContactState } from '../../reducers';
import { ContactActions } from '../../actions';
import { ContactSelectors } from '../../selectors';
import { ContactTableComponent } from '../../components';

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.scss']
})
export class ContactListPageComponent implements OnInit {
  @ViewChild('contactTable', { static: false }) contactTable: ContactTableComponent;
  pending$: Observable<boolean>;
  contacts$: Observable<Array<ContactModel>>;

  selectedContacts: Array<ContactModel> = [];
  isShowActions = false;

  constructor(
    private router: Router,
    private store: Store<ContactState>,
    private dialog: MatDialog
  ) {
    this.store.dispatch(ContactActions.findContact({ query: {} }));
    this.contacts$ = this.store.pipe(select(ContactSelectors.selectAllContacts));
  }

  ngOnInit() {
  }

  onSelectionChange(contacts: Array<ContactModel>) {
    this.selectedContacts = contacts;
    this.isShowActions = contacts.length > 0;
  }

  onDeleteSelectedContacts() {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm',
        message: 'Are you sure you want to delete all selected contacts?'
      }
    });
  }

  onSelectRow(contact: ContactModel) {
    this.router.navigateByUrl(`./${contact.id}`);
  }

  deSelectAll() {
    this.contactTable.deSelectAll();
  }

}
