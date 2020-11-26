function singleLetterCount(str, lett) {
  let finalCount = 0;

  for (let index = 0; index < str.length; index++) {
    if (str[index].toLowerCase() === letter.toLowerCase()) {
      finalCount++;
    }
  }

  return finalCount;
}
