import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CreateContactModel } from '../../models';
import { ContactState } from '../../reducers';
import { ContactActions } from '../../actions';

@Component({
  selector: 'app-contact-create-page',
  templateUrl: './contact-create-page.component.html',
  styleUrls: ['./contact-create-page.component.scss']
})
export class ContactCreatePageComponent implements OnInit {

  constructor(
    private store: Store<ContactState>
  ) { }

  ngOnInit() {
  }

  onCreate(contact: CreateContactModel): void {
    this.store.dispatch(ContactActions.createContact({ contact }));
  }

}
