const days = [6, 0, 1, 2, 3, 4, 5]
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export const getTime = time => {
  const date = new Date()
  date.setHours(time.split(':')[0])
  date.setMinutes(time.split(':')[1])
  date.setSeconds(0)
  return date
}

export const getDay = (date = new Date()) => days[date.getDay()]

export const getWeekDay = day => weekDays[day]