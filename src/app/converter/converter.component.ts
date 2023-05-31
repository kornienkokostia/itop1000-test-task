import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import CurrencyService from 'src/services/CurrencyService';
import { FormControl, FormGroup } from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  @ViewChildren(InputComponent) inputs: QueryList<InputComponent>;
  currencyOneSelect: FormControl = new FormControl<string>('USD');
  currencyTwoSelect: FormControl = new FormControl<string>('EUR');
  currencyOneInput: FormControl = new FormControl<string>('');
  currencyTwoInput: FormControl = new FormControl<string>('');

  ngOnInit() {
    const getResult = async (val: number, revese: boolean = false) => {
      return await CurrencyService()
        .convertCurrency(
          !revese ? this.currencyOneSelect.value : this.currencyTwoSelect.value,
          !revese ? this.currencyTwoSelect.value : this.currencyOneSelect.value,
          val
        )
        .then((res) => res.result.toFixed(2));
    };

    this.currencyOneInput.valueChanges.subscribe(async (val) => {
      if (val) {
        this.inputs.last.inputFocused = true;
        this.currencyTwoInput.setValue(await getResult(val), {
          emitEvent: false,
        });
      }
    });

    this.currencyTwoInput.valueChanges.subscribe(async (val) => {
      if (val) {
        this.inputs.first.inputFocused = true;
        this.currencyOneInput.setValue(await getResult(val, true), {
          emitEvent: false,
        });
      }
    });

    this.currencyOneSelect.valueChanges.subscribe(async () => {
      if (this.currencyOneInput.value && this.currencyTwoInput.value) {
        this.inputs.first.inputFocused = true;
        this.currencyOneInput.setValue(
          await getResult(this.currencyTwoInput.value, true),
          {
            emitEvent: false,
          }
        );
      }
    });

    this.currencyTwoSelect.valueChanges.subscribe(async () => {
      if (this.currencyOneInput.value && this.currencyTwoInput.value) {
        this.inputs.last.inputFocused = true;
        this.currencyTwoInput.setValue(
          await getResult(this.currencyOneInput.value, true),
          {
            emitEvent: false,
          }
        );
      }
    });
  }
}
