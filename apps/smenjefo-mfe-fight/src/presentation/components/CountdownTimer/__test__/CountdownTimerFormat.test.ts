import { format, behavior } from '../CountdownTimerFormat';

describe('CountdownTimerFormat', () => {
  describe('format', () => {
    it('should format two-digit values correctly', () => {
      const formattedText = format(10);

      expect(formattedText).toBe('0:10');
    });

    it('should format one-digit values correctly', () => {
      const formattedText = format(2);

      expect(formattedText).toBe('0:02');
    });

    it('should format values than below zero correctly', () => {
      const formattedText = format(-1);

      expect(formattedText).toBe('0:00');
    });

    it('should format zero values correctly', () => {
      const formattedText = format(0);

      expect(formattedText).toBe('0:00');
    });
  });

  describe('behavior', () => {
    it('should return normal behavior', () => {
      const formattedText = behavior(6);

      expect(formattedText).toBe('normal');
    });

    it('should return danger behavior', () => {
      const formattedText = behavior(5);

      expect(formattedText).toBe('danger');
    });

    it('should return danger behavior when zero', () => {
      const formattedText = behavior(0);

      expect(formattedText).toBe('danger');
    });
  });
});