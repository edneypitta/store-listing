import { getTime, getDay, getWeekDay } from '../helpers/date'

export const isOpenNow = (schedule = []) => {
  const now = new Date()
  const today = schedule.find(s => s.day === getDay(now))
  if (!today)
    return false

  const openTime = getTime(today.open)
  const closeTime = getTime(today.close)

  return now >= openTime && now <= closeTime
}

export const getAvailability = (schedule = []) => {
  if (isOpenNow(schedule))
    return 'Open right now'

  const today = getDay()
  const nextSchedule = schedule
    .sort((a, b) => a.day - b.day)
    .find(s => today === 6 ? s.day >= 0 : s.day > today)

  return nextSchedule ?
    `Next opening time: ${getWeekDay(nextSchedule.day)} at ${nextSchedule.open}` :
    'Unknown opening times'
}

