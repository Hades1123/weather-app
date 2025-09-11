export const getDay = (isoTime: string, tz: string) => {
  return new Date(isoTime).toLocaleDateString("en-US", {
    weekday: "long",
    timeZone: tz
  });
};