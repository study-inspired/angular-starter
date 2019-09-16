import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { FormValueChangeEvent } from '@app/core/form';
import { takeUntilDestroy } from '@app/core/destroyable';
import { ConfirmDialogComponent } from '@app/shared/dialog';
import { ContactModel, UpdateContactModel } from '../../models';
import { ContactState } from '../../reducers';
import { ContactActions } from '../../actions';
import { ContactSelectors } from '../../selectors';
import { ContactFormComponent } from '../../components';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {
  @ViewChild(ContactFormComponent, { static: true }) form: ContactFormComponent;

  pending$: Observable<boolean>;
  contact$: Observable<ContactModel>;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private store: Store<ContactState>
  ) {
    this.route.params
      .pipe(
        filter(params => !!params && !!params.id),
        takeUntilDestroy(this)
      )
      .subscribe(params => {
        const contactId = params.id;
        this.store.dispatch(ContactActions.findContactById({ id: contactId }));
        this.contact$ = this.store.pipe(select(ContactSelectors.selectContactById(contactId)));
      });
  }

  ngOnInit() {
  }

  onDeleteClicked(contact: ContactModel) {
    let name = contact.name;
    if (name.length > 15) {
      name = name.substr(0, 15) + '...';
    }

    this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Please confirm!',
        message: `Are you sure you want to delete "${name}"?`
      }
    }).afterClosed()
      .subscribe(confirm => {
        if (confirm) {
          this.store.dispatch(ContactActions.deleteContact({ id: contact.id }));
        }
      });
  }

  onFormValueChange(event: FormValueChangeEvent): void {
    if (event.valid && event.value) {
      const contact = event.value as UpdateContactModel;
      this.store.dispatch(ContactActions.updateContact({ id: contact.id, contact }));
    }
  }

}
