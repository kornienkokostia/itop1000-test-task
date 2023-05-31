export interface CurrencyResponce {
  query: {
    from: string;
    to: string;
    amount: number;
  };
  info: {
    rate: number;
  };
  result: number;
}

export interface CurrencySymbolsResponse {
  symbols: { [key: string]: Symbol };
}

export interface Symbol {
  description: string;
  code: string;
}
