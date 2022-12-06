function caseInsensitiveSearch(sentence, word) {
  if (typeof sentence !== "string" || typeof word !== "string") {
    return "invalid input";
  }
  word = word.toLowerCase();
  return (sentence
    .toLowerCase()
    .split(" ")
    .find(function (item) {
      return item === word;
    })) ? true : false;
}
console.log(caseInsensitiveSearch("abc ad bi", "and"));
