export default interface Experience {
  title: string;
  date: [Date, Date?]; // if the second date is undefined, it will be considered ongoing. // if the second date is equal to the first date, it will just have that month
  description: string[];
}
