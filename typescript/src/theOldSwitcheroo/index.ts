export const vowel2index = (str: string) => {
  const vowels = ["A", "E", "I", "O", "U"];
  const isVowel = (char: string) => vowels.includes(char.toUpperCase());
  return str
    .split("")
    .map((char, idx) => (isVowel(char) ? idx + 1 : char))
    .join("");
};
