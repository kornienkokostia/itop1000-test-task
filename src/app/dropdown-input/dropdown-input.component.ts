import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CurrencySymbolsResponse, Symbol } from 'src/models/currency';
import CurrencyService from 'src/services/CurrencyService';

@Component({
  selector: 'dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: [
    './dropdown-input.component.scss',
    './../input/input.component.scss',
  ],
})
export class DropdownInputComponent implements OnInit {
  @Input() dropdownTitle: string;
  @Input() control: FormControl;
  currencies: Symbol[];

  ngOnInit(): void {
    this.onRequest();
  }
  onRequest = async () => {
    const res = await CurrencyService()
      .getAllCurrencies()
      .then((res) => res);
    this.currencies = Object.values(res.symbols);
  };
}
