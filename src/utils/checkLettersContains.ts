import objConverter from "./objConverter";
export default function checkContained(
  letterarray: string[],
  currentWord: string[]
): number[] {
  const objLetterArray = objConverter(letterarray);
  const objCurrentWord = objConverter(currentWord);
  const truthyArray = [];
  for (let i = 0; i < 5; i++) {
    if (
      objLetterArray[i].id === objCurrentWord[i].id &&
      objLetterArray[i].letter === objCurrentWord[i].letter
    ) {
      truthyArray.push(2);
    } else if (currentWord.includes(letterarray[i].toLowerCase())) {
      truthyArray.push(1);
    } else {
      truthyArray.push(0);
    }
  }
  return truthyArray;
}
