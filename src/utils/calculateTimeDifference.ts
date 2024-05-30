export const calculateTimeDifference = (previousDate: string | Date) => {
  const prevDate: Date = new Date(previousDate);

  let currentDate: Date = new Date();

  let secondsPassed: number = Math.floor(
    (currentDate.getTime() - prevDate.getTime()) / 1000
  );

  let days = Math.floor(secondsPassed / (3600 * 24));
  secondsPassed -= days * 3600 * 24;

  let hours = Math.floor(secondsPassed / 3600);
  secondsPassed -= hours * 3600;

  let minutes = Math.floor(secondsPassed / 60);
  secondsPassed -= minutes * 60;

  let seconds = secondsPassed;

  if (!!days) {
    if (days > 30) {
      return `${days} days`;
    } else {
      return `${days} days, ${hours} hours`;
    }
  } else if (!!hours) {
    return `${hours} hours, ${minutes} minutes`;
  } else if (!!minutes) {
    return `${minutes} minutes, ${seconds} seconds`;
  } else {
    return `${seconds} seconds`;
  }
};
