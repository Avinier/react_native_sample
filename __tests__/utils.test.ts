
import {NumberUtils} from '../src/utils/number_utils';

describe('NumberUtils', () => {
  describe('abbreviateNumber', () => {
    it('should abbreviate numbers correctly', () => {
      expect(NumberUtils.abbreviateNumber(1000)).toBe('1K');
      expect(NumberUtils.abbreviateNumber(1500000)).toBe('1.5M');
      expect(NumberUtils.abbreviateNumber(2500000000)).toBe('2.5B');
      expect(NumberUtils.abbreviateNumber(1234567890123)).toBe('1.23T');
      expect(NumberUtils.abbreviateNumber(500)).toBe('500');
      expect(NumberUtils.abbreviateNumber(0)).toBe('0');
    });

    it('should handle negative numbers', () => {
      expect(NumberUtils.abbreviateNumber(-1000)).toBe('1K');
      expect(NumberUtils.abbreviateNumber(-1500000)).toBe('1.5M');
      expect(NumberUtils.abbreviateNumber(-500)).toBe('500');
    });

    it('should respect significant digits parameter', () => {
      expect(
        NumberUtils.abbreviateNumber(1234567, {significantDigits: 3}),
      ).toBe('1.235M');
      expect(
        NumberUtils.abbreviateNumber(1234567, {significantDigits: 1}),
      ).toBe('1.2M');
      expect(
        NumberUtils.abbreviateNumber(1234567, {significantDigits: 0}),
      ).toBe('1M');
    });

    it('should handle non-abbreviated mode', () => {
      expect(NumberUtils.abbreviateNumber(1000, {isAbbreviated: false})).toBe(
        '1000',
      );
      expect(
        NumberUtils.abbreviateNumber(1500000, {isAbbreviated: false}),
      ).toBe('1500000');
      expect(NumberUtils.abbreviateNumber(500, {isAbbreviated: false})).toBe(
        '500',
      );
    });
  });

  describe('abbreviateNumberForPerpTrade', () => {
    it('should format numbers for perp trade', () => {
      expect(NumberUtils.abbreviateNumberForPerpTrade(123.45)).toBe(
        '123.45',
      );
      expect(NumberUtils.abbreviateNumberForPerpTrade(1000.0)).toBe('1000');
      expect(NumberUtils.abbreviateNumberForPerpTrade(0.5)).toBe('0.5');
      expect(NumberUtils.abbreviateNumberForPerpTrade(1.0)).toBe('1');
      expect(NumberUtils.abbreviateNumberForPerpTrade(0.0)).toBe('0');
    });
  });

  describe('abbreviateNumberForGraph', () => {
    it('should abbreviate large numbers for graphs', () => {
      expect(NumberUtils.abbreviateNumberForGraph(1000)).toBe('1K');
      expect(NumberUtils.abbreviateNumberForGraph(1500000)).toBe('1.5M');
      expect(NumberUtils.abbreviateNumberForGraph(2500000000)).toBe('2.5B');
      expect(NumberUtils.abbreviateNumberForGraph(1234567890123)).toBe(
        '1.23T',
      );
    });

    it('should handle medium numbers', () => {
      expect(NumberUtils.abbreviateNumberForGraph(500)).toBe('500');
      expect(NumberUtils.abbreviateNumberForGraph(50)).toBe('50.0');
      expect(NumberUtils.abbreviateNumberForGraph(5)).toBe('5.000');
    });

    it('should handle small numbers', () => {
      expect(NumberUtils.abbreviateNumberForGraph(0.5)).toBe('0.500');
      expect(NumberUtils.abbreviateNumberForGraph(0.05)).toBe('0.0500');
      expect(NumberUtils.abbreviateNumberForGraph(0.005)).toBe('0.005000');
    });

    it('should handle very small numbers', () => {
      expect(NumberUtils.abbreviateNumberForGraph(0.0001)).toBe('0.0₃1000');
      expect(NumberUtils.abbreviateNumberForGraph(0.00001)).toBe('0.0₄1000');
      expect(NumberUtils.abbreviateNumberForGraph(0.000001)).toBe('0.0₅1000');
    });

    it('should handle zero', () => {
      expect(NumberUtils.abbreviateNumberForGraph(0)).toBe('0');
    });
  });

  describe('trimDecimal', () => {
    it('should trim trailing zeros from decimal strings', () => {
      expect(NumberUtils.trimDecimal('123.4500')).toBe('123.45');
      expect(NumberUtils.trimDecimal('1000.0000')).toBe('1000');
      expect(NumberUtils.trimDecimal('0.5000')).toBe('0.5');
      expect(NumberUtils.trimDecimal('1.0000')).toBe('1');
      expect(NumberUtils.trimDecimal('123')).toBe('123');
      expect(NumberUtils.trimDecimal('123.0')).toBe('123');
    });

    it('should handle edge cases', () => {
      expect(NumberUtils.trimDecimal('0')).toBe('0');
      expect(NumberUtils.trimDecimal('0.0')).toBe('0');
      expect(NumberUtils.trimDecimal('')).toBe('');
      expect(NumberUtils.trimDecimal('123.100')).toBe('123.1');
    });
  });

  describe('trimmedNumber', () => {
    it('should trim trailing zeros and dots', () => {
      expect(NumberUtils.trimmedNumber('123.4500')).toBe('123.45');
      expect(NumberUtils.trimmedNumber('1000.0000')).toBe('1000');
      expect(NumberUtils.trimmedNumber('0.5000')).toBe('0.5');
      expect(NumberUtils.trimmedNumber('1.0000')).toBe('1');
      expect(NumberUtils.trimmedNumber('123.')).toBe('123');
      expect(NumberUtils.trimmedNumber('123')).toBe('123');
    });

    it('should handle edge cases', () => {
      expect(NumberUtils.trimmedNumber('0')).toBe('0');
      expect(NumberUtils.trimmedNumber('0.0')).toBe('');
      expect(NumberUtils.trimmedNumber('')).toBe('');
      expect(NumberUtils.trimmedNumber('123.100')).toBe('123.1');
    });
  });

  describe('getAbsoluteDisplayValue', () => {
    it('should remove negative sign from display values', () => {
      expect(NumberUtils.getAbsoluteDisplayValue('-123.45')).toBe('123.45');
      expect(NumberUtils.getAbsoluteDisplayValue('-1000')).toBe('1000');
      expect(NumberUtils.getAbsoluteDisplayValue('-0.5')).toBe('0.5');
    });

    it('should return positive values unchanged', () => {
      expect(NumberUtils.getAbsoluteDisplayValue('123.45')).toBe('123.45');
      expect(NumberUtils.getAbsoluteDisplayValue('1000')).toBe('1000');
      expect(NumberUtils.getAbsoluteDisplayValue('0')).toBe('0');
    });

    it('should handle edge cases', () => {
      expect(NumberUtils.getAbsoluteDisplayValue('')).toBe('');
      expect(NumberUtils.getAbsoluteDisplayValue('0')).toBe('0');
    });
  });

  describe('isClosedToZero', () => {
    it('should return true for values close to zero', () => {
      expect(NumberUtils.isClosedToZero(0.0)).toBe(true);
      expect(NumberUtils.isClosedToZero(0.01)).toBe(true);
      expect(NumberUtils.isClosedToZero(0.04)).toBe(true);
      expect(NumberUtils.isClosedToZero(-0.01)).toBe(true);
      expect(NumberUtils.isClosedToZero(-0.04)).toBe(true);
      expect(NumberUtils.isClosedToZero(null)).toBe(true);
      expect(NumberUtils.isClosedToZero(undefined)).toBe(true);
    });

    it('should return false for values not close to zero', () => {
      expect(NumberUtils.isClosedToZero(0.06)).toBe(false);
      expect(NumberUtils.isClosedToZero(0.1)).toBe(false);
      expect(NumberUtils.isClosedToZero(1.0)).toBe(false);
      expect(NumberUtils.isClosedToZero(-0.06)).toBe(false);
      expect(NumberUtils.isClosedToZero(-1.0)).toBe(false);
    });
  });
});
