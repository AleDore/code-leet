import { longestPalindrome } from "..";

describe("Longest Palindrome Substring", () => {
  it.each([
    { s: "babad", expectedOutput: "bab" },
    { s: "cbbd", expectedOutput: "bb" },
    { s: "radar", expectedOutput: "radar" },
    { s: "adda", expectedOutput: "adda" },
    { s: "ac", expectedOutput: "a" },
    { s: "bb", expectedOutput: "bb" },
    {
      s: "kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv",
      expectedOutput: "qahaq",
    },
    { s: "aaaa", expectedOutput: "aaaa" },
    { s: "tattarrattat", expectedOutput: "tattarrattat" },
    {
      s: "babaddtattarrattatddetartrateedredividerb",
      expectedOutput: "ddtattarrattatdd",
    },
    {
      s: "caaaaa",
      expectedOutput: "aaaaa",
    },
  ])(
    "should return correctly the longest palindrome substring given a string $s with expected result $expectedOutput",
    ({ s, expectedOutput }) => {
      const res = longestPalindrome(s);
      expect(res).toEqual(expectedOutput);
    }
  );
});
