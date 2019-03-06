import { isOpenNow, getAvailability } from './schedule'
import { mockDate } from '../setupTests'

describe('schedule', () => {
  describe('isOpenNow', () => {
    it('returns true if there is a schedule for now', () => {
      mockDate('2019-03-05T12:00:00.977Z')
      const schedule = { day: 1, open: '11:00', close: '13:00' }

      expect(isOpenNow([schedule])).toBe(true)
    })

    it('returns false if there is not a schedule for now', () => {
      mockDate('2019-03-05T12:00:00.977Z')
      const schedule = { day: 1, open: '11:00', close: '11:59' }

      expect(isOpenNow([schedule])).toBe(false)
    })
  })

  describe('getAvailability', () => {
    it('returns Open right now if isOpenNow returns true', () => {
      mockDate('2019-03-05T12:00:00.977Z')
      const schedule = { day: 1, open: '11:00', close: '13:00' }

      expect(getAvailability([schedule])).toBe('Open right now')
    })

    it('returns next opening time if there is next schedule', () => {
      mockDate('2019-03-05T12:00:00.977Z')
      const schedule = { day: 2, open: '11:00' }
      const expectedAvailability = 'Next opening time: Wednesday at 11:00'

      expect(getAvailability([schedule])).toBe(expectedAvailability)
    })

    it('returns next opening time if there is next schedule for Monday', () => {
      mockDate('2019-03-03T12:00:00.977Z')
      const schedule = { day: 0, open: '11:00' }
      const expectedAvailability = 'Next opening time: Monday at 11:00'

      expect(getAvailability([schedule])).toBe(expectedAvailability)
    })

    it('returns unknown opening time if there is no schedule', () => {
      const expectedAvailability = 'Unknown opening times'

      expect(getAvailability()).toBe(expectedAvailability)
    })
  })
})