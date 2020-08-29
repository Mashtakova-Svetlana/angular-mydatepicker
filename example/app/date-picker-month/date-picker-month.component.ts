import {Component, OnInit} from '@angular/core';
import {IMyDateModel} from "../../../projects/angular-mydatepicker/src/lib/interfaces/my-date-model.interface";
import {IAngularMyDpOptions} from "../../../projects/angular-mydatepicker/src/lib/interfaces/my-options.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DefaultView} from "../../../projects/angular-mydatepicker/src/lib/enums/default-view.enum";

@Component({
  selector: 'date-picker-month',
  templateUrl: './date-picker-month.component.html',
  styleUrls: ['./date-picker-month.component.css']
})
export class DatePickerMonth implements OnInit {
  myForm: FormGroup;
  myDatePickerOptions: IAngularMyDpOptions = {
    dateRange: false,
    inline: true,
    dateFormat: 'dd.mm.yyyy',
    lockView: DefaultView.Month,
    markMonths: [
      {
        dates: [
          {
            year: 2020,
            month: 1,
            day: null,
          },
          {
            year: 2020,
            month: 2,
            day: null,
          },
          {
            year: 2020,
            month: 3,
            day: null,
          },
          {
            year: 2020,
            month: 4,
            day: null,
          },
        ],
        color: 'red',
      }
    ],
  };

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.initForm();
    this.initSubs();
  }

  initForm(): void {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    const model: IMyDateModel = { isRange: false, singleDate: {jsDate: d}, dateRange: null };

    this.myForm = this.fb.group({
      myDate: [model, Validators.required],
    });
  }

  initSubs(): void {
    this.myForm.controls.myDate.valueChanges.subscribe(console.log);
  }
}

