const milisecondsPerSecond = 1000;
const secondsPerMinute = 60;
const minutesPerHour = 60;

export const minuteToMiliseconds = (minutes: number): number => {
  return minutes * secondsPerMinute * milisecondsPerSecond;
};
