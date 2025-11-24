export function formatDate(isoDateString: string) {
  const dateObject = new Date(isoDateString);

  const datePart = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const timePart = dateObject.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });

  const formattedDate = `${datePart} at ${timePart}`;

  return formattedDate;
}
