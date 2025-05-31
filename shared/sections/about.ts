export default function calculatYearsMonth(startDate = new Date(2022, 6, 1)) {
  const currentDate = new Date();

  let totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
  totalMonths += currentDate.getMonth() - startDate.getMonth();

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearLabel = (y: number) => {
    if (y === 1) return "rok";
    if ([2, 3, 4].includes(y)) return "lata";
    return "lat";
  };

  const monthLabel = (m: number) => {
    if (m === 1) return "miesiąc";
    if ([2, 3, 4].includes(m)) return "miesiące";
    return "miesięcy";
  };

  let result = "";

  if (years > 0) {
    result += `${years} ${yearLabel(years)}`;
  }

  if (months > 0) {
    if (result) result += " i ";
    result += `${months} ${monthLabel(months)}`;
  }

  if (!result) {
    result = "0 miesięcy";
  }

  return result;
}
