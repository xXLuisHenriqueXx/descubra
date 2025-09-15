export const formatDate = (date: Date) => {
  return new Date(date).toString().split(" ").slice(1, 4).join(" ");
};
