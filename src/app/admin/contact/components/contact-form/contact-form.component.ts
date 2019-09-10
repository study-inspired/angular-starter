import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Output() save = new  EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.save.emit();
  }

}
