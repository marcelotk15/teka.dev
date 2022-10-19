export function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0')
}

export function convertMsToMinutesSeconds(milliseconds: number) {
  const minutes = Math.floor(milliseconds / 60000)
  const seconds = Math.round((milliseconds % 60000) / 1000)

  return seconds === 60
    ? `${padTo2Digits(minutes + 1)}:00`
    : `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`
}
