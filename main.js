console.log("Keep doing it when it doesn't make sense.");

let sentence = [
  "The",
  "walrus",
  "danced",
  "through",
  "the",
  "trees",
  "in",
  "the",
  "light",
  "of",
  "the",
  "moon",
];

let word_count = 1;

function addExcitement(theWordArray) {
  let buildMeUp = "";

  for (let i = 0; i < theWordArray.length; i++) {
    /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
    debugger;
    if (word_count % 3 === 0) {
      buildMeUp += `${theWordArray[i]}! `;
      word_count++;
    } else {
      buildMeUp += `${theWordArray[i]} `;
      word_count++;
    }
    // that took about 2 hours to figure out i think
    // ASK ABOUT SWITCH FUNCTION
    // switch (sentence[i]) {
    //   case sentence[i % 3 === 0]:
    //     //   case sentence[5]:
    //     //   case sentence[8]:
    //     //   case sentence[11]:
    //     buildMeUp += `${theWordArray[i]}! `;
    //     break;
    //   default:
    //     buildMeUp += `${theWordArray[i]} `;
    // }
    console.log(buildMeUp);
  }
}

addExcitement(sentence);
