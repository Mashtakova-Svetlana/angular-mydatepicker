import { UtilService } from './../../services/angular-mydatepicker.util.service';
import { Component, EventEmitter, Input, OnInit, OnChanges, Output, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { NEXT_VIEW_DISABLED, OPTS, PREV_VIEW_DISABLED, SELECT_MONTH, SELECT_YEAR, VISIBLE_MONTH, YEARS_DURATION } from "../../constants/constants";
import { DefaultView } from '../../enums/default-view.enum';
import { IMyMonth } from "../../interfaces/my-month.interface";
import { IMyOptions } from "../../interfaces/my-options.interface";

@Component({
  selector: "lib-selection-bar",
  templateUrl: "./selection-bar.component.html",
  encapsulation: ViewEncapsulation.None
})
export class SelectionBarComponent implements OnInit, OnChanges {
  @Input() opts: IMyOptions;
  @Input() yearsDuration: string;
  @Input() visibleMonth: IMyMonth;
  @Input() selectMonth: boolean;
  @Input() selectYear: boolean;
  @Input() prevViewDisabled: boolean;
  @Input() nextViewDisabled: boolean;

  @Output() prevNavigateBtnClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() nextNavigateBtnClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() monthViewBtnClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() yearViewBtnClicked: EventEmitter<void> = new EventEmitter<void>();

  lockMonth: boolean;
  lockYear: boolean;

  constructor(
    private utilService: UtilService,
  ) { }

  ngOnInit(): void {
    this.lockMonth = this.opts.lockView === DefaultView.Month;
    this.lockYear = this.opts.lockView === DefaultView.Year;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty(OPTS)) {
      this.opts = changes[OPTS].currentValue;
    }
    if (changes.hasOwnProperty(YEARS_DURATION)) {
      this.yearsDuration = changes[YEARS_DURATION].currentValue;
    }
    if (changes.hasOwnProperty(VISIBLE_MONTH)) {
      this.visibleMonth = changes[VISIBLE_MONTH].currentValue;
    }
    if (changes.hasOwnProperty(SELECT_MONTH)) {
      this.selectMonth = changes[SELECT_MONTH].currentValue;
    }
    if (changes.hasOwnProperty(SELECT_YEAR)) {
      this.selectYear = changes[SELECT_YEAR].currentValue;
    }
    if (changes.hasOwnProperty(PREV_VIEW_DISABLED)) {
      this.prevViewDisabled = changes[PREV_VIEW_DISABLED].currentValue;
    }
    if (changes.hasOwnProperty(NEXT_VIEW_DISABLED)) {
      this.nextViewDisabled = changes[NEXT_VIEW_DISABLED].currentValue;
    }
  }

  onPrevNavigateBtnClicked(event: any): void {
    event.stopPropagation();
    this.opts.rtl ? this.nextNavigateBtnClicked.emit() : this.prevNavigateBtnClicked.emit();
  }

  onNextNavigateBtnClicked(event: any): void {
    event.stopPropagation();
    this.opts.rtl ? this.prevNavigateBtnClicked.emit() : this.nextNavigateBtnClicked.emit();
  }

  onMonthViewBtnClicked(event: any): void {
    event.stopPropagation();
    this.monthViewBtnClicked.emit();
  }

  onYearViewBtnClicked(event: any): void {
    if (!this.selectYear) {
      event.stopPropagation();
      this.yearViewBtnClicked.emit();
    }
  }
}
