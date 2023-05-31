import { Component, OnInit } from '@angular/core';
import CurrencyService from './../../services/CurrencyService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  usdRate?: string = undefined;
  eurRate?: string = undefined;
  ngOnInit(): void {
    this.onRequest();
  }
  onRequest = async () => {
    this.usdRate = await CurrencyService()
      .convertCurrency('USD', 'UAH')
      .then((res) => res.info.rate.toFixed(2));

    this.eurRate = await CurrencyService()
      .convertCurrency('EUR', 'UAH')
      .then((res) => res.info.rate.toFixed(2));
  };
}
