import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mat-select-search',
  templateUrl: './mat-select-search.component.html',
  styleUrls: ['./mat-select-search.component.scss']
})
export class MatSelectSearchComponent implements OnInit {

  @Input() placeholderLabel = 'app_mat_select_search_ts_1';
  @Input() noEntriesFoundLabel = 'app_mat_select_search_ts_2';
  @Input() items = [];
  @Input() filterProperty = '';
  @Input() filterType = 'startsWith';

  filteredItems: any[] = [];

  @Output() getFilteredItems = new EventEmitter();

  @ViewChild('searchSelectInput', { read: ElementRef }) searchSelectInput: ElementRef;

  /** Current search value */
  get value(): string {
    return this._searchValue;
  }
  private _searchValue: string;

  constructor(
    @Inject(MatSelect) public matSelect: MatSelect
  ) {}

  ngOnInit() {
    const panelClass = 'mat-select-search-panel';
    if (this.matSelect.panelClass) {
      if (Array.isArray(this.matSelect.panelClass)) {
        this.matSelect.panelClass.push(panelClass);
      } else if (typeof this.matSelect.panelClass === 'string') {
        this.matSelect.panelClass = [this.matSelect.panelClass, panelClass];
      } else if (typeof this.matSelect.panelClass === 'object') {
        this.matSelect.panelClass[panelClass] = true;
      }
    } else {
      this.matSelect.panelClass = panelClass;
    }
  }

  onChangeSearch(value: string) {
    const valueChanged = value !== this._searchValue;
    if (valueChanged) {
      this._searchValue = value;
      this.filterItems();
    }
  }

  filterItems() {
    switch (this.filterType) {

      case 'startsWith':
        this.filteredItems = this.items.filter(i => i[this.filterProperty].toLocaleUpperCase().startsWith(this._searchValue.toLocaleUpperCase()));
        this.getFilteredItems.emit(this.filteredItems);
        break;

      case 'includes':
        this.filteredItems = this.items.filter(i => i[this.filterProperty].toLocaleUpperCase().includes(this._searchValue.toLocaleUpperCase()));
        this.getFilteredItems.emit(this.filteredItems);
        break;

      default:
        break;
    }
  }

  _handleKeydown(event: KeyboardEvent) {
    if (parseInt(event.key, 10) === 32) {
      event.stopPropagation();
    }
  }

  public _focus() {
    if (!this.searchSelectInput) {
      return;
    }
    const panel = this.matSelect.panel.nativeElement;
    const scrollTop = panel.scrollTop;

    this.searchSelectInput.nativeElement.focus();

    panel.scrollTop = scrollTop;
  }

  public _reset(focus?: boolean) {
    if (!this.searchSelectInput) {
      return;
    }
    this.searchSelectInput.nativeElement.value = '';
    this.onChangeSearch('');
    if (focus) {
      this._focus();
    }
  }

  // /**
  //  * Sets the overlay class  to correct offsetY
  //  * so that the selected option is at the position of the select box when opening
  //  */
  // private setOverlayClass() {
  //   if (this.overlayClassSet) {
  //     return;
  //   }
  //   const overlayClass = 'cdk-overlay-pane-select-search';

  //   this.matSelect.overlayDir.attach
  //     .pipe(takeUntil(this._onDestroy))
  //     .subscribe(() => {
  //       // note: this is hacky, but currently there is no better way to do this
  //       this.searchSelectInput.nativeElement.parentElement.parentElement
  //         .parentElement.parentElement.parentElement.classList.add(overlayClass);
  //     });

  //   this.overlayClassSet = true;
  // }

}
