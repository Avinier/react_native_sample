export class NumberUtils {
  static subscriptDigits: {[key: number]: string} = {
    0: '₀',
    1: '₁',
    2: '₂',
    3: '₃',
    4: '₄',
    5: '₅',
    6: '₆',
    7: '₇',
    8: '₈',
    9: '₉',
  };

  static abbreviateNumberForPerpTrade(
    number: number,
    options?: {significantDigits?: number; isAbbreviated?: boolean},
  ): string {
    const {isAbbreviated = true} = options || {};
    return number
      .toFixed(2)
      .replace(/0+$/, '')
      .replace(/\.$/, '');
  }

  static abbreviateNumber(
    number: number,
    options?: {significantDigits?: number; isAbbreviated?: boolean},
  ): string {
    const {significantDigits, isAbbreviated = true} = options || {};
    let abbrNumber: number = number;
    let unit = '';
    if (number.toString().startsWith('-')) {
      number = Number(number.toString().substring(1));
    }
    if (isAbbreviated) {
      if (number >= 1e12) {
        abbrNumber = number / 1e12;
        unit = 'T';
      } else if (number >= 1e9) {
        abbrNumber = number / 1e9;
        unit = 'B';
      } else if (number >= 1e6) {
        abbrNumber = number / 1e6;
        unit = 'M';
      } else if (number >= 1e3) {
        abbrNumber = number / 1e3;
        unit = 'K';
      } else {
        abbrNumber = number;
        unit = '';
      }
    }

    const formattedNumber = this._formatNumber(abbrNumber, {
      significantDigits,
    });
    return formattedNumber + unit;
  }

  private static _formatNumber(
    number: number,
    options?: {significantDigits?: number},
  ): string {
    const {significantDigits} = options || {};
    const digits =
      significantDigits ??
      (number > 100
        ? 0
        : number > 10
        ? 1
        : 2);
    let numberStr = number.toFixed(digits);
    numberStr = this.trimDecimal(numberStr);

    return numberStr;
  }

  static trimDecimal(numberStr: string): string {
    if (numberStr.includes('.')) {
      numberStr = numberStr.replace(/\.?0*$/, '');
    }
    return numberStr;
  }

  static trimmedNumber(number: string): string {
    // Remove trailing zeroes
    number = number.replace(/0+$/, '');

    // If last character is dot, remove it
    if (number.endsWith('.')) {
      number = number.substring(0, number.length - 1);
    }

    return number;
  }

  static abbreviateNumberForGraph(
    number: number,
    options?: {format?: boolean},
  ): string {
    const {format = false} = options || {};
    const absNumber = Math.abs(number);
    const sign = number < 0 ? '-' : '';

    if (absNumber === 0) {
      return '0';
    }

    if (absNumber >= 1000) {
      const lookup = [
        {value: 1e24, symbol: 'Y'}, // Yotta
        {value: 1e21, symbol: 'Z'}, // Zetta
        {value: 1e18, symbol: 'E'}, // Exa
        {value: 1e15, symbol: 'P'}, // Peta
        {value: 1e12, symbol: 'T'}, // Tera
        {value: 1e9, symbol: 'B'}, // Billion
        {value: 1e6, symbol: 'M'}, // Million
        {value: 1e3, symbol: 'K'}, // Thousand
      ];

      const trailingZeroes = /(\.\d*?[1-9])0+$|\.0+$/;
      const matchedLookup = lookup.find(item => absNumber >= item.value)!;

      let toFixed = 0;

      if (absNumber / matchedLookup.value < 10) {
        toFixed = 2;
      } else if (absNumber / matchedLookup.value < 100) {
        toFixed = 1;
      }

      const abbreviated = (number / matchedLookup.value)
        .toFixed(toFixed)
        .replace(trailingZeroes, '');

      if (format) {
        return (
          new Intl.NumberFormat('en-US', {
            minimumFractionDigits: toFixed,
            maximumFractionDigits: toFixed,
          }).format(number / matchedLookup.value) + matchedLookup.symbol
        );
      } else {
        return abbreviated + matchedLookup.symbol;
      }
    }

    if (absNumber >= 100) {
      return number.toFixed(0);
    }

    if (absNumber >= 10) {
      return number.toFixed(1);
    }

    if (absNumber < 0.001) {
      return sign + absNumber.toFixed(8); // More precision for very small numbers
    } else if (absNumber < 0.01) {
      return sign + absNumber.toFixed(6);
    } else if (absNumber < 0.1) {
      return sign + absNumber.toFixed(4);
    } else if (absNumber < 1) {
      return sign + absNumber.toFixed(3);
    } else if (absNumber < 10) {
      return sign + absNumber.toFixed(1);
    } else if (absNumber < 100) {
      return sign + absNumber.toFixed(0);
    } else {
      return sign + absNumber.toFixed(0); // Fallback for numbers >= 100
    }
  }

  static getAbsoluteDisplayValue(displayValue: string): string {
    if (displayValue.startsWith('-')) {
      return displayValue.substring(1);
    }
    return displayValue;
  }

  static isClosedToZero(value?: number | null): boolean {
    return value === null || value === undefined || Math.abs(value) < 0.05;
  }
}