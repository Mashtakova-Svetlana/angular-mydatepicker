import {Component, OnInit} from '@angular/core';
import {IMyDateModel} from "../../../projects/angular-mydatepicker/src/lib/interfaces/my-date-model.interface";
import {IAngularMyDpOptions} from "../../../projects/angular-mydatepicker/src/lib/interfaces/my-options.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DefaultView} from "../../../projects/angular-mydatepicker/src/lib/enums/default-view.enum";

@Component({
  selector: 'date-picker-year',
  templateUrl: './date-picker-year.component.html',
  styleUrls: ['./date-picker-year.component.css']
})
export class DatePickerYear implements OnInit {
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
      lockView: DefaultView.Year,
      centerYearView: false,
      yearsRows: 4,
      yearsCols: 3,
      markYears: [
        {
          dates: [
            {
              year: 1997,
              month: 0,
              day: 0,
            },
          ],
          color: 'cyan',
          styleClass: 'mark-class',
        }
      ],
    };   
  }
}

