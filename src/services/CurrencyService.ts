import { useHttp } from './http.hook';
import {
  CurrencyResponce,
  CurrencySymbolsResponse,
} from './../models/currency';

const CurrencyService = () => {
  const { request } = useHttp();
  const apiBase = 'https://api.exchangerate.host';

  const convertCurrency = async (from: string, to: string, amount?: number) =>
    (await request(
      `${apiBase}/convert?from=${from}&to=${to}${
        amount ? '&amount=' + amount : ''
      }`
    )) as CurrencyResponce;

  const getAllCurrencies = async () =>
    (await request(`${apiBase}/symbols`)) as CurrencySymbolsResponse;

  return { convertCurrency, getAllCurrencies };
};

export default CurrencyService;
