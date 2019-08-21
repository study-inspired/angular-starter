import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

import { Credential } from '@app/auth';
import { DetroyableComponent } from '@app/core/destroyable';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss', '../auth-from.scss']
})
export class LoginFormComponent extends DetroyableComponent implements OnInit, OnDestroy {
  @Input() pending: boolean;

  @Output() login: EventEmitter<Credential>;

  form: FormGroup;
  formErrors: any;
  hidePassword = true;

  constructor(private formBuilder: FormBuilder) {
    super();

    this.login = new EventEmitter();

    this.formErrors = {
      username: {},
      password: {}
    };
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.form.valueChanges.pipe(
      takeUntil(this.componentDestroyed$)
    ).subscribe(() => {
      this.onLoginFormValuesChanged();
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }
    this.login.emit(this.form.value);
  }

  private onLoginFormValuesChanged() {
    for (const field in this.formErrors) {
      if (!this.formErrors.hasOwnProperty(field)) {
        continue;
      }

      this.formErrors[field] = {};
      const control = this.form.get(field);

      if (control && control.dirty && !control.valid) {
        this.formErrors[field] = control.errors;
      }
    }
  }

}
