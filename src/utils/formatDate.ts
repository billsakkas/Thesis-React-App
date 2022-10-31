const formatDate = (date: Date): string => {
  const opts: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString("en-US", opts);
};

export default formatDate;
