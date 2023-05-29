import { useHttp } from './http.hook';
import { CurrencyResponce } from './../models/currency';

const CurrencyService = () => {
  const { request } = useHttp();
  const apiBase = 'https://api.exchangerate.host';

  const convertCurrency = async (from: string, to: string, amount?: number) =>
    (await request(
      `${apiBase}/convert?from=${from}&to=${to}${
        amount ? '&amount=' + amount : ''
      }`
    )) as CurrencyResponce;

  return { convertCurrency };
};

export default CurrencyService;
