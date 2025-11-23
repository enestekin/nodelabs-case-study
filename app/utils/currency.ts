import currency from "currency.js";

const TRY_TO_USD = 0.029;

export function convertToUSD(tryAmount: number) {
  return currency(tryAmount, { precision: 2, separator: "" })
    .multiply(TRY_TO_USD)
    .format();
}
