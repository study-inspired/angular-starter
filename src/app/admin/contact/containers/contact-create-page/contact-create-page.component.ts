import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { CreateContactModel } from '../../models';
import { ContactState } from '../../reducers';
import { ContactActions } from '../../actions';
import { ContactFormComponent } from '../../components';

@Component({
  selector: 'app-contact-create-page',
  templateUrl: './contact-create-page.component.html',
  styleUrls: ['./contact-create-page.component.scss']
})
export class ContactCreatePageComponent implements OnInit {
  @ViewChild(ContactFormComponent, { static: true }) form: ContactFormComponent;

  constructor(
    private store: Store<ContactState>
  ) { }

  ngOnInit() {
  }

  onCreate(contact: CreateContactModel): void {
    this.store.dispatch(ContactActions.createContact({ contact }));
  }

}
