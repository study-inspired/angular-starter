import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { UpdateContactModel } from '../../models';
import { ContactState } from '../../reducers';
import { ContactActions } from '../../actions';

@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  constructor(
    private store: Store<ContactState>
  ) { }

  ngOnInit() {
  }

  onSave(contact: UpdateContactModel): void {
    this.store.dispatch(ContactActions.updateContact({ id: '123', contact }));
  }
}
