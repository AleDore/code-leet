export function myAtoi(s: string): number {
  const startsWithChars = (s: string) => s.match(/^(\D)/);
  if (
    (startsWithChars(s) &&
      !s.startsWith(" ") &&
      !s.startsWith("+") &&
      !s.startsWith("-")) ||
    s.startsWith("+-") ||
    s.startsWith("-+") ||
    s.includes(" + ") ||
    s.match(/(\-|\+)(\D)(?!$)/) ||
    s.match(/[a-zA-Z](\d+)$/) ||
    (s.includes("++") && !s.endsWith("++")) ||
    (s.includes("--") && !s.endsWith("--")) ||
    s.includes(" - ")
  )
    return 0;
  const matches = s.match(/(\-|\+?)(\d+)/);
  const digits = matches ? matches[0] : "0";
  const num = Number(digits);

  return num < -2147483648 ? -2147483648 : num > 2147483647 ? 2147483647 : num;
}
