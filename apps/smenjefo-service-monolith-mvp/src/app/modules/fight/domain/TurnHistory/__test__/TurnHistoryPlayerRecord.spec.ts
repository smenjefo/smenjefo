import { getPlayerChangedPoints } from "../TurnHistoryPlayerRecord";

describe('TurnHistoryPlayerRecord', () => {
  describe('getPlayerChangedPoints', () => {
    it('should return correct negative value when after < before', () => {
      const result = getPlayerChangedPoints(3, 2);

      expect(result).toBe('-1');
    });

    it('should return correct negative value when after < before and after is zero', () => {
      const result = getPlayerChangedPoints(3, 0);

      expect(result).toBe('-3');
    });

    it('should return correct negative value when after < before and after lower than zero', () => {
      const result = getPlayerChangedPoints(3, -2);

      expect(result).toBe('-5');
    });

    it('should return correct positive value when after > before', () => {
      const result = getPlayerChangedPoints(3, 4);

      expect(result).toBe('+1');
    });

    it('should return correct positive value when after = before and after bigger than zero', () => {
      const result = getPlayerChangedPoints(3, 3);

      expect(result).toBe('');
    });

    it('should return correct positive value when after = before and after is zero', () => {
      const result = getPlayerChangedPoints(0, 0);

      expect(result).toBe('');
    });
  });
});