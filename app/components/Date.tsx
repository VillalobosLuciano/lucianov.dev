import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time
      className="flex text-sm text-gray-500 dark:text-gray-300"
      dateTime={dateString}
    >
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
}
