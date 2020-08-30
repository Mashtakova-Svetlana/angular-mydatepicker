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
  options: IAngularMyDpOptions;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.options = this.getDefaultOptions();
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
    this.myForm.controls.myDate.valueChanges.subscribe(() => {
      this.options = this.getDefaultOptions();
    });
  }

  private getDefaultOptions(): IAngularMyDpOptions {
    return {
      dateRange: false,
      inline: true,
      dateFormat: 'dd.mm.yyyy',
      lockView: DefaultView.Month,
      yearsRows: 4,
      yearsCols: 3,
      monthCellLabels: { 
        1: 'Янв',
      },
      markMonths: [
        {
          dates: [
            {
              year: 2020,
              month: 1,
              day: 0,
            },
            {
              year: 2020,
              month: 2,
              day: 0,
            },
            {
              year: 2020,
              month: 3,
              day: 0,
            },
            {
              year: 2020,
              month: 4,
              day: 0,
            },
          ],
          color: 'magenta',
        }
      ],
    };
  }
}

