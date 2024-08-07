export const formatLabel = (category: string) => {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const pluralizeDays = (count: number) => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;
  let word;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    word = "дней";
  } else if (lastDigit === 1) {
    word = "день";
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    word = "дня";
  } else {
    word = "дней";
  }

  return `${count} ${word}`;
};
