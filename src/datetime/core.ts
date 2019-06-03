const milisecondsPerSecond = 1000;
const secondsPerMinute = 60;
const minutesPerHour = 60;

export const hoursToMilliseconds = (hours: number): number => {
  return hours * minutesPerHour * secondsPerMinute * milisecondsPerSecond;
};

export const minutesToMilliseconds = (minutes: number): number => {
  return minutes * secondsPerMinute * milisecondsPerSecond;
};

export const secondsToMilliseconds = (seconds: number): number => {
  return seconds * milisecondsPerSecond;
};
