export const createNumberById = (userId: number): string => {
  // лаконичность этой функции не поражает, но она работает
  const last4Number = userId + "544";
  const separatedDigits = last4Number.replace(/(.{2})(.{2})/, "$1-$2");
  let number: string = "0";
  const numberFrame = "+7" + " (983) " + "366-";

  last4Number.length > 4
    ? (number = numberFrame + separatedDigits.slice(0, 5))
    : (number = numberFrame + separatedDigits);

  return number;
};
