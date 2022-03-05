const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export default function formatDate(date) {
  const year = new Date(date).getFullYear();
  const month = MONTHS[new Date(date).getMonth()];

  return `${month} ${year}`;
}
