export const calculateTimeDifference = (timestamp: string | Date) => {
  const now = new Date();
  const secondsPast = (now.getTime() - new Date(timestamp).getTime()) / 1000;

  if (secondsPast < 60) {
    return `${Math.floor(secondsPast)} seconds ago`;
  }
  if (secondsPast < 3600) {
    return `${Math.floor(secondsPast / 60)} minutes ago`;
  }
  if (secondsPast < 86400) {
    return `${Math.floor(secondsPast / 3600)} hours ago`;
  }
  if (secondsPast < 2592000) {
    return `${Math.floor(secondsPast / 86400)} days ago`;
  }
  if (secondsPast < 31536000) {
    return `${Math.floor(secondsPast / 2592000)} months ago`;
  }
  return `${Math.floor(secondsPast / 31536000)} years ago`;
};
