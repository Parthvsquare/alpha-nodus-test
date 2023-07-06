const calculateTimeDifference = ({
  updatedAt,
}: {
  updatedAt: number;
}): string => {
  const currentTime = new Date().getTime();
  const timeDifference = currentTime - updatedAt;

  // Calculate the time difference in hours
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  return `${hoursDifference} hours`;
};
